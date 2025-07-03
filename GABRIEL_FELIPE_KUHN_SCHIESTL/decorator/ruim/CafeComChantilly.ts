import { Cafe } from "./Cafe";

export class CafeComChantilly extends Cafe {
  get custo() {
    return super.custo + 2.5;
  }
  get descricao() {
    return super.descricao + ", chantilly";
  }
}
