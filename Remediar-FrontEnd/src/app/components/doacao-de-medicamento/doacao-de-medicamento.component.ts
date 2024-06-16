import { Component, OnInit } from '@angular/core';
import { DoacaoMedicamentoService } from '../services/doacao-medicamento.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Doacao } from '../models/Doacao';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-doacao-de-medicamento',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HeaderComponent],
  templateUrl: './doacao-de-medicamento.component.html',
  styleUrls: ['./doacao-de-medicamento.component.css']
})
export class DoacaoDeMedicamentoComponent implements OnInit {

  public doacao = new Doacao();
  doacaoForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,private doacaoService: DoacaoMedicamentoService) { }

  ngOnInit() {
    this.doacaoForm = this.formBuilder.group({
      nomeMedicamento : ['',Validators.required],
      qtdCaixas: ['',Validators.required],
      qtdMg: ['',Validators.required],
      dtValidade: ['',Validators.required],
      dtRetirada: ['',Validators.required]
    })
  }

  submit(){
     
    if(this.doacaoForm.valid){
      
      const {value} = this.doacaoForm;
      this.doacao = value;
      this.doacao.valorDoacao = 0;
      this.doacao.statusDoacao = 0; 
      this.doacao.usuarioId = 1;
      console.log(this.doacao);
 
     this.doacaoService.cadastroDoacao(this.doacao).subscribe(()=> this.ngOnInit());
    }
  }

}
