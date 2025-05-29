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

class FabricaVeiculo {
  criarVeiculo() {
    throw new Error('Este método deve ser sobrescrito');
  }
}

class FabricaCarro extends FabricaVeiculo {
  criarVeiculo() {
    return new Carro();
  }
}

class FabricaMoto extends FabricaVeiculo {
  criarVeiculo() {
    return new Moto();
  }
}

class FabricaCaminhao extends FabricaVeiculo {
  criarVeiculo() {
    return new Caminhao();
  }
}

function obterFabrica(tipo) {
  if (tipo === '1') return new FabricaCarro();
  else if (tipo === '2') return new FabricaMoto();
  else if (tipo === '3') return new FabricaCaminhao();
  else throw new Error('Tipo de veículo desconhecido');
}

const escolha = readlineSync.question('Escolha o tipo de veículo:\n1 - Carro\n2 - Moto\n3 - Caminhão\n');

const fabrica = obterFabrica(escolha);
const veiculo = fabrica.criarVeiculo();

console.log(veiculo.descricao());
