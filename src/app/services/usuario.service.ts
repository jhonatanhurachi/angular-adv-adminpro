import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterUsuario } from '../interfaces';
import { environment } from 'src/environments/environment';

const base_url = environment.baseUrl;

@Injectable({providedIn: 'root'})
export class UsuarioService {

  constructor(private readonly http: HttpClient) { }

  crearUsuario(usuario: RegisterUsuario) {
    return this.http.post(`${base_url}/usuarios`, usuario);
  }

}
