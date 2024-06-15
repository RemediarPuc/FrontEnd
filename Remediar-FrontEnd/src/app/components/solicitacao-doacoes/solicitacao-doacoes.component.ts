import { Component } from '@angular/core';
import { Doacao } from '../../models/Doacao';
import { DoacaoMedicamentoService } from '../../services/doacao-medicamento.service';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-solicitacao-doacoes',
  standalone: true,
  imports: [DatePipe,CommonModule,FormsModule],
  templateUrl: './solicitacao-doacoes.component.html',
  styleUrl: './solicitacao-doacoes.component.css'
})
export class SolicitacaoDoacoesComponent {

  public doacoes : Doacao[] = [];
  public doacoesFiltradas : Doacao[] = [];
  public doacaoSelecionada !: Doacao | null;
  public filtroStatus : string = 'Todos';

  constructor(private doacaoService : DoacaoMedicamentoService){

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
}

