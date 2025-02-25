import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [NgIf],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  public counter : number = 100;
  //counter : number = 0; //obviar el public es igual a poner public

  //Se llama cada que inicia la ejecucion
  constructor()
  {
    //this.counter++;
    //console.log("Creando el componente de contador");//impresion en consola
    //this.incrementby(1);
  }

  incrementby(value : number) : void {
    this.counter+=value;
  }
}
