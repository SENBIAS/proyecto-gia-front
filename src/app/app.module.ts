import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioMedicoComponent } from './usuario-medico/usuario-medico.component';
import {SplitterModule} from 'primeng/splitter';
import { UsuarioPacienteComponent } from './usuario-paciente/usuario-paciente.component';
import {TableModule} from 'primeng/table';
import {AccordionModule} from 'primeng/accordion';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {DynamicDialogModule} from 'primeng/dynamicdialog'; 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AutoCompleteModule } from "primeng/autocomplete";
import { CalendarModule } from "primeng/calendar";
import { ChipsModule } from "primeng/chips";
import { DropdownModule } from "primeng/dropdown";
import { InputMaskModule } from "primeng/inputmask";
import { InputNumberModule } from "primeng/inputnumber";
import { CascadeSelectModule } from "primeng/cascadeselect";
import { MultiSelectModule } from "primeng/multiselect";
import { InputTextareaModule } from "primeng/inputtextarea";
import { InputTextModule } from "primeng/inputtext";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HistoriaClinicaComponent } from './historia-clinica/historia-clinica.component';
import { ProcedimientosComponent } from './procedimientos/procedimientos.component';
import { EnfermedadPacienteComponent } from './enfermedad-paciente/enfermedad-paciente.component';
import { EnfermedadHereditariaComponent } from './enfermedad-hereditaria/enfermedad-hereditaria.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioMedicoComponent,
    UsuarioPacienteComponent,
    HistoriaClinicaComponent,
    ProcedimientosComponent,
    EnfermedadPacienteComponent,
    EnfermedadHereditariaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SplitterModule,
    HttpClientModule,
    TableModule,
    AccordionModule,
    ButtonModule,
    DialogModule,
    DynamicDialogModule,
    BrowserAnimationsModule,
    AutoCompleteModule,
    CalendarModule,
    ChipsModule,
    DropdownModule,
    InputMaskModule,
    InputNumberModule,
    CascadeSelectModule,
    MultiSelectModule,
    InputTextareaModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
