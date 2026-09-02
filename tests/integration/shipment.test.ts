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
      serviceType: 'STANDARD' as any,
      originAddress: 'Pickup 1',
      originCity: 'Dhaka',
      destinationAddress: 'Delivery 1',
      destinationCity: 'Chittagong',
      recipientName: 'Test Recipient',
      recipientPhone: '+8801700000000',
      customerNote: 'test',
    };
    
    const parcelData = {
      weight: 10,
      length: 10,
      width: 10,
      height: 10,
      parcelType: 'BOX',
      description: 'Test Box',
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
    let result = await shipmentService.list({ id: mockCustomer, role: 'CUSTOMER' } as any, { page: 1, limit: 10 });
    expect(result.data.length).toBeGreaterThan(0);
    expect(result.data[0].id).toBe(shipmentId);

    // customer2 should not see customer1's shipment
    result = await shipmentService.list({ id: SEED_IDS.customer2, role: 'CUSTOMER' } as any, { page: 1, limit: 10 });
    expect(result.data.length).toBe(0);
  });

  it('updates shipment status correctly', async () => {
    // Admin assigns courier. First update to CONFIRMED so assignment is allowed.
    const { shipmentRepository } = await import('../../src/modules/shipment/shipment.repository.js');
    await shipmentRepository.update(shipmentId, { status: 'CONFIRMED' });
    
    await shipmentService.assignCourier(shipmentId, mockAdmin, mockCourier);
    let shipment = await shipmentRepository.findById(shipmentId);
    expect(shipment?.status).toBe(ShipmentStatus.PICKUP_ASSIGNED);

    // Courier updates status
    await shipmentService.updateStatus(shipmentId, { id: mockCourier, role: 'COURIER' }, { status: ShipmentStatus.PICKED_UP, description: 'Picked up' });
    shipment = await shipmentRepository.findById(shipmentId);
    expect(shipment?.status).toBe(ShipmentStatus.PICKED_UP);
  });

  it('handles failed delivery reattempt logic', async () => {
    await shipmentService.updateStatus(shipmentId, { id: mockCourier, role: 'COURIER' }, { status: ShipmentStatus.IN_TRANSIT, description: 'In transit' });
    await shipmentService.updateStatus(shipmentId, { id: mockCourier, role: 'COURIER' }, { status: ShipmentStatus.OUT_FOR_DELIVERY, description: 'Out' });
    
    await shipmentService.updateStatus(shipmentId, { id: mockCourier, role: 'COURIER' }, { status: ShipmentStatus.FAILED_DELIVERY, failureReason: 'Customer unavailable', description: 'Failed' });
    
    const shipment = await shipmentRepository.findById(shipmentId);
    expect(shipment?.status).toBe(ShipmentStatus.FAILED_DELIVERY);
  });
});
