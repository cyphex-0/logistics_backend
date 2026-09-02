import { Prisma } from '../../../generated/prisma/index.js';
import { prisma } from '../../shared/prisma/client.js';

export class ZoneRepository {
  async list() {
    return prisma.deliveryZone.findMany({
      where: { deletedAt: null },
      orderBy: { name: 'asc' }
    });
  }

  async findById(id: string) {
    return prisma.deliveryZone.findFirst({
      where: { id, deletedAt: null }
    });
  }

  async create(data: Prisma.DeliveryZoneCreateInput, tx?: Prisma.TransactionClient) {
    const client = tx ?? prisma;
    return client.deliveryZone.create({ data });
  }

  async update(id: string, data: Prisma.DeliveryZoneUpdateInput, tx?: Prisma.TransactionClient) {
    const client = tx ?? prisma;
    return client.deliveryZone.update({
      where: { id },
      data
    });
  }

  async delete(id: string, tx?: Prisma.TransactionClient) {
    const client = tx ?? prisma;
    return client.deliveryZone.update({
      where: { id },
      data: { deletedAt: new Date() }
    });
  }

  async isReferenced(id: string): Promise<boolean> {
    const count = await prisma.shipment.count({
      where: {
        OR: [
          { originZoneId: id },
          { destinationZoneId: id }
        ]
      }
    });
    return count > 0;
  }
}

export const zoneRepository = new ZoneRepository();
