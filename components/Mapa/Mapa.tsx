'use client';

import { useState } from 'react';
import { MapPin, Star, Clock, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { fixers } from '@/lib/mockData';
import { Fixer } from '@/lib/types';

export default function Mapa() {
  const [selectedFixer, setSelectedFixer] = useState<Fixer | null>(null);

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Profesionales cerca de ti
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Encuentra expertos disponibles en tu zona de Cochabamba
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Mock Map */}
            <div className="lg:w-2/3 relative bg-gray-200 h-96 lg:h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <MapPin className="h-12 w-12 mx-auto mb-4 text-[#2B31E0]" />
                  <p className="text-lg font-medium">Mapa de Cochabamba</p>
                  <p className="text-sm">Mostrando profesionales disponibles</p>
                </div>
              </div>

              {/* Mock Markers */}
              {fixers.map((fixer, index) => (
                <button
                  key={fixer.id}
                  onClick={() => setSelectedFixer(fixer)}
                  className={`absolute w-8 h-8 rounded-full border-2 border-white shadow-lg transition-all hover:scale-110 ${
                    fixer.disponible ? 'bg-green-500' : 'bg-gray-400'
                  }`}
                  style={{
                    left: `${20 + (index * 15)}%`,
                    top: `${30 + (index * 10)}%`,
                  }}
                >
                  <div className="w-full h-full rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </button>
              ))}

              {/* Selected Fixer Popup */}
              {selectedFixer && (
                <div className="absolute top-4 left-4 bg-white p-4 rounded-lg shadow-xl max-w-xs">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-semibold text-gray-900">{selectedFixer.nombre}</h4>
                      <p className="text-sm text-gray-600">{selectedFixer.servicio}</p>
                    </div>
                    <button
                      onClick={() => setSelectedFixer(null)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      ×
                    </button>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    <span className="text-sm font-medium">{selectedFixer.calificacion}</span>
                    <span className="text-xs text-gray-500 ml-1">(125 reseñas)</span>
                  </div>

                  <div className="flex items-center mb-3">
                    <Clock className="h-4 w-4 text-gray-400 mr-2" />
                    <span className="text-sm text-gray-600">
                      {selectedFixer.disponible ? 'Disponible ahora' : 'No disponible'}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <Button size="sm" className="w-full bg-[#2B31E0] hover:bg-[#1f25b8]">
                      Ver perfil
                    </Button>
                    <Button size="sm" variant="outline" className="w-full">
                      <Phone className="h-4 w-4 mr-2" />
                      Contactar
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* Professionals List */}
            <div className="lg:w-1/3 p-6 bg-gray-50">
              <h3 className="font-semibold text-lg mb-4">Profesionales disponibles</h3>
              
              <div className="space-y-4">
                {fixers.map((fixer) => (
                  <div 
                    key={fixer.id}
                    className={`p-4 bg-white rounded-lg shadow-sm border cursor-pointer transition-all hover:shadow-md ${
                      selectedFixer?.id === fixer.id ? 'border-[#2B31E0]' : 'border-gray-200'
                    }`}
                    onClick={() => setSelectedFixer(fixer)}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-medium text-gray-900">{fixer.nombre}</h4>
                        <p className="text-sm text-gray-600">{fixer.servicio}</p>
                      </div>
                      <div className={`w-3 h-3 rounded-full ${
                        fixer.disponible ? 'bg-green-500' : 'bg-gray-400'
                      }`} />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 mr-1" />
                        <span className="text-sm font-medium">{fixer.calificacion}</span>
                      </div>
                      <span className="text-xs text-gray-500">
                        {fixer.disponible ? 'Disponible' : 'Ocupado'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button className="w-full mt-6" variant="outline">
                Ver todos los profesionales
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}