import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProcedimientosService {

  constructor(private http: HttpClient) { }

  crearProcedimiento(procedimiento: any){
    return this.http.post<any>("http://localhost:8080/procedimientos",procedimiento);
  }
}
