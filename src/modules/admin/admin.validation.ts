import { z } from 'zod';
import { Role } from '../../generated/prisma/index.js';

export const listUsersSchema = z.object({
  query: z.object({
    role: z.nativeEnum(Role).optional(),
    isActive: z.enum(['true', 'false']).optional(),
    page: z.coerce.number().int().min(1).optional(),
    limit: z.coerce.number().int().min(1).optional()
  })
});

export const updateRoleSchema = z.object({
  body: z.object({
    role: z.nativeEnum(Role)
  })
});

export const listAuditLogsSchema = z.object({
  query: z.object({
    entity: z.string().optional(),
    action: z.string().optional(),
    actorId: z.string().uuid().optional(),
    page: z.coerce.number().int().min(1).optional(),
    limit: z.coerce.number().int().min(1).optional(),
    sortBy: z.enum(['createdAt', 'action', 'entity']).optional(),
    sortOrder: z.enum(['asc', 'desc']).optional()
  })
});
