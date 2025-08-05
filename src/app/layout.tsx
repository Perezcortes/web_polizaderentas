import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import NavbarWrapper from "../components/NavbarWrapper"; // Cambiar esta línea
import Footer from "../components/Footer";
import { headers } from "next/headers";

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
  description:
    "Nuestra tecnología revoluciona la protección jurídica en el arrendamiento inmobiliario. Forma parte del futuro de la seguridad para propietarios e inquilinos.",
  metadataBase: new URL("https://polizaderentas.com"),
  openGraph: {
    images: "/almacenamiento/images/og.jpg",
    url: "https://polizaderentas.com/",
    type: "website",
  },
  keywords: "",
  authors: [],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //  Obtenemos headers en SSR
  const headersList = await headers();
  const pathname = headersList.get("x-invoke-path") || "";

  //  Ocultar Navbar en /blog/[slug]
  const hideGlobalNavbar =
    pathname.startsWith("/blog/[slug]/") && pathname.split("/").length === 3;

  return (
    <html lang="es">
      <head>
        <link
          rel="icon"
          href="/images/icon.png"
          type="image/gif"
          sizes="16x16"
        />

        {/* CSS externos */}
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/bootstrap.rtl.min.css" />
        <link rel="stylesheet" href="/css/jquery.countdown.css" />
        <link rel="stylesheet" href="/css/jqvmap.css" />
        <link rel="stylesheet" href="/css/mdb.min.css" />
        <link rel="stylesheet" href="/css/mdb.rtl.min.css" />
        <link rel="stylesheet" href="/css/plugins.css" />
        <link rel="stylesheet" href="/css/swiper.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/coloring.css" />
        <link rel="stylesheet" href="/css/estilos.css" />
        <link rel="stylesheet" href="/css/colors/scheme-01.css" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Facebook Pixel */}
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
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=217583817249537&ev=PageView&noscript=1" />`,
          }}
        />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3HT5BR97DT"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3HT5BR97DT');
          `}
        </Script>

        {/* Contenido */}
        <div id="wrapper">
          {!hideGlobalNavbar && <NavbarWrapper />}
          <main>{children}</main>
          <Footer />
        </div>

        {/* Scripts personalizados */}
        <Script src="/js/plugins.js" strategy="lazyOnload" />
        <Script src="/js/designesia.js" strategy="lazyOnload" />
        <Script src="/js/swiper.js" strategy="lazyOnload" />
        <Script src="/js/custom-marquee.js" strategy="lazyOnload" />

        {/* Metricool */}
        <Script id="metricool" strategy="afterInteractive">
          {`
            function loadScript(callback){
              var head = document.getElementsByTagName("head")[0];
              var script = document.createElement("script");
              script.type = "text/javascript";
              script.src = "https://tracker.metricool.com/resources/be.js";
              script.onload = callback;
              head.appendChild(script);
            }
            loadScript(function(){
              beTracker.t({hash:"e7b9beb5ef17e78a4fad2f402d03de0f"});
            });
          `}
        </Script>
      </body>
    </html>
  );
}