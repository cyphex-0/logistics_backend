# Project Implementation Execution Prompts

This document contains 15 execution prompts derived from @[Plan/implementation.md]. These prompts are designed as operational execution contracts for an AI coding agent to sequentially build the Courier & Logistics Platform Backend.

---

## Phase 1 — Project Scaffolding, Tooling & Environment Configuration

### Mission

Set up a runnable, empty-but-correctly-wired TypeScript/Express skeleton with ESM and Prisma 7 compatibility.

### Context

This is the foundational layer. The project is a Node.js API. It requires Node ≥20.19.0 (22.x LTS recommended) and Prisma 7 which dictates ESM (`"type": "module"`).

### Source of Truth

- @[Plan/implementation.md] is the authoritative implementation plan.
- Respect the existing architecture and structure.
- Do not invent additional dependencies beyond what is required.

### Prerequisites

- Ensure Node.js ≥20.19.0 is installed.

### Mandatory Pre-Implementation Inspection

- Inspect the current directory.
- Verify there is no existing conflicting `package.json` or `tsconfig.json`.

### Implementation Requirements

- Initialize project with `npm init`.
- Install dependencies: TypeScript, Express, Prisma 7, Zod, Redis (`ioredis`), Stripe, bKash (via `axios`), JWT, bcrypt, Google Auth, helmet, cors, express-rate-limit, winston, tsx, ESLint, Prettier, Jest, Supertest. Include `dotenv` as a runtime dependency.
- Configure `package.json` with `"type": "module"`. Add scripts for `dev` (using `tsx watch`), `build`, `start`, `lint`, `lint:fix`, `format`, `test` variants, `db:generate`, `db:migrate`, `db:deploy`, `db:seed`, `db:studio`.
- Configure `tsconfig.json` with `strict: true`, `"module": "ESNext"`, `"moduleResolution": "bundler"`, `"target": "ES2023"`.
- Create the complete directory skeleton from Section 6 of @[Plan/implementation.md] (e.g., `src/modules`, `src/shared`, `prisma`, etc.). Leave files empty for now.
- Create `prisma.config.ts` for Prisma 7 CLI configuration, enabling `earlyAccess: true` and pointing schema to `./prisma/schema.prisma`.
- Create `.gitignore` (ignore `src/generated/`), `.env.example`, and local `.env`.
- Configure ESLint and Prettier.

### Architecture & Design Constraints

- Project structure must exactly match Section 6 of @[Plan/implementation.md].
- Use ESM natively. Do not use `ts-node-dev`.
- Prisma client will be generated into `src/generated/prisma`.

### Data / Database Requirements

- (No database models yet)

### API / Integration Requirements

- (No API routes yet)

### UI / UX Requirements

- (Backend only, N/A)

### Security Requirements

- `.env` must be gitignored.
- `.env.example` must contain safe placeholders for all required secrets.

### Error Handling & Edge Cases

- Explicitly load `dotenv/config` in Prisma CLI config and future entry points.

### Testing & Verification

- Verify `node --version` reports ≥20.19.0.
- Verify `npm install` succeeds.
- Verify `npx tsc --noEmit` runs clean against the empty tree.
- Verify lint/format tools run without configuration errors.

### Non-Goals / Do Not Change

- Do not implement business logic or API endpoints.
- Do not write the Prisma schema yet.

### Completion Criteria

- `node --version` reports ≥20.19.0.
- Full directory skeleton matches exactly.
- `package.json` uses ESM and contains all specified scripts.
- `prisma.config.ts` exists.
- `npx tsc --noEmit` succeeds.

### Final Verification Checklist

- [ ] Skeleton matches Section 6.
- [ ] Tools and scripts are functional.

### Handoff to Next Phase

- The file structure and basic environment are ready for database modeling.

---

## Phase 2 — Database Schema (Prisma) & Initial Migration

### Mission

Implement the complete, final Prisma schema and perform the initial database migration.

### Context

The data layer uses PostgreSQL via Prisma 7. The schema must be built in one pass to avoid iterative structural changes later.

### Source of Truth

- @[Plan/implementation.md] (Section 7.2) is the authoritative schema definition.

### Prerequisites

- Phase 1 must be complete.
- Neon Postgres database connection string configured in `.env` (no local database).

### Mandatory Pre-Implementation Inspection

- Inspect `prisma.config.ts` and ensure environment variables are correctly loaded.
- Review Section 7.2 to 7.4 of @[Plan/implementation.md].

### Implementation Requirements

- Initialize Prisma (`npx prisma init`).
- Write the complete `schema.prisma` containing all 6 enums and 10 models (User, DeliveryZone, PricingRule, Shipment, Parcel, TrackingEvent, DeliveryAttempt, Payment, Notification, AuditLog).
- Set generator output to `"../src/generated/prisma"`.
- Enforce all relations, `@unique`, `@@unique`, and `@@index` constraints.
- Set cascade behaviors accurately (`Restrict` for active shipment relations, `Cascade` for sub-entities, `SetNull` for couriers/actors).
- Run `npx prisma migrate dev --name init`.
- Run `npx prisma generate` explicitly.
- Create `prisma/seed.ts` as a runnable skeleton that imports `dotenv/config` at the top.

### Architecture & Design Constraints

- UUID primary keys (`@default(uuid())`).
- Money/weight fields must be `Decimal`, never `Float`.
- Gateway reference fields must be `@unique`.
- Addresses are denormalized onto the Shipment model (no separate addresses table).
- TrackingEvent and AuditLog have no `deletedAt` field (immutable).

### Data / Database Requirements

- Apply the exact schema from Section 7.2.
- Ensure all constraints are strictly modeled as specified.

### API / Integration Requirements

- N/A

### UI / UX Requirements

- N/A

### Security Requirements

- Do not store raw passwords; ensure password fields have sufficient length for bcrypt hashes (`@db.VarChar(255)`).

### Error Handling & Edge Cases

- N/A

### Testing & Verification

- Verify migration applies cleanly to an empty database.
- Smoke test the generated client with a throwaway `findMany()` call.
- Verify `npx prisma db seed` executes the skeleton without errors.

### Non-Goals / Do Not Change

- Do not add additional tables (e.g., `Cart`, `Product`).
- Do not populate the full seed logic yet.

### Completion Criteria

- Migration successfully applied.
- Generated client compiles and runs.
- Every index and constraint from Section 7.2-7.4 is verifiably present in PostgreSQL.

### Final Verification Checklist

- [ ] Schema exactly matches @[Plan/implementation.md].
- [ ] `Decimal` used for money.
- [ ] Client generated correctly in `src/generated/prisma`.

### Handoff to Next Phase

- Database schema is finalized. Proceeding to shared infrastructure.

---

## Phase 3 — Core Shared Infrastructure & Global Middleware

### Mission

Build every shared utility, error class, and middleware, plus assemble the route-less `app.ts` and `server.ts`.

### Context

These foundational utilities and middleware (e.g., errors, auth, rate limiting) will be consumed by every feature module.

### Source of Truth

- @[Plan/implementation.md] (Section 8).

### Prerequisites

- Phase 2 must be complete.
- Redis and PostgreSQL databases available.

### Mandatory Pre-Implementation Inspection

- Inspect `src/shared` and `src/middleware` directory structures.

### Implementation Requirements

- Create `src/config/env.ts` with Zod validation for all env variables. Fail-fast on missing config.
- Implement error classes (`AppError`, `ValidationError`, `AuthenticationError`, `AuthorizationError`, `NotFoundError`, `ConflictError`, `BusinessRuleError`).
- Implement response envelope utilities (`sendSuccess`, `sendError`).
- Implement `src/shared/prisma/client.ts` as a singleton client with the soft-delete extension (for User, Shipment, DeliveryZone). Explicitly do not override `findUnique`.
- Implement Redis cache helper (`src/shared/utils/cache.ts`) with `getOrSetCache` and `invalidateCache`. Ensure Redis-outage resilience (catch errors and fallback).
- Implement utilities: `jwt.ts`, `hash.ts`, `pagination.ts`, `tracking-number.ts`, `logger.ts` (winston), constants.
- Stub and export middleware functions in `auth.middleware.ts`, `role.middleware.ts`.
- Implement `validate.middleware.ts`, `rate-limit.middleware.ts`, `request-logger.middleware.ts`, `error-handler.middleware.ts`, `not-found.middleware.ts`.
- Assemble `src/app.ts` with the global middleware pipeline in the exact order specified in Section 8.4. Mount a public `GET /api/v1/health` check. Leave a placeholder for the Stripe raw-body webhook.
- Implement `src/server.ts` to boot the app and handle graceful shutdown.

### Architecture & Design Constraints

- Only one Prisma client instance should be created.
- Responses must always use the standard envelope (except webhooks).
- The rate limiter must not block webhook routes.

### Data / Database Requirements

- The Prisma soft-delete extension must auto-filter `deletedAt: null`.

### API / Integration Requirements

- `GET /api/v1/health` must check DB and Redis connectivity without failing if one is down.

### UI / UX Requirements

- N/A

### Security Requirements

- Helmet and CORS (env-driven allow-list, no wildcard+credentials) must be configured.
- Rate limit: 100 req/15 min general.

### Error Handling & Edge Cases

- Cache helpers must never throw on Redis failures; they must log a warning and fall through to the database fetch function.
- Global error handler must never leak stack traces.

### Testing & Verification

- Run server and verify `GET /api/v1/health` reports status correctly.
- Stop DB/Redis and ensure process doesn't crash but health endpoint reports disconnected.
- Verify manual soft-delete query works via the Prisma extension.

### Non-Goals / Do Not Change

- Do not implement full body for `auth.middleware.ts` / `role.middleware.ts` yet (stub only).
- Do not implement business routes.

### Completion Criteria

- Server boots cleanly.
- Health endpoint works.
- Soft-delete extension verified.

### Final Verification Checklist

- [ ] Global error handler catches and maps AppErrors.
- [ ] Cache utility is resilient.

### Handoff to Next Phase

- The shared layer is ready to support cross-cutting domain services.

---

## Phase 4 — Cross-Cutting Domain Services: Audit Log & Notification

### Mission

Build the Audit Log and Notification services, which are consumed by nearly all subsequent modules.

### Context

These services handle immutable logging and user notifications. They have no top-level standalone routes of their own.

### Source of Truth

- @[Plan/implementation.md] (Section 14).

### Prerequisites

- Phase 3 must be complete.

### Mandatory Pre-Implementation Inspection

- Review `src/modules/audit` and `src/modules/notification`.
- Review canonical constants for actions and notification types.

### Implementation Requirements

- Create `AUDIT_ACTIONS`, `AUDIT_ENTITIES`, and `NOTIFICATION_TYPES` constants in `shared/constants`.
- Implement `audit.repository.ts` and `audit.service.ts`: `log(input)` and `list(filters, pagination, sort)`. Ensure no `update` or `delete` methods exist.
- Implement `notification.repository.ts` and `notification.service.ts`: `create(input)`, `listForUser(userId, filters, pagination)`, and `markRead(notificationId, requestingUserId)`.
- In `markRead`, enforce an ownership check (load notification, verify `userId` matches `requestingUserId` before updating).

### Architecture & Design Constraints

- AuditLog and Notification writes do not typically need to wrap in `$transaction` with other events unless explicitly specified, but `log()` must be capable of participating in transactions if needed, or executed immediately after.
- AuditLogs are strictly insert-only.

### Data / Database Requirements

- Respect the Cascade and SetNull rules configured in Phase 2.

### API / Integration Requirements

- No endpoints to mount in this phase (read routes are mounted via admin/user routers later).

### UI / UX Requirements

- N/A

### Security Requirements

- Ensure ownership validation in `markRead`.

### Error Handling & Edge Cases

- `markRead` on a non-existent notification returns `404`; non-owned returns `403`.

### Testing & Verification

- Write a quick manual verification script to test `auditLogService.log` and `notificationService.create`.

### Non-Goals / Do Not Change

- Do not build the API routes yet.
- Do not implement websocket/push notifications.

### Completion Criteria

- Both services successfully perform CRUD operations (as constrained) on the database.
- Ownership is strictly enforced for notifications.

### Final Verification Checklist

- [ ] Audit service has no update/delete methods.
- [ ] Constants contain all specified values.

### Handoff to Next Phase

- Cross-cutting services are ready to be integrated into business modules.

---

## Phase 5 — Authentication & Authorization Module

### Mission

Implement the Authentication module, including JWT access/refresh rotation, Google OAuth, and finalize auth middlewares.

### Context

Dual-mode auth (password + OAuth) with strict RBAC.

### Source of Truth

- @[Plan/implementation.md] (Section 9 and 11.1).

### Prerequisites

- Phase 4 must be complete.
- Google OAuth credentials (can be mocked/test values for now).

### Mandatory Pre-Implementation Inspection

- Review `src/modules/auth` and `src/middleware`.

### Implementation Requirements

- Implement `user.repository.ts` (initial slice): `findByEmail`, `findByGoogleId`, `findById`, `findPublicById`, `create`, `updateRefreshToken`, `linkGoogleId`. Export `PUBLIC_USER_SELECT`.
- Implement `google-oauth.service.ts` for server-side `idToken` verification.
- Implement `auth.validation.ts` with strict Zod schemas (enforcing `role ∈ {CUSTOMER, COURIER}`).
- Implement `auth.service.ts`: `register`, `login`, `googleAuth`, `refresh`, `logout`. Ensure refresh uses single-use rotation and hashed tokens.
- Complete `auth.middleware.ts` to verify JWT, check Redis blacklist, verify user is active, and attach `req.user`.
- Complete `role.middleware.ts` to authorize against a list of allowed roles.
- Implement `auth.controller.ts` and `auth.routes.ts`, exposing the 5 auth routes.
- Mount `/api/v1/auth` in `app.ts` with `authLimiter` (10 req/15min).

### Architecture & Design Constraints

- Refresh token must never be stored raw in the database (use bcrypt).
- Google auth must fall back to linking accounts by email if `googleId` is not found. New Google sign-ups are always `CUSTOMER`.

### Data / Database Requirements

- `PUBLIC_USER_SELECT` must exclude `password`, `refreshToken`, and `googleId`.

### API / Integration Requirements

- Endpoints: `POST /register`, `POST /login`, `POST /google`, `POST /refresh-token`, `POST /logout`.

### UI / UX Requirements

- N/A

### Security Requirements

- Generic "Invalid credentials" error on login failure.
- Zod enum restriction on registration roles (blocks `ADMIN`).
- Logout adds access token to Redis blacklist for remaining TTL.

### Error Handling & Edge Cases

- Reused/stale refresh token must be rejected.
- Deactivated account login must return `403`.

### Testing & Verification

- Verify registration, login, token refresh, and logout via Postman.
- Verify accessing a protected route after logout is rejected.
- Verify registration as `ADMIN` is rejected.

### Non-Goals / Do Not Change

- Do not implement profile updates or admin user management yet.

### Completion Criteria

- All 5 endpoints implemented and functional.
- JWT rotation works correctly.
- Auth middleware accurately protects routes.

### Final Verification Checklist

- [ ] Password hashes and tokens are not leaked in responses.
- [ ] Google auth resolution logic matches Section 9.2.

### Handoff to Next Phase

- Users can now authenticate, enabling protected profile routes.

---

## Phase 6 — User & Profile Module

### Mission

Implement the User profile endpoints and Notification read endpoints.

### Context

Users can manage their profile. Strict mass-assignment defense is required.

### Source of Truth

- @[Plan/implementation.md] (Section 9.5, 11.2, 14.2).

### Prerequisites

- Phase 5 must be complete.

### Mandatory Pre-Implementation Inspection

- Review `src/modules/user`.

### Implementation Requirements

- Extend `user.repository.ts` with `updateProfile`.
- Implement `user.validation.ts` using `.strict()` for `PATCH /users/me`. Whitelist: `name`, `phone`, `avatar`, `serviceArea`, `isAvailable`.
- Implement `user.service.ts`: `getProfile`, `updateProfile`, `listNotifications`, `markNotificationRead`.
- Implement `user.controller.ts` and `user.routes.ts`. Mount the 4 endpoints.
- For profile updates, courier-only fields submitted by non-couriers should be accepted by validation but ignored during persistence in the service layer.

### Architecture & Design Constraints

- All routes require authentication (`Bearer, any role`).
- Notification endpoints are mounted under `/users/me/notifications`.

### Data / Database Requirements

- Use `PUBLIC_USER_SELECT` for profile responses.

### API / Integration Requirements

- Endpoints: `GET /me`, `PATCH /me`, `GET /me/notifications`, `PATCH /me/notifications/:id/read`.

### UI / UX Requirements

- N/A

### Security Requirements

- `PATCH /users/me` strictly rejects un-whitelisted fields (e.g., `role`, `isActive`) with a `400` error.

### Error Handling & Edge Cases

- Ensure courier-only fields are safely stripped for CUSTOMER users.

### Testing & Verification

- Attempt to update `role` via profile update; ensure it returns `400`.
- Test marking notifications as read and verifying ownership (`403` on cross-user read).

### Non-Goals / Do Not Change

- Do not implement admin role updates.

### Completion Criteria

- All 4 endpoints implemented and working.
- Mass-assignment defenses verified.

### Final Verification Checklist

- [ ] `.strict()` validation is in place.
- [ ] Notifications correctly load for the authenticated user.

### Handoff to Next Phase

- Profile features complete. Proceeding to domain definitions (Zones & Pricing).

---

## Phase 7 — Delivery Zone & Pricing Module

### Mission

Implement CRUD for Delivery Zones and Pricing Rules, including the pricing calculation engine and Redis caching.

### Context

Admin users manage zones and pricing. Customers use the calculation engine to estimate shipment prices.

### Source of Truth

- @[Plan/implementation.md] (Sections 11.3, 11.4, 12.8, 15.1).

### Prerequisites

- Phase 6 must be complete.

### Mandatory Pre-Implementation Inspection

- Review `src/modules/zone` and `src/modules/pricing`.

### Implementation Requirements

- Implement `zone.repository.ts`, `service.ts`, `controller.ts`, `routes.ts`. Admin-only CRUD for zones. Any write invalidates the `zones:active` Redis cache. Soft delete returns `409` if the zone is referenced by existing shipments.
- Implement `pricing.repository.ts`, `service.ts`, `controller.ts`, `routes.ts`. Admin-only upsert for rules.
- Implement `calculate(destinationZoneId, weight, serviceType)` in `pricing.service.ts`. Formula: `basePrice + (weight * pricePerKg)`. Fallback to default rule (`zoneId: null`) if zone-specific rule is missing. Reject if weight exceeds `maxWeight` or if no rule exists. Note: Origin zone NEVER affects price.
- In rule upsert, enforce at most one default rule per service type in the service layer.
- Wire Redis caching via `getOrSetCache` for `GET /zones` and `GET /pricing/rules` (1 hr TTL).
- Trigger `ZONE_CREATED`, `ZONE_DELETED`, `PRICING_RULE_CREATED`, `PRICING_RULE_UPDATED` audit logs.

### Architecture & Design Constraints

- Prices use `Decimal` math.
- Caching must be resilient to Redis failures.

### Data / Database Requirements

- Zone deletion is soft-delete.

### API / Integration Requirements

- 4 Zone endpoints, 3 Pricing endpoints. `calculate` is accessible by CUSTOMER/ADMIN.

### UI / UX Requirements

- N/A

### Security Requirements

- Routes properly protected by `ADMIN` role middleware.

### Error Handling & Edge Cases

- Deleting in-use zone throws `ConflictError`.

### Testing & Verification

- Verify cache hit/miss and invalidation on writes.
- Verify calculation math and fallbacks.

### Non-Goals / Do Not Change

- Do not cache individual price calculation requests (optional enhancement).

### Completion Criteria

- Zone and pricing endpoints functional. Cache invalidation verified. Calculation engine returns accurate prices.

### Final Verification Checklist

- [ ] `calculate` ignores origin zone.
- [ ] Audit entries created on writes.

### Handoff to Next Phase

- Pricing engine ready for shipment creation.

---

## Phase 8 — Shipment Core Module: State Machine, Creation, Listing, Search, Tracking

### Mission

Implement the core shipment state machine and the 5 read/create shipment endpoints.

### Context

This phase implements shipment creation and reading. Lifecycle state changes are deferred to Phase 9.

### Source of Truth

- @[Plan/implementation.md] (Sections 11.5, 12.1, 12.2).

### Prerequisites

- Phase 7 must be complete. Pricing engine must work.

### Mandatory Pre-Implementation Inspection

- Review `src/modules/shipment` and `src/modules/tracking`.

### Implementation Requirements

- Implement `shipment.state-machine.ts` with all transitions and `isValidTransition` logic.
- Implement `tracking.repository.ts` and `service.ts` for insert-only timeline events. Admin sees `actorId`.
- Implement `shipment.repository.ts`, `validation.ts`, `service.ts` (create, get, list, search).
- For `POST /shipments`: Validate input. Verify active zones. Calculate estimated price using `pricingService.calculate` (destination zone + serviceType). Generate tracking number (`CLG-YYYYMMDD-XXXXX`). Create Shipment, nested Parcel, and initial TrackingEvent (`PENDING`) atomically within `$transaction`. Retry up to 5 times on tracking number `P2002` collisions.
- Implement role-scoped `GET /shipments` and `GET /shipments/search`. Customers see own; Couriers see assigned; Admins see all. Apply pagination (max 50).
- Ensure route ordering: `GET /search` before `GET /:id`.

### Architecture & Design Constraints

- Creation relies completely on server-computed prices. Client never supplies `estimatedPrice`.
- `$transaction` must enclose shipment, parcel, and tracking event creation.

### Data / Database Requirements

- Store sizes and weights properly.

### API / Integration Requirements

- Endpoints: `POST /shipments`, `GET /shipments`, `GET /shipments/search`, `GET /shipments/:id`, `GET /shipments/:id/tracking`.

### UI / UX Requirements

- N/A

### Security Requirements

- Strict role-scoping for lists and search queries.

### Error Handling & Edge Cases

- Handle unique constraint failure during tracking number generation.

### Testing & Verification

- Verify shipment creation generates tracking number and calculates correct price.
- Verify customers cannot view other customers' shipments.

### Non-Goals / Do Not Change

- Do not implement status updates, cancel, assign, edit, or delete endpoints in this phase.

### Completion Criteria

- State machine module written and isolated.
- Shipment creation and viewing work flawlessly with correct role restrictions.

### Final Verification Checklist

- [ ] Tracking number generation includes retry loop.
- [ ] `actorId` is excluded for non-admins in tracking timeline.

### Handoff to Next Phase

- Core shipment functionality is ready for lifecycle transitions.

---

## Phase 9 — Shipment Lifecycle Operations: Status Transitions, Assignment, Cancellation, Edit, Soft-Delete

### Mission

Implement the remaining 5 shipment endpoints handling all lifecycle transitions and edits.

### Context

Enforces the state machine, concurrency protection during assignment, and safe editing/deletion.

### Source of Truth

- @[Plan/implementation.md] (Sections 11.5, 12.3 to 12.7, 12.9).

### Prerequisites

- Phase 8 must be complete.

### Mandatory Pre-Implementation Inspection

- Review `src/modules/shipment`.

### Implementation Requirements

- Implement `delivery-attempt.repository.ts`.
- Extend `shipment.validation.ts`. Enforce `FAILED_DELIVERY` requires `failureReason`.
- Extend `shipment.service.ts`:
  - `updateStatus`: Verify transition via state-machine. Inside `$transaction`, update status, add TrackingEvent. If `FAILED_DELIVERY` or `DELIVERED`, calculate `attemptNumber` and insert DeliveryAttempt. Reject if > 3 attempts. Create AuditLog. Send notifications post-commit.
  - `assignCourier`: Verify status (`CONFIRMED` or `PICKUP_ASSIGNED`). Verify courier is active and `serviceArea` matches origin zone name (case-insensitive). Use conditional `updateMany` for optimistic locking (`status`, `updatedAt`). Create TrackingEvent, AuditLog, and notifications.
  - `cancel`: Verify ownership/status. (Pre-payment cancel only here; full paid cancel deferred to Phase 10).
  - `updateShipment` (General Edit): `PENDING` status only. Strict validation. Recalculate price if zone, weight, or serviceType changes.
  - `softDeleteShipment`: `PENDING` or `CANCELLED` only. Soft delete via `deletedAt`.
- Register routes, ensuring `/status` is mounted before `/:id` and `/:id/status`.

### Architecture & Design Constraints

- Reassignment is NOT a state-machine transition; it's handled via the assignment service directly.
- Ensure attempt counting happens within the same transaction as the attempt creation to prevent race conditions.

### Data / Database Requirements

- Proper AuditLogs and Notifications generated for all transitions.

### API / Integration Requirements

- Endpoints: `PATCH /shipments/:id`, `DELETE /shipments/:id`, `PATCH /shipments/:id/status`, `POST /shipments/:id/cancel`, `POST /shipments/:id/assign`.

### UI / UX Requirements

- N/A

### Security Requirements

- Courier can only update assigned shipments. Customers cannot update status directly.

### Error Handling & Edge Cases

- Optimistic locking failure on concurrent assignment returns `409 Conflict`.

### Testing & Verification

- Test concurrent assignment race condition.
- Verify courier service area validation.
- Walk through full status transition flow.

### Non-Goals / Do Not Change

- Do not integrate payment refund logic yet; mock/defer it to Phase 10.

### Completion Criteria

- All shipment lifecycle routes functional.
- State machine rules strictly enforced.
- Concurrency guard on assignment works.

### Final Verification Checklist

- [ ] Optimistic locking uses `updateMany`.
- [ ] Max 3 delivery attempts enforced.

### Handoff to Next Phase

- Shipment lifecycle is complete. Ready to handle payments.

---

## Phase 10 — Payment Integration: Stripe + bKash Gateways, Webhooks, Refunds

### Mission

Implement real Stripe (test-mode) and bKash (sandbox) integrations, handling initiation, webhooks, and refunds.

### Context

This is the highest-risk phase. Payment completion is completely driven by webhooks. NEVER manually set payment to `PAID`.

### Source of Truth

- @[Plan/implementation.md] (Section 13).

### Prerequisites

- Phase 9 must be complete.
- Stripe test keys and bKash sandbox credentials.

### Mandatory Pre-Implementation Inspection

- Review `src/modules/payment/gateways` and `src/config`.

### Implementation Requirements

- Implement `PaymentGateway` interface.
- Implement `stripe.gateway.ts`: `createPayment` (Checkout Session), `verifyPayment`, `refundPayment`.
- Implement `bkash.gateway.ts`: Token grant with caching, `createPayment` (mode 0011), `verifyPayment` (Execute+Query sequence), `refundPayment`.
- Implement `payment.repository.ts` and `payment.service.ts`:
  - `initiate`: Create or reset `Payment` row (`INITIATED`), call gateway, return URL.
  - `handleGatewayConfirmation`: Load payment. IDEMPOTENCY GUARD (`payment.status !== 'INITIATED' => return`). If verified `PAID`, in `$transaction`: mark payment paid, shipment `CONFIRMED`, set `finalPrice`, add TrackingEvent. Send notification post-commit.
  - `refundForShipment`: Call gateway refund BEFORE any DB transaction. (Completes Phase 9 cancel logic).
- Implement webhook handlers `stripe.webhook.ts` and `bkash.webhook.ts`. Ensure raw-body parsing for Stripe signature verification. Always return `200` to acknowledge.
- Mount endpoints in `payment.routes.ts`. Note Stripe raw body route must precede the global `express.json()` middleware.

### Architecture & Design Constraints

- Only `handleGatewayConfirmation` can write `PAID` to the database.
- Webhooks must be completely idempotent.
- Refunds must succeed on the gateway before local DB records are updated to `REFUNDED` / `CANCELLED`.

### Data / Database Requirements

- Re-use payment row if retrying from `FAILED` or `EXPIRED`.

### API / Integration Requirements

- 5 Payment endpoints (Section 11.6).

### UI / UX Requirements

- N/A

### Security Requirements

- Stripe signature verification. bKash Execute+Query re-verification (never trust callback payload alone).
- Couriers have zero payment visibility.

### Error Handling & Edge Cases

- Unrecognized/stale webhook events must be silently ignored (`200 OK`).

### Testing & Verification

- Use Stripe CLI to forward webhooks. Verify idempotency by sending same webhook twice.
- Verify bKash Execute+Query flow.

### Non-Goals / Do Not Change

- Do not simulate or fake payments.

### Completion Criteria

- Stripe and bKash payments work end-to-end via webhooks.
- `PAID` string search in codebase only returns the authorized webhook execution path.

### Final Verification Checklist

- [ ] No manual payment confirmation routes exist.
- [ ] Stripe route parses raw body properly.

### Handoff to Next Phase

- Payments complete. Ready for admin module.

---

## Phase 11 — Admin Module: User Management, Dashboard Stats, Audit Log Viewing

### Mission

Implement Admin management tools, dashboard stats, and audit log viewing.

### Context

Admins need tools to manage the platform, assign roles, and view metrics.

### Source of Truth

- @[Plan/implementation.md] (Sections 11.7, 11.8).

### Prerequisites

- Phase 10 must be complete.

### Mandatory Pre-Implementation Inspection

- Review `src/modules/admin`.

### Implementation Requirements

- Extend `user.repository.ts` with `findManyAdmin`, `softDelete`, `updateRole`, `countActiveShipmentsForUser`. Bypass soft-delete filtering in `findManyAdmin` explicitly so admins can view deactivated accounts.
- Implement `admin.validation.ts`, `admin.service.ts`, `admin.controller.ts`, `admin.routes.ts`.
- Endpoints: `listUsers`, `getUser`, `updateUserRole` (creates AuditLog), `softDeleteUser` (reject self-delete, reject if active shipments exist; creates AuditLog).
- Implement `dashboardStats`: Use `Promise.all` over aggregate queries. Cache result with 5-minute TTL.
- Implement `listAuditLogs` delegating to Phase 4's `auditService.list`.
- All routes require `ADMIN` role middleware.

### Architecture & Design Constraints

- Use efficient aggregate queries for dashboard stats. Never load full tables into memory.

### Data / Database Requirements

- Admins can view soft-deleted users.

### API / Integration Requirements

- 5 Admin endpoints + 1 Audit Log endpoint.

### UI / UX Requirements

- N/A

### Security Requirements

- Strict `ADMIN` role requirement on all routes.

### Error Handling & Edge Cases

- Gracefully handle cache miss for dashboard stats.

### Testing & Verification

- Verify self-delete rejection.
- Verify user with active shipments cannot be deleted.
- Confirm dashboard stats cache-hit staleness window (5 minutes).

### Non-Goals / Do Not Change

- Do not allow admins to permanently hard-delete users.

### Completion Criteria

- Admin endpoints are fully functional.
- Audit logs accurately reflect historical actions.

### Final Verification Checklist

- [ ] `findManyAdmin` bypasses soft-delete correctly.
- [ ] Dashboard stats are cached.

### Handoff to Next Phase

- Feature set is complete. Ready for hardening and testing.

---

## Phase 12 — Caching Hardening & Query/Performance Review

### Mission

Review and harden all caching logic, ensure Redis-outage resilience, and eliminate any N+1 query patterns.

### Context

A dedicated checkpoint to catch integration gaps missed during inline development.

### Source of Truth

- @[Plan/implementation.md] (Sections 15, 20).

### Prerequisites

- Phase 11 must be complete.

### Mandatory Pre-Implementation Inspection

- Review all uses of `getOrSetCache` and `invalidateCache`.
- Review all repository methods for `select` projections.

### Implementation Requirements

- Audit `zones`, `pricing/rules`, and `dashboard-stats` for correct invalidation.
- Stop Redis locally. Verify all cached endpoints fall back to Postgres and succeed without erroring out.
- Inspect all repository methods: Ensure there are no accidental full-record leaks. Ensure relations are fetched via Prisma's `include`/`select` nested queries (no N+1 loops).
- Confirm that exactly the 5 multi-step operations listed in Section 7.6 are wrapped in `$transaction`, and nothing else.

### Architecture & Design Constraints

- Redis must never be a single point of failure.

### Data / Database Requirements

- Avoid unprojected record exposure.

### API / Integration Requirements

- Endpoints must degrade gracefully.

### UI / UX Requirements

- N/A

### Security Requirements

- Confirm no `password` or `refreshToken` fields have leaked.

### Error Handling & Edge Cases

- Redis connection errors must be caught and logged as `WARN`.

### Testing & Verification

- Perform manual testing with Redis disabled.

### Non-Goals / Do Not Change

- Do not introduce new caches or queue workers.

### Completion Criteria

- Redis outage test passes.
- Codebase passes N+1 and projection review.

### Final Verification Checklist

- [ ] All cache writes invalidate appropriately.
- [ ] Transaction boundaries perfectly match Section 7.6.

### Handoff to Next Phase

- System is hardened. Ready for comprehensive test suite.

---

## Phase 13 — Integration Testing, Security & Concurrency Test Suite

### Mission

Write the full suite of unit, integration, concurrency, and security tests.

### Context

Prove the system's reliability and resilience against race conditions and security flaws.

### Source of Truth

- @[Plan/implementation.md] (Section 19).

### Prerequisites

- Phase 12 must be complete.
- Test database configured.

### Mandatory Pre-Implementation Inspection

- Review `tests/` directory structure.

### Implementation Requirements

- **Unit Tests**: State machine, pricing math, pagination, JWT.
- **Integration Tests**: Auth flows, shipment creation/listing/lifecycle, payment checkout/webhook, admin CRUD/stats.
- **Concurrency Tests**: Assignment race (optimistic locking), webhook idempotency, delivery-attempt race.
- **Security Tests**: IDOR (customer viewing other customer), role escalation, data exposure sweep, webhook spoofing.
- Execute the full 12-scenario walkthrough (Section 19.6) against the environment.

### Architecture & Design Constraints

- Use a separate `DATABASE_URL` in `.env.test`. Do not pollute development database.

### Data / Database Requirements

- Tear down and seed test DB cleanly between suites.

### API / Integration Requirements

- Test webhook handlers directly with simulated payloads.

### UI / UX Requirements

- N/A

### Security Requirements

- Assert no passwords or tokens leak in responses.

### Error Handling & Edge Cases

- Ensure concurrent operations yield exactly one success and appropriate `409` conflict errors.

### Testing & Verification

- Run `npm test`.

### Non-Goals / Do Not Change

- Do not change application business logic during this phase unless a bug is discovered.

### Completion Criteria

- All tests pass.
- 12 scenario walkthrough succeeds.

### Final Verification Checklist

- [ ] Concurrency tests reliably pass.
- [ ] Webhook signature spoofing is rejected.

### Handoff to Next Phase

- Application is thoroughly tested. Ready for documentation and final audit.

---

## Phase 14 — Seed Finalization, API Documentation & Compliance Audit

### Mission

Finalize the seed script, create the Postman collection, and perform a strict compliance audit.

### Context

Prepare the project for evaluator review and deployment.

### Source of Truth

- @[Plan/implementation.md] (Sections 21.2, 26, 27).

### Prerequisites

- Phase 13 must be complete.

### Mandatory Pre-Implementation Inspection

- Review `prisma/seed.ts`.
- Review Section 26 checklist.

### Implementation Requirements

- Finalize `prisma/seed.ts`: Idempotent upsert for Admin, Demo Customer, Demo Courier. Create 4-5 delivery zones and pricing rules covering `STANDARD` and `EXPRESS` for all scenarios. Ensure Demo Courier's `serviceArea` exactly matches a seeded zone.
- Generate Postman collection with one folder per module. Include all 38 endpoints with example bodies and environment variables for dynamic token injection.
- Run the full compliance audit from Section 26 line by line. Fix any discrepancies.
- Run full lint, format, and typecheck passes. Remove stray `console.log` statements.

### Architecture & Design Constraints

- Seed script must be safe to run multiple times (idempotent).

### Data / Database Requirements

- Seed data must fully support the evaluation scenarios.

### API / Integration Requirements

- Postman collection must be comprehensive.

### UI / UX Requirements

- N/A

### Security Requirements

- Verify seed script does not expose production credentials unintentionally (use `.env`).

### Error Handling & Edge Cases

- Ensure `seed.ts` loads environment variables correctly.

### Testing & Verification

- Run `npm run db:seed` and verify users/zones exist.
- Import Postman collection and run full happy path.

### Non-Goals / Do Not Change

- Do not introduce arbitrary new features.

### Completion Criteria

- Seed script works idempotently.
- Postman collection is complete and functional.
- Section 26 compliance audit fully passed.

### Final Verification Checklist

- [ ] Demo Courier's service area matches a seeded zone.
- [ ] No stray `console.log` statements.

### Handoff to Next Phase

- Ready for deployment.

---

## Phase 15 — Deployment & Production Launch

### Mission

Deploy the application to a public HTTPS URL with Neon PostgreSQL and Redis, and correctly configure gateway webhooks.

### Context

Finalize the project for submission.

### Source of Truth

- @[Plan/implementation.md] (Section 22).

### Prerequisites

- Phase 14 must be complete.
- Hosting account (Render or Vercel), managed DB, and Upstash Redis.

### Mandatory Pre-Implementation Inspection

- Review deployment environment variables.

### Implementation Requirements

- Provision Neon Postgres Database and Redis.
- Set all production environment variables in the hosting dashboard. Include a newly generated Stripe webhook signing secret.
- Deploy application. Run `npx prisma migrate deploy` and `npm run db:seed` against production.
- Register production webhook URLs in Stripe Dashboard and bKash Sandbox portal.
- Write final `README.md` containing: live URL, demo credentials, Postman link, API table, local setup instructions, and confirmation that gateways operate in test/sandbox mode.
- Verify live `GET /api/v1/health` endpoint.
- Run Section 19.6 walkthrough against live URL.

### Architecture & Design Constraints

- Do not commit `.env`.

### Data / Database Requirements

- Production DB migrated and seeded.

### API / Integration Requirements

- Live webhooks functional.

### UI / UX Requirements

- N/A

### Security Requirements

- Ensure strong JWT and Gateway secrets in production environment variables.

### Error Handling & Edge Cases

- Ensure cold-start latency (if serverless) does not break webhook timing.

### Testing & Verification

- Run end-to-end payment creation and webhook verification against live server.

### Non-Goals / Do Not Change

- Do not configure complex CI/CD pipelines unless as an optional enhancement post-completion.

### Completion Criteria

- Application is live, stable, and tested.
- Final commit pushed.

### Final Verification Checklist

- [ ] README is fully complete.
- [ ] Health endpoint reports fully connected.

### Handoff to Next Phase

- Project Complete.
