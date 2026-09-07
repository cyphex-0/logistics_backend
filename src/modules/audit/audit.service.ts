import { Prisma } from '@prisma/client';
import { AuditRepository } from './audit.repository.js';
import { buildMeta } from '../../shared/utils/pagination.js';

export class AuditService {
  constructor(private auditRepository: AuditRepository) {}

  async log(
    input: {
      entity: string;
      entityId: string;
      action: string;
      actorId?: string;
      oldValue?: Prisma.InputJsonValue;
      newValue?: Prisma.InputJsonValue;
      description?: string;
      ipAddress?: string;
    },
    tx?: Prisma.TransactionClient
  ) {
    return this.auditRepository.log(input, tx);
  }

  async list(
    filters: Prisma.AuditLogWhereInput,
    pagination: { page: number; limit: number },
    sort: { sortBy: string; sortOrder: 'asc' | 'desc' }
  ) {
    const { logs, total } = await this.auditRepository.list(filters, pagination, sort);
    const meta = buildMeta(total, pagination.page, pagination.limit);
    return { logs, meta };
  }
}

export const auditService = new AuditService(new AuditRepository());
