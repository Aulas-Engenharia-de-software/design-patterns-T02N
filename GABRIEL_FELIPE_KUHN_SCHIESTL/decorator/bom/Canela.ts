import { IBebida } from "./IBebida";

export class Canela implements IBebida {
  custo: number;
  descricao: string;

  constructor(bebida: IBebida) {
    this.custo = bebida.custo + 1;
    this.descricao = bebida.descricao + " Canela";
  }
}
