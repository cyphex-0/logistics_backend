import { Prisma } from '../../generated/prisma/index.js';
import { prisma } from '../../shared/prisma/client.js';

export class TrackingRepository {
  async listByShipmentId(shipmentId: string) {
    return prisma.trackingEvent.findMany({
      where: { shipmentId },
      orderBy: { createdAt: 'desc' }
    });
  }

  async create(data: Prisma.TrackingEventUncheckedCreateInput, tx?: Prisma.TransactionClient) {
    const client = tx ?? prisma;
    return client.trackingEvent.create({ data });
  }
}

export const trackingRepository = new TrackingRepository();
