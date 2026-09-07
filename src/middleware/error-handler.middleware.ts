import { Request, Response, NextFunction } from 'express';
import { AppError, ValidationError } from '../shared/errors/index.js';
import { sendError } from '../shared/utils/response.js';
import { logger } from '../shared/utils/logger.js';
import { Prisma } from '@prisma/client';
import { ZodError } from 'zod';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  if (err instanceof ValidationError) {
    return sendError(res, err.statusCode, err.message, err.errors);
  }
  if (err instanceof AppError) {
    return sendError(res, err.statusCode, err.message);
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
