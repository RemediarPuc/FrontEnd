import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { PedidoService } from '../../services/pedido.service';
import { LocalStorageService } from '../../services/local-storage-service.service'; // Importe o serviço de Local Storage

@Component({
  selector: 'app-pedidos-realizados',
  standalone: true,
  imports: [DatePipe, CommonModule, FormsModule, HeaderComponent],
  templateUrl: './pedidos-realizados.component.html',
  styleUrls: ['./pedidos-realizados.component.css'],
  providers: [PedidoService]
})
export class PedidosRealizadosComponent implements OnInit {
  public pedidos: any[] = [];
  public doacoesFiltradas: any[] = [];
  public filtroStatus: string = 'Todos';

  constructor(
    private pedidoService: PedidoService,
    private location: Location,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    const userId = this.localStorageService.getUserId();
    if (userId !== null) {
      this.pedidoService.getPedidosPorUsuario(userId)
        .subscribe(
          (retorno) => {
            this.pedidos = retorno.data;
            this.doacoesFiltradas = retorno.data;
            this.filtrarDoacoes();
          },
          (error) => {
            console.log("Erro: ", error);
          }
        );
    } else {
      console.error('User ID not found in Local Storage');
    }
  }

  filtrarDoacoes(): void {
    if (this.pedidos != null) {
      if (this.filtroStatus === 'Todos') {
        this.doacoesFiltradas = this.pedidos;
      } else {
        this.doacoesFiltradas = this.pedidos.filter(x => x.statusDoacao === this.filtroStatus);
      }
    }
  }

  goBack(): void {
    this.location.back();
  }
}
