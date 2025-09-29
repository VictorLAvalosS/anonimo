'use client';

import { useState } from 'react';
import { Search, Menu, X, User, LogIn, LogOut, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';

interface HeaderProps {
  isAuthenticated: boolean;
  onLogin: () => void;
  onLogout: () => void;
}

export default function Header({ isAuthenticated, onLogin, onLogout }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Ofertas de trabajo', href: '#ofertas' },
    { label: 'Ayuda', href: '#ayuda' }
  ];

  return (
    <>
      {/* Desktop Header */}
      <header className="hidden md:block bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo - Izquierda */}
            <div className="flex items-center">
              <div className="flex items-center">
                <Logo 
                  src="/icon.png" 
                  alt="Servineo Logo" 
                  size={60}
                  className="mr-3" 
                />
              </div>
            </div>

            {/* Navigation - Centro */}
            <nav className="flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-600 hover:text-[#2B31E0] px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Auth Buttons - Derecha */}
            <div className="flex items-center space-x-3">
              {isAuthenticated ? (
                <>
                  <Button variant="ghost" size="sm" className="relative">
                    <Bell className="h-4 w-4" />
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                      3
                    </span>
                  </Button>
                  <Button variant="ghost" size="sm">
                    <User className="h-4 w-4 mr-2" />
                    Mi perfil
                  </Button>
                  <Button variant="outline" size="sm" onClick={onLogout}>
                    <LogOut className="h-4 w-4 mr-2" />
                    Salir
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="ghost" size="sm" onClick={onLogin}>
                    <LogIn className="h-4 w-4 mr-2" />
                    Iniciar sesión
                  </Button>
                  <Button className="bg-[#2B31E0] hover:bg-[#1f25b8]" size="sm">
                    Registrarse
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Header - Solo logo y auth */}
      <header className="md:hidden bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Logo 
                src="/logo.svg" 
                alt="Servineo Logo" 
                size={32}
                className="mr-1" 
              />
            </div>
            
            {/* Auth Buttons */}
            <div className="flex items-center space-x-2">
              {isAuthenticated ? (
                <>
                  <Button variant="ghost" size="sm" className="relative">
                    <Bell className="h-4 w-4" />
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-3 w-3"></span>
                  </Button>
                  <Button variant="ghost" size="sm">
                    <User className="h-4 w-4" />
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="ghost" size="sm" onClick={onLogin} className="text-xs px-2">
                    Iniciar sesión
                  </Button>
                  <Button className="bg-[#2B31E0] hover:bg-[#1f25b8] text-xs px-3" size="sm">
                    Registrarse
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 z-50">
        <div className="flex items-center justify-around">
          <a href="#" className="flex flex-col items-center py-2 text-[#2B31E0]">
            <div className="text-xs font-medium">Inicio</div>
          </a>
          <a href="#servicios" className="flex flex-col items-center py-2 text-gray-600">
            <div className="text-xs">Servicios</div>
          </a>
          <a href="#ofertas" className="flex flex-col items-center py-2 text-gray-600">
            <div className="text-xs">Ofertas</div>
          </a>
          <a href="#ayuda" className="flex flex-col items-center py-2 text-gray-600">
            <div className="text-xs">Ayuda</div>
          </a>
          {isAuthenticated && (
            <a href="#perfil" className="flex flex-col items-center py-2 text-gray-600">
              <div className="text-xs">Perfil</div>
            </a>
          )}
        </div>
      </div>
    </>
  );
}