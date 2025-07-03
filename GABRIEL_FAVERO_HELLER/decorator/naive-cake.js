class BasicCake {
  getDescription() {
    return "Bolo simples";
  }

  getCost() {
    return 20;
  }
}

class ChocolateCake {
  getDescription() {
    return "Bolo simples com chocolate";
  }

  getCost() {
    return 20 + 10;
  }
}

class FruitCake {
  getDescription() {
    return "Bolo simples com frutas";
  }

  getCost() {
    return 20 + 15;
  }
}

class ChocolateFruitCake {
  getDescription() {
    return "Bolo simples com chocolate e frutas";
  }

  getCost() {
    return 20 + 10 + 15;
  }
}

class NutsCake {
  getDescription() {
    return "Bolo simples com nozes";
  }

  getCost() {
    return 20 + 12;
  }
}

class ChocolateCreamCake {
  getDescription() {
    return "Bolo simples com chocolate e chantilly";
  }

  getCost() {
    return 20 + 10 + 8;
  }
}

class ChocolateFruitNutsCake {
  getDescription() {
    return "Bolo simples com chocolate, frutas e nozes";
  }

  getCost() {
    return 20 + 10 + 15 + 12;
  }
}

class ChocolateCreamBirthdayCake {
  getDescription() {
    return "Bolo simples com chocolate e chantilly de aniversário";
  }

  getCost() {
    return 20 + 10 + 8 + 18;
  }
}

class ChocolateNutsCake {
  getDescription() {
    return "Bolo simples com chocolate e nozes";
  }

  getCost() {
    return 20 + 10 + 12;
  }
}

class ChocolateNutsCreamBirthdayCake {
  getDescription() {
    return "Bolo simples com chocolate, nozes e chantilly de aniversário";
  }

  getCost() {
    return 20 + 10 + 12 + 8 + 18;
  }
}

const basicCake = new BasicCake();
const chocolateCake = new ChocolateCake();
const fruitCake = new FruitCake();
const chocolateFruitCake = new ChocolateFruitCake();
const nutsCake = new NutsCake();
const chocolateCreamCake = new ChocolateCreamCake();
const chocolateFruitNutsCake = new ChocolateFruitNutsCake();
const chocolateCreamBirthdayCake = new ChocolateCreamBirthdayCake();
const chocolateNutsCake = new ChocolateNutsCake();
const chocolateNutsCreamBirthdayCake = new ChocolateNutsCreamBirthdayCake();

console.log("\n=== Exemplos Simples ===");
console.log(`${basicCake.getDescription()}: R$${basicCake.getCost()}`);
console.log(`${chocolateCake.getDescription()}: R$${chocolateCake.getCost()}`);
console.log(`${fruitCake.getDescription()}: R$${fruitCake.getCost()}`);
console.log(
  `${chocolateFruitCake.getDescription()}: R$${chocolateFruitCake.getCost()}`
);
console.log(`${nutsCake.getDescription()}: R$${nutsCake.getCost()}`);
console.log(
  `${chocolateCreamCake.getDescription()}: R$${chocolateCreamCake.getCost()}`
);
console.log(
  `${chocolateFruitNutsCake.getDescription()}: R$${chocolateFruitNutsCake.getCost()}`
);
console.log(
  `${chocolateCreamBirthdayCake.getDescription()}: R$${chocolateCreamBirthdayCake.getCost()}`
);

console.log("\n=== Problema da Explosão de Classes ===");
console.log(
  `${chocolateNutsCake.getDescription()}: R$${chocolateNutsCake.getCost()}`
);
console.log(
  `${chocolateNutsCreamBirthdayCake.getDescription()}: R$${chocolateNutsCreamBirthdayCake.getCost()}`
);
console.log(
  "Para criar um bolo personalizado, precisamos de uma classe específica para cada combinação!"
);
console.log(
  "Com apenas 5 ingredientes, temos potencialmente 2^5 = 32 classes diferentes!"
);
