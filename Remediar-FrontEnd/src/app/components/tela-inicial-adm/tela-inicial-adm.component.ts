import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { HeaderTelaInicialUsersComponent } from '../header-tela-inicial-users/header-tela-inicial-users.component';


@Component({
    selector: 'app-tela-inicial-adm',
    standalone: true,
    templateUrl: './tela-inicial-adm.component.html',
    styleUrl: './tela-inicial-adm.component.css',
    imports: [FooterComponent, HeaderTelaInicialUsersComponent]
})
export class TelaInicialAdmComponent {

}
