import { Request, Response, NextFunction } from 'express';
import { pricingService } from './pricing.service.js';
import { sendSuccess } from '../../shared/utils/response.js';

export class PricingController {
  async list(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await pricingService.list();
      return sendSuccess(res, 200, 'Pricing rules retrieved successfully', result);
    } catch (e) {
      next(e);
    }
  }

  async upsert(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await pricingService.upsertRule(req.body, req.user!.id);
      return sendSuccess(res, 200, 'Pricing rule saved successfully', result);
    } catch (e) {
      next(e);
    }
  }

  async calculate(req: Request, res: Response, next: NextFunction) {
    try {
      const { destinationZoneId, weight, serviceType } = req.body;
      const result = await pricingService.calculate(destinationZoneId, weight, serviceType);
      return sendSuccess(res, 200, 'Price calculated successfully', result);
    } catch (e) {
      next(e);
    }
  }
}

export const pricingController = new PricingController();
