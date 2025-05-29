const readlineSync = require('readline-sync');

class CalculadoraPagamentoIngenua {
    calcular(tipoPagamento, valor) {
        if (tipoPagamento === '1') {
            return valor * 1.02; // 2% de juros
        } else if (tipoPagamento === '2') {
            return valor; // Sem juros
        } else if (tipoPagamento === '3') {
            return valor * 0.95; // 5% de desconto
        } else if (tipoPagamento === '4') {
            return valor * 0.9; // 10% de desconto
        } else {
            throw new Error('Tipo de pagamento desconhecido');
        }
    }
}

const valor = parseFloat(readlineSync.question('Digite o valor a ser pago: '));
const tipoPagamento = readlineSync.question('Escolha o método de pagamento:\n1 - Credito\n2 - Debito\n3 - Boleto\n4 - Pix\n');

const calculadoraIngenua = new CalculadoraPagamentoIngenua();
console.log('Total a pagar:', calculadoraIngenua.calcular(tipoPagamento, valor));
