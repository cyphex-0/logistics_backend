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
import { supportRouter } from './modules/support/support.routes.js';
import { stripeWebhookHandler } from './modules/payment/stripe.webhook.js';

export const app = express();

app.use(requestLogger);
app.use(helmet({
  crossOriginResourcePolicy: { policy: "cross-origin" }
}));
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

app.use('/uploads', express.static('uploads'));

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/admin', adminRouter);
app.use('/api/v1/zones', zoneRouter);
app.use('/api/v1/pricing', pricingRouter);
app.use('/api/v1/shipments', shipmentRouter);
app.use('/api/v1/payments', paymentRouter);
app.use('/api/v1/support', supportRouter);

const handleGetPublicStats = async (req: Request, res: Response) => {
  try {
    const [totalShipments, deliveredShipments, totalDeliveryAttempts] = await Promise.all([
      prisma.shipment.count({ where: { deletedAt: null } }),
      prisma.shipment.count({ where: { status: 'DELIVERED', deletedAt: null } }),
      prisma.deliveryAttempt.findMany({
        where: { shipment: { status: 'DELIVERED', deletedAt: null } },
        select: { shipmentId: true }
      })
    ]);

    let onTimeRate = 0;
    if (deliveredShipments > 0) {
      const attemptsCountMap: Record<string, number> = {};
      for (const attempt of totalDeliveryAttempts) {
        attemptsCountMap[attempt.shipmentId] = (attemptsCountMap[attempt.shipmentId] || 0) + 1;
      }
      const onTimeDeliveries = Object.values(attemptsCountMap).filter(count => count <= 1).length;
      onTimeRate = Math.round((onTimeDeliveries / deliveredShipments) * 100);
    }

    return res.status(200).json({
      success: true,
      data: {
        totalShipments,
        deliveredShipments,
        onTimeRate,
        countries: 1,
        tracking: '24/7'
      }
    });
  } catch {
    return res.status(500).json({
      success: false,
      message: 'Failed to retrieve platform statistics'
    });
  }
};

app.get('/api/v1/stats', handleGetPublicStats);
app.get('/api/v1/public/stats', handleGetPublicStats);

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'Welcome to the Courier & Logistics Platform API! 🚀',
    docs: 'Append /api/v1/health to check server status.'
  });
});

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
