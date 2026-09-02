# Courier & Logistics Platform

## Description
A comprehensive backend for a Courier and Logistics Platform, built with Node.js, Express, TypeScript, and Prisma 7.

## Tech Stack
- Node.js (≥20.19.0)
- TypeScript
- Express.js
- PostgreSQL
- Prisma 7 ORM
- Redis (Upstash)
- Zod

## Architecture
Layered Modular Monolith (Controller → Service → Repository → Prisma → PostgreSQL).

## Local Setup
1. Clone the repository
2. Copy `.env.example` to `.env` and fill in the values
3. Install dependencies: `npm install`
4. Run migrations: `npm run db:migrate`
5. Seed database: `npm run db:seed`
6. Start dev server: `npm run dev`

## Live API URL
*To be filled out during deployment (Phase 15)*

## Demo Credentials
*To be filled out during deployment (Phase 15)*

## Postman Collection
*To be filled out during docs phase (Phase 14)*

## Endpoints Summary
*To be filled out during docs phase (Phase 14)*

**Note:** Stripe and bKash payments are integrated in test/sandbox mode, fulfilling the requirement for a real gateway integration without processing real transactions.
