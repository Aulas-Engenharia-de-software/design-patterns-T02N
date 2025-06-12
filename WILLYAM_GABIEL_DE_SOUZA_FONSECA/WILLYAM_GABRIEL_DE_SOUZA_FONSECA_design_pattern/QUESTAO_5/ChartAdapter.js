// Adapter que permite o uso do código legado com a nova interface
class ChartAdapter extends NewChartInterface {
  constructor() {
    super();
    this.legacyChart = new OldChart();
  }

  render(data) {
    this.legacyChart.drawOldChart('chart', data);
  }
}
