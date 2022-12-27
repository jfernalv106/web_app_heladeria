import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VentaComponent } from './venta/venta.component';
import { CajaRouteModule } from './caja-route.module';



@NgModule({
  declarations: [
    VentaComponent
  ],
  imports: [
    CommonModule,
    CajaRouteModule
  ],
  exports:[
    VentaComponent
  ]
})
export class CajaModule { }
