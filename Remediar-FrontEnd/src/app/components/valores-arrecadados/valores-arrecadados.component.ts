import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { VoltarComponent } from "../voltar/voltar.component";

@Component({
    selector: 'app-valores-arrecadados',
    standalone: true,
    templateUrl: './valores-arrecadados.component.html',
    styleUrl: './valores-arrecadados.component.css',
    imports: [HeaderComponent, VoltarComponent]
})
export class ValoresArrecadadosComponent {

}
