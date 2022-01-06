import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnfermedadHereditariaService {

  constructor(private http: HttpClient) { }

  crearEnfermedadHereditaria(enfermedadHereditaria: any){
    return this.http.post<any>("http://localhost:8080/enfermedadesHereditarias",enfermedadHereditaria);
  }
}
