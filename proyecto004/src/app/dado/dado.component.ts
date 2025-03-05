import { Component, Input } from '@angular/core';



@Component({
  selector: 'app-dado',
  standalone: false,
  templateUrl: './dado.component.html',
  styleUrl: './dado.component.css'
})
  export class DadoComponent {
    //El decorador input permite que la propiedad a
    // la que se le aplica pueda recibir la informacion de otro componente
    
    @Input() valor:number = 1; 
    
    getImageDado(){
      return `images/dados${this.valor}.png`;
    }

}
    

