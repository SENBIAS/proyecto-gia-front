import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioMedicoComponent } from './usuario-medico/usuario-medico.component';
import {SplitterModule} from 'primeng/splitter';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioMedicoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SplitterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
