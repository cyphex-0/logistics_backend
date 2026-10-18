import 'dotenv/config';
import { defineConfig, env } from '@prisma/config';

export default defineConfig({
  earlyAccess: true,
  schema: './prisma/schema.prisma',
  datasource: {
    url: process.env.DIRECT_URL || env('DATABASE_URL')
  },
  migrations: {
    seed: 'npx tsx prisma/seed.ts'
  }
} as unknown);
