const precoEl = document.getElementById("preco");
const historicoEl = document.getElementById("historico");
const ctx = document.getElementById("grafico").getContext("2d");

let precoAtual = 100000; 
let historico = [precoAtual];
let labels = [new Date().toLocaleTimeString()];

// Gráfico
const grafico = new Chart(ctx, {
  type: 'line',
  data: {
    labels: labels,
    datasets: [{
      label: 'BTC',
      data: historico,
      borderColor: 'rgb(34, 197, 94)',
      tension: 0.3
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        ticks: {
          callback: value => `R$ ${value.toLocaleString()}`
        }
      }
    }
  }
});

// Atualiza o DOM (modo sem observer)
function atualizarTela(novoPreco) {
  // Preço
  precoEl.textContent = `R$ ${novoPreco.toLocaleString()}`;

  // Histórico
  const li = document.createElement("li");
  li.textContent = `Atualizado: R$ ${novoPreco.toLocaleString()}`;
  historicoEl.prepend(li);

  // Gráfico
  const hora = new Date().toLocaleTimeString();
  grafico.data.labels.push(hora);
  grafico.data.datasets[0].data.push(novoPreco);

  if (grafico.data.labels.length > 10) {
    grafico.data.labels.shift();
    grafico.data.datasets[0].data.shift();
  }

  grafico.update();
}

// simula o valor
setInterval(() => {
  const variacao = (Math.random() - 0.5) * 5000;
  precoAtual = Math.max(50000, precoAtual + variacao);
  atualizarTela(Math.round(precoAtual));
}, 2000);
