import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest';
import { PricingService } from '../../src/modules/pricing/pricing.service.js';
import { pricingRepository } from '../../src/modules/pricing/pricing.repository.js';
import { zoneRepository } from '../../src/modules/zone/zone.repository.js';
import { BusinessRuleError } from '../../src/shared/errors/index.js';

vi.mock('../../src/shared/utils/cache.js', () => ({
  getOrSetCache: async (key: string, ttl: number, fn: any) => fn(),
  invalidateCache: async () => {}
}));

describe('Pricing Math', () => {
  let pricingService: PricingService;

  beforeEach(() => {
    pricingService = new PricingService();
    // Mock repositories for unit testing pricing math without hitting DB/Redis
    vi.spyOn(zoneRepository, 'findById').mockImplementation(async (id) => {
      if (id === 'valid-zone')
        return {
          id: 'valid-zone',
          name: 'Valid',
          city: 'C1',
          isActive: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: null
        };
      return null;
    });

    vi.spyOn(pricingRepository, 'list').mockImplementation(async () => {
      return [
        {
          id: '1',
          zoneId: 'valid-zone',
          serviceType: 'STANDARD',
          basePrice: 60,
          pricePerKg: 12,
          maxWeight: 50,
          isActive: true
        },
        {
          id: '2',
          zoneId: 'valid-zone',
          serviceType: 'EXPRESS',
          basePrice: 120,
          pricePerKg: 25,
          maxWeight: 30,
          isActive: true
        },
        {
          id: '3',
          zoneId: null,
          serviceType: 'STANDARD',
          basePrice: 50,
          pricePerKg: 10,
          maxWeight: 50,
          isActive: true
        }
      ] as any;
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('calculates zone-specific STANDARD price correctly', async () => {
    const res = await pricingService.calculate('valid-zone', 5, 'STANDARD');
    // base = 60, pricePerKg = 12. weight = 5 -> 60 + 5*12 = 120
    expect(res.price).toBe(120);
  });

  it('calculates zone-specific EXPRESS price correctly', async () => {
    const res = await pricingService.calculate('valid-zone', 5, 'EXPRESS');
    // base = 120, pricePerKg = 25. weight = 5 -> 120 + 5*25 = 245
    expect(res.price).toBe(245);
  });

  it('falls back to default rule if zone specific not found', async () => {
    const res = await pricingService.calculate('unknown-zone', 5, 'STANDARD');
    // default base = 50, pricePerKg = 10. weight = 5 -> 50 + 5*10 = 100
    expect(res.price).toBe(100);
  });

  it('rejects weights over maxWeight', async () => {
    await expect(pricingService.calculate('valid-zone', 55, 'STANDARD')).rejects.toThrow(
      BusinessRuleError
    );
  });

  it('rejects if no rule exists for service type', async () => {
    await expect(pricingService.calculate('unknown-zone', 5, 'EXPRESS')).rejects.toThrow(
      BusinessRuleError
    );
  });
});
