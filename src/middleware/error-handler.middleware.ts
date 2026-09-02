import { Request, Response, NextFunction } from 'express';
import { AppError } from '../shared/errors/index.js';
import { sendError } from '../shared/utils/response.js';
import { logger } from '../shared/utils/logger.js';
import { Prisma } from '../generated/prisma/index.js';
import { ZodError } from 'zod';

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  if (err instanceof AppError) {
    return sendError(res, err.statusCode, err.message, (err as any).errors);
  }

  if (err instanceof ZodError) {
    const errors = err.issues.map((issue) => ({
      field: issue.path.join('.'),
      message: issue.message
    }));
    return sendError(res, 400, 'Validation failed', errors);
  }

  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    if (err.code === 'P2002') {
      return sendError(res, 409, 'Unique constraint violation');
    }
  }

  logger.error('Unhandled error', { err, requestId: req.id });
  return sendError(res, 500, 'Internal server error');
}
