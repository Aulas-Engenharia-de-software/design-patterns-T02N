class CoffeeMachine {
  constructor() {
    this.waterLevel = 100;
    this.coffeeBeansLevel = 100;
    this.milkLevel = 100;
    this.coffeeMade = 0;
    console.log("Uma nova máquina de café foi criada!");
  }

  static getInstance() {
    if (!CoffeeMachine.instance) {
      CoffeeMachine.instance = new CoffeeMachine();
    }
    return CoffeeMachine.instance;
  }

  makeCoffee() {
    if (this.waterLevel >= 20) {
      this.waterLevel -= 20;
      this.coffeeMade++;
      return `Café feito! Nível de água restante: ${this.waterLevel}`;
    }
    return "Água insuficiente!";
  }

  makeLatte() {
    if (this.waterLevel >= 15 && this.milkLevel >= 10) {
      this.waterLevel -= 15;
      this.milkLevel -= 10;
      this.coffeeMade++;
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

  getStats() {
    return `Estatísticas da máquina - Cafés feitos: ${this.coffeeMade}, Água: ${this.waterLevel}%, Leite: ${this.milkLevel}%`;
  }
}

CoffeeMachine.instance = null;

console.log("\n=== Solução com o Padrão Singleton ===");
console.log("Obtendo instâncias da máquina de café...");
const machine1 = CoffeeMachine.getInstance();
const machine2 = CoffeeMachine.getInstance();

console.log("\n=== Operações do Usuário 1 ===");
console.log(machine1.makeCoffee());
console.log(machine1.makeLatte());

console.log("\n=== Operações do Usuário 2 (mesma instância) ===");
console.log(machine2.makeCoffee());
console.log("Solução: O Usuário 2 vê as alterações feitas pelo Usuário 1!");

console.log("\n=== Reabastecimento pelo Usuário 1 ===");
machine1.refillWater();
machine1.refillMilk();

console.log("\n=== Operações do Usuário 2 após reabastecimento ===");
console.log(machine2.makeLatte());
console.log(
  "Solução: O reabastecimento feito pelo Usuário 1 afetou corretamente a máquina do Usuário 2!"
);

console.log("\n=== Verificação de Identidade ===");
console.log(`As instâncias são iguais? ${machine1 === machine2}`);
console.log(
  "Solução: Confirmado que há apenas uma máquina de café compartilhada!"
);

console.log("\n=== Acesso por um novo usuário ===");
const machine3 = CoffeeMachine.getInstance();
console.log(machine3.getStats());
console.log(`Nova instância é igual às anteriores? ${machine3 === machine1}`);
