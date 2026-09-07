import { Request, Response, NextFunction } from 'express';
import { paymentService } from './payment.service.js';
import { sendSuccess } from '../../shared/utils/response.js';

export class PaymentController {
  async initiate(req: Request, res: Response, next: NextFunction) {
    try {
      const { shipmentId, method } = req.body;
      const baseUrl = `${req.protocol}://${req.get('host')}/api/v1`;
      const result = await paymentService.initiate(shipmentId, req.user!.id, method, baseUrl);
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

  async paymentSuccess(req: Request, res: Response) {
    res.send(`
      <div style="font-family: sans-serif; text-align: center; padding-top: 50px;">
        <h2 style="color: #4CAF50;">Payment Successful!</h2>
        <p>Your payment has been processed successfully.</p>
        <p style="color: #555;">You can now close this window and return to the application.</p>
      </div>
    `);
  }

  async paymentCancel(req: Request, res: Response) {
    res.send(`
      <div style="font-family: sans-serif; text-align: center; padding-top: 50px;">
        <h2 style="color: #f44336;">Payment Cancelled</h2>
        <p>The payment process was cancelled.</p>
        <p style="color: #555;">You can close this window and try again later.</p>
      </div>
    `);
  }
}

export const paymentController = new PaymentController();
