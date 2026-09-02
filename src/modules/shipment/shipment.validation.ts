import { z } from 'zod';

export const createShipmentSchema = z.object({
  body: z.object({
    originAddress: z.string().min(1),
    originCity: z.string().min(1),
    originZoneId: z.string().uuid(),
    destinationAddress: z.string().min(1),
    destinationCity: z.string().min(1),
    destinationZoneId: z.string().uuid(),
    recipientName: z.string().min(1),
    recipientPhone: z.string().min(1),
    serviceType: z.enum(['STANDARD', 'EXPRESS']),
    notes: z.string().optional(),
    
    parcel: z.object({
      weight: z.number().min(0.1),
      length: z.number().min(0.1),
      width: z.number().min(0.1),
      height: z.number().min(0.1),
      description: z.string().optional(),
      isFragile: z.boolean().optional()
    }).strict()
  }).strict()
});

export const searchShipmentSchema = z.object({
  query: z.object({
    trackingNumber: z.string().optional(),
    status: z.string().optional(),
    page: z.string().regex(/^\d+$/).optional(),
    limit: z.string().regex(/^\d+$/).optional(),
  })
});

export const updateStatusSchema = z.object({
  body: z.object({
    status: z.enum([
      'CONFIRMED', 'PICKUP_ASSIGNED', 'PICKED_UP', 'IN_TRANSIT',
      'OUT_FOR_DELIVERY', 'DELIVERED', 'FAILED_DELIVERY', 'RETURNED'
    ]),
    description: z.string().min(1),
    location: z.string().optional(),
    failureReason: z.string().optional()
  }).strict()
}).refine(data => {
  if (data.body.status === 'FAILED_DELIVERY' && !data.body.failureReason) {
    return false;
  }
  return true;
}, {
  message: "failureReason is required when status is FAILED_DELIVERY",
  path: ["body", "failureReason"]
});

export const updateShipmentSchema = z.object({
  body: z.object({
    originAddress: z.string().min(1).optional(),
    originCity: z.string().min(1).optional(),
    originZoneId: z.string().uuid().optional(),
    destinationAddress: z.string().min(1).optional(),
    destinationCity: z.string().min(1).optional(),
    destinationZoneId: z.string().uuid().optional(),
    recipientName: z.string().min(1).optional(),
    recipientPhone: z.string().min(1).optional(),
    serviceType: z.enum(['STANDARD', 'EXPRESS']).optional(),
    notes: z.string().optional(),
    
    parcel: z.object({
      weight: z.number().min(0.1).optional(),
      length: z.number().min(0.1).optional(),
      width: z.number().min(0.1).optional(),
      height: z.number().min(0.1).optional(),
      description: z.string().optional(),
      isFragile: z.boolean().optional()
    }).strict().optional()
  }).strict()
});

export const assignCourierSchema = z.object({
  body: z.object({
    courierId: z.string().uuid()
  }).strict()
});

export const cancelShipmentSchema = z.object({
  body: z.object({
    reason: z.string().min(1)
  }).strict()
});
