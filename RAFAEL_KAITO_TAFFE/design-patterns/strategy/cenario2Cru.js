function calcularPrecoFinal(tipoSocio, valorIngresso) {
  if (tipoSocio === "nenhum") {
    return valorIngresso;
  } else if (tipoSocio === "prata") {
    return valorIngresso * 0.95;
  } else if (tipoSocio === "gold") {
    return valorIngresso * 0.88;
  } else if (tipoSocio === "diamante") {
    return valorIngresso * 0.8;
  } else if (tipoSocio === "zico") {
    const precoComDesconto = valorIngresso * 0.75;
    const cashback = precoComDesconto * 0.04;
    return {
      total: precoComDesconto,
      cashback: cashback,
    };
  } else {
    throw new Error("Tipo de sócio inválido");
  }
}

const valorIngresso = 250;

console.log("Sem sócio:", calcularPrecoFinal("nenhum", valorIngresso));
console.log("Prata:", calcularPrecoFinal("prata", valorIngresso));
console.log("Gold:", calcularPrecoFinal("gold", valorIngresso));
console.log("Diamante:", calcularPrecoFinal("diamante", valorIngresso));
console.log("Zico:", calcularPrecoFinal("zico", valorIngresso));
