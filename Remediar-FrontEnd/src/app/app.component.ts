import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { RelatoriosDeDoadorComponent } from './relatorios-de-doador/relatorios-de-doador.component';

@Component({
  selector: 'app-relatorios-de-doador',
  standalone: true,
  imports: [RouterLink, RouterOutlet, RelatoriosDeDoadorComponent],
  templateUrl: './relatorios-de-doador.component.html',
  styleUrl: './relatorios-de-doador.component.css'
})
export class AppComponent {
  title = 'Relatorios de doadores';
}
