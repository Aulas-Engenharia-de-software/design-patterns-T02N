import { PaymentStrategy } from './payment-strategy.interface';

export class PixPayment implements PaymentStrategy {
  pay(amount: number): string {
    return `Pagamento de R$${amount.toFixed(2)} via Pix.`;
  }
}