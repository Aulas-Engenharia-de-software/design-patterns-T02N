class ConfiguracoesSingleton {
  constructor(idioma = "pt-BR", tema = "claro") {
    if (ConfiguracoesSingleton.instance) {
      return ConfiguracoesSingleton.instance;
    }
    this.idioma = idioma;
    this.tema = tema;
    ConfiguracoesSingleton.instance = this;
  }

  exibir() {
    console.log(`Idioma: ${this.idioma}, Tema: ${this.tema}`);
  }
}

const modulo1 = new ConfiguracoesSingleton("pt-BR", "claro");

const modulo2 = new ConfiguracoesSingleton("en-US", "escuro");

modulo1.exibir();
modulo2.exibir();

console.log("São a mesma instância?", modulo1 === modulo2);
