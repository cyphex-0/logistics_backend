import Stripe from 'stripe';
import { Request, Response } from 'express';
import { stripeGateway } from './gateways/stripe.gateway.js';
import { paymentService } from './payment.service.js';
import { PaymentMethod } from '../../generated/prisma/index.js';
/**
 * Stripe Webhook Handler
 * 
 * IMPORTANT: This endpoint requires the raw, unparsed request body to verify the 
 * Stripe signature. Do NOT apply global JSON body parsers (like express.json()) 
 * before this route, or signature verification will fail.
 * 
 * SECURITY: It is highly recommended to restrict access to this endpoint to 
 * Stripe's official IP addresses (https://stripe.com/docs/ips) via a firewall, 
 * WAF, or reverse proxy (e.g., Nginx) in production.
 */
export const stripeWebhookHandler = async (req: Request, res: Response) => {
  const sig = req.headers['stripe-signature'];
  if (!sig || typeof sig !== 'string') {
    return res.status(400).send('Missing stripe-signature');
  }

  try {
    // req.body must be the raw Buffer for Stripe to verify the signature
    const event = stripeGateway.constructEvent(req.body, sig);

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as Stripe.Checkout.Session;
      await paymentService.handleGatewayConfirmation(session.id, PaymentMethod.STRIPE);
    }

    // Always acknowledge receiving the event
    res.status(200).send('OK');
  } catch (err: Error | unknown) {
    console.error('Stripe webhook error:', (err instanceof Error ? err.message : String(err)));
    res.status(400).send(`Webhook Error: ${(err instanceof Error ? err.message : String(err))}`);
  }
};
