import { Component, OnInit } from '@angular/core';
import { EnfermedadHereditariaService } from '../servicios/enfermedad-hereditaria.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-enfermedad-hereditaria',
  templateUrl: './enfermedad-hereditaria.component.html',
  styleUrls: ['./enfermedad-hereditaria.component.css']
})
export class EnfermedadHereditariaComponent implements OnInit {

  public hClinica: any;

  formEnfermedadHereditaria = new FormGroup({
    enfermedad: new FormControl("",Validators.required),
    parentescoFamiliar: new FormControl("",Validators.required)
  })

  constructor(private serviceEnfermedadHereditaria: EnfermedadHereditariaService) { }

  ngOnInit(): void {
  }

  crearEnfermedadHereditaria(){
    interface historia {
     idHistoriaClinica: number;
   }
 
    let enfermedadHereditaria:{enfermedad:string, parentescoFamiliar: string,historiaClinica: historia} ={
       enfermedad: this.formEnfermedadHereditaria.get("enfermedad")?.value,
       parentescoFamiliar: this.formEnfermedadHereditaria.get("parentescoFamiliar")?.value,
       historiaClinica:{idHistoriaClinica:this.hClinica}
    }
     this.serviceEnfermedadHereditaria.crearEnfermedadHereditaria(enfermedadHereditaria).subscribe(respuesta=>{
       console.log(respuesta);
     })
  }

  
}
