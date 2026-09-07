# Render Deployment Guide

This guide explains how to deploy the Courier & Logistics Platform backend securely to Render using Infrastructure-as-Code (`render.yaml`).

## 1. Prerequisites

Before deploying, ensure you have active credentials for:
- A PostgreSQL database (e.g., Render Managed PostgreSQL or Supabase).
- A Redis instance (e.g., Render Managed Redis or Upstash).
- Stripe API keys.
- bKash API credentials.
- Google OAuth Client ID.

## 2. Infrastructure as Code (render.yaml)

This repository includes a `render.yaml` file configured specifically for zero-downtime database migrations and safe TypeScript compilation.

### Build and Deploy Lifecycle

- **Build Command**: `npm install --include=dev && npm run db:generate && npm run build`
  - Installs dependencies.
  - Generates the Prisma Client so it's available for the TypeScript compiler.
  - Compiles TypeScript to the `dist/` directory.
- **Pre-Deploy Command**: `npm run db:deploy`
  - Safely applies any pending database migrations before the new application containers route traffic.
- **Start Command**: `npm start`
  - Runs `node dist/server.js` using the compiled output.

## 3. How to Deploy

1. Log into your Render dashboard.
2. Click **New** -> **Blueprint**.
3. Connect this GitHub repository.
4. Render will automatically detect the `render.yaml` file and prompt you to configure the required environment variables.

## 4. Required Environment Variables

You must supply the following environment variables in the Render dashboard:

| Variable | Purpose | Example |
| -------- | ------- | ------- |
| `DATABASE_URL` | Production PostgreSQL connection string | `postgresql://user:pass@host:5432/dbname?sslmode=require` |
| `REDIS_URL` | Redis connection string | `rediss://...` |
| `JWT_SECRET` | Secret key for access tokens | (Generate a strong random string) |
| `JWT_REFRESH_SECRET`| Secret key for refresh tokens | (Generate a strong random string) |
| `CORS_ORIGIN` | The exact URL of your production frontend | `https://courier.yourdomain.com` |
| `STRIPE_SECRET_KEY` | Stripe Production Secret Key | `sk_live_...` |
| `STRIPE_WEBHOOK_SECRET`| Stripe Webhook verification secret | `whsec_...` |
| `BKASH_*` | All bKash credentials | - |
| `GOOGLE_CLIENT_ID` | OAuth Client ID | `...apps.googleusercontent.com` |

*Note: `PORT`, `NODE_ENV`, and `NODE_VERSION` are automatically managed by `render.yaml`.*

## 5. Security & Reverse Proxy

Render places applications behind a load balancer/reverse proxy. 
The application's `app.set('trust proxy', 1)` configuration securely extracts the real client IP for accurate rate-limiting (`express-rate-limit`). Without this, the rate limiter would ban the load balancer.

## 6. Verification Steps

Once deployed, verify the deployment:
1. **Health Check**: Open `https://<your-render-url>/api/v1/health`. It should return a 200 OK with `database: connected` and `redis: connected`.
2. **Migrations**: Check the Render deployment logs to ensure `prisma migrate deploy` ran successfully during the Pre-Deploy phase.
3. **CORS**: Ensure your frontend can communicate with the backend without CORS errors by verifying the `CORS_ORIGIN` variable matches the frontend exactly (no trailing slash).

## 7. Storage Limitations

**Important:** This application is deployed to an ephemeral filesystem. If future features require file uploads (e.g., avatar images or signature PDFs), you **must** integrate an object storage provider like AWS S3 or Cloudinary. Do not use local disk storage via Multer for persistent files on Render.
