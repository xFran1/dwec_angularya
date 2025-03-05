import { Component } from '@angular/core';
import { ProductosService } from '../productos.service';
import { IProducto } from '../i-producto';

@Component({
  selector: 'app-listadoproducto',
  standalone: false,
  templateUrl: './listadoproducto.component.html',
  styleUrl: './listadoproducto.component.css'
})
export class ListadoproductoComponent {

  productos!:IProducto[];

  constructor(private servicioproductos:ProductosService){

  }
  ngOnInit(): void {
      this.servicioproductos.obtenerTodos().subscribe(
        (datos)=>{
          this.productos = datos;
          console.log(this.productos);
          //this.productos[0].codigo;
        }
      );
  }
}
