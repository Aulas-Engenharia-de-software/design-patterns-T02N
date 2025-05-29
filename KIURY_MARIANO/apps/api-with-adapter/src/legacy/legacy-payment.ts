export class LegacyPaymentSystem {
  processCredit(value: number): string {
    return `LEGADO: Cartão processado com R$${value.toFixed(2)}`;
  }

  processPix(value: number): string {
    return `LEGADO: Pix enviado com R$${value.toFixed(2)}`;
  }

  processTicket(value: number): string {
    return `LEGADO: Boleto emitido para R$${value.toFixed(2)}`;
  }
}
