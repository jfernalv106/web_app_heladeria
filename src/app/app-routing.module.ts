import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppLayoutComponent } from "./layout/app.layout.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppLayoutComponent,
                children: [
                    { path: 'inventario', loadChildren: () => import('./inventario/inventario.module').then(m => m.InventarioModule) },
                    { path: 'caja', loadChildren: () => import('./caja/caja.module').then(m => m.CajaModule) },
                   

                ]
            },
         
            { path: '**', redirectTo: '/' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
