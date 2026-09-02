import { describe, it, expect } from 'vitest';
import { shipmentService } from '../../src/modules/shipment/shipment.service.js';
import { paymentService } from '../../src/modules/payment/payment.service.js';
import { SEED_IDS } from '../seed-test-db.js';
import { AppError } from '../../src/shared/errors/index.js';

describe('Security Tests', () => {
  const customer1 = { id: SEED_IDS.customer1, role: 'CUSTOMER' as any };
  const customer2 = { id: SEED_IDS.customer2, role: 'CUSTOMER' as any };

  it('rejects IDOR: customer viewing another customers shipment', async () => {
    // Create shipment for customer 1
    const shipment = await shipmentService.create(customer1.id, {
      parcel: { weight: 1, length: 1, width: 1, height: 1, parcelType: 'DOCUMENT', description: 'Docs' },
      originAddress: 'Pickup 1',
      destinationAddress: 'Drop 2',
      originZoneId: SEED_IDS.zone1, // Fixed zone to use valid pricing rule
      destinationZoneId: SEED_IDS.zone2,
      serviceType: 'STANDARD',
      originCity: 'Dhaka',
      destinationCity: 'Chittagong',
      recipientName: 'John Doe',
      recipientPhone: '+8801700000000'
    });

    // Customer 2 tries to fetch it
    await expect(shipmentService.getById(shipment.id, customer2))
      .rejects.toThrowError('You do not have permission to view this shipment');
  });

  it('rejects webhook signature spoofing', async () => {
    const { app } = await import('../../src/app.js');
    const request = (await import('supertest')).default;
    
    const payload = Buffer.from('fake payload');
    const signature = 't=123,v1=fake_signature';

    const res = await request(app)
      .post('/api/v1/payments/stripe/webhook')
      .set('stripe-signature', signature)
      .send(payload);
    
    expect(res.status).toBe(400);
    expect(res.text).toContain('Webhook Error');
  });
});
