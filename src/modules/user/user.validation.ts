import { z } from 'zod';

export const updateProfileSchema = z.object({
  body: z
    .object({
      name: z.string().min(1).optional(),
      phone: z.string().optional(),
      avatar: z.string().url().optional(),
      serviceArea: z.string().optional(),
      isAvailable: z.boolean().optional()
    })
    .strict()
});
