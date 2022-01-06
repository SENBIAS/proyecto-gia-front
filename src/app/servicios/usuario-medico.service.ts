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

  public agregarMedico(medico: any){
    return this.http.post<any>("http://localhost:8080/usuarioMedico",medico);
  }

  public eliminarMedico(idMedico: number){
    return this.http.delete<any>("http://localhost:8080/usuarioMedico?id="+idMedico);
  }
  
  public actualizarMedico(medico: any){
    return this.http.put<any>("http://localhost:8080/usuarioMedico", medico);
  }
}
