// Simulando sistema legado
class OldChart {
  drawOldChart(containerId, data) {
    const container = document.getElementById(containerId);
    container.innerHTML = ''; // limpa antes
    data.forEach(value => {
      const bar = document.createElement('div');
      bar.className = 'bar';
      bar.style.width = value + 'px';
      container.appendChild(bar);
    });
    console.log("Gráfico renderizado pelo sistema legado.");
  }
}
