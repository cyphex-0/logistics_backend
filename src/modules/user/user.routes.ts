import { Router } from 'express';
import { userController } from './user.controller.js';
import { validate } from '../../middleware/validate.middleware.js';
import { authenticate } from '../../middleware/auth.middleware.js';
import { updateProfileSchema } from './user.validation.js';
import { uploadAvatar } from '../../middleware/upload.middleware.js';

export const userRouter = Router();

userRouter.use(authenticate);

userRouter.get('/me', userController.getProfile);
userRouter.patch('/me', validate(updateProfileSchema), userController.updateProfile);
userRouter.post('/me/avatar', uploadAvatar.single('avatar'), userController.uploadAvatar);

userRouter.get('/me/notifications', userController.listNotifications);
userRouter.patch('/me/notifications/:id/read', userController.markNotificationRead);
