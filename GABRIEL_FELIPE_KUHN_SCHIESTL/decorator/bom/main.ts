// Exemplo de uso do padrão Decorator para bebidas
import { Cafe } from "./Cafe";
import { Canela } from "./Canela";
import { Chocolate } from "./Chocolate";
import { Expresso } from "./Expresso";
import { Leite } from "./Leite";
import { Chantilly } from "./Chantilly";
import { Caramelo } from "./Caramelo";
import { Baunilha } from "./Baunilha";

function main() {
  // Cria um café simples
  const cafe = new Cafe();
  console.log(`Custo apenas café: ${cafe.custo}`);

  // Adiciona leite ao café usando o decorator Leite
  const cafeComLeite = new Leite(cafe);
  console.log(`Custo café com leite: ${cafeComLeite.custo}`);

  // Adiciona chocolate ao café com leite usando o decorator Chocolate
  const cafeComLeiteComChocolate = new Chocolate(cafeComLeite);
  console.log(
    `Custo café com leite e chocolate: ${cafeComLeiteComChocolate.custo}`
  );

  const cafeComLeiteComChocolateComCanela = new Canela(
    cafeComLeiteComChocolate
  );
  console.log(
    `Custo café com leite, chocolate e canela: ${cafeComLeiteComChocolateComCanela.custo}`
  );

  // Mostra a descrição final da bebida decorada
  console.log(`Descrição: ${cafeComLeiteComChocolateComCanela.descricao}`);

  // Outro exemplo: café expresso
  const cafe2 = new Cafe();
  // Adiciona expresso ao café usando o decorator Expresso
  const expresso = new Expresso(cafe2);
  console.log(`Custo expresso: ${expresso.custo}`);
  console.log(`Descrição: ${expresso.descricao}`);

  // Exemplo: café com chantilly
  const cafeComChantilly = new Chantilly(cafe);
  console.log(`Custo café com chantilly: ${cafeComChantilly.custo}`);
  console.log(`Descrição: ${cafeComChantilly.descricao}`);

  // Exemplo: café com leite, chocolate, canela e chantilly
  const cafeCompleto = new Chantilly(cafeComLeiteComChocolateComCanela);
  console.log(`Custo café completo: ${cafeCompleto.custo}`);
  console.log(`Descrição: ${cafeCompleto.descricao}`);

  // Exemplo: café com caramelo e baunilha
  const cafeComCarameloEBaunilha = new Baunilha(new Caramelo(cafe));
  console.log(
    `Custo café com caramelo e baunilha: ${cafeComCarameloEBaunilha.custo}`
  );
  console.log(`Descrição: ${cafeComCarameloEBaunilha.descricao}`);
}

main();
