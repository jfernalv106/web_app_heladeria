import { Component, OnInit } from '@angular/core';
import { Producto } from '../../inventario/interfaces-inventario';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.scss']
})
export class VentaComponent implements OnInit {

  total:number=0;
  iva:number=0;
  neto:number=0;

  carrito:Producto[]=[];

  nombreProducto:string='';


  constructor() { }

  ngOnInit(): void {
    console.log('Venta');
  }

  agregar(){

  }
  quitar(producto:Producto){
    
  }
}
