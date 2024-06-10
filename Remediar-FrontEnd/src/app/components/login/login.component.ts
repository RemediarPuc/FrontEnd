import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/Usuario';
import { TipoUsuario } from '../../models/TipoUsuario';
import { LocalStorageService } from '../../services/local-storage-service.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterOutlet, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm!: FormGroup;
  sucessLogin:boolean = true;

  constructor(private formBuilder: FormBuilder, private router: Router, private service:UsuarioService, private localStorageService: LocalStorageService){}

  ngOnInit(): void{
    this.loginForm = this.formBuilder.group({
      senha: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    })
  }

  submit(){
    if(this.loginForm.valid){
      const {value} = this.loginForm;
      this.service.getUsuarioLogin(value.email, value.senha)
        .subscribe(
          (retorno) => {
            this.sucessLogin = true;
            console.log(TipoUsuario[retorno.data.tipoUsuario]);
            let objeto ={
              Id: retorno.data.id,
              nome: retorno.data.nome,
              telefone: retorno.data.telefone,
              tipo: TipoUsuario[retorno.data.tipoUsuario]
            }
            this.localStorageService.setItem('Usuario', objeto);
            this.redirecionaUsuario(objeto);
          },
          (error) => {
            this.sucessLogin = false;
          }
        );
    }else{
      return;
    }
  }

  redirecionaUsuario(usuario:any){
    if(usuario.tipo == 'Usuário'){
      this.router.navigate(['/HomeDoador']);
    }else{
      this.router.navigate(['/HomeAdmin']);
    }
  }
}
