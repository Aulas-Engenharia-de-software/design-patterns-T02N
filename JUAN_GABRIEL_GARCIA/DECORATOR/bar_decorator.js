class Drink {
    constructor() {
        this.description = "Drink básico";
        this.cost = 10;
    }

    getDescription() {
        return this.description;
    }

    getCost() {
        return this.cost;
    }
}

class IceDecorator {
    constructor(drink) {
        this.drink = drink;
    }

    getDescription() {
        return this.drink.getDescription() + ", com gelo";
    }

    getCost() {
        return this.drink.getCost() + 2;
    }
}

class LemonDecorator {
    constructor(drink) {
        this.drink = drink;
    }

    getDescription() {
        return this.drink.getDescription() + ", com limão";
    }

    getCost() {
        return this.drink.getCost() + 3;
    }
}

let drink = new Drink();
console.log(drink.getDescription(), drink.getCost()); // Drink básico, 10

drink = new IceDecorator(drink);
console.log(drink.getDescription(), drink.getCost()); // Drink básico, com gelo, 12

drink = new LemonDecorator(drink);
console.log(drink.getDescription(), drink.getCost()); // Drink básico, com gelo, com limão, 15

