let graficoAtual = null;

function renderizarGrafico(dados) {
  const ctx = document.getElementById('grafico').getContext('2d');

  // Destroi gráfico anterior
  if (graficoAtual) {
    graficoAtual.destroy();
  }

  graficoAtual = new Chart(ctx, {
    type: 'line',
    data: {
      labels: dados.map((_, i) => `Mês ${i}`),
      datasets: [{
        label: 'Evolução do Investimento',
        data: dados,
        borderColor: '#22c55e',
        backgroundColor: 'rgba(34,197,94,0.1)',
        fill: true,
        tension: 0.3,
        pointRadius: 3,
        pointBackgroundColor: '#22c55e'
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { labels: { color: '#fff' } },
        tooltip: {
          callbacks: {
            label: context => `R$ ${context.raw.toFixed(2).replace('.', ',')}`
          }
        }
      },
      scales: {
        x: {
          ticks: { color: '#ccc' },
          grid: { color: '#444' }
        },
        y: {
          ticks: {
            color: '#ccc',
            callback: val => `R$ ${val.toLocaleString('pt-BR')}`
          },
          grid: { color: '#444' }
        }
      }
    }
  });
}
