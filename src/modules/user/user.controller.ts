import { Request, Response, NextFunction } from 'express';
import { userService } from './user.service.js';
import { sendSuccess } from '../../shared/utils/response.js';

export class UserController {
  async getProfile(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await userService.getProfile(req.user!.id);
      return sendSuccess(res, 200, 'Profile retrieved successfully', result);
    } catch (e) {
      next(e);
    }
  }

  async updateProfile(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await userService.updateProfile(req.user!.id, req.user!.role, req.body);
      return sendSuccess(res, 200, 'Profile updated successfully', result);
    } catch (e) {
      next(e);
    }
  }

  async listNotifications(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await userService.listNotifications(req.user!.id, req.query);
      return sendSuccess(res, 200, 'Notifications retrieved successfully', result);
    } catch (e) {
      next(e);
    }
  }

  async markNotificationRead(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await userService.markNotificationRead(req.params.id, req.user!.id);
      return sendSuccess(res, 200, 'Notification marked as read', result);
    } catch (e) {
      next(e);
    }
  }
}

export const userController = new UserController();
