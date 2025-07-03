import { Request, Response } from "express";

export const handlePayment = (req: Request, res: Response) => {
  const { method, amount } = req.body;

  let strategy: { pay(amount: number): string };

  switch (method) {
    case "credit_card":
      strategy = {
        pay: (amount: number) =>
          `Pagamento de R$${amount.toFixed(2)} via Cartão de Crédito.`,
      };
      break;
    case "pix":
      strategy = {
        pay: (amount: number) => `Pagamento de R$${amount.toFixed(2)} via Pix.`,
      };
      break;
    case "ticket":
      strategy = {
        pay: (amount: number) =>
          `Boleto gerado no valor de R$${amount.toFixed(2)}.`,
      };
      break;
    default:
      res.status(400).json({ error: "Método de pagamento inválido" });
      return;
  }
  console.log(`Método: ${method}, Valor: ${amount}`);
  res.json({ result: strategy.pay(amount) });
};
