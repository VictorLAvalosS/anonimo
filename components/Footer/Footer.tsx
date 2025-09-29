'use client';

import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const serviciosLinks = [
    'Plomería', 'Electricidad', 'Carpintería', 'Pintura', 
    'Limpieza', 'Jardinería', 'Soldadura', 'Albañilería'
  ];

  const empresaLinks = [
    'Sobre nosotros', 'Cómo funciona', 'Testimonios', 
    'Blog', 'Prensa', 'Trabaja con nosotros'
  ];

  const legalLinks = [
    'Términos y condiciones', 'Política de privacidad', 
    'Política de cookies', 'Resolución de disputas'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold text-white mb-4">Servineo</div>
            <p className="text-gray-300 mb-6 max-w-md">
              La plataforma líder para conectar hogares con profesionales calificados 
              en Cochabamba. Calidad garantizada y servicio confiable.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-[#1AA7ED] mr-3" />
                <span className="text-gray-300">Cochabamba, Bolivia</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-[#1AA7ED] mr-3" />
                <span className="text-gray-300">+591 4 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-[#1AA7ED] mr-3" />
                <span className="text-gray-300">contacto@servineo.bo</span>
              </div>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              {serviciosLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2">
              {empresaLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* App Download Section */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Descarga nuestra app</h3>
              <p className="text-gray-300 text-sm">
                Gestiona tus servicios desde tu móvil
              </p>
            </div>
            <div className="flex space-x-4">
              <div className="bg-black rounded-lg p-3 cursor-pointer hover:bg-gray-800 transition-colors">
                <div className="text-xs text-gray-300">Disponible en</div>
                <div className="font-semibold">App Store</div>
              </div>
              <div className="bg-black rounded-lg p-3 cursor-pointer hover:bg-gray-800 transition-colors">
                <div className="text-xs text-gray-300">Consíguelo en</div>
                <div className="font-semibold">Google Play</div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex space-x-6 mb-6 md:mb-0">
              <h3 className="text-lg font-semibold">Síguenos:</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-[#1AA7ED] transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-300 hover:text-[#1AA7ED] transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-300 hover:text-[#1AA7ED] transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Tu email para noticias"
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#1AA7ED]"
              />
              <button className="bg-[#2B31E0] hover:bg-[#1f25b8] px-6 py-2 rounded-lg font-medium transition-colors">
                Suscribirse
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Servineo. Todos los derechos reservados.
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <span>Hecho con ❤️ en Cochabamba</span>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Sistema operativo</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}