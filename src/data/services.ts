export interface Service {
  id: string;
  title: string;
  summary: string;
  examples: string[];
  /** Término que el buscador de exámenes recibe por ?q= al pulsar "Ver estudios". */
  query: string;
  icon: string;
}

export const SERVICES: Service[] = [
  { id: 'bioanalisis', title: 'Bioanálisis', icon: '🧪', query: 'perfil',
    summary: 'Química sanguínea y perfiles para controlar tu salud con regularidad.',
    examples: ['Perfil 20', 'Perfil general', 'Glucosa', 'Perfil lipídico'] },
  { id: 'hematologia', title: 'Hematología', icon: '🩸', query: 'hematologia',
    summary: 'Estudio de las células de la sangre para detectar anemias e infecciones.',
    examples: ['Hematología completa', 'Plaquetas'] },
  { id: 'microbiologia', title: 'Microbiología', icon: '🔬', query: 'cultivo',
    summary: 'Bacteriología para identificar el germen que causa una infección.',
    examples: ['Urocultivo', 'Perfil respiratorio'] },
  { id: 'hormonas', title: 'Hormonas', icon: '⚖️', query: 'hormonas',
    summary: 'Pruebas hormonales, tiroideas y prostáticas con resultados precisos.',
    examples: ['Perfil tiroideo', 'Perfil prostático (PSA)'] },
  { id: 'pediatrico', title: 'Perfiles pediátricos y ocupacionales', icon: '👶', query: 'bebe',
    summary: 'Estudios para niños y exámenes de ingreso y control para trabajadores.',
    examples: ['Prueba del talón', 'Perfil preoperatorio'] },
  { id: 'genetica', title: 'Genética y ADN', icon: '🧬', query: 'adn',
    summary: 'Paternidad, abuelidad y hermandad con cadena de custodia.',
    examples: ['Paternidad', 'Abuelidad', 'Hermandad'] },
  { id: 'cardiologia', title: 'Marcadores cardíacos', icon: '❤️', query: 'troponina',
    summary: 'Respuestas rápidas y precisas para cuidar tu corazón.',
    examples: ['Troponina I', 'CK-MB', 'Mioglobina'] },
];
