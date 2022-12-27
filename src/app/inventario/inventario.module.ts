
import { CommonModule } from '@angular/common';
import { ProductoComponent } from './producto/producto.component';
import { InventarioRouteModule } from './inventario-route.module';
import { NgModule } from '@angular/core';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { FormsModule } from '@angular/forms';
import { StockComponent } from './stock/stock.component';



@NgModule({
  declarations: [
    ProductoComponent,
    StockComponent
  ],
  imports: [
    CommonModule,
    InventarioRouteModule,
    PrimeNgModule,
    FormsModule
  ],
  exports:[
    ProductoComponent,
    StockComponent
  ]
})
export class InventarioModule { }
