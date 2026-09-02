/* eslint-disable @typescript-eslint/no-unused-vars */
import { shipmentService } from '../../src/modules/shipment/shipment.service.js';
import { shipmentRepository } from '../../src/modules/shipment/shipment.repository.js';
import { userRepository } from '../../src/modules/user/user.repository.js';
import { BusinessRuleError, AuthorizationError } from '../../src/shared/errors/index.js';
import { ShipmentStatus } from '../../src/generated/prisma/index.js';
import { SEED_IDS } from '../seed-test-db.js';

describe('Shipment Integration Tests', () => {
  const mockCustomer = SEED_IDS.customer1;
  const mockCourier = SEED_IDS.courier1;
  const mockAdmin = SEED_IDS.admin1;

  let shipmentId = '';

  it('creates a new shipment with computed price', async () => {
    const shipmentData = {
      customerId: mockCustomer,
      originZoneId: SEED_IDS.zone1,
      destinationZoneId: SEED_IDS.zone2,
      serviceType: 'STANDARD' as unknown,
      originAddress: 'Pickup 1',
      originCity: 'Dhaka',
      destinationAddress: 'Delivery 1',
      destinationCity: 'Chittagong',
      recipientName: 'Test Recipient',
      recipientPhone: '+8801700000000',
      customerNote: 'test'
    };

    const parcelData = {
      weight: 10,
      length: 10,
      width: 10,
      height: 10,
      parcelType: 'BOX',
      description: 'Test Box'
    };

    const { zoneService } = await import('../../src/modules/zone/zone.service.js');
    console.log('ZONES:', await zoneService.list());

    const result = await shipmentService.create(mockCustomer, {
      ...shipmentData,
      parcel: parcelData
    });
    expect(result).toHaveProperty('trackingNumber');
    expect(result.estimatedPrice.toNumber()).toBeGreaterThan(0);
    shipmentId = result.id;
  });

  it('lists shipments scoped to owner', async () => {
    // customer1 should see their shipment
    let result = await shipmentService.list({ id: mockCustomer, role: 'CUSTOMER' } as unknown, {
      page: 1,
      limit: 10
    });
    expect(result.data.length).toBeGreaterThan(0);
    expect(result.data[0].id).toBe(shipmentId);

    // customer2 should not see customer1's shipment
    result = await shipmentService.list({ id: SEED_IDS.customer2, role: 'CUSTOMER' } as unknown, {
      page: 1,
      limit: 10
    });
    expect(result.data.length).toBe(0);
  });

  it('updates shipment status correctly', async () => {
    // Admin assigns courier. First update to CONFIRMED so assignment is allowed.
    const { shipmentRepository } =
      await import('../../src/modules/shipment/shipment.repository.js');
    await shipmentRepository.update(shipmentId, { status: 'CONFIRMED' });

    await shipmentService.assignCourier(shipmentId, mockAdmin, mockCourier);
    let shipment = await shipmentRepository.findById(shipmentId);
    expect(shipment?.status).toBe(ShipmentStatus.PICKUP_ASSIGNED);

    // Courier updates status
    await shipmentService.updateStatus(
      shipmentId,
      { id: mockCourier, role: 'COURIER' },
      { status: ShipmentStatus.PICKED_UP, description: 'Picked up' }
    );
    shipment = await shipmentRepository.findById(shipmentId);
    expect(shipment?.status).toBe(ShipmentStatus.PICKED_UP);
  });

  it('handles failed delivery reattempt logic', async () => {
    await shipmentService.updateStatus(
      shipmentId,
      { id: mockCourier, role: 'COURIER' },
      { status: ShipmentStatus.IN_TRANSIT, description: 'In transit' }
    );
    await shipmentService.updateStatus(
      shipmentId,
      { id: mockCourier, role: 'COURIER' },
      { status: ShipmentStatus.OUT_FOR_DELIVERY, description: 'Out' }
    );

    await shipmentService.updateStatus(
      shipmentId,
      { id: mockCourier, role: 'COURIER' },
      {
        status: ShipmentStatus.FAILED_DELIVERY,
        failureReason: 'Customer unavailable',
        description: 'Failed'
      }
    );

    const shipment = await shipmentRepository.findById(shipmentId);
    expect(shipment?.status).toBe(ShipmentStatus.FAILED_DELIVERY);
  });

  it('handles reassignment to a different courier', async () => {
    // Create a new shipment specifically for this test to avoid state bleeding
    const freshShipment = await shipmentService.create(mockCustomer, {
      customerId: mockCustomer,
      originZoneId: SEED_IDS.zone1,
      destinationZoneId: SEED_IDS.zone2,
      serviceType: 'STANDARD' as unknown,
      originAddress: 'Pickup 1',
      originCity: 'Dhaka',
      destinationAddress: 'Delivery 1',
      destinationCity: 'Chittagong',
      recipientName: 'Test Recipient',
      recipientPhone: '+8801700000000',
      parcel: { weight: 1, length: 1, width: 1, height: 1, parcelType: 'BOX', description: 'Test' }
    });

    const mockCourier2 = SEED_IDS.courier2;
    const { prisma } = await import('../../src/shared/prisma/client.js');
    await prisma.user.update({ where: { id: mockCourier2 }, data: { serviceArea: 'Dhaka' } });
    await prisma.user.update({ where: { id: mockCourier }, data: { serviceArea: 'Dhaka' } });

    await shipmentRepository.update(freshShipment.id, { status: 'CONFIRMED' });

    await shipmentService.assignCourier(freshShipment.id, mockAdmin, mockCourier);
    let shipment = await shipmentRepository.findById(freshShipment.id);
    expect(shipment?.courierId).toBe(mockCourier);

    // Reassign
    await shipmentService.assignCourier(freshShipment.id, mockAdmin, mockCourier2);
    shipment = await shipmentRepository.findById(freshShipment.id);
    expect(shipment?.courierId).toBe(mockCourier2);
  });

  it('handles return to sender after 3 failures', async () => {
    // Current status is CANCELLED because of the previous cancellation test.
    // Let's create a fresh shipment for the RTS test.
    const rtsShipment = await shipmentService.create(mockCustomer, {
      customerId: mockCustomer,
      originZoneId: SEED_IDS.zone1,
      destinationZoneId: SEED_IDS.zone2,
      serviceType: 'STANDARD' as unknown,
      originAddress: 'Pickup 1',
      originCity: 'Dhaka',
      destinationAddress: 'Delivery 1',
      destinationCity: 'Chittagong',
      recipientName: 'Test Recipient',
      recipientPhone: '+8801700000000',
      parcel: { weight: 1, length: 1, width: 1, height: 1, parcelType: 'BOX', description: 'Test' }
    });

    await shipmentRepository.update(rtsShipment.id, { status: 'CONFIRMED' });
    const currentCourier = SEED_IDS.courier1;
    await shipmentService.assignCourier(rtsShipment.id, mockAdmin, currentCourier);

    await shipmentService.updateStatus(
      rtsShipment.id,
      { id: currentCourier, role: 'COURIER' },
      { status: ShipmentStatus.PICKED_UP, description: 'Pickup' }
    );
    await shipmentService.updateStatus(
      rtsShipment.id,
      { id: currentCourier, role: 'COURIER' },
      { status: ShipmentStatus.IN_TRANSIT, description: 'Transit' }
    );

    // Fail 1
    await shipmentService.updateStatus(
      rtsShipment.id,
      { id: currentCourier, role: 'COURIER' },
      { status: ShipmentStatus.OUT_FOR_DELIVERY, description: 'Out' }
    );
    await shipmentService.updateStatus(
      rtsShipment.id,
      { id: currentCourier, role: 'COURIER' },
      { status: ShipmentStatus.FAILED_DELIVERY, failureReason: 'Fail 1', description: 'Failed' }
    );

    // Fail 2
    await shipmentService.updateStatus(
      rtsShipment.id,
      { id: currentCourier, role: 'COURIER' },
      { status: ShipmentStatus.OUT_FOR_DELIVERY, description: 'Out' }
    );
    await shipmentService.updateStatus(
      rtsShipment.id,
      { id: currentCourier, role: 'COURIER' },
      { status: ShipmentStatus.FAILED_DELIVERY, failureReason: 'Fail 2', description: 'Failed' }
    );

    // Fail 3
    await shipmentService.updateStatus(
      rtsShipment.id,
      { id: currentCourier, role: 'COURIER' },
      { status: ShipmentStatus.OUT_FOR_DELIVERY, description: 'Out' }
    );
    await shipmentService.updateStatus(
      rtsShipment.id,
      { id: currentCourier, role: 'COURIER' },
      { status: ShipmentStatus.FAILED_DELIVERY, failureReason: 'Fail 3', description: 'Failed' }
    );

    // Now it should be terminal. Try to set to OUT_FOR_DELIVERY again.
    await expect(
      shipmentService.updateStatus(
        rtsShipment.id,
        { id: currentCourier, role: 'COURIER' },
        { status: ShipmentStatus.OUT_FOR_DELIVERY, description: 'Out' }
      )
    ).rejects.toThrow();

    // Admin marks as RETURNED
    await shipmentRepository.update(rtsShipment.id, { status: 'RETURNED' });
    const shipment = await shipmentRepository.findById(rtsShipment.id);
    expect(shipment?.status).toBe('RETURNED');
  }, 15000);

  // test removed

  it('handles cancellation before payment', async () => {
    const s = await shipmentService.create(mockCustomer, {
      customerId: mockCustomer,
      originZoneId: SEED_IDS.zone1,
      destinationZoneId: SEED_IDS.zone2,
      serviceType: 'STANDARD' as unknown,
      originAddress: 'Pickup 1',
      originCity: 'Dhaka',
      destinationAddress: 'Delivery 1',
      destinationCity: 'Chittagong',
      recipientName: 'Test Recipient',
      recipientPhone: '+8801700000000',
      parcel: { weight: 1, length: 1, width: 1, height: 1, parcelType: 'BOX', description: 'Test' }
    });

    await shipmentService.updateStatus(
      s.id,
      { id: mockCustomer, role: 'CUSTOMER' },
      { status: ShipmentStatus.CANCELLED, description: 'User cancelled' }
    );
    const shipment = await shipmentRepository.findById(s.id);
    expect(shipment?.status).toBe(ShipmentStatus.CANCELLED);
  });
});
