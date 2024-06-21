import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgIf, NgClass } from '@angular/common';
import { Router } from '@angular/router';
import { Medicamento } from '../../models/Medicamento';
import { CadastroMedicamentoService } from '../../services/cadastro-medicamento.service';
import { VoltarComponent } from "../voltar/voltar.component";

@Component({
    selector: 'app-form-cadastro',
    standalone: true,
    templateUrl: './form-cadastro.component.html',
    styleUrls: ['./form-cadastro.component.css'],
    imports: [HeaderComponent, ReactiveFormsModule, NgIf, NgClass, VoltarComponent]
})
export class FormCadastroComponent {
    registrationForm: FormGroup;
    successRegistration: boolean = true;
    minDate: string = '';
  
    constructor(private fb: FormBuilder, private router: Router, private cadastroService: CadastroMedicamentoService) {
      

      //Definindo que a data de validade deve ser maior que a data atual
      const today = new Date();
      const year = today.getFullYear();
      const month = ('0' + (today.getMonth() + 1)).slice(-2); 
      const day = ('0' + today.getDate()).slice(-2); 
      this.minDate = `${year}-${month}-${day}`;
      
      this.registrationForm = this.fb.group({
        nomeMedicamento: ['', Validators.required],
        unidade: ['Ampolas', Validators.required],
        quantidade: ['', [Validators.required, Validators.min(1)]],
        valor: ['', [Validators.required, Validators.min(0.01)]],
        descricao: ['', Validators.required],
        dtVencimento: ['', Validators.required]
      });
    }
  
    submit() {
      if (this.registrationForm.valid) {
        const medicamento: Medicamento = this.registrationForm.value;
        this.cadastroService.cadastro(medicamento).subscribe(
          response => {
            console.log('Medicamento cadastrado com sucesso:', response);
            this.successRegistration = true;
            this.router.navigate(['/ControleEstoque']);
            // Aqui você pode adicionar lógica adicional após o cadastro, como redirecionamento ou mensagem de sucesso
          },
          error => {
            console.error('Erro ao cadastrar medicamento:', error);
            this.successRegistration = false;
            // Aqui você pode adicionar lógica adicional para tratamento de erro, como exibir mensagem de erro ao usuário
          }
        );
      } else {
        this.successRegistration = false;
      }
    }
  }