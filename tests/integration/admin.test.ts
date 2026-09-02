 
import { adminService } from '../../src/modules/admin/admin.service.js';
import { userRepository } from '../../src/modules/user/user.repository.js';
import { auditRepository } from '../../src/modules/audit/audit.repository.js';
import { Role } from '../../src/generated/prisma/index.js';
import { BusinessRuleError } from '../../src/shared/errors/index.js';
import { AUDIT_ACTIONS } from '../../src/shared/constants/audit-actions.js';
import { SEED_IDS } from '../seed-test-db.js';

describe('Admin Integration Tests', () => {
  const mockAdmin = SEED_IDS.admin1;
  const mockCustomer = SEED_IDS.customer1;

  it('lists users successfully', async () => {
    const result = await adminService.listUsers({ role: 'CUSTOMER' as unknown }, 1, 10);
    expect(result.data.length).toBeGreaterThan(0);
    expect(result.data[0].role).toBe(Role.CUSTOMER);
  });

  it('updates user role and logs audit trail', async () => {
    await adminService.updateUserRole(mockCustomer, 'COURIER' as unknown, mockAdmin);

    const user = await userRepository.findById(mockCustomer);
    expect(user?.role).toBe(Role.COURIER);

    // Verify audit log
    const auditLogs = await auditRepository.list(
      { action: AUDIT_ACTIONS.USER_ROLE_UPDATED },
      { page: 1, limit: 10 },
      { sortBy: 'createdAt', sortOrder: 'desc' }
    );
    expect(auditLogs.logs.length).toBeGreaterThan(0);
    expect(auditLogs.logs[0].entityId).toBe(mockCustomer);
    expect(auditLogs.logs[0].actorId).toBe(mockAdmin);
  });

  it('rejects self-delete', async () => {
    await expect(adminService.softDeleteUser(mockAdmin, mockAdmin)).rejects.toThrow(
      BusinessRuleError
    );
  });

  it('rejects delete if active shipments exist', async () => {
    // create active shipment for mockCustomer
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
      weight: 1,
      length: 1,
      width: 1,
      height: 1,
      parcelType: 'BOX',
      description: 'test'
    };
    const { shipmentService } = await import('../../src/modules/shipment/shipment.service.js');
    await shipmentService.create(mockCustomer, {
      ...shipmentData,
      parcel: parcelData
    });

    await expect(adminService.softDeleteUser(mockCustomer, mockAdmin)).rejects.toThrow(
      BusinessRuleError
    );
    await expect(adminService.softDeleteUser(mockCustomer, mockAdmin)).rejects.toThrow(
      BusinessRuleError
    );
  });

  it('fetches dashboard stats', async () => {
    const stats = await adminService.dashboardStats();
    expect(stats.totalShipments).toBeDefined();
    expect(stats.totalRevenue).toBeDefined();
    expect(stats.totalCouriers).toBeDefined();
  });
});
