import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

baseUrl = `${environment.baseUrlApi}/Usuario`;

constructor( private htppClient: HttpClient) { }
   
  cadastro(usuario : Usuario){
    return this.htppClient.post(this.baseUrl,usuario)
  }
}
