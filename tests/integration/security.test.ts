/* eslint-disable @typescript-eslint/no-unused-vars */
import { describe, it, expect } from 'vitest';
import { shipmentService } from '../../src/modules/shipment/shipment.service.js';
import { paymentService } from '../../src/modules/payment/payment.service.js';
import { SEED_IDS } from '../seed-test-db.js';
import { AppError } from '../../src/shared/errors/index.js';

describe('Security Tests', () => {
  const customer1 = { id: SEED_IDS.customer1, role: 'CUSTOMER' as unknown };
  const customer2 = { id: SEED_IDS.customer2, role: 'CUSTOMER' as unknown };

  it('rejects IDOR: customer viewing another customers shipment', async () => {
    // Create shipment for customer 1
    const shipment = await shipmentService.create(customer1.id, {
      parcel: {
        weight: 1,
        length: 1,
        width: 1,
        height: 1,
        parcelType: 'DOCUMENT',
        description: 'Docs'
      },
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
    await expect(shipmentService.getById(shipment.id, customer2)).rejects.toThrowError(
      'You do not have permission to view this shipment'
    );
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

  it('rejects role escalation attempts', async () => {
    const { app } = await import('../../src/app.js');
    const request = (await import('supertest')).default;
    const { authService } = await import('../../src/modules/auth/auth.service.js');
    const tokens = await authService.login({
      email: 'customer1@test.com',
      password: 'password123'
    }); // customer1

    // Try to update role through a profile update endpoint (if it existed) or admin endpoint
    // Customer hitting an admin route to update a role
    const res = await request(app)
      .patch('/api/v1/admin/users/' + customer2.id + '/role')
      .set('Authorization', `Bearer ${tokens.accessToken}`)
      .send({ role: 'ADMIN' });

    expect(res.status).toBe(403);
  });

  it('asserts no passwords or tokens leak in responses (data exposure sweep)', async () => {
    const { app } = await import('../../src/app.js');
    const request = (await import('supertest')).default;
    const { authService } = await import('../../src/modules/auth/auth.service.js');
    const tokens = await authService.login({ email: 'admin@test.com', password: 'password123' });

    const res = await request(app)
      .get('/api/v1/admin/users')
      .set('Authorization', `Bearer ${tokens.accessToken}`);

    expect(res.status).toBe(200);
    expect(res.body.data.data.length).toBeGreaterThan(0);

    const firstUser = res.body.data.data[0];
    expect(firstUser).not.toHaveProperty('passwordHash');
    expect(firstUser).not.toHaveProperty('password');
    expect(firstUser).not.toHaveProperty('refreshToken');
  });
});
