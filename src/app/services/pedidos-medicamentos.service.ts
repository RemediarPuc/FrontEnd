import { Injectable } from '@angular/core';

import { Pedido } from '../models/Pedido';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

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

  //Método para cadastrar novo Usuário
  getPedidos():Observable<any>{
    return this.http.get<Pedido>(this.baseUrl, { responseType: 'json' });
  }

  atualizaPedido(id: number, pedido: Pedido):Observable<any>{
    const url = `${this.baseUrl}/atualizaStatus/${id}`;
    return this.http.put<Pedido>(url, pedido);
  }

}
