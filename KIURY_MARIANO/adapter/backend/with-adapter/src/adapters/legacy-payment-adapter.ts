import { LegacyPaymentSystem } from "../legacy/legacy-payment";
import { PaymentProcessor } from "../interfaces/payment-strategy.interface"; 

/**
 * Adapter: implementa a interface moderna esperada e traduz para a interface legada.
 */
export class LegacyPaymentAdapter implements PaymentProcessor {
  constructor(private legacy: LegacyPaymentSystem) {}

  pay(method: string, amount: number): string {
    switch (method) {
      case "credit_card":
        return this.legacy.processCredit(amount);
      case "pix":
        return this.legacy.processPix(amount);
      case "ticket":
        return this.legacy.processTicket(amount);
      default:
        throw new Error("Método de pagamento inválido (adapter)");
    }
  }
}
