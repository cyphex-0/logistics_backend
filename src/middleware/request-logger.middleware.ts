import { Request, Response, NextFunction } from 'express';
import { logger } from '../shared/utils/logger.js';
import { randomUUID } from 'crypto';

export function requestLogger(req: Request, res: Response, next: NextFunction) {
  req.id = req.headers['x-request-id'] as string || randomUUID();
  res.setHeader('X-Request-Id', req.id);

  const start = Date.now();

  res.on('finish', () => {
    const duration = Date.now() - start;
    logger.info('HTTP Request', {
      requestId: req.id,
      method: req.method,
      path: req.originalUrl,
      status: res.statusCode,
      duration: `${duration}ms`,
      ip: req.ip
    });
  });

  next();
}
