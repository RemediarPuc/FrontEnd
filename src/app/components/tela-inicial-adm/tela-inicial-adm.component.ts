import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-tela-inicial-adm',
    standalone: true,
    templateUrl: './tela-inicial-adm.component.html',
    styleUrl: './tela-inicial-adm.component.css',
    imports: [FooterComponent]
})
export class TelaInicialAdmComponent {

}
