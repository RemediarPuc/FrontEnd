import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";

@Component({
    selector: 'app-tabela-estoque',
    standalone: true,
    templateUrl: './tabela-estoque.component.html',
    styleUrl: './tabela-estoque.component.css',
    imports: [HeaderComponent]
})
export class TabelaEstoqueComponent {

}
