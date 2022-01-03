import { Component, OnInit } from '@angular/core';
import { usuarioPacientes } from '../model/usuarioPaciente';
import { UsuarioPacienteService } from '../servicios/usuario-paciente.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-usuario-paciente',
  templateUrl: './usuario-paciente.component.html',
  styleUrls: ['./usuario-paciente.component.css']
})
export class UsuarioPacienteComponent implements OnInit {

  
  public displayBasic2: boolean = false;
  public numero:number |undefined;
  public usuariosPacientes: Array<usuarioPacientes> = new Array();
  public usuario: any;
  public display: boolean = false;
  public agregar: boolean = false;
  public estadoCivil:string[] = [
    'nunguna',
    'soltero(a)',
    'casado(a)',
    'divorciado(a)',
    'viudo(a)',
    'union libre'
  ]


  constructor(private serviceUsuarioPaciente: UsuarioPacienteService) { }

  formUsuario = new FormGroup({
    nombre: new FormControl("",Validators.required),
    apellido: new FormControl("",Validators.required),
    email: new FormControl("",[Validators.required,Validators.email]),
    telefono: new FormControl("",Validators.required),
    fechaNacimiento: new FormControl("",Validators.required),
    direccion: new FormControl("",Validators.required),
    estadoCivil: new FormControl("",Validators.required),
    numeroDocumento: new FormControl("",Validators.required)
  })


  ngOnInit(): void {
    this.recibirUsuarios();

  }
  
  
  actualizarUsuario(){
    let nombre = this.formUsuario.get("nombre")?.value;
    let apellido = this.formUsuario.get("apellido")?.value;
    let email = this.formUsuario.get("email")?.value;
    let telefono = this.formUsuario.get("telefono")?.value;
    let fechaNacimiento = this.formUsuario.get("fechaNacimiento")?.value;
    let direccion = this.formUsuario.get("direccion")?.value;
    let estadoCivil = this.formUsuario.get("estadoCivil")?.value;
    let numeroDocumento = this.formUsuario.get("numeroDocumento")?.value;

    if(nombre === ''){
      nombre=this.usuario?.nombre;
    }
    if(apellido === ''){
      apellido=this.usuario?.apellido;
    }
    if(email === ''){
      email=this.usuario?.email;
    }
    if(telefono === ''){
      telefono=this.usuario?.telefono;
    }
    if(fechaNacimiento === ''){
      fechaNacimiento=this.usuario?.fechaNacimiento;
    }
    if(direccion === ''){
      direccion=this.usuario?.direccion;
    }
    if(estadoCivil === ''){
      estadoCivil=this.usuario?.estadoCivil;
    }
    if(numeroDocumento === ''){
      numeroDocumento=this.usuario?.numeroDocumento;
    }
    let usuarioPaciente={
      idPaciente: this.usuario?.idPaciente,
      nombre,
      apellido,
      email,
      telefono,
      fechaNacimiento,
      direccion,
      estadoCivil,
      numeroDocumento
    }


    this.serviceUsuarioPaciente.actualizarUsuario(usuarioPaciente).subscribe(respuesta =>{
      console.log(respuesta);
    })

    
    this.displayBasic2 = false;
  }
  

  showBasicDialog2(paciente: usuarioPacientes) {
    this.displayBasic2 = true; 
    this.usuario = paciente;
    console.log(this.usuario.idPaciente);
  }

  activarAgregar(){
    this.agregar = true;
  }

  refresh(): void { window.location.reload(); }

  eliminarUsuario(idPaciente: number){
    this.serviceUsuarioPaciente.eliminarUsuario(idPaciente).subscribe(respuesta =>{
      console.log(respuesta);
    })

    this.refresh();
  }

  agregarUsuario(){
    interface paciente {
      nombre: string;
      apellido: string;
      email: string;
      telefono: string;
      fechaNacimiento: any;
      direccion: string;
      estadoCivil: string;
      numeroDocumento: string;
   }
   
   var persona: { [id: string]: paciente; } = {
      "usuarioPaciente": {
        nombre: this.formUsuario.get("nombre")?.value,
        apellido: this.formUsuario.get("apellido")?.value,
        email: this.formUsuario.get("email")?.value, 
        telefono: this.formUsuario.get("telefono")?.value,
        fechaNacimiento: this.formUsuario.get("fechaNacimiento")?.value,
        direccion: this.formUsuario.get("direccion")?.value,
        estadoCivil: this.formUsuario.get("estadoCivil")?.value,
        numeroDocumento: this.formUsuario.get("numeroDocumento")?.value
      }
   };
  
    this.serviceUsuarioPaciente.agregarUsuario(persona).subscribe(respuesta =>{
      console.log(respuesta);
    })
    console.log(persona);
    
    
  }

  recibirUsuarios(){
    this.serviceUsuarioPaciente.recibirUsuarios().subscribe(respuesta => {
      this.usuariosPacientes = respuesta;
      console.log(this.usuariosPacientes);
    })
  }

}
