import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class HistoricoDoacoesService {
  baseUrl = `${environment.baseUrlApi}/Doacao`;

  constructor(private httpClient: HttpClient) { }

  getHistoricoDoacoesPorUsuario(usuarioId: number): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/usuario/${usuarioId}`);
  }
}
