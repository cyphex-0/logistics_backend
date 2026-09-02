export interface PaymentGateway {
  createPayment(
    amount: number,
    currency: string,
    metadata: Record<string, string>
  ): Promise<{ paymentUrl: string; gatewayReference: string }>;
  verifyPayment(
    gatewayReference: string
  ): Promise<{ status: 'PAID' | 'FAILED' | 'PENDING'; transactionId?: string }>;
  refundPayment(
    gatewayReference: string,
    amount: number
  ): Promise<{ success: boolean; refundId?: string }>;
}
