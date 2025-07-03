// Exemplo sem uso do padrão Decorator: cada combinação precisa de uma classe ou lógica específica

import { Cafe } from "./Cafe";
import { CafeComLeite } from "./CafeComLeite";
import { CafeComLeiteComChocolate } from "./CafeComLeiteComChocolate";
import { CafeComLeiteComChocolateComCanela } from "./CafeComLeiteComChocolateComCanela";
import { Expresso } from "./Expresso";
import { CafeComChantilly } from "./CafeComChantilly";
import { CafeComCaramelo } from "./CafeComCaramelo";
import { CafeComBaunilha } from "./CafeComBaunilha";
import { CafeComLeiteComChantilly } from "./CafeComLeiteComChantilly";
import { CafeComLeiteComCaramelo } from "./CafeComLeiteComCaramelo";
import { CafeComLeiteComBaunilha } from "./CafeComLeiteComBaunilha";
import { CafeComLeiteComChocolateComCanelaComChantilly } from "./CafeComLeiteComChocolateComCanelaComChantilly";

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

  // Café com chantilly
  const cafeComChantilly = new CafeComChantilly();
  console.log(`Custo café com chantilly: ${cafeComChantilly.custo}`);
  console.log(`Descrição: ${cafeComChantilly.descricao}`);

  // Café com leite e chantilly
  const cafeComLeiteComChantilly = new CafeComLeiteComChantilly();
  console.log(
    `Custo café com leite e chantilly: ${cafeComLeiteComChantilly.custo}`
  );
  console.log(`Descrição: ${cafeComLeiteComChantilly.descricao}`);

  // Café com leite, chocolate, canela e chantilly
  const cafeCompleto = new CafeComLeiteComChocolateComCanelaComChantilly();
  console.log(`Custo café completo: ${cafeCompleto.custo}`);
  console.log(`Descrição: ${cafeCompleto.descricao}`);

  // Café com caramelo e baunilha (seria necessário criar mais uma classe específica para essa combinação)
  const cafeComCaramelo = new CafeComCaramelo();
  const cafeComBaunilha = new CafeComBaunilha();
  console.log(`Custo café com caramelo: ${cafeComCaramelo.custo}`);
  console.log(`Descrição: ${cafeComCaramelo.descricao}`);
  console.log(`Custo café com baunilha: ${cafeComBaunilha.custo}`);
  console.log(`Descrição: ${cafeComBaunilha.descricao}`);

  // Problema: para cada nova combinação, seria necessário criar uma nova classe ou lógica, tornando o código rígido e difícil de manter.
}

main();
