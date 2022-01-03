import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { usuarioPacientes } from '../model/usuarioPaciente';


@Injectable({
  providedIn: 'root'
})
export class UsuarioPacienteService {

  constructor(private http: HttpClient) { }

  recibirUsuarios(){
    return this.http.get<any>("http://localhost:8080/usuarioPaciente/mostrarTodos")
  }

  actualizarUsuario(usuario: usuarioPacientes){
    return this.http.put<usuarioPacientes>("http://localhost:8080/usuarioPaciente",usuario);
  }

  eliminarUsuario(idPaciente: number){
    return this.http.delete<any>("http://localhost:8080/usuarioPaciente?id="+idPaciente);
  }

  agregarUsuario(usuario: any){
    return this.http.post<any>("http://localhost:8080/historiaClinica", usuario);
  }
}
