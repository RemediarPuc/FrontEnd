import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TabelaEstoqueComponent } from './componentes/tabela-estoque/tabela-estoque.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, TabelaEstoqueComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Remediar-FrontEnd';
}
