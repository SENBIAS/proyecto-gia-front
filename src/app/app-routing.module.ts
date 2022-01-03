import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioMedicoComponent } from './usuario-medico/usuario-medico.component';
import { UsuarioPacienteComponent } from './usuario-paciente/usuario-paciente.component';

const routes: Routes = [
  { path: 'user', redirectTo: 'localhost:4200', pathMatch: 'full' },
  { path : 'usuarioMedico', component: UsuarioMedicoComponent},
  { path : 'usuarioPaciente', component: UsuarioPacienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
