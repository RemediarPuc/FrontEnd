import { Injectable } from '@angular/core';
import { environment } from '../environment/environment.module';
import { Pedido } from '../models/Pedido';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PedidosMedicamentosService {

  constructor(private http: HttpClient) { }

  baseUrl = `${environment.baseUrlApi}/Pedido`;

  //Método para cadastrar novo Usuário
  cadastrarNovoPedido(novoPedido:Pedido):Observable<Pedido>{
    return this.http.post<Pedido>(this.baseUrl, novoPedido);
  }
}
