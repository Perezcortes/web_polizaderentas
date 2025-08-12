'use client';

import { useEffect } from 'react';
import Script from 'next/script';

interface YandexMetrikaProps {
  counterId: number;
  options?: {
    webvisor?: boolean;
    clickmap?: boolean;
    accurateTrackBounce?: boolean;
    trackLinks?: boolean;
  };
}

declare global {
  interface Window {
    ym: any;
  }
}

export default function YandexMetrika({ 
  counterId, 
  options = {
    clickmap: true,
    accurateTrackBounce: true,
    trackLinks: true
  }
}: YandexMetrikaProps) {
  useEffect(() => {
    // Inicializar Yandex Metrika cuando el script se carga
    if (typeof window !== 'undefined' && window.ym) {
      window.ym(counterId, 'init', options);
    }
  }, [counterId, options]);

  return (
    <>
      {/* Script de Yandex Metrika */}
      <Script
        id={`yandex-metrika-${counterId}`}
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js', 'ym');
            ym(${counterId}, 'init', ${JSON.stringify(options)});
          `
        }}
      />
      
      {/* Noscript fallback */}
      <noscript>
        <div>
          <img 
            src={`https://mc.yandex.ru/watch/${counterId}`} 
            style={{ position: 'absolute', left: '-9999px' }} 
            alt="" 
          />
        </div>
      </noscript>
    </>
  );
}