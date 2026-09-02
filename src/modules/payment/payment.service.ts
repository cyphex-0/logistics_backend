import { prisma } from '../../shared/prisma/client.js';
import { PaymentStatus, ShipmentStatus, PaymentMethod } from '../../generated/prisma/index.js';
import { paymentRepository } from './payment.repository.js';
import { stripeGateway } from './gateways/stripe.gateway.js';
import { bkashGateway } from './gateways/bkash.gateway.js';
import { notificationService } from '../notification/notification.service.js';
import { auditService } from '../audit/audit.service.js';
import { AUDIT_ACTIONS, AUDIT_ENTITIES } from '../../shared/constants/audit-actions.js';
import { NOTIFICATION_TYPES } from '../../shared/constants/notification-types.js';
import { NotFoundError, BusinessRuleError } from '../../shared/errors/index.js';

export class PaymentService {
  private getGateway(method: string) {
    if (method === PaymentMethod.STRIPE) return stripeGateway;
    if (method === PaymentMethod.BKASH) return bkashGateway;
    throw new BusinessRuleError('Unsupported payment gateway');
  }

  async initiate(shipmentId: string, customerId: string, method: string) {
    const shipment = await prisma.shipment.findUnique({ where: { id: shipmentId } });
    if (!shipment) throw new NotFoundError('Shipment not found');
    if (shipment.customerId !== customerId) throw new BusinessRuleError('Unauthorized');
    if (shipment.status !== ShipmentStatus.PENDING) {
      throw new BusinessRuleError('Shipment is not in PENDING state');
    }

    const gateway = this.getGateway(method);
    const amount = Number(shipment.estimatedPrice);

    // Call gateway to create payment session
    const { paymentUrl, gatewayReference } = await gateway.createPayment(amount, 'BDT', {
      shipmentId
    });

    // Save to DB
    const payment = await paymentRepository.upsertInitiatedPayment(
      shipmentId,
      shipment.estimatedPrice,
      method as PaymentMethod,
      gatewayReference
    );

    return { paymentUrl, paymentId: payment.id };
  }

  async handleGatewayConfirmation(gatewayReference: string, method: PaymentMethod) {
    const payment = await paymentRepository.findByGatewayReference(gatewayReference, method);
    if (!payment) return; // Ignore unknown webhooks

    // Idempotency check
    if (payment.status !== PaymentStatus.INITIATED) {
      console.log(`Webhook idempotent skip: Payment ${payment.id} already processed`);
      return;
    }

    const gateway = this.getGateway(method);
    const verification = await gateway.verifyPayment(gatewayReference);

    if (verification.status === 'PAID') {
      await prisma.$transaction(async (tx) => {
        // Mark payment paid
        await tx.payment.update({
          where: { id: payment.id },
          data: {
            status: PaymentStatus.PAID,
            transactionId: verification.transactionId
          }
        });

        // Update shipment
        await tx.shipment.update({
          where: { id: payment.shipmentId },
          data: {
            status: ShipmentStatus.CONFIRMED,
            finalPrice: payment.amount
          }
        });

        // Tracking event
        await tx.trackingEvent.create({
          data: {
            shipmentId: payment.shipmentId,
            status: ShipmentStatus.CONFIRMED,
            description: 'Payment successful, shipment confirmed'
          }
        });

        // Audit Log
        await auditService.log({
          entity: AUDIT_ENTITIES.SHIPMENT,
          entityId: payment.shipmentId,
          action: AUDIT_ACTIONS.SHIPMENT_STATUS_CHANGED,
          actorId: payment.shipment.customerId, // System acting on behalf of customer payment
          newValue: { status: ShipmentStatus.CONFIRMED }
        });
      });

      // Notification outside transaction
      await notificationService.create({
        userId: payment.shipment.customerId,
        type: NOTIFICATION_TYPES.PAYMENT_CONFIRMED,
        title: 'Payment Successful',
        message: `Payment for shipment ${payment.shipment.trackingNumber} is confirmed.`,
        metadata: { referenceId: payment.shipmentId }
      });
    } else if (verification.status === 'FAILED') {
      await prisma.payment.update({
        where: { id: payment.id },
        data: { status: PaymentStatus.FAILED }
      });
    }
  }

  async refundForShipment(shipmentId: string, adminId: string, reason: string) {
    const payment = await paymentRepository.findByShipmentId(shipmentId);
    if (!payment || payment.status !== PaymentStatus.PAID) {
      throw new BusinessRuleError('Shipment has no successful payment to refund');
    }

    const gateway = this.getGateway(payment.method);
    const amount = Number(payment.amount);
    const gatewayReference =
      payment.method === PaymentMethod.STRIPE ? payment.stripeSessionId : payment.bkashPaymentId;

    // Gateway refund call
    const refundResult = await gateway.refundPayment(gatewayReference!, amount);
    if (!refundResult.success) {
      throw new BusinessRuleError('Gateway refund failed');
    }

    await prisma.$transaction(async (tx) => {
      // Update Payment
      await tx.payment.update({
        where: { id: payment.id },
        data: { status: PaymentStatus.REFUNDED }
      });

      // Update Shipment to CANCELLED
      await tx.shipment.update({
        where: { id: shipmentId },
        data: { status: ShipmentStatus.CANCELLED }
      });

      // Add tracking event
      await tx.trackingEvent.create({
        data: {
          shipmentId,
          status: ShipmentStatus.CANCELLED,
          description: `Shipment cancelled and refunded. Reason: ${reason}`,
          actorId: adminId
        }
      });
    });

    await auditService.log({
      entity: AUDIT_ENTITIES.SHIPMENT,
      entityId: shipmentId,
      action: AUDIT_ACTIONS.PAYMENT_REFUNDED,
      actorId: adminId,
      newValue: { refundId: refundResult.refundId, reason }
    });

    return { success: true };
  }
}

export const paymentService = new PaymentService();
