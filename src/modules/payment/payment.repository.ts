import { Prisma, PaymentStatus, PaymentMethod } from '../../generated/prisma/index.js';
import { prisma } from '../../shared/prisma/client.js';

export class PaymentRepository {
  async upsertInitiatedPayment(
    shipmentId: string,
    amount: Prisma.Decimal,
    method: PaymentMethod,
    gatewayReference: string
  ) {
    const existing = await prisma.payment.findFirst({
      where: { shipmentId }
    });

    const data = {
      status: PaymentStatus.INITIATED,
      method,
      amount,
      stripeSessionId: method === PaymentMethod.STRIPE ? gatewayReference : null,
      bkashPaymentId: method === PaymentMethod.BKASH ? gatewayReference : null
    };

    if (existing) {
      if (existing.status === PaymentStatus.PAID) {
        throw new Error('Payment is already PAID');
      }
      return prisma.payment.update({
        where: { id: existing.id },
        data
      });
    }

    return prisma.payment.create({
      data: {
        shipmentId,
        ...data
      }
    });
  }

  async findByGatewayReference(gatewayReference: string, method: PaymentMethod) {
    if (method === PaymentMethod.STRIPE) {
      return prisma.payment.findFirst({
        where: { stripeSessionId: gatewayReference },
        include: { shipment: true }
      });
    }
    return prisma.payment.findFirst({
      where: { bkashPaymentId: gatewayReference },
      include: { shipment: true }
    });
  }

  async findByShipmentId(shipmentId: string) {
    return prisma.payment.findFirst({
      where: { shipmentId },
      include: { shipment: true }
    });
  }
}

export const paymentRepository = new PaymentRepository();
