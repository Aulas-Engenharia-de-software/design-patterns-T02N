import { IBebida } from "./IBebida";

export class Baunilha implements IBebida {
  constructor(private bebida: IBebida) {}
  get custo() {
    return this.bebida.custo + 2.0;
  }
  get descricao() {
    return this.bebida.descricao + ", baunilha";
  }
}
