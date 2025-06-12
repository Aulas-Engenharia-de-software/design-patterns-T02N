class SedexStrategy {
  calcular(distancia) {
    return distancia * 1.5 + 10;
  }
}

class PacStrategy {
  calcular(distancia) {
    return distancia * 1.0 + 5;
  }
}

class RetiradaStrategy {
  calcular(distancia) {
    return 0;
  }
}

class CalculadoraFrete {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  calcular(distancia) {
    return this.strategy.calcular(distancia);
  }
}

document.getElementById('btnCalcular').addEventListener('click', function () {
  const tipo = document.getElementById('tipoEntrega').value;
  const distancia = parseFloat(document.getElementById('distancia').value);

  if (isNaN(distancia) || distancia < 0) {
    document.getElementById('resultado').innerText = "Por favor, insira uma distância válida.";
    return;
  }

  let strategy;

  switch (tipo) {
    case 'sedex':
      strategy = new SedexStrategy();
      break;
    case 'pac':
      strategy = new PacStrategy();
      break;
    case 'retirada':
      strategy = new RetiradaStrategy();
      break;
    default:
      alert("Tipo de entrega inválido.");
      return;
  }

  const calculadora = new CalculadoraFrete(strategy);
  const frete = calculadora.calcular(distancia);
  const mensagem = `Valor do frete: R$ ${frete.toFixed(2)}`;

  document.getElementById('resultado').innerText = mensagem;
});
