import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-tela-inicial',
    standalone: true,
    templateUrl: './tela-inicial.component.html',
    styleUrl: './tela-inicial.component.css',
    imports: [FooterComponent]
})
export class TelaInicialComponent {

}
