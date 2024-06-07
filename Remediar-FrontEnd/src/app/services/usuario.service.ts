import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment/environment.module';
import { Usuario } from '../models/Usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }

  getUsuarioLogin(email:String, senha:String):Observable<any>{
    const url = `${environment.baseUrlApi}/Usuario/login/${email}/${senha}`
    return this.http.get<Usuario>(url, { responseType: 'json' });
  }
}
