import { PaymentStrategy } from '../interfaces/payment-strategy.interface';

export class PaymentContext {
  constructor(private strategy: PaymentStrategy) {}

  setStrategy(strategy: PaymentStrategy) {
    this.strategy = strategy;
  }

  execute(amount: number): string {
    return this.strategy.pay(amount);
  }
}