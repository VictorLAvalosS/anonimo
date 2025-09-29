'use client';

import Image from 'next/image';

interface LogoProps {
  src: string;
  alt?: string;
  size?: number;
  className?: string;
}

export default function Logo({ 
  src, 
  alt = "Logo", 
  size = 40, 
  className = "" 
}: LogoProps) {
  // Función para desplazarse al inicio de la página
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div 
      className={`relative aspect-square ${className} cursor-pointer`} 
      style={{ width: size, height: size }}
      onClick={scrollToTop}
      role="button"
      aria-label="Ir al inicio de la página"
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain"
        priority
      />
    </div>
  );
}