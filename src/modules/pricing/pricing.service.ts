import { pricingRepository } from './pricing.repository.js';
import { auditService } from '../audit/audit.service.js';
import { AUDIT_ACTIONS, AUDIT_ENTITIES } from '../../shared/constants/audit-actions.js';
import { getOrSetCache, invalidateCache } from '../../shared/utils/cache.js';
import { BusinessRuleError } from '../../shared/errors/index.js';
import { Prisma } from '../../../generated/prisma/index.js';

export class PricingService {
  async list() {
    return getOrSetCache('pricing:rules', 3600, async () => {
      return pricingRepository.list();
    });
  }

  async upsertRule(data: Prisma.PricingRuleUncheckedCreateInput, adminId: string) {
    const existing = await pricingRepository.findByZoneAndService(data.zoneId || null, data.serviceType);
    
    let rule;
    let action = AUDIT_ACTIONS.PRICING_RULE_CREATED;

    if (existing) {
      rule = await pricingRepository.update(existing.id, data);
      action = AUDIT_ACTIONS.PRICING_RULE_UPDATED;
    } else {
      rule = await pricingRepository.create({ ...data, zoneId: data.zoneId || null });
    }

    await auditService.log({
      entity: AUDIT_ENTITIES.PRICING_RULE,
      entityId: rule.id,
      action: action,
      actorId: adminId,
      newValue: rule
    });

    await invalidateCache('pricing:rules');
    return rule;
  }

  async calculate(destinationZoneId: string, weight: number, serviceType: any) {
    const rules = await this.list();

    let rule = rules.find((r: any) => r.zoneId === destinationZoneId && r.serviceType === serviceType && r.isActive);
    
    if (!rule) {
      rule = rules.find((r: any) => r.zoneId === null && r.serviceType === serviceType && r.isActive);
    }

    if (!rule) {
      throw new BusinessRuleError('No pricing rule available for this destination and service type');
    }

    if (rule.maxWeight && weight > Number(rule.maxWeight)) {
      throw new BusinessRuleError(`Weight exceeds maximum allowed for this service type (${rule.maxWeight}kg)`);
    }

    const basePrice = Number(rule.basePrice);
    const pricePerKg = Number(rule.pricePerKg);
    const finalPrice = basePrice + (weight * pricePerKg);

    return {
      price: Number(finalPrice.toFixed(2)),
      breakdown: {
        basePrice,
        pricePerKg,
        weight,
        ruleId: rule.id,
        isDefaultFallback: rule.zoneId === null
      }
    };
  }
}

export const pricingService = new PricingService();
