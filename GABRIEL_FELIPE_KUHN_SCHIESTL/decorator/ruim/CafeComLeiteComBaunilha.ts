import { CafeComLeite } from "./CafeComLeite";

export class CafeComLeiteComBaunilha extends CafeComLeite {
  get custo() {
    return super.custo + 2.0;
  }
  get descricao() {
    return super.descricao + ", baunilha";
  }
}
