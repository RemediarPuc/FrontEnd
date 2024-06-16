import { Component } from '@angular/core';
import { Usuario } from '../models/Usuario';
import { UsuarioService } from '../services/Usuario.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';


@Component({
  selector: 'app-cadastro-de-doador',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,NgxMaskDirective,NgxMaskPipe],
  templateUrl: './cadastro-de-doador.component.html',
  styleUrl: './cadastro-de-doador.component.css'
})
export class CadastroDeDoadorComponent {

  public usuario = new Usuario();
  usuarioCadastroForm!: FormGroup;


  constructor(private formBuilder: FormBuilder,private usuarioService : UsuarioService){
     
  }
  
  ngOnInit(): void{
    this.usuarioCadastroForm = this.formBuilder.group({
      nome : ['', Validators.required],
      numPessoaCasa : ['',Validators.required],
      cpf : ['',Validators.required],
      telefone : ['',Validators.required],
      genero: ['',Validators.required],
      faixaEtaria : ['',Validators.required],
      escolaridade: ['',Validators.required],
      rendaFamiliar: ['', Validators.required],
      email: ['',[Validators.required,Validators.email]],
      senha: ['',Validators.required],
      cidade:['',Validators.required],
      cep: ['', Validators.required],
      rua:['',Validators.required],
      numero:['',Validators.required],
      bairro: ['',Validators.required],
      estado: ['',Validators.required],
      regiao: ['',Validators.required]

    })
  }
  submit(){

    if(this.usuarioCadastroForm.valid){
      const {value} = this.usuarioCadastroForm;
      this.usuario = value;
      this.usuario.tipoUsuario = 2;
      this.usuarioService.cadastro(this.usuario).subscribe(() => this.ngOnInit());
    }
    
  }

   
}
