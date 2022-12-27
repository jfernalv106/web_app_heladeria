import { Component, OnInit } from '@angular/core';
import { Producto } from '../interfaces-inventario';
import { InventarioService } from '../inventario.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {

  nombre: string='';
  inventariable:boolean=true;
  descripcion:string='';
  min:number=0;
  max:number=0;
  productos:Producto[]=[];
  cargando:boolean=false;

  constructor(private inventarioService:InventarioService) { 
    
  }

  ngOnInit(): void {
    console.log("Stock");
  }

  buscar(){
    
    this.inventarioService.buscarProducto(this.nombre,this.inventariable,this.descripcion,this.min,this.max).subscribe(
      (prod) => {
        this.productos = prod.productos??[];
        this.cargando = false;

      }, (err) => {
        this.productos = [];
      }
    );
  }
}
