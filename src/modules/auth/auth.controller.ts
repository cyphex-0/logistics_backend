import { Request, Response, NextFunction } from 'express';
import { authService } from './auth.service.js';
import { sendSuccess } from '../../shared/utils/response.js';

export class AuthController {
  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await authService.register(req.body);
      return sendSuccess(res, 201, 'Registration successful', result);
    } catch (e) {
      next(e);
    }
  }

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await authService.login(req.body);
      return sendSuccess(res, 200, 'Login successful', result);
    } catch (e) {
      next(e);
    }
  }

  async googleAuth(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await authService.googleAuth(req.body.idToken);
      return sendSuccess(res, 200, 'Google login successful', result);
    } catch (e) {
      next(e);
    }
  }

  async refresh(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await authService.refresh(req.body.refreshToken);
      return sendSuccess(res, 200, 'Token refreshed', {
        accessToken: result.accessToken,
        refreshToken: result.refreshToken
      });
    } catch (e) {
      next(e);
    }
  }

  async logout(req: Request, res: Response, next: NextFunction) {
    try {
      const token = req.headers.authorization!.split(' ')[1];
      await authService.logout(req.user!.id, token);
      return sendSuccess(res, 200, 'Logged out successfully');
    } catch (e) {
      next(e);
    }
  }
}

export const authController = new AuthController();
