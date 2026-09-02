import { Prisma } from '../../../generated/prisma/index.js';
import { prisma } from '../../shared/prisma/client.js';

export class NotificationRepository {
  async create(data: Prisma.NotificationUncheckedCreateInput, tx?: Prisma.TransactionClient) {
    const client = tx ?? prisma;
    return client.notification.create({ data });
  }

  async findById(id: string) {
    return prisma.notification.findUnique({ where: { id } });
  }

  async markRead(id: string) {
    return prisma.notification.update({
      where: { id },
      data: { isRead: true }
    });
  }

  async listForUser(userId: string, filters: any, pagination: { page: number; limit: number }) {
    const { page, limit } = pagination;
    const skip = (page - 1) * limit;

    const where = { ...filters, userId };

    const [notifications, total] = await Promise.all([
      prisma.notification.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' }
      }),
      prisma.notification.count({ where })
    ]);

    return { notifications, total };
  }
}
