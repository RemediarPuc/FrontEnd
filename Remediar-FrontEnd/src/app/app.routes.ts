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
import { RelatorioEstoqueTotalComponent } from './components/relatorio-estoque-total/relatorio-estoque-total.component';
import { CadastroDeDoadorComponent } from './components/cadastro-de-doador/cadastro-de-doador.component';
import { SolicitacaoDoacoesComponent } from './components/solicitacao-doacoes/solicitacao-doacoes.component';
import { RemediosDescartadosComponent } from './components/remedios-descartados/remedios-descartados.component';
import { TabelaEstoqueComponent } from './components/tabela-estoque/tabela-estoque.component';
import { FormCadastroComponent } from './components/form-cadastro/form-cadastro.component';

export const routes: Routes = [
    {
        path: '',
        component: PedidosComponent
    },
    {
        path: 'Login',
        component: LoginComponent
    },
    {
        path: 'HomeDoador',
        component: TelaInicialDoadorComponent
    },
    {
        path: 'CadastroDeDoador',
        component: CadastroDeDoadorComponent

    },
    {
        path: 'SolicitarMedicamento',
        component: SolicitarMedicamentoComponent
    },
    {
        path: 'EmitirRelatorio',
        component: EmissaoRelatoriosComponent

    },
    {
        path: 'DoacaoMedicamento',
        component: DoacaoDeMedicamentoComponent
    },
    {
        path: 'HomeAdmin',
        component: TelaInicialAdmComponent
    },
    {
        path:'HistoricoDoadores',
        component: HistoricoDoadoresComponent
    },
    {
        path:'PedidosRecebidos',
        component: PedidosComponent
    },
    {
        path: 'EstoqueTotal',
        component: RelatorioEstoqueTotalComponent
    },
    {
        path: 'SolicitacaoDoacoes',
        component: SolicitacaoDoacoesComponent
    },
    {
        path: 'RelatorioRemedioDescartados',
        component: RemediosDescartadosComponent
    },
    {
        path: 'ControleEstoque',
        component: TabelaEstoqueComponent
    },
    {
        path: 'CadastroMedicamentos',
        component: FormCadastroComponent
    }
     
];

