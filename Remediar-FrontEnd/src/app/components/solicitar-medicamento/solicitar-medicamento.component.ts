import { CommonModule, DatePipe, Location} from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { PedidosMedicamentosService } from '../../services/pedidos-medicamentos.service';
import { LocalStorageService } from '../../services/local-storage-service.service';

@Component({
    selector: 'app-solicitar-medicamento',
    standalone: true,
    templateUrl: './solicitar-medicamento.component.html',
    styleUrl: './solicitar-medicamento.component.css',
    imports: [CommonModule, ReactiveFormsModule, HeaderComponent]
})
export class SolicitarMedicamentoComponent {

  dadosSolicitacaoForm!: FormGroup;
  sucessLogin:boolean = true;

  constructor(private formBuilder: FormBuilder, private router: Router, private location: Location, private service:PedidosMedicamentosService, private localStorageService: LocalStorageService){}

  ngOnInit(): void{
    const usuarioLogado = this.localStorageService.getItem('Usuario') || { nome: '', telefone: '' };
    this.dadosSolicitacaoForm = this.formBuilder.group({
      nomeMedicamento: ['', [Validators.required]],
      dosagem         : ['', Validators.required],
      unidade         : ['Ampolas', Validators.required],
      quantidade      : ['', Validators.required],
      usoContinuo     : ['N', Validators.required],
      endereco        : ['CENTRO - RUA CARIJOS, 141 - 2º ANDAR, CENTRO BH', Validators.required],
      nomeUsuario     : [usuarioLogado.nome, Validators.required],
      telefone        : [usuarioLogado.telefone],
      data            : [new Date(), Validators.required],
      statusPedido    : [0],
      valorPedido     : [0.0],
      dataRetirada    : [null]
    })
    
  }

  goBack(): void {
    this.location.back();
  }

  submit(){
    if(this.dadosSolicitacaoForm.valid){
      const {value} = this.dadosSolicitacaoForm;
      const usuario = this.localStorageService.getItem('Usuario');
      value.usuarioId = usuario.Id;
      value.nomeMedicamento = this.processaNome(value.nomeMedicamento);
      this.service.cadastrarNovoPedido(value)
      .subscribe(
        (retorno) => {
          
          this.router.navigate(['/HomeDoador']);
        },
        (error) => {
          console.log("Não foi possivel salvar.");
          console.log(error);
        }
      );
    }else{
      return;
    }
  }

  processaNome(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }
}
