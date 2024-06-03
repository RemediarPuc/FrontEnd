import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TabelaEstoqueComponent } from './componentes/tabela-estoque/tabela-estoque.component';
import { ModalConfirmacaoComponent } from './componentes/modal-confirmacao/modal-confirmacao.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, TabelaEstoqueComponent, ModalConfirmacaoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Remediar-FrontEnd';
}
