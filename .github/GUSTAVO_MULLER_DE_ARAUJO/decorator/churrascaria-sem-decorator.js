// Sem Decorator, o objeto é modificado diretamente por meio de métodos, sem decorators.

function PicanhaBase() {
  return {
    descricao: "Picanha",
    preco: 40,
    adicionarArroz: function() {
      this.descricao += " com arroz";
      this.preco += 5;
    },
    adicionarFarofa: function() {
      this.descricao += " com farofa";
      this.preco += 4;
    },
    adicionarVinagrete: function() {
      this.descricao += " com vinagrete";
      this.preco += 3;
    },
    adicionarBatataFrita: function() {
      this.descricao += " com batata frita";
      this.preco += 8;
    },
    adicionarOvo: function() {
      this.descricao += " com ovo";
      this.preco += 2.5;
    }
  };
}

let meuPrato = PicanhaBase();
console.log(`${meuPrato.descricao}: R$${meuPrato.preco.toFixed(2)}`);

meuPrato.adicionarArroz();
console.log(`${meuPrato.descricao}: R$${meuPrato.preco.toFixed(2)}`);

meuPrato.adicionarFarofa();
console.log(`${meuPrato.descricao}: R$${meuPrato.preco.toFixed(2)}`);

meuPrato.adicionarVinagrete();
console.log(`${meuPrato.descricao}: R$${meuPrato.preco.toFixed(2)}`);

meuPrato.adicionarBatataFrita();
console.log(`${meuPrato.descricao}: R$${meuPrato.preco.toFixed(2)}`);

meuPrato.adicionarOvo();
console.log(`${meuPrato.descricao}: R$${meuPrato.preco.toFixed(2)}`);