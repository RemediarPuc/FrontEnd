import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../header/header.component";

@Component({
    selector: 'app-emissao-relatorios',
    standalone: true,
    templateUrl: './emissao-relatorios.component.html',
    styleUrl: './emissao-relatorios.component.css',
    imports: [RouterOutlet, RouterLink, HeaderComponent]
})
export class EmissaoRelatoriosComponent {

  constructor(private router: Router) {}

    goBack(): void {
      this.router.navigate(['/']); // Navega para a rota anterior
    }
}
