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

  async uploadAvatar(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.file) {
        return res.status(400).json({ success: false, message: 'No image file provided' });
      }
      
      const baseUrl = process.env.API_BASE_URL || (req.protocol + '://' + req.get('host'));
      const avatarUrl = `${baseUrl}/uploads/${req.file.filename}`;
      
      // Update the user with the new avatar URL
      const result = await userService.updateProfile(req.user!.id, req.user!.role, { avatar: avatarUrl });
      
      return sendSuccess(res, 200, 'Avatar uploaded successfully', result);
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
      const result = await userService.markNotificationRead(req.params.id as string, req.user!.id);
      return sendSuccess(res, 200, 'Notification marked as read', result);
    } catch (e) {
      next(e);
    }
  }
}

export const userController = new UserController();
