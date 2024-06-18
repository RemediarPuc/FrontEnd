import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-tabela-estoque',
    standalone: true,
    templateUrl: './tabela-estoque.component.html',
    styleUrl: './tabela-estoque.component.css',
    imports: [HeaderComponent, FooterComponent]
})
export class TabelaEstoqueComponent {

}
