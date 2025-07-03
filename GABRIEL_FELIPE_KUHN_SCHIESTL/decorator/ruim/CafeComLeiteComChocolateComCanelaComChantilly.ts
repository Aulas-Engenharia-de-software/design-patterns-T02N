import { CafeComLeiteComChocolateComCanela } from "./CafeComLeiteComChocolateComCanela";

export class CafeComLeiteComChocolateComCanelaComChantilly extends CafeComLeiteComChocolateComCanela {
  get custo() {
    return super.custo + 2.5;
  }
  get descricao() {
    return super.descricao + ", chantilly";
  }
}
