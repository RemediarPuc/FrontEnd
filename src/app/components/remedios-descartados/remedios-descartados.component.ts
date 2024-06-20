import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-remedios-descartados',
    standalone: true,
    templateUrl: './remedios-descartados.component.html',
    styleUrl: './remedios-descartados.component.css',
    imports: [HeaderComponent, FooterComponent]
})
export class RemediosDescartadosComponent {

}