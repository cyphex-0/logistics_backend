import { z } from 'zod';

export const upsertRuleSchema = z.object({
  body: z.object({
    zoneId: z.string().uuid().nullable().optional(),
    serviceType: z.enum(['STANDARD', 'EXPRESS']),
    basePrice: z.number().min(0),
    pricePerKg: z.number().min(0),
    maxWeight: z.number().min(0).nullable().optional(),
    isActive: z.boolean().optional()
  }).strict()
});

export const calculateSchema = z.object({
  body: z.object({
    destinationZoneId: z.string().uuid(),
    weight: z.number().min(0.1),
    serviceType: z.enum(['STANDARD', 'EXPRESS'])
  }).strict()
});
