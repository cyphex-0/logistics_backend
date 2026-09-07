import 'dotenv/config';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient, Role, Prisma } from '@prisma/client';

const connectionString = `${process.env.DATABASE_URL}`;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('Starting database seeding...');

  const { hashPassword } = await import('../src/shared/utils/hash.js');
  const adminEmail = process.env.SEED_ADMIN_EMAIL || 'admin@example.com';
  const adminPassword = process.env.SEED_ADMIN_PASSWORD || 'password123';
  const passwordHash = await hashPassword(adminPassword);

  // Seed Zones
  const zones = [
    { name: 'Dhaka', city: 'Dhaka', isActive: true },
    { name: 'Chittagong', city: 'Chittagong', isActive: true },
    { name: 'Sylhet', city: 'Sylhet', isActive: true },
    { name: 'Rajshahi', city: 'Rajshahi', isActive: true },
    { name: 'Khulna', city: 'Khulna', isActive: true }
  ];

  for (const zone of zones) {
    await prisma.deliveryZone.upsert({
      where: { name: zone.name },
      update: {},
      create: zone
    });
  }

  const dhakaZone = await prisma.deliveryZone.findUnique({ where: { name: 'Dhaka' } });
  const chittagongZone = await prisma.deliveryZone.findUnique({ where: { name: 'Chittagong' } });

  // Seed Users
  const users = [
    { email: adminEmail, name: 'Admin User', role: 'ADMIN', serviceArea: null },
    { email: 'customer@example.com', name: 'Demo Customer', role: 'CUSTOMER', serviceArea: null },
    { email: 'courier@example.com', name: 'Demo Courier', role: 'COURIER', serviceArea: 'Dhaka' } // Matches Dhaka zone
  ];

  for (const user of users) {
    await prisma.user.upsert({
      where: { email: user.email },
      update: {},
      create: {
        email: user.email,
        name: user.name,
        password: passwordHash,
        role: user.role as Role,
        serviceArea: user.serviceArea
      }
    });
  }

  // Seed Pricing Rules (STANDARD and EXPRESS for generic and specific zones)
  const rules: Prisma.PricingRuleUncheckedCreateInput[] = [
    { serviceType: 'STANDARD', basePrice: 50, pricePerKg: 10, maxWeight: 50, zoneId: null },
    { serviceType: 'EXPRESS', basePrice: 100, pricePerKg: 20, maxWeight: 30, zoneId: null },
    {
      serviceType: 'STANDARD',
      basePrice: 60,
      pricePerKg: 12,
      maxWeight: 50,
      zoneId: dhakaZone?.id || null
    },
    {
      serviceType: 'EXPRESS',
      basePrice: 120,
      pricePerKg: 25,
      maxWeight: 30,
      zoneId: dhakaZone?.id || null
    },
    {
      serviceType: 'STANDARD',
      basePrice: 80,
      pricePerKg: 15,
      maxWeight: 50,
      zoneId: chittagongZone?.id || null
    }
  ];

  // For rules, we don't have a simple unique constraint besides ID, but we can delete all and recreate or findFirst
  await prisma.pricingRule.deleteMany(); // Reset pricing rules cleanly
  for (const rule of rules) {
    await prisma.pricingRule.create({
      data: rule
    });
  }

  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
