import { CafeComLeite } from "./CafeComLeite";

export class CafeComLeiteComChantilly extends CafeComLeite {
  get custo() {
    return super.custo + 2.5;
  }
  get descricao() {
    return super.descricao + ", chantilly";
  }
}
