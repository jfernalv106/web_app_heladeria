import { NgModule } from '@angular/core';
import { ProductoComponent } from './producto/producto.component';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [RouterModule.forChild([
      { path: 'producto', component: ProductoComponent }
  ])],
  exports: [RouterModule]
})
export class InventarioRouteModule { }
