import { Request, Response } from 'express';
import { paymentService } from './payment.service.js';
import { PaymentMethod } from '@prisma/client';

export const bkashCallbackHandler = async (req: Request, res: Response) => {
  const paymentID = req.query.paymentID as string;
  const status = req.query.status as string;

  if (status === 'success' && paymentID) {
    try {
      await paymentService.handleGatewayConfirmation(paymentID, PaymentMethod.BKASH);
      return res.send(`
        <html>
          <body>
            <h2>Payment Successful!</h2>
            <p>Your payment has been verified. You can close this window and return to the application.</p>
          </body>
        </html>
      `);
    } catch (err) {
      console.error('bKash callback verification error:', err);
      return res.status(500).send(`
        <html>
          <body>
            <h2>Verification Failed</h2>
            <p>There was an error verifying your payment. Please contact support.</p>
          </body>
        </html>
      `);
    }
  }

  res.send(`
    <html>
      <body>
        <h2>Payment ${status === 'cancel' ? 'Cancelled' : 'Failed'}</h2>
        <p>You can close this window and try again.</p>
      </body>
    </html>
  `);
};
