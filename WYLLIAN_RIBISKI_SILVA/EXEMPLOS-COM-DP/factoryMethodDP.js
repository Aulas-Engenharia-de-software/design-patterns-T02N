class Pagamento {
    processar() {
    }
}

class PagamentoCartao extends Pagamento {
    processar() {
        console.log("Processando pagamento via Cartão de Crédito...");
        console.log("Verificando limite...");
        console.log("Pagamento aprovado no Cartão!");
    }
}

class PagamentoBoleto extends Pagamento {
    processar() {
        console.log("Gerando boleto bancário...");
        console.log("Enviando boleto por e-mail...");
        console.log("Aguardando pagamento do boleto.");
    }
}

class PagamentoPix extends Pagamento {
    processar() {
        console.log("Gerando chave PIX...");
        console.log("Aguardando transferência via PIX...");
        console.log("Pagamento via PIX realizado com sucesso!");
    }
}

class PagamentoFactory {
    static criarPagamento(tipo) {
        if (tipo === "cartao") {
            return new PagamentoCartao();
        } else if (tipo === "boleto") {
            return new PagamentoBoleto();
        } else if (tipo === "pix") {
            return new PagamentoPix();
        } else {
            throw new Error("Tipo de pagamento inválido.");
        }
    }
}

try {
    const pagamento1 = PagamentoFactory.criarPagamento("cartao");
    pagamento1.processar();

    console.log("----------");

    const pagamento2 = PagamentoFactory.criarPagamento("boleto");
    pagamento2.processar();

    console.log("----------");

    const pagamento3 = PagamentoFactory.criarPagamento("pix");
    pagamento3.processar();

    console.log("----------");

    const pagamento4 = PagamentoFactory.criarPagamento("dolar");
    pagamento4.processar();
} catch (error) {
    console.log(`Erro: ${error.message}`);
}
