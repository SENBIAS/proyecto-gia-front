import { Component, Input, OnInit } from '@angular/core';
import { HistoriaClinicaService } from '../servicios/historia-clinica.service';

@Component({
  selector: 'app-historia-clinica',
  templateUrl: './historia-clinica.component.html',
  styleUrls: ['./historia-clinica.component.css']
})
export class HistoriaClinicaComponent implements OnInit {

  @Input()
  public idPaciente: any;
  public historia: any |undefined ;
  public enfermedadHereditaria: any | undefined ;
  public procedimientos: any | undefined;
  public enfermedadesPaciente: any;

  constructor(private serviceHistoriaClinica: HistoriaClinicaService) { }

  ngOnInit(): void {
  }

  buscarHistoria(){
    this.serviceHistoriaClinica.buscarHistoria(this.idPaciente).subscribe(respuesta =>{
      this.historia = respuesta;
      this.buscarProcedimientos();
      this.buscarEnfermedadesPaciente();
      this.buscarEnfermedadesHereditarias();
    })
  }

  buscarProcedimientos(){
    this.serviceHistoriaClinica.buscarProcedimientos(this.historia.idHistoriaClinica).subscribe(respuesta =>{
      this.procedimientos = respuesta;
      console.log(this.procedimientos);
    })
    
  }

  buscarEnfermedadesPaciente(){
    this.serviceHistoriaClinica.buscarEnfermedadesPaciente(this.historia.idHistoriaClinica).subscribe(respuesta=>{
      this.enfermedadesPaciente = respuesta;
      console.log(this.enfermedadesPaciente);
    })
  }

  buscarEnfermedadesHereditarias(){
    this.serviceHistoriaClinica.buscarEnfermedadesHereditarias(this.historia.idHistoriaClinica).subscribe(respuesta =>{
      this.enfermedadHereditaria = respuesta;
      console.log(this.enfermedadHereditaria);
    }
    )
  }
  

}
