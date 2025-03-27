import { Locale, i18n } from '../../../i18n.config'; // Adjust path

// Define props to include the lang parameter
interface ContactPageProps {
  params: {
    lang: Locale;
  };
}

// Generate static paths for each language for the contact page
export async function generateStaticParams() {
  return i18n.locales.map((locale: Locale) => ({ lang: locale }));
}

// Optional: Add metadata for the contact page
// import { Metadata } from 'next';
// export async function generateMetadata({ params }: ContactPageProps): Promise<Metadata> {
//   const title = params.lang === 'es' ? 'Contacto | Titan Hosting' : 'Contact | Titan Hosting';
//   const description = params.lang === 'es' ? 'Póngase en contacto con nosotros.' : 'Get in touch with us.';
//   return { title, description };
// }

export default function ContactPage({ params }: ContactPageProps) {
  const { lang } = params;

  // Basic translations (can be moved to a dictionary later)
  const translations = {
    es: {
      title: 'Contacto',
      addressLabel: 'Dirección',
      phoneLabel: 'Teléfono',
      emailLabel: 'Correo Electrónico',
      formTitle: 'Formulario de Contacto',
      nameLabel: 'Nombre',
      emailFormLabel: 'Email',
      descriptionLabel: 'Descripción',
      submitButton: 'Enviar Mensaje',
    },
    en: {
      title: 'Contact Us',
      addressLabel: 'Address',
      phoneLabel: 'Phone',
      emailLabel: 'Email',
      formTitle: 'Contact Form',
      nameLabel: 'Name',
      emailFormLabel: 'Email',
      descriptionLabel: 'Description',
      submitButton: 'Send Message',
    },
  };

  const t = translations[lang];

  // The main layout (app/[lang]/layout.tsx) now handles the main container.
  // This component only needs to render the content specific to the contact page.
  return (
    <>
      <h1 className="text-4xl font-bold text-center mb-10">{t.title}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Information */}
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">{t.addressLabel}</h2>
          <p className="mb-4">Maria Elena 3365</p> {/* Address */}

          <h2 className="text-2xl font-semibold mb-4">{t.phoneLabel}</h2>
          <p className="mb-4">
            <a href="tel:+56966960467" className="hover:text-blue-600 dark:hover:text-blue-400">
              +56 9 66960467
            </a>
          </p>

          <h2 className="text-2xl font-semibold mb-4">{t.emailLabel}</h2>
          <p>
            <a href="mailto:ventas@titanhosting.cl" className="hover:text-blue-600 dark:hover:text-blue-400">
              ventas@titanhosting.cl
            </a>
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6">{t.formTitle}</h2>
          <form action="#" method="POST"> {/* Replace with actual form handling logic */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {t.nameLabel}
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {t.emailFormLabel}
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {t.descriptionLabel}
              </label>
              <textarea
                name="description"
                id="description"
                rows={4}
                required
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-800"
              >
                {t.submitButton}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
