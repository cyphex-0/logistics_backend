import express, { Request, Response } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { requestLogger } from './middleware/request-logger.middleware.js';
import { generalLimiter } from './middleware/rate-limit.middleware.js';
import { errorHandler } from './middleware/error-handler.middleware.js';
import { notFoundHandler } from './middleware/not-found.middleware.js';
import { prisma } from './shared/prisma/client.js';
import { redis } from './shared/utils/cache.js';
import { authRouter } from './modules/auth/auth.routes.js';
import { userRouter } from './modules/user/user.routes.js';
import { zoneRouter } from './modules/zone/zone.routes.js';
import { pricingRouter } from './modules/pricing/pricing.routes.js';
import { shipmentRouter } from './modules/shipment/shipment.routes.js';
import { paymentRouter } from './modules/payment/payment.routes.js';
import { stripeWebhookHandler } from './modules/payment/stripe.webhook.js';

export const app = express();

app.use(requestLogger);
app.use(helmet());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || '*',
    credentials: false
  })
);

app.set('trust proxy', 1);

app.post(
  '/api/v1/payments/stripe/webhook',
  express.raw({ type: 'application/json' }),
  stripeWebhookHandler
);

app.use(express.json({ limit: '10mb' }));

app.use(generalLimiter);

import { adminRouter } from './modules/admin/admin.routes.js';

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/admin', adminRouter);
app.use('/api/v1/zones', zoneRouter);
app.use('/api/v1/pricing', pricingRouter);
app.use('/api/v1/shipments', shipmentRouter);
app.use('/api/v1/payments', paymentRouter);

app.get('/api/v1/health', async (req: Request, res: Response) => {
  let dbStatus = 'disconnected';
  let redisStatus = 'disconnected';

  try {
    await prisma.$queryRaw`SELECT 1`;
    dbStatus = 'connected';
  } catch {
    // Ignore error
  }

  try {
    await redis.ping();
    redisStatus = 'connected';
  } catch {
    // Ignore error
  }

  res.status(200).json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    database: dbStatus,
    redis: redisStatus
  });
});

app.use(notFoundHandler);
app.use(errorHandler);
