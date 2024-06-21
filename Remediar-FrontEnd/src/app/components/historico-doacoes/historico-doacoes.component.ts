import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HistoricoDoacoesService } from '../../services/historico-doacoes.service';

@Component({
  selector: 'app-historico-doacoes',
  standalone: true,
  imports: [CommonModule, FormsModule, DatePipe],
  templateUrl: './historico-doacoes.component.html',
  styleUrls: ['./historico-doacoes.component.css'],
  providers: [HistoricoDoacoesService]
})
export class HistoricoDoacoesComponent implements OnInit {
  public historicoDoacoes: any[] = [];
  public usuarioId: number = 0;

  constructor(
    private historicoDoacoesService: HistoricoDoacoesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.usuarioId = +params['usuarioId'];
      this.historicoDoacoesService.getHistoricoDoacoesPorUsuario(this.usuarioId)
        .subscribe(
          (data) => {
            this.historicoDoacoes = data;
          },
          (error) => {
            console.error("Erro ao obter histórico de doações:", error);
          }
        );
    });
  }
}
