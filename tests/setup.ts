import { config } from 'dotenv';
import { resolve } from 'path';

// Load test environment variables
config({ path: resolve(process.cwd(), '.env.test') });

import { prisma } from '../src/shared/prisma/client.js';
import { seedTestDb } from './seed-test-db.js';
import { env } from '../src/config/env.js';
import { redis } from '../src/shared/utils/cache.js';

if (env.NODE_ENV !== 'test') {
  throw new Error('NODE_ENV must be set to test to run tests');
}

beforeAll(async () => {
  if (process.env.SKIP_SEED === 'true') {
    return;
  }
  
  try {
    await redis.flushall();
  } catch (err) {
    console.log('Redis flush failed, ignoring');
  }
  
  // Since we use @@map, we need the exact mapped names. It's safer to query the db for all tables in the current schema.
  await prisma.$executeRawUnsafe(`
    DO $$ DECLARE
      r RECORD;
    BEGIN
      FOR r IN (SELECT tablename FROM pg_tables WHERE schemaname = 'public' AND tablename != '_prisma_migrations') LOOP
        EXECUTE 'TRUNCATE TABLE public.' || quote_ident(r.tablename) || ' CASCADE';
      END LOOP;
    END $$;
  `);

  await seedTestDb();
});

afterAll(async () => {
  await prisma.$disconnect();
});

