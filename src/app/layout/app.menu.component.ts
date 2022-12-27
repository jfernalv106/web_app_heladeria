import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Caja',
                items: [
                    { label: 'Venta', icon: 'pi pi-fw pi-cart-plus', routerLink: ['/caja/venta'] },
                    { label: 'Arqueo', icon: 'pi pi-fw pi-calculator', routerLink: ['/caja/arqueo'] }
                ]
            },
            {
                label: 'Inventario',
                items: [
                    { label: 'Productos', icon: 'pi pi-fw pi-box', routerLink: ['/inventario/producto'] },
                    { label: 'Stock', icon: 'pi pi-fw pi-check-square', routerLink: ['/inventario/stock'] },
             
                ]
            },
            {
                label: 'administración',
                items: [
                    { label: 'Empleados', icon: 'pi pi-fw pi-user-plus', routerLink: ['/administracion/usuarios'] },
                    { label: 'Asistencia', icon: 'pi pi-fw pi-users', routerLink: ['administracion/asistencia'] },
                ]
            },
           
       
        ];
    }
}
