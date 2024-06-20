import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { VoltarComponent } from "../voltar/voltar.component";

@Component({
    selector: 'app-relatorio-estoque-total',
    standalone: true,
    templateUrl: './relatorio-estoque-total.component.html',
    styleUrl: './relatorio-estoque-total.component.css',
    imports: [HeaderComponent, FooterComponent, VoltarComponent]
})
export class RelatorioEstoqueTotalComponent {
    
}
