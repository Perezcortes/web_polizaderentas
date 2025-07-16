import Head from 'next/head';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Términos y Condiciones - Póliza de Rentas',
  description: 'Estos términos y condiciones regulan el uso de los servicios ofrecidos por Póliza de Rentas, incluyendo la evaluación de inquilinos y la formalización de contratos de arrendamiento.',
  keywords: ['términos', 'condiciones', 'Póliza de Rentas', 'arrendamiento', 'contratos'],
};

export default function TerminosCondiciones() {
  return (
    <>
      <Head>
        <title>Términos y Condiciones - Póliza de Rentas</title>
        <link rel="icon" href="/images/icon.png" type="image/gif" sizes="16x16" />
        <meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Estos términos y condiciones regulan el uso de los servicios ofrecidos por Póliza de Rentas, incluyendo la evaluación de inquilinos y la formalización de contratos de arrendamiento." />
        <meta name="keywords" content="términos, condiciones, Póliza de Rentas, arrendamiento, contratos" />
        <meta name="author" content="Póliza de Rentas" />

        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '217583817249537');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height={1}
            width={1}
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=217583817249537&ev=PageView&noscript=1"
            alt="" // siempre agregar alt vacío si es decorativo o tracking
          />
        </noscript>
        {/* End Meta Pixel Code */}

        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-3HT5BR97DT"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-3HT5BR97DT');
            `,
          }}
        />
      </Head>

      <div id="wrapper">
        <div className="no-bottom no-top" id="content">
          <div id="top"></div>

          <section className="text-light bg-dark-1">
            <div className="container">
              <div className="row wow fadeInUp" data-wow-delay=".2s">
                <div className="col-lg-12">
                  <h1 className="text-center dorado mb-4">Términos y Condiciones</h1>

                  <h3 className="dorado mt-4">Definiciones</h3>
                  <ul>
                    <li><strong className="dorado">AUTORIZACIÓN:</strong> La aceptación libre, informada e inequívoca de un inquilino, propietario o asesor inmobiliario para el tratamiento de sus datos personales con fines específicos.</li>
                    <li><strong className="dorado">BASE DE DATOS:</strong> Conjunto estructurado de datos, incluidos los datos personales, establecidos en uno o más lugares, sobre soporte electrónico o físico.</li>
                    <li><strong className="dorado">CONSENTIMIENTO:</strong> Manifestación de la voluntad del asesor inmobiliario, inquilino o propietario para el tratamiento de sus datos personales según la Ley.</li>
                    <li><strong className="dorado">CONTROLADOR:</strong> Persona física o jurídica responsable de las decisiones sobre el procesamiento de datos personales.</li>
                    <li><strong className="dorado">DATOS PERSONALES:</strong> Información relacionada con una persona física identificada o identificable, incluyendo datos financieros, laborales y legales pertinentes.</li>
                    <li><strong className="dorado">DATOS PERSONALES SENSIBLES:</strong> Información que revela origen racial, opiniones políticas, afiliación sindical, datos de salud, vida sexual, datos genéticos o biométricos.</li>
                    <li><strong className="dorado">FUENTES DE DATOS:</strong> Bases de datos de terceros consultadas para la evaluación del inquilino, incluyendo fuentes públicas y privadas.</li>
                    <li><strong className="dorado">SERVICIOS:</strong> Servicios profesionales de prevención y protección jurídica ofrecidos por Póliza de Rentas, incluyendo investigación de inquilinos, calificación del riesgo, elaboración de contratos, entre otros.</li>
                    <li><strong className="dorado">PROCESADOR:</strong> Persona física o jurídica que procesa datos personales en nombre del controlador.</li>
                    <li><strong className="dorado">SISTEMA DE INFORMACIÓN:</strong> Sistema utilizado para la recolección, procesamiento y almacenamiento de datos personales.</li>
                    <li><strong className="dorado">INQUILINO/PROPIETARIO:</strong> Personas que solicitan o proporcionan información para la evaluación y formalización de contratos de arrendamiento.</li>
                    <li><strong className="dorado">ASESOR INMOBILIARIO/INMOBILIARIA:</strong> Persona física o representante de persona moral que solicita o proporciona información sobre los servicios de Póliza de Rentas.</li>
                    <li><strong className="dorado">ONBOARDING:</strong> Proceso electrónico de validación de identidad por medios biométricos y verificación de historial crediticio y legal.</li>
                    <li><strong className="dorado">FRANQUICIATARIOS o SOCIOS REGIONALES:</strong> Personas físicas o morales que prestan servicios bajo contrato de franquicia utilizando el sistema operativo de Póliza de Rentas.</li>
                    <li><strong className="dorado">PROSPECTO:</strong> Persona física o moral que otorga su consentimiento para el proceso de ONBOARDING para la validación de identidad y verificación de historial.</li>
                  </ul>

                  <h3 className="dorado mt-4">Sobre Póliza de Rentas o la Póliza de Protección Jurídica</h3>
                  <p>Póliza de Rentas ofrece servicios profesionales de prevención y protección jurídica facilitando la evaluación de inquilinos y la formalización de contratos de arrendamiento, dando seguimiento especializado durante la vigencia de los contratos celebrados.</p>

                  <h3 className="dorado mt-4">Manejo de Información Personal o Empresarial</h3>
                  <p>Los inquilinos y propietarios otorgan su consentimiento para el tratamiento de sus datos personales con el propósito de evaluar la viabilidad del arrendamiento. La compañía garantiza la confidencialidad y seguridad de dicha información, la cual se manejará de acuerdo con los presentes términos y condiciones, así como con el Aviso de Privacidad correspondiente.</p>
                  <p>Los asesores inmobiliarios o inmobiliarias otorgan su consentimiento para recibir información a través de correo electrónico, vía telefónica o por mensaje de datos sobre los servicios que presta la compañía, así como sobre capacitación especializada en arrendamiento inmobiliario.</p>

                  <h3 className="dorado mt-4">Responsabilidad de la Calidad de la Información</h3>
                  <p>La Compañía no se hace responsable de la calidad ni veracidad de la información obtenida de las fuentes de datos utilizadas en la evaluación de inquilinos. Es responsabilidad de los controladores de dichas fuentes garantizar la pertinencia y exactitud de la información proporcionada.</p>

                  <h3 className="dorado mt-4">Autorización de Investigación a través de Onboarding</h3>
                  <p>El acceso a los servicios de investigación de la Compañía se realiza a través de un sistema de autenticación que requiere de la autorización de estos términos y condiciones. El usuario que completa el proceso de onboarding autorizará la consulta de su identidad e información bajo su propia responsabilidad por la veracidad de la información proporcionada. Su divulgación por parte de Póliza de Rentas está prohibida y solo podrá compartirse a través de un reporte de investigación con el propietario o asesor inmobiliario relacionado con la investigación.</p>

                  <h3 className="dorado mt-4">Autorización de la Consulta de Información y Transferencia a Terceros Autorizados</h3>
                  <p>El cliente autoriza a la Empresa la consulta de su información financiera y crediticia (Reporte de Crédito y/o Reporte de Crédito Especial) mediante medios electrónicos y su transferencia a Póliza de Rentas, sus franquiciatarios o socios regionales, con la finalidad de revisar el Reporte de Crédito y/o Reporte de Crédito Especial.</p>

                  <h3 className="dorado mt-4">Derechos de Autor / Marcas</h3>
                  <p>Los servicios ofrecidos por la Compañía están protegidos por derechos de autor. Queda prohibido el uso no autorizado de los servicios o tecnología para fines distintos a los acordados. La marca "Póliza de Rentas" y/o "Póliza de Rentas.com" es propiedad de la Compañía y su uso está sujeto a restricciones.</p>

                  <h3 className="dorado mt-4">Veracidad de la Información Proporcionada</h3>
                  <p>Se prohíbe proporcionar información falsa durante los procesos físicos o digitales que lleve a cabo la compañía. El uso indebido de información puede dar lugar a la obtención de una calificación negativa.</p>

                  <h3 className="dorado mt-4">Modificaciones</h3>
                  <p>La Compañía se reserva el derecho de actualizar o modificar los términos y condiciones en cualquier momento, notificando a los usuarios mediante su sitio web.</p>

                  <h3 className="dorado mt-4">Aceptación</h3>
                  <p>Al hacer uso de los servicios ofrecidos por la Compañía, los usuarios manifiestan su aceptación plena y su capacidad para obligarse conforme a los presentes términos y condiciones.</p>

                  <p className="text-right italic">Última actualización: 15/08/2024</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Javascript Files */}
      <script src="/js/plugins.js"></script>
      <script src="/js/designesia.js"></script>
      <script src="/js/swiper.js"></script>
      <script src="/js/custom-marquee.js"></script>
      <script src="/js/custom-swiper-1.js"></script>
    </>
  );
}