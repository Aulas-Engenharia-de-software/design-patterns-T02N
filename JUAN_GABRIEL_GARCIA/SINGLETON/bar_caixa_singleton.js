class Drink {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }

    getName() {
        return this.name;
    }

    getCost() {
        return this.cost;
    }
}

class Cashier {
    constructor() {
        if (Cashier.instance) {
            return Cashier.instance; // Retorna a instância existente
        }
        Cashier.instance = this; // Armazena a instância
        this.totalSales = 0;
    }

    addSale(drink) {
        this.totalSales += drink.getCost();
        console.log(`Venda registrada: ${drink.getName()} - R$${drink.getCost()}`);
    }

    getTotalSales() {
        return this.totalSales;
    }
}

const drink1 = new Drink("Drink básico", 10);
const drink2 = new Drink("Drink com gelo", 12);

// Tentando criar múltiplos caixas (mas será a mesma instância)
const cashier1 = new Cashier();
const cashier2 = new Cashier();

console.log(cashier1 === cashier2); // true (mesma instância)

cashier1.addSale(drink1); // Venda registrada: Drink básico - R$10
cashier1.addSale(drink2); // Venda registrada: Drink com gelo - R$12
console.log(`Total no caixa 1: R$${cashier1.getTotalSales()}`); // Total no caixa 1: R$22

cashier2.addSale(drink2); // Venda registrada: Drink com gelo - R$12
console.log(`Total no caixa 2: R$${cashier2.getTotalSales()}`); // Total no caixa 2: R$34