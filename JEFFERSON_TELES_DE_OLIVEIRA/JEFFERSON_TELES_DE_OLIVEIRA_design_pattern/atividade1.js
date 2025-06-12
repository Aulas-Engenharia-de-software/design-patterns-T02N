//Calculadora de Frete
class EstrategiaCalculoFrete {
    calcular(peso, distancia) {
        throw new Error("O método 'calcular' deve ser implementado pela estratégia específica.");
    }
}

class Sedex extends EstrategiaCalculoFrete {
    calcular(peso, distancia) {
        console.log("Calculando frete SEDEX...");
        return peso * distancia * 0.5 + 10;
    }
}

class Pac extends EstrategiaCalculoFrete {
    calcular(peso, distancia) {
        console.log("Calculando frete PAC...");
        return peso * distancia * 0.3 + 5;
    }
}

class RetiradaLoja extends EstrategiaCalculoFrete {
    calcular(peso, distancia) {
        console.log("Calculando frete para retirada em loja...");
        return 0;
    }
}

class FreteExpresso extends EstrategiaCalculoFrete {
    calcular(peso, distancia) {
        console.log("Calculando frete Expresso (chega rapidinho!)...");
        return peso * distancia * 0.7 + 20;
    }
}

class ContextoCalculoFrete {
    constructor(estrategiaInicial) {
        this._estrategia = estrategiaInicial;
    }

    definirEstrategia(novaEstrategia) {
        this._estrategia = novaEstrategia;
    }

    executarCalculoFrete(peso, distancia) {
        if (!this._estrategia) {
            throw new Error("Nenhuma estratégia de cálculo de frete foi definida.");
        }
        return this._estrategia.calcular(peso, distancia);
    }
}

console.log("--- Exemplo de Uso do Padrão Strategy para Fretes ---");

const calculadoraSedex = new ContextoCalculoFrete(new Sedex());
const valorFreteSedex = calculadoraSedex.executarCalculoFrete(3, 150); 
console.log(`Valor do Frete SEDEX: R$${valorFreteSedex.toFixed(2)}\n`);

const calculadoraPac = new ContextoCalculoFrete(new Pac());
const valorFretePac = calculadoraPac.executarCalculoFrete(3, 150);
console.log(`Valor do Frete PAC: R$${valorFretePac.toFixed(2)}\n`);

const calculadoraRetirada = new ContextoCalculoFrete(new RetiradaLoja());
const valorFreteRetirada = calculadoraRetirada.executarCalculoFrete(3, 150);
console.log(`Valor do Frete Retirada em Loja: R$${valorFreteRetirada.toFixed(2)}\n`);

const calculadoraDinamica = new ContextoCalculoFrete(new Pac()); 
console.log("Iniciando com PAC...");
let valorAtual = calculadoraDinamica.executarCalculoFrete(5, 200);
console.log(`Valor inicial (PAC): R$${valorAtual.toFixed(2)}\n`);

console.log("Mudando para Frete Expresso...");
calculadoraDinamica.definirEstrategia(new FreteExpresso());
valorAtual = calculadoraDinamica.executarCalculoFrete(5, 200);
console.log(`Valor após mudança (Expresso): R$${valorAtual.toFixed(2)}\n`);

console.log("Fim do Exemplo");