import { z } from 'zod';

export const createZoneSchema = z.object({
  body: z
    .object({
      name: z.string().min(1),
      coverageCities: z.array(z.string()).min(1),
      isActive: z.boolean().optional()
    })
    .strict()
});

export const updateZoneSchema = z.object({
  body: z
    .object({
      name: z.string().min(1).optional(),
      coverageCities: z.array(z.string()).min(1).optional(),
      isActive: z.boolean().optional()
    })
    .strict()
});
