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
                    { label: 'Venta', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
                    { label: 'Arqueo', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
                ]
            },
            {
                label: 'Inventario',
                items: [
                    { label: 'Productos', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/formlayout'] },
                    { label: 'Stock', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/input'] },
             
                ]
            },
            {
                label: 'administración',
                items: [
                    { label: 'Empleados', icon: 'pi pi-fw pi-eye', routerLink: ['/blocks'], badge: 'NEW' },
                    { label: 'Asistencia', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/input'] },
                ]
            },
           
       
        ];
    }
}
