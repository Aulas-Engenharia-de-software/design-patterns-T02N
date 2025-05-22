import React, { useState } from 'react';

class Veiculo {
  constructor(nome, rodas) {
    this.nome = nome;
    this.rodas = rodas;
  }
}

class FabricaDeVeiculos {
  static criarVeiculo(tipo) {
    switch (tipo) {
      case "carro":
        return new Veiculo("Carro", 4);
      case "moto":
        return new Veiculo("Moto", 2);
      case "caminhao":
        return new Veiculo("Caminhão", 6);
      default:
        return new Veiculo("Desconhecido", 0);
    }
  }
}

const FactoryMethod = () => {
  const [veiculo, setVeiculo] = useState(null);

  const handleCriar = () => {
    setVeiculo(FabricaDeVeiculos.criarVeiculo("moto"));
  };

  return (
    <div>
      <h2>Implementação do Factory Method</h2>
      <p>{veiculo ? `${veiculo.nome} com ${veiculo.rodas} rodas` : "Nenhum veículo criado ainda."}</p>
      <button onClick={handleCriar}>Criar Veículo</button>
    </div>
  );
};

export default FactoryMethod;
