import { z } from 'zod';
import { ROLES } from '../../shared/constants/roles.js';

export const registerSchema = z.object({
  body: z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    phone: z.string().optional(),
    role: z.enum([ROLES.CUSTOMER, ROLES.COURIER])
  })
});

export const loginSchema = z.object({
  body: z.object({
    email: z.string().email(),
    password: z.string().min(1)
  })
});

export const googleAuthSchema = z.object({
  body: z.object({
    idToken: z.string().min(1)
  })
});

export const refreshTokenSchema = z.object({
  body: z.object({
    refreshToken: z.string().min(1)
  })
});
