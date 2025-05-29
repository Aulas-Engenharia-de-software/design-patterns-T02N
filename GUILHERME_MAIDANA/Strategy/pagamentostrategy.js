const readlineSync = require('readline-sync');

class PagamentoCredito {
    calcular(valor) {
        return valor * 1.02;
    }
}

class PagamentoDebito {
    calcular(valor) {
        return valor;
    }
}

class PagamentoBoleto {
    calcular(valor) {
        return valor * 0.95;
    }
}

class PagamentoPix {
    calcular(valor) {
        return valor * 0.9;
    }
}

class CalculadoraPagamento {
    constructor(estrategia) {
        this.estrategia = estrategia;
    }

    calcular(valor) {
        return this.estrategia.calcular(valor);
    }
}

const valor = parseFloat(readlineSync.question('Digite o valor a ser pago: '));
const tipoPagamento = readlineSync.question('Escolha o método de pagamento:\n1 - Credito\n2 - Debito\n3 - Boleto\n4 - Pix\n');

let estrategia;
if (tipoPagamento === '1') estrategia = new PagamentoCredito();
else if (tipoPagamento === '2') estrategia = new PagamentoDebito();
else if (tipoPagamento === '3') estrategia = new PagamentoBoleto();
else if (tipoPagamento === '4') estrategia = new PagamentoPix();
else throw new Error('Tipo de pagamento desconhecido');

const calculadora = new CalculadoraPagamento(estrategia);
console.log('Total a pagar:', calculadora.calcular(valor));
