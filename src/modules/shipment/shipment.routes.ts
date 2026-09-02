import { Router } from 'express';
import { shipmentController } from './shipment.controller.js';
import { validate } from '../../middleware/validate.middleware.js';
import { authenticate } from '../../middleware/auth.middleware.js';
import { authorize } from '../../middleware/role.middleware.js';
import { ROLES } from '../../shared/constants/roles.js';
import {
  createShipmentSchema,
  searchShipmentSchema,
  updateStatusSchema,
  updateShipmentSchema,
  assignCourierSchema,
  cancelShipmentSchema
} from './shipment.validation.js';

export const shipmentRouter = Router();

shipmentRouter.use(authenticate);

shipmentRouter.post(
  '/',
  authorize(ROLES.CUSTOMER, ROLES.ADMIN),
  validate(createShipmentSchema),
  shipmentController.create
);
shipmentRouter.get('/', shipmentController.list);
shipmentRouter.get('/search', validate(searchShipmentSchema), shipmentController.search);

shipmentRouter.patch(
  '/:id/status',
  authorize(ROLES.ADMIN, ROLES.COURIER),
  validate(updateStatusSchema),
  shipmentController.updateStatus
);
shipmentRouter.post(
  '/:id/cancel',
  authorize(ROLES.CUSTOMER, ROLES.ADMIN),
  validate(cancelShipmentSchema),
  shipmentController.cancel
);
shipmentRouter.post(
  '/:id/assign',
  authorize(ROLES.ADMIN),
  validate(assignCourierSchema),
  shipmentController.assignCourier
);

shipmentRouter.get('/:id', shipmentController.getById);
shipmentRouter.patch(
  '/:id',
  authorize(ROLES.CUSTOMER, ROLES.ADMIN),
  validate(updateShipmentSchema),
  shipmentController.updateShipment
);
shipmentRouter.delete('/:id', authorize(ROLES.ADMIN), shipmentController.softDeleteShipment);
shipmentRouter.get('/:id/tracking', shipmentController.getTrackingTimeline);
