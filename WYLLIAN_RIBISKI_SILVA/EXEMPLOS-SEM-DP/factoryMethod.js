function processarPagamento(tipo) {
    if (tipo === "cartao") {
        console.log("Processando pagamento via Cartão de Crédito...");
        console.log("Verificando limite...");
        console.log("Pagamento aprovado no Cartão!");
    } else if (tipo === "boleto") {
        console.log("Gerando boleto bancário...");
        console.log("Enviando boleto por e-mail...");
        console.log("Aguardando pagamento do boleto.");
    } else if (tipo === "pix") {
        console.log("Gerando chave PIX...");
        console.log("Aguardando transferência via PIX...");
        console.log("Pagamento via PIX realizado com sucesso!");
    } else {
        console.log("Método de pagamento inválido.");
    }
}

processarPagamento("cartao");
console.log("----------");
processarPagamento("boleto");
console.log("----------");
processarPagamento("pix");
console.log("----------");
processarPagamento("dolar");
