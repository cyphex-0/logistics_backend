import { ShipmentStatus } from '../../generated/prisma/index.js';

export const VALID_TRANSITIONS: Record<ShipmentStatus, ShipmentStatus[]> = {
  [ShipmentStatus.PENDING]: [ShipmentStatus.CONFIRMED, ShipmentStatus.CANCELLED],
  [ShipmentStatus.CONFIRMED]: [ShipmentStatus.PICKUP_ASSIGNED, ShipmentStatus.CANCELLED],
  [ShipmentStatus.PICKUP_ASSIGNED]: [ShipmentStatus.PICKED_UP],
  [ShipmentStatus.PICKED_UP]: [ShipmentStatus.IN_TRANSIT],
  [ShipmentStatus.IN_TRANSIT]: [ShipmentStatus.OUT_FOR_DELIVERY],
  [ShipmentStatus.OUT_FOR_DELIVERY]: [ShipmentStatus.DELIVERED, ShipmentStatus.FAILED_DELIVERY],
  [ShipmentStatus.FAILED_DELIVERY]: [ShipmentStatus.OUT_FOR_DELIVERY, ShipmentStatus.RETURNED],
  [ShipmentStatus.DELIVERED]: [],
  [ShipmentStatus.RETURNED]: [],
  [ShipmentStatus.CANCELLED]: []
};

export function isValidTransition(currentStatus: ShipmentStatus, newStatus: ShipmentStatus): boolean {
  if (currentStatus === newStatus) return true; // idempotent
  const allowedNext = VALID_TRANSITIONS[currentStatus];
  return allowedNext.includes(newStatus);
}
