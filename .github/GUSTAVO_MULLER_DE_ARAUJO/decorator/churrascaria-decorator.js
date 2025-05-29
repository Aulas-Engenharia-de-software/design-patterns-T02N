// Com Decorator, os decoradores não modificam o objeto original, mas retornam um novo objeto com as modificações

function PicanhaBase() {
  return {
    descricao: "Picanha",
    preco: 40
  };
}

function comArroz(prato) {
  return {
    descricao: prato.descricao + " com arroz",
    preco: prato.preco + 5
  };
}

function comFarofa(prato) {
  return {
    descricao: prato.descricao + " com farofa",
    preco: prato.preco + 4
  };
}

function comVinagrete(prato) {
  return {
    descricao: prato.descricao + " com vinagrete",
    preco: prato.preco + 3
  };
}

function comBatataFrita(prato) {
  return {
    descricao: prato.descricao + " com batata frita",
    preco: prato.preco + 8
  };
}

function comOvo(prato) {
  return {
    descricao: prato.descricao + " com ovo",
    preco: prato.preco + 2.5
  };
}

let meuPrato = PicanhaBase();
console.log(`${meuPrato.descricao}: R$${meuPrato.preco.toFixed(2)}`);

meuPrato = comArroz(meuPrato);
console.log(`${meuPrato.descricao}: R$${meuPrato.preco.toFixed(2)}`);

meuPrato = comFarofa(meuPrato);
console.log(`${meuPrato.descricao}: R$${meuPrato.preco.toFixed(2)}`);

meuPrato = comVinagrete(meuPrato);
console.log(`${meuPrato.descricao}: R$${meuPrato.preco.toFixed(2)}`);

meuPrato = comBatataFrita(meuPrato);
console.log(`${meuPrato.descricao}: R$${meuPrato.preco.toFixed(2)}`);

meuPrato = comOvo(meuPrato);
console.log(`${meuPrato.descricao}: R$${meuPrato.preco.toFixed(2)}`);