import { Router } from 'express';
import { paymentController } from './payment.controller.js';
import { bkashCallbackHandler } from './bkash.webhook.js';
import { authenticate } from '../../middleware/auth.middleware.js';
import { authorize } from '../../middleware/role.middleware.js';
import { ROLES } from '../../shared/constants/roles.js';

export const paymentRouter = Router();

// bKash callback is a GET request sent from frontend/bKash redirect
paymentRouter.get('/bkash/callback', bkashCallbackHandler);

// Public redirects for gateway success/cancel pages
paymentRouter.get('/success', paymentController.paymentSuccess);
paymentRouter.get('/cancel', paymentController.paymentCancel);

// Use auth middleware for the rest
paymentRouter.use(authenticate);

// Initiate payment (Customer only)
paymentRouter.post('/initiate', authorize(ROLES.CUSTOMER), paymentController.initiate);

// Refund payment (Admin only)
paymentRouter.post('/refund', authorize(ROLES.ADMIN), paymentController.refund);
