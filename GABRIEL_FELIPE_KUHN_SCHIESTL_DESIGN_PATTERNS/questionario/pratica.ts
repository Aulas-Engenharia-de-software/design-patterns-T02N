interface INovoPagamento {
  processarPagamento(valor: number): void;
}

class PagamentoCartao implements INovoPagamento {
  processarPagamento(valor: number): void {
    console.log(
      `Pagamento de R$ ${valor.toFixed(2)} realizado via cartão de crédito.`
    );
  }
}

class APITransferenciaBancariaAntiga {
  fazerTransferencia(valor: number, contaDestino: string): void {
    console.log(
      `Transferência de R$ ${valor.toFixed(
        2
      )} realizada para a conta ${contaDestino} via sistema legado.`
    );
  }
}

class TransferenciaAdapter implements INovoPagamento {
  private transferenciaAntiga: APITransferenciaBancariaAntiga;
  private contaDestino: string;

  constructor(
    transferenciaAntiga: APITransferenciaBancariaAntiga,
    contaDestino: string
  ) {
    this.transferenciaAntiga = transferenciaAntiga;
    this.contaDestino = contaDestino;
  }

  processarPagamento(valor: number): void {
    this.transferenciaAntiga.fazerTransferencia(valor, this.contaDestino);
  }
}

// Exemplo de uso
const formasDePagamento: INovoPagamento[] = [
  new PagamentoCartao(),
  new TransferenciaAdapter(new APITransferenciaBancariaAntiga(), "12345-6"),
];

formasDePagamento.forEach((fp) => fp.processarPagamento(150.0));
