import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";

@Component({
    selector: 'app-pedidos',
    standalone: true,
    templateUrl: './pedidos.component.html',
    styleUrl: './pedidos.component.css',
    imports: [HeaderComponent]
})
export class PedidosComponent {

}
