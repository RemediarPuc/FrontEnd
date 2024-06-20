import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { RemediosDescartadosService } from '../../services/remedios-descartados.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-remedios-descartados',
    standalone: true,
    templateUrl: './remedios-descartados.component.html',
    styleUrl: './remedios-descartados.component.css',
    imports: [HeaderComponent, FooterComponent, CommonModule]
})
export class RemediosDescartadosComponent implements OnInit {
    medicamentosDescartados: any[] = []; // Array para armazenar os medicamentos descartados

    constructor(private medicamentoDescartadoService: RemediosDescartadosService) { }

    ngOnInit(): void {
        this.carregarMedicamentosDescartados();
    }

    carregarMedicamentosDescartados(): void {
        this.medicamentoDescartadoService.getMedicamentosDescartados().subscribe(
          (data) => {
            this.medicamentosDescartados = data;
          },
          (error) => {
            console.error('Erro ao carregar medicamentos', error);
          }
        );
      }
}
