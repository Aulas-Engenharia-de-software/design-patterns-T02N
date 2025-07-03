class ConfiguracoesApp {
  constructor(idioma, tema) {
    this.idioma = idioma;
    this.tema = tema;
  }

  exibir() {
    console.log(`Idioma: ${this.idioma}, Tema: ${this.tema}`);
  }
}

const modulo1 = new ConfiguracoesApp("pt-BR", "claro");
const modulo2 = new ConfiguracoesApp("en-US", "escuro");

modulo1.exibir();
modulo2.exibir();
console.log("São a mesma instância?", modulo1 === modulo2);
