import { NgModule } from '@angular/core';
import { ProductoComponent } from './producto/producto.component';
import { RouterModule } from '@angular/router';
import { StockComponent } from './stock/stock.component';



@NgModule({
  imports: [RouterModule.forChild([
      { path: 'producto', component: ProductoComponent },
      { path: 'stock', component: StockComponent },
  ])],
  exports: [RouterModule]
})
export class InventarioRouteModule { }
