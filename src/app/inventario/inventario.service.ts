import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urlRest } from '../constantes/constantes';
import { Producto, Productos } from './interfaces-inventario';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  ///api/producto
  constructor(private http: HttpClient) { }

  buscarProducto(nombre: string,inventariable:boolean,descripcion:string,min:number,max:number): Observable<Productos> {

    // let nombre = req.query.nombre;
    // let inventariable = req.query.inventariable;
    // let descripcion = req.query.descripcion;
    // let precioMin = req.query.precioMin;
    // let precioMax = req.query.precioMax;


    const url = `${urlRest}api/producto`;
    return this.http.get<Productos>(url);

  }
  guardaProducto(producto: Producto): Observable<Productos> {

    return this.http.post<Productos>(`${urlRest}api/producto`, producto);
  }
}
