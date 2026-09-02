# Courier & Logistics Platform — Complete Backend Architecture Document

> **Document Type:** Master Architectural Blueprint  
> **Project:** Courier & Logistics Management Platform  
> **Assignment:** B7A6 Backend Project  
> **Tech Stack:** Node.js, TypeScript, Express.js, PostgreSQL, Prisma 7, Zod, Redis, Stripe + bKash  
> **Date:** September 2026

---

# PHASE 1 — REQUIREMENT AND PROHIBITION AUDIT

---

## A. Functional Requirements

The following functional requirements are extracted directly from the assignment materials (`project_requirements.md`, `README.md`, `idea-hub.md`). Each is annotated with its source and whether it is mandatory, recommended, or optional.

### A.1 Authentication & Authorization

| # | Requirement | Source | Priority |
|---|-------------|--------|----------|
| FR-01 | Email/Password authentication | README §5, project_requirements §Auth | **MUST** |
| FR-02 | GCP Social Login (Google Cloud Platform OAuth) | README §5 | **MUST** |
| FR-03 | Bearer Token authentication for protected APIs | project_requirements §API | **MUST** |
| FR-04 | 3 distinct roles with strict role-based authorization | README §5, project_requirements §Roles | **MUST** |
| FR-05 | Role-based middleware enforcement | project_requirements §API | **MUST** |
| FR-06 | Token management (refresh/logout) | project_requirements §Example API | **MUST** |

### A.2 User & Profile Management

| # | Requirement | Source | Priority |
|---|-------------|--------|----------|
| FR-07 | User registration | project_requirements §Example API | **MUST** |
| FR-08 | Profile management (view/update own profile) | project_requirements §Example API | **MUST** |
| FR-09 | Admin user management | project_requirements §Admin | **MUST** |
| FR-10 | Admin ability to update user roles | project_requirements §Example API | **MUST** |
| FR-11 | Demo admin credentials for evaluation | README §6 | **MUST** |

### A.3 Core Resources (Shipment/Parcel)

| # | Requirement | Source | Priority |
|---|-------------|--------|----------|
| FR-12 | Shipment/parcel creation | idea-hub §Features | **MUST** |
| FR-13 | Shipment CRUD operations | project_requirements §Core Resources | **MUST** |
| FR-14 | Soft deletes for records | project_requirements §Modern Data | **MUST** |
| FR-15 | Audit logs / activity tracking for critical actions | project_requirements §Modern Data | **MUST** |

### A.4 Business Operations & Workflows

| # | Requirement | Source | Priority |
|---|-------------|--------|----------|
| FR-16 | Status transitions (state management) | project_requirements §Business Logic | **MUST** |
| FR-17 | Resource assignments (courier assignment) | project_requirements §Business Logic, idea-hub | **MUST** |
| FR-18 | Complex calculations (pricing) | project_requirements §Business Logic, idea-hub | **MUST** |
| FR-19 | Pickup scheduling | idea-hub §Features | **RECOMMENDED** |
| FR-20 | Shipment tracking timeline | idea-hub §Features | **RECOMMENDED** |
| FR-21 | Failed delivery and return-to-sender workflow | idea-hub §Features | **RECOMMENDED** |
| FR-22 | Hub/zone management | idea-hub §Features | **RECOMMENDED** |
| FR-23 | Hub-to-hub transfers | idea-hub §Challenges | **RECOMMENDED** |
| FR-24 | Delivery pricing calculation | idea-hub §Features, §Challenges | **MUST** |

### A.5 Search, Filtering & Pagination

| # | Requirement | Source | Priority |
|---|-------------|--------|----------|
| FR-25 | At least one list API with pagination | project_requirements §Advanced Data | **MUST** |
| FR-26 | At least one list API with filtering and/or sorting | project_requirements §Advanced Data | **MUST** |
| FR-27 | Search functionality where relevant | project_requirements §Advanced Data | **MUST** |

### A.6 Payment Integration

| # | Requirement | Source | Priority |
|---|-------------|--------|----------|
| FR-28 | Real payment integration (bKash/Stripe/SSLCommerz) | README §7, project_requirements §Payment | **MUST — ZERO MARKS IF MISSING** |
| FR-29 | Payment creation/initiation | project_requirements §Payment | **MUST** |
| FR-30 | Success/cancellation callbacks | project_requirements §Payment | **MUST** |
| FR-31 | Payment status tracking | project_requirements §Payment | **MUST** |
| FR-32 | Payment verification/webhook | project_requirements §Example API | **MUST** |

### A.7 Admin Operations

| # | Requirement | Source | Priority |
|---|-------------|--------|----------|
| FR-33 | Admin user management | project_requirements §Admin | **MUST** |
| FR-34 | Admin statistics/dashboard | project_requirements §Example API | **MUST** |
| FR-35 | Admin audit log viewing | project_requirements §Example API | **MUST** |

### A.8 Additional Features (from idea-hub, Optional/Recommended)

| # | Requirement | Source | Priority |
|---|-------------|--------|----------|
| FR-36 | Courier earnings tracking | idea-hub §Features | **OPTIONAL** |
| FR-37 | Notifications | idea-hub §Features | **OPTIONAL** |
| FR-38 | Analytics and reports | idea-hub §Features | **OPTIONAL** |
| FR-39 | Multi-organization support | idea-hub §Features | **OPTIONAL — SKIP (over-engineering risk)** |

### A.9 Documentation & Deployment

| # | Requirement | Source | Priority |
|---|-------------|--------|----------|
| FR-40 | Postman/Swagger API documentation | README §1 | **MUST — ZERO MARKS IF MISSING** |
| FR-41 | Working live API URL (Vercel/Render) | README §9 | **MUST** |
| FR-42 | Minimum 20 meaningful backend commits | README §3 | **MUST** |
| FR-43 | Minimum 20 meaningful API endpoints | project_requirements §20 APIs | **MUST** |

---

## B. Non-Functional Requirements

### B.1 Explicit Assignment NFRs

| # | Requirement | Source | Priority |
|---|-------------|--------|----------|
| NFR-01 | Password hashing (secure, e.g., bcrypt) | project_requirements §Security | **MUST** |
| NFR-02 | Never expose secrets | project_requirements §Security | **MUST** |
| NFR-03 | Rate limiting (express-rate-limit) | project_requirements §Security | **MUST** |
| NFR-04 | Security headers (helmet) | project_requirements §Security | **MUST** |
| NFR-05 | CORS configuration | project_requirements §Security | **MUST** |
| NFR-06 | Database indexing | project_requirements §Performance | **MUST** |
| NFR-07 | Efficient Prisma queries (use `select`) | project_requirements §Performance | **MUST** |
| NFR-08 | Redis caching | project_requirements §Performance | **SHOULD (listed as optional in tech stack, but mentioned in performance)** |
| NFR-09 | Database transactions for concurrency/race conditions | project_requirements §Performance | **MUST** |
| NFR-10 | API versioning (`/api/v1/...`) | project_requirements §API Technical | **MUST** |
| NFR-11 | Consistent JSON response format | README §2, project_requirements §API | **MUST — ZERO MARKS IF MISSING** |
| NFR-12 | Server-side validation (Zod/Joi) with structured errors | README §4, project_requirements §Validation | **MUST** |
| NFR-13 | Proper relationships, constraints, indexing, and transactions in PostgreSQL+Prisma | README §8 | **MUST** |
| NFR-14 | RESTful naming conventions | project_requirements §RESTful Design | **MUST** |
| NFR-15 | Modular architecture, clean code | Marks distribution §Performance & Code Quality | **SHOULD** |
| NFR-16 | File/image upload and storage (Multer & Cloudinary) | project_requirements §Tech Stack | **OPTIONAL (use if needed)** |

### B.2 Recommended NFRs (Best Practice, Not Explicitly Graded)

| # | Requirement | Priority |
|---|-------------|----------|
| NFR-17 | Structured logging | **RECOMMENDED** |
| NFR-18 | Request correlation IDs | **OPTIONAL** |
| NFR-19 | Health check endpoint | **RECOMMENDED** |
| NFR-20 | Graceful error handling (global error handler) | **MUST (implied by marks distribution)** |
| NFR-21 | Environment configuration management | **MUST (implied by deployment)** |

---

## C. STRICTLY PROHIBITED / HIGH-RISK IMPLEMENTATIONS

This is the most critical section. Violations here risk **zero marks**.

### C.1 PROHIBITED: Cash on Delivery (COD)

| Aspect | Detail |
|--------|--------|
| **What is prohibited** | Cash on Delivery, Pay Later, or any fake manual payment status updates |
| **Exact wording** | *"Cash on Delivery, Pay Later, or fake manual status updates are NOT accepted."* (project_requirements line 28) |
| **Why prohibited** | The assignment demands real payment gateway integration. COD bypasses this entirely. |
| **Architectural risk** | Adding a COD payment method, a "cash" payment type enum, or any endpoint that marks a payment as "paid" without going through bKash/Stripe/SSLCommerz webhook verification |
| **Patterns to avoid** | `PATCH /payments/:id/mark-paid` without gateway verification; `paymentMethod: 'COD'` in schema; any manual admin "confirm payment" button |
| **Safe alternative** | All payments MUST flow through a real payment gateway. Payment status MUST only be updated via gateway webhook/callback. |
| **Verification** | Search codebase for "COD", "cash", "manual", "pay_later". Ensure no endpoint allows direct payment status mutation without gateway reference. |

### C.2 PROHIBITED: Simulated/Fake Payments

| Aspect | Detail |
|--------|--------|
| **What is prohibited** | Simulated or fake payment processing |
| **Exact wording** | *"Simulated/fake payments are NOT accepted."* (README line 45) |
| **Why prohibited** | Real payment gateway integration is a graded component (10% of marks) |
| **Architectural risk** | Creating a mock payment service, using test endpoints that auto-approve, or having payment succeed without actual gateway interaction |
| **Patterns to avoid** | Mock payment gateway class; auto-approving payments in dev mode; `if (process.env.NODE_ENV === 'development') payment.status = 'PAID'` |
| **Safe alternative** | Use Stripe test mode (test API keys) or SSLCommerz sandbox. These are REAL gateway integrations using test credentials, which is different from "fake/simulated." |
| **Verification** | Confirm payment initiation creates a real session/transaction with the gateway. Confirm payment completion only happens via webhook/callback from the gateway. |

### C.3 PROHIBITED: E-commerce Clone

| Aspect | Detail |
|--------|--------|
| **What is prohibited** | Regular e-commerce clones or projects already covered in the course |
| **Exact wording** | *"regular e-commerce clones or projects already covered in this course are not allowed"* (README line 26) |
| **Why prohibited** | The assignment requires a unique problem domain |
| **Architectural risk** | Making the platform look like a generic online shop (cart, checkout, product catalog) |
| **Safe alternative** | Focus on logistics-specific workflows: shipment lifecycle, courier assignment, hub management, tracking |
| **Verification** | Ensure domain entities are logistics-focused (Shipment, Parcel, Courier, Hub), not shopping-focused (Cart, Product, Order) |

### C.4 HIGH RISK: More or Fewer Than 3 Roles

| Aspect | Detail |
|--------|--------|
| **What is at risk** | Having more or fewer than 3 primary roles |
| **Exact wording** | *"Each project must have 3 fixed primary roles"* (project_requirements line 27); *"strict role-based authorization for 3 distinct roles"* (README line 43) |
| **Why risky** | The assignment is explicit about EXACTLY 3 roles. Adding more could be seen as over-engineering or not following instructions. |
| **Architectural risk** | The idea-hub suggests 5 possible roles (Customer, Courier, Hub Manager, Operations Manager, Admin). Using all 5 would violate the 3-role constraint. |
| **Safe alternative** | Consolidate to exactly 3 roles: **Customer**, **Courier** (delivery personnel), **Admin** (combines hub management, operations, and administration) |
| **Verification** | Count distinct roles in the roles enum. Must be exactly 3. |

### C.5 HIGH RISK: Fewer Than 20 Meaningful APIs

| Aspect | Detail |
|--------|--------|
| **What is at risk** | Not reaching 20 meaningful endpoints |
| **Exact wording** | *"Each project must implement and document at least 20 meaningful API endpoints"* |
| **Why risky** | Direct mark deduction |
| **Safe alternative** | Plan API endpoints carefully. Do not pad with dummy endpoints. |
| **Verification** | Count endpoints in Postman collection. Each must be meaningful and documented. |

### C.6 HIGH RISK: Missing GCP Social Login

| Aspect | Detail |
|--------|--------|
| **What is at risk** | Not implementing Google OAuth social login |
| **Exact wording** | *"Implement authentication (Email/Password + GCP Social Login)"* (README line 43) |
| **Why risky** | Listed as mandatory requirement in the auth section which is worth 15% |
| **Safe alternative** | Implement Google OAuth 2.0 login flow alongside email/password |
| **Verification** | Test Google login flow end-to-end |

### C.7 HIGH RISK: No Soft Deletes

| Aspect | Detail |
|--------|--------|
| **What is at risk** | Using hard deletes instead of soft deletes |
| **Exact wording** | *"Implement Soft Deletes (e.g., using a deletedAt timestamp) instead of hard deleting records"* |
| **Safe alternative** | Add `deletedAt DateTime?` to relevant Prisma models. Use Prisma Client Extensions (`$extends`) to auto-filter soft-deleted records. |

### C.8 HIGH RISK: No Audit Logs

| Aspect | Detail |
|--------|--------|
| **What is at risk** | Missing audit log / activity tracking |
| **Exact wording** | *"Implement Audit Logs / Activity Tracking for critical actions"* |
| **Safe alternative** | Create AuditLog table, log critical status changes, role updates, etc. |

---

## D. Compliance Matrix

| ID | Requirement / Rule | Type | Priority | Architectural Impact | Risk of Violation | Compliance Strategy |
|----|-------------------|------|----------|---------------------|-------------------|-------------------|
| R-01 | Exactly 3 fixed primary roles | RULE | **MUST** | Role enum, middleware, all authorization | HIGH — idea-hub suggests 5 roles | Consolidate to Customer, Courier, Admin |
| R-02 | Real payment gateway (bKash/Stripe/SSLCommerz) | RULE | **MUST** | Payment module, webhook handling | **CRITICAL — 0 marks** | Integrate both Stripe (test mode) and bKash (sandbox) with real API calls |
| R-03 | NO Cash on Delivery | **PROHIBITED** | **CRITICAL** | Payment schema, business logic | **CRITICAL — 0 marks** | No COD enum, no manual payment confirmation |
| R-04 | NO fake/simulated payments | **PROHIBITED** | **CRITICAL** | Payment service layer | **CRITICAL — 0 marks** | All payments through real gateway sandbox |
| R-05 | NO e-commerce clone | **PROHIBITED** | HIGH | Domain model naming/structure | MEDIUM | Use logistics domain entities only |
| R-06 | Email/Password + GCP Social Login | RULE | **MUST** | Auth module, OAuth flow | HIGH | Implement both auth methods |
| R-07 | Bearer Token authentication | RULE | **MUST** | Auth middleware | LOW | JWT with Bearer scheme |
| R-08 | Minimum 20 meaningful APIs | RULE | **MUST** | API surface area | MEDIUM | Plan 25+ endpoints |
| R-09 | API versioning `/api/v1/...` | RULE | **MUST** | Router structure | LOW | Prefix all routes |
| R-10 | Consistent JSON response format | RULE | **MUST — 0 marks** | Response wrapper | LOW | Global response utility |
| R-11 | Server-side validation (Zod/Joi) | RULE | **MUST** | Validation middleware | LOW | Zod schemas per endpoint |
| R-12 | Soft deletes (`deletedAt`) | RULE | **MUST** | Prisma models, query filters | MEDIUM | Prisma Client Extension (`$extends`) for auto soft-delete filtering |
| R-13 | Audit logs for critical actions | RULE | **MUST** | AuditLog table, service hooks | MEDIUM | Log status changes, role updates, assignments |
| R-14 | PostgreSQL + Prisma 7 | RULE | **MUST** | Database layer | LOW | Use Prisma ORM exclusively |
| R-15 | Pagination support | RULE | **MUST** | List endpoints | LOW | `?page=1&limit=10` on list APIs |
| R-16 | Filtering and sorting support | RULE | **MUST** | List endpoints | LOW | `?status=active&sortBy=createdAt` |
| R-17 | Search functionality | RULE | **MUST** | Search endpoint | LOW | Text search on relevant fields |
| R-18 | Rate limiting (express-rate-limit) | RULE | **MUST** | Middleware | LOW | Apply to auth & sensitive routes |
| R-19 | Security headers (helmet) | RULE | **MUST** | Middleware | LOW | `app.use(helmet())` |
| R-20 | CORS configuration | RULE | **MUST** | Middleware | LOW | `app.use(cors({...}))` |
| R-21 | Password hashing | RULE | **MUST** | Auth service | LOW | bcrypt |
| R-22 | Never expose secrets | RULE | **MUST** | Env config, .gitignore | LOW | `.env` + env validation |
| R-23 | Database indexing | RULE | **MUST** | Prisma schema `@@index` | LOW | Index frequently queried fields |
| R-24 | Efficient Prisma queries (`select`) | RULE | **SHOULD** | Repository layer | LOW | Use `select` to limit fields |
| R-25 | Redis caching | RULE | **SHOULD** | Caching layer | LOW | Cache frequently-read data |
| R-26 | Database transactions | RULE | **MUST** | Service layer | MEDIUM | Use `prisma.$transaction` for multi-step ops |
| R-27 | Postman/Swagger documentation | RULE | **MUST — 0 marks** | Documentation | LOW | Maintain Postman collection |
| R-28 | Live deployed API | RULE | **MUST** | Deployment config | LOW | Deploy to Vercel/Render |
| R-29 | 20+ meaningful commits | RULE | **MUST** | Git workflow | LOW | Commit incrementally |
| R-30 | Demo admin credentials | RULE | **MUST** | Seed script | LOW | Seed admin user |
| R-31 | Business logic beyond CRUD | RULE | **MUST** | Service layer | MEDIUM | Status transitions, assignments, pricing |
| R-32 | RESTful naming conventions | RULE | **MUST** | Routes | LOW | Follow REST conventions |
| R-33 | Node.js + TypeScript + Express | RULE | **MUST** | Framework | LOW | Use specified stack |
| R-34 | File storage (Multer & Cloudinary) | RULE | **OPTIONAL** | File upload middleware | LOW | Use only if needed |
| R-35 | Email (Nodemailer/Resend) | RULE | **OPTIONAL** | Notification service | LOW | Nice-to-have |

---

# PHASE 2 — ANALYSIS OF INITIAL IDEA

The idea-hub provides a starting workflow and feature suggestions. Here is the evaluation:

## Workflow Evaluation

```
Customer → Create Shipment → Pickup Request → Courier Assigned → Parcel Picked Up
→ Origin Hub → Transit / Hub Transfer → Destination Hub → Out for Delivery → Delivered
```

| Aspect | Verdict | Reasoning |
|--------|---------|-----------|
| Overall flow | **Keep with modification** | The linear flow is solid but needs branching for failures, cancellations, and returns |
| Create Shipment | **Keep** | Core business operation |
| Pickup Request | **Keep with modification** | Merge into shipment creation flow rather than separate entity |
| Courier Assigned | **Keep** | Assignment is a key business operation |
| Parcel Picked Up | **Keep** | Status transition with real business meaning |
| Origin Hub | **Simplify** | Hub processing is good but multi-hub routing is over-engineering for this assignment scope |
| Transit / Hub Transfer | **Simplify** | Keep as a status but don't build complex inter-hub routing |
| Destination Hub | **Simplify** | Single status transition, not a complex hub entity |
| Out for Delivery | **Keep** | Critical status for tracking |
| Delivered | **Keep** | Terminal state |

## Role Evaluation

| Proposed Role | Verdict | Reasoning |
|---------------|---------|-----------|
| Customer | **Keep** | One of the 3 required roles |
| Courier | **Keep** | One of the 3 required roles — the delivery personnel |
| Hub Manager | **Remove** | Merging into Admin. Assignment requires exactly 3 roles. |
| Operations Manager | **Remove** | Merging into Admin. Assignment requires exactly 3 roles. |
| Admin | **Keep** | One of the 3 required roles — absorbs hub/operations management |

**Final 3 Roles: CUSTOMER, COURIER, ADMIN**

## Feature Evaluation

| Feature | Verdict | Reasoning |
|---------|---------|-----------|
| Customer registration & auth | **Keep** | Mandatory |
| Parcel/shipment creation | **Keep** | Core resource |
| Pickup scheduling | **Keep with modification** | Part of shipment creation, not separate module |
| Courier assignment | **Keep** | Key business operation |
| Hub and zone management | **Simplify** | Admin manages zones/areas, no complex hub entity needed |
| Shipment tracking timeline | **Keep** | Excellent for audit/tracking requirement |
| Delivery pricing | **Keep** | Business logic beyond CRUD |
| Failed delivery & return-to-sender | **Keep** | Shows state machine complexity |
| Courier earnings | **Remove** | Over-engineering — not required; payments go to the platform, not direct courier payouts |
| Notifications | **Keep minimal** | In-app only; email optional |
| Payment integration | **Keep** | Mandatory (Stripe + bKash) |
| Admin dashboard stats | **Keep** | Required by assignment |
| Analytics and reports | **Simplify** | Basic stats endpoint, not a full analytics engine |
| Multi-organization support | **Remove** | Significant over-engineering, not required |

## Components to Add (Missing from Initial Idea)

| Component | Reasoning |
|-----------|-----------|
| Google OAuth social login | Mandatory but not mentioned in idea |
| Consistent response format wrapper | Mandatory NFR |
| Soft delete infrastructure | Mandatory requirement |
| Audit log system | Mandatory requirement |
| Rate limiting | Mandatory security requirement |
| Webhook handling for payments | Required for real payment flow |
| Search endpoint | Mandatory data fetching requirement |
| Seed script with admin credentials | Mandatory for evaluation |

---

# PHASE 3 — COMPLETE SYSTEM DESIGN

---

# 1. SYSTEM OVERVIEW

## Business Perspective

The **Courier & Logistics Platform** is a backend system that enables customers to create and ship parcels, tracks those parcels through a logistics lifecycle, assigns couriers for pickup and delivery, calculates pricing, and processes payments through a real payment gateway.

**Primary Users:**
1. **Customers** — People or businesses who want to send parcels
2. **Couriers** — Delivery personnel who pick up and deliver parcels
3. **Admins** — Platform operators who manage users, couriers, zones, pricing, and oversee operations

**Core Business Domain:** Last-mile and inter-city parcel delivery logistics

**Major Business Workflows:**
1. Shipment creation & pricing
2. Courier assignment & dispatch
3. Pickup & delivery lifecycle
4. Payment processing
5. Tracking & status management
6. Admin operations & reporting

## Technical Perspective

- **Architecture:** Modular monolith with layered architecture (Controller → Service → Repository)
- **API Style:** RESTful with versioning (`/api/v1/`)
- **Database:** PostgreSQL via Prisma 7 ORM
- **Auth:** JWT (access + refresh tokens) with bcrypt password hashing + Google OAuth 2.0
- **Payments:** Stripe Checkout Sessions (test mode) + bKash Payment Gateway (sandbox) with webhook/callback verification
- **Caching:** Redis for session data, rate limiting, and frequently-accessed reads
- **Validation:** Zod schemas for all request bodies
- **Deployment:** Vercel Serverless Functions or Render

---

# 2. SYSTEM ARCHITECTURE

## Architecture Style

**Layered Modular Monolith** — A single deployable unit with clear internal module boundaries and layered separation of concerns.

```
┌─────────────────────────────────────────────────────┐
│                    Express App                       │
│  ┌───────────┐ ┌──────────┐ ┌────────────────────┐ │
│  │ Middleware │ │  Routes   │ │  Global Handlers   │ │
│  └─────┬─────┘ └─────┬────┘ └────────┬───────────┘ │
│        │              │               │              │
│  ┌─────▼──────────────▼───────────────▼────────────┐│
│  │              Controller Layer                    ││
│  │  (Parse request, call service, format response)  ││
│  └──────────────────┬──────────────────────────────┘│
│                     │                                │
│  ┌──────────────────▼──────────────────────────────┐│
│  │              Service Layer                       ││
│  │  (Business logic, validation, orchestration)     ││
│  └──────────────────┬──────────────────────────────┘│
│                     │                                │
│  ┌──────────────────▼──────────────────────────────┐│
│  │              Repository Layer                    ││
│  │  (Data access, Prisma queries)                   ││
│  └──────────────────┬──────────────────────────────┘│
│                     │                                │
│  ┌──────────────────▼──────────────────────────────┐│
│  │              Database (PostgreSQL)               ││
│  └─────────────────────────────────────────────────┘│
│                                                      │
│  ┌──────────┐  ┌─────────┐  ┌────────┐  ┌───────────┐│
│  │  Redis   │  │ Stripe  │  │ bKash  │  │Cloudinary ││
│  │ (Cache)  │  │(Payment)│  │(Payment│  │ (Files)   ││
│  └──────────┘  └─────────┘  └────────┘  └───────────┘│
└──────────────────────────────────────────────────────┘
```

## Application Layers

### 1. Middleware Layer
- **Authentication middleware** — JWT verification, attach user to request
- **Authorization middleware** — Role-based access control
- **Validation middleware** — Zod schema validation
- **Rate limiting middleware** — express-rate-limit
- **Security middleware** — helmet, CORS
- **Error handling middleware** — Global error handler
- **Request logging middleware** — Structured request/response logging

### 2. Controller Layer
- Parse and destructure request (params, query, body)
- Call appropriate service method
- Format response using standard response utility
- Never contains business logic

### 3. Service Layer
- All business logic lives here
- Orchestrates repository calls
- Enforces business rules and state transitions
- Handles transactions via `prisma.$transaction`
- Creates audit log entries
- Triggers notifications

### 4. Repository Layer
- Direct Prisma client calls
- Encapsulates query complexity
- Handles soft-delete filtering
- Uses `select` for efficient queries
- Applies pagination, filtering, sorting

### 5. External Services
- **Stripe Service** — Stripe Checkout session creation, webhook processing
- **bKash Service** — bKash payment creation, callback processing
- **Payment Gateway Abstraction** — Unified interface for both Stripe and bKash
- **Redis Service** — Cache get/set/invalidate
- **Cloudinary Service** — File upload (if needed)
- **Google OAuth Service** — Token exchange and user info retrieval

---

# 3. USER ROLES

---

## Role 1: CUSTOMER

### Purpose
End-users who send parcels through the logistics platform.

### Responsibilities
- Register and manage their account
- Create shipments with parcel details and addresses
- Pay for shipments via Stripe or bKash
- Track their shipment status
- Cancel shipments (before pickup)
- View their shipment history

### Permissions
- Create shipments
- View own shipments
- View own shipment tracking
- Cancel own shipments (before pickup)
- Initiate payments for own shipments
- View own payment history
- Update own profile
- View own notifications

### Restrictions
- Cannot view other customers' shipments
- Cannot assign couriers
- Cannot change shipment status
- Cannot manage other users
- Cannot access admin endpoints
- Cannot modify pricing or zones

### Security Boundaries
- Can only access resources where `customerId = currentUser.id`
- Cannot see courier personal data
- Cannot see internal operational data (audit logs, admin stats)

---

## Role 2: COURIER

### Purpose
Delivery personnel who pick up and deliver parcels assigned to them.

### Responsibilities
- Manage their courier profile (availability, service areas)
- View assigned shipments
- Update shipment status through the delivery lifecycle (picked up, in transit, out for delivery, delivered, failed)
- Record delivery attempts
- Mark deliveries as complete or failed

### Permissions
- View assigned shipments
- Update status of assigned shipments (within valid transitions)
- Record delivery attempts on assigned shipments
- View own delivery history
- Update own profile and availability
- View own notifications

### Restrictions
- Cannot create shipments
- Cannot assign shipments to themselves or others
- Cannot view unassigned shipments
- Cannot view other couriers' assignments
- Cannot manage users
- Cannot access payment details
- Cannot modify pricing or zones
- Cannot access admin endpoints
- Can only transition statuses that are valid for their current assignment stage

### Security Boundaries
- Can only access shipments where `courierId = currentUser.id`
- Cannot see customer payment information
- Cannot see admin operational data
- Status transitions are validated against state machine

---

## Role 3: ADMIN

### Purpose
Platform operators who manage the entire logistics operation — users, couriers, shipments, zones, pricing, and monitoring.

### Responsibilities
- Manage all users (view, update roles, soft-delete)
- Assign couriers to shipments
- Manage delivery zones and pricing rules
- Monitor all shipments across the platform
- View audit logs
- View platform statistics
- Handle disputed/problematic shipments
- Manage courier availability

### Permissions
- Admin user management: list, view, role update, soft delete/deactivate
- Full read access on all shipments
- Assign/reassign couriers to shipments
- Update shipment status (override capability)
- Full CRUD on delivery zones
- Full CRUD on pricing rules
- View all payments
- View all audit logs
- View platform statistics/dashboard
- Update user roles

### Restrictions
- Cannot delete audit logs (immutable)
- Cannot modify payment records directly (gateway-driven)
- Should not create shipments on behalf of customers (customers self-serve)

### Security Boundaries
- Full platform visibility
- Audit logs track admin actions
- Cannot modify payment status without gateway verification (hard constraint from assignment)

---

# 4. ROLE-PERMISSION MATRIX

| Resource / Action | CUSTOMER | COURIER | ADMIN |
|-------------------|----------|---------|-------|
| **Auth** | | | |
| Register | ✅ | ✅ | — (seeded) |
| Login | ✅ | ✅ | ✅ |
| Google OAuth login | ✅ | ✅ | ✅ |
| Refresh token | ✅ | ✅ | ✅ |
| Logout | ✅ | ✅ | ✅ |
| **Profile** | | | |
| View own profile | ✅ | ✅ | ✅ |
| Update own profile | ✅ | ✅ | ✅ |
| **Users** | | | |
| List all users | ❌ | ❌ | ✅ |
| View any user | ❌ | ❌ | ✅ |
| Update user role | ❌ | ❌ | ✅ |
| Soft-delete user | ❌ | ❌ | ✅ |
| **Shipments** | | | |
| Create shipment | ✅ (own) | ❌ | ❌ |
| View own shipments | ✅ (own) | ❌ | ✅ (all) |
| View assigned shipments | ❌ | ✅ (assigned) | ✅ (all) |
| View any shipment | ❌ | ❌ | ✅ |
| List all shipments | ❌ | ❌ | ✅ |
| Cancel shipment | ✅ (own, pre-pickup) | ❌ | ✅ |
| Search shipments | ✅ (own) | ✅ (assigned) | ✅ (all) |
| **Shipment Status** | | | |
| Update to PICKED_UP | ❌ | ✅ (assigned) | ✅ |
| Update to IN_TRANSIT | ❌ | ✅ (assigned) | ✅ |
| Update to OUT_FOR_DELIVERY | ❌ | ✅ (assigned) | ✅ |
| Update to DELIVERED | ❌ | ✅ (assigned) | ✅ |
| Update to FAILED_DELIVERY | ❌ | ✅ (assigned) | ✅ |
| Update to RETURNED | ❌ | ❌ | ✅ |
| Update to CANCELLED | ✅ (own, pre-pickup) | ❌ | ✅ |
| **Courier Assignment** | | | |
| Assign courier | ❌ | ❌ | ✅ |
| Reassign courier | ❌ | ❌ | ✅ |
| **Tracking** | | | |
| View tracking history | ✅ (own shipment) | ✅ (assigned) | ✅ (all) |
| **Delivery Attempts** | | | |
| Record delivery attempt | ❌ | ✅ (assigned) | ❌ |
| View delivery attempts | ✅ (own shipment) | ✅ (assigned) | ✅ (all) |
| **Payments** | | | |
| Initiate payment | ✅ (own shipment) | ❌ | ❌ |
| View own payments | ✅ (own) | ❌ | ✅ (all) |
| View all payments | ❌ | ❌ | ✅ |
| **Delivery Zones** | | | |
| View zones | ✅ (read) | ✅ (read) | ✅ (full CRUD) |
| Create/update/delete zone | ❌ | ❌ | ✅ |
| **Pricing Rules** | | | |
| View pricing (calculate) | ✅ (read) | ❌ | ✅ (full CRUD) |
| Manage pricing rules | ❌ | ❌ | ✅ |
| **Audit Logs** | | | |
| View audit logs | ❌ | ❌ | ✅ |
| **Statistics** | | | |
| View dashboard stats | ❌ | ❌ | ✅ |
| **Notifications** | | | |
| View own notifications | ✅ | ✅ | ✅ |
| Mark notification read | ✅ | ✅ | ✅ |

---

# 5. COMPLETE BUSINESS WORKFLOW

## 5.1 Shipment Lifecycle (End-to-End)

```
Customer creates shipment
         │
         ▼
   ┌─────────────┐
   │   PENDING    │ ← Initial state (awaiting payment)
   └──────┬──────┘
          │ Customer pays via Stripe
          ▼
   ┌─────────────┐
   │  CONFIRMED   │ ← Payment successful
   └──────┬──────┘
          │ Admin assigns courier
          ▼
   ┌──────────────────┐
   │ PICKUP_ASSIGNED   │ ← Courier assigned for pickup
   └──────┬───────────┘
          │ Courier picks up parcel
          ▼
   ┌─────────────┐
   │  PICKED_UP   │ ← Parcel in courier's possession
   └──────┬──────┘
          │ Courier begins transit
          ▼
   ┌─────────────┐
   │  IN_TRANSIT  │ ← Parcel moving to destination area
   └──────┬──────┘
          │ Courier reaches delivery area
          ▼
   ┌──────────────────┐
   │ OUT_FOR_DELIVERY  │ ← Final leg of delivery
   └──────┬───────────┘
          │
          ├──── Success ────┐
          │                  ▼
          │           ┌─────────────┐
          │           │  DELIVERED   │ ← Terminal state (success)
          │           └─────────────┘
          │
          └──── Failure ────┐
                             ▼
                    ┌──────────────────┐
                    │ FAILED_DELIVERY   │ ← Delivery attempt failed
                    └──────┬───────────┘
                           │
                    ┌──────┴──────┐
                    │              │
                    ▼              ▼
          ┌──────────────┐  ┌───────────┐
          │ REATTEMPT     │  │ RETURNED  │
          │ (→ OUT_FOR_   │  │           │ ← Terminal state (returned to sender)
          │   DELIVERY)   │  └───────────┘
          └──────────────┘
```

**Cancellation Branch (from PENDING or CONFIRMED only):**

```
   PENDING/CONFIRMED
          │ Customer or Admin cancels
          ▼
   ┌─────────────┐
   │  CANCELLED   │ ← Terminal state
   └─────────────┘
   (If CONFIRMED: refund initiated via Stripe)
```

## 5.2 Stage Details

### Stage: PENDING (Shipment Created)

| Aspect | Detail |
|--------|--------|
| **Trigger** | Customer submits shipment creation request |
| **Actor** | Customer |
| **Preconditions** | User authenticated as Customer; valid addresses; valid parcel dimensions/weight |
| **Action** | Create Shipment record, create Parcel record, calculate price, generate tracking number |
| **DB Changes** | INSERT into `shipments`, `parcels`, `tracking_events` |
| **Status** | `PENDING` |
| **Validation** | Origin/destination addresses required; parcel weight > 0; parcel dimensions valid; delivery zone exists |
| **Permissions** | Customer only |
| **Possible Failures** | Validation error, invalid zone, invalid parcel specs |
| **Recovery** | Return validation errors; no records created |
| **Notifications** | None (awaiting payment) |
| **Next States** | CONFIRMED (payment), CANCELLED (customer cancels) |

### Stage: CONFIRMED (Payment Received)

| Aspect | Detail |
|--------|--------|
| **Trigger** | Stripe webhook confirms payment success |
| **Actor** | System (via Stripe webhook) |
| **Preconditions** | Shipment is PENDING; valid Stripe payment session |
| **Action** | Update shipment status to CONFIRMED; update payment record to PAID |
| **DB Changes** | UPDATE `shipments.status`, UPDATE `payments.status`, INSERT `tracking_events` |
| **Status** | `CONFIRMED` |
| **Validation** | Stripe signature verification; shipment must be PENDING; payment amount matches |
| **Permissions** | System only (webhook) |
| **Possible Failures** | Invalid webhook signature, shipment already cancelled, duplicate webhook |
| **Recovery** | Reject invalid webhooks; idempotent processing |
| **Notifications** | Notify customer: "Payment confirmed, shipment is being processed" |
| **Next States** | PICKUP_ASSIGNED, CANCELLED |

### Stage: PICKUP_ASSIGNED

| Aspect | Detail |
|--------|--------|
| **Trigger** | Admin assigns a courier to the shipment |
| **Actor** | Admin |
| **Preconditions** | Shipment is CONFIRMED; courier exists, is active, and is available |
| **Action** | Assign courier, update status |
| **DB Changes** | UPDATE `shipments.courierId`, UPDATE `shipments.status`, INSERT `tracking_events`, INSERT `audit_logs` |
| **Validation** | Courier must be active; courier must serve the origin zone; shipment must be CONFIRMED |
| **Permissions** | Admin only |
| **Possible Failures** | Courier not available, invalid courier, race condition (double assignment) |
| **Recovery** | Transaction with locking; return conflict error |
| **Notifications** | Notify courier: "New pickup assignment"; Notify customer: "Courier assigned" |
| **Next States** | PICKED_UP, CANCELLED (admin override) |

### Stage: PICKED_UP

| Aspect | Detail |
|--------|--------|
| **Trigger** | Courier confirms parcel pickup |
| **Actor** | Courier (assigned) |
| **Preconditions** | Shipment is PICKUP_ASSIGNED; courier is the assigned courier |
| **Action** | Update status to PICKED_UP |
| **DB Changes** | UPDATE `shipments.status`, INSERT `tracking_events` |
| **Validation** | Only assigned courier can update; shipment must be PICKUP_ASSIGNED |
| **Permissions** | Assigned courier only |
| **Next States** | IN_TRANSIT |

### Stage: IN_TRANSIT

| Aspect | Detail |
|--------|--------|
| **Trigger** | Courier marks parcel as in transit |
| **Actor** | Courier (assigned) |
| **Preconditions** | Shipment is PICKED_UP |
| **Action** | Update status |
| **DB Changes** | UPDATE `shipments.status`, INSERT `tracking_events` |
| **Next States** | OUT_FOR_DELIVERY |

### Stage: OUT_FOR_DELIVERY

| Aspect | Detail |
|--------|--------|
| **Trigger** | Courier marks parcel as out for delivery (in destination area) |
| **Actor** | Courier (assigned) |
| **Preconditions** | Shipment is IN_TRANSIT |
| **Action** | Update status |
| **DB Changes** | UPDATE `shipments.status`, INSERT `tracking_events` |
| **Next States** | DELIVERED, FAILED_DELIVERY |

### Stage: DELIVERED (Terminal — Success)

| Aspect | Detail |
|--------|--------|
| **Trigger** | Courier confirms successful delivery |
| **Actor** | Courier (assigned) |
| **Preconditions** | Shipment is OUT_FOR_DELIVERY |
| **Action** | Mark as delivered, record delivery timestamp |
| **DB Changes** | UPDATE `shipments.status`, UPDATE `shipments.deliveredAt`, INSERT `tracking_events`, INSERT `delivery_attempts` (success) |
| **Next States** | None (terminal) |
| **Notifications** | Notify customer: "Your parcel has been delivered" |

### Stage: FAILED_DELIVERY

| Aspect | Detail |
|--------|--------|
| **Trigger** | Courier reports delivery failure |
| **Actor** | Courier (assigned) |
| **Preconditions** | Shipment is OUT_FOR_DELIVERY |
| **Action** | Record failed attempt with reason, update status |
| **DB Changes** | UPDATE `shipments.status`, INSERT `tracking_events`, INSERT `delivery_attempts` (failed) |
| **Failure Reasons** | Recipient unavailable, wrong address, refused delivery |
| **Next States** | OUT_FOR_DELIVERY (reattempt), RETURNED (admin decision) |
| **Notifications** | Notify customer: "Delivery attempt failed — [reason]" |

### Stage: RETURNED (Terminal — Failed)

| Aspect | Detail |
|--------|--------|
| **Trigger** | Admin marks shipment for return after max delivery attempts or customer request |
| **Actor** | Admin |
| **Preconditions** | Shipment is FAILED_DELIVERY |
| **Action** | Mark as returned |
| **DB Changes** | UPDATE `shipments.status`, INSERT `tracking_events`, INSERT `audit_logs` |
| **Next States** | None (terminal) |

### Stage: CANCELLED (Terminal)

| Aspect | Detail |
|--------|--------|
| **Trigger** | Customer cancels (pre-pickup) or Admin cancels |
| **Actor** | Customer (own, if PENDING/CONFIRMED), Admin (any non-terminal) |
| **Preconditions** | Shipment is PENDING or CONFIRMED (for customer); any non-terminal state (for admin) |
| **Action** | Cancel shipment; if paid, initiate Stripe refund |
| **DB Changes** | UPDATE `shipments.status`, INSERT `tracking_events`, INSERT `audit_logs`; if paid: INSERT `refund` record |
| **Next States** | None (terminal) |

---

# 6. STATE MACHINES

## 6.1 Shipment State Machine

```
States: PENDING, CONFIRMED, PICKUP_ASSIGNED, PICKED_UP, IN_TRANSIT,
        OUT_FOR_DELIVERY, DELIVERED, FAILED_DELIVERY, RETURNED, CANCELLED

Transitions:
  PENDING          → CONFIRMED         (system, on payment success)
  PENDING          → CANCELLED         (customer, admin)
  CONFIRMED        → PICKUP_ASSIGNED   (admin)
  CONFIRMED        → CANCELLED         (customer, admin)
  PICKUP_ASSIGNED  → PICKUP_ASSIGNED   (admin, courier reassignment — swaps courierId)
  PICKUP_ASSIGNED  → PICKED_UP         (assigned courier)
  PICKUP_ASSIGNED  → CANCELLED         (admin only)
  PICKED_UP        → IN_TRANSIT        (assigned courier)
  IN_TRANSIT       → OUT_FOR_DELIVERY  (assigned courier)
  OUT_FOR_DELIVERY → DELIVERED         (assigned courier)
  OUT_FOR_DELIVERY → FAILED_DELIVERY   (assigned courier)
  FAILED_DELIVERY  → OUT_FOR_DELIVERY  (admin triggers reattempt)
  FAILED_DELIVERY  → RETURNED          (admin)

Terminal States: DELIVERED, RETURNED, CANCELLED

Invalid Transitions (examples):
  PENDING → PICKED_UP           (cannot skip payment)
  DELIVERED → any               (terminal)
  CANCELLED → any               (terminal)
  IN_TRANSIT → PENDING          (cannot go backward)
  CONFIRMED → DELIVERED          (cannot skip intermediate steps)
```

## 6.2 Payment State Machine

```
States: INITIATED, PAID, FAILED, REFUNDED, EXPIRED

Transitions:
  INITIATED → PAID      (Stripe webhook: checkout.session.completed)
                         (bKash callback: payment success)
  INITIATED → FAILED    (Stripe webhook: payment failed)
                         (bKash callback: payment failed/cancelled)
  INITIATED → EXPIRED   (Stripe session expires, bKash timeout, or system timeout)
  FAILED    → INITIATED (customer retries payment — resets existing Payment row)
  EXPIRED   → INITIATED (customer retries payment — resets existing Payment row)
  PAID      → REFUNDED  (admin cancels shipment after payment)

Terminal States: PAID, REFUNDED
Non-terminal failure states (retryable): FAILED, EXPIRED

Critical Rule: ONLY the Stripe webhook or bKash callback handler can transition INITIATED → PAID.
No manual endpoint can mark a payment as PAID.
```

## 6.3 Delivery Attempt State

```
States (per attempt): SUCCESS, FAILED

Each attempt is an immutable record — no state transitions.
A delivery attempt is created when a courier reports delivery outcome.
```

---

# 7. DATABASE DESIGN

## Entity-Relationship Overview

```
User ──1:N──> Shipment (as customer)
User ──1:N──> Shipment (as courier)
Shipment ──1:1──> Parcel
Shipment ──1:N──> TrackingEvent
Shipment ──1:N──> DeliveryAttempt
Shipment ──1:1──> Payment
DeliveryZone (standalone reference table)
PricingRule ──N:1──> DeliveryZone
AuditLog (standalone)
Notification ──N:1──> User
```

---

### Table: `users`

| Field | Type | Nullable | Default | Constraints |
|-------|------|----------|---------|-------------|
| `id` | UUID | No | `gen_random_uuid()` | PK |
| `email` | VARCHAR(255) | No | — | UNIQUE |
| `password` | VARCHAR(255) | Yes | — | Nullable for OAuth-only users |
| `name` | VARCHAR(100) | No | — | — |
| `phone` | VARCHAR(20) | Yes | — | — |
| `role` | ENUM('CUSTOMER','COURIER','ADMIN') | No | 'CUSTOMER' | CHECK |
| `avatar` | TEXT | Yes | — | Cloudinary URL |
| `googleId` | VARCHAR(255) | Yes | — | UNIQUE, for Google OAuth |
| `isActive` | BOOLEAN | No | true | — |
| `isAvailable` | BOOLEAN | No | true | Courier availability flag |
| `serviceArea` | VARCHAR(100) | Yes | — | Courier's operating zone |
| `refreshToken` | TEXT | Yes | — | Hashed refresh token |
| `createdAt` | TIMESTAMP | No | `now()` | — |
| `updatedAt` | TIMESTAMP | No | `now()` | Auto-update |
| `deletedAt` | TIMESTAMP | Yes | null | Soft delete |

**Indexes:** `@@index([email])`, `@@index([role])`, `@@index([googleId])`, `@@index([deletedAt])`

---

### Table: `shipments`

| Field | Type | Nullable | Default | Constraints |
|-------|------|----------|---------|-------------|
| `id` | UUID | No | `gen_random_uuid()` | PK |
| `trackingNumber` | VARCHAR(20) | No | — | UNIQUE, auto-generated |
| `customerId` | UUID | No | — | FK → `users.id` |
| `courierId` | UUID | Yes | null | FK → `users.id` |
| `status` | ENUM (see state machine) | No | 'PENDING' | — |
| `originAddress` | TEXT | No | — | Full origin address |
| `originCity` | VARCHAR(100) | No | — | — |
| `originZoneId` | UUID | No | — | FK → `delivery_zones.id` |
| `destinationAddress` | TEXT | No | — | Full destination address |
| `destinationCity` | VARCHAR(100) | No | — | — |
| `destinationZoneId` | UUID | No | — | FK → `delivery_zones.id` |
| `recipientName` | VARCHAR(100) | No | — | — |
| `recipientPhone` | VARCHAR(20) | No | — | — |
| `serviceType` | ENUM('STANDARD','EXPRESS') | No | 'STANDARD' | — |
| `estimatedPrice` | DECIMAL(10,2) | No | — | Calculated at creation |
| `finalPrice` | DECIMAL(10,2) | Yes | null | Confirmed after payment |
| `notes` | TEXT | Yes | — | Delivery instructions |
| `pickedUpAt` | TIMESTAMP | Yes | null | — |
| `deliveredAt` | TIMESTAMP | Yes | null | — |
| `cancelledAt` | TIMESTAMP | Yes | null | — |
| `cancellationReason` | TEXT | Yes | null | — |
| `createdAt` | TIMESTAMP | No | `now()` | — |
| `updatedAt` | TIMESTAMP | No | `now()` | — |
| `deletedAt` | TIMESTAMP | Yes | null | Soft delete |

**Indexes:** `@@index([customerId])`, `@@index([courierId])`, `@@index([status])`, `@@index([trackingNumber])`, `@@index([originZoneId])`, `@@index([destinationZoneId])`, `@@index([createdAt])`, `@@index([deletedAt])`

**Shipment Status Enum:**
```
PENDING, CONFIRMED, PICKUP_ASSIGNED, PICKED_UP, IN_TRANSIT,
OUT_FOR_DELIVERY, DELIVERED, FAILED_DELIVERY, RETURNED, CANCELLED
```

---

### Table: `parcels`

| Field | Type | Nullable | Default | Constraints |
|-------|------|----------|---------|-------------|
| `id` | UUID | No | `gen_random_uuid()` | PK |
| `shipmentId` | UUID | No | — | FK → `shipments.id`, UNIQUE (1:1) |
| `weight` | DECIMAL(8,2) | No | — | CHECK > 0, in kg |
| `length` | DECIMAL(8,2) | No | — | CHECK > 0, in cm |
| `width` | DECIMAL(8,2) | No | — | CHECK > 0, in cm |
| `height` | DECIMAL(8,2) | No | — | CHECK > 0, in cm |
| `description` | VARCHAR(500) | Yes | — | Parcel contents description |
| `isFragile` | BOOLEAN | No | false | — |
| `createdAt` | TIMESTAMP | No | `now()` | — |
| `updatedAt` | TIMESTAMP | No | `now()` | — |

**Indexes:** `@@index([shipmentId])`

---

### Table: `tracking_events`

| Field | Type | Nullable | Default | Constraints |
|-------|------|----------|---------|-------------|
| `id` | UUID | No | `gen_random_uuid()` | PK |
| `shipmentId` | UUID | No | — | FK → `shipments.id` |
| `status` | ShipmentStatus ENUM | No | — | Status at this event |
| `description` | VARCHAR(500) | No | — | Human-readable description |
| `location` | VARCHAR(200) | Yes | — | Optional location info |
| `actorId` | UUID | Yes | — | FK → `users.id` (who triggered) |
| `createdAt` | TIMESTAMP | No | `now()` | Immutable event timestamp |

**Indexes:** `@@index([shipmentId, createdAt])`, `@@index([shipmentId])`

> **IMPORTANT:** Tracking events are **immutable**. They are INSERT-only. Never update or delete tracking events.

---

### Table: `delivery_attempts`

| Field | Type | Nullable | Default | Constraints |
|-------|------|----------|---------|-------------|
| `id` | UUID | No | `gen_random_uuid()` | PK |
| `shipmentId` | UUID | No | — | FK → `shipments.id` |
| `courierId` | UUID | No | — | FK → `users.id` |
| `attemptNumber` | INT | No | — | Sequential (1, 2, 3…) |
| `status` | ENUM('SUCCESS','FAILED') | No | — | — |
| `failureReason` | VARCHAR(500) | Yes | — | Required if FAILED |
| `notes` | TEXT | Yes | — | Courier notes |
| `attemptedAt` | TIMESTAMP | No | `now()` | — |

**Indexes:** `@@index([shipmentId])`, `@@index([courierId])`

---

### Table: `payments`

| Field | Type | Nullable | Default | Constraints |
|-------|------|----------|---------|-------------|
| `id` | UUID | No | `gen_random_uuid()` | PK |
| `shipmentId` | UUID | No | — | FK → `shipments.id`, UNIQUE (1:1) |
| `amount` | DECIMAL(10,2) | No | — | — |
| `currency` | VARCHAR(3) | No | 'BDT' | — |
| `status` | ENUM('INITIATED','PAID','FAILED','REFUNDED','EXPIRED') | No | 'INITIATED' | — |
| `method` | ENUM('STRIPE','BKASH') | No | — | Payment gateway used |
| `stripeSessionId` | VARCHAR(255) | Yes | — | Stripe checkout session ID (null for bKash) |
| `stripePaymentIntentId` | VARCHAR(255) | Yes | — | Stripe payment intent ID (null for bKash) |
| `bkashPaymentId` | VARCHAR(255) | Yes | — | bKash payment ID (null for Stripe) |
| `bkashTrxId` | VARCHAR(255) | Yes | — | bKash transaction ID (null for Stripe) |
| `transactionId` | VARCHAR(255) | Yes | — | Unified gateway transaction reference |
| `gatewayResponse` | JSONB | Yes | — | Raw gateway response for audit/debugging |
| `paidAt` | TIMESTAMP | Yes | null | — |
| `refundedAt` | TIMESTAMP | Yes | null | — |
| `createdAt` | TIMESTAMP | No | `now()` | — |
| `updatedAt` | TIMESTAMP | No | `now()` | — |

**Indexes:** `@@index([shipmentId])`, `@@index([stripeSessionId])`, `@@index([bkashPaymentId])`, `@@index([status])`, `@@index([method])`

> **CRITICAL:** The `status` field MUST only transition to `PAID` via the Stripe webhook handler or bKash callback handler. No manual endpoint may set `status = 'PAID'`.

---

### Table: `delivery_zones`

| Field | Type | Nullable | Default | Constraints |
|-------|------|----------|---------|-------------|
| `id` | UUID | No | `gen_random_uuid()` | PK |
| `name` | VARCHAR(100) | No | — | UNIQUE |
| `city` | VARCHAR(100) | No | — | — |
| `isActive` | BOOLEAN | No | true | — |
| `createdAt` | TIMESTAMP | No | `now()` | — |
| `updatedAt` | TIMESTAMP | No | `now()` | — |
| `deletedAt` | TIMESTAMP | Yes | null | Soft delete |

**Indexes:** `@@index([name])`, `@@index([city])`

---

### Table: `pricing_rules`

| Field | Type | Nullable | Default | Constraints |
|-------|------|----------|---------|-------------|
| `id` | UUID | No | `gen_random_uuid()` | PK |
| `zoneId` | UUID | Yes | null | FK → `delivery_zones.id` (null = default rule) |
| `serviceType` | ENUM('STANDARD','EXPRESS') | No | — | — |
| `basePrice` | DECIMAL(10,2) | No | — | Base shipping fee |
| `pricePerKg` | DECIMAL(10,2) | No | — | Per-kg rate |
| `maxWeight` | DECIMAL(8,2) | Yes | null | Maximum weight limit |
| `isActive` | BOOLEAN | No | true | — |
| `createdAt` | TIMESTAMP | No | `now()` | — |
| `updatedAt` | TIMESTAMP | No | `now()` | — |

**Indexes:** `@@index([zoneId, serviceType])`, `@@unique([zoneId, serviceType])`

---

### Table: `audit_logs`

| Field | Type | Nullable | Default | Constraints |
|-------|------|----------|---------|-------------|
| `id` | UUID | No | `gen_random_uuid()` | PK |
| `actorId` | UUID | Yes | — | FK → `users.id` (null for system actions) |
| `action` | VARCHAR(100) | No | — | e.g., 'SHIPMENT_STATUS_CHANGED', 'USER_ROLE_UPDATED' |
| `entity` | VARCHAR(50) | No | — | e.g., 'shipment', 'user', 'payment' |
| `entityId` | UUID | No | — | ID of the affected entity |
| `oldValue` | JSONB | Yes | — | Previous state/value |
| `newValue` | JSONB | Yes | — | New state/value |
| `ipAddress` | VARCHAR(45) | Yes | — | Request IP |
| `description` | TEXT | Yes | — | Human-readable description |
| `createdAt` | TIMESTAMP | No | `now()` | Immutable |

**Indexes:** `@@index([entity, entityId])`, `@@index([actorId])`, `@@index([action])`, `@@index([createdAt])`

> **IMPORTANT:** Audit logs are **immutable**. They are INSERT-only. They MUST NOT be soft-deletable. No update or delete operations allowed.

---

### Table: `notifications`

| Field | Type | Nullable | Default | Constraints |
|-------|------|----------|---------|-------------|
| `id` | UUID | No | `gen_random_uuid()` | PK |
| `userId` | UUID | No | — | FK → `users.id` |
| `type` | VARCHAR(50) | No | — | e.g., 'SHIPMENT_UPDATE', 'PAYMENT_CONFIRMED', 'COURIER_ASSIGNED' |
| `title` | VARCHAR(200) | No | — | — |
| `message` | TEXT | No | — | — |
| `referenceId` | UUID | Yes | — | Related entity ID |
| `referenceType` | VARCHAR(50) | Yes | — | Related entity type |
| `isRead` | BOOLEAN | No | false | — |
| `createdAt` | TIMESTAMP | No | `now()` | — |

**Indexes:** `@@index([userId, isRead])`, `@@index([userId, createdAt])`

---

# 8. DATABASE RELATIONSHIPS

## Textual ERD

```
users (1) ──────< (N) shipments          [customerId FK]
users (1) ──────< (N) shipments          [courierId FK, nullable]
delivery_zones (1) ──────< (N) shipments [originZoneId FK]
delivery_zones (1) ──────< (N) shipments [destinationZoneId FK]
shipments (1) ──── (1) parcels           [shipmentId FK, unique]
shipments (1) ──────< (N) tracking_events [shipmentId FK]
shipments (1) ──────< (N) delivery_attempts [shipmentId FK]
shipments (1) ──── (1) payments          [shipmentId FK, unique]
users (1) ──────< (N) tracking_events    [actorId FK, nullable]
users (1) ──────< (N) delivery_attempts  [courierId FK]
users (1) ──────< (N) notifications      [userId FK]
users (1) ──────< (N) audit_logs         [actorId FK, nullable]
delivery_zones (1) ──────< (N) pricing_rules [zoneId FK, nullable]
```

## Relationship Details

| Relationship | Type | Cascade Strategy |
|-------------|------|-----------------|
| User → Shipments (as customer) | One-to-Many | RESTRICT (cannot delete user with shipments) |
| User → Shipments (as courier) | One-to-Many (nullable) | SET NULL (courier can be unassigned) |
| Shipment → Parcel | One-to-One | CASCADE (delete parcel if shipment deleted) |
| Shipment → TrackingEvents | One-to-Many | CASCADE |
| Shipment → DeliveryAttempts | One-to-Many | CASCADE |
| Shipment → Payment | One-to-One | CASCADE |
| User → Notifications | One-to-Many | CASCADE |
| User → AuditLogs | One-to-Many | SET NULL (preserve logs even if user deleted) |
| DeliveryZone → Shipments (origin) | One-to-Many | RESTRICT (cannot delete zone with shipments) |
| DeliveryZone → Shipments (destination) | One-to-Many | RESTRICT (cannot delete zone with shipments) |
| DeliveryZone → PricingRules | One-to-Many | CASCADE |

---

# 9. DATABASE NORMALIZATION AND DATA INTEGRITY

## Normalization Strategy

- **3NF (Third Normal Form):** All tables are in 3NF. No transitive dependencies.
- **Address fields** are stored directly on the shipment rather than in a separate `addresses` table. This is intentional denormalization for simplicity — addresses are specific to each shipment and rarely queried independently.

## Data Integrity Rules

| Rule | Enforcement |
|------|-------------|
| Email uniqueness | UNIQUE constraint on `users.email` |
| Tracking number uniqueness | UNIQUE constraint on `shipments.trackingNumber` |
| One parcel per shipment | UNIQUE constraint on `parcels.shipmentId` |
| One payment per shipment | UNIQUE constraint on `payments.shipmentId`. On retry, the existing FAILED/EXPIRED row is reset to INITIATED (no new row created). |
| Pricing rule uniqueness per zone+service | UNIQUE constraint on `pricing_rules.[zoneId, serviceType]` |
| Zone referential integrity | FK constraints on `shipments.originZoneId` and `shipments.destinationZoneId` → `delivery_zones.id` |
| Positive parcel dimensions | CHECK constraints (> 0) |
| Positive payment amount | CHECK constraint (> 0) |
| Valid status transitions | Enforced in service layer (state machine validation) |
| Referential integrity | Foreign key constraints on all relationships (including zone FKs) |
| Soft delete consistency | `deletedAt IS NULL` filter in all non-admin queries |

## Transaction Boundaries

The following operations MUST use `prisma.$transaction`:

1. **Shipment creation** — Create shipment + parcel + tracking event atomically
2. **Payment confirmation** (webhook) — Update payment status + update shipment status + create tracking event
3. **Courier assignment** — Update shipment courier + update shipment status + create tracking event + create audit log
4. **Delivery completion** — Update shipment status + create delivery attempt + create tracking event
5. **Shipment cancellation with refund** — Update shipment status + create tracking event + initiate refund + create audit log

## Concurrency Concerns

| Scenario | Risk | Mitigation |
|----------|------|------------|
| Two admins assign courier to same shipment simultaneously | Double assignment | Use `prisma.$transaction` with a `WHERE status IN ('CONFIRMED', 'PICKUP_ASSIGNED')` check and optimistic locking via `updatedAt`; only one succeeds |
| Duplicate Stripe webhook / bKash callback delivery | Double payment processing | Check payment status before updating; idempotent webhook handler for both gateways |
| Courier updates status while admin cancels | Inconsistent state | Transaction with status check; reject stale transitions |
| Multiple delivery attempt records | Incorrect attempt count | Use `MAX(attemptNumber) + 1` within transaction |

---

# 10. API ARCHITECTURE

## Complete API Endpoint Catalog

All routes are prefixed with `/api/v1`.

---

### Module: Authentication (5 endpoints)

#### `POST /api/v1/auth/register`
| Aspect | Detail |
|--------|--------|
| **Purpose** | Register a new user (Customer or Courier) |
| **Auth** | Public |
| **Request Body** | `{ name, email, password, phone?, role: 'CUSTOMER' \| 'COURIER' }` |
| **Validation** | Email format; password min 8 chars, must include uppercase, lowercase, number; name required; role must be CUSTOMER or COURIER |
| **Success Response** | `201 { success: true, message: "User registered successfully", data: { user, accessToken, refreshToken } }` |
| **Errors** | `400` validation error; `409` email already exists |
| **Side Effects** | Hash password (bcrypt), generate JWT tokens |

#### `POST /api/v1/auth/login`
| Aspect | Detail |
|--------|--------|
| **Purpose** | Login with email and password |
| **Auth** | Public |
| **Request Body** | `{ email, password }` |
| **Validation** | Email format; password required |
| **Success Response** | `200 { success: true, message: "Login successful", data: { user, accessToken, refreshToken } }` |
| **Errors** | `401` invalid credentials; `403` account deactivated/deleted |

#### `POST /api/v1/auth/google`
| Aspect | Detail |
|--------|--------|
| **Purpose** | Login or register via Google OAuth |
| **Auth** | Public |
| **Request Body** | `{ idToken }` (Google ID token from client) |
| **Validation** | Verify Google ID token with Google's API |
| **Success Response** | `200 { success: true, data: { user, accessToken, refreshToken } }` |
| **Side Effects** | 1) If user exists with matching `googleId` → log in. 2) If user exists with same email but no `googleId` → link Google account to existing user, log in. 3) If no user exists → create new user (CUSTOMER role, password = null). |
| **Errors** | `401` invalid Google token |

#### `POST /api/v1/auth/refresh-token`
| Aspect | Detail |
|--------|--------|
| **Purpose** | Get new access token using refresh token |
| **Auth** | Public (refresh token in body) |
| **Request Body** | `{ refreshToken }` |
| **Success Response** | `200 { success: true, data: { accessToken, refreshToken } }` |
| **Errors** | `401` invalid/expired refresh token |

#### `POST /api/v1/auth/logout`
| Aspect | Detail |
|--------|--------|
| **Purpose** | Invalidate refresh token |
| **Auth** | Bearer Token (any authenticated user) |
| **Success Response** | `200 { success: true, message: "Logged out successfully" }` |
| **Side Effects** | Clear refresh token from database; invalidate in Redis |

---

### Module: User & Profile (4 endpoints)

#### `GET /api/v1/users/me`
| Aspect | Detail |
|--------|--------|
| **Purpose** | Get current user's profile |
| **Auth** | Bearer Token (any role) |
| **Success Response** | `200 { success: true, data: { user } }` |

#### `PATCH /api/v1/users/me`
| Aspect | Detail |
|--------|--------|
| **Purpose** | Update current user's profile |
| **Auth** | Bearer Token (any role) |
| **Request Body** | `{ name?, phone?, avatar?, serviceArea? (courier only), isAvailable? (courier only) }` |
| **Validation** | Name min 2 chars; phone format; service area valid zone name (courier only) |
| **Success Response** | `200 { success: true, data: { user } }` |

#### `GET /api/v1/users/me/notifications`
| Aspect | Detail |
|--------|--------|
| **Purpose** | Get current user's notifications |
| **Auth** | Bearer Token (any role) |
| **Query Params** | `?page=1&limit=10&isRead=false` |
| **Success Response** | `200 { success: true, data: { notifications, meta: { page, limit, total } } }` |

#### `PATCH /api/v1/users/me/notifications/:id/read`
| Aspect | Detail |
|--------|--------|
| **Purpose** | Mark a notification as read |
| **Auth** | Bearer Token (own notification only) |
| **Success Response** | `200 { success: true, message: "Notification marked as read" }` |
| **Errors** | `404` notification not found; `403` not owner |

---

### Module: Shipments (10 endpoints)

#### `POST /api/v1/shipments`
| Aspect | Detail |
|--------|--------|
| **Purpose** | Create a new shipment |
| **Auth** | Bearer Token (CUSTOMER only) |
| **Request Body** | `{ originAddress, originCity, originZoneId, destinationAddress, destinationCity, destinationZoneId, recipientName, recipientPhone, serviceType, parcel: { weight, length, width, height, description?, isFragile? }, notes? }` |
| **Validation** | All address fields required; parcel dimensions > 0; weight > 0; valid zone names; valid service type |
| **Success Response** | `201 { success: true, data: { shipment (with parcel, trackingNumber, estimatedPrice) } }` |
| **Side Effects** | Calculate price from pricing rules; generate tracking number; create tracking event (PENDING); create parcel |
| **DB Transaction** | Yes — shipment + parcel + tracking_event |

#### `GET /api/v1/shipments`
| Aspect | Detail |
|--------|--------|
| **Purpose** | List shipments (scoped by role) |
| **Auth** | Bearer Token |
| **Role Scoping** | CUSTOMER: own shipments; COURIER: assigned shipments; ADMIN: all shipments |
| **Query Params** | `?page=1&limit=10&status=CONFIRMED&sortBy=createdAt&sortOrder=desc` |
| **Success Response** | `200 { success: true, data: { shipments, meta: { page, limit, total, totalPages } } }` |
| **Features** | Pagination, filtering by status, sorting |

#### `GET /api/v1/shipments/search`
| Aspect | Detail |
|--------|--------|
| **Purpose** | Search shipments by tracking number, recipient name, or address |
| **Auth** | Bearer Token |
| **Role Scoping** | CUSTOMER: own; COURIER: assigned; ADMIN: all |
| **Query Params** | `?q=keyword&page=1&limit=10` |
| **Success Response** | `200 { success: true, data: { shipments, meta } }` |

#### `GET /api/v1/shipments/:id`
| Aspect | Detail |
|--------|--------|
| **Purpose** | Get shipment details |
| **Auth** | Bearer Token |
| **Authorization** | CUSTOMER: own only; COURIER: assigned only; ADMIN: any |
| **Success Response** | `200 { success: true, data: { shipment (with parcel, tracking, payment) } }` |
| **Errors** | `404` not found; `403` not authorized |

#### `GET /api/v1/shipments/:id/tracking`
| Aspect | Detail |
|--------|--------|
| **Purpose** | Get shipment tracking history |
| **Auth** | Bearer Token |
| **Authorization** | CUSTOMER: own only; COURIER: assigned only; ADMIN: any |
| **Success Response** | `200 { success: true, data: { trackingEvents: [...] } }` |

#### `PATCH /api/v1/shipments/:id/status`
| Aspect | Detail |
|--------|--------|
| **Purpose** | Update shipment status (state transition) |
| **Auth** | Bearer Token (COURIER for assigned, ADMIN for any) |
| **Request Body** | `{ status, notes?, failureReason? (for FAILED_DELIVERY), location? }` |
| **Validation** | State machine validation — only valid transitions allowed; role-based transition permissions |
| **Success Response** | `200 { success: true, data: { shipment } }` |
| **Side Effects** | Create tracking event; create delivery attempt if DELIVERED/FAILED_DELIVERY; create audit log; send notification |
| **DB Transaction** | Yes |
| **Errors** | `400` invalid transition; `403` not authorized; `404` not found |

#### `POST /api/v1/shipments/:id/cancel`
| Aspect | Detail |
|--------|--------|
| **Purpose** | Cancel a shipment |
| **Auth** | Bearer Token (CUSTOMER for own pre-pickup; ADMIN for any) |
| **Request Body** | `{ reason? }` |
| **Validation** | CUSTOMER: status must be PENDING or CONFIRMED; ADMIN: status must not be terminal |
| **Success Response** | `200 { success: true, message: "Shipment cancelled" }` |
| **Side Effects** | If CONFIRMED (paid): initiate Stripe refund; create tracking event; audit log; notification |
| **DB Transaction** | Yes |

#### `POST /api/v1/shipments/:id/assign`
| Aspect | Detail |
|--------|--------|
| **Purpose** | Assign or reassign a courier to a shipment |
| **Auth** | Bearer Token (ADMIN only) |
| **Request Body** | `{ courierId }` |
| **Validation** | Shipment must be CONFIRMED or PICKUP_ASSIGNED; courier must exist, be active, be available, and be a COURIER role |
| **Success Response** | `200 { success: true, data: { shipment } }` |
| **Side Effects** | If CONFIRMED: set courierId, update status to PICKUP_ASSIGNED. If PICKUP_ASSIGNED (reassignment): swap courierId, notify old courier of removal, keep status as PICKUP_ASSIGNED. In both cases: create tracking event; audit log; notify new courier and customer |
| **DB Transaction** | Yes (prevents double assignment via optimistic locking) |
| **Errors** | `400` invalid state; `404` courier/shipment not found; `409` concurrent modification |

#### `PATCH /api/v1/shipments/:id`
| Aspect | Detail |
|--------|--------|
| **Purpose** | Update editable fields of a shipment (general edit) |
| **Auth** | Bearer Token (CUSTOMER: own shipment; ADMIN: any) |
| **Request Body** | `{ originAddress?, originCity?, originZoneId?, destinationAddress?, destinationCity?, destinationZoneId?, recipientName?, recipientPhone?, serviceType?, notes?, parcel?: { weight?, length?, width?, height?, description?, isFragile? } }` |
| **Validation** | Shipment must be in `PENDING` status (not yet paid). All address/parcel fields validated same as creation. |
| **Success Response** | `200 { success: true, data: { shipment } }` |
| **Side Effects** | If weight, serviceType, or destinationZoneId changes: server recalculates `estimatedPrice`. Create audit log entry. |
| **Restrictions** | Cannot modify: `status`, `courierId`, `customerId`, `estimatedPrice` (auto-recalculated), `finalPrice`, `trackingNumber`, `createdAt`, `deletedAt`, any payment fields. |
| **Errors** | `400` validation / shipment not PENDING; `403` not owner (customer) or not admin; `404` not found |

#### `DELETE /api/v1/shipments/:id`
| Aspect | Detail |
|--------|--------|
| **Purpose** | Soft-delete a shipment |
| **Auth** | Bearer Token (CUSTOMER: own shipment; ADMIN: any) |
| **Validation** | Shipment must be in `PENDING` or `CANCELLED` status. Active/paid/in-transit/delivered shipments cannot be deleted. |
| **Success Response** | `200 { success: true, message: "Shipment deleted" }` |
| **Side Effects** | Sets `deletedAt` timestamp (soft delete). Create audit log entry. |
| **Errors** | `400` shipment not in deletable state; `403` not owner (customer) or not admin; `404` not found |

---

### Module: Payments (5 endpoints)

#### `POST /api/v1/payments/initiate`
| Aspect | Detail |
|--------|--------|
| **Purpose** | Create or retry a payment session (Stripe Checkout or bKash) for a shipment |
| **Auth** | Bearer Token (CUSTOMER, own shipment only) |
| **Request Body** | `{ shipmentId, method: 'STRIPE' \| 'BKASH' }` |
| **Validation** | Shipment must be PENDING; shipment must belong to customer; if existing payment is PAID, reject (already paid); valid method |
| **Success Response** | `200 { success: true, data: { paymentUrl, paymentId, method } }` |
| **Side Effects** | If no Payment record exists: create new Payment (INITIATED). If existing Payment is FAILED/EXPIRED: reset to INITIATED, update method and gateway IDs. Create new Stripe Checkout Session or bKash Create Payment. |
| **Errors** | `400` already paid; `404` shipment not found; `403` not owner |
| **Notes** | `paymentUrl` is the Stripe checkout URL or bKash payment redirect URL. Retry reuses the same Payment row (preserves UNIQUE 1:1 with shipment). |

#### `POST /api/v1/payments/webhook/stripe`
| Aspect | Detail |
|--------|--------|
| **Purpose** | Stripe webhook callback (payment success/failure) |
| **Auth** | Stripe signature verification (NOT Bearer Token) |
| **Request Body** | Raw Stripe event payload |
| **Validation** | Verify Stripe webhook signature; idempotency check |
| **Success Response** | `200 { received: true }` |
| **Side Effects** | Update payment status (PAID/FAILED); update shipment status (CONFIRMED on success); create tracking event; send notification |
| **DB Transaction** | Yes |
| **CRITICAL** | This is one of only TWO endpoints that can set payment status to PAID |

#### `POST /api/v1/payments/webhook/bkash`
| Aspect | Detail |
|--------|--------|
| **Purpose** | bKash redirect callback (customer returns after payment) |
| **Auth** | bKash token verification + Query Payment API confirmation (NOT Bearer Token) |
| **Request Body** | bKash callback payload (`{ paymentID, status }`) |
| **Validation** | Call bKash Execute Payment API to finalize; call bKash Query Payment API to verify authenticity; idempotency check |
| **Success Response** | `200 { received: true }` |
| **Side Effects** | Update payment status (PAID/FAILED); update shipment status (CONFIRMED on success); create tracking event; send notification |
| **DB Transaction** | Yes |
| **CRITICAL** | This is one of only TWO endpoints that can set payment status to PAID |

#### `GET /api/v1/payments/:id`
| Aspect | Detail |
|--------|--------|
| **Purpose** | Get payment details |
| **Auth** | Bearer Token (CUSTOMER: own payment; ADMIN: any) |
| **Success Response** | `200 { success: true, data: { payment } }` |

#### `GET /api/v1/payments/shipment/:shipmentId`
| Aspect | Detail |
|--------|--------|
| **Purpose** | Get payment by shipment ID |
| **Auth** | Bearer Token (CUSTOMER: own; ADMIN: any) |
| **Success Response** | `200 { success: true, data: { payment } }` |

---

### Module: Delivery Zones (4 endpoints)

#### `GET /api/v1/zones`
| Aspect | Detail |
|--------|--------|
| **Purpose** | List all active delivery zones |
| **Auth** | Bearer Token (any role) |
| **Success Response** | `200 { success: true, data: { zones } }` |

#### `POST /api/v1/zones`
| Aspect | Detail |
|--------|--------|
| **Purpose** | Create a delivery zone |
| **Auth** | Bearer Token (ADMIN only) |
| **Request Body** | `{ name, city }` |
| **Success Response** | `201 { success: true, data: { zone } }` |

#### `PATCH /api/v1/zones/:id`
| Aspect | Detail |
|--------|--------|
| **Purpose** | Update a delivery zone |
| **Auth** | Bearer Token (ADMIN only) |
| **Request Body** | `{ name?, city?, isActive? }` |
| **Success Response** | `200 { success: true, data: { zone } }` |

#### `DELETE /api/v1/zones/:id`
| Aspect | Detail |
|--------|--------|
| **Purpose** | Soft-delete a delivery zone |
| **Auth** | Bearer Token (ADMIN only) |
| **Success Response** | `200 { success: true, message: "Zone deleted" }` |

---

### Module: Pricing (3 endpoints)

#### `GET /api/v1/pricing/calculate`
| Aspect | Detail |
|--------|--------|
| **Purpose** | Calculate shipping price for given parameters |
| **Auth** | Bearer Token (CUSTOMER, ADMIN) |
| **Query Params** | `?destinationZoneId=UUID&weight=5&serviceType=STANDARD` |
| **Success Response** | `200 { success: true, data: { price, breakdown: { basePrice, weightCharge, total } } }` |
| **Notes** | Pricing is based on destination zone + service type. Origin zone is stored on the shipment for logistics but does not affect pricing. |

#### `GET /api/v1/pricing/rules`
| Aspect | Detail |
|--------|--------|
| **Purpose** | List all pricing rules |
| **Auth** | Bearer Token (ADMIN only) |
| **Success Response** | `200 { success: true, data: { rules } }` |

#### `POST /api/v1/pricing/rules`
| Aspect | Detail |
|--------|--------|
| **Purpose** | Create or update a pricing rule |
| **Auth** | Bearer Token (ADMIN only) |
| **Request Body** | `{ zoneId?, serviceType, basePrice, pricePerKg, maxWeight? }` |
| **Success Response** | `201 { success: true, data: { rule } }` |

---

### Module: Admin (5 endpoints)

#### `GET /api/v1/admin/users`
| Aspect | Detail |
|--------|--------|
| **Purpose** | List all users with filtering |
| **Auth** | Bearer Token (ADMIN only) |
| **Query Params** | `?page=1&limit=10&role=COURIER&isActive=true&search=john` |
| **Success Response** | `200 { success: true, data: { users, meta } }` |

#### `GET /api/v1/admin/users/:id`
| Aspect | Detail |
|--------|--------|
| **Purpose** | Get detailed user info |
| **Auth** | Bearer Token (ADMIN only) |
| **Success Response** | `200 { success: true, data: { user } }` |

#### `PATCH /api/v1/admin/users/:id/role`
| Aspect | Detail |
|--------|--------|
| **Purpose** | Update a user's role |
| **Auth** | Bearer Token (ADMIN only) |
| **Request Body** | `{ role: 'CUSTOMER' \| 'COURIER' \| 'ADMIN' }` |
| **Success Response** | `200 { success: true, data: { user } }` |
| **Side Effects** | Audit log entry |

#### `DELETE /api/v1/admin/users/:id`
| Aspect | Detail |
|--------|--------|
| **Purpose** | Soft-delete a user |
| **Auth** | Bearer Token (ADMIN only) |
| **Validation** | Cannot delete self; cannot delete if user has active shipments |
| **Success Response** | `200 { success: true, message: "User deactivated" }` |
| **Side Effects** | Audit log entry |

#### `GET /api/v1/admin/dashboard-stats`
| Aspect | Detail |
|--------|--------|
| **Purpose** | Get platform statistics |
| **Auth** | Bearer Token (ADMIN only) |
| **Success Response** | `200 { success: true, data: { totalUsers, totalShipments, shipmentsByStatus, totalRevenue, activeShipments, totalCouriers, recentActivity } }` |

---

### Module: Audit Logs (1 endpoint)

#### `GET /api/v1/admin/audit-logs`
| Aspect | Detail |
|--------|--------|
| **Purpose** | View audit trail |
| **Auth** | Bearer Token (ADMIN only) |
| **Query Params** | `?page=1&limit=20&entity=shipment&action=SHIPMENT_STATUS_CHANGED&actorId=uuid&sortBy=createdAt&sortOrder=desc` |
| **Success Response** | `200 { success: true, data: { logs, meta } }` |

---

### Endpoint Count Summary

| Module | Endpoints |
|--------|-----------|
| Authentication | 5 |
| User & Profile | 4 |
| Shipments | 10 |
| Payments | 5 |
| Delivery Zones | 4 |
| Pricing | 3 |
| Admin | 5 |
| Audit Logs | 1 |
| Health (bonus) | 1 |
| **Total** | **37 core + 1 health = 38** |

> ✅ Exceeds the 20-endpoint minimum requirement with meaningful, non-duplicate endpoints.

---

# 11. API AUTHORIZATION

## Authorization Model

```
Request
  │
  ▼
Authentication Middleware (verify JWT → attach user)
  │
  ▼
Role Authorization Middleware (check user.role against allowed roles)
  │
  ▼
Resource Ownership/Scope Check (in service layer)
  │
  ▼
Business Rule Validation (in service layer)
  │
  ▼
Execute Operation
```

## Resource Ownership Rules

| Resource | CUSTOMER Access | COURIER Access | ADMIN Access |
|----------|----------------|----------------|--------------|
| Shipment | `shipment.customerId === user.id` | `shipment.courierId === user.id` | All shipments |
| Payment | `payment.shipment.customerId === user.id` | ❌ | All payments |
| Notification | `notification.userId === user.id` | `notification.userId === user.id` | All |
| Delivery Attempt | Via owned shipment | Via assigned shipment | All |
| Tracking Event | Via owned shipment | Via assigned shipment | All |

> **IMPORTANT:** Authorization MUST NOT rely on the frontend. All ownership checks happen in the service layer before returning data or executing operations.

---

# 12. AUTHENTICATION AND SECURITY

## Authentication Architecture

### JWT Strategy
- **Access Token:** Short-lived (15 minutes), contains `{ userId, email, role }`
- **Refresh Token:** Long-lived (7 days), stored hashed in database, used to obtain new access tokens
- **Token Rotation:** On refresh, issue new access + refresh token pair, invalidate old refresh token
- **Logout:** Delete refresh token from database, add to Redis blacklist (TTL = remaining token lifetime)

### Password Security
- **Hashing:** bcrypt with salt rounds = 12
- **Password Policy:** Min 8 characters, 1 uppercase, 1 lowercase, 1 number

### Google OAuth Flow
1. Client obtains Google ID token (using Google Sign-In SDK or OAuth2 flow)
2. Client sends ID token to `POST /api/v1/auth/google`
3. Server verifies ID token with Google's `oauth2/v3/tokeninfo` endpoint or `google-auth-library`
4. Server extracts email and googleId from the verified token
5. **Account resolution (in order):**
   a. If user exists with matching `googleId` → log them in
   b. If user exists with same **email** but no `googleId` → **link** Google account (set `googleId` on existing user) → log them in
   c. If no user exists → create new user with CUSTOMER role (password = null, googleId set)
6. Return JWT tokens

### Security Measures

| Measure | Implementation |
|---------|---------------|
| Password hashing | bcrypt (12 rounds) |
| Secrets management | `.env` file, never committed, validated with Zod on app start |
| Rate limiting | `express-rate-limit`: 100 req/15min general, 10 req/15min auth endpoints |
| Security headers | `helmet()` middleware |
| CORS | `cors()` with allowed origins configuration |
| Input validation | Zod schemas on all request bodies/query params |
| SQL injection | Prisma ORM (parameterized queries) |
| XSS prevention | Input sanitization, helmet headers |
| Stripe webhook security | Stripe signature verification (`stripe.webhooks.constructEvent`) |
| bKash callback security | bKash Execute + Query Payment API verification (server calls bKash API to confirm transaction authenticity before marking PAID) |

---

# 13. LOGISTICS DOMAIN LOGIC

## Pricing Calculation

```
Price = BasePrice + (Weight × PricePerKg)

Where:
  - BasePrice comes from PricingRule matched by (destinationZoneId + serviceType)
  - PricePerKg comes from the same rule
  - EXPRESS serviceType has its own PricingRule row with higher basePrice/pricePerKg
    (no separate multiplier — the difference is baked into the rule itself)
  - If no zone-specific rule exists, fall back to default rule (zoneId = null)
```

### Business Rules:
- Weight must be > 0 and ≤ maxWeight (if defined)
- Both origin and destination zones must exist as active `delivery_zones`
- Pricing is determined by **destination zone + service type** only
- Origin zone is stored on the shipment for logistics/dispatch purposes but does not affect pricing
- Admin creates separate PricingRule rows for STANDARD and EXPRESS per zone (EXPRESS rows have higher rates)

## Tracking Number Generation

Format: `CLG-YYYYMMDD-XXXXX`
- `CLG` = Courier Logistics (platform prefix)
- `YYYYMMDD` = Date of creation
- `XXXXX` = 5-character random alphanumeric string
- Uniqueness enforced by database constraint + retry logic

## Delivery Attempt Rules

- Maximum 3 delivery attempts per shipment
- After 3 failed attempts, admin can mark as RETURNED
- Each attempt records: attempt number, status, failure reason, timestamp
- Courier must provide a failure reason for failed attempts

## Service Types

| Type | Description | Pricing |
|------|-------------|---------|
| STANDARD | Regular delivery (3-5 days) | Uses STANDARD pricing rule (lower basePrice/pricePerKg) |
| EXPRESS | Priority delivery (1-2 days) | Uses EXPRESS pricing rule (higher basePrice/pricePerKg) |

> **Note:** There is no runtime multiplier. The price difference between STANDARD and EXPRESS is baked directly into separate `pricing_rules` rows. Admin configures each zone with two rules — one per service type.

---

# 14. TRACKING SYSTEM

## Architecture

The tracking system maintains an **immutable, append-only event log** for each shipment.

### TrackingEvent Model
- Each status change creates a new `TrackingEvent` record
- Events are never updated or deleted
- The current shipment status is stored on the `shipments` table for quick access
- The full timeline is reconstructable from `tracking_events` ordered by `createdAt`

### Customer-Visible vs Internal Data

| Field | Customer Visible | Courier Visible | Admin Visible |
|-------|-----------------|-----------------|---------------|
| Status | ✅ | ✅ | ✅ |
| Description | ✅ | ✅ | ✅ |
| Timestamp | ✅ | ✅ | ✅ |
| Location | ✅ | ✅ | ✅ |
| Actor name | ❌ | ❌ | ✅ |
| Actor ID | ❌ | ❌ | ✅ |

### Status Transition Validation
- Every status update passes through the state machine validator
- Invalid transitions are rejected with 400 error
- The validator checks: current status → requested status → allowed?

---

# 15. ASSIGNMENT / DISPATCH LOGIC

## Courier Assignment Model

This assignment uses **manual admin assignment** (not automated algorithms). This is the safest approach for the assignment scope.

### Assignment Flow
1. Admin views shipments awaiting assignment (status = CONFIRMED) or needing reassignment (status = PICKUP_ASSIGNED)
2. Admin views available couriers (filtered by: isActive, isAvailable, serviceArea matching origin zone)
3. Admin selects a courier and assigns them to the shipment
4. System validates:
   - Courier exists and is active
   - Courier role is COURIER
   - Courier is available
   - Shipment status is CONFIRMED or PICKUP_ASSIGNED
5. Within a transaction:
   - If reassignment (PICKUP_ASSIGNED): clear old courierId, notify old courier of removal
   - Set `shipment.courierId` to new courier
   - If first assignment: update `shipment.status` to PICKUP_ASSIGNED
   - Create tracking event (COURIER_ASSIGNED or COURIER_REASSIGNED)
   - Create audit log
   - Create notifications (new courier + customer)

### Reassignment
- Admin can reassign by calling the same `POST /shipments/:id/assign` endpoint on a shipment that is PICKUP_ASSIGNED (before pickup)
- Old courier is notified of unassignment
- New courier is notified of new assignment
- Status remains PICKUP_ASSIGNED (no state transition needed — only the courierId changes)

### Race Condition Prevention
- Transaction with status check: `WHERE id = :shipmentId AND status IN ('CONFIRMED', 'PICKUP_ASSIGNED') AND updatedAt = :expectedUpdatedAt`
- If 0 rows updated, another admin already modified → return 409 Conflict

---

# 16. PAYMENT ARCHITECTURE

## Dual Gateway Strategy

The platform supports **two real payment gateways**:

| Gateway | Use Case | Currency | Mode |
|---------|----------|----------|------|
| **Stripe** | International card payments | BDT/USD | Checkout Session |
| **bKash** | Local mobile wallet payments (Bangladesh) | BDT | Tokenized Checkout |

Both gateways use the same Payment record and follow the same state machine. The `method` field on the payment record determines which gateway processes the transaction.

## Payment Lifecycle

```
Customer initiates payment (chooses Stripe or bKash)
        │
        ├── method = STRIPE ──────────────────────┐
        │                                          ▼
        │                               ┌────────────────────┐
        │                               │ INITIATED (Stripe) │
        │                               └───────┬────────────┘
        │                                       │
        │                                  Stripe webhook
        │                                       │
        ├── method = BKASH ───────────────────┐ │
        │                                      ▼ ▼
        │                          ┌──────┐  ┌────────┐
        │                          │ PAID │  │ FAILED │
        │                          └──┬───┘  └────────┘
        │                             │
        │                             │ (if shipment cancelled)
        │                             ▼
        │                          ┌──────────┐
        │                          │ REFUNDED │
        │                          └──────────┘
        │
        └── bKash callback ───────────────► PAID / FAILED
```

## Payment Flow A — Stripe Checkout

1. **Customer** calls `POST /api/v1/payments/initiate` with `{ shipmentId, method: 'STRIPE' }`
2. **Server** creates a Stripe Checkout Session with:
   - Line items (shipment price)
   - Success URL
   - Cancel URL
   - Metadata (shipmentId, paymentId)
3. **Server** creates Payment record (status: INITIATED, method: STRIPE) with stripeSessionId
4. **Server** returns `paymentUrl` (Stripe checkout URL) to client
5. **Client** redirects to Stripe Checkout
6. **Customer** completes payment on Stripe's hosted page
7. **Stripe** sends webhook event (`checkout.session.completed`)
8. **Server** webhook handler (`POST /payments/webhook/stripe`):
   - Verifies Stripe signature
   - Finds payment by stripeSessionId
   - Checks idempotency (skip if already PAID)
   - Within transaction:
     - Updates payment status to PAID
     - Updates payment.paidAt
     - Updates shipment status to CONFIRMED
     - Creates tracking event
     - Creates notification

## Payment Flow B — bKash Tokenized Checkout

1. **Customer** calls `POST /api/v1/payments/initiate` with `{ shipmentId, method: 'BKASH' }`
2. **Server** calls bKash **Grant Token** API to get an auth token
3. **Server** calls bKash **Create Payment** API with:
   - Amount (shipment price)
   - Invoice number (shipmentId / paymentId)
   - Callback URL (server's bKash webhook endpoint)
4. **Server** creates Payment record (status: INITIATED, method: BKASH) with bkashPaymentId
5. **Server** returns `paymentUrl` (bKash payment redirect URL) to client
6. **Customer** is redirected to bKash, authenticates with PIN, and confirms payment
7. **bKash** redirects back to the callback URL with payment result
8. **Server** callback handler (`POST /payments/webhook/bkash`):
   - Calls bKash **Execute Payment** API to finalize the transaction
   - Calls bKash **Query Payment** API to verify payment status
   - Checks idempotency (skip if already PAID)
   - Within transaction:
     - Updates payment status to PAID, stores bkashTrxId
     - Updates payment.paidAt
     - Updates shipment status to CONFIRMED
     - Creates tracking event
     - Creates notification

## bKash API Integration Details

| bKash API | Purpose | When Called |
|-----------|---------|-------------|
| **Grant Token** (`/token/grant`) | Get auth token for subsequent API calls | Before every bKash operation |
| **Create Payment** (`/create`) | Initialize a payment | Payment initiation |
| **Execute Payment** (`/execute`) | Finalize after customer confirms | bKash callback |
| **Query Payment** (`/payment/status`) | Verify payment authenticity | bKash callback (verification) |
| **Refund** (`/payment/refund`) | Refund a completed payment | Shipment cancellation |

> **Note:** Use bKash **Sandbox** credentials for development/testing. Sandbox uses test wallet numbers and does not process real money. This satisfies the "real payment integration" requirement as it uses the actual bKash API with test credentials.

## Refund Flow

1. Admin/Customer cancels a CONFIRMED (paid) shipment
2. Based on `payment.method`:
   - **STRIPE:** Service creates Stripe Refund via API
   - **BKASH:** Service calls bKash Refund API (`/payment/refund`)
3. Payment status updated to REFUNDED
4. Refund reference stored in `transactionId` / `gatewayResponse`

## Payment Gateway Abstraction

```typescript
// Unified interface — both gateways implement this
interface PaymentGateway {
  createPayment(amount: number, metadata: PaymentMeta): Promise<{ paymentUrl: string; gatewayRef: string }>
  verifyPayment(gatewayRef: string): Promise<PaymentVerification>
  refundPayment(gatewayRef: string, amount: number): Promise<RefundResult>
}

// PaymentService selects gateway based on method:
const gateway = method === 'STRIPE' ? stripeGateway : bkashGateway
```

> **CRITICAL COMPLIANCE NOTE:** At no point does any endpoint allow manual/direct setting of payment status to PAID. Only the Stripe webhook handler or bKash callback handler can do this. This satisfies the "no fake/simulated payments" requirement.

---

# 17. NOTIFICATION SYSTEM

## In-App Notifications

Notifications are database-persisted and retrievable via API. No real-time push (WebSocket) is required for this assignment scope.

### Notification Triggers

| Event | Recipient | Type | Message Template |
|-------|-----------|------|-----------------|
| Payment confirmed | Customer | PAYMENT_CONFIRMED | "Payment received for shipment {trackingNumber}" |
| Courier assigned | Customer | COURIER_ASSIGNED | "A courier has been assigned to pick up your parcel" |
| Courier assigned | Courier | NEW_ASSIGNMENT | "You have a new pickup assignment: {trackingNumber}" |
| Parcel picked up | Customer | SHIPMENT_UPDATE | "Your parcel has been picked up" |
| Out for delivery | Customer | SHIPMENT_UPDATE | "Your parcel is out for delivery" |
| Delivered | Customer | DELIVERED | "Your parcel has been delivered" |
| Failed delivery | Customer | DELIVERY_FAILED | "Delivery attempt failed: {reason}" |
| Shipment cancelled | Customer | SHIPMENT_CANCELLED | "Your shipment has been cancelled" |
| Courier reassigned | Courier (old) | ASSIGNMENT_REMOVED | "Assignment {trackingNumber} has been reassigned" |

### Email Notifications (Optional Enhancement)

If time permits, integrate Nodemailer/Resend for:
- Payment confirmation email
- Delivery confirmation email

This is OPTIONAL per the tech stack requirements.

---

# 18. ERROR HANDLING

## Global Error Response Format

```typescript
// Success
{
  "success": true,
  "message": "Operation successful",
  "data": { ... }
}

// Error
{
  "success": false,
  "message": "Something went wrong",
  "errors": [
    {
      "field": "email",
      "message": "Invalid email format"
    }
  ]
}
```

## Error Categories

| Error Type | HTTP Status | Example |
|------------|-------------|---------|
| Validation Error | 400 | Invalid request body / query params |
| Authentication Error | 401 | Missing/invalid/expired token |
| Authorization Error | 403 | Insufficient role; not resource owner |
| Not Found | 404 | Resource doesn't exist (or soft-deleted) |
| Conflict | 409 | Email already exists; double assignment |
| Business Rule Violation | 400/422 | Invalid state transition; max attempts exceeded |
| Rate Limit Exceeded | 429 | Too many requests |
| Internal Server Error | 500 | Unexpected error (logged, generic message to client) |

## Global Error Handler Middleware

```typescript
// Catches all errors thrown in controllers/services
// Formats them into the standard response structure
// Logs 500 errors with stack trace
// Never exposes internal error details to clients
```

## Custom Error Classes

```typescript
class AppError extends Error {
  statusCode: number;
  isOperational: boolean;
}

class ValidationError extends AppError { statusCode = 400 }
class AuthenticationError extends AppError { statusCode = 401 }
class AuthorizationError extends AppError { statusCode = 403 }
class NotFoundError extends AppError { statusCode = 404 }
class ConflictError extends AppError { statusCode = 409 }
class BusinessRuleError extends AppError { statusCode = 422 }
```

---

# 19. TRANSACTIONS AND CONCURRENCY

## Operations Requiring Transactions

| Operation | Tables Affected | Concurrency Risk |
|-----------|----------------|------------------|
| Create shipment | shipments, parcels, tracking_events | Low |
| Payment confirmation (webhook) | payments, shipments, tracking_events, notifications | **HIGH** — duplicate webhook |
| Courier assignment | shipments, tracking_events, audit_logs, notifications | **HIGH** — double assignment |
| Status update (delivery) | shipments, tracking_events, delivery_attempts, notifications | MEDIUM — concurrent update |
| Shipment cancellation + refund | shipments, payments, tracking_events, audit_logs | MEDIUM |
| User role update | users, audit_logs | Low |

## Concurrency Prevention Strategies

### 1. Idempotent Webhook Processing
```
Check: payment.status === 'INITIATED'
  If yes: process payment, update to PAID
  If no: return 200 (already processed)
```

### 2. Optimistic Concurrency for Assignment
```sql
UPDATE shipments
SET courierId = :courierId, status = 'PICKUP_ASSIGNED'
WHERE id = :shipmentId AND status = 'CONFIRMED' AND courierId IS NULL
-- If affected rows = 0: conflict, return 409
```

### 3. State Machine Guard
```
// Before any status update:
if (!isValidTransition(currentStatus, newStatus)) {
  throw new BusinessRuleError('Invalid status transition')
}
```

---

# 20. AUDITABILITY

## Auditable Actions

| Action | Entity | Trigger |
|--------|--------|---------|
| SHIPMENT_STATUS_CHANGED | shipment | Any status transition |
| COURIER_ASSIGNED | shipment | Admin assigns courier |
| COURIER_REASSIGNED | shipment | Admin reassigns courier |
| SHIPMENT_CANCELLED | shipment | Customer/admin cancels |
| USER_ROLE_UPDATED | user | Admin changes user role |
| USER_DEACTIVATED | user | Admin soft-deletes user |
| PAYMENT_REFUNDED | payment | Refund initiated |
| PRICING_RULE_CREATED | pricing_rule | Admin creates rule |
| PRICING_RULE_UPDATED | pricing_rule | Admin updates rule |
| ZONE_CREATED | delivery_zone | Admin creates zone |
| ZONE_DELETED | delivery_zone | Admin deletes zone |

## Audit Log Entry Structure

```json
{
  "id": "uuid",
  "actorId": "uuid (user who performed the action)",
  "action": "SHIPMENT_STATUS_CHANGED",
  "entity": "shipment",
  "entityId": "uuid",
  "oldValue": { "status": "CONFIRMED" },
  "newValue": { "status": "PICKUP_ASSIGNED", "courierId": "uuid" },
  "ipAddress": "192.168.1.1",
  "description": "Admin assigned courier John Doe to shipment CLG-20260901-A3X2K",
  "createdAt": "2026-09-01T12:00:00Z"
}
```

> Audit logs are **immutable** — no UPDATE or DELETE operations. Not subject to soft delete.

---

# 21. OBSERVABILITY

## Logging Strategy

### Structured Logging
- Use a logger library (e.g., `winston` or `pino`)
- Log format: JSON for production, pretty-print for development
- Log levels: ERROR, WARN, INFO, DEBUG

### What to Log

| Category | Level | Examples |
|----------|-------|---------|
| Request/Response | INFO | Method, path, status code, duration |
| Authentication | WARN/INFO | Login attempts, failed auth, token refresh |
| Business Events | INFO | Shipment created, payment processed, courier assigned |
| Errors | ERROR | Unhandled errors with stack traces |
| Database | DEBUG | Query timing (development only) |

### Health Check Endpoint

`GET /api/v1/health` — Public, returns:
```json
{
  "status": "ok",
  "timestamp": "2026-09-01T12:00:00Z",
  "database": "connected",
  "redis": "connected"
}
```

> This is a bonus endpoint (not counted in the 36 core endpoints) but useful for deployment verification.

---

# 22. PROJECT / MODULE STRUCTURE

```
src/
├── app.ts                          # Express app configuration
├── server.ts                       # Server startup
├── config/
│   ├── index.ts                    # Environment config loader
│   ├── env.ts                      # Zod env validation schema
│   ├── cors.ts                     # CORS config
│   ├── stripe.ts                   # Stripe client initialization
│   └── bkash.ts                    # bKash API client initialization
│
├── modules/
│   ├── auth/
│   │   ├── auth.routes.ts
│   │   ├── auth.controller.ts
│   │   ├── auth.service.ts
│   │   ├── auth.validation.ts      # Zod schemas
│   │   └── google-oauth.service.ts
│   │
│   ├── user/
│   │   ├── user.routes.ts
│   │   ├── user.controller.ts
│   │   ├── user.service.ts
│   │   ├── user.repository.ts
│   │   └── user.validation.ts
│   │
│   ├── shipment/
│   │   ├── shipment.routes.ts
│   │   ├── shipment.controller.ts
│   │   ├── shipment.service.ts
│   │   ├── shipment.repository.ts
│   │   ├── shipment.validation.ts
│   │   └── shipment.state-machine.ts  # State transition rules
│   │
│   ├── parcel/
│   │   ├── parcel.repository.ts    # Accessed via shipment service
│   │   └── parcel.validation.ts
│   │
│   ├── tracking/
│   │   ├── tracking.routes.ts      # Included in shipment routes
│   │   ├── tracking.service.ts
│   │   └── tracking.repository.ts
│   │
│   ├── payment/
│   │   ├── payment.routes.ts
│   │   ├── payment.controller.ts
│   │   ├── payment.service.ts
│   │   ├── payment.repository.ts
│   │   ├── payment.validation.ts
│   │   ├── gateways/
│   │   │   ├── payment-gateway.interface.ts  # Unified gateway interface
│   │   │   ├── stripe.gateway.ts             # Stripe implementation
│   │   │   └── bkash.gateway.ts              # bKash implementation
│   │   ├── stripe.webhook.ts       # Stripe webhook handler
│   │   └── bkash.webhook.ts        # bKash callback handler
│   │
│   ├── zone/
│   │   ├── zone.routes.ts
│   │   ├── zone.controller.ts
│   │   ├── zone.service.ts
│   │   ├── zone.repository.ts
│   │   └── zone.validation.ts
│   │
│   ├── pricing/
│   │   ├── pricing.routes.ts
│   │   ├── pricing.controller.ts
│   │   ├── pricing.service.ts
│   │   ├── pricing.repository.ts
│   │   └── pricing.validation.ts
│   │
│   ├── admin/
│   │   ├── admin.routes.ts
│   │   ├── admin.controller.ts
│   │   └── admin.service.ts
│   │
│   ├── notification/
│   │   ├── notification.routes.ts  # Included in user routes
│   │   ├── notification.service.ts
│   │   └── notification.repository.ts
│   │
│   └── audit/
│       ├── audit.routes.ts         # Included in admin routes
│       ├── audit.service.ts
│       └── audit.repository.ts
│
├── middleware/
│   ├── auth.middleware.ts          # JWT verification
│   ├── role.middleware.ts          # Role-based access control
│   ├── validate.middleware.ts      # Zod validation
│   ├── rate-limit.middleware.ts    # Rate limiting configs
│   ├── error-handler.middleware.ts # Global error handler
│   └── not-found.middleware.ts     # 404 handler
│
├── shared/
│   ├── errors/
│   │   ├── AppError.ts
│   │   ├── ValidationError.ts
│   │   ├── AuthenticationError.ts
│   │   ├── AuthorizationError.ts
│   │   ├── NotFoundError.ts
│   │   └── ConflictError.ts
│   │
│   ├── utils/
│   │   ├── response.ts            # sendSuccess(), sendError() helpers
│   │   ├── jwt.ts                  # Token generation/verification
│   │   ├── hash.ts                 # bcrypt helpers
│   │   ├── tracking-number.ts     # Tracking number generator
│   │   ├── pagination.ts          # Pagination helpers
│   │   └── logger.ts              # Winston/Pino logger
│   │
│   ├── types/
│   │   ├── express.d.ts           # Express request augmentation
│   │   └── index.ts               # Shared types
│   │
│   └── constants/
│       ├── roles.ts               # Role constants
│       └── shipment-status.ts     # Status constants
│
├── prisma/
│   ├── schema.prisma              # Database schema
│   ├── migrations/                # Migration files
│   └── seed.ts                    # Seed script (admin, zones, pricing)
│
├── redis/
│   └── client.ts                  # Redis connection
│
└── tests/                          # Optional but recommended
    ├── auth.test.ts
    ├── shipment.test.ts
    └── payment.test.ts
```

**Root Files:**
```
.env                    # Environment variables (NOT committed)
.env.example            # Template with empty values
.gitignore
tsconfig.json
package.json
biome.json / .eslintrc  # Linting config
README.md
```

---

# 23. VALIDATION RULES

## Entity Validation Rules

### User Registration
```
name:     required, string, 2-100 chars
email:    required, valid email format, unique
password: required, string, min 8 chars, must contain uppercase + lowercase + digit
phone:    optional, string, valid phone format
role:     required, enum: 'CUSTOMER' | 'COURIER'
```

### Login
```
email:    required, valid email format
password: required, string
```

### Profile Update
```
name:        optional, string, 2-100 chars
phone:       optional, valid phone format
serviceArea: optional (courier only), valid zone name
isAvailable: optional (courier only), boolean
```

### Shipment Creation
```
originAddress:      required, string, 5-500 chars
originCity:         required, string, 2-100 chars
originZoneId:       required, UUID, must reference existing active delivery_zone
destinationAddress: required, string, 5-500 chars
destinationCity:    required, string, 2-100 chars
destinationZoneId:  required, UUID, must reference existing active delivery_zone
recipientName:      required, string, 2-100 chars
recipientPhone:     required, valid phone format
serviceType:        required, enum: 'STANDARD' | 'EXPRESS'
notes:              optional, string, max 1000 chars
parcel.weight:      required, number, > 0, ≤ maxWeight
parcel.length:      required, number, > 0, ≤ 300 (cm)
parcel.width:       required, number, > 0, ≤ 300 (cm)
parcel.height:      required, number, > 0, ≤ 300 (cm)
parcel.description: optional, string, max 500 chars
parcel.isFragile:   optional, boolean, default false
```

### Status Update
```
status:        required, valid ShipmentStatus enum
notes:         optional, string, max 500 chars
failureReason: required if status = FAILED_DELIVERY, string, max 500 chars
location:      optional, string, max 200 chars
```

### Business-Level Validation

| Rule | When | What |
|------|------|------|
| State machine transition | Status update | Reject invalid transitions |
| Resource ownership | All resource access | User must own/be assigned to the resource |
| Courier must be active | Assignment | `user.isActive === true && user.role === 'COURIER'` |
| Payment must exist and be PENDING | Payment initiation | Shipment.status === 'PENDING' |
| Shipment must be pre-pickup for customer cancel | Cancellation | Status is PENDING or CONFIRMED |
| Max 3 delivery attempts | Failed delivery reattempt | Count existing attempts |

---

# 24. SECURITY THREATS AND MITIGATIONS

| # | Threat | Type | Severity | Mitigation |
|---|--------|------|----------|------------|
| T-01 | IDOR — Customer views another customer's shipment | Broken Access Control | **CRITICAL** | Service-layer ownership check: `shipment.customerId === req.user.id` |
| T-02 | Privilege escalation — Courier accesses admin endpoints | Broken Access Control | **CRITICAL** | Role middleware on all admin routes |
| T-03 | Token theft — Stolen JWT used for unauthorized access | Authentication | HIGH | Short-lived access tokens (15min); refresh token rotation; logout invalidation |
| T-04 | Mass assignment — User sets their own role to ADMIN | Broken Access Control | **CRITICAL** | Whitelist allowed fields in update handlers; never accept `role` in profile update |
| T-05 | Status manipulation — Customer marks own shipment DELIVERED | Business Logic | **CRITICAL** | State machine + role check: only courier/admin can advance delivery states |
| T-06 | Payment bypass — Marking payment PAID without gateway | Business Logic | **CRITICAL** | No endpoint allows direct PAID status; only Stripe webhook or bKash callback |
| T-07 | Webhook spoofing — Fake Stripe/bKash webhook event | Payment | **CRITICAL** | Stripe: signature verification (`stripe.webhooks.constructEvent`); bKash: verify via Execute + Query Payment API |
| T-08 | Brute force — Rapid login attempts | Authentication | HIGH | Rate limiting on auth endpoints (10/15min) |
| T-09 | SQL injection | Injection | HIGH | Prisma ORM (parameterized queries); never use raw SQL |
| T-10 | XSS via user input | Injection | MEDIUM | Input validation (Zod); helmet security headers |
| T-11 | Race condition — Double courier assignment | Concurrency | HIGH | Database transaction with conditional update |
| T-12 | Data leakage — Password hash in API response | Data Exposure | HIGH | Never include `password` in Prisma `select`; always use explicit field selection |
| T-13 | Enumeration — Discovering valid emails | Information Disclosure | MEDIUM | Generic "invalid credentials" message for both wrong email and wrong password |

---

# 25. SCALABILITY AND PERFORMANCE

## Required for This Assignment

| Strategy | Implementation | Purpose |
|----------|---------------|---------|
| Database indexing | `@@index` on frequently queried fields (status, customerId, courierId, trackingNumber, createdAt) | Query performance |
| Efficient Prisma queries | Use `select` instead of returning full records; use `include` only when needed | Reduce data transfer |
| Pagination | All list endpoints support `?page=1&limit=10` with max limit cap (50) | Prevent full table scans |
| Redis caching | Cache: pricing rules, delivery zones, dashboard stats (with TTL) | Reduce DB load |
| Rate limiting | `express-rate-limit` on auth and write endpoints | Prevent abuse |
| Soft-delete filtering | Prisma Client Extension (`$extends`) to auto-add `deletedAt: null` filter | Efficient queries |

## Future Production Improvements (NOT for this assignment)

| Strategy | Description |
|----------|-------------|
| Connection pooling | PgBouncer for PostgreSQL connection management |
| Read replicas | Separate read/write database instances |
| Queue-based processing | BullMQ for async notification delivery |
| CDN | For static file delivery (Cloudinary handles this partially) |
| Horizontal scaling | Stateless API design already supports this |
| Full-text search | PostgreSQL `tsvector` or Elasticsearch for shipment search |

---

# 26. BUSINESS RULES CATALOG

| Rule ID | Rule | Entity | Trigger | Enforcement Layer | Violation Response |
|---------|------|--------|---------|-------------------|-------------------|
| BR-001 | A shipment cannot transition to DELIVERED unless it is OUT_FOR_DELIVERY | Shipment | Status update | Service (state machine) | 400: Invalid status transition |
| BR-002 | A courier can only update shipments assigned to them | Shipment | Status update | Service (ownership check) | 403: Not authorized |
| BR-003 | A customer can only cancel shipments that are PENDING or CONFIRMED | Shipment | Cancellation | Service (state check) | 400: Cannot cancel at this stage |
| BR-004 | Payment status can only be set to PAID by the Stripe webhook or bKash callback handler | Payment | Webhook/Callback | Webhook handlers (exclusive) | N/A (no other path exists) |
| BR-005 | A courier must be active and have COURIER role to be assigned | Shipment | Assignment | Service (validation) | 400: Courier not eligible |
| BR-006 | Maximum 3 delivery attempts per shipment | DeliveryAttempt | Delivery attempt | Service (count check) | 400: Maximum attempts exceeded |
| BR-007 | Parcel weight must be positive and within max weight limit | Parcel | Shipment creation | Validation + Service | 400: Weight exceeds limit |
| BR-008 | A confirmed (paid) shipment cancellation must trigger a refund | Payment | Cancellation | Service (business logic) | 500: Refund failed (retry) |
| BR-009 | Tracking number must be unique | Shipment | Creation | DB constraint + retry | 500: Retry generation |
| BR-010 | Admin cannot delete their own account | User | Deletion | Service (self-check) | 400: Cannot delete own account |
| BR-011 | Courier must provide failure reason for FAILED_DELIVERY | DeliveryAttempt | Status update | Validation | 400: Failure reason required |
| BR-012 | A shipment can only be assigned to a courier when status is CONFIRMED (first assignment) or PICKUP_ASSIGNED (admin reassignment before pickup) | Shipment | Assignment | Service + DB transaction | 400: Invalid status for assignment; 409: Concurrent modification |
| BR-013 | Users cannot register with role ADMIN | User | Registration | Validation | 400: Invalid role |
| BR-014 | Pricing must use zone-based pricing rules; no manual price override by customer | Pricing | Shipment creation | Service (calculation) | Price is always calculated |
| BR-015 | Soft-deleted records must not appear in normal queries | All | Any read | Repository (filter) | N/A (filtered automatically) |
| BR-016 | Audit logs are immutable — no update or delete | AuditLog | Any operation | No update/delete routes exist | N/A |
| BR-017 | Refresh tokens are single-use; old tokens invalidated on rotation | Auth | Token refresh | Service (rotation logic) | 401: Token already used |

---

# 27. COMPLETE WORKFLOW SCENARIOS

## Scenario 1: Successful Shipment (Happy Path)

1. **Customer registers** → `POST /auth/register` → User created (CUSTOMER role)
2. **Customer creates shipment** → `POST /shipments` → Shipment (PENDING), Parcel created, price calculated, tracking number generated
3. **Customer initiates payment** → `POST /payments/initiate { method: 'STRIPE' }` → Stripe Checkout Session created, redirect URL returned
4. **Customer pays on Stripe** → Stripe processes payment
5. **Stripe webhook fires** → `POST /payments/webhook/stripe` → Payment = PAID, Shipment = CONFIRMED, tracking event created
6. **Admin assigns courier** → `POST /shipments/:id/assign` → Shipment = PICKUP_ASSIGNED, courier notified
7. **Courier picks up** → `PATCH /shipments/:id/status {status: 'PICKED_UP'}` → Tracking event, customer notified
8. **Courier in transit** → `PATCH /shipments/:id/status {status: 'IN_TRANSIT'}` → Tracking event
9. **Courier out for delivery** → `PATCH /shipments/:id/status {status: 'OUT_FOR_DELIVERY'}` → Tracking event
10. **Courier delivers** → `PATCH /shipments/:id/status {status: 'DELIVERED'}` → Delivery attempt (SUCCESS), tracking event, customer notified
11. **Customer checks tracking** → `GET /shipments/:id/tracking` → Full timeline returned

## Scenario 2: Failed Pickup (Courier Cannot Find Sender)

1. Shipment is PICKUP_ASSIGNED
2. Courier goes to pickup location, sender unavailable
3. Admin reassigns to different time/courier: `POST /shipments/:id/assign {courierId: newCourierId}`
4. New courier picks up successfully

## Scenario 3: Courier Reassignment

1. Shipment is PICKUP_ASSIGNED with Courier A
2. Courier A reports unavailability
3. Admin reassigns: `POST /shipments/:id/assign {courierId: courierB}`
4. Courier A receives ASSIGNMENT_REMOVED notification
5. Courier B receives NEW_ASSIGNMENT notification

## Scenario 4: Failed Delivery

1. Shipment is OUT_FOR_DELIVERY
2. Courier attempts delivery, recipient unavailable
3. `PATCH /shipments/:id/status {status: 'FAILED_DELIVERY', failureReason: 'Recipient unavailable'}`
4. Delivery attempt record created (attempt #1, FAILED)
5. Customer notified of failed delivery

## Scenario 5: Delivery Reattempt

1. Shipment is FAILED_DELIVERY (attempt #1)
2. Admin triggers reattempt: `PATCH /shipments/:id/status {status: 'OUT_FOR_DELIVERY'}`
3. Courier reattempts, succeeds: `PATCH /shipments/:id/status {status: 'DELIVERED'}`
4. Delivery attempt record created (attempt #2, SUCCESS)

## Scenario 6: Return to Sender

1. Shipment has 3 failed delivery attempts
2. Admin decides to return: `PATCH /shipments/:id/status {status: 'RETURNED'}`
3. Shipment enters terminal state
4. Customer notified

## Scenario 7: Shipment Cancellation (Before Payment)

1. Shipment is PENDING (no payment yet)
2. Customer cancels: `POST /shipments/:id/cancel`
3. Shipment = CANCELLED, no refund needed

## Scenario 8: Shipment Cancellation (After Payment)

1. Shipment is CONFIRMED (paid)
2. Customer cancels: `POST /shipments/:id/cancel {reason: 'Changed my mind'}`
3. Refund initiated via original gateway (Stripe refund API or bKash refund API)
4. Payment = REFUNDED, Shipment = CANCELLED
5. Customer notified

## Scenario 9: Payment Failure and Retry

1. Customer creates shipment (PENDING)
2. Customer initiates payment → `POST /payments/initiate { method: 'STRIPE' }` → Payment record created (INITIATED)
3. Payment fails on Stripe's end
4. Stripe webhook: payment failed → Payment = FAILED, Shipment remains PENDING
5. Customer retries: `POST /payments/initiate { method: 'BKASH' }` → **existing Payment row is reset** to INITIATED with new method and bKash gateway IDs (no new row created, UNIQUE constraint preserved)
6. Customer completes bKash payment → Payment = PAID, Shipment = CONFIRMED

## Scenario 10: Duplicate Webhook

1. Gateway sends webhook/callback (Stripe `checkout.session.completed` or bKash callback)
2. Server processes: Payment = PAID, Shipment = CONFIRMED
3. Gateway retries same webhook (network issue)
4. Server checks: Payment already PAID → returns 200, no double-processing

## Scenario 11: Unauthorized Access Attempt

1. Customer tries `GET /admin/users` → 403 Forbidden
2. Customer tries `PATCH /shipments/:otherId/status` → 403 (not their shipment)
3. Courier tries `POST /shipments/:id/assign` → 403 (admin only)

## Scenario 12: Concurrent Assignment Attempt

1. Admin A and Admin B both try to assign couriers to the same CONFIRMED shipment
2. Admin A's request arrives first → transaction succeeds, Shipment = PICKUP_ASSIGNED
3. Admin B's request arrives → `WHERE status = 'CONFIRMED'` matches 0 rows → 409 Conflict

---

# 28. ARCHITECTURAL RISKS

| # | Risk | Severity | Mitigation |
|---|------|----------|------------|
| AR-01 | Violating 3-role constraint by adding more roles | **CRITICAL** | Enforce exactly 3 roles in enum and middleware |
| AR-02 | Accidentally implementing COD or fake payments | **CRITICAL** | No COD enum; payment status only via webhook |
| AR-03 | Missing GCP Social Login implementation | HIGH | Implement early; test with Google OAuth |
| AR-04 | Insufficient API endpoints (<20) | HIGH | Plan 38 endpoints (37 core + 1 health); all documented |
| AR-05 | Inconsistent response format | HIGH | Use utility functions for all responses |
| AR-06 | Missing audit logs | MEDIUM | Create audit service called from all critical operations |
| AR-07 | Missing soft deletes | MEDIUM | Add `deletedAt` to all applicable models; use Prisma Client Extension (`$extends`) |
| AR-08 | Overengineering (multi-org, complex hub routing) | MEDIUM | Keep scope focused; no multi-org |
| AR-09 | State machine bypass | HIGH | Centralize transitions in state-machine module |
| AR-10 | IDOR vulnerabilities | HIGH | Ownership checks in every service method |
| AR-11 | Missing input validation on some endpoints | MEDIUM | Validation middleware on every route |
| AR-12 | Deployment issues (env vars, DB connection) | MEDIUM | Validate env at startup; test deployment early |

---

# 29. FINAL RECOMMENDED ARCHITECTURE

## Final Roles
1. **CUSTOMER** — Creates shipments, pays, tracks
2. **COURIER** — Picks up, transits, delivers
3. **ADMIN** — Manages everything

## Final Modules
1. Auth (register, login, Google OAuth, token management)
2. User/Profile
3. Shipment (CRUD, status management, assignment, cancellation)
4. Parcel (embedded in shipment)
5. Tracking (event log)
6. Payment (Stripe + bKash integration)
7. Zone (delivery area management)
8. Pricing (rule-based calculation)
9. Notification (in-app)
10. Audit (immutable log)
11. Admin (user management, stats)

## Final Database Entities
1. `users` — All user types with role enum
2. `shipments` — Core business entity
3. `parcels` — 1:1 with shipment
4. `tracking_events` — Immutable event log
5. `delivery_attempts` — Delivery outcome records
6. `payments` — Stripe + bKash payment records
7. `delivery_zones` — Geographic areas
8. `pricing_rules` — Zone-based pricing
9. `audit_logs` — Immutable audit trail
10. `notifications` — In-app notifications

## Final State Machine
- Shipment: PENDING → CONFIRMED → PICKUP_ASSIGNED → PICKED_UP → IN_TRANSIT → OUT_FOR_DELIVERY → DELIVERED/FAILED_DELIVERY → RETURNED
- Payment: INITIATED → PAID/FAILED → REFUNDED

## Final API: 36 meaningful endpoints across 8 modules

## Final Security Model
- JWT (access + refresh) with bcrypt
- Google OAuth 2.0
- Role middleware + ownership checks
- Rate limiting + helmet + CORS
- Stripe webhook signature verification + bKash callback verification

---

# 30. IMPLEMENTATION PRIORITY

## Phase 1: Foundation & Infrastructure

**Objective:** Set up the project skeleton, database, and core utilities.

**Features:**
- Initialize Node.js + TypeScript + Express project
- Configure TypeScript, Biome/ESLint
- Set up Prisma 7 with PostgreSQL
- Create full Prisma schema (all models, enums, relations, indexes)
- Run initial migration
- Set up environment configuration with Zod validation
- Implement shared utilities (response helpers, logger, error classes, JWT utils, hash utils)
- Implement global middleware (helmet, CORS, rate limiting, error handler, 404 handler)
- Set up Redis client
- Create seed script (admin user, default zones, default pricing rules)

**Database Changes:** Full schema creation  
**Validation:** Env validation on startup  
**Testing:** Verify DB connection, run seed  
**Completion Criteria:** Server starts, connects to DB and Redis, seed runs successfully  
**Dependencies:** None  
**Risks:** Prisma 7 compatibility; PostgreSQL connection setup

---

## Phase 2: Authentication & User Management

**Objective:** Complete auth system with email/password, Google OAuth, and JWT token management.

**Features:**
- `POST /auth/register` — Email/password registration
- `POST /auth/login` — Email/password login
- `POST /auth/google` — Google OAuth login/register
- `POST /auth/refresh-token` — Token refresh with rotation
- `POST /auth/logout` — Token invalidation
- `GET /users/me` — Get profile
- `PATCH /users/me` — Update profile
- Auth middleware (JWT verification)
- Role middleware (role-based access control)
- Validation middleware (Zod)

**API Endpoints:** 7  
**Business Logic:** Password hashing, JWT generation/verification, Google token verification, refresh token rotation  
**Security:** bcrypt, JWT, rate limiting on auth routes  
**Testing:** Register → Login → Access protected route → Refresh → Logout  
**Completion Criteria:** All 3 auth methods work; role middleware correctly blocks unauthorized access  
**Dependencies:** Phase 1  

---

## Phase 3: Core Shipment Lifecycle

**Objective:** Implement shipment CRUD, parcel management, pricing calculation, and the state machine.

**Features:**
- `POST /shipments` — Create shipment with parcel and price calculation
- `GET /shipments` — List shipments (role-scoped, paginated, filtered, sorted)
- `GET /shipments/search` — Search shipments
- `GET /shipments/:id` — Get shipment details
- `PATCH /shipments/:id/status` — Update status (state machine)
- `POST /shipments/:id/cancel` — Cancel shipment
- `POST /shipments/:id/assign` — Assign courier (admin)
- State machine module
- Tracking number generator
- Pricing calculation service
- Zone management CRUD (4 endpoints)
- Pricing rule management (3 endpoints)
- Tracking events (auto-created on status changes)
- `GET /shipments/:id/tracking` — View tracking timeline
- Delivery attempt recording
- Audit log creation for critical actions
- Notification creation for status changes

**API Endpoints:** 15  
**Database Changes:** Shipments, parcels, tracking_events, delivery_attempts, zones, pricing_rules populated  
**Business Logic:** State machine transitions, pricing calculation, courier assignment with concurrency protection, delivery attempt limits  
**Transactions:** Shipment creation, courier assignment, status updates, cancellation  
**Security:** Ownership checks, role-based status transition permissions  
**Testing:** Create shipment → Assign courier → Progress through all states → Cancel flow → Failed delivery flow  
**Completion Criteria:** Full shipment lifecycle works; state machine rejects invalid transitions; pagination/filtering/search works  
**Dependencies:** Phase 2  

---

## Phase 4: Payment Integration (Stripe + bKash)

**Objective:** Integrate both Stripe Checkout and bKash Tokenized Checkout for real payment processing.

**Features:**
- `POST /payments/initiate` — Create Stripe Checkout Session or bKash Payment (based on `method`)
- `POST /payments/webhook/stripe` — Handle Stripe webhook events
- `POST /payments/webhook/bkash` — Handle bKash callback events
- `GET /payments/:id` — Get payment details
- `GET /payments/shipment/:shipmentId` — Get payment by shipment
- Payment gateway abstraction (unified interface for Stripe + bKash)
- Stripe webhook signature verification
- bKash callback verification (Execute + Query Payment API)
- Idempotent webhook processing for both gateways
- Payment → Shipment status synchronization (PENDING → CONFIRMED on payment)
- Refund flow for both gateways (on shipment cancellation after payment)

**API Endpoints:** 6  
**Business Logic:** Gateway abstraction, Stripe session creation, bKash create/execute payment, webhook event processing, refund initiation, idempotency  
**Security:** Stripe signature verification; bKash Query Payment verification; no manual payment status updates  
**Testing:** Test both flows — Initiate Stripe payment → Complete → Verify webhook; Initiate bKash payment → Complete → Verify callback; Cancel and verify refund for each gateway  
**Completion Criteria:** Both Stripe and bKash payment flows work with test/sandbox credentials; no fake/manual payment path exists  
**Dependencies:** Phase 3  
**Risks:** Stripe webhook config for local dev (use Stripe CLI); bKash sandbox availability; bKash API documentation may require extra research

---

## Phase 5: Admin Operations & Polish

**Objective:** Admin dashboard, audit log viewing, notifications, and final polish.

**Features:**
- `GET /admin/users` — List users (paginated, filtered, searchable)
- `GET /admin/users/:id` — Get user details
- `PATCH /admin/users/:id/role` — Update user role
- `DELETE /admin/users/:id` — Soft-delete user
- `GET /admin/dashboard-stats` — Platform statistics
- `GET /admin/audit-logs` — View audit trail (paginated, filtered)
- `GET /users/me/notifications` — Get notifications
- `PATCH /users/me/notifications/:id/read` — Mark read
- Health check endpoint
- Redis caching for pricing rules, zones, and dashboard stats
- Final code cleanup and linting
- Postman collection creation/update

**API Endpoints:** 8  
**Business Logic:** Dashboard stat aggregation, audit log filtering, notification management  
**Caching:** Redis for pricing rules (TTL 1hr), zones (TTL 1hr), dashboard stats (TTL 5min)  
**Testing:** All admin endpoints; verify audit logs exist for all critical actions; verify notifications created  
**Completion Criteria:** All 38 endpoints working; Postman collection complete; code is clean and linted  
**Dependencies:** Phase 4  

---

## Phase 6: Deployment & Documentation

**Objective:** Deploy to production and create all required documentation.

**Features:**
- Deploy to Vercel Serverless Functions or Render
- Configure production environment variables
- Configure Neon Postgres Database (No local database, use Neon for dev and prod)
- Configure production Redis (e.g., Upstash)
- Set up Stripe webhook for production URL
- Configure bKash production credentials and callback URL
- Run seed on production DB
- Create comprehensive Postman collection with examples
- Verify all endpoints on production URL

**Testing:** Full end-to-end test on production  
**Completion Criteria:** Live API URL working; Postman collection covers all endpoints; admin credentials working  
**Dependencies:** Phase 5  
**Risks:** Environment-specific issues; Vercel cold starts; DB connection limits

---

> **Total Estimated Endpoints:** 36 meaningful endpoints  

