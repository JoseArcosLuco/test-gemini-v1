import { Locale } from '../i18n.config'; // Adjust path if needed

interface FooterProps {
  lang: Locale;
}

// Basic translations for footer (can be expanded)
const footerTranslations = {
  es: {
    copyright: '© 2025 Titan Hosting. Todos los derechos reservados.',
  },
  en: {
    copyright: '© 2025 Titan Hosting. All rights reserved.',
  },
};

export default function Footer({ lang }: FooterProps) {
  const t = footerTranslations[lang];

  return (
    <footer className="w-full p-4 bg-gray-200 dark:bg-gray-800 text-center text-gray-600 dark:text-gray-400 mt-auto">
      <div className="container mx-auto">
        <p>{t.copyright}</p>
        {/* Add other footer links or info here if needed */}
      </div>
    </footer>
  );
}
