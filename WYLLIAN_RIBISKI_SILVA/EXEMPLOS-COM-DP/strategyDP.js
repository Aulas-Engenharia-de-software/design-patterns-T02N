class OrdenarPorNome {
    ordenar(lista) {
        return lista.sort((a, b) => a.nome.localeCompare(b.nome));
    }
}

class OrdenarPorPreco {
    ordenar(lista) {
        return lista.sort((a, b) => a.preco - b.preco);
    }
}

class OrdenarPorData {
    ordenar(lista) {
        return lista.sort(
            (a, b) => new Date(a.dataCriacao) - new Date(b.dataCriacao)
        );
    }
}

class Ordenador {
    constructor(estrategia) {
        this.estrategia = estrategia;
    }

    setEstrategia(estrategia) {
        this.estrategia = estrategia;
    }

    ordenar(lista) {
        return this.estrategia.ordenar(lista);
    }
}

const produtos = [
    { nome: "teclado", preco: 100, dataCriacao: "2024-01-15" },
    { nome: "Mouse", preco: 50, dataCriacao: "2023-10-20" },
    { nome: "Monitor", preco: 900, dataCriacao: "2022-05-03" },
    { nome: "Cadeira", preco: 450, dataCriacao: "2023-12-01" },
];

const ordenador = new Ordenador(new OrdenarPorNome());

console.log("Ordenado por Nome:");
console.log(ordenador.ordenar([...produtos]));

ordenador.setEstrategia(new OrdenarPorPreco());
console.log("\nOrdenado por preço:");
console.log(ordenador.ordenar([...produtos]));

ordenador.setEstrategia(new OrdenarPorData());
console.log("\nOrdenado por data:");
console.log(ordenador.ordenar([...produtos]));
