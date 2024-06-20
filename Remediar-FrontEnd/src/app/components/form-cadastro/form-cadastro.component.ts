import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { VoltarComponent } from "../voltar/voltar.component";

@Component({
    selector: 'app-form-cadastro',
    standalone: true,
    templateUrl: './form-cadastro.component.html',
    styleUrl: './form-cadastro.component.css',
    imports: [HeaderComponent, VoltarComponent]
})
export class FormCadastroComponent {

}
