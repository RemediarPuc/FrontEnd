import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Doacao } from '../../models/Doacao';
import { DoacaoMedicamentoService } from '../../services/doacao-medicamento.service';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-solicitacao-doacoes',
  standalone: true,
  imports: [DatePipe,CommonModule],
  templateUrl: './solicitacao-doacoes.component.html',
  styleUrl: './solicitacao-doacoes.component.css'
})
export class SolicitacaoDoacoesComponent {

  public doacoes : Doacao[] = [];
  public doacaoSelecionada !: Doacao | null;

  constructor(private doacaoService : DoacaoMedicamentoService){

  }
  
  ngOnInit(){
    this.doacaoService.getAllDoacoes()
      .subscribe(
        (retorno) => {
          this.doacoes = retorno.data;
          console.log(this.doacoes);
        },
        (error) => {
          
          console.log("Erro: ", error);
        }
      );
  }
}

