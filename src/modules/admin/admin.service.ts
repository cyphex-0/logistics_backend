import { userRepository } from '../user/user.repository.js';
import { auditService } from '../audit/audit.service.js';
import { prisma } from '../../shared/prisma/client.js';
import { getOrSetCache } from '../../shared/utils/cache.js';
import { NotFoundError, BusinessRuleError } from '../../shared/errors/index.js';
import { Role, ShipmentStatus } from '../../generated/prisma/index.js';
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

  async updateUserRole(id: string, role: Role, adminId: string) {
    const user = await userRepository.findById(id);
    if (!user) throw new NotFoundError('User not found');

    if (user.role === role) {
      const publicUser = await userRepository.findPublicById(id);
      return publicUser;
    }

    const updatedUser = await userRepository.updateRole(id, role);

    await auditService.log({
      action: AUDIT_ACTIONS.USER_ROLE_UPDATED,
      entity: AUDIT_ENTITIES.USER,
      entityId: id,
      actorId: adminId,
      oldValue: { role: user.role },
      newValue: { role }
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
}

export const adminService = new AdminService();
