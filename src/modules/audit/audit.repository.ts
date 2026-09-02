import { Prisma } from '../../../generated/prisma/index.js';
import { prisma } from '../../shared/prisma/client.js';

export class AuditRepository {
  async log(data: Prisma.AuditLogUncheckedCreateInput, tx?: Prisma.TransactionClient) {
    const client = tx ?? prisma;
    return client.auditLog.create({ data });
  }

  async list(filters: any, pagination: { page: number; limit: number }, sort: { sortBy: string; sortOrder: 'asc' | 'desc' }) {
    const { page, limit } = pagination;
    const skip = (page - 1) * limit;

    const [logs, total] = await Promise.all([
      prisma.auditLog.findMany({
        where: filters,
        skip,
        take: limit,
        orderBy: { [sort.sortBy]: sort.sortOrder }
      }),
      prisma.auditLog.count({ where: filters })
    ]);

    return { logs, total };
  }
}

export const auditRepository = new AuditRepository();
