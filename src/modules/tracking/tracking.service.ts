import { Prisma } from '../../generated/prisma/index.js';
import { trackingRepository } from './tracking.repository.js';
import { ROLES } from '../../shared/constants/roles.js';

export class TrackingService {
  async getTimeline(shipmentId: string, role: string) {
    const events = await trackingRepository.listByShipmentId(shipmentId);

    if (role !== ROLES.ADMIN) {
      return events.map((event: Prisma.TrackingEventGetPayload<{}>) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { actorId, ...publicEvent } = event;
        return publicEvent;
      });
    }

    return events;
  }
}

export const trackingService = new TrackingService();
