 
import { prisma } from '../src/shared/prisma/client.js';
import { hashPassword } from '../src/shared/utils/hash.js';
import { ROLES } from '../src/shared/constants/roles.js';

export const SEED_IDS = {
  admin1: 'f2ab3216-3638-4071-95fb-4322feb12ab1',
  customer1: 'f2ab3216-3638-4071-95fb-4322feb12ab2',
  customer2: 'f2ab3216-3638-4071-95fb-4322feb12ab3',
  courier1: 'f2ab3216-3638-4071-95fb-4322feb12ab4',
  courier2: 'f2ab3216-3638-4071-95fb-4322feb12ab5',
  zone1: 'f2ab3216-3638-4071-95fb-4322feb12ab6',
  zone2: 'f2ab3216-3638-4071-95fb-4322feb12ab7',
  rule1: 'f2ab3216-3638-4071-95fb-4322feb12ab8',
  rule2: 'f2ab3216-3638-4071-95fb-4322feb12ab9',
  rule3: 'f2ab3216-3638-4071-95fb-4322feb12aba',
  rule4: 'f2ab3216-3638-4071-95fb-4322feb12abb'
};

export async function seedTestDb() {
  const password = await hashPassword('password123');

  // Seed Users
  await prisma.user.createMany({
    data: [
      { id: SEED_IDS.admin1, email: 'admin@test.com', password, name: 'Admin', role: ROLES.ADMIN },
      {
        id: SEED_IDS.customer1,
        email: 'customer1@test.com',
        password,
        name: 'Customer One',
        role: ROLES.CUSTOMER
      },
      {
        id: SEED_IDS.customer2,
        email: 'customer2@test.com',
        password,
        name: 'Customer Two',
        role: ROLES.CUSTOMER
      },
      {
        id: SEED_IDS.courier1,
        email: 'courier1@test.com',
        password,
        name: 'Courier One',
        role: ROLES.COURIER,
        serviceArea: 'Dhaka'
      },
      {
        id: SEED_IDS.courier2,
        email: 'courier2@test.com',
        password,
        name: 'Courier Two',
        role: ROLES.COURIER,
        serviceArea: 'Chittagong'
      }
    ]
  });

  // Seed Zones
  await prisma.deliveryZone.createMany({
    data: [
      { id: SEED_IDS.zone1, name: 'Dhaka', city: 'Dhaka', isActive: true },
      { id: SEED_IDS.zone2, name: 'Chittagong', city: 'Chittagong', isActive: true }
    ]
  });

  // Seed Pricing Rules
  await prisma.pricingRule.createMany({
    data: [
      {
        id: SEED_IDS.rule1,
        zoneId: null,
        serviceType: 'STANDARD',
        basePrice: 50,
        pricePerKg: 10,
        maxWeight: 50
      },
      {
        id: SEED_IDS.rule2,
        zoneId: null,
        serviceType: 'EXPRESS',
        basePrice: 100,
        pricePerKg: 20,
        maxWeight: 30
      },
      {
        id: SEED_IDS.rule3,
        zoneId: SEED_IDS.zone1,
        serviceType: 'STANDARD',
        basePrice: 60,
        pricePerKg: 12,
        maxWeight: 50
      },
      {
        id: SEED_IDS.rule4,
        zoneId: SEED_IDS.zone1,
        serviceType: 'EXPRESS',
        basePrice: 120,
        pricePerKg: 25,
        maxWeight: 30
      }
    ]
  });
}
