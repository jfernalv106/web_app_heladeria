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

    carrito: Producto[] = [];

    nombreProducto: string = '';

    constructor(private inventarioService: InventarioService) {}

    ngOnInit(): void {
        console.log('Venta');
    }

     agregar() {
        this.inventarioService.buscarProducto('', true, '', 0, 0).subscribe(
            (prod) => {
                this.carrito = prod.productos ?? [];
                this.calcular();
                
              },
              (err) => {
                this.carrito = [];
                this.calcular();
            }
        );
    }
    quitar(producto: Producto) {
      this.carrito=this.carrito.filter((i) => i !== producto);
      this.calcular();
    }
    calcular() {
        this.total = 0;
        this.iva = 0;
        this.neto = 0;
        for (const compra of this.carrito) {
            this.total += parseInt(compra.precio ?? '0');
          }
          this.iva = parseInt(`${this.total * 0.19}`);
          this.neto = parseInt(`${this.total * 0.89}`);
          console.log(this.total);
    }
}
