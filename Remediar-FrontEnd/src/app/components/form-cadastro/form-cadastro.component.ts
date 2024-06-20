import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgIf, NgClass } from '@angular/common';
import { Medicamento } from '../../models/Medicamento';
import { CadastroMedicamentoService } from '../../services/cadastro-medicamento.service';

@Component({
    selector: 'app-form-cadastro',
    standalone: true,
    templateUrl: './form-cadastro.component.html',
    styleUrls: ['./form-cadastro.component.css'],
    imports: [HeaderComponent, ReactiveFormsModule, NgIf, NgClass]
})
export class FormCadastroComponent {
    registrationForm: FormGroup;
    successRegistration: boolean = true;
  
    constructor(private fb: FormBuilder, private cadastroService: CadastroMedicamentoService) {
      this.registrationForm = this.fb.group({
        nomeMedicamento: ['', Validators.required],
        unidade: ['', Validators.required],
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