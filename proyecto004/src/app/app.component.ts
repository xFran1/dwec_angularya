import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'juego de los dados';

  valor1!:number;
  valor2!:number;
  valor3!:number;

  resultado=""; //Aqui volcaremos el resultado del juego

  

  constructor(){
    this.lanzarDados();
  }

  lanzarDados(){
    this.valor1=this.generarAleatiorio();
    this.valor2=this.generarAleatiorio();
    this.valor3=this.generarAleatiorio();
    this.comprobarResultadoJuego();
  }

  generarAleatiorio(){
    return Math.floor(Math.random()*6)+1;
  }

  comprobarResultadoJuego(){
    if((this.valor1 == this.valor2)&&(this.valor1 == this.valor3)){
      this.resultado="Has ganado";
    }else{
      this.resultado="Has perdido";
    }
  }
}
