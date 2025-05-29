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

// api selic real
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

function simularInvestimento(valorInicial, aporteMensal, meses, taxaMensal) {
  let montante = valorInicial;
  const historico = [montante];

  for (let i = 1; i <= meses; i++) {
    montante = (montante + aporteMensal) * (1 + taxaMensal);
    historico.push(montante);
  }

  return historico;
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

  let taxaMensal;

  if (tipo === 'cdb') {
    taxaMensal = 0.0102;
  } else if (tipo === 'poupanca') {
    taxaMensal = 0.0053;
  } else if (tipo === 'fundo_di') {
    taxaMensal = 0.0085;
  } else if (tipo === 'fundo_x') {
    taxaMensal = 0.0072;
  } else if (tipo === 'acoes') {
    taxaMensal = 0.015;
  } else if (tipo === 'defi') {
    taxaMensal = 0.03;
  } else if (tipo === 'prefixado') {
    taxaMensal = 0.00957;
  } else if (tipo === 'tesouro') {
    taxaMensal = await buscarSelic();
  } else {
    alert("Tipo de investimento inválido.");
    return;
  }

  const historico = simularInvestimento(valor, aporte, meses, taxaMensal);
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

  const taxaAnual = (Math.pow(1 + taxaMensal, 12) - 1) * 100;
  document.getElementById('tab-metricas').innerHTML = `
    <p><strong>Tipo de Investimento:</strong> ${tipo.toUpperCase()}</p>
    <p><strong>Taxa Mensal Usada:</strong> ${(taxaMensal * 100).toFixed(2)}%</p>
    <p><strong>Taxa Anual Aproximada:</strong> ${taxaAnual.toFixed(2)}%</p>
    <p><strong>Período da simulação:</strong> ${meses} meses</p>
    <p><strong>Total Investido:</strong> ${formatMoney(totalInvestido)}</p>
    <p><strong>Lucro Estimado:</strong> ${formatMoney(lucro)}</p>
  `;

  renderizarGrafico(historico);
  document.getElementById('resultado').classList.remove('hidden');
  mostrarAba('tab-resumo');
}
