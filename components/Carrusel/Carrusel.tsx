'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { slidesCarrusel } from '@/lib/mockData';

export default function Carrusel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesCarrusel.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slidesCarrusel.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slidesCarrusel.length) % slidesCarrusel.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Inspiración para tu hogar
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre ideas y proyectos realizados por nuestros profesionales expertos
          </p>
        </div>

        <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slidesCarrusel.map((slide, index) => (
              <div key={slide.id} className="w-full flex-shrink-0 relative">
                <div className="flex flex-col md:flex-row items-center min-h-[400px]">
                  <div className="w-full md:w-1/2 p-8 md:p-12">
                    <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
                      {slide.titulo}
                    </h3>
                    <p className="text-lg text-gray-600 mb-6">
                      {slide.subtitulo}
                    </p>
                    <Button className="bg-[#2B31E0] hover:bg-[#1f25b8] px-6 py-3">
                      {slide.cta}
                    </Button>
                  </div>
                  <div className="w-full md:w-1/2">
                    <div 
                      className="h-64 md:h-96 bg-cover bg-center"
                      style={{ backgroundImage: `url(${slide.imagen})` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slidesCarrusel.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide 
                    ? 'bg-[#2B31E0]' 
                    : 'bg-white/60 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}