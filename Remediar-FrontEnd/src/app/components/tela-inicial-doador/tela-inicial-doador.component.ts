import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-tela-inicial-doador',
    standalone: true,
    templateUrl: './tela-inicial-doador.component.html',
    styleUrl: './tela-inicial-doador.component.css',
    imports: [FooterComponent]
})
export class TelaInicialDoadorComponent {

}
