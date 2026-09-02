import { Router } from 'express';
import { authController } from './auth.controller.js';
import { validate } from '../../middleware/validate.middleware.js';
import { authenticate } from '../../middleware/auth.middleware.js';
import { authLimiter } from '../../middleware/rate-limit.middleware.js';
import { registerSchema, loginSchema, googleAuthSchema, refreshTokenSchema } from './auth.validation.js';

export const authRouter = Router();

authRouter.use(authLimiter);

authRouter.post('/register', validate(registerSchema), authController.register);
authRouter.post('/login', validate(loginSchema), authController.login);
authRouter.post('/google', validate(googleAuthSchema), authController.googleAuth);
authRouter.post('/refresh-token', validate(refreshTokenSchema), authController.refresh);
authRouter.post('/logout', authenticate, authController.logout);
