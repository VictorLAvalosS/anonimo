import { Servicio, TrabajoReciente, Fixer, SlideCarrusel } from './types';

export const servicios: Servicio[] = [
  {
    id: '1',
    nombre: 'Plomería',
    icono: '🔧',
    descripcion: 'Instalaciones, reparaciones y mantenimiento',
    popularidad: 95
  },
  {
    id: '2',
    nombre: 'Electricidad',
    icono: '⚡',
    descripcion: 'Instalaciones eléctricas y reparaciones',
    popularidad: 90
  },
  {
    id: '3',
    nombre: 'Carpintería',
    icono: '🔨',
    descripcion: 'Muebles, puertas y trabajos en madera',
    popularidad: 85
  },
  {
    id: '4',
    nombre: 'Pintura',
    icono: '🎨',
    descripcion: 'Pintura interior y exterior',
    popularidad: 80
  },
  {
    id: '5',
    nombre: 'Limpieza',
    icono: '🧽',
    descripcion: 'Limpieza residencial y comercial',
    popularidad: 88
  },
  {
    id: '6',
    nombre: 'Jardinería',
    icono: '🌱',
    descripcion: 'Mantenimiento y diseño de jardines',
    popularidad: 75
  }
];

export const trabajosRecientes: TrabajoReciente[] = [
  {
    id: '1',
    titulo: 'Reparación de grifo de cocina',
    descripcion: 'Cambio de grifo monomando en cocina moderna',
    imagen: 'https://images.pexels.com/photos/5824900/pexels-photo-5824900.jpeg?auto=compress&cs=tinysrgb&w=400',
    precio: 'Bs. 150',
    ubicacion: 'Zona Norte, Cochabamba',
    calificacion: 4.8,
    fecha: 'Hace 2 días',
    categoria: 'Plomería'
  },
  {
    id: '2',
    titulo: 'Instalación eléctrica completa',
    descripcion: 'Instalación de puntos eléctricos en departamento nuevo',
    imagen: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=400',
    precio: 'Bs. 2,500',
    ubicacion: 'Cala Cala, Cochabamba',
    calificacion: 5.0,
    fecha: 'Hace 1 semana',
    categoria: 'Electricidad'
  },
  {
    id: '3',
    titulo: 'Mueble de cocina personalizado',
    descripción: 'Diseño y fabricación de muebles de cocina',
    imagen: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=400',
    precio: 'Bs. 3,800',
    ubicacion: 'Quillacollo, Cochabamba',
    calificacion: 4.9,
    fecha: 'Hace 3 días',
    categoria: 'Carpintería'
  },
  {
    id: '4',
    titulo: 'Pintura de sala y comedor',
    descripcion: 'Pintura con colores modernos y acabado premium',
    imagen: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=400',
    precio: 'Bs. 800',
    ubicacion: 'Tupuraya, Cochabamba',
    calificacion: 4.7,
    fecha: 'Hace 5 días',
    categoria: 'Pintura'
  },
  {
    id: '5',
    titulo: 'Limpieza post construcción',
    descripcion: 'Limpieza profunda después de remodelación',
    imagen: 'https://images.pexels.com/photos/4239092/pexels-photo-4239092.jpeg?auto=compress&cs=tinysrgb&w=400',
    precio: 'Bs. 400',
    ubicacion: 'Sacaba, Cochabamba',
    calificacion: 4.6,
    fecha: 'Hace 1 día',
    categoria: 'Limpieza'
  },
  {
    id: '6',
    titulo: 'Diseño de jardín residencial',
    descripcion: 'Landscaping completo con plantas nativas',
    imagen: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=400',
    precio: 'Bs. 1,200',
    ubicacion: 'Tiquipaya, Cochabamba',
    calificacion: 4.8,
    fecha: 'Hace 4 días',
    categoria: 'Jardinería'
  },
  {
    id: '7',
    titulo: 'Reparación de techo',
    descripcion: 'Impermeabilización y reparación de goteras',
    imagen: 'https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=400',
    precio: 'Bs. 600',
    ubicacion: 'Colcapirhua, Cochabamba',
    calificacion: 4.5,
    fecha: 'Hace 6 días',
    categoria: 'Construcción'
  },
  {
    id: '8',
    titulo: 'Instalación de aire acondicionado',
    descripcion: 'Instalación completa con garantía',
    imagen: 'https://images.pexels.com/photos/733842/pexels-photo-733842.jpeg?auto=compress&cs=tinysrgb&w=400',
    precio: 'Bs. 350',
    ubicacion: 'Zona Sud, Cochabamba',
    calificacion: 4.9,
    fecha: 'Hace 2 días',
    categoria: 'Climatización'
  },
  {
    id: '9',
    titulo: 'Soldadura de portón',
    descripcion: 'Reparación y refuerzo de estructura metálica',
    imagen: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=400',
    precio: 'Bs. 280',
    ubicacion: 'Vinto, Cochabamba',
    calificacion: 4.4,
    fecha: 'Hace 1 semana',
    categoria: 'Soldadura'
  },
  {
    id: '10',
    titulo: 'Instalación de pisos laminados',
    descripcion: 'Colocación profesional con acabado perfecto',
    imagen: 'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=400',
    precio: 'Bs. 1,800',
    ubicacion: 'Cercado, Cochabamba',
    calificacion: 5.0,
    fecha: 'Hace 3 días',
    categoria: 'Pisos'
  }
];

export const fixers: Fixer[] = [
  {
    id: '1',
    nombre: 'Carlos Mendoza',
    servicio: 'Plomería',
    lat: -17.3935,
    lng: -66.1570,
    calificacion: 4.8,
    disponible: true
  },
  {
    id: '2',
    nombre: 'Ana Gutierrez',
    servicio: 'Electricidad',
    lat: -17.4139,
    lng: -66.1653,
    calificacion: 4.9,
    disponible: true
  },
  {
    id: '3',
    nombre: 'Luis Vargas',
    servicio: 'Carpintería',
    lat: -17.3689,
    lng: -66.1520,
    calificacion: 4.7,
    disponible: false
  },
  {
    id: '4',
    nombre: 'María Torres',
    servicio: 'Pintura',
    lat: -17.4012,
    lng: -66.1590,
    calificacion: 4.6,
    disponible: true
  },
  {
    id: '5',
    nombre: 'Roberto Silva',
    servicio: 'Limpieza',
    lat: -17.3845,
    lng: -66.1480,
    calificacion: 4.8,
    disponible: true
  }
];

export const slidesCarrusel: SlideCarrusel[] = [
  {
    id: '1',
    titulo: '¡Encuentra expertos cerca de ti!',
    subtitulo: 'Más de 1000 profesionales verificados en Cochabamba',
    imagen: 'https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=800',
    cta: 'Explorar servicios'
  },
  {
    id: '2',
    titulo: 'Repara tu hogar con confianza',
    subtitulo: 'Profesionales calificados y con garantía',
    imagen: 'https://images.pexels.com/photos/4792385/pexels-photo-4792385.jpeg?auto=compress&cs=tinysrgb&w=800',
    cta: 'Ver trabajos'
  },
  {
    id: '3',
    titulo: 'Presupuestos gratuitos',
    subtitulo: 'Recibe cotizaciones sin compromiso',
    imagen: 'https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=800',
    cta: 'Solicitar presupuesto'
  },
  {
    id: '4',
    titulo: 'Pagos seguros y flexibles',
    subtitulo: 'Paga cuando el trabajo esté terminado',
    imagen: 'https://images.pexels.com/photos/6290209/pexels-photo-6290209.jpeg?auto=compress&cs=tinysrgb&w=800',
    cta: 'Conocer más'
  },
  {
    id: '5',
    titulo: 'Únete como profesional',
    subtitulo: 'Aumenta tus ingresos trabajando con nosotros',
    imagen: 'https://images.pexels.com/photos/5691511/pexels-photo-5691511.jpeg?auto=compress&cs=tinysrgb&w=800',
    cta: 'Registrarse'
  }
];

export const busquedasPopulares = [
  'Plomero',
  'Electricista',
  'Pintor',
  'Carpintero',
  'Limpieza',
  'Jardinería',
  'Soldador',
  'Albañil'
];