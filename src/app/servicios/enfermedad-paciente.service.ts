import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnfermedadPacienteService {

  constructor(private http: HttpClient) { }

  crearEnfermedadPaciente(enfermedadPaciente: any){
    return this.http.post<any>("http://localhost:8080/enfermedadPaciente",enfermedadPaciente);
  }
}
