'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Buscador from '@/components/Buscador';
import Carrusel from '@/components/Carrusel';
import Mapa from '@/components/Mapa';
import TrabajosRecientes from '@/components/TrabajosRecientes';
import ListaServicios from '@/components/ListaServicios';
import Footer from '@/components/Footer';

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    // Mock login
    setIsAuthenticated(true);
    console.log('Usuario iniciado sesión');
  };

  const handleLogout = () => {
    // Mock logout
    setIsAuthenticated(false);
    console.log('Usuario cerró sesión');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        isAuthenticated={isAuthenticated}
        onLogin={handleLogin}
        onLogout={handleLogout}
      />
      
      <main className="mb-16 md:mb-0">
        <Buscador />
        <Carrusel />
        <Mapa />
        <TrabajosRecientes />
        <ListaServicios />
      </main>
      
      <Footer />
    </div>
  );
}