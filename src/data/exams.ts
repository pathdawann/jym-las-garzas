/**
 * Catálogo del buscador.
 * ⚠️ CONTENIDO ORIENTATIVO: las indicaciones de preparación son las habituales en laboratorio
 * clínico, pero DEBEN ser revisadas y aprobadas por el bioanalista responsable antes de publicar.
 * `aliases` permite encontrar el examen por sinónimos (sin acentos ni mayúsculas).
 */
export interface Exam {
  id: string;
  name: string;
  aliases: string[];
  category: string;
  sample: string;
  fasting: string;
  preparation: string[];
}

export const EXAMS: Exam[] = [
  { id: 'perfil-20', name: 'Perfil 20', category: 'Perfiles',
    aliases: ['quimica sanguinea', 'perfil veinte', 'chequeo'],
    sample: 'Sangre (suero)', fasting: 'Ayuno de 8 a 12 horas',
    preparation: ['Puedes tomar agua.', 'Evita alcohol y comidas muy grasosas durante las 24 horas previas.', 'Si tomas medicamentos, pregunta si debes suspenderlos. No los dejes por tu cuenta.'] },
  { id: 'perfil-general', name: 'Perfil general', category: 'Perfiles',
    aliases: ['perfil basico', 'chequeo general', 'control general'],
    sample: 'Sangre y orina', fasting: 'Ayuno de 8 a 12 horas',
    preparation: ['Puedes tomar agua.', 'Lleva tu primera orina de la mañana si te lo indican al agendar.'] },
  { id: 'perfil-preoperatorio', name: 'Perfil preoperatorio', category: 'Perfiles',
    aliases: ['preoperatorio', 'pre operatorio', 'cirugia', 'riesgo quirurgico'],
    sample: 'Sangre', fasting: 'Ayuno de 8 horas',
    preparation: ['Lleva la orden o indicación de tu médico.', 'Informa si tomas anticoagulantes u otros medicamentos.'] },
  { id: 'glucosa', name: 'Glucosa en ayunas', category: 'Bioanálisis',
    aliases: ['glicemia', 'glucemia', 'azucar', 'diabetes'],
    sample: 'Sangre', fasting: 'Ayuno de 8 horas',
    preparation: ['Solo agua durante el ayuno.', 'No hagas ejercicio intenso antes de la toma.'] },
  { id: 'perfil-lipidico', name: 'Perfil lipídico', category: 'Bioanálisis',
    aliases: ['colesterol', 'trigliceridos', 'grasas en sangre'],
    sample: 'Sangre', fasting: 'Ayuno de 9 a 12 horas',
    preparation: ['Cena liviana la noche anterior.', 'Evita alcohol durante las 24 horas previas.'] },
  { id: 'hematicograma', name: 'Hematología completa (hematicograma)', category: 'Hematología',
    aliases: ['hematicograma', 'hemograma', 'biometria hematica', 'globulos rojos', 'globulos blancos', 'plaquetas', 'anemia'],
    sample: 'Sangre', fasting: 'Normalmente no requiere ayuno',
    preparation: ['Puedes desayunar con normalidad, salvo que te pidan otros estudios con ayuno.'] },
  { id: 'perfil-tiroideo', name: 'Perfil tiroideo', category: 'Hormonas',
    aliases: ['tsh', 't3', 't4', 'tiroides', 'hormonas tiroideas'],
    sample: 'Sangre', fasting: 'Normalmente no requiere ayuno',
    preparation: ['Si tomas levotiroxina, consulta si debes tomarla antes o después de la muestra.'] },
  { id: 'perfil-prostatico', name: 'Perfil prostático (PSA)', category: 'Hormonas',
    aliases: ['psa', 'prostata', 'antigeno prostatico'],
    sample: 'Sangre', fasting: 'No requiere ayuno estricto',
    preparation: ['Evita eyaculación, ciclismo y ejercicio intenso durante las 48 horas previas.', 'Avisa si te hicieron un examen o procedimiento prostático recientemente.'] },
  { id: 'perfil-respiratorio', name: 'Perfil respiratorio', category: 'Microbiología',
    aliases: ['respiratorio', 'pulmonar', 'tos', 'garganta'],
    sample: 'Según indicación médica', fasting: 'Consultar al agendar',
    preparation: ['Cuéntanos tus síntomas y los medicamentos que tomas para indicarte la preparación exacta.'] },
  { id: 'urocultivo', name: 'Urocultivo', category: 'Microbiología',
    aliases: ['cultivo de orina', 'bacteriologia', 'infeccion urinaria', 'orina'],
    sample: 'Orina (primera de la mañana)', fasting: 'No requiere ayuno',
    preparation: ['Usa un frasco estéril (te lo damos en el laboratorio).', 'Lávate bien la zona genital y recoge el chorro medio.', 'Entrega la muestra en menos de 2 horas. No inicies antibióticos antes, salvo indicación médica.'] },
  { id: 'marcadores-cardiacos', name: 'Panel de marcadores cardíacos', category: 'Cardiología',
    aliases: ['troponina', 'troponina i', 'ck-mb', 'ckmb', 'mioglobina', 'corazon', 'infarto'],
    sample: 'Sangre', fasting: 'No requiere ayuno',
    preparation: ['Si tienes dolor de pecho, falta de aire o sudor frío, ve a emergencias de inmediato. No esperes por un resultado de laboratorio.'] },
  { id: 'adn', name: 'Prueba de ADN (paternidad, abuelidad, hermandad)', category: 'Genética',
    aliases: ['adn', 'paternidad', 'abuelidad', 'hermandad', 'genetica', 'prueba genetica'],
    sample: 'Hisopado bucal o sangre, según protocolo', fasting: 'No requiere ayuno',
    preparation: ['No comas, bebas, fumes ni mastiques chicle durante los 30 minutos previos.', 'Todos los participantes deben presentar su cédula. Los menores asisten con su representante legal.'] },
  { id: 'prueba-talon', name: 'Prueba del talón (tamizaje neonatal)', category: 'Pediátrico',
    aliases: ['talon', 'neonatal', 'recien nacido', 'bebe', 'tamizaje'],
    sample: 'Gotas de sangre del talón', fasting: 'No aplica',
    preparation: ['Consulta con el laboratorio la edad ideal del bebé para la toma.', 'Lleva la cédula de la madre o del representante.'] },
];
