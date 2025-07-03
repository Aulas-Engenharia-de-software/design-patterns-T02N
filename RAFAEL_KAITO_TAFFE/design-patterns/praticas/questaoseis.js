class UsuarioLogado {
  constructor(nome) {
    if (UsuarioLogado.instance) {
      return UsuarioLogado.instance;
    }

    this.nome = nome;
    UsuarioLogado.instance = this;
  }

  getNome() {
    return this.nome;
  }
}

const user1 = new UsuarioLogado("Heitor");
const user2 = new UsuarioLogado("Kaito");

console.log(user1.getNome());
console.log(user2.getNome());
