import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {InputNumberModule} from 'primeng/inputnumber';
import {ButtonModule} from 'primeng/button';
import {CheckboxModule} from 'primeng/checkbox';
import {InputSwitchModule} from 'primeng/inputswitch';


@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    CardModule,
    InputTextModule,
    InputNumberModule,
    ButtonModule,
    CheckboxModule,
    InputSwitchModule
  ]
})
export class PrimeNgModule { }
