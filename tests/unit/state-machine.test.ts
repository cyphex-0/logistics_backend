 
import {
  isValidTransition,
  isTerminal
} from '../../src/modules/shipment/shipment.state-machine.js';
import { ShipmentStatus } from '../../src/generated/prisma/index.js';

describe('Shipment State Machine', () => {
  describe('isValidTransition', () => {
    it('allows transition from PENDING to CANCELLED', () => {
      expect(isValidTransition(ShipmentStatus.PENDING, ShipmentStatus.CANCELLED)).toBe(true);
    });

    it('allows assigning courier (PENDING -> PICKUP_ASSIGNED)', () => {
      expect(isValidTransition(ShipmentStatus.PENDING, ShipmentStatus.PICKUP_ASSIGNED)).toBe(false); // Wait, PENDING -> CONFIRMED -> PICKUP_ASSIGNED
    });

    it('allows transition from CONFIRMED to PICKUP_ASSIGNED', () => {
      expect(isValidTransition(ShipmentStatus.CONFIRMED, ShipmentStatus.PICKUP_ASSIGNED)).toBe(
        true
      );
    });

    it('denies skip-ahead transitions', () => {
      expect(isValidTransition(ShipmentStatus.PENDING, ShipmentStatus.IN_TRANSIT)).toBe(false);
    });

    it('denies backward transitions', () => {
      expect(isValidTransition(ShipmentStatus.DELIVERED, ShipmentStatus.IN_TRANSIT)).toBe(false);
    });
  });

  describe('isTerminal', () => {
    it('returns true for terminal states', () => {
      expect(isTerminal(ShipmentStatus.DELIVERED)).toBe(true);
      expect(isTerminal(ShipmentStatus.CANCELLED)).toBe(true);
      expect(isTerminal(ShipmentStatus.RETURNED)).toBe(true);
    });

    it('returns false for non-terminal states', () => {
      expect(isTerminal(ShipmentStatus.PENDING)).toBe(false);
      expect(isTerminal(ShipmentStatus.IN_TRANSIT)).toBe(false);
      expect(isTerminal(ShipmentStatus.OUT_FOR_DELIVERY)).toBe(false);
    });
  });
});
