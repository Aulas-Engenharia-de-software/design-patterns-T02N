const produtos = [
    { nome: "Teclado", preco: 100, dataCriacao: "2024-01-15" },
    { nome: "Mouse", preco: 50, dataCriacao: "2023-10-20" },
    { nome: "Monitor", preco: 900, dataCriacao: "2022-05-03" },
    { nome: "Cadeira", preco: 450, dataCriacao: "2023-12-01" },
];

function ordenarProdutos(produtos, criterio) {
    if (criterio === "nome") {
        return produtos.sort((a, b) => a.nome.localeCompare(b.nome));
    } else if (criterio === "preco") {
        return produtos.sort((a, b) => a.preco - b.preco);
    } else if (criterio === "data") {
        return produtos.sort(
            (a, b) => new Date(a.dataCriacao) - new Date(b.dataCriacao)
        );
    } else {
        throw new Error("Critério de ordenação inválido.");
    }
}

console.log("Ordenado por nome:");
console.log(ordenarProdutos([...produtos], "nome"));

console.log("\nOrdenado por preço:");
console.log(ordenarProdutos([...produtos], "preco"));

console.log("\nOrdenado por data:");
console.log(ordenarProdutos([...produtos], "data"));
