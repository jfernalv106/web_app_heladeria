import { Component, OnInit } from '@angular/core';
import { InventarioService } from 'src/app/inventario/inventario.service';
import { Producto } from '../../inventario/interfaces-inventario';

@Component({
    selector: 'app-venta',
    templateUrl: './venta.component.html',
    styleUrls: ['./venta.component.scss'],
})
export class VentaComponent implements OnInit {
    total: number = 0;
    iva: number = 0;
    neto: number = 0;
    descuento:number=0;
    producto: Producto = {};

    carrito: Producto[] = [];
    sugerencias: Producto[] = [];

    nombreProducto: string = '';

    constructor(private inventarioService: InventarioService) {}

    ngOnInit(): void {
        console.log('Venta');
    }

    agregar(prod: Producto) {
        console.log(prod);
        console.log('La Wea');
        this.carrito.push(prod);
        this.calcular();
    }
    quitar(pr: Producto) {
        this.carrito = this.carrito.filter((i) => i !== pr);
        this.calcular();
    }
    test(valor:any){
console.log(valor);
    }
    calcular() {
        this.total = 0;
        this.iva = 0;
        this.neto = 0;
        for (const compra of this.carrito) {
            this.total += parseInt(compra.precio ?? '1')*(compra.cantidad??1);
        }
        this.total=this.total-this.descuento;
        this.iva = parseInt(`${this.total * 0.19}`);
        this.neto = parseInt(`${this.total * 0.89}`);
        console.log(this.total);
    }

    autoComplete(event: any) {
        //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
        let filtered: Producto[] = [];
        let query = event.query;
        this.inventarioService.buscarProducto(query, true, '', 0, 0).subscribe(
            (prod) => {
                filtered = prod.productos ?? [];
                this.sugerencias = filtered;
            },
            (err) => {
                // filtered = [];
            }
        );
    }
    pagar(){
        
    }
}
