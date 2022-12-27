import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';

import { InventarioRouteModule } from './inventario/inventario-route.module';
import { AdministracionRouteModule } from './administracion/administracion-route.module';
import { CajaRouteModule } from './caja/caja-route.module';

@NgModule({
    declarations: [
        AppComponent, 
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,

        InventarioRouteModule,
        AdministracionRouteModule,
        CajaRouteModule,
        
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
      
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
