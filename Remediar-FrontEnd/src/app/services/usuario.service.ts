import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  baseUrl = `${environment.baseUrlApi}/Usuario`;

  constructor( private htppClient: HttpClient) { }
   
  cadastro(usuario : Usuario):Observable<Usuario>{
    return this.htppClient.post<Usuario>(this.baseUrl,usuario)
  }

  getUsuarioLogin(email:String, senha:String):Observable<any>{
    const url = `${this.baseUrl}/login/${email}/${senha}`
    return this.htppClient.get<Usuario>(url, { responseType: 'json' });
  }
}
