import { Prisma } from '../../generated/prisma/index.js';
import { zoneRepository } from './zone.repository.js';
import { auditService } from '../audit/audit.service.js';
import { AUDIT_ACTIONS, AUDIT_ENTITIES } from '../../shared/constants/audit-actions.js';
import { getOrSetCache, invalidateCache } from '../../shared/utils/cache.js';
import { ConflictError, NotFoundError } from '../../shared/errors/index.js';

export class ZoneService {
  async list() {
    return getOrSetCache('zones:active', 3600, async () => {
      return zoneRepository.list();
    });
  }

  async create(data: Prisma.DeliveryZoneUncheckedCreateInput, adminId: string) {
    const zone = await zoneRepository.create(data);

    await auditService.log({
      entity: AUDIT_ENTITIES.ZONE,
      entityId: zone.id,
      action: AUDIT_ACTIONS.ZONE_CREATED,
      actorId: adminId,
      newValue: zone
    });

    await invalidateCache('zones:active');
    return zone;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async update(id: string, data: Prisma.DeliveryZoneUpdateInput, _adminId: string) {
    const existing = await zoneRepository.findById(id);
    if (!existing) {
      throw new NotFoundError('Zone not found');
    }

    const zone = await zoneRepository.update(id, data);
    await invalidateCache('zones:active');
    return zone;
  }

  async delete(id: string, adminId: string) {
    const existing = await zoneRepository.findById(id);
    if (!existing) {
      throw new NotFoundError('Zone not found');
    }

    const isReferenced = await zoneRepository.isReferenced(id);
    if (isReferenced) {
      throw new ConflictError('Cannot delete zone: it is referenced by existing shipments');
    }

    const zone = await zoneRepository.delete(id);

    await auditService.log({
      entity: AUDIT_ENTITIES.ZONE,
      entityId: id,
      action: AUDIT_ACTIONS.ZONE_DELETED,
      actorId: adminId,
      oldValue: existing
    });

    await invalidateCache('zones:active');
    return zone;
  }
}

export const zoneService = new ZoneService();
