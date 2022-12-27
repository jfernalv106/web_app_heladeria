
import { CommonModule } from '@angular/common';
import { ProductoComponent } from './producto/producto.component';
import { InventarioRouteModule } from './inventario-route.module';
import { NgModule } from '@angular/core';



@NgModule({
  declarations: [
    ProductoComponent
  ],
  imports: [
    CommonModule,
    InventarioRouteModule
  ],
  exports:[
    ProductoComponent
  ]
})
export class InventarioModule { }
