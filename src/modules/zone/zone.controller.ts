import { Request, Response, NextFunction } from 'express';
import { zoneService } from './zone.service.js';
import { sendSuccess } from '../../shared/utils/response.js';

export class ZoneController {
  async list(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await zoneService.list();
      return sendSuccess(res, 200, 'Zones retrieved successfully', result);
    } catch (e) {
      next(e);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await zoneService.create(req.body, req.user!.id);
      return sendSuccess(res, 201, 'Zone created successfully', result);
    } catch (e) {
      next(e);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await zoneService.update(req.params.id, req.body, req.user!.id);
      return sendSuccess(res, 200, 'Zone updated successfully', result);
    } catch (e) {
      next(e);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await zoneService.delete(req.params.id, req.user!.id);
      return sendSuccess(res, 200, 'Zone deleted successfully', result);
    } catch (e) {
      next(e);
    }
  }
}

export const zoneController = new ZoneController();
