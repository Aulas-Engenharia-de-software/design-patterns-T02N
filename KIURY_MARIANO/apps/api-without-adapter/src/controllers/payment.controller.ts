import { Request, Response } from "express";
import { LegacyPaymentSystem } from "../legacy/legacy-payment";

export const handlePayment = (req: Request, res: Response) => {
  const { method, amount } = req.body;

  if (typeof amount !== "number" || amount <= 0) {
    res.status(400).json({ error: "Valor inválido" });
    return;
  }

  const legacy = new LegacyPaymentSystem();
  let result: string;

  switch (method) {
    case "credit_card":
      result = legacy.processCredit(amount);
      break;
    case "pix":
      result = legacy.processPix(amount);
      break;
    case "ticket":
      result = legacy.processTicket(amount);
      break;
    default:
      res.status(400).json({ error: "Método de pagamento inválido" });
      return;
  }

  console.log(`[Sem Adapter] Método: ${method}, Valor: ${amount}`);
  res.json({ result });
};
