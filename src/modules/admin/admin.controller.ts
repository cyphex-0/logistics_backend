import { Request, Response, NextFunction } from 'express';
import { adminService } from './admin.service.js';
import { sendSuccess } from '../../shared/utils/response.js';

export class AdminController {
  async listUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await adminService.listUsers(req.query);
      return sendSuccess(res, 200, 'Users retrieved successfully', result);
    } catch (e) {
      next(e);
    }
  }

  async getUser(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await adminService.getUser(req.params.id as string);
      return sendSuccess(res, 200, 'User retrieved successfully', user);
    } catch (e) {
      next(e);
    }
  }

  async updateUserRole(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await adminService.updateUserRole(
        req.params.id as string,
        req.body.role,
        req.user!.id
      );
      return sendSuccess(res, 200, 'User role updated', result);
    } catch (e) {
      next(e);
    }
  }

  async softDeleteUser(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await adminService.softDeleteUser(req.params.id as string, req.user!.id);
      return sendSuccess(res, 200, result.message);
    } catch (e) {
      next(e);
    }
  }

  async dashboardStats(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await adminService.dashboardStats();
      return sendSuccess(res, 200, 'Dashboard stats retrieved', result);
    } catch (e) {
      next(e);
    }
  }

  async listAuditLogs(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await adminService.listAuditLogs(req.query);
      return sendSuccess(res, 200, 'Audit logs retrieved', result);
    } catch (e) {
      next(e);
    }
  }
}

export const adminController = new AdminController();
