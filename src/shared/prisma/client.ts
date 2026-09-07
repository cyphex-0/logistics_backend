import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';
import { env } from '../../config/env.js';

export const pool = new Pool({ connectionString: env.DATABASE_URL });
const adapter = new PrismaPg({ connectionString: env.DATABASE_URL } as never);
export const basePrisma = new PrismaClient({ adapter });

export const prisma = basePrisma.$extends({
  query: {
    user: {
      async findMany({ args, query }) {
        args.where = { ...args.where, deletedAt: null };
        return query(args);
      },
      async findFirst({ args, query }) {
        args.where = { ...args.where, deletedAt: null };
        return query(args);
      },
      async count({ args, query }) {
        args.where = { ...args.where, deletedAt: null };
        return query(args);
      }
    },
    shipment: {
      async findMany({ args, query }) {
        args.where = { ...args.where, deletedAt: null };
        return query(args);
      },
      async findFirst({ args, query }) {
        args.where = { ...args.where, deletedAt: null };
        return query(args);
      },
      async count({ args, query }) {
        args.where = { ...args.where, deletedAt: null };
        return query(args);
      }
    },
    deliveryZone: {
      async findMany({ args, query }) {
        args.where = { ...args.where, deletedAt: null };
        return query(args);
      },
      async findFirst({ args, query }) {
        args.where = { ...args.where, deletedAt: null };
        return query(args);
      },
      async count({ args, query }) {
        args.where = { ...args.where, deletedAt: null };
        return query(args);
      }
    }
  }
});
