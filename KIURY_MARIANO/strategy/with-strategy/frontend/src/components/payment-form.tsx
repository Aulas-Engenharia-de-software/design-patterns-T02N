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
        background: "#f7f7f7",
        padding: "2rem",
        borderRadius: "8px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        maxWidth: "400px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Escolha o método de pagamento</h2>

      <label style={{ display: "flex", flexDirection: "column" }}>
        Valor:
        <input
          type="number"
          step="0.01"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
          style={{
            padding: "0.5rem",
            borderRadius: "4px",
            border: "1px solid #ccc",
            marginTop: "4px",
            background: "#fff",
            color: "#333",
          }}
        />
      </label>

      <label style={{ display: "flex", flexDirection: "column" }}>
        Método de Pagamento:
        <select
          value={method}
          onChange={(e) => setMethod(e.target.value)}
          style={{
            padding: "0.5rem",
            borderRadius: "4px",
            border: "1px solid #ccc",
            marginTop: "4px",
          }}
        >
          <option value="credit_card">Cartão de Crédito</option>
          <option value="pix">Pix</option>
          <option value="boleto">Boleto</option>
        </select>
      </label>

      <button
        type="submit"
        style={{
          backgroundColor: "#4CAF50",
          color: "white",
          padding: "0.75rem",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Pagar
      </button>

      {result && (
        <div style={{ marginTop: "1rem", textAlign: "center" }}>
          <strong>Resultado:</strong> {result}
        </div>
      )}
    </form>
  );
};
