import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { RelatoriosAnualMensalComponent } from './relatorios-anual-mensal/relatorios-anual-mensal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet, RelatoriosAnualMensalComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Relatorios de doadores';
}
