class FreteNormal {
  calcular(peso) {
    return peso * 1.0;
  }
}

class FreteExpresso {
  calcular(peso) {
    return peso * 1.5;
  }
}

class FreteInternacional {
  calcular(peso) {
    return peso * 3.0;
  }
}

class CalculadoraFrete {
  setEstrategia(estrategia) {
    this.estrategia = estrategia;
  }

  calcular(peso) {
    if (!this.estrategia) throw new Error("Estratégia não definida");
    return this.estrategia.calcular(peso);
  }
}

const calculadora = new CalculadoraFrete();

calculadora.setEstrategia(new FreteNormal());
console.log("Normal:", calculadora.calcular(10));

calculadora.setEstrategia(new FreteExpresso());
console.log("Expresso:", calculadora.calcular(10));

calculadora.setEstrategia(new FreteInternacional());
console.log("Internacional:", calculadora.calcular(10));
