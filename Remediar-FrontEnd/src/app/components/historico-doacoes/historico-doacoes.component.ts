import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HistoricoDoacoesService } from '../../services/historico-doacoes.service';
import { LocalStorageService } from '../../services/local-storage-service.service'; // Importar o serviço de Local Storage

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
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.usuarioId = this.localStorageService.getUserId();
    if (this.usuarioId !== null) {
      this.historicoDoacoesService.getHistoricoDoacoesPorUsuario(this.usuarioId)
        .subscribe(
          (data) => {
            this.historicoDoacoes = data;
          },
          (error) => {
            console.error("não foi possível obter histórico de doações:", error);
          }
        );
    } else {
      console.error('id não encotrado no localstorage');
    }
  }
}
