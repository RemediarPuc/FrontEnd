import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  baseUrl = `${environment.baseUrlApi}/Pedido`;

  constructor(private httpClient: HttpClient) { }

  getAllPedidos(): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl);
  }
}
