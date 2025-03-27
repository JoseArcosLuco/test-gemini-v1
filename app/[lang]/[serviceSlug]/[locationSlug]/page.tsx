import { Locale } from '../../../../i18n.config'; // Corrected path
import { getAllServiceLocationPaths, getServiceLocationData } from '../../../../lib/data'; // Corrected path

// Define props including all dynamic segments
interface ServiceLocationPageProps {
  params: {
    lang: Locale;
    serviceSlug: string;
    locationSlug: string;
  };
}

// Generate static paths for all combinations
export async function generateStaticParams() {
  const paths = getAllServiceLocationPaths();
  // The function already returns the correct format { lang, serviceSlug, locationSlug }
  return paths;
}

// Configure Incremental Static Regeneration (ISR) - Revalidate every 60 seconds (adjust as needed)
export const revalidate = 60;

export default function ServiceLocationPage({ params }: ServiceLocationPageProps) {
  const { lang, serviceSlug, locationSlug } = params;
  const data = getServiceLocationData(lang, serviceSlug, locationSlug);

  // Handle case where data might not be found (though generateStaticParams should prevent this)
  if (!data) {
    // Optionally, you could redirect to a 404 page here using notFound() from 'next/navigation'
    return <div>Page not found</div>;
  }

  const { service, location } = data;

  // Basic translations for this page (move to dictionary later)
  const translations = {
    es: {
      pageDesc: `Ofrecemos servicios expertos de ${service.name.toLowerCase()} en la vibrante ciudad de ${location.name}.`,
      block1Title: `Soluciones de ${service.name} a Medida`,
      block1Desc: `Entendemos que cada negocio en ${location.name} es único. Por eso, ofrecemos soluciones de ${service.name.toLowerCase()} personalizadas que se alinean perfectamente con sus objetivos y audiencia local. Desde sitios corporativos hasta e-commerce, tenemos la experiencia que necesita.`,
      block2Title: 'Características Clave',
      block2List: [
        'Diseño Responsivo (Adaptable a móviles y tablets)',
        'Optimización SEO básica incluida',
        'Integración con Redes Sociales',
        'Panel de Administración Fácil de Usar (Opcional)',
        `Alojamiento Web (Hosting) rápido y seguro para ${location.name}`,
      ],
      block3Title: `¿Por Qué Elegirnos en ${location.name}?`,
      block3Desc: `Conocemos el mercado de ${location.name}. Nuestro equipo combina creatividad con estrategia local para asegurar que su sitio web no solo se vea increíble, sino que también conecte con su audiencia objetivo en la región. Ofrecemos soporte cercano y entendemos las necesidades específicas de los negocios locales.`,
      block4Title: '¿Listo para Empezar?',
      block4Desc: `Contáctenos hoy para una consulta gratuita sobre su proyecto de ${service.name.toLowerCase()} en ${location.name}.`,
      block4Button: 'Solicitar Cotización',
      block5Title: 'Nuestro Proceso Simplificado',
      block5List: [
        `**Consulta Inicial:** Discutimos sus necesidades y objetivos para ${location.name}.`,
        '**Propuesta y Diseño:** Creamos un diseño preliminar y una propuesta detallada.',
        '**Desarrollo:** Construimos su sitio web con las últimas tecnologías.',
        '**Revisión y Lanzamiento:** Ajustamos detalles y lanzamos su sitio web.',
        '**Soporte Continuo:** Ofrecemos mantenimiento y soporte post-lanzamiento.',
      ],
      block6Title: `Testimonio Local (${location.name})`,
      block6Quote: `"Trabajar con Titan Hosting fue excelente. Entendieron perfectamente lo que necesitábamos para nuestro negocio aquí en ${location.name}."`,
      block6Author: `- Cliente Satisfecho de ${location.name}`,
    },
    en: {
      pageDesc: `We offer expert ${service.name.toLowerCase()} services in the vibrant city of ${location.name}.`,
      block1Title: `Tailored ${service.name} Solutions`,
      block1Desc: `We understand that every business in ${location.name} is unique. That's why we offer personalized ${service.name.toLowerCase()} solutions that perfectly align with your goals and local audience. From corporate sites to e-commerce, we have the expertise you need.`,
      block2Title: 'Key Features',
      block2List: [
        'Responsive Design (Adapts to mobiles and tablets)',
        'Basic SEO Optimization included',
        'Social Media Integration',
        'Easy-to-Use Admin Panel (Optional)',
        `Fast and secure Web Hosting for ${location.name}`,
      ],
      block3Title: `Why Choose Us in ${location.name}?`,
      block3Desc: `We know the ${location.name} market. Our team combines creativity with local strategy to ensure your website not only looks amazing but also connects with your target audience in the region. We offer close support and understand the specific needs of local businesses.`,
      block4Title: 'Ready to Get Started?',
      block4Desc: `Contact us today for a free consultation about your ${service.name.toLowerCase()} project in ${location.name}.`,
      block4Button: 'Request a Quote',
      block5Title: 'Our Simplified Process',
      block5List: [
        `**Initial Consultation:** We discuss your needs and goals for ${location.name}.`,
        '**Proposal & Design:** We create a preliminary design and detailed proposal.',
        '**Development:** We build your website using the latest technologies.',
        '**Review & Launch:** We fine-tune details and launch your website.',
        '**Ongoing Support:** We offer post-launch maintenance and support.',
      ],
      block6Title: `Local Testimonial (${location.name})`,
      block6Quote: `"Working with Titan Hosting was excellent. They perfectly understood what we needed for our business here in ${location.name}."`,
      block6Author: `- Satisfied Client from ${location.name}`,
    }
  };

  const t = translations[lang];

  // The main layout (app/[lang]/layout.tsx) now handles the main container.
  // This component only needs to render the content specific to this service/location page.
  return (
    <>
      <h1 className="text-3xl font-bold mb-4 text-center"> {/* Added text-center */}
        {service.name} en {location.name}
      </h1>
      <p className="text-lg mb-8 text-center text-gray-600 dark:text-gray-400">
        {t.pageDesc}
      </p>

      {/* Start Modular Content Blocks */}
      {/* TODO: Consider creating reusable Block components */}
      <div className="w-full max-w-4xl space-y-12">

        {/* Block 1: Introduction */}
        <section className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
             {/* SVG Placeholder */}
             <div className="w-10 h-10 mr-4 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center shrink-0"> {/* Added shrink-0 */}
               <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
             </div>
             <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">{t.block1Title}</h2>
          </div>
          <p className="text-gray-700 dark:text-gray-300">
            {t.block1Desc}
          </p>
        </section>

        {/* Block 2: Key Features */}
        <section className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
           <div className="flex items-center mb-4">
             {/* SVG Placeholder */}
             <div className="w-10 h-10 mr-4 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center shrink-0"> {/* Added shrink-0 */}
                <svg className="w-6 h-6 text-green-600 dark:text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
             </div>
             <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">{t.block2Title}</h2>
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            {t.block2List.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Block 3: Why Choose Us in Location */}
         <section className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
           <div className="flex items-center mb-4">
             {/* SVG Placeholder */}
             <div className="w-10 h-10 mr-4 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center shrink-0"> {/* Added shrink-0 */}
                <svg className="w-6 h-6 text-yellow-600 dark:text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
             </div>
             <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">{t.block3Title}</h2>
          </div>
          <p className="text-gray-700 dark:text-gray-300">
            {t.block3Desc}
          </p>
        </section>

        {/* Block 4: Call to Action */}
        <section className="text-center py-10 bg-blue-600 dark:bg-blue-700 rounded-lg shadow-lg text-white">
          <h2 className="text-3xl font-bold mb-4">{t.block4Title}</h2>
          <p className="text-lg mb-6">{t.block4Desc}</p>
          <a
            href={`/${lang}/contact`}
            className="bg-white hover:bg-gray-100 text-blue-700 font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            {t.block4Button}
          </a>
        </section>

        {/* Block 5: Our Process */}
        <section className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
           <div className="flex items-center mb-4">
             {/* SVG Placeholder */}
             <div className="w-10 h-10 mr-4 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center shrink-0"> {/* Added shrink-0 */}
                <svg className="w-6 h-6 text-teal-600 dark:text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
             </div>
             <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">{t.block5Title}</h2>
          </div>
          {/* Using ReactMarkdown or similar would be better for **bold** text */}
          <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
             {t.block5List.map((item, index) => (
               <li key={index} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}></li>
             ))}
          </ol>
          {/* TODO: Make process details potentially vary slightly based on service/location */}
        </section>

        {/* Block 6: Local Testimonial (Placeholder) */}
        <section className="p-6 border-l-4 border-blue-500 bg-blue-50 dark:bg-gray-700 rounded-r-lg shadow-md">
           <div className="flex items-center mb-4">
              {/* SVG Placeholder */}
             <div className="w-10 h-10 mr-4 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center shrink-0"> {/* Added shrink-0 */}
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
             </div>
             <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">{t.block6Title}</h2>
           </div>
           <blockquote className="italic text-gray-700 dark:text-gray-300">
             {t.block6Quote}
           </blockquote>
           <p className="text-right mt-2 font-semibold text-gray-600 dark:text-gray-400">{t.block6Author}</p>
           {/* TODO: Fetch or generate unique testimonials per location */}
        </section>
        {/* TODO: Add 1 more block if needed */}
        {/* TODO: Implement logic for unique content generation/fetching based on lang, serviceSlug, locationSlug */}
        {/* TODO: Implement proper translation fetching (e.g., using next-intl or similar) */}

      </div>
      {/* End Modular Content Blocks */}
    </>
  );
}

// Generate dynamic metadata based on service and location
import { Metadata } from 'next';

export async function generateMetadata({ params }: ServiceLocationPageProps): Promise<Metadata> {
  const { lang, serviceSlug, locationSlug } = params;
  const data = getServiceLocationData(lang, serviceSlug, locationSlug);

  if (!data) {
    return { title: 'Not Found | Titan Hosting' };
  }

  const { service, location } = data;

  // Basic metadata translations
  const metaTranslations = {
    es: {
      title: `${service.name} en ${location.name} | Titan Hosting`,
      description: `Servicios profesionales de ${service.name.toLowerCase()} ofrecidos por Titan Hosting en ${location.name}. Contáctanos para una cotización.`,
    },
    en: {
      title: `${service.name} in ${location.name} | Titan Hosting`,
      description: `Professional ${service.name.toLowerCase()} services offered by Titan Hosting in ${location.name}. Contact us for a quote.`,
    }
  };

  const meta = metaTranslations[lang];

  return {
    title: meta.title,
    description: meta.description,
    // Add more metadata like keywords, open graph tags, canonical URL etc.
    // keywords: [service.name, location.name, 'diseño web', 'hosting', ...],
    // alternates: { // Example for linking alternate languages
    //   languages: {
    //     'es': `/es/${service.slug}/${location.slug}`,
    //     'en': `/en/${service.slug}/${location.slug}`,
    //   },
    // },
  };
}
