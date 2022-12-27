import { NgModule } from '@angular/core';
import { VentaComponent } from './venta/venta.component';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [RouterModule.forChild([
      { path: 'venta', component: VentaComponent }
  ])],
  exports: [RouterModule]
})
export class CajaRouteModule { }
