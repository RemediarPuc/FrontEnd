import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Medicamento } from '../models/Medicamento';

@Injectable({
  providedIn: 'root'
})
export class EstoqueService {
  baseUrl = `${environment.baseUrlApi}/Medicamento`;

  constructor(private http: HttpClient) { }

  getMedicamentos(): Observable<Medicamento[]> {
    return this.http.get<Medicamento[]>(`${this.baseUrl}`);
  }

  descartarMedicamento(id: number): Observable<Medicamento[]> {
    return this.http.delete<Medicamento[]>(`${this.baseUrl}/${id}`);
  }

  darBaixa(id: number): Observable<Medicamento> {
    return this.http.put<Medicamento>(`${this.baseUrl}/${id}/darbaixa`, {});
  }
  
}
