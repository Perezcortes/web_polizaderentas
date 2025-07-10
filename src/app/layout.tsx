import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from 'next/script';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Póliza de Rentas",
  description: "Nuestra tecnología revoluciona la protección jurídica en el arrendamiento inmobiliario.",
  metadataBase: new URL('https://polizaderentas.com'),
  openGraph: {
    images: '/almacenamiento/images/og.jpg',
    url: 'https://polizaderentas.com/',
    type: 'website',
  },
  keywords: "",
  authors: [],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/images/icon.png" type="image/gif" sizes="16x16" />
        {/* CSS Files - Considera mover estos a un archivo global */}
        <link href="/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/css/plugins.css" rel="stylesheet" />
        <link href="/css/swiper.css" rel="stylesheet" />
        <link href="/css/style.css" rel="stylesheet" />
        <link href="/css/coloring.css" rel="stylesheet" />
        <link href="/css/estilos.css" rel="stylesheet" />
        <link href="/css/colors/scheme-01.css" rel="stylesheet" id="colors" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Meta Pixel Code */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s){
              if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)
            }(window, document, 'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '217583817249537');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img height="1" width="1" style={{display:'none'}} 
            src="https://www.facebook.com/tr?id=217583817249537&ev=PageView&noscript=1" 
          />
        </noscript>

        {/* Google tag (gtag.js) */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-3HT5BR97DT" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3HT5BR97DT');
          `}
        </Script>

        <div id="wrapper">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>

        {/* Scripts al final del body */}
        <Script src="/js/plugins.js" strategy="lazyOnload" />
        <Script src="/js/designesia.js" strategy="lazyOnload" />
        <Script src="/js/custom-marquee.js" strategy="lazyOnload" />
        <Script src="/js/custom-swiper-1.js" strategy="lazyOnload" />
        
        <Script id="metricool" strategy="afterInteractive">
          {`
            function loadScript(a){
              var b=document.getElementsByTagName("head")[0],
              c=document.createElement("script");
              c.type="text/javascript",
              c.src="https://tracker.metricool.com/resources/be.js",
              c.onreadystatechange=a,
              c.onload=a,
              b.appendChild(c)
            }
            loadScript(function(){
              beTracker.t({hash:"e7b9beb5ef17e78a4fad2f402d03de0f"})
            });
          `}
        </Script>
      </body>
    </html>
  );
}