import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Términos y Condiciones - Póliza de Rentas',
  description: 'Estos términos y condiciones regulan el uso de los servicios ofrecidos por Póliza de Rentas, incluyendo la evaluación de inquilinos y la formalización de contratos de arrendamiento.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* NavbarBlack se maneja externamente */}
      <div className="navbar-black-spacer"></div>
      <main>{children}</main>
    </>
  );
}