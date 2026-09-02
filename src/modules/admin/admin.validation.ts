import { z } from 'zod';
import { Role } from '../../generated/prisma/index.js';

export const listUsersSchema = z.object({
  query: z.object({
    role: z.nativeEnum(Role).optional(),
    isActive: z.enum(['true', 'false']).optional(),
    page: z.string().regex(/^\d+$/).optional(),
    limit: z.string().regex(/^\d+$/).optional()
  })
});

export const updateRoleSchema = z.object({
  body: z.object({
    role: z.nativeEnum(Role)
  })
});
