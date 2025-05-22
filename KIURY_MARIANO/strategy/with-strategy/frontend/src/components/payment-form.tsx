import { useState } from "react";
import { api } from "../services/api";

export const PaymentForm = () => {
  const [amount, setAmount] = useState("");
  const [method, setMethod] = useState("credit_card");
  const [result, setResult] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await api.post("/pay", {
        amount: parseFloat(amount),
        method,
      });
      setResult(response.data.result);
    } catch (err) {
      setResult("Erro ao processar pagamento.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        maxWidth: 400,
      }}
    >
      <label>
        Valor:
        <input
          type="number"
          step="0.01"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </label>

      <label>
        Método de Pagamento:
        <select value={method} onChange={(e) => setMethod(e.target.value)}>
          <option value="credit_card">Cartão de Crédito</option>
          <option value="pix">Pix</option>
          <option value="boleto">Boleto</option>
        </select>
      </label>

      <button type="submit">Pagar</button>

      {result && (
        <div>
          <strong>Resultado:</strong> {result}
        </div>
      )}
    </form>
  );
};
