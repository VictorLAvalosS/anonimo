'use client';

import { useState, useEffect } from 'react';
import { Search, MapPin, ArrowUpDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { busquedasPopulares, servicios } from '@/lib/mockData';
import { Input } from '@/components/ui/input';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';

export default function Buscador() {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState<string>('Todas las categorías');
  const [distance, setDistance] = useState<string>('Cualquier distancia');
  const [budget, setBudget] = useState<string>('Cualquier precio');
  const [rating, setRating] = useState<string>('Cualquier calificación');
  const [showFilters, setShowFilters] = useState<boolean>(false);
  // Persistencia del estado de filtros entre recargas
  useEffect(() => {
    try {
      const stored = localStorage.getItem('buscador_showFilters');
      if (stored !== null) {
        setShowFilters(stored === 'true');
      }
    } catch (e) {
      // noop
    }
  }, []);
  
  useEffect(() => {
    try {
      localStorage.setItem('buscador_showFilters', String(showFilters));
    } catch (e) {
      // noop
    }
  }, [showFilters]);
  const handleSearch = () => {
    console.log({ searchQuery, location, category, distance, budget, rating });
  };

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
              <Input
                type="text"
                placeholder="¿Qué servicio necesitas?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 h-12 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2B31E0] focus:border-transparent"
              />
            </div>

            <div className="md:w-64 relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Ubicación"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full pl-10 pr-4 h-12 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2B31E0] focus:border-transparent"
              />
            </div>

            {/* Botón verde (ArrowUpDown) ahora muestra/oculta filtros */}
            <Button
              type="button"
              aria-label="Mostrar/ocultar filtros"
              onClick={() => setShowFilters((v) => !v)}
              className="bg-gray-100 hover:bg-gray-200 w-12 h-12 rounded-lg text-gray-700"
            >
              <ArrowUpDown className="h-5 w-5" />
            </Button>

            {/* Botón de filtros anterior eliminado según solicitud */}
            {/* (SlidersHorizontal) */}

            <Button
              onClick={handleSearch}
              className="bg-[#2B31E0] hover:bg-[#1f25b8] px-8 h-12 text-white rounded-lg font-medium"
            >
              Buscar
            </Button>
          </div>

          {/* Filtros avanzados */}
          {showFilters && (
            <div className="mt-2 border rounded-xl p-4 text-left">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-1">Categoría</p>
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger className="h-10">
                      <SelectValue placeholder="Todas las categorías" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Todas las categorías">Todas las categorías</SelectItem>
                      {servicios.map((s) => (
                        <SelectItem key={s.id} value={s.nombre}>{s.nombre}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-700 mb-1">Distancia</p>
                  <Select value={distance} onValueChange={setDistance}>
                    <SelectTrigger className="h-10">
                      <SelectValue placeholder="Cualquier distancia" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Cualquier distancia">Cualquier distancia</SelectItem>
                      <SelectItem value="1 km">1 km</SelectItem>
                      <SelectItem value="5 km">5 km</SelectItem>
                      <SelectItem value="10 km">10 km</SelectItem>
                      <SelectItem value="20 km">20 km</SelectItem>
                      <SelectItem value="Toda la ciudad">Toda la ciudad</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-700 mb-1">Presupuesto</p>
                  <Select value={budget} onValueChange={setBudget}>
                    <SelectTrigger className="h-10">
                      <SelectValue placeholder="Cualquier precio" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Cualquier precio">Cualquier precio</SelectItem>
                      <SelectItem value="< Bs. 100">Menos de Bs. 100</SelectItem>
                      <SelectItem value="Bs. 100 - 500">Bs. 100 - 500</SelectItem>
                      <SelectItem value="Bs. 500 - 1500">Bs. 500 - 1500</SelectItem>
                      <SelectItem value="> Bs. 1500">Más de Bs. 1500</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-700 mb-1">Calificación</p>
                  <Select value={rating} onValueChange={setRating}>
                    <SelectTrigger className="h-10">
                      <SelectValue placeholder="Cualquier calificación" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Cualquier calificación">Cualquier calificación</SelectItem>
                      <SelectItem value="4★+">4★+</SelectItem>
                      <SelectItem value="4.5★+">4.5★+</SelectItem>
                      <SelectItem value="5★">5★</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          )}

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