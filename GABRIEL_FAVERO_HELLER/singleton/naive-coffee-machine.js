class CoffeeMachine {
  constructor() {
    this.waterLevel = 100;
    this.coffeeBeansLevel = 100;
    this.milkLevel = 100;
    console.log("Uma nova máquina de café foi criada!");
  }

  makeCoffee() {
    if (this.waterLevel >= 20) {
      this.waterLevel -= 20;
      return `Café feito! Nível de água restante: ${this.waterLevel}`;
    }
    return "Água insuficiente!";
  }

  makeLatte() {
    if (this.waterLevel >= 15 && this.milkLevel >= 10) {
      this.waterLevel -= 15;
      this.milkLevel -= 10;
      return `Latte feito! Água: ${this.waterLevel}, Leite: ${this.milkLevel}`;
    }
    return "Ingredientes insuficientes para fazer latte!";
  }

  refillWater() {
    this.waterLevel = 100;
    console.log("Água reabastecida!");
  }

  refillMilk() {
    this.milkLevel = 100;
    console.log("Leite reabastecido!");
  }
}

console.log("\n=== Problema da Abordagem Ingênua ===");
console.log("Criando duas instâncias da mesma máquina de café...");
const machine1 = new CoffeeMachine();
const machine2 = new CoffeeMachine();

console.log("\n=== Operações do Usuário 1 ===");
console.log(machine1.makeCoffee());
console.log(machine1.makeLatte());

console.log("\n=== Operações do Usuário 2 (em outra instância) ===");
console.log(machine2.makeCoffee());
console.log(
  "Problema: O Usuário 2 não vê as alterações feitas pelo Usuário 1!"
);

console.log("\n=== Reabastecimento pelo Usuário 1 ===");
machine1.refillWater();
machine1.refillMilk();

console.log("\n=== Operações do Usuário 2 após reabastecimento ===");
console.log(machine2.makeLatte());
console.log(
  "Problema: O reabastecimento feito pelo Usuário 1 não afetou a máquina do Usuário 2!"
);

console.log("\n=== Verificação de Identidade ===");
console.log(`As instâncias são iguais? ${machine1 === machine2}`);
console.log(
  "Problema: Na vida real, deveria haver apenas uma máquina de café compartilhada por todos!"
);
