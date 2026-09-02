import { Router } from 'express';
import { adminController } from './admin.controller.js';
import { validate } from '../../middleware/validate.middleware.js';
import { listUsersSchema, updateRoleSchema } from './admin.validation.js';
import { authenticate } from '../../middleware/auth.middleware.js';
import { authorize } from '../../middleware/role.middleware.js';
import { ROLES } from '../../shared/constants/roles.js';

export const adminRouter = Router();

// All routes require ADMIN role
adminRouter.use(authenticate, authorize(ROLES.ADMIN));

// Dashboard
adminRouter.get('/dashboard-stats', adminController.dashboardStats);

// User Management
adminRouter.get('/users', validate(listUsersSchema), adminController.listUsers);
adminRouter.get('/users/:id', adminController.getUser);
adminRouter.patch('/users/:id/role', validate(updateRoleSchema), adminController.updateUserRole);
adminRouter.delete('/users/:id', adminController.softDeleteUser);

// Audit Logs
adminRouter.get('/audit-logs', adminController.listAuditLogs);
