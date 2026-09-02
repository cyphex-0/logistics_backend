import { Prisma } from '../../../generated/prisma/index.js';
import { prisma } from '../../shared/prisma/client.js';

export class DeliveryAttemptRepository {
  async create(data: Prisma.DeliveryAttemptUncheckedCreateInput, tx?: Prisma.TransactionClient) {
    const client = tx ?? prisma;
    return client.deliveryAttempt.create({ data });
  }

  async countByShipmentId(shipmentId: string, tx?: Prisma.TransactionClient): Promise<number> {
    const client = tx ?? prisma;
    return client.deliveryAttempt.count({ where: { shipmentId } });
  }
}

export const deliveryAttemptRepository = new DeliveryAttemptRepository();
