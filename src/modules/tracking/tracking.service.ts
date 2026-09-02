import { trackingRepository } from './tracking.repository.js';
import { ROLES } from '../../shared/constants/roles.js';

export class TrackingService {
  async getTimeline(shipmentId: string, role: string) {
    const events = await trackingRepository.listByShipmentId(shipmentId);

    if (role !== ROLES.ADMIN) {
      return events.map((event: any) => {
        const publicEvent = { ...event };
        delete publicEvent.actorId;
        return publicEvent;
      });
    }

    return events;
  }
}

export const trackingService = new TrackingService();
