export interface VentaDetalle {
    id?: number;
    venta?: number;
    producto?: number;
    cantidad?: number;
  }

  export interface Venta {
    id?: number;
    rut_usuario?: string;
    fecha_venta?: Date;
    fecha_entrega?: Date;
    estado?: string;
    sucursal?: number;
    total?: number;
    descuento?: number;
    descripcion?: string;
    venta_detalle?:VentaDetalle[];
  }