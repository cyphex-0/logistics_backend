import { vi, describe, it, expect, beforeAll } from 'vitest';
import { paymentService } from '../../src/modules/payment/payment.service.js';
import { paymentRepository } from '../../src/modules/payment/payment.repository.js';
import { shipmentService } from '../../src/modules/shipment/shipment.service.js';
import { PaymentStatus } from '../../src/generated/prisma/index.js';
import { SEED_IDS } from '../seed-test-db.js';

vi.mock('../../src/modules/payment/gateways/bkash.gateway.js', () => ({
  bkashGateway: {
    createPayment: vi.fn().mockResolvedValue({
      paymentUrl: 'https://sandbox.bkash.com/pay/123',
      gatewayReference: 'bkash_test_123'
    })
  }
}));

vi.mock('../../src/modules/payment/gateways/stripe.gateway.js', () => ({
  stripeGateway: {
    createPayment: vi.fn().mockResolvedValue({
      paymentUrl: 'https://checkout.stripe.com/pay/123',
      gatewayReference: 'cs_test_123'
    })
  }
}));

describe('Payment Integration Tests', () => {
  const mockCustomer = SEED_IDS.customer1;
  let shipmentId = '';
  let paymentId = '';

  beforeAll(async () => {
    // Create a shipment to pay for
    const shipmentData = {
      customerId: mockCustomer,
      originZoneId: SEED_IDS.zone1,
      destinationZoneId: SEED_IDS.zone2,
      serviceType: 'STANDARD' as any,
      originAddress: 'Pickup 1',
      originCity: 'Dhaka',
      destinationAddress: 'Delivery 1',
      destinationCity: 'Chittagong',
      recipientName: 'Test Recipient',
      recipientPhone: '+8801700000000',
      customerNote: '',
    };
    const parcelData = { weight: 1, length: 1, width: 1, height: 1, parcelType: 'BOX', description: 'desc' };
    const shipment = await shipmentService.create(mockCustomer, {
      ...shipmentData,
      parcel: parcelData
    });
    shipmentId = shipment.id;
  });

  it('initiates Stripe payment successfully', async () => {
    const result = await paymentService.initiate(shipmentId, mockCustomer, 'STRIPE');
    expect(result.paymentUrl).toBeDefined();

    const payment = await paymentRepository.findByShipmentId(shipmentId);
    expect(payment).toBeDefined();
    expect(payment?.status).toBe(PaymentStatus.INITIATED);
    expect(payment?.method).toBe('STRIPE');
    paymentId = payment!.id;
  });

  it('reuses the same payment row for retries', async () => {
    const { prisma } = await import('../../src/shared/prisma/client.js');
    await prisma.payment.update({ where: { id: paymentId }, data: { status: PaymentStatus.FAILED } });
    
    // Retry with bKash
    const result = await paymentService.initiate(shipmentId, mockCustomer, 'BKASH');
    expect(result.paymentUrl).toBeDefined();
    
    const payment = await paymentRepository.findByShipmentId(shipmentId);
    expect(payment?.id).toBe(paymentId); // Same row reused
    expect(payment?.method).toBe('BKASH');
    expect(payment?.status).toBe(PaymentStatus.INITIATED);
  });

  // Since we cannot fully execute a bKash flow without real webhooks or callbacks, we will unit test the webhook processor later in concurrency tests or manual testing.
  // We can mock the webhook success to check the state transition.
});
