import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SolicitarMedicamentoComponent } from './components/solicitar-medicamento/solicitar-medicamento.component';
import { EmissaoRelatoriosComponent } from './components/emissao-relatorios/emissao-relatorios.component';
import { DoacaoDeMedicamentoComponent } from './components/doacao-de-medicamento/doacao-de-medicamento.component';
import { HistoricoDoadoresComponent } from './components/historico-doadores/historico-doadores.component';
import { TelaInicialComponent } from './components/tela-inicial/tela-inicial.component';
import { TelaInicialDoadorComponent } from './components/tela-inicial-doador/tela-inicial-doador.component';
import { TelaInicialAdmComponent } from './components/tela-inicial-adm/tela-inicial-adm.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';

import { RelatorioEstoqueTotalComponent } from './components/relatorio-estoque-total/relatorio-estoque-total.component'

export const routes: Routes = [
    {
        path: '',
        component: TelaInicialComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'HomeDoador',
        component: TelaInicialDoadorComponent
    },
    {
        path: 'HomeAdmin',
        component: TelaInicialAdmComponent
    },
    {
        path: 'SolicitarMedicamento',
        component: SolicitarMedicamentoComponent
    },
    {
        path: 'emitirRelatorio',
        component: EmissaoRelatoriosComponent

    },
    {
        path: 'DoacaoMedicamento',
        component: DoacaoDeMedicamentoComponent
    },
    {
        path:'HistoricoDoadores',
        component: HistoricoDoadoresComponent
    },
    {
        path:'PedidosRealizados',
        component: PedidosComponent
    }
    {
        path: 'EstoqueTotal',
        component: RelatorioEstoqueTotalComponent
    }
];
