import { Prisma } from '@prisma/client';
import { userRepository } from './user.repository.js';
import { notificationService } from '../notification/notification.service.js';
import { NotFoundError } from '../../shared/errors/index.js';
import { ROLES } from '../../shared/constants/roles.js';

export class UserService {
  async getProfile(userId: string) {
    const user = await userRepository.findPublicById(userId);
    if (!user) {
      throw new NotFoundError('User not found');
    }
    return user;
  }

  async updateProfile(userId: string, role: string, data: Prisma.UserUpdateInput) {
    const updateData = { ...data };

    if (role === ROLES.CUSTOMER) {
      delete updateData.serviceArea;
      delete updateData.isAvailable;
    }

    return userRepository.updateProfile(userId, updateData);
  }

  async listNotifications(userId: string, query: Record<string, unknown>) {
    const page = parseInt(query.page as string) || 1;
    const limit = parseInt(query.limit as string) || 10;
    const isRead = query.isRead !== undefined ? query.isRead === 'true' : undefined;

    const filters: Prisma.NotificationWhereInput = {};
    if (isRead !== undefined) {
      filters.isRead = isRead;
    }

    return notificationService.listForUser(userId, filters, { page, limit });
  }

  async markNotificationRead(notificationId: string, userId: string) {
    return notificationService.markRead(notificationId, userId);
  }
}

export const userService = new UserService();
