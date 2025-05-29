import { PaymentForm } from "../components/payment-form"; 

export const Home = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Sistema de Pagamentos (Strategy Pattern)</h1>
      <PaymentForm />
    </div>
  );
};
