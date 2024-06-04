import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RemediosDescartadosComponent } from './componentes/remedios-descartados/remedios-descartados.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RemediosDescartadosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Remediar-FrontEnd';
}
