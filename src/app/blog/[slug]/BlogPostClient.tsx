'use client';

import Script from 'next/script';

export default function BlogPostClient() {
  return (
    <>
      {/* Scripts externos */}
      <Script 
        id="jquery-js" 
        src="https://code.jquery.com/jquery-3.6.0.min.js" 
        strategy="beforeInteractive"
        onLoad={() => {
          if (typeof window !== 'undefined' && window.jQuery && !(window as any).$) {
            (window as any).$ = window.jQuery;
          }
        }}
      />

      {/* Scripts personalizados */}
      <Script src="/js/plugins.js" strategy="afterInteractive" />
      <Script src="/js/designesia.js" strategy="afterInteractive" />
      <Script src="/js/swiper.js" strategy="afterInteractive" />
      <Script src="/js/custom-marquee.js" strategy="afterInteractive" />
      <Script src="/js/custom-swiper-1.js" strategy="afterInteractive" />
    </>
  );
}