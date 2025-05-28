import { Cafe } from "./Cafe";

export class CafeComBaunilha extends Cafe {
  get custo() {
    return super.custo + 2.0;
  }
  get descricao() {
    return super.descricao + ", baunilha";
  }
}
