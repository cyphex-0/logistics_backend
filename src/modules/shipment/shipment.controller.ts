import { Request, Response, NextFunction } from 'express';
import { shipmentService } from './shipment.service.js';
import { sendSuccess } from '../../shared/utils/response.js';

export class ShipmentController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await shipmentService.create(req.user!.id, req.body);
      return sendSuccess(res, 201, 'Shipment created successfully', result);
    } catch (e) {
      next(e);
    }
  }

  async list(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await shipmentService.list(req.user, req.query);
      return sendSuccess(res, 200, 'Shipments retrieved successfully', result);
    } catch (e) {
      next(e);
    }
  }

  async search(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await shipmentService.list(req.user, req.query);
      return sendSuccess(res, 200, 'Search results retrieved successfully', result);
    } catch (e) {
      next(e);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await shipmentService.getById(req.params.id, req.user);
      return sendSuccess(res, 200, 'Shipment retrieved successfully', result);
    } catch (e) {
      next(e);
    }
  }

  async getTrackingTimeline(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await shipmentService.getTrackingTimeline(req.params.id, req.user);
      return sendSuccess(res, 200, 'Tracking timeline retrieved successfully', result);
    } catch (e) {
      next(e);
    }
  }

  async updateStatus(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await shipmentService.updateStatus(req.params.id, req.user, req.body);
      return sendSuccess(res, 200, 'Shipment status updated successfully', result);
    } catch (e) {
      next(e);
    }
  }

  async assignCourier(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await shipmentService.assignCourier(req.params.id, req.user!.id, req.body.courierId);
      return sendSuccess(res, 200, 'Courier assigned successfully', result);
    } catch (e) {
      next(e);
    }
  }

  async cancel(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await shipmentService.cancel(req.params.id, req.user, req.body.reason);
      return sendSuccess(res, 200, 'Shipment cancelled successfully', result);
    } catch (e) {
      next(e);
    }
  }

  async updateShipment(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await shipmentService.updateShipment(req.params.id, req.user, req.body);
      return sendSuccess(res, 200, 'Shipment updated successfully', result);
    } catch (e) {
      next(e);
    }
  }

  async softDeleteShipment(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await shipmentService.softDeleteShipment(req.params.id, req.user);
      return sendSuccess(res, 200, 'Shipment deleted successfully', result);
    } catch (e) {
      next(e);
    }
  }
}

export const shipmentController = new ShipmentController();
