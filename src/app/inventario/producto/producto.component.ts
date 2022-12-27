import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Producto } from '../interfaces-inventario';
import { InventarioService } from '../inventario.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  producto:Producto;
 

  constructor(private inventarioService:InventarioService) {
    this.producto={sucursal:"1",imagen:''};
   }

  ngOnInit(): void {
    console.log("ENTRA");
  }
guardar(){
  this.inventarioService.guardaProducto(this.producto).subscribe(
    (rb) => {
      Swal.fire(
        'Guardado',
        'El producto ha quedado registrado.',
        'success'
      );
      this.producto={sucursal:"1",imagen:''};
    
    },
    (err) => {
    Swal.fire(
        '¡Aviso!',
        'Debe ingresar los campos marcados en rojo.',
        'warning'
      )
    }
  );
}
}
