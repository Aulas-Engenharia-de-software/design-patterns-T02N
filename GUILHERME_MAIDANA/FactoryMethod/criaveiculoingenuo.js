const readlineSync = require('readline-sync');

class Carro {
  descricao() {
    return 'Este é um carro';
  }
}

class Moto {
  descricao() {
    return 'Esta é uma moto';
  }
}

class Caminhao {
  descricao() {
    return 'Este é um caminhao';
  }
}

function criarVeiculo(tipo) {
  if (tipo === '1') return new Carro();
  else if (tipo === '2') return new Moto();
  else if (tipo === '3') return new Caminhao();
  else throw new Error('Tipo de veículo desconhecido');
}

const escolha = readlineSync.question('Escolha o tipo de veículo:\n1 - Carro\n2 - Moto\n3 - Caminhão\n');

const veiculo = criarVeiculo(escolha);
console.log(veiculo.descricao());
