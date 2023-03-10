export interface Productos {
    productos?: Producto[];
}

export interface Producto {
    id?: number;
    nombre?: string;
    descripcion?: string;
    tipo?: string;
    precio?: string;
    stock?: string;
    imagen?: string;
    sucursal?: string;
    volumen?: number;
    peso?: number;
    inventariable?: boolean;
    codigo?: string;
    cantidad?: number;
}
