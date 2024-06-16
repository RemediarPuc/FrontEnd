import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Usuario } from '../models/Usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

baseUrl = `${environment.baseUrlApi}/Usuario`;

constructor( private htppClient: HttpClient) { }
   
  cadastro(usuario : Usuario){
    return this.htppClient.post(this.baseUrl,usuario)
  }

  getUsuarioLogin(email:String, senha:String):Observable<any>{
    const url = `${environment.baseUrlApi}/login/${email}/${senha}`
    return this.htppClient.get<Usuario>(url, { responseType: 'json' });
  }
}
