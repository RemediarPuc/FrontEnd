import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { VoltarComponent } from "../voltar/voltar.component";

@Component({
    selector: 'app-relatorios-anual-mensal',
    standalone: true,
    templateUrl: './relatorios-anual-mensal.component.html',
    styleUrl: './relatorios-anual-mensal.component.css',
    imports: [HeaderComponent, VoltarComponent]
})
export class RelatoriosAnualMensalComponent {

  constructor(private router: Router) {}

    goBack(): void {
      this.router.navigate(['/']); // Navega para a rota anterior
    }

}
