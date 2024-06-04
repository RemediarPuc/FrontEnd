import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CadastroDeDoadorComponent} from './cadastro-de-doador/cadastro-de-doador.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CadastroDeDoadorComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Remediar-FrontEnd';
}
