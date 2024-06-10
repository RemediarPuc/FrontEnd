import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { CurrencyPipe, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PedidosMedicamentosService } from '../../services/pedidos-medicamentos.service';
import { Router } from '@angular/router';
import { Pedido } from '../../models/Pedido';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-pedidos',
    standalone: true,
    templateUrl: './pedidos.component.html',
    styleUrl: './pedidos.component.css',
    imports: [HeaderComponent, FooterComponent, DatePipe,FormsModule]
})
export class PedidosComponent {

  statusSelecionado: string = "Todos";

  pedidos: Pedido[] = [];
  pedidosFiltrados: Pedido[] = [];

  constructor(private router: Router, private service:PedidosMedicamentosService){}

  ngOnInit(): void{
    this.getPedidos();
  }

  getPedidos(){
    
    this.service.getPedidos()
      .subscribe(
        (retorno) => {
          this.pedidos = retorno.data;
          this.pedidosFiltrados = retorno.data;
          console.log(this.pedidos);
        }
      );
  }

  filtraPedidos() {
    if(this.statusSelecionado == "Todos"){
      this.getPedidos();
    }else{
      this.pedidosFiltrados = this.pedidos.filter(pedido => pedido.statusPedido === this.statusSelecionado);
    }
    
  }
}
