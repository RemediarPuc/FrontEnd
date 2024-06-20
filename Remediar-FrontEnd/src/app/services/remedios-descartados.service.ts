import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { MedicamentoDescartado } from '../models/MedicamentoDescartado';

@Injectable({
  providedIn: 'root'
})
export class RemediosDescartadosService {
  baseUrl = `${environment.baseUrlApi}/RelatorioRemedioDescartados`;

  constructor(private http: HttpClient) { }

  getMedicamentosDescartados(): Observable<MedicamentoDescartado[]> {
    return this.http.get<MedicamentoDescartado[]>(`${this.baseUrl}`);
  }
  
}