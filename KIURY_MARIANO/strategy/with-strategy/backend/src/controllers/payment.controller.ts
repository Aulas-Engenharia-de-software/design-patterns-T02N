import { Request, Response } from "express";
import { PaymentContext } from "../context/payment-context";
import { CreditCardPayment } from "../strategies/credit-card.strategy";
import { PixPayment } from "../strategies/pix.strategy";
import { BoletoPayment } from "../strategies/boleto.strategy";
import { PaymentStrategy } from "../strategies/payment-strategy.interface";

export const handlePayment = (req: Request, res: Response) => {
  const { method, amount } = req.body;

  let strategy: PaymentStrategy;

  switch (method) {
    case "credit_card":
      strategy = new CreditCardPayment();
      break;
    case "pix":
      strategy = new PixPayment();
      break;
    case "boleto":
      strategy = new BoletoPayment();
      break;
    default:
      res.status(400).json({ error: "Método de pagamento inválido" });
      return;
  }

  const context = new PaymentContext(strategy);
  const result = context.execute(amount);
  console.log(`Método: ${method}, Valor: ${amount}`);
  res.json({ result });
};
