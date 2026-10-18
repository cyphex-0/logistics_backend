import { Router } from 'express';
import { supportController } from './support.controller.js';
import { supportLimiter } from './support.limiter.js';
import { validate } from '../../middleware/validate.middleware.js';
import { supportChatSchema } from './support.validation.js';

export const supportRouter = Router();

supportRouter.post(
  '/chat',
  supportLimiter,
  validate(supportChatSchema),
  supportController.handleChat
);
