import Stripe from 'stripe';
import { env } from '../../../config/env.js';
import { PaymentGateway } from './index.js';

const stripe = new Stripe(env.STRIPE_SECRET_KEY, {
  apiVersion: '2025-01-27.acacia' as any,
});

export class StripeGateway implements PaymentGateway {
  async createPayment(amount: number, currency: string, metadata: any) {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: currency.toLowerCase(),
            product_data: {
              name: `Shipment ${metadata.shipmentId}`,
            },
            unit_amount: Math.round(amount * 100), // Stripe uses cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `http://localhost:3000/payment/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `http://localhost:3000/payment/cancel`,
      client_reference_id: metadata.shipmentId,
      metadata: {
        paymentId: metadata.paymentId,
        shipmentId: metadata.shipmentId,
      }
    });

    if (!session.url || !session.id) {
      throw new Error('Failed to create Stripe session');
    }

    return {
      paymentUrl: session.url,
      gatewayReference: session.id, // Checkout Session ID
    };
  }

  async verifyPayment(gatewayReference: string) {
    const session = await stripe.checkout.sessions.retrieve(gatewayReference);
    
    if (session.payment_status === 'paid') {
      return { status: 'PAID' as const, transactionId: session.payment_intent as string };
    }
    
    return { status: 'PENDING' as const };
  }

  async refundPayment(gatewayReference: string, amount: number) {
    try {
      const session = await stripe.checkout.sessions.retrieve(gatewayReference);
      if (!session.payment_intent) {
        throw new Error('No payment intent found for this session');
      }

      const refund = await stripe.refunds.create({
        payment_intent: session.payment_intent as string,
        amount: Math.round(amount * 100),
      });

      return { success: refund.status === 'succeeded' || refund.status === 'pending', refundId: refund.id };
    } catch (error) {
      console.error('Stripe refund failed:', error);
      return { success: false };
    }
  }

  // Helper for webhooks
  constructEvent(payload: string | Buffer, signature: string) {
    return stripe.webhooks.constructEvent(payload, signature, env.STRIPE_WEBHOOK_SECRET);
  }
}

export const stripeGateway = new StripeGateway();
