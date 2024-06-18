import { Component, OnInit } from '@angular/core';
import { DoacaoMedicamentoService } from '../../services/doacao-medicamento.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Doacao } from  '../../models/Doacao';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../header/header.component";
import { LocalStorageService } from '../../services/local-storage-service.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

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

  constructor(private formBuilder: FormBuilder,private doacaoService: DoacaoMedicamentoService, private router: Router,private localStorageService: LocalStorageService, private location: Location) { }

  ngOnInit() {
    this.doacaoForm = this.formBuilder.group({
      nomeMedicamento : ['',Validators.required],
      qtdCaixas: ['',Validators.required],
      qtdMg: ['',Validators.required],
      dtValidade: ['',Validators.required],
      dtRetirada: ['',Validators.required],
      statusDoacao: [0]
    })
  }

  submit(){
     
    if(this.doacaoForm.valid){
      
      const {value} = this.doacaoForm;
      this.doacao = value;
      this.doacao.valorDoacao = 0;
      const usuario = this.localStorageService.getItem('Usuario');
      value.usuarioId = usuario.Id;
      this.doacao.usuarioId = usuario.Id;
      console.log(this.doacao);
 
     this.doacaoService.cadastroDoacao(this.doacao).subscribe(()=> this.router.navigate(['/HomeDoador']));
    }
  }

  goBack(): void {
    this.location.back();
  }

}
