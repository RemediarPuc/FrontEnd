import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { TabelaEstoqueComponent } from './componentes/tabela-estoque/tabela-estoque.component';

export const routes: Routes = [
    {
        path: 'estoque',
        component: TabelaEstoqueComponent
    }
];