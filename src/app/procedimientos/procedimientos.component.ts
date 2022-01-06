import { Component, OnInit } from '@angular/core';
import { ProcedimientosService } from '../servicios/procedimientos.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-procedimientos',
  templateUrl: './procedimientos.component.html',
  styleUrls: ['./procedimientos.component.css']
})
export class ProcedimientosComponent implements OnInit {

  public uMedico: any;
  public hClinica: any;
  
  formProcedimientos = new FormGroup({
    descripcion: new FormControl("",Validators.required),
    tipoProcedimiento: new FormControl("",Validators.required)
  })

  constructor(private serviceProcedimientos: ProcedimientosService) { }

  ngOnInit(): void {
  }

  crearProcedimiento(){
    interface medico {
     idMedico: number;
   }
   interface historia {
    idHistoriaClinica: number;
  }

   let procedimiento:{descripcion:string, tipoProcedimiento: string, usuarioMedico: medico,historiaClinica: historia} ={
      descripcion: this.formProcedimientos.get("descripcion")?.value,
      tipoProcedimiento: this.formProcedimientos.get("tipoProcedimiento")?.value,
      usuarioMedico:{idMedico: this.uMedico},
      historiaClinica:{idHistoriaClinica:this.hClinica}
   }
    this.serviceProcedimientos.crearProcedimiento(procedimiento).subscribe(respuesta=>{
      console.log(respuesta);
    })
  }
}
