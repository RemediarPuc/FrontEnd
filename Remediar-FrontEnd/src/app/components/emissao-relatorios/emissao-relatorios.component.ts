import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-emissao-relatorios',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './emissao-relatorios.component.html',
  styleUrl: './emissao-relatorios.component.css'
})
export class EmissaoRelatoriosComponent {

  constructor(private router: Router) {}

    goBack(): void {
      this.router.navigate(['/']); // Navega para a rota anterior
    }
}
