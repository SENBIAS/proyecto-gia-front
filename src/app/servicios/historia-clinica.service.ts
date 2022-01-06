import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoriaClinicaService {

  constructor(private http: HttpClient) { }

  public buscarHistoria(idHistoria: number){
    return this.http.get<any>("http://localhost:8080/historiaClinica?id="+idHistoria);
  }

  public buscarEnfermedadesHereditarias(idHistoria: number){
    return this.http.get<any>("http://localhost:8080/historiaClinica/enfermedadesHereditarias?id="+idHistoria);
  }

  public buscarProcedimientos(idHistoria: number){
    return this.http.get<any>("http://localhost:8080/historiaClinica/procedimientos?id="+idHistoria);
  }

  public buscarEnfermedadesPaciente(idHistoria: number){
    return this.http.get<any>("http://localhost:8080/historiaClinica/enfermedadesPaciente?id="+idHistoria);
  }
}
