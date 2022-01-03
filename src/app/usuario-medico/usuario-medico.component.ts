import { Component, OnInit } from '@angular/core';
import { UsuarioMedico } from '../model/usuarioMedico';
import { UsuarioMedicoService } from '../servicios/usuario-medico.service';

@Component({
  selector: 'app-usuario-medico',
  templateUrl: './usuario-medico.component.html',
  styleUrls: ['./usuario-medico.component.css']
})
export class UsuarioMedicoComponent implements OnInit {

  constructor(private serviceUsuarioMedico: UsuarioMedicoService) { }

  ngOnInit(): void {
    this.recibirUsuarios();
  }

  public usuariosMedicos: Array<UsuarioMedico> = new Array();

  recibirUsuarios(){
    this.serviceUsuarioMedico.recibirUsuarios().subscribe(respuesta => {
      this.usuariosMedicos = respuesta;
      console.log(this.usuariosMedicos);
    })
   
  }
  

}
