import { Medicamento } from '../models/Medicamento';

export class MedicamentoDescartado {
    id?: number = 0;
    dtDescarte: Date = new Date();
    nomeMedicamento: string = '';
    dtVencimento: Date = new Date();
    qtdDescartada: number = 0;
    valorDescartado: number = 0;
    medicamento?: Medicamento;

    constructor() { }
}
