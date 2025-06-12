document.getElementById('btnRender').addEventListener('click', () => {
  // O novo sistema usa ChartAdapter, que segue a interface nova
  const chart = new ChartAdapter();

  const sampleData = [100, 180, 75, 130, 90, 160];
  chart.render(sampleData);
});
