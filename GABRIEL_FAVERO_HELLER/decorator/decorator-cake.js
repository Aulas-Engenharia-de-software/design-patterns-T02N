class BasicCake {
  getDescription() {
    return "Bolo simples";
  }

  getCost() {
    return 20;
  }
}

class CakeDecorator {
  constructor(cake) {
    this.cake = cake;
  }

  getDescription() {
    return this.cake.getDescription();
  }

  getCost() {
    return this.cake.getCost();
  }
}

class ChocolateDecorator extends CakeDecorator {
  getDescription() {
    return `${this.cake.getDescription()} com chocolate`;
  }

  getCost() {
    return this.cake.getCost() + 10;
  }
}

class FruitDecorator extends CakeDecorator {
  getDescription() {
    if (this.cake.getDescription().includes("chocolate")) {
      return `${this.cake.getDescription()} e frutas`;
    }
    return `${this.cake.getDescription()} com frutas`;
  }

  getCost() {
    return this.cake.getCost() + 15;
  }
}

class NutsDecorator extends CakeDecorator {
  getDescription() {
    return `${this.cake.getDescription()} com nozes`;
  }

  getCost() {
    return this.cake.getCost() + 12;
  }
}

class CreamDecorator extends CakeDecorator {
  getDescription() {
    return `${this.cake.getDescription()} com chantilly`;
  }

  getCost() {
    return this.cake.getCost() + 8;
  }
}

class BirthdayDecorator extends CakeDecorator {
  getDescription() {
    return `${this.cake.getDescription()} de aniversário`;
  }

  getCost() {
    return this.cake.getCost() + 18;
  }
}

const basicCake = new BasicCake();
const chocolateCake = new ChocolateDecorator(basicCake);
const fruitCake = new FruitDecorator(basicCake);
const chocolateFruitCake = new FruitDecorator(
  new ChocolateDecorator(basicCake)
);
const nutsCake = new NutsDecorator(basicCake);
const creamChocolateCake = new CreamDecorator(
  new ChocolateDecorator(basicCake)
);
const deluxeCake = new NutsDecorator(
  new FruitDecorator(new ChocolateDecorator(basicCake))
);
const birthdayCake = new BirthdayDecorator(
  new CreamDecorator(new ChocolateDecorator(basicCake))
);

console.log("\n=== Exemplo Simples ===");
console.log(`${basicCake.getDescription()}: R$${basicCake.getCost()}`);
console.log(`${chocolateCake.getDescription()}: R$${chocolateCake.getCost()}`);
console.log(`${fruitCake.getDescription()}: R$${fruitCake.getCost()}`);
console.log(
  `${chocolateFruitCake.getDescription()}: R$${chocolateFruitCake.getCost()}`
);
console.log(`${nutsCake.getDescription()}: R$${nutsCake.getCost()}`);
console.log(
  `${creamChocolateCake.getDescription()}: R$${creamChocolateCake.getCost()}`
);
console.log(`${deluxeCake.getDescription()}: R$${deluxeCake.getCost()}`);
console.log(`${birthdayCake.getDescription()}: R$${birthdayCake.getCost()}`);

console.log("\n=== Solução de Personalização Dinâmica ===");
let myCake = new BasicCake();
console.log(`Começando com: ${myCake.getDescription()}: R$${myCake.getCost()}`);

myCake = new ChocolateDecorator(myCake);
console.log(
  `Adicionando chocolate: ${myCake.getDescription()}: R$${myCake.getCost()}`
);

myCake = new NutsDecorator(myCake);
console.log(
  `Adicionando nozes: ${myCake.getDescription()}: R$${myCake.getCost()}`
);

myCake = new BirthdayDecorator(myCake);
console.log(
  `Finalizando como bolo de aniversário: ${myCake.getDescription()}: R$${myCake.getCost()}`
);
