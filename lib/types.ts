export interface Servicio {
  id: string;
  nombre: string;
  icono: string;
  descripcion: string;
  popularidad: number;
}

export interface TrabajoReciente {
  id: string;
  titulo: string;
  descripcion: string;
  imagen: string;
  precio: string;
  ubicacion: string;
  calificacion: number;
  fecha: string;
  categoria: string;
}

export interface Fixer {
  id: string;
  nombre: string;
  servicio: string;
  lat: number;
  lng: number;
  calificacion: number;
  disponible: boolean;
}

export interface SlideCarrusel {
  id: string;
  titulo: string;
  subtitulo: string;
  imagen: string;
  cta: string;
}