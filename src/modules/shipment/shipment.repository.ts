import { Prisma, ShipmentStatus } from '../../generated/prisma/index.js';
import { prisma } from '../../shared/prisma/client.js';

export class ShipmentRepository {
  async create(
    shipmentData: Prisma.ShipmentUncheckedCreateInput,
    parcelData: Omit<Prisma.ParcelUncheckedCreateInput, 'shipmentId'>,
    trackingEventData: Omit<Prisma.TrackingEventUncheckedCreateInput, 'shipmentId'>
  ) {
    return prisma.$transaction(async (tx) => {
      const shipment = await tx.shipment.create({
        data: shipmentData
      });

      await tx.parcel.create({
        data: {
          ...parcelData,
          shipmentId: shipment.id
        }
      });

      await tx.trackingEvent.create({
        data: {
          ...trackingEventData,
          shipmentId: shipment.id
        }
      });

      return shipment;
    });
  }

  async findById(id: string) {
    return prisma.shipment.findUnique({
      where: { id },
      include: {
        parcel: true,
        originZone: true,
        destinationZone: true,
        customer: { select: { id: true, name: true, phone: true } },
        courier: { select: { id: true, name: true, phone: true } }
      }
    });
  }

  async list(filters: Prisma.ShipmentWhereInput, page: number, limit: number) {
    const skip = (page - 1) * limit;
    
    const [total, data] = await Promise.all([
      prisma.shipment.count({ where: filters }),
      prisma.shipment.findMany({
        where: filters,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
        include: {
          parcel: true,
          customer: { select: { name: true } },
          courier: { select: { name: true } }
        }
      })
    ]);

    return { total, page, limit, data };
  }

  async updateStatus(
    id: string,
    newStatus: ShipmentStatus,
    trackingEventData: Omit<Prisma.TrackingEventUncheckedCreateInput, 'shipmentId'>,
    deliveryAttemptData?: Omit<Prisma.DeliveryAttemptUncheckedCreateInput, 'shipmentId' | 'attemptNumber'>
  ) {
    return prisma.$transaction(async (tx) => {
      const shipment = await tx.shipment.update({
        where: { id },
        data: { status: newStatus }
      });

      await tx.trackingEvent.create({
        data: {
          ...trackingEventData,
          shipmentId: id
        }
      });

      if (deliveryAttemptData && shipment.courierId) {
        const attemptCount = await tx.deliveryAttempt.count({
          where: { shipmentId: id }
        });

        await tx.deliveryAttempt.create({
          data: {
            ...deliveryAttemptData,
            shipmentId: id,
            courierId: shipment.courierId,
            attemptNumber: attemptCount + 1
          }
        });
      }

      return shipment;
    });
  }

  async assignCourier(
    id: string,
    courierId: string,
    currentUpdatedAt: Date,
    trackingEventData: Omit<Prisma.TrackingEventUncheckedCreateInput, 'shipmentId'>
  ) {
    return prisma.$transaction(async (tx) => {
      const result = await tx.shipment.updateMany({
        where: { id, updatedAt: currentUpdatedAt },
        data: { courierId, status: ShipmentStatus.PICKUP_ASSIGNED }
      });

      if (result.count === 0) {
        return null;
      }

      await tx.trackingEvent.create({
        data: {
          ...trackingEventData,
          shipmentId: id
        }
      });

      return tx.shipment.findUnique({ where: { id } });
    });
  }

  async update(id: string, shipmentData: Prisma.ShipmentUpdateInput, parcelData?: Prisma.ParcelUpdateInput) {
    return prisma.$transaction(async (tx) => {
      const shipment = await tx.shipment.update({
        where: { id },
        data: shipmentData
      });

      if (parcelData) {
        await tx.parcel.updateMany({
          where: { shipmentId: id },
          data: parcelData
        });
      }

      return shipment;
    });
  }

  async softDelete(id: string) {
    return prisma.shipment.update({
      where: { id },
      data: { deletedAt: new Date() }
    });
  }
}

export const shipmentRepository = new ShipmentRepository();
