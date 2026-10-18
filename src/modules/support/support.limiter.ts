import rateLimit from 'express-rate-limit';
import { env } from '../../config/env.js';

export const supportLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: env.NODE_ENV === 'test' ? 10000 : 20, // 20 requests per window per IP in production
  message: {
    success: false,
    message: 'Too many support requests from this IP. Please wait a few minutes before trying again or visit /contact for immediate assistance.'
  },
  standardHeaders: true,
  legacyHeaders: false,
  skipSuccessfulRequests: false
});
