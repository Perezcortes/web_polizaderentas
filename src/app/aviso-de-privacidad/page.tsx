import Script from "next/script";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Aviso de Privacidad - Póliza de Rentas",
  description:
    "Nuestra tecnología revoluciona la protección jurídica en el arrendamiento inmobiliario. Forma parte del futuro de la seguridad para propietarios e inquilinos.",
  keywords: ["aviso de privacidad", "protección de datos", "Póliza de Rentas"],
};

export default function PrivacyPolicy() {
  return (
    <>
      {/* Meta Pixel */}
      <Script id="facebook-pixel" strategy="afterInteractive">
        {`
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
        `}
      </Script>
      <noscript>
        <Image
          src="https://www.facebook.com/tr?id=217583817249537&ev=PageView&noscript=1"
          alt="facebook-pixel"
          width={1}
          height={1}
          style={{ display: "none" }}
          unoptimized
        />
      </noscript>

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

      <div id="wrapper">
        <div className="no-bottom no-top" id="content">

          <div id="top"></div>

          <section className="text-light bg-dark-1">
            <div className="container">
              <div className="row wow fadeInUp" data-wow-delay=".2s">
                <div className="col-lg-12">
                  <h1 className="text-center dorado mb-4">Aviso de Privacidad</h1>
                  <p><strong className="dorado">POLIZA DE RENTAS, Corporativo Póliza de Rentas, S.A de C.V.</strong>, con domicilio ubicado en Montes Urales 755 piso 5, oficina 5631, Lomas de Chapultepec, Miguel Hidalgo, CDMX, 11000, sus sucursales, despachos afiliados y licenciatarios y/o franquiciatarios, al momento de recabar sus datos personales, es responsable del uso que se les dé a los mismos y de su protección.</p>

                  <p>Atendiendo el tema de privacidad, en relación y cumplimiento de la <strong className="dorado">Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFDPPP)</strong>, dentro de los artículos 8, 15, 16 y 36 de esta Ley; nuestra Empresa pone a su disposición el siguiente AVISO DE PRIVACIDAD el cual como usuario debe de consentir o rechazar para el manejo de la información que se le requiere.</p>

                  <p>El presente aviso de privacidad aplica para cualquier información, datos personales y/o sensibles que hayan sido transferidos a POLIZA DE RENTAS para la ejecución de los Servicios de Intermediación en Arrendamiento de Bienes Inmuebles. Comprometiéndose a que la información que sea tratada será única y exclusivamente para los servicios especificados, así como estará bajo las más estrictas medidas de seguridad que garanticen su confidencialidad.</p>

                  <p>Aceptando que de consentir dicho Aviso de Privacidad POLIZA DE RENTAS, está facultado para la recopilación, uso, transferencia y almacenamiento de información personal tal y como se establece en el presente documento. Siendo que POLIZA DE RENTAS únicamente utilizara los datos que se obtengan por el mismo para usos exclusivamente relacionados a la Empresa y a los servicios que la caracterizan.</p>

                  <h3 className="dorado mt-4">Privacidad de los Datos Personales</h3>
                  <p>Sus datos personales le corresponden solo a usted y este sitio web es responsable de no revelar ninguna clase de información que le pertenezca (como email, números de IP, etc.), salvo su expresa autorización o fuerzas de naturaleza mayor de tipo legal que lo involucren, como hackeos o suplantaciones.</p>

                  <h3 className="dorado mt-4">Responsabilidad de las Opiniones Vertidas</h3>
                  <p>Las publicaciones a modo de artículos o posts son responsabilidad del autor del blog. Los comentarios, vertidos por los visitantes, son responsabilidad de ellos mismos y en caso alguno viole las reglas mínimas de respeto a los demás y a las buenas costumbres, éstos serían borrados por el editor del blog.</p>

                  <h3 className="dorado mt-4">Seguridad de su Información Personal</h3>
                  <p>Este sitio web se hace responsable de velar por su seguridad, por la privacidad de su información y por el respeto a sus datos, de acuerdo con las limitaciones que la actual Internet nos provee, siendo conscientes que no estamos excluidos de sufrir algún ataque por parte de crackers o usuarios malintencionados que ejerzan la delincuencia informática.</p>

                  <p><strong className="dorado">Su información personal será utilizada de manera confidencial para los siguientes fines:</strong></p>
                  <ul>
                    <li><strong className="dorado">En caso de inquilinos, sean personas físicas o morales, así como obligados solidarios y/o fiadores:</strong> para la evaluación de su perfil, para investigar su historial crediticio, legal, así como para elaborar y enviar un reporte al propietario del inmueble y/o el agente inmobiliario responsable de su proceso de arrendamiento, para llevar a cabo el servicio de intermediación inmobiliaria en la formalización de la renta de inmuebles.</li>
                    <li><strong className="dorado">En caso de propietarios, sean personas físicas o morales:</strong> para integrar el expediente relativo a la póliza jurídica o económica que se otorgue y de la cual sea beneficiario(a), así como para la elaboración del contrato de arrendamiento, y en su caso, para elaborar cualquier documento relacionado con alguna gestión extrajudicial o judicial.</li>
                    <li><strong className="dorado">En caso de agentes o agencias inmobiliarias, sean personas físicas o morales:</strong> para crear registros de afiliación a nuestras herramientas de gestión de pólizas, previo consentimiento, así como para la asignación de expedientes relacionados con pólizas de protección jurídica a fin de que puedan dar seguimiento a la gestión de las mismas, así como para acceder a sorteos mensuales por colocación.</li>
                  </ul>

                  <p><strong className="dorado">Para las finalidades antes mencionadas, le requerimos algunos datos entre los que se encuentran:</strong></p>
                  <ul>
                    <li>Nombre completo, RFC, Curp.</li>
                    <li>Domicilio Actual, Años de ocupar el Domicilio, Tipo de domicilio.</li>
                    <li>Teléfono fijo y/o celular y Correo electrónico.</li>
                    <li>Actividad principal, Ingresos, lugar de Trabajo, Antigüedad Laboral, Referencias Personales.</li>
                    <li>Datos sobre terceros que puedan fungir como obligados solidarios o fiadores.</li>
                    <li>Datos sobre la propiedad arrendada o dada en garantía, sus características, antecedentes legales de propiedad o posesión. Entre otras.</li>
                    <li>Ingresos Personales y del Obligado Solidario, si así es el caso.</li>
                    <li>Informe de Buró de Crédito y del Obligado Solidario, si así es el caso.</li>
                    <li>Bienes Muebles e Inmuebles.</li>
                    <li>Información Financiera en General, Seguros, Fianzas, etc.</li>
                    <li>Así como la solicitud de algunos documentos, en los que se encuentran:</li>
                    <ul>
                      <li>Identificación oficial con fotografía</li>
                      <li>Comprobantes de domicilio</li>
                      <li>Comprobante de Ingresos, tales como estados de cuenta bancarios, comprobantes de nómina, entre otros.</li>
                      <li>Datos sobre escritura pública y boleta del impuesto predial del inmueble arrendado u otorgado como garantía por parte del fiador, en su caso.</li>
                    </ul>
                  </ul>

                  <h3 className="dorado mt-4">Uso de la Información</h3>
                  <p>Al proporcionarnos sus datos personales, estando de acuerdo con la Política de Privacidad aquí consignada, nos autoriza para el siguiente uso de su información:</p>
                  <ul>
                    <li>Para el fin mismo por lo cual se ha suministrado.</li>
                    <li>Para darle servicio durante todo el proceso de intermediación en el arrendamiento de bienes inmuebles.</li>
                    <li>Para considerarlo dentro de nuestras estadísticas de tráfico, incrementando así nuestra oferta publicitaria y de mercado.</li>
                    <li>Para orientar mejor los servicios aquí ofrecidos y valorarlos a su criterio.</li>
                    <li>Para enviar e-mails con nuestros boletines, promociones, responder inquietudes o comentarios, y mantener informado a nuestros usuarios.</li>
                  </ul>

                  <h3 className="dorado mt-4">Uso de los Cookies</h3>
                  <p>El uso de cookies y su dirección IP, tomados por este sitio, se realiza solo con la finalidad de mantenerles un sitio de acuerdo a sus preferencias locales (tales como navegador web usado, sistema operativo, ISP, etc.). Las “cookies” permiten entregar un contenido ajustado a los intereses y necesidades de nuestros usuarios/visitantes. También podrían usarse cookies de Terceros que estén presentes en este Weblog, como anunciantes o publicidad del mismo, con el único fin de proveer informaciones adicionales o relevantes a la Navegación del Usuario en este Sitio Web.</p>

                  <h3 className="dorado mt-4">Transferencia de Datos</h3>
                  <p>Para cumplir con las finalidades previstas en este aviso de privacidad, así como con los fines distintos que resulten compatibles o análogos, POLIZA DE RENTAS requiere efectuar transferencia de los datos personales dentro e incluso fuera de la República Mexicana. POLIZA DE RENTAS se compromete a velar porque se cumplan todos los principios legales de protección en torno a la transferencia de sus datos personales y manifiesta su compromiso para que se respete en todo momento, por nosotros y por nuestros socios comerciales, el presente aviso de privacidad.</p>

                  <p>En virtud de este aviso de privacidad, el titular acepta la transferencia de sus datos, en el entendido que: (i) POLIZA DE RENTAS pretende transferir los datos personales a terceros nacionales o extranjeros, distintos del encargado, a quienes dicho responsable comunicará este aviso de privacidad y las finalidades a las que el titular sujetó su tratamiento; y (ii) el tercero receptor, asumirá las mismas obligaciones que correspondan a POLIZA DE RENTAS que transfirió los datos, por lo que el tratamiento de los datos se hará conforme a lo convenido en este aviso de privacidad.</p>

                  <p>Las transferencias nacionales o internacionales de datos podrán llevarse a cabo sin el consentimiento del titular, entre otros casos, siempre que la transferencia: (i) sea efectuada a sociedades controladoras, subsidiarias o afiliadas bajo el control común de POLIZA DE RENTAS, o a una sociedad matriz o a cualquier sociedad del mismo grupo del responsable que opere bajo los mismos procesos y políticas internas; (ii) sea necesaria por virtud de un contrato celebrado o por celebrar en interés del titular, por el responsable y un tercero; y (iii) sea precisa para el mantenimiento o cumplimiento de una relación jurídica entre el de que se trate responsable y el titular.</p>

                  <p><strong className="dorado">Cualquiera de las responsables podrá efectuar transferencias de datos personales, además de los supuestos antes mencionados, de la siguiente manera:</strong></p>
                  <ul>
                    <li>Socios comerciales con el propósito de que dichos socios administren y operen servicios complementarios, tales como los Propietarios de los inmuebles en Arrendamiento, u otros Despachos que proporcionan Pólizas Jurídicas para el Arrendamiento de Bienes Inmuebles.</li>
                    <li>Sociedades que operen de forma conjuntamente con cada sociedad responsable algún producto o servicio.</li>
                    <li>Terceros que operen junto con cualquiera de las responsables algún software y cualquier infraestructura informática que sirva como plataforma para la realización de las operaciones y servicios.</li>
                    <li>Terceros prestadores de servicios necesarios para la operación de POLIZA DE RENTAS, así como Comisionistas que realicen operaciones o brinden servicios, incluyendo: Asesores Inmobiliarios, Empresas de custodia y guarda de información (física o en medios electrónicos), con el propósito de que estos asistan en la realización de las finalidades previstas en este aviso de privacidad.</li>
                    <li>Profesionistas, Asesores o Consultores externos, para efecto de la administración de las Operaciones, de los Servicios y de los demás actos que POLIZA DE RENTAS puede realizar conforme a la ley, así como para la defensa de los intereses de POLIZA DE RENTAS cualquier controversia legal que surja con motivo de dichas operaciones y servicios, tales como agencias de cobranza o auditores externos, legales y contables.</li>
                    <li>Sociedades de información crediticia.</li>
                  </ul>

                  <p>POLIZA DE RENTAS cumple los principios de protección de datos personales establecidos por la Ley Federal de Protección de Datos Personales en Posesión de los Particulares y adopta las medidas necesarias para su aplicación, incluyendo cuando estos datos son tratados por un tercero, a solicitud de POLIZA DE RENTAS con el fin de cubrir el servicio de Intermediación en el Arrendamiento de Bienes Inmuebles, manteniendo la confidencialidad en todo momento.</p>

                  <p>Este sitio web contiene enlaces a otros sitios web de redes asociadas, filiales o terceros, si usted accede a un hipervínculo de esos sitios web, tenga en cuenta que estos pueden tener sus propias políticas de privacidad y que POLIZA DE RENTAS no acepta ninguna responsabilidad derivada de las mismas, se recomienda que revise dichas políticas antes de enviar cualquier información personal a esos sitios web. La inclusión de cualquier vínculo a otros sitios web, no implica la aprobación o adhesión por parte de POLIZA DE RENTAS a esas páginas o su contenido.</p>

                  <p>De manera que las partes reconocen que los datos personales del usuario están sujetos a copias de seguridad y a registro de datos eliminados por lo que la supresión total de los datos personales no es del todo posible por distintas legislaciones a las que el POLIZA DE RENTAS es sujeto.</p>

                  <p>El usuario se compromete a actualizar sus datos personales siempre que estos sean modificados a fin de que POLIZA DE RENTAS pueda brindarle el servicio en condiciones de su eficiencia, eficacia y personalización.</p>

                  <h3 className="dorado mt-4">Derechos ARCO</h3>
                  <p>En todo momento usted tiene derecho a ejercer los derechos ARCO (acceso, rectificación, cancelación, oposición) y a revocar el consentimiento al tratamiento de los datos personales que poseemos dentro de POLIZA DE RENTAS, cualquiera de sus derechos los podrá ejercer poniéndose en contacto en Montes Urales 755 piso 5, oficina 5631, Lomas de Chapultepec, Miguel Hidalgo, CDMX, 11000, en el teléfono 5589469764 y en la dirección electrónica info@polizaderentas.com Su solicitud deberá ir acompañada de los argumentos por los que desea ejercer cualquiera de sus derechos, junto con una identificación oficial del titular de los datos o su apoderado, su petición será atendida en un plazo no mayor a 20 días hábiles.</p>

                  <p>La seguridad y la confidencialidad de los datos que los usuarios proporcionen al contratar un servicio estarán protegidos por un servidor seguro bajo el protocolo Secure Socket Layer (SSL), de tal forma que los datos enviados se transmitirán encriptados para asegurar su resguardo.</p>

                  <p>POLIZA DE RENTAS podrá negar el acceso a los datos personales, la rectificación, cancelación o concesión de la oposición al tratamiento de los mismos, en los siguientes supuestos:</p>
                  <ul>
                    <li>Cuando el solicitante no sea el titular de los datos personales, o el representante legal no esté debidamente acreditado para ello;</li>
                    <li>Cuando en su base de datos no se encuentren los datos personales del solicitante;</li>
                    <li>Cuando se lesionen los derechos de un tercero;</li>
                    <li>Cuando exista un impedimento legal, o la resolución de una autoridad competente que restrinja el acceso a los datos personales o que no permita la rectificación, cancelación u oposición de los mismos;</li>
                    <li>Cuando la rectificación, cancelación u oposición haya sido previamente realizada.</li>
                  </ul>

                  <p>POLIZA DE RENTAS limitará el uso de los datos personales a petición expresa del titular, y no estará obligada a cancelar los datos personales cuando:</p>
                  <ul>
                    <li>Se refiera a las partes de un contrato privado, social o administrativo, y sean necesarios para su desarrollo y cumplimiento;</li>
                    <li>Deban ser tratados por disposición legal;</li>
                    <li>Obstaculice actuaciones judiciales o administrativas vinculadas a obligaciones fiscales, la investigación y persecución de delitos, o la actualización de sanciones administrativas;</li>
                    <li>Sean necesarios para proteger los intereses jurídicamente tutelados del titular;</li>
                    <li>Sean necesarios para realizar una acción en función del interés público;</li>
                    <li>Sean necesarios para cumplir con una obligación legalmente adquirida por el titular, o</li>
                    <li>Sean objeto de tratamiento para la prevención o el diagnóstico médico o la gestión de servicios de salud; siempre que dicho tratamiento se realice por un profesional de la salud sujeto a un deber de secreto.</li>
                  </ul>

                  <p>POLIZA DE RENTAS puede modificar, revisar o hacer cambios en el presente aviso en cualquier momento, atendiendo las solicitudes, viables y aceptadas o conforme a la normatividad. En caso de cambios dentro del presente aviso se publicarán a través de los siguientes medios:</p>
                  <ul>
                    <li>Anuncios y correos electrónicos.</li>
                    <li>En nuestra página web.</li>
                  </ul>

                  <p>Si usted considera que han sido vulnerados sus derechos respecto de la protección de datos personales, tiene el derecho de acudir a la autoridad correspondiente para defender su ejercicio. La autoridad es el Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales (INAI), su sitio web es: www.ifai.mx.</p>

                  <h3 className="dorado mt-4">Limitación de Uso y Divulgación de Información</h3>
                  <p>En nuestro programa de notificación de promociones, ofertas y servicios a través de correo electrónico, sólo POLIZA DE RENTAS tiene acceso a la información recabada. Este tipo de publicidad se realiza mediante avisos y mensajes promocionales de correo electrónico, los cuales sólo serán enviados a usted y a aquellos contactos registrados para tal propósito. Si Usted desea dejar de recibir mensajes promocionales de nuestra parte, puede solicitarlo al correo electrónico info@polizaderentas.com En los correos electrónicos enviados, pueden incluirse ocasionalmente ofertas de terceras partes.</p>

                  <p className="text-end"><em>Última actualización: 15/08/2024</em></p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}