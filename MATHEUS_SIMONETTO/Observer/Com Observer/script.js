// === Observable ===
class BitcoinSubject {
  constructor() {
    this.observers = [];
    this.preco = 100000;
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  notify() {
    for (const observer of this.observers) {
      observer.update(this.preco);
    }
  }

  setPreco(novoPreco) {
    this.preco = novoPreco;
    this.notify();
  }

  getPreco() {
    return this.preco;
  }
}

// === Observadores ===
class PrecoDisplay {
  constructor(elementId) {
    this.el = document.getElementById(elementId);
  }

  update(novoPreco) {
    this.el.textContent = `R$ ${novoPreco.toLocaleString()}`;
  }
}

class HistoricoLog {
  constructor(elementId) {
    this.el = document.getElementById(elementId);
  }

  update(novoPreco) {
    const li = document.createElement("li");
    li.textContent = `Atualizado: R$ ${novoPreco.toLocaleString()}`;
    this.el.prepend(li);
  }
}

class GraficoBTC {
  constructor(canvasId) {
    this.ctx = document.getElementById(canvasId).getContext("2d");
    this.labels = [new Date().toLocaleTimeString()];
    this.dados = [100000];

    this.chart = new Chart(this.ctx, {
      type: 'line',
      data: {
        labels: this.labels,
        datasets: [{
          label: 'BTC',
          data: this.dados,
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
  }

  update(novoPreco) {
    const hora = new Date().toLocaleTimeString();
    this.labels.push(hora);
    this.dados.push(novoPreco);

    if (this.labels.length > 10) {
      this.labels.shift();
      this.dados.shift();
    }

    this.chart.update();
  }
}


class AlertaSonoro {
  update(novoPreco) {
    if (novoPreco > 120000 || novoPreco < 80000) {
      const audio = new Audio('https://actions.google.com/sounds/v1/alarms/beep_short.ogg');
      audio.play();
    }
  }
}


class CorDinamica {
  constructor(elementId) {
    this.el = document.getElementById(elementId);
    this.ultimoPreco = 100000;
  }

  update(novoPreco) {
    this.el.classList.remove('text-green-500', 'text-red-500');

    if (novoPreco > this.ultimoPreco) {
      this.el.classList.add('text-green-500');
    } else if (novoPreco < this.ultimoPreco) {
      this.el.classList.add('text-red-500');
    }

    this.ultimoPreco = novoPreco;
  }
}


class NotificacaoDesktop {
  constructor() {
    if (Notification.permission !== "granted") {
      Notification.requestPermission();
    }
  }

  update(novoPreco) {
    if (Notification.permission === "granted" && document.hidden) {
      if (novoPreco >= 110000) {
        new Notification("🚀 BTC ultrapassou R$ 110.000!");
      } else if (novoPreco <= 90000) {
        new Notification("📉 BTC caiu abaixo de R$ 90.000!");
      }
    }
  }
}

// === Inicialização ===
const btc = new BitcoinSubject();

const precoDisplay   = new PrecoDisplay("preco");
const historico      = new HistoricoLog("historico");
const grafico        = new GraficoBTC("grafico");
const alertaSonoro   = new AlertaSonoro();
const corDinamica    = new CorDinamica("preco");
const notificacao    = new NotificacaoDesktop();

// Subscrição dos observers
btc.subscribe(precoDisplay);
btc.subscribe(historico);
btc.subscribe(grafico);
btc.subscribe(alertaSonoro);
btc.subscribe(corDinamica);
btc.subscribe(notificacao);

// simulador de preco
setInterval(() => {
  const variacao = (Math.random() - 0.5) * 5000;
  const novoPreco = Math.max(50000, btc.getPreco() + variacao);
  btc.setPreco(Math.round(novoPreco));
}, 2000);
