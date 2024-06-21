import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Medicamento } from '../models/Medicamento';

@Injectable({
  providedIn: 'root'
})
export class CadastroMedicamentoService {

  baseUrl = `${environment.baseUrlApi}/Medicamento/Create`;

  constructor(private httpClient: HttpClient) { }

  cadastro(medicamento: Medicamento): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl, medicamento);
  }
}
