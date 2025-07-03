function calcularFrete(tipoEntrega, distanciaKm) {
  let resultado;

  if (tipoEntrega === 'sedex') {
    resultado = distanciaKm * 1.5 + 10;
  } else if (tipoEntrega === 'pac') {
    resultado = distanciaKm * 1.0 + 5;
  } else if (tipoEntrega === 'retirada') {
    resultado = 0;
  } else {
    throw new Error('Tipo de entrega inválido');
  }

  return resultado;
}

document.getElementById('btnCalcular').addEventListener('click', function () {
  const tipo = document.getElementById('tipoEntrega').value;
  const distancia = parseFloat(document.getElementById('distancia').value);

  if (isNaN(distancia) || distancia < 0) {
    document.getElementById('resultado').innerText = "Por favor, insira uma distância válida.";
    return;
  }

  const frete = calcularFrete(tipo, distancia);
  const mensagem = `Valor do frete: R$ ${frete.toFixed(2)}`;

  document.getElementById('resultado').innerText = mensagem;
});


