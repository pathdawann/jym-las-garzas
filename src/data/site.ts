/** Fuente única de verdad: datos del negocio (extraídos de su Instagram y piezas gráficas). */
export const SITE = {
  name: 'Laboratorio J&M Las Garzas',
  shortName: 'J&M Las Garzas',
  tagline: 'Todas las pruebas en un solo lugar',
  description:
    'Laboratorio clínico y pruebas genéticas en Lechería, Anzoátegui. Perfil 20, hormonas, bacteriología, ADN y toma de muestra a domicilio sin costo en Barcelona, Lechería y Puerto La Cruz.',
  rif: 'J-505349325',
  phoneDisplay: '0412-990.99.90',
  phoneE164: '+584129909990',
  whatsapp: '584129909990', // formato wa.me (sin + ni espacios)
  instagram: 'https://www.instagram.com/laboratoriojym.lasgarzas/',
  instagramHandle: '@laboratoriojym.lasgarzas',
} as const;

/** Enlace de WhatsApp con mensaje prellenado (siempre codificado). */
export const waLink = (message?: string) =>
  `https://wa.me/${SITE.whatsapp}${message ? `?text=${encodeURIComponent(message)}` : ''}`;

/** Zonas con toma de muestra a domicilio sin costo adicional. */
export const HOME_SERVICE_ZONES = ['Barcelona', 'Lechería', 'Puerto La Cruz'] as const;

export interface Location {
  id: string;
  name: string;
  address: string;
  /** Búsqueda para Google Maps: el Plus Code del perfil de Instagram es el más preciso. */
  mapsQuery: string;
  /** TODO: confirmar horarios reales con el laboratorio antes de publicar. */
  hours: { days: string; time: string }[];
}

/** Hoy hay una sola sede conocida. Agregar más objetos aquí y la UI se adapta sola. */
export const LOCATIONS: Location[] = [
  {
    id: 'las-garzas',
    name: 'Unidad Médico Docente Las Garzas',
    address: 'Urb. Las Garzas, Av. Intercomunal, Lechería 6016, Anzoátegui',
    mapsQuery: '58HM+Q8 Lechería, Anzoátegui',
    hours: [
      { days: 'Lunes a viernes', time: 'Por confirmar' },
      { days: 'Sábado', time: 'Por confirmar' },
    ],
  },
];
