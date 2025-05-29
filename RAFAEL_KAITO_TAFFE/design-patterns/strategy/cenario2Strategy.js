class SemSocio {
  calcular(valor) {
    return { total: valor };
  }
}

class SocioPrata {
  calcular(valor) {
    return { total: valor * 0.95 };
  }
}

class SocioGold {
  calcular(valor) {
    return { total: valor * 0.88 };
  }
}

class SocioDiamante {
  calcular(valor) {
    return { total: valor * 0.8 };
  }
}

class SocioZico {
  calcular(valor) {
    const total = valor * 0.75;
    const cashback = total * 0.04;
    return { total, cashback };
  }
}

class CalculadoraDesconto {
  setEstrategia(estrategia) {
    this.estrategia = estrategia;
  }

  calcular(valor) {
    if (!this.estrategia) {
      throw new Error("Estratégia não definida");
    }
    return this.estrategia.calcular(valor);
  }
}

const ingresso = 250;
const calculadora = new CalculadoraDesconto();

calculadora.setEstrategia(new SemSocio());
console.log("Sem sócio:", calculadora.calcular(ingresso));

calculadora.setEstrategia(new SocioPrata());
console.log("Prata:", calculadora.calcular(ingresso));

calculadora.setEstrategia(new SocioGold());
console.log("Gold:", calculadora.calcular(ingresso));

calculadora.setEstrategia(new SocioDiamante());
console.log("Diamante:", calculadora.calcular(ingresso));

calculadora.setEstrategia(new SocioZico());
console.log("Zico:", calculadora.calcular(ingresso));
