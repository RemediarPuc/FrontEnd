import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment/environment.module';
import { Doacao } from '../models/Doacao';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoacaoMedicamentoService {

 baseUrl = `${environment.baseUrlApi}/Doacao`;

constructor(private httpClient: HttpClient) { }

  getAllDoacoes(): Observable<any>{
     return this.httpClient.get<Doacao[]>(this.baseUrl)
  }
  putDoacoes(id: number, status : number){
    return this.httpClient.put<Doacao[]>(`${this.baseUrl}/alteraStatus/${id}`,status);
  }
}