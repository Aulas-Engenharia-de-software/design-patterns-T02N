// Exemplo de uso do padrão Decorator para bebidas
import { Cafe } from "./Cafe";
import { Chocolate } from "./Chocolate";
import { Expresso } from "./Expresso";
import { Leite } from "./Leite";

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
  // Mostra a descrição final da bebida decorada
  console.log(`Descrição: ${cafeComLeiteComChocolate.descricao}`);

  // Outro exemplo: café expresso
  const cafe2 = new Cafe();
  // Adiciona expresso ao café usando o decorator Expresso
  const expresso = new Expresso(cafe2);
  console.log(`Custo expresso: ${expresso.custo}`);
  console.log(`Descrição: ${expresso.descricao}`);
}

main();
