import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SolicitarMedicamentoComponent } from './components/solicitar-medicamento/solicitar-medicamento.component';
import { EmissaoRelatoriosComponent } from './components/emissao-relatorios/emissao-relatorios.component';
import { DoacaoDeMedicamentoComponent } from './components/doacao-de-medicamento/doacao-de-medicamento.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'solicitar',
        component: SolicitarMedicamentoComponent
    },
    {
        path: 'emitirRelatorio',
        component: EmissaoRelatoriosComponent

    },
    {
        path: 'DoacaoMedicamento',
        component: DoacaoDeMedicamentoComponent
    }
]
