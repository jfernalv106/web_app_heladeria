import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urlRest } from '../constantes/constantes';
import { Venta } from './interfaces-caja';

@Injectable({
  providedIn: 'root'
})
export class CajaService {

  constructor(private http: HttpClient) { }
  
  guardaVenta(venta: Venta): Observable<Venta> {

    return this.http.post<Venta>(`${urlRest}api/venta`, venta);
  }
}
