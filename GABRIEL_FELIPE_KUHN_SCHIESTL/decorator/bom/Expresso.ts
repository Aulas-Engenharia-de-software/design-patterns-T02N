import { IBebida } from "./IBebida";

export class Expresso implements IBebida {
  custo: number;
  descricao: string;

  constructor(bebida: IBebida) {
    this.custo = bebida.custo + 2;
    this.descricao = bebida.descricao + " Expresso";
  }
}
