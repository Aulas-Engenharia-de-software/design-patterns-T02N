// === Utilitários ===
function parseMoney(valorStr) {
  return parseFloat(valorStr.replace("R$", "").replace(/\./g, "").replace(",", "."));
}

function formatMoney(valor) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function mostrarAba(id) {
  document.querySelectorAll('.tab-content').forEach(c => c.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
}

//  Classe base
class Investimento {
  constructor(jurosMensal) {
    this.jurosMensal = jurosMensal;
  }

  simular(valorInicial, aporteMensal, meses) {
    let montante = valorInicial;
    const historico = [montante];

    for (let i = 1; i <= meses; i++) {
      montante = (montante + aporteMensal) * (1 + this.jurosMensal);
      historico.push(montante);
    }

    return historico;
  }
}

// subclasses
class CDB extends Investimento {
  constructor() { super(0.0102); }
}
class Poupanca extends Investimento {
  constructor() { super(0.0053); }
}
class FundoDI extends Investimento {
  constructor() { super(0.0085); }
}
class FundoX extends Investimento {
  constructor() { super(0.0072); }
}
class Acoes extends Investimento {
  constructor() { super(0.015); }
}
class DeFi extends Investimento {
  constructor() { super(0.03); }
}
class TesouroDinamico extends Investimento {
  constructor(taxaSelicMensal) { super(taxaSelicMensal); }
}
class TesouroPrefixado extends Investimento {
  constructor() { super(0.00957); }
}


class InvestimentoFactory {
  static async criar(tipo) {
    switch (tipo) {
      case 'cdb': return new CDB();
      case 'poupanca': return new Poupanca();
      case 'fundo_di': return new FundoDI();
      case 'fundo_x': return new FundoX();
      case 'acoes': return new Acoes();
      case 'defi': return new DeFi();
      case 'prefixado': return new TesouroPrefixado();
      case 'tesouro':
        const taxaSelic = await buscarSelic();
        return new TesouroDinamico(taxaSelic);
      default:
        throw new Error("Tipo de investimento inválido");
    }
  }
}

//  api selic real
async function buscarSelic() {
  try {
    const res = await fetch("https://api.bcb.gov.br/dados/serie/bcdata.sgs.4189/dados/ultimos/1?formato=json");
    const data = await res.json();
    const taxaAnual = parseFloat(data[0].valor.replace(",", ".")) / 100;
    return Math.pow(1 + taxaAnual, 1 / 12) - 1;
  } catch (e) {
    console.warn("Erro ao buscar Selic. Usando valor padrão.");
    return 0.0086;
  }
}


async function simular() {
  const tipo = document.getElementById('tipo').value;
  const valor = parseMoney(document.getElementById('valor').value);
  const aporte = parseMoney(document.getElementById('aporte').value);

  let meses = parseInt(document.getElementById('meses').value);
  if (tipo === 'prefixado') {
    const hoje = new Date();
    const jan2030 = new Date(2030, 0, 1);
    meses = (jan2030.getFullYear() - hoje.getFullYear()) * 12 + (jan2030.getMonth() - hoje.getMonth());
  }

  if (!valor || !meses || meses <= 0) {
    alert("Preencha os campos corretamente.");
    return;
  }

  const investimento = await InvestimentoFactory.criar(tipo);
  const historico = investimento.simular(valor, aporte, meses);

  const montanteFinal = historico[historico.length - 1];
  const totalInvestido = valor + aporte * meses;
  const lucro = montanteFinal - totalInvestido;
  const rentabilidade = (lucro / totalInvestido) * 100;

  
  document.getElementById('tab-resumo').innerHTML = `
    <p><strong>Tipo:</strong> ${tipo.toUpperCase()}</p>
    <p><strong>Total Investido:</strong> ${formatMoney(totalInvestido)}</p>
    <p><strong>Montante Final:</strong> ${formatMoney(montanteFinal)}</p>
    <p><strong>Lucro:</strong> ${formatMoney(lucro)}</p>
    <p><strong>Rentabilidade:</strong> ${rentabilidade.toFixed(2)}%</p>
    <p><strong>Período:</strong> ${meses} meses</p>
  `;

  
  const taxaAnual = (Math.pow(1 + investimento.jurosMensal, 12) - 1) * 100;
  document.getElementById('tab-metricas').innerHTML = `
    <p><strong>Tipo de Investimento:</strong> ${tipo.toUpperCase()}</p>
    <p><strong>Taxa Mensal Usada:</strong> ${(investimento.jurosMensal * 100).toFixed(2)}%</p>
    <p><strong>Taxa Anual Aproximada:</strong> ${taxaAnual.toFixed(2)}%</p>
    <p><strong>Período da simulação:</strong> ${meses} meses</p>
    <p><strong>Total Investido:</strong> ${formatMoney(totalInvestido)}</p>
    <p><strong>Lucro Estimado:</strong> ${formatMoney(lucro)}</p>
  `;

  renderizarGrafico(historico);
  document.getElementById('resultado').classList.remove('hidden');
  mostrarAba('tab-resumo');
}
