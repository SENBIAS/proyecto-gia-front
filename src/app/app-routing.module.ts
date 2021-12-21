import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioMedicoComponent } from './usuario-medico/usuario-medico.component';

const routes: Routes = [
  { path : 'usuarioMedico', component: UsuarioMedicoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
