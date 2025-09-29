'use client';

import { useState } from 'react';
import { Search, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { busquedasPopulares } from '@/lib/mockData';

export default function Buscador() {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');

  return (
    <section className="bg-gradient-to-br from-[#2B31E0] to-[#1AA7ED] py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Encuentra el profesional perfecto
        </h1>
        <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Conectamos tu hogar con expertos verificados en Cochabamba
        </p>

        {/* Search Form */}
        <div className="bg-white rounded-2xl p-6 shadow-2xl">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="¿Qué servicio necesitas?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2B31E0] focus:border-transparent"
              />
            </div>
            
            <div className="md:w-64 relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Ubicación"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2B31E0] focus:border-transparent"
              />
            </div>
            
            <Button 
              className="bg-[#2B31E0] hover:bg-[#1f25b8] px-8 py-3 text-white rounded-lg font-medium"
            >
              Buscar
            </Button>
          </div>

          {/* Popular Searches */}
          <div>
            <p className="text-sm text-gray-600 mb-3">Búsquedas populares:</p>
            <div className="flex flex-wrap gap-2">
              {busquedasPopulares.map((busqueda, index) => (
                <button
                  key={index}
                  onClick={() => setSearchQuery(busqueda)}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                >
                  {busqueda}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mt-12 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white">1,000+</div>
            <div className="text-sm md:text-base text-blue-100">Profesionales</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white">5,000+</div>
            <div className="text-sm md:text-base text-blue-100">Trabajos realizados</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white">4.8★</div>
            <div className="text-sm md:text-base text-blue-100">Calificación promedio</div>
          </div>
        </div>
      </div>
    </section>
  );
}