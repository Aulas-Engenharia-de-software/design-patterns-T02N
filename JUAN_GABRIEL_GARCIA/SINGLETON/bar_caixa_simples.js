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

// Testando a implementação sem Singleton
const drink1 = new Drink("Drink básico", 10);
const drink2 = new Drink("Drink com gelo", 12);

// Criando dois caixas diferentes (não ideal)
const cashier1 = new Cashier();
const cashier2 = new Cashier();

cashier1.addSale(drink1); // Venda registrada: Drink básico - R$10
cashier1.addSale(drink2); // Venda registrada: Drink com gelo - R$12
console.log(`Total no caixa 1: R$${cashier1.getTotalSales()}`); // Total no caixa 1: R$22

cashier2.addSale(drink2); // Venda registrada: Drink com gelo - R$12
console.log(`Total no caixa 2: R$${cashier2.getTotalSales()}`); // Total no caixa 2: R$12