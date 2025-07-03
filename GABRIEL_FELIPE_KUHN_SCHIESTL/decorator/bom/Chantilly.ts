import { IBebida } from "./IBebida";

export class Chantilly implements IBebida {
  constructor(private bebida: IBebida) {}
  get custo() {
    return this.bebida.custo + 2.5;
  }
  get descricao() {
    return this.bebida.descricao + ", chantilly";
  }
}
