/* eslint-disable @typescript-eslint/no-unused-vars */
import { describe, it, expect, beforeAll } from 'vitest';
import { shipmentService } from '../../src/modules/shipment/shipment.service.js';
import { shipmentRepository } from '../../src/modules/shipment/shipment.repository.js';
import { paymentRepository } from '../../src/modules/payment/payment.repository.js';
import { paymentService } from '../../src/modules/payment/payment.service.js';
import { stripeGateway } from '../../src/modules/payment/gateways/stripe.gateway.js';
import { ShipmentStatus, PaymentStatus } from '../../src/generated/prisma/index.js';
import { SEED_IDS } from '../seed-test-db.js';
import crypto from 'crypto';
import { env } from '../../src/config/env.js';

describe('Concurrency Tests', () => {
  const mockCustomer = SEED_IDS.customer1;
  const mockAdmin = SEED_IDS.admin;
  const mockCourier1 = SEED_IDS.courier1;
  const mockCourier2 = SEED_IDS.courier2;

  let shipmentIdForCourier: string;
  let shipmentIdForWebhook: string;

  beforeAll(async () => {
    const parcelData = {
      weight: 10,
      length: 10,
      width: 10,
      height: 10,
      parcelType: 'BOX',
      description: 'Concurrency Box'
    };

    const s1 = await shipmentService.create(mockCustomer, {
      parcel: parcelData,
      originAddress: 'Pickup 1',
      destinationAddress: 'Drop 2',
      originZoneId: SEED_IDS.zone1,
      destinationZoneId: SEED_IDS.zone2,
      serviceType: 'STANDARD',
      originCity: 'Dhaka',
      destinationCity: 'Chittagong',
      recipientName: 'John Doe',
      recipientPhone: '+8801700000000'
    });
    shipmentIdForCourier = s1.id;
    await shipmentRepository.update(shipmentIdForCourier, { status: 'CONFIRMED' });

    const s2 = await shipmentService.create(mockCustomer, {
      parcel: parcelData,
      originAddress: 'Pickup 1',
      destinationAddress: 'Drop 2',
      originZoneId: SEED_IDS.zone1,
      destinationZoneId: SEED_IDS.zone2,
      serviceType: 'STANDARD',
      originCity: 'Dhaka',
      destinationCity: 'Chittagong',
      recipientName: 'John Doe',
      recipientPhone: '+8801700000000'
    });
    shipmentIdForWebhook = s2.id;
  });

  it('handles assignment race condition (optimistic locking)', async () => {
    const p1 = shipmentService.assignCourier(shipmentIdForCourier, mockAdmin, mockCourier1);
    const p2 = shipmentService.assignCourier(shipmentIdForCourier, mockAdmin, mockCourier1);

    const results = await Promise.allSettled([p1, p2]);

    const fulfilled = results.filter((r) => r.status === 'fulfilled');
    const rejected = results.filter((r) => r.status === 'rejected');

    expect(fulfilled.length).toBe(1);
    expect(rejected.length).toBe(1);
    expect((rejected[0] as unknown).reason.message).toContain('Concurrent modification');
  });

  it('handles webhook idempotency', async () => {
    const { vi } = await import('vitest');
    vi.spyOn(stripeGateway, 'createPayment').mockResolvedValue({
      gatewayReference: 'mock_stripe_session',
      paymentUrl: 'https://checkout.stripe.com/mock'
    });

    const payment = await paymentService.initiate(shipmentIdForWebhook, mockCustomer, 'STRIPE');
    const dbPayment = await paymentRepository.findByShipmentId(shipmentIdForWebhook);

    const gatewayReference = dbPayment!.stripeSessionId!;

    stripeGateway.constructEvent = () =>
      ({
        type: 'checkout.session.completed',
        data: {
          object: { id: gatewayReference, payment_status: 'paid', payment_intent: 'pi_test' }
        }
      }) as unknown;
    stripeGateway.verifyPayment = async () => ({ status: 'PAID', transactionId: 'pi_test' });

    const payload = Buffer.from('test');
    const sig = 'test_sig';

    const { app } = await import('../../src/app.js');
    const request = (await import('supertest')).default;

    const p1 = request(app)
      .post('/api/v1/payments/stripe/webhook')
      .set('stripe-signature', sig)
      .send(payload);

    const p2 = request(app)
      .post('/api/v1/payments/stripe/webhook')
      .set('stripe-signature', sig)
      .send(payload);

    const results = await Promise.allSettled([p1, p2]);

    expect(results.every((r) => r.status === 'fulfilled')).toBe(true);

    const checkPayment = await paymentRepository.findByShipmentId(shipmentIdForWebhook);
    expect(checkPayment?.status).toBe(PaymentStatus.PAID);
  });

  it('handles delivery-attempt race condition', async () => {
    // Two couriers try to mark a shipment as FAILED_DELIVERY concurrently
    const { prisma } = await import('../../src/shared/prisma/client.js');
    await shipmentRepository.update(shipmentIdForCourier, {
      status: ShipmentStatus.OUT_FOR_DELIVERY
    });
    await prisma.user.update({ where: { id: mockCourier1 }, data: { serviceArea: 'Dhaka' } });
    await shipmentRepository.update(shipmentIdForCourier, { courierId: mockCourier1 });

    const p1 = shipmentService.updateStatus(
      shipmentIdForCourier,
      { id: mockCourier1, role: 'COURIER' },
      { status: ShipmentStatus.FAILED_DELIVERY, failureReason: 'Race 1', description: 'desc' }
    );
    const p2 = shipmentService.updateStatus(
      shipmentIdForCourier,
      { id: mockCourier1, role: 'COURIER' },
      { status: ShipmentStatus.FAILED_DELIVERY, failureReason: 'Race 2', description: 'desc' }
    );

    const results = await Promise.allSettled([p1, p2]);
    const fulfilled = results.filter((r) => r.status === 'fulfilled');
    const rejected = results.filter((r) => r.status === 'rejected');

    // Due to optimistic locking or state validation, one might succeed while the other fails.
    // Given Prisma's transaction isolation on update, optimistic locking (using updatedAt) is required to fail the second.
    // Our implementation uses `updateStatus` with `updatedAt` checking, which throws ConflictError.
    expect(fulfilled.length).toBe(1);
    expect(rejected.length).toBe(1);
    expect((rejected[0] as unknown).reason.message).toContain('Concurrent modification');
  });
});
