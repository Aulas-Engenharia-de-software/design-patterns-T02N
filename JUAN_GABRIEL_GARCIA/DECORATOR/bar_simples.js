class BasicDrink {
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

class DrinkWithIce {
    constructor() {
        this.description = "Drink básico com gelo";
        this.cost = 12;
    }

    getDescription() {
        return this.description;
    }

    getCost() {
        return this.cost;
    }
}

class DrinkWithLemon {
    constructor() {
        this.description = "Drink básico com limão";
        this.cost = 13;
    }

    getDescription() {
        return this.description;
    }

    getCost() {
        return this.cost;
    }
}

class DrinkWithIceAndLemon {
    constructor() {
        this.description = "Drink básico com gelo e limão";
        this.cost = 15;
    }

    getDescription() {
        return this.description;
    }

    getCost() {
        return this.cost;
    }
}

const basicDrink = new BasicDrink();
console.log(basicDrink.getDescription(), basicDrink.getCost()); // Drink básico, 10

const drinkWithIce = new DrinkWithIce();
console.log(drinkWithIce.getDescription(), drinkWithIce.getCost()); // Drink básico com gelo, 12

const drinkWithLemon = new DrinkWithLemon();
console.log(drinkWithLemon.getDescription(), drinkWithLemon.getCost()); // Drink básico com limão, 13

const drinkWithIceAndLemon = new DrinkWithIceAndLemon();
console.log(drinkWithIceAndLemon.getDescription(), drinkWithIceAndLemon.getCost()); // Drink básico com gelo e limão, 15