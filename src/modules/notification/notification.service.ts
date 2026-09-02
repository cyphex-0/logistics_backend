import { NotificationRepository } from './notification.repository.js';
import { AuthorizationError, NotFoundError } from '../../shared/errors/index.js';
import { buildMeta } from '../../shared/utils/pagination.js';
import { Prisma } from '../../generated/prisma/index.js';

export class NotificationService {
  constructor(private notificationRepository: NotificationRepository) {}

  async create(
    input: {
      userId: string;
      type: string;
      title: string;
      message: string;
      metadata?: any;
    },
    tx?: Prisma.TransactionClient
  ) {
    return this.notificationRepository.create(input, tx);
  }

  async listForUser(userId: string, filters: any, pagination: { page: number; limit: number }) {
    const { notifications, total } = await this.notificationRepository.listForUser(
      userId,
      filters,
      pagination
    );
    const meta = buildMeta(total, pagination.page, pagination.limit);
    return { notifications, meta };
  }

  async markRead(notificationId: string, requestingUserId: string) {
    const notification = await this.notificationRepository.findById(notificationId);

    if (!notification) {
      throw new NotFoundError('Notification not found');
    }

    if (notification.userId !== requestingUserId) {
      throw new AuthorizationError('You do not have permission to mark this notification as read');
    }

    return this.notificationRepository.markRead(notificationId);
  }
}

export const notificationService = new NotificationService(new NotificationRepository());
