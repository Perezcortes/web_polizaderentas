'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import NavbarBlack from './NavbarBlack';

export default function NavbarWrapper() {
  const pathname = usePathname();

  const exactBlackRoutes = [
    '/aviso-de-privacidad',
    '/terminos-y-condiciones',
    //Podemos agregar más rutas aquí si es necesario
    // '/otra-ruta-especifica',
  ];
  // Verifica si la ruta es un detalle de blog o una ruta exacta
  const isBlogDetail = pathname.startsWith('/blog/') && pathname !== '/blog';
  const isExactMatch = exactBlackRoutes.includes(pathname);
  // Determina si se debe mostrar NavbarBlack o Navbar
  // Si es un detalle de blog o una ruta exacta, muestra NavbarBlack
  const showBlackNavbar = isBlogDetail || isExactMatch;
  // Si no es un detalle de blog ni una ruta exacta, muestra Navbar normal
  return showBlackNavbar ? <NavbarBlack /> : <Navbar />;
}
