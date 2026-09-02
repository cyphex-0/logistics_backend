import { Router } from 'express';
import { zoneController } from './zone.controller.js';
import { validate } from '../../middleware/validate.middleware.js';
import { authenticate } from '../../middleware/auth.middleware.js';
import { authorize } from '../../middleware/role.middleware.js';
import { ROLES } from '../../shared/constants/roles.js';
import { createZoneSchema, updateZoneSchema } from './zone.validation.js';

export const zoneRouter = Router();

zoneRouter.use(authenticate);

zoneRouter.get('/', zoneController.list);

// Admin only
zoneRouter.post('/', authorize(ROLES.ADMIN), validate(createZoneSchema), zoneController.create);
zoneRouter.patch('/:id', authorize(ROLES.ADMIN), validate(updateZoneSchema), zoneController.update);
zoneRouter.delete('/:id', authorize(ROLES.ADMIN), zoneController.delete);
