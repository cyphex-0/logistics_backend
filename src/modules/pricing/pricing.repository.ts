import { Prisma, ServiceType } from '@prisma/client';
import { prisma } from '../../shared/prisma/client.js';

export class PricingRepository {
  async list() {
    return prisma.pricingRule.findMany({
      include: { zone: true },
      orderBy: [{ serviceType: 'asc' }, { zoneId: 'asc' }]
    });
  }

  async findByZoneAndService(zoneId: string | null, serviceType: ServiceType) {
    return prisma.pricingRule.findFirst({
      where: { zoneId, serviceType }
    });
  }

  async create(data: Prisma.PricingRuleUncheckedCreateInput, tx?: Prisma.TransactionClient) {
    const client = tx ?? prisma;
    return client.pricingRule.create({ data });
  }

  async update(
    id: string,
    data: Prisma.PricingRuleUncheckedUpdateInput,
    tx?: Prisma.TransactionClient
  ) {
    const client = tx ?? prisma;
    return client.pricingRule.update({ where: { id }, data });
  }
}

export const pricingRepository = new PricingRepository();
