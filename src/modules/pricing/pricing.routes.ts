import { Router } from 'express';
import { pricingController } from './pricing.controller.js';
import { validate } from '../../middleware/validate.middleware.js';
import { authenticate } from '../../middleware/auth.middleware.js';
import { authorize } from '../../middleware/role.middleware.js';
import { ROLES } from '../../shared/constants/roles.js';
import { upsertRuleSchema, calculateSchema } from './pricing.validation.js';

export const pricingRouter = Router();

pricingRouter.use(authenticate);

pricingRouter.post('/calculate', validate(calculateSchema), pricingController.calculate);
pricingRouter.get('/rules', authorize(ROLES.ADMIN), pricingController.list);
pricingRouter.put(
  '/rules',
  authorize(ROLES.ADMIN),
  validate(upsertRuleSchema),
  pricingController.upsert
);
