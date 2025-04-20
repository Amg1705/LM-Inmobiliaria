export interface Propiedad {
    id: number;
    titulo: string;
    descripcion: string;
    precio: number;
    ubicacion: string;
    imagen: string;
    habitaciones: number;
    baños: number;
    superficie: number;
    añoConstruccion: number;
    estado: string;
    caracteristicas: string[];
  }