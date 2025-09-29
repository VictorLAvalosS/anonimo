'use client';

import { ChevronRight } from 'lucide-react';
import { servicios } from '@/lib/mockData';

export default function ListaServicios() {
  return (
    <section id="servicios" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Servicios disponibles
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Encuentra el profesional perfecto para cualquier trabajo en tu hogar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {servicios.map((servicio) => (
            <div 
              key={servicio.id}
              className="group bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-[#2B31E0]/20 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl mb-4">{servicio.icono}</div>
                <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-[#2B31E0] transition-colors" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#2B31E0] transition-colors">
                {servicio.nombre}
              </h3>
              
              <p className="text-gray-600 mb-4">
                {servicio.descripcion}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  {servicio.popularidad}% de demanda
                </div>
                <div className="flex-1 mx-3">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-[#2B31E0] to-[#1AA7ED] h-2 rounded-full transition-all duration-500"
                      style={{ width: `${servicio.popularidad}%` }}
                    />
                  </div>
                </div>
                <div className="text-sm font-medium text-[#2B31E0]">
                  Ver más
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-[#2B31E0] to-[#1AA7ED] rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            ¿No encuentras lo que buscas?
          </h3>
          <p className="text-lg mb-6 text-blue-100">
            Contáctanos y te ayudamos a encontrar el profesional perfecto para tu proyecto
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#2B31E0] px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
              Solicitar servicio personalizado
            </button>
            <button className="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
              Hablar con un asesor
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}