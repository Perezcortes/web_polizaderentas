// src/hooks/useReInitVisualScripts.ts
import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    WOW?: any;
    jarallax?: any;
    initSwiper?: () => void;
  }
}

export const useReInitVisualScripts = () => {
  const pathname = usePathname();

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Inicializar WOW.js si está disponible
      if (typeof window !== "undefined" && window.WOW) {
        new window.WOW().init();
      }

      // Inicializar Jarallax si está disponible
      if (typeof window !== "undefined" && window.jarallax) {
        window.jarallax(document.querySelectorAll(".jarallax"), {
          speed: 0.2,
        });
      }

      // Inicializar Swiper (si tienes una función global para ello)
      if (typeof window !== "undefined" && typeof window.initSwiper === "function") {
        window.initSwiper();
      }

      // Aquí puedes reinicializar otras librerías si es necesario
    }, 100); // Espera un poco a que el DOM se actualice

    return () => clearTimeout(timeout); // Limpieza por si el componente se desmonta antes
  }, [pathname]); // Se ejecuta cada vez que cambia la ruta
};
