import { Response } from 'express';

interface ErrorItem {
  field: string;
  message: string;
}

export function sendSuccess<T>(
  res: Response,
  statusCode: number,
  message: string,
  data?: T
): Response {
  return res.status(statusCode).json({ success: true, message, data: data ?? null });
}

export function sendError(
  res: Response,
  statusCode: number,
  message: string,
  errors?: ErrorItem[]
): Response {
  return res.status(statusCode).json({ success: false, message, ...(errors ? { errors } : {}) });
}
