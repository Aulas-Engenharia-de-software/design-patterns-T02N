// Com Singleton, garante que apenas uma instância de CurrentUser exista em toda a aplicação.

class CurrentUser {
  constructor(name) {
    // Se já existe uma instância, retorna ela
    if (CurrentUser.instance) {
      return CurrentUser.instance;
    }
    // Caso contrário, cria a instância e armazena na propriedade estática
    this.name = name;
    CurrentUser.instance = this;
  }

  // Método para obter o nome do usuário atual
  getName() {
    return this.name;
  }

  // Método para alterar o nome do usuário atual
  setName(newName) {
    this.name = newName;
  }
}

// Testando o Singleton:

// Cria a primeira instância
const user1 = new CurrentUser("Maria");
console.log(user1.getName()); // Maria

// Tenta criar uma nova instância, mas retorna a já existente
const user2 = new CurrentUser("João");
console.log(user2.getName()); // Maria — "João" foi ignorado!

// Ambas as variáveis apontam para a mesma instância
console.log(user1 === user2); // true

// Alterando o nome usando uma das referências
user2.setName("Carlos");
console.log(user1.getName()); // Carlos — mudou em ambos, pois é a mesma instância
