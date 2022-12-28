import { Component, OnInit } from '@angular/core';
import { InventarioService } from 'src/app/inventario/inventario.service';
import Swal from 'sweetalert2';
import { Producto } from '../../inventario/interfaces-inventario';
import { CajaService } from '../caja.service';
import { Venta } from '../interfaces-caja';

@Component({
    selector: 'app-venta',
    templateUrl: './venta.component.html',
    styleUrls: ['./venta.component.scss'],
})
export class VentaComponent implements OnInit {
    total: number = 0;
    iva: number = 0;
    neto: number = 0;
    descuento: number = 0;
    producto: Producto = {};

    carrito: Producto[] = [];
    venta: Venta;
    sugerencias: Producto[] = [];

    nombreProducto: string = '';

    constructor(private inventarioService: InventarioService,private cajaService:CajaService) {
        this.venta = { venta_detalle: [] };
    }
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }

    agregar(prod: Producto) {
        prod.cantidad = 1;
        this.carrito.push(prod);
        this.calcular();
    }
    quitar(pr: Producto) {
        this.carrito = this.carrito.filter((i) => i !== pr);
        this.calcular();
    }

    calcular() {
        this.total = 0;
        this.iva = 0;
        this.neto = 0;
        for (const compra of this.carrito) {
            this.total +=
                parseInt(compra.precio ?? '1') * (compra.cantidad ?? 1);
        }
        this.total = this.total - this.descuento;
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
    pagar() {
        this.venta = {
            descripcion: '',
            descuento: this.descuento,
            estado: 'VALIDA',
            fecha_entrega: new Date(),
            fecha_venta: new Date(),
            rut_usuario: '11111-1',
            sucursal: 1,
            total: this.total,
            venta_detalle: [],
        };
        this.carrito?.forEach(async (arc) => {
            this.venta.venta_detalle?.push({
                producto: arc.id,
                cantidad: arc.cantidad,
            });
        });

        this.cajaService.guardaVenta(this.venta).subscribe(
            (rb) => {
              Swal.fire(
                'Registrada',
                'Venta realizada.',
                'success'
              );
              this.producto={sucursal:"1",imagen:''};
            
            },
            (err) => {
            Swal.fire(
                '¡Aviso!',
                'ha ocurrido un error al generar la venta.',
                'warning'
              )
            }
          );
    }
}
