import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solicitar-medicamento',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './solicitar-medicamento.component.html',
  styleUrl: './solicitar-medicamento.component.css'
})
export class SolicitarMedicamentoComponent {

  dadosSolicitacaoForm!: FormGroup;
  sucessLogin:boolean = true;

  constructor(private formBuilder: FormBuilder, private router: Router){}

  ngOnInit(): void{
    this.dadosSolicitacaoForm = this.formBuilder.group({
      nomeMedicacao: ['', Validators.required]
    })
  }

  goBack(): void {
    this.router.navigate(['/']); // Navega para a rota anterior
  }

  submit(){
    if(this.dadosSolicitacaoForm.valid){
      const {value} = this.dadosSolicitacaoForm;
      // this.service.getUsuarioLogin(value.email, value.senha)
      //   .subscribe(
      //     (retorno) => {
      //       this.sucessLogin = true;
      //     },
      //     (error) => {
      //       this.sucessLogin = false;
      //     }
      //   );
    }else{
      return;
    }
  }
}
