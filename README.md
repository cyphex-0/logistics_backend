# Courier & Logistics Platform Backend

**🟢 Live API Endpoint:** [https://logistics-backend-jyz7.onrender.com/](https://logistics-backend-jyz7.onrender.com/)

A robust, highly scalable backend system for a comprehensive Courier and Logistics Platform. This RESTful API powers the core operations of parcel delivery, including shipment tracking, dynamic pricing, courier assignment, multi-gateway payments, and extensive auditing. Built with modern Node.js and TypeScript, adhering to a Layered Modular Monolith architecture.

## 🚀 Key Features

- **Role-Based Access Control (RBAC):** Distinct roles for Customers, Couriers, and Admins.
- **Authentication & Security:** Secure JWT-based authentication and Google OAuth 2.0 integration.
- **Shipment & Parcel Management:** End-to-end shipment lifecycle management from creation to delivery. Includes parcel dimensions, weight handling, and fragile item marking.
- **Real-time Tracking & Events:** Immutable tracking event history for precise shipment visibility.
- **Dynamic Pricing Engine:** Configurable pricing rules based on delivery zones, service types (Standard/Express), and parcel weight.
- **Payment Gateway Integrations:** Seamless checkout flow with **Stripe** and **bKash** (Sandbox mode).
- **Delivery Operations:** Automated courier assignment, delivery attempt tracking (max 3 attempts), and failure reason logging.
- **Delivery Zones:** Manage operating regions and map them to base pricing rules.
- **Audit & Logging:** Immutable audit logs tracking all critical system events and state changes.
- **Notifications System:** Event-driven user notifications.

## 🛠 Tech Stack

- **Runtime & Framework:** Node.js (≥20.19.0), Express.js
- **Language:** TypeScript
- **Database & ORM:** PostgreSQL, Prisma 7
- **Caching & Rate Limiting:** Redis (Upstash)
- **Validation:** Zod
- **Authentication:** jsonwebtoken, bcryptjs, google-auth-library
- **Testing:** Vitest, Supertest

## 🏗 Architecture

The application follows a **Layered Modular Monolith** architecture to ensure separation of concerns, scalability, and maintainability:

`Route → Controller → Service → Repository → Prisma → PostgreSQL`

## ⚙️ Prerequisites

- Node.js (v20.19.0 or higher)
- PostgreSQL Database
- Redis instance (e.g., Upstash)

## 💻 Local Setup

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd Courier&_Logistics_Platform
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Configuration:**
   Copy the example environment file and configure your credentials (DB URL, Redis URL, Stripe/bKash keys, JWT secrets, etc.).
   ```bash
   cp .env.example .env
   ```

4. **Database Setup:**
   Run Prisma migrations and seed the database with initial configurations.
   ```bash
   npm run db:migrate
   npm run db:seed
   ```

5. **Start the Development Server:**
   ```bash
   npm run dev
   ```

## 🧪 Testing

The project utilizes `Vitest` for a comprehensive testing strategy.

- **Run all tests:** `npm run test`
- **Run unit tests:** `npm run test:unit`
- **Run integration tests:** `npm run test:integration`
- **Run concurrency tests:** `npm run test:concurrency`

## 🚀 Deployment

This application is fully configured for deployment on **Render**. Infrastructure as code is provided via the `render.yaml` blueprint.
For comprehensive deployment instructions, refer to the [Render Deployment Guide](docs/DEPLOYMENT_RENDER.md).
