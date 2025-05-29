import { Request, Response } from "express";
import { LegacyPaymentSystem } from "../legacy/legacy-payment";
import { LegacyPaymentAdapter } from "../adapters/legacy-payment-adapter";

/**
 * Controller moderno que usa a interface moderna `PaymentProcessor`, mas através de um Adapter.
 */
export const handlePayment = (req: Request, res: Response) => {
  const { method, amount } = req.body;

  if (typeof amount !== "number" || amount <= 0) {
    res.status(400).json({ error: "Valor inválido" });
  }

  try {
    // Criamos a instância do sistema legado
    const legacySystem = new LegacyPaymentSystem();

    // Adaptamos ele para a interface moderna
    const adapter = new LegacyPaymentAdapter(legacySystem);

    // Usamos o método moderno
    const result = adapter.pay(method, amount);

    console.log(`[Adapter] Método: ${method}, Valor: ${amount}`);
    res.json({ result });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};
