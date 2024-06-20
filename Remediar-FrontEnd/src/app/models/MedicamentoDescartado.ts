import { Medicamento } from "./Medicamento";

export class MedicamentoDescartado {
    id: number = 0;
    dtDescarte: Date = new Date();
    dtVencimento: Date = new Date();
    qtdDescartada: number = 0;
    valorDescartado: number = 0;
    medicamentoId: number = 0;
    medicamento?: Medicamento;
  
    constructor() {}
  }
  