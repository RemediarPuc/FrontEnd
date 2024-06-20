import { MedicamentoDescartado } from '../models/MedicamentoDescartado';

export class Medicamento {
    id: number = 0;
    nomeMedicamento: string = '';
    unidade: string = '';
    quantidade: number = 0;
    dtVencimento: Date = new Date();
    descricao: string = '';
    valor: number = 0;
    medicamentosDescartados: MedicamentoDescartado[] = [];

    constructor() { }
}

