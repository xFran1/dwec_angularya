import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dado',
  standalone: false,
  templateUrl: './dado.component.html',
  styleUrl: './dado.component.css'
})
export class DadoComponent implements OnInit{
 valor = 1;
 
 ngOnInit(): void {
  this.valor=this.generaAleatorio();

}

//  constructor(){
  //  this.valor=this.generaAleatorio();
  //}

 generaAleatorio(){
  return Math.floor((Math.random()*6)+1);//Genera un número aleatorio del 1 al 6
 }
}
