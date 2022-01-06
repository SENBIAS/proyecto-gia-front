import { Component, OnInit } from '@angular/core';
import { EnfermedadPacienteService } from '../servicios/enfermedad-paciente.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-enfermedad-paciente',
  templateUrl: './enfermedad-paciente.component.html',
  styleUrls: ['./enfermedad-paciente.component.css']
})
export class EnfermedadPacienteComponent implements OnInit {

  public hClinica: any;

  formEnfermedadPaciente = new FormGroup({
    enfermedad: new FormControl("",Validators.required),
  })

  constructor(private serviceEnfermedadPaciente: EnfermedadPacienteService) { }

  ngOnInit(): void {
  }

  crearEnfermedadPaciente(){
    interface historia {
     idHistoriaClinica: number;
   }
 
    let enfermedadPaciente:{enfermedad:string,historiaClinica: historia} ={
       enfermedad: this.formEnfermedadPaciente.get("enfermedad")?.value,
       historiaClinica:{idHistoriaClinica:this.hClinica}
    }
     this.serviceEnfermedadPaciente.crearEnfermedadPaciente(enfermedadPaciente).subscribe(respuesta=>{
       console.log(respuesta);
     })
  }
}
