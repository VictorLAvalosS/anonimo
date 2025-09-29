'use client';

import { Star, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { trabajosRecientes } from '@/lib/mockData';

export default function TrabajosRecientes() {
  return (
    <section id="trabajos" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Trabajos recientes realizados
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre los proyectos que nuestros profesionales han completado recientemente
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {trabajosRecientes.map((trabajo) => (
            <div 
              key={trabajo.id} 
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden group"
            >
              <div className="relative">
                <img
                  src={trabajo.imagen}
                  alt={trabajo.titulo}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3">
                  <span className="bg-[#2B31E0] text-white text-xs px-2 py-1 rounded-full">
                    {trabajo.categoria}
                  </span>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                  {trabajo.titulo}
                </h3>
                
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {trabajo.descripcion}
                </p>
                
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    <span className="text-sm font-medium">{trabajo.calificacion}</span>
                  </div>
                  <span className="text-lg font-bold text-[#2B31E0]">
                    {trabajo.precio}
                  </span>
                </div>
                
                <div className="flex items-center text-xs text-gray-500 mb-2">
                  <MapPin className="h-3 w-3 mr-1" />
                  <span className="truncate">{trabajo.ubicacion}</span>
                </div>
                
                <div className="flex items-center text-xs text-gray-500 mb-4">
                  <Clock className="h-3 w-3 mr-1" />
                  <span>{trabajo.fecha}</span>
                </div>
                
                <Button 
                  size="sm" 
                  className="w-full bg-[#2B31E0] hover:bg-[#1f25b8]"
                >
                  Ver detalles
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            className="px-8 py-3 border-[#2B31E0] text-[#2B31E0] hover:bg-[#2B31E0] hover:text-white"
          >
            Ver más trabajos
          </Button>
        </div>
      </div>
    </section>
  );
}