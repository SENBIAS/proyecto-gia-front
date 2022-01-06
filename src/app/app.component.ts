import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto-gia';

  public activarP: boolean = true;
  public activarM: boolean = true;

  activarPaciente(){
    if(this.activarP === false){
      this.activarP = true;
      this.activarM = false;
    }else{
      this.activarP = false;
    }
  }

  activarMedico(){
    if(this.activarM === false){
      this.activarM = true;
      this.activarP = false;
    }else{
      this.activarM = false;
    }
  }
}
