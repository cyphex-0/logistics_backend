import axios from 'axios';
import { env } from '../../../config/env.js';
import { PaymentGateway } from './index.js';
import { redis } from '../../../shared/utils/cache.js';

export class BkashGateway implements PaymentGateway {
  private async getToken(): Promise<string> {
    const cachedToken = await redis.get('bkash_token');
    if (cachedToken) return cachedToken;

    const response = await axios.post(
      `${env.BKASH_BASE_URL}/tokenized/checkout/token/grant`,
      {
        app_key: env.BKASH_APP_KEY,
        app_secret: env.BKASH_APP_SECRET,
      },
      {
        headers: {
          username: env.BKASH_USERNAME,
          password: env.BKASH_PASSWORD,
        },
      }
    );

    const token = response.data.id_token;
    // Cache for 55 minutes (bKash tokens usually last 1 hour)
    await redis.set('bkash_token', token, 'EX', 55 * 60);
    return token;
  }

  private async request(method: 'GET' | 'POST', endpoint: string, data?: any) {
    const token = await this.getToken();
    const url = `${env.BKASH_BASE_URL}${endpoint}`;
    
    try {
      const response = await axios({
        method,
        url,
        data,
        headers: {
          'Authorization': token,
          'X-APP-Key': env.BKASH_APP_KEY,
        },
      });
      return response.data;
    } catch (error: any) {
      console.error(`bKash API Error [${method} ${endpoint}]:`, error.response?.data || error.message);
      throw error;
    }
  }

  async createPayment(amount: number, currency: string, metadata: any) {
    // Mode 0011 is for checkout
    const response = await this.request('POST', '/tokenized/checkout/create', {
      mode: '0011',
      payerReference: '1',
      callbackURL: `http://localhost:3000/api/v1/payments/bkash/callback`,
      amount: amount.toString(),
      currency: 'BDT',
      intent: 'sale',
      merchantInvoiceNumber: metadata.shipmentId,
    });

    if (response.statusCode !== '0000') {
      throw new Error(`bKash Create Payment Failed: ${response.statusMessage}`);
    }

    return {
      paymentUrl: response.bkashURL,
      gatewayReference: response.paymentID,
    };
  }

  async verifyPayment(paymentID: string) {
    // bKash Execute+Query pattern
    // First, try to execute the payment
    let executeResponse = await this.request('POST', '/tokenized/checkout/execute', { paymentID });
    
    // If execute says "Payment already completed" (status 2062) or it succeeds (status 0000)
    // we query to be absolutely sure.
    const queryResponse = await this.request('POST', '/tokenized/checkout/payment/status', { paymentID });

    if (queryResponse.transactionStatus === 'Completed') {
      return { status: 'PAID' as const, transactionId: queryResponse.trxID };
    }
    
    return { status: 'FAILED' as const };
  }

  async refundPayment(paymentID: string, amount: number) {
    // Requires a query first to get the trxID
    const queryResponse = await this.request('POST', '/tokenized/checkout/payment/status', { paymentID });
    
    if (queryResponse.transactionStatus !== 'Completed') {
      return { success: false };
    }

    const response = await this.request('POST', '/tokenized/checkout/payment/refund', {
      paymentID,
      amount: amount.toString(),
      trxID: queryResponse.trxID,
      sku: 'refund',
      reason: 'User cancelled shipment',
    });

    if (response.statusCode === '0000') {
      return { success: true, refundId: response.refundTrxID };
    }
    
    return { success: false };
  }
}

export const bkashGateway = new BkashGateway();
