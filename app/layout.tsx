import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Servineo - Encuentra profesionales en Cochabamba',
  description: 'La plataforma líder para conectar hogares con profesionales calificados en Cochabamba. Plomería, electricidad, carpintería y más.',
  keywords: 'servicios, profesionales, Cochabamba, Bolivia, plomería, electricidad, carpintería, reparaciones',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}