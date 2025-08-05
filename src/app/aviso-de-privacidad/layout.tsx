import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso de Privacidad - Póliza de Rentas",
  description: "Nuestra tecnología revoluciona la protección jurídica en el arrendamiento inmobiliario. Forma parte del futuro de la seguridad para propietarios e inquilinos.",
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