import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { EstoqueService } from '../../services/estoque.service';
import { CommonModule } from '@angular/common';
import { Medicamento } from '../../models/Medicamento';
import { VoltarComponent } from "../voltar/voltar.component";


@Component({
    selector: 'app-tabela-estoque',
    standalone: true,
    templateUrl: './tabela-estoque.component.html',
    styleUrls: ['./tabela-estoque.component.css'],
    imports: [HeaderComponent, FooterComponent, CommonModule, VoltarComponent]
})
  export class TabelaEstoqueComponent implements OnInit {
  
    medicamentos: any[] = []; // Array para armazenar os medicamentos do estoque
  
    constructor(private estoqueService: EstoqueService) { }
  
    ngOnInit(): void {
      this.carregarMedicamentos();
    }
  
    carregarMedicamentos(): void {
      this.estoqueService.getMedicamentos().subscribe(
        (data) => {
          this.medicamentos = data;
        },
        (error) => {
          console.error('Erro ao carregar medicamentos', error);
        }
      );
    }

    descartarMedicamento(id: number): void{
        this.estoqueService.descartarMedicamento(id).subscribe(
            () => {
              console.log(`Medicamento com Id ${id} removido do estoque`);
              this.medicamentos = this.medicamentos.filter(med => med.id !== id);
            },
            (error) => {
              console.error(`Erro ao remover medicamento com Id ${id}`, error);
            }
          );
    }
  
    darBaixa(id: number): void {
      this.estoqueService.darBaixa(id).subscribe(
        () => {
          console.log(`Baixa realizada para o medicamento com Id ${id}`);
          this.carregarMedicamentos();
        },
        (error) => {
          console.error(`Erro ao dar baixa para o medicamento com Id ${id}`, error);
        }
      );
    }
  
  }

