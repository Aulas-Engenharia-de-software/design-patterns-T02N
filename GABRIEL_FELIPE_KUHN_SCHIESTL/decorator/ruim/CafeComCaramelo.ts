import { Cafe } from "./Cafe";

export class CafeComCaramelo extends Cafe {
  get custo() {
    return super.custo + 1.8;
  }
  get descricao() {
    return super.descricao + ", caramelo";
  }
}
