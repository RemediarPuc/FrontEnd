import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HistoricoDoacoesService } from '../../services/historico-doacoes.service';
import { LocalStorageService } from '../../services/local-storage-service.service';
import { VoltarComponent } from "../voltar/voltar.component";
import { HeaderComponent } from "../header/header.component"; // Importar o serviço de Local Storage

@Component({
    selector: 'app-historico-doacoes',
    standalone: true,
    templateUrl: './historico-doacoes.component.html',
    styleUrls: ['./historico-doacoes.component.css'],
    providers: [HistoricoDoacoesService],
    imports: [CommonModule, FormsModule, DatePipe, VoltarComponent, HeaderComponent]
})
export class HistoricoDoacoesComponent implements OnInit {
  public historicoDoacoes: any[] = [];
  public usuarioId: number = 0;

  constructor(
    private historicoDoacoesService: HistoricoDoacoesService,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    const usuario = this.localStorageService.getItem("Usuario");
    if (usuario !== null) {
      this.historicoDoacoesService.getHistoricoDoacoesPorUsuario(usuario.Id)
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
