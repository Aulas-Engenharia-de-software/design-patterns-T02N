export interface PaymentProcessor {
  pay(method: string, amount: number): string;
}
