import { IBebida } from "./IBebida";

export class Caramelo implements IBebida {
  constructor(private bebida: IBebida) {}
  get custo() {
    return this.bebida.custo + 1.8;
  }
  get descricao() {
    return this.bebida.descricao + ", caramelo";
  }
}
