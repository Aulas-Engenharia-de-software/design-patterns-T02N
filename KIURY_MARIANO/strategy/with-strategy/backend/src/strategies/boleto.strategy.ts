import { PaymentStrategy } from './payment-strategy.interface';

export class BoletoPayment implements PaymentStrategy {
  pay(amount: number): string {
    return `Boleto gerado no valor de R$${amount.toFixed(2)}.`;
  }
}