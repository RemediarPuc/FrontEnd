import { Component } from '@angular/core';
import { Doacao } from '../../models/Doacao';
import { DoacaoMedicamentoService } from '../../services/doacao-medicamento.service';
import { CommonModule, DatePipe, Location} from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from '../header/header.component';
import { VoltarComponent } from "../voltar/voltar.component";

@Component({
    selector: 'app-solicitacao-doacoes',
    standalone: true,
    templateUrl: './solicitacao-doacoes.component.html',
    styleUrl: './solicitacao-doacoes.component.css',
    imports: [DatePipe, CommonModule, FormsModule, HeaderComponent, VoltarComponent]
})
export class SolicitacaoDoacoesComponent {

  public doacoes : Doacao[] = [];
  public doacoesFiltradas : Doacao[] = [];
  public doacaoSelecionada !: Doacao | null;
  public filtroStatus : string = 'Todos';

  constructor(private doacaoService : DoacaoMedicamentoService, private location: Location){

  }
  
  ngOnInit(){
    this.doacaoService.getAllDoacoes()
      .subscribe(
        (retorno) => {
          this.doacoes = retorno.data;
          this.doacoesFiltradas = retorno.data;
          this.filtrarDoacoes();

        },
        (error) => {
          
          console.log("Erro: ", error);
        }
      );
  }

  atualizaStatus(event : Event,id: number){
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;
    selectElement.selectedIndex = 0;

    if(Number(selectedValue) >= 0)
    this.doacaoService.putDoacoes(id,Number(selectedValue)).subscribe(() => this.ngOnInit());
 
  }
  filtrarDoacoes(){
     if(this.doacoes != null){

      if(this.filtroStatus == 'Todos'){
        this.doacoesFiltradas = this.doacoes;
      }
      else{
        this.doacoesFiltradas = this.doacoes.filter(x => x.statusDoacao == this.filtroStatus);
      }
  
     }
  }

  goBack(): void {
    this.location.back();
  }
}

