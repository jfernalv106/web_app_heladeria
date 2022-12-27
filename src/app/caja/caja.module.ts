import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VentaComponent } from './venta/venta.component';
import { CajaRouteModule } from './caja-route.module';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    VentaComponent
  ],
  imports: [
    CommonModule,
    CajaRouteModule,
    PrimeNgModule,
    FormsModule
  ],
  exports:[
    VentaComponent
  ]
})
export class CajaModule { }
