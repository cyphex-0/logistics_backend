import { userRepository } from '../user/user.repository.js';
import { auditService } from '../audit/audit.service.js';
import { prisma } from '../../shared/prisma/client.js';
import { getOrSetCache } from '../../shared/utils/cache.js';
import { NotFoundError, BusinessRuleError } from '../../shared/errors/index.js';
import { Role, ShipmentStatus } from '@prisma/client';
import { AUDIT_ENTITIES, AUDIT_ACTIONS } from '../../shared/constants/audit-actions.js';

export class AdminService {
  async listUsers(query: Record<string, unknown>) {
    return userRepository.findManyAdmin(query);
  }

  async getUser(id: string) {
    const user = await userRepository.findPublicById(id);
    if (!user) throw new NotFoundError('User not found');
    return user;
  }

  async updateUserRole(id: string, role: Role, adminId: string, serviceArea?: string) {
    const user = await userRepository.findById(id);
    if (!user) throw new NotFoundError('User not found');

    if (user.role === role && user.serviceArea === serviceArea) {
      const publicUser = await userRepository.findPublicById(id);
      return publicUser;
    }

    const updatedUser = await userRepository.updateRole(id, role, serviceArea);

    await auditService.log({
      action: AUDIT_ACTIONS.USER_ROLE_UPDATED,
      entity: AUDIT_ENTITIES.USER,
      entityId: id,
      actorId: adminId,
      oldValue: { role: user.role, serviceArea: user.serviceArea },
      newValue: { role, serviceArea }
    });

    return updatedUser;
  }

  async softDeleteUser(id: string, adminId: string) {
    if (id === adminId) {
      throw new BusinessRuleError('Admin cannot delete themselves');
    }

    const user = await userRepository.findById(id);
    if (!user) throw new NotFoundError('User not found');
    if (!user.isActive) throw new BusinessRuleError('User is already deleted');

    const activeShipments = await userRepository.countActiveShipmentsForUser(id);
    if (activeShipments > 0) {
      throw new BusinessRuleError('Cannot delete user with active shipments');
    }

    await userRepository.softDelete(id);

    await auditService.log({
      action: AUDIT_ACTIONS.USER_DEACTIVATED,
      entity: AUDIT_ENTITIES.USER,
      entityId: id,
      actorId: adminId
    });

    return { message: 'User deleted successfully' };
  }

  async dashboardStats() {
    return getOrSetCache('admin_dashboard_stats', 300, async () => {
      const [
        totalUsers,
        totalCouriers,
        totalShipments,
        pendingShipments,
        inTransitShipments,
        deliveredShipments,
        totalRevenueData
      ] = await Promise.all([
        prisma.user.count({ where: { role: Role.CUSTOMER } }),
        prisma.user.count({ where: { role: Role.COURIER } }),
        prisma.shipment.count(),
        prisma.shipment.count({ where: { status: ShipmentStatus.PENDING } }),
        prisma.shipment.count({ where: { status: ShipmentStatus.IN_TRANSIT } }),
        prisma.shipment.count({ where: { status: ShipmentStatus.DELIVERED } }),
        prisma.payment.aggregate({
          _sum: { amount: true },
          where: { status: 'PAID' }
        })
      ]);

      return {
        totalCustomers: totalUsers,
        totalCouriers,
        totalShipments,
        shipmentsByStatus: {
          pending: pendingShipments,
          inTransit: inTransitShipments,
          delivered: deliveredShipments
        },
        totalRevenue: totalRevenueData._sum.amount || 0
      };
    });
  }

  async listAuditLogs(query: Record<string, unknown>) {
    const filters: Record<string, unknown> = {};
    if (query.entity) filters.entity = query.entity;
    if (query.action) filters.action = query.action;
    if (query.actorId) filters.actorId = query.actorId;

    const page = Math.max(1, Number(query.page) || 1);
    const limit = Math.min(50, Math.max(1, Number(query.limit) || 10));

    const sortBy = ['createdAt', 'action', 'entity'].includes(query.sortBy as string)
      ? (query.sortBy as string)
      : 'createdAt';
    const sortOrder = query.sortOrder === 'asc' ? 'asc' : 'desc';

    return auditService.list(
      filters,
      { page, limit },
      { sortBy, sortOrder }
    );
  }
  async getRevenueReport(days: number) {
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);

    const payments = await prisma.payment.findMany({
      where: {
        status: 'PAID',
        createdAt: { gte: startDate }
      },
      select: { amount: true, createdAt: true }
    });

    const grouped = payments.reduce((acc, curr) => {
      const date = curr.createdAt.toISOString().split('T')[0];
      acc[date] = (acc[date] || 0) + Number(curr.amount);
      return acc;
    }, {} as Record<string, number>);

    return Object.entries(grouped)
      .map(([date, revenue]) => ({ date, revenue }))
      .sort((a, b) => a.date.localeCompare(b.date));
  }

  async getCourierPerformance() {
    const couriers = await prisma.user.findMany({
      where: { role: Role.COURIER },
      select: {
        id: true,
        name: true,
        serviceArea: true,
        shipmentsAsCourier: {
          select: {
            id: true,
            status: true,
            createdAt: true,
            trackingEvents: {
              where: { status: 'DELIVERED' },
              select: { createdAt: true },
              take: 1
            }
          }
        }
      }
    });

    return couriers.map(c => {
      const total = c.shipmentsAsCourier.length;
      const delivered = c.shipmentsAsCourier.filter(s => s.status === 'DELIVERED').length;
      const failed = c.shipmentsAsCourier.filter(s => s.status === 'FAILED_DELIVERY' || s.status === 'RETURNED').length;
      
      let totalDeliveryTime = 0;
      let deliveryCount = 0;

      c.shipmentsAsCourier.forEach(s => {
        if (s.status === 'DELIVERED' && s.trackingEvents.length > 0) {
          const deliveredAt = s.trackingEvents[0].createdAt;
          const timeDiffHours = (deliveredAt.getTime() - s.createdAt.getTime()) / (1000 * 60 * 60);
          totalDeliveryTime += timeDiffHours;
          deliveryCount++;
        }
      });

      const avgDeliveryTimeHours = deliveryCount > 0 ? (totalDeliveryTime / deliveryCount).toFixed(1) : null;

      return {
        id: c.id,
        name: c.name,
        serviceArea: c.serviceArea,
        totalAssigned: total,
        delivered,
        failed,
        avgDeliveryTimeHours
      };
    });
  }

  async exportData(type: string, startDate?: Date, endDate?: Date) {
    const dateFilter = startDate && endDate ? { createdAt: { gte: startDate, lte: endDate } } : undefined;

    switch (type) {
      case 'shipments':
        return prisma.shipment.findMany({
          where: dateFilter,
          include: { courier: { select: { name: true } }, originZone: { select: { name: true } }, destinationZone: { select: { name: true } } }
        });
      case 'users':
        return prisma.user.findMany({
          where: dateFilter,
          select: { id: true, name: true, email: true, role: true, serviceArea: true, isActive: true, createdAt: true }
        });
      case 'payments':
        return prisma.payment.findMany({
          where: dateFilter,
          select: { id: true, shipmentId: true, amount: true, currency: true, status: true, method: true, transactionId: true, paidAt: true, createdAt: true }
        });
      case 'audit-logs':
        return prisma.auditLog.findMany({
          where: dateFilter,
          include: { actor: { select: { name: true, email: true } } }
        });
      default:
        throw new BusinessRuleError('Invalid export type');
    }
  }
}

export const adminService = new AdminService();
