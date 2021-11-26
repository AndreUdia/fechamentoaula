import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private flag: boolean = true;

  exibirLista(){
    return this.flag;
  }
  
}
