import Link from 'next/link';
import { Locale } from '../i18n.config'; // Adjust path if needed

interface HeaderProps {
  lang: Locale;
}

// Basic translations for navigation (can be expanded)
const navTranslations = {
  es: {
    home: 'Inicio',
    contact: 'Contacto',
    services: 'Servicios',
  },
  en: {
    home: 'Home',
    contact: 'Contact',
    services: 'Services',
  },
};

export default function Header({ lang }: HeaderProps) {
  const t = navTranslations[lang];

  return (
    <header className="w-full p-4 bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
      <nav className="container mx-auto flex flex-wrap justify-between items-center">
        <Link href={`/${lang}`} className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2 sm:mb-0">
          Titan Hosting
        </Link>
        <div className="flex items-center space-x-4">
          <Link href={`/${lang}`} className="hover:text-blue-600 dark:hover:text-blue-400">
            {t.home}
          </Link>
          {/* Placeholder for Services Dropdown/Link */}
          {/* <Link href={`/${lang}/services`} className="hover:text-blue-600 dark:hover:text-blue-400">{t.services}</Link> */}
          <Link href={`/${lang}/contact`} className="hover:text-blue-600 dark:hover:text-blue-400">
            {t.contact}
          </Link>
          {/* Placeholder for Language Switcher */}
          <div className="text-sm">
             {lang === 'es' ? (
               <Link href="/en" className="hover:text-blue-600 dark:hover:text-blue-400">English</Link>
             ) : (
               <Link href="/es" className="hover:text-blue-600 dark:hover:text-blue-400">Español</Link>
             )}
          </div>
        </div>
      </nav>
    </header>
  );
}
