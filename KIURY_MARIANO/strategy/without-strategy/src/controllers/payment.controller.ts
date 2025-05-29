import { Request, Response } from "express";

export const handlePayment = (req: Request, res: Response): Response => {
  const { method, amount } = req.body;

  if (typeof amount !== "number" || amount <= 0) {
    return res.status(400).json({ error: "Valor inválido" });
  }

  let result: string;

  switch (method) {
    case "credit_card":
      result = `Pagamento de R$${amount.toFixed(2)} via Cartão de Crédito.`;
      break;
    case "pix":
      result = `Pagamento de R$${amount.toFixed(2)} via Pix.`;
      break;
    case "boleto":
      result = `Boleto gerado no valor de R$${amount.toFixed(2)}.`;
      break;
    default:
      return res.status(400).json({ error: "Método de pagamento inválido" });
  }

  return res.json({ result });
};
