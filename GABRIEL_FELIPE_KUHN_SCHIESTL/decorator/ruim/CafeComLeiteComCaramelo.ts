import { CafeComLeite } from "./CafeComLeite";

export class CafeComLeiteComCaramelo extends CafeComLeite {
  get custo() {
    return super.custo + 1.8;
  }
  get descricao() {
    return super.descricao + ", caramelo";
  }
}
