import { Locale } from "../../i18n.config"; // Import Locale type

// Define props to include the lang parameter
interface HomeProps {
  params: {
    lang: Locale;
  };
}

export default function Home({ params }: HomeProps) {
  const { lang } = params;

  // Basic translations (can be moved to a dictionary later)
  const translations = {
    es: {
      welcome: 'Bienvenido a Titan Hosting',
      tagline: 'Diseño Web Profesional y Alojamiento Confiable',
      ctaButton: 'Ver Servicios',
      footerText: '© 2025 Titan Hosting. Todos los derechos reservados.',
    },
    en: {
      welcome: 'Welcome to Titan Hosting',
      tagline: 'Professional Web Design and Reliable Hosting',
      ctaButton: 'View Services',
      footerText: '© 2025 Titan Hosting. All rights reserved.',
    },
  };

  const t = translations[lang];

  // The main layout (app/[lang]/layout.tsx) now handles Header, Footer, and the main container.
  // This component only needs to render the content specific to the homepage.
  return (
    <>
      {/* Hero Section */}
      <section className="text-center py-16 md:py-24 bg-gradient-to-b from-blue-50 dark:from-gray-800 to-transparent rounded-lg mb-16 shadow-sm">
        {/* Placeholder for Hero Image */}
        <div className="w-32 h-32 md:w-48 md:h-48 mx-auto mb-6 bg-blue-200 dark:bg-blue-700 rounded-full flex items-center justify-center">
           <span className="text-4xl text-blue-600 dark:text-blue-300">TH</span> {/* Placeholder Icon/Logo */}
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">{t.welcome}</h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">{t.tagline}</p>
        <a
          href={`/${lang}/diseno-web/santiago-de-chile`} // Example link to a service page
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            {t.ctaButton}
          </a>
        </section>

      {/* Services Section */}
      <section className="py-16">
        <h2 className="text-3xl font-semibold mb-10 text-center text-gray-800 dark:text-gray-200">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Card 1: Web Design */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
             {/* Placeholder for SVG Icon */}
             <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
             </div>
             <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Web Design</h3>
             <p className="text-gray-600 dark:text-gray-400">Creating stunning, responsive websites tailored to your needs.</p>
          </div>
          {/* Service Card 2: Hosting */}
           <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
             {/* Placeholder for SVG Icon */}
             <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600 dark:text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path></svg>
             </div>
             <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Reliable Hosting</h3>
             <p className="text-gray-600 dark:text-gray-400">Fast, secure, and dependable hosting solutions.</p>
          </div>
           {/* Service Card 3: SEO (Example) */}
           <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
             {/* Placeholder for SVG Icon */}
             <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
             </div>
             <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">SEO Optimization</h3>
             <p className="text-gray-600 dark:text-gray-400">Improve your search engine rankings and visibility.</p>
          </div>
        </div>
      </section>
      {/* Add more sections like Testimonials, Call to Action, etc. */}
    </>
  );
}
