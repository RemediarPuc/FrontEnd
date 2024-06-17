import { Component } from '@angular/core';
import { Usuario } from '../../models/Usuario';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { HeaderComponent } from "../header/header.component";
import { Router } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage-service.service';
import { UsuarioService } from '../../services/usuario.service';



@Component({
    selector: 'app-cadastro-de-doador',
    standalone: true,
    templateUrl: './cadastro-de-doador.component.html',
    styleUrl: './cadastro-de-doador.component.css',
    imports: [ReactiveFormsModule, CommonModule, NgxMaskDirective, NgxMaskPipe, HeaderComponent]
})
export class CadastroDeDoadorComponent {

  public usuario = new Usuario();
  usuarioCadastroForm!: FormGroup;


  constructor(private formBuilder: FormBuilder,private usuarioService : UsuarioService, private router: Router, private localStorageService: LocalStorageService){
     
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
      this.usuarioService.cadastro(this.usuario).subscribe(
        (retorno) => {
          let objeto ={
            Id: retorno.id,
            nome: retorno.nome,
            telefone: retorno.telefone,
            tipo: retorno.tipoUsuario
          }
          this.localStorageService.setItem('Usuario', objeto);
          this.router.navigate(['/HomeDoador']);
        });
    }
    
  }

  goBack(): void {
    this.router.navigate(['/']); // Navega para a rota anterior
  }

   
}