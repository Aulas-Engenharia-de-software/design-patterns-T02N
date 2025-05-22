// Exemplo sem uso do padrão Decorator: cada combinação precisa de uma classe ou lógica específica

import { Cafe } from "./Cafe";
import { CafeComLeite } from "./CafeComLeite";
import { CafeComLeiteComChocolate } from "./CafeComLeiteComChocolate";
import { CafeComLeiteComChocolateComCanela } from "./CafeComLeiteComChocolateComCanela";
import { Expresso } from "./Expresso";

function main() {
  // Café simples
  const cafe = new Cafe();
  console.log(`Custo apenas café: ${cafe.custo}`);

  // Café com leite
  const cafeComLeite = new CafeComLeite();
  console.log(`Custo café com leite: ${cafeComLeite.custo}`);

  // Café com leite e chocolate
  const cafeComLeiteComChocolate = new CafeComLeiteComChocolate();
  console.log(
    `Custo café com leite e chocolate: ${cafeComLeiteComChocolate.custo}`
  );

  const cafeComLeiteComChocolateComCanela =
    new CafeComLeiteComChocolateComCanela();
  console.log(
    `Custo café com leite, chocolate e canela: ${cafeComLeiteComChocolateComCanela.custo}`
  );

  console.log(`Descrição: ${cafeComLeiteComChocolateComCanela.descricao}`);

  // Expresso
  const expresso = new Expresso();
  console.log(`Custo expresso: ${expresso.custo}`);
  console.log(`Descrição: ${expresso.descricao}`);

  // Problema: para cada nova combinação, seria necessário criar uma nova classe ou lógica, tornando o código rígido e difícil de manter.
}

main();
