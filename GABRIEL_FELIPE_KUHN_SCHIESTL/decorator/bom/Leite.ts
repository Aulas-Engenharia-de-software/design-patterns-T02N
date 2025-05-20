import { IBebida } from "./IBebida";

export class Leite implements IBebida {
  custo: number;
  descricao: string;

  constructor(bebida: IBebida) {
    this.custo = bebida.custo + 3;
    this.descricao = bebida.descricao + " Leite";
  }
}
