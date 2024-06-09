import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-relatorio-estoque-total',
    standalone: true,
    templateUrl: './relatorio-estoque-total.component.html',
    styleUrl: './relatorio-estoque-total.component.css',
    imports: [HeaderComponent, FooterComponent]
})
export class RelatorioEstoqueTotalComponent {

}
