function calcularFrete(tipo, peso) {
  if (tipo === "normal") {
    return peso * 1.0;
  } else if (tipo === "expresso") {
    return peso * 1.5;
  } else if (tipo === "internacional") {
    return peso * 3.0;
  } else {
    throw new Error("Tipo de frete inválido");
  }
}

console.log("Normal:", calcularFrete("normal", 10));
console.log("Expresso:", calcularFrete("expresso", 10));
console.log("Internacional:", calcularFrete("internacional", 10));
