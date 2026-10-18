import 'dotenv/config';
import { defineConfig, env } from '@prisma/config';

const rawUrl = process.env.DIRECT_URL || process.env.DATABASE_URL || env('DATABASE_URL');
// Neon connection poolers (PgBouncer) reject advisory locks. Automatically strip '-pooler.' for migrations.
const migrationUrl = rawUrl.replace('-pooler.', '.');

export default defineConfig({
  earlyAccess: true,
  schema: './prisma/schema.prisma',
  datasource: {
    url: migrationUrl
  },
  migrations: {
    seed: 'npx tsx prisma/seed.ts'
  }
} as unknown);
