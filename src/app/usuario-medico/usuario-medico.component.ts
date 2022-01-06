import { Component, OnInit } from '@angular/core';
import { UsuarioMedico } from '../model/usuarioMedico';
import { UsuarioMedicoService } from '../servicios/usuario-medico.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuario-medico',
  templateUrl: './usuario-medico.component.html',
  styleUrls: ['./usuario-medico.component.css']
})
export class UsuarioMedicoComponent implements OnInit {

  public usuariosMedicos: Array<UsuarioMedico> = new Array();
  public agregar: boolean = false;
  public modificar: boolean = false;
  public medico: any;
  public especialidades:string[] = [
    "-SELECCIONE ALGUNO-",
    "Medicina Interna",
    "Endocrinología",
    "Urología",
    "Reumatología",
    "Neurología",
    "Anestesia",
    "Hematología",
    "Hepatología",
    "Oncología adultos",
    "Cirugía de mama y tejidos blandos",
    "Ginecología oncológica",
    "Dolor y cuidados paliativos",
    "Urología oncológica",
    "Pediatría",
    "Nefrología Pediátrica",
    "Neumología Pediátrica",
    "Reumatología Pediátrica",
    "Gastroenterología Pediátrica",
  ]

  constructor(private serviceUsuarioMedico: UsuarioMedicoService) { }

  ngOnInit(): void {
    this.recibirUsuarios();
  }

  

  formMedico = new FormGroup({
    numeroDocumento: new FormControl("",Validators.required),
    especialidad: new FormControl("",Validators.required),
    genero: new FormControl("",Validators.required),
    nombre: new FormControl("",Validators.required),
    apellido: new FormControl("",Validators.required),
    email: new FormControl("",Validators.required),
    telefono: new FormControl("",Validators.required),
    ips: new FormControl("",Validators.required),
    fechaNacimiento: new FormControl("",Validators.required)
  })

  recibirUsuarios(){
    this.serviceUsuarioMedico.recibirUsuarios().subscribe(respuesta => {
      this.usuariosMedicos = respuesta;
      console.log(this.usuariosMedicos);
    })
  }
  
  showBasicDialog2(paciente: UsuarioMedico) {
    this.modificar = true; 
    this.medico = paciente;
    console.log(this.medico.idPaciente);
  }

  activarAgregar(){
    this.agregar=true;
  }

  refresh(): void { window.location.reload(); }

  agregarMedico(){

    let medico={
      numeroDocumento: this.formMedico.get("numeroDocumento")?.value,
      especialidad: this.formMedico.get("especialidad")?.value,
      genero: this.formMedico.get("genero")?.value,
      nombre: this.formMedico.get("nombre")?.value,
      apellido: this.formMedico.get("apellido")?.value,
      email: this.formMedico.get("email")?.value,
      telefono: this.formMedico.get("telefono")?.value,
      ips: this.formMedico.get("ips")?.value,
      fechaNacimiento: this.formMedico.get("fechaNacimiento")?.value
    }

    this.serviceUsuarioMedico.agregarMedico(medico).subscribe(respuesta =>{
      console.log(respuesta);
    })

    this.refresh();
  }

  actualizarMedico(){
    let numeroDocumento = this.formMedico.get("numeroDocumento")?.value;
    let especialidad = this.formMedico.get("especialidad")?.value;
    let genero = this.formMedico.get("genero")?.value;
    let nombre = this.formMedico.get("nombre")?.value;
    let apellido = this.formMedico.get("apellido")?.value;
    let email = this.formMedico.get("email")?.value;
    let telefono = this.formMedico.get("telefono")?.value;
    let ips = this.formMedico.get("ips")?.value;
    let fechaNacimiento = this.formMedico.get("fechaNacimiento")?.value;

    if(numeroDocumento === ''){
      numeroDocumento = this.medico?.numeroDocumento;
    }
    if(especialidad === ''){
      especialidad = this.medico?.especialidad;
    }
    if(genero === ''){
      genero = this.medico?.genero;
    }
    if(nombre === ''){
      nombre = this.medico?.nombre;
    }
    if(apellido === ''){
      apellido = this.medico?.apellido;
    }
    if(email === ''){
      email = this.medico?.email;
    }
    if(telefono === ''){
      telefono = this.medico?.telefono;
    }
    if(ips === ''){
      ips = this.medico?.ips;
    }
    if(fechaNacimiento === ''){
      fechaNacimiento = this.medico?.fechaNacimiento;
    }

    let medicoActualizar = {
      idMedico: this.medico?.idMedico,
      numeroDocumento,
      especialidad,
      genero,
      nombre,
      apellido,
      email,
      telefono,
      ips,
      fechaNacimiento
    }

    this.serviceUsuarioMedico.actualizarMedico(medicoActualizar).subscribe(respuesta =>{
      console.log(respuesta);
    })
  }

  eliminarMedico(idMedico: number){
    this.serviceUsuarioMedico.eliminarMedico(idMedico).subscribe(respuesta =>{
      console.log(respuesta);
    })

    this.refresh();
  }

}
