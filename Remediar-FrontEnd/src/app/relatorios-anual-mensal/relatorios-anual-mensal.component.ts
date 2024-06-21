import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-relatorios-anual-mensal',
  standalone: true,
  imports: [],
  templateUrl: './relatorios-anual-mensal.component.html',
  styleUrl: './relatorios-anual-mensal.component.css'
})
export class RelatoriosAnualMensalComponent {

  constructor(private router: Router) {}

    goBack(): void {
      this.router.navigate(['/']); // Navega para a rota anterior
    }

    ngOnInit(): void {

    }
}
