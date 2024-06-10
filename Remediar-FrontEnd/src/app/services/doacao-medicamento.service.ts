import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Doacao } from '../models/Doacao';

@Injectable({
  providedIn: 'root'
})
export class DoacaoMedicamentoService {

 baseUrl = `${environment.baseUrlApi}/Doacao`;

constructor(private httpClient: HttpClient) { }

  cadastroDoacao(doacao : Doacao){
    return this.httpClient.post(this.baseUrl,doacao);
  }
}
