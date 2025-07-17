// src/hooks/useReInitVisualScripts.ts
import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    WOW?: any;
    jarallax?: (elements: NodeListOf<Element>, options?: any) => void;
    initSwiper?: () => void;
  }
}

export const useReInitVisualScripts = (delay = 200) => {
  const pathname = usePathname();

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (typeof window === "undefined") return;

      console.log(`[ReInit] Reinicializando scripts en ruta: ${pathname}`);

      // Reiniciar WOW.js
      if (window.WOW) {
        try {
          new window.WOW({ live: false }).init(); // `live: false` evita que se duplique
          console.log("[ReInit] WOW.js reiniciado");
        } catch (err) {
          console.warn("[ReInit] Error al reiniciar WOW.js", err);
        }
      }

      // Reiniciar Jarallax
      if (window.jarallax) {
        try {
          const elements = document.querySelectorAll(".jarallax");
          if (elements.length > 0) {
            window.jarallax(elements, { speed: 0.2 });
            console.log("[ReInit] Jarallax reiniciado");
          }
        } catch (err) {
          console.warn("[ReInit] Error al reiniciar Jarallax", err);
        }
      }

      // Reiniciar Swiper global (si se usa fuera de React)
      if (typeof window.initSwiper === "function") {
        try {
          window.initSwiper();
          console.log("[ReInit] Swiper reiniciado");
        } catch (err) {
          console.warn("[ReInit] Error al reiniciar Swiper", err);
        }
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [pathname, delay]);
};
