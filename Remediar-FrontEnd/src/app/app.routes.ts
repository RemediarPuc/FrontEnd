import { Routes } from '@angular/router';
import { TabelaEstoqueComponent } from './componentes/tabela-estoque/tabela-estoque.component';
import { ModalConfirmacaoComponent } from './componentes/modal-confirmacao/modal-confirmacao.component';

export const routes: Routes = [
    {
        path: 'estoque',
        component: TabelaEstoqueComponent
    }
];
