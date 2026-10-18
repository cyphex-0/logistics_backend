import { z } from 'zod';
import 'dotenv/config';

const envSchema = z.object({
  PORT: z.string().default('3000'),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  DATABASE_URL: z.string().url(),
  JWT_SECRET: z.string().min(1),
  JWT_REFRESH_SECRET: z.string().min(1),
  JWT_EXPIRES_IN: z.string().default('15m'),
  JWT_REFRESH_EXPIRES_IN: z.string().default('7d'),
  REDIS_URL: z.string().url(),
  STRIPE_SECRET_KEY: z.string().min(1),
  STRIPE_WEBHOOK_SECRET: z.string().min(1),
  BKASH_BASE_URL: z.string().url(),
  BKASH_APP_KEY: z.string().min(1),
  BKASH_APP_SECRET: z.string().min(1),
  BKASH_USERNAME: z.string().min(1),
  BKASH_PASSWORD: z.string().min(1),
  GOOGLE_CLIENT_ID: z.string().min(1),
  GEMINI_API_KEY: z.string().optional(),
  GEMINI_MODEL: z.string().default('gemini-3.8-flash'),
  OPENROUTER_API_KEY: z.string().optional(),
  OPENROUTER_MODEL: z.string().default('google/gemma-4-31b-it:free'),
  OPENROUTER_BASE_URL: z.string().default('https://openrouter.ai/api/v1'),
  AI_SUPPORT_ENABLED: z
    .string()
    .default('true')
    .transform((val) => val === 'true'),
  SUPPORT_EMAIL: z.string().email().optional()
});

const _env = envSchema.safeParse(process.env);

if (!_env.success) {
  console.error('❌ Invalid environment variables:', _env.error.format());
  process.exit(1);
}

export const env = _env.data;
