import React, { useState } from 'react';

const NaiveFactory = () => {
  const [veiculo, setVeiculo] = useState(null);

  const criarVeiculo = (tipo) => {
    if (tipo === "carro") {
      return { nome: "Carro", rodas: 4 };
    } else if (tipo === "moto") {
      return { nome: "Moto", rodas: 2 };
    } else if (tipo === "caminhao") {
      return { nome: "Caminhão", rodas: 6 };
    } else {
      return { nome: "Desconhecido", rodas: 0 };
    }
  };

  const handleCriar = () => {
    setVeiculo(criarVeiculo("carro"));
  };

  return (
    <div>
      <h2>Implementação Ingênua do Factory Method</h2>
      <p>{veiculo ? `${veiculo.nome} com ${veiculo.rodas} rodas` : "Nenhum veículo criado ainda."}</p>
      <button onClick={handleCriar}>Criar Veículo</button>
    </div>
  );
};

export default NaiveFactory;