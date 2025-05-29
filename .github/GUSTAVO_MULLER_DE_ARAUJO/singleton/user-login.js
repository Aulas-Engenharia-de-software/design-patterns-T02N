// Sem Singleton, cada instância de CurrentUser é independente.
class CurrentUser {
  constructor(name) {
    this.name = name;
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

// Testando sem Singleton:

// Cria a primeira instância
const user1 = new CurrentUser("Maria");
console.log(user1.getName()); // Maria

// Cria uma nova instância independente
const user2 = new CurrentUser("João");
console.log(user2.getName()); // João

// As variáveis apontam para instâncias diferentes
console.log(user1 === user2); // false

// Alterando o nome usando uma das referências
user2.setName("Carlos");
console.log(user1.getName()); // Maria — não mudou
console.log(user2.getName()); // Carlos