import { Request, Response, NextFunction } from 'express';
import { paymentService } from './payment.service.js';
import { sendSuccess } from '../../shared/utils/response.js';

export class PaymentController {
  async initiate(req: Request, res: Response, next: NextFunction) {
    try {
      const { shipmentId, method } = req.body;
      const result = await paymentService.initiate(shipmentId, req.user!.id, method);
      return sendSuccess(res, 200, 'Payment initiated', result);
    } catch (e) {
      next(e);
    }
  }

  async refund(req: Request, res: Response, next: NextFunction) {
    try {
      const { shipmentId, reason } = req.body;
      const result = await paymentService.refundForShipment(shipmentId, req.user!.id, reason);
      return sendSuccess(res, 200, 'Payment refunded successfully', result);
    } catch (e) {
      next(e);
    }
  }
}

export const paymentController = new PaymentController();
