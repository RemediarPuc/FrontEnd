import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import{ FormCadastroComponent } from './componentes/form-cadastro/form-cadastro.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet, FormCadastroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Remediar-FrontEnd';
}
