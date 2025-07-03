import { IBebida } from "./IBebida";

export class Cafe implements IBebida {
  custo: number;
  descricao: string;

  constructor() {
    this.custo = 5;
    this.descricao = "Café";
  }
}
