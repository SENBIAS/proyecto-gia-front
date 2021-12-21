import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioMedicoService {

  constructor(private http: HttpClient) {}

  public recibirUsuarios(){
    return this.http.get<any>("http://localhost:8080/usuarioMedico/mostrarTodos");
  }
}
