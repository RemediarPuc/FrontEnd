import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { HistoricoDoadorComponent } from './historico-doador/historico-doador.component';

@Component({
  selector: 'app-historico-doador',
  standalone: true,
  imports: [RouterLink, RouterOutlet, HistoricoDoadorComponent],
  templateUrl: '/historico-doador.component.html',
  styleUrl: './historico-doador.component.css'
})
export class AppComponent {
  title = 'Histórico de doadores';
}
