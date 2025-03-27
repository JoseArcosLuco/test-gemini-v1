import { Locale } from '../i18n.config';

export interface Service {
  id: string;
  name: { [key in Locale]: string };
  slug: { [key in Locale]: string };
  // Add more service-specific details later if needed
}

export interface Location {
  id: string;
  name: { [key in Locale]: string };
  slug: { [key in Locale]: string };
  // Add more location-specific details later if needed
}

export const services: Service[] = [
  {
    id: 'web-design',
    name: {
      es: 'Diseño Web',
      en: 'Web Design',
    },
    slug: {
      es: 'diseno-web',
      en: 'web-design',
    },
  },
  // Add more services here if needed in the future
];

export const locations: Location[] = [
  {
    id: 'santiago',
    name: {
      es: 'Santiago de Chile',
      en: 'Santiago de Chile',
    },
    slug: {
      es: 'santiago-de-chile',
      en: 'santiago-de-chile', // Keeping slugs consistent unless translation is crucial
    },
  },
  {
    id: 'valparaiso',
    name: {
      es: 'Valparaíso',
      en: 'Valparaiso',
    },
    slug: {
      es: 'valparaiso',
      en: 'valparaiso',
    },
  },
  {
    id: 'rancagua',
    name: {
      es: 'Rancagua',
      en: 'Rancagua',
    },
    slug: {
      es: 'rancagua',
      en: 'rancagua',
    },
  },
  // Add more locations here if needed
];

// Helper function to get all possible combinations for static generation
export function getAllServiceLocationPaths() {
  const paths: { lang: Locale; serviceSlug: string; locationSlug: string }[] = [];
  for (const locale of ['es', 'en'] as Locale[]) {
    for (const service of services) {
      for (const location of locations) {
        paths.push({
          lang: locale,
          serviceSlug: service.slug[locale],
          locationSlug: location.slug[locale],
        });
      }
    }
  }
  return paths;
}

// Helper function to find data by slugs and locale (will be needed for page components)
export function getServiceLocationData(lang: Locale, serviceSlug: string, locationSlug: string) {
    const service = services.find(s => s.slug[lang] === serviceSlug);
    const location = locations.find(l => l.slug[lang] === locationSlug);

    if (!service || !location) {
        return null; // Or throw an error / handle not found case
    }

    return {
        service: {
            id: service.id,
            name: service.name[lang],
            slug: service.slug[lang],
        },
        location: {
            id: location.id,
            name: location.name[lang],
            slug: location.slug[lang],
        }
    };
}
