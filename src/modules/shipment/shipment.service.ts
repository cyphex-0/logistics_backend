import { z } from 'zod';

import { createShipmentSchema, updateShipmentSchema, updateStatusSchema } from './shipment.validation.js';
import { Prisma } from '../../generated/prisma/index.js';
import { shipmentRepository } from './shipment.repository.js';
import { pricingService } from '../pricing/pricing.service.js';
import { zoneService } from '../zone/zone.service.js';
import { trackingService } from '../tracking/tracking.service.js';
import { auditService } from '../audit/audit.service.js';
import { notificationService } from '../notification/notification.service.js';
import { AUDIT_ACTIONS, AUDIT_ENTITIES } from '../../shared/constants/audit-actions.js';
import { NOTIFICATION_TYPES } from '../../shared/constants/notification-types.js';
import { isValidTransition } from './shipment.state-machine.js';
import { deliveryAttemptRepository } from './delivery-attempt.repository.js';
import {
  NotFoundError,
  AuthorizationError,
  BusinessRuleError,
  ConflictError
} from '../../shared/errors/index.js';
import { ROLES } from '../../shared/constants/roles.js';
import { ShipmentStatus, DeliveryAttemptStatus } from '../../generated/prisma/index.js';
import crypto from 'crypto';

export class ShipmentService {
  private generateTrackingNumber(): string {
    const date = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    const random = crypto.randomBytes(3).toString('hex').toUpperCase().substring(0, 5);
    return `CLG-${date}-${random}`;
  }

  async create(customerId: string, data: z.infer<typeof createShipmentSchema>['body']) {
    const zones = await zoneService.list();
    const originZone = zones.find((z: Prisma.DeliveryZoneGetPayload<{}>) => z.id === data.originZoneId && z.isActive);
    const destZone = zones.find((z: Prisma.DeliveryZoneGetPayload<{}>) => z.id === data.destinationZoneId && z.isActive);

    if (!originZone || !destZone) {
      console.error('ZONES FETCHED:', zones);
      console.error('LOOKING FOR:', data.originZoneId, data.destinationZoneId);
      throw new BusinessRuleError('One or both delivery zones are invalid or inactive');
    }

    const { price } = await pricingService.calculate(
      data.destinationZoneId,
      (data.parcel?.weight || 0),
      data.serviceType
    );

    let attempt = 0;
    while (attempt < 5) {
      const trackingNumber = this.generateTrackingNumber();
      try {
        const shipmentData = {
          trackingNumber,
          customerId,
          originAddress: data.originAddress,
          originCity: data.originCity,
          originZoneId: data.originZoneId,
          destinationAddress: data.destinationAddress,
          destinationCity: data.destinationCity,
          destinationZoneId: data.destinationZoneId,
          recipientName: data.recipientName,
          recipientPhone: data.recipientPhone,
          serviceType: data.serviceType,
          estimatedPrice: price,
          notes: data.notes
        };

        const parcelData = {
          weight: data.parcel.weight,
          length: data.parcel.length,
          width: data.parcel.width,
          height: data.parcel.height,
          description: data.parcel.description,
          isFragile: data.parcel.isFragile || false
        };

        const trackingEventData = {
          status: ShipmentStatus.PENDING,
          description: 'Shipment created and is pending payment',
          actorId: customerId
        };

        const shipment = await shipmentRepository.create(
          shipmentData,
          parcelData,
          trackingEventData
        );
        return shipment;
      } catch (err: unknown) {
        if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === 'P2002') {
          attempt++;
          continue;
        }
        throw err;
      }
    }
    throw new ConflictError('Failed to generate unique tracking number after 5 attempts');
  }

  async getById(id: string, user: { id: string; email: string; role: string }) {
    const shipment = await shipmentRepository.findById(id);
    if (!shipment) {
      throw new NotFoundError('Shipment not found');
    }

    if (user.role === ROLES.CUSTOMER && shipment.customerId !== user.id) {
      throw new AuthorizationError('You do not have permission to view this shipment');
    }
    if (user.role === ROLES.COURIER && shipment.courierId !== user.id) {
      throw new AuthorizationError('You do not have permission to view this shipment');
    }

    return shipment;
  }

  async list(user: { id: string; email: string; role: string }, query: Record<string, unknown>) {
    const page = parseInt(query.page as string) || 1;
    const limit = Math.min(parseInt(query.limit as string) || 10, 50);

    const filters: Prisma.ShipmentWhereInput = {};
    if (user.role === ROLES.CUSTOMER) {
      filters.customerId = user.id;
    } else if (user.role === ROLES.COURIER) {
      filters.courierId = user.id;
    }

    if (query.status) {
      filters.status = query.status as ShipmentStatus;
    }
    if (query.trackingNumber) {
      filters.trackingNumber = { contains: query.trackingNumber as string, mode: 'insensitive' };
    }

    filters.deletedAt = null;

    return shipmentRepository.list(filters, page, limit);
  }

  async getTrackingTimeline(id: string, user: { id: string; email: string; role: string }) {
    await this.getById(id, user);
    return trackingService.getTimeline(id, user.role);
  }

  async updateStatus(id: string, user: { id: string; email: string; role: string }, data: z.infer<typeof updateStatusSchema>['body']) {
    const shipment = await this.getById(id, user);

    if (!isValidTransition(shipment.status as ShipmentStatus, data.status)) {
      throw new BusinessRuleError(
        `Invalid state transition from ${shipment.status} to ${data.status}`
      );
    }

    if (
      data.status === ShipmentStatus.OUT_FOR_DELIVERY ||
      data.status === ShipmentStatus.FAILED_DELIVERY ||
      data.status === ShipmentStatus.DELIVERED
    ) {
      const attemptCount = await deliveryAttemptRepository.countByShipmentId(id);
      if (attemptCount >= 3) {
        throw new BusinessRuleError('Maximum delivery attempts (3) reached');
      }
    }

    const trackingEventData = {
      status: data.status,
      description: data.description,
      location: data.location,
      actorId: user.id
    };

    let deliveryAttemptData = undefined;
    if (
      data.status === ShipmentStatus.FAILED_DELIVERY ||
      data.status === ShipmentStatus.DELIVERED
    ) {
      deliveryAttemptData = {
        status:
          data.status === ShipmentStatus.DELIVERED
            ? DeliveryAttemptStatus.SUCCESS
            : DeliveryAttemptStatus.FAILED,
        failureReason: data.failureReason,
        notes: data.description,
        courierId: shipment.courierId!
      };
    }

    const updatedShipment = await shipmentRepository.updateStatus(
      id,
      data.status,
      shipment.updatedAt,
      trackingEventData,
      deliveryAttemptData
    );

    if (!updatedShipment) {
      throw new ConflictError(
        'Concurrent modification detected during status update. Please try again.'
      );
    }

    await auditService.log({
      entity: AUDIT_ENTITIES.SHIPMENT,
      entityId: id,
      action: AUDIT_ACTIONS.SHIPMENT_STATUS_CHANGED,
      actorId: user.id,
      oldValue: { status: shipment.status },
      newValue: { status: data.status }
    });

    await notificationService.create({
      userId: shipment.customerId,
      type: NOTIFICATION_TYPES.SHIPMENT_UPDATE,
      title: 'Shipment Status Updated',
      message: `Your shipment ${shipment.trackingNumber} is now ${data.status}`,
      referenceId: id,
      referenceType: 'SHIPMENT'
    });

    return updatedShipment;
  }

  async assignCourier(id: string, adminId: string, courierId: string) {
    const shipment = await shipmentRepository.findById(id);
    if (!shipment) throw new NotFoundError('Shipment not found');

    if (
      shipment.status !== ShipmentStatus.CONFIRMED &&
      shipment.status !== ShipmentStatus.PICKUP_ASSIGNED
    ) {
      throw new BusinessRuleError('Shipment must be CONFIRMED or PICKUP_ASSIGNED to be assigned');
    }

    // Verify courier exists and is active etc.
    // For now we assume courier exists (Prisma FK enforces it).
    // Validate serviceArea vs originZone.name
    // A strict implementation would fetch the User model, but we don't have it directly.
    // Let's rely on Prisma querying the user.
    const { prisma } = await import('../../shared/prisma/client.js');
    const courier = await prisma.user.findUnique({ where: { id: courierId, role: ROLES.COURIER } });
    if (!courier || !courier.isActive) {
      throw new BusinessRuleError('Courier is invalid or inactive');
    }

    if (courier.serviceArea?.toLowerCase() !== shipment.originZone.name.toLowerCase()) {
      throw new BusinessRuleError('Courier service area does not match origin zone');
    }

    const trackingEventData = {
      status: ShipmentStatus.PICKUP_ASSIGNED,
      description: 'A courier has been assigned for pickup',
      actorId: adminId
    };

    const action = shipment.courierId
      ? AUDIT_ACTIONS.COURIER_REASSIGNED
      : AUDIT_ACTIONS.COURIER_ASSIGNED;

    const updatedShipment = await shipmentRepository.assignCourier(
      id,
      courierId,
      shipment.updatedAt,
      trackingEventData
    );
    if (!updatedShipment) {
      throw new ConflictError(
        'Concurrent modification detected during assignment. Please try again.'
      );
    }

    await auditService.log({
      entity: AUDIT_ENTITIES.SHIPMENT,
      entityId: id,
      action,
      actorId: adminId,
      oldValue: { courierId: shipment.courierId },
      newValue: { courierId }
    });

    await notificationService.create({
      userId: courierId,
      type: NOTIFICATION_TYPES.NEW_ASSIGNMENT,
      title: 'New Pickup Assigned',
      message: `You have been assigned to pick up shipment ${shipment.trackingNumber}`,
      referenceId: id,
      referenceType: 'SHIPMENT'
    });

    return updatedShipment;
  }

  async cancel(id: string, user: { id: string; email: string; role: string }, reason: string) {
    const shipment = await this.getById(id, user);

    if (shipment.status !== ShipmentStatus.PENDING) {
      throw new BusinessRuleError(
        'Only PENDING shipments can be cancelled directly by the user (Pre-payment cancel). Paid cancellations are processed via support.'
      );
    }

    const trackingEventData = {
      status: ShipmentStatus.CANCELLED,
      description: `Shipment cancelled. Reason: ${reason}`,
      actorId: user.id
    };

    const updatedShipment = await shipmentRepository.updateStatus(
      id,
      ShipmentStatus.CANCELLED,
      shipment.updatedAt,
      trackingEventData
    );

    await auditService.log({
      entity: AUDIT_ENTITIES.SHIPMENT,
      entityId: id,
      action: AUDIT_ACTIONS.SHIPMENT_CANCELLED,
      actorId: user.id,
      newValue: { status: ShipmentStatus.CANCELLED, reason }
    });

    return updatedShipment;
  }

  async updateShipment(id: string, user: { id: string; email: string; role: string }, data: z.infer<typeof updateShipmentSchema>['body']) {
    const shipment = await this.getById(id, user);
    if (shipment.status !== ShipmentStatus.PENDING) {
      throw new BusinessRuleError('Only PENDING shipments can be updated');
    }

    let estimatedPrice = shipment.estimatedPrice;

    // Check if price needs recalculation
    const destZone = data.destinationZoneId || shipment.destinationZoneId;
    const weight = Number(data.parcel?.weight || shipment.parcel?.weight || 0);
    const serviceType = data.serviceType || shipment.serviceType;

    if (data.destinationZoneId || (data.parcel && data.parcel.weight) || data.serviceType) {
      const result = await pricingService.calculate(destZone, weight, serviceType);
      estimatedPrice = new (await import('../../generated/prisma/index.js')).Prisma.Decimal(
        result.price
      );
    }

    const shipmentData: Prisma.ShipmentUpdateInput = {};
    if (data.originAddress) shipmentData.originAddress = data.originAddress;
    if (data.originCity) shipmentData.originCity = data.originCity;
    if (data.originZoneId) shipmentData.originZone = { connect: { id: data.originZoneId } };
    if (data.destinationAddress) shipmentData.destinationAddress = data.destinationAddress;
    if (data.destinationCity) shipmentData.destinationCity = data.destinationCity;
    if (data.destinationZoneId) shipmentData.destinationZone = { connect: { id: data.destinationZoneId } };
    if (data.recipientName) shipmentData.recipientName = data.recipientName;
    if (data.recipientPhone) shipmentData.recipientPhone = data.recipientPhone;
    if (data.serviceType) shipmentData.serviceType = data.serviceType;
    if (data.notes) shipmentData.notes = data.notes;

    if (Object.keys(shipmentData).length > 0) {
      shipmentData.estimatedPrice = estimatedPrice;
    }

    const updatedShipment = await shipmentRepository.update(id, shipmentData, data.parcel);
    return updatedShipment;
  }

  async softDeleteShipment(id: string, user: { id: string; email: string; role: string }) {
    const shipment = await shipmentRepository.findById(id);
    if (!shipment) throw new NotFoundError('Shipment not found');

    if (
      shipment.status !== ShipmentStatus.PENDING &&
      shipment.status !== ShipmentStatus.CANCELLED
    ) {
      throw new BusinessRuleError('Only PENDING or CANCELLED shipments can be deleted');
    }

    const result = await shipmentRepository.softDelete(id);

    // audit log
    await auditService.log({
      entity: AUDIT_ENTITIES.SHIPMENT,
      entityId: id,
      action: AUDIT_ACTIONS.SHIPMENT_DELETED,
      actorId: user.id
    });

    return result;
  }
}

export const shipmentService = new ShipmentService();
