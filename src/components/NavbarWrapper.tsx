'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import NavbarBlack from './NavbarBlack';

export default function NavbarWrapper() {
  const pathname = usePathname();

  // Mostrar NavbarBlack solo en detalle de blog (rutas que empiezan con /blog/ pero que NO son /blog)
  const isBlogDetail = pathname.startsWith('/blog/') && pathname !== '/blog';

  return isBlogDetail ? <NavbarBlack /> : <Navbar />;
}
