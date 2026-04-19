import { Language, Topic, Lesson, Quiz, QuizQuestion } from '../types';

export const languages: Language[] = [
  { id: 'es', name: 'Spanish', code: 'es' },
  { id: 'de', name: 'German', code: 'de' },
  { id: 'ru', name: 'Russian', code: 'ru' },
  { id: 'fr', name: 'French', code: 'fr' },
  { id: 'it', name: 'Italian', code: 'it' },
  { id: 'pt', name: 'Portuguese', code: 'pt' },
  { id: 'nl', name: 'Dutch', code: 'nl' },
  { id: 'sv', name: 'Swedish', code: 'sv' },
  { id: 'no', name: 'Norwegian', code: 'no' },
  { id: 'da', name: 'Danish', code: 'da' },
  { id: 'fi', name: 'Finnish', code: 'fi' },
  { id: 'pl', name: 'Polish', code: 'pl' },
  { id: 'cs', name: 'Czech', code: 'cs' },
  { id: 'uk', name: 'Ukrainian', code: 'uk' },
  { id: 'tr', name: 'Turkish', code: 'tr' },
  { id: 'el', name: 'Greek', code: 'el' },
  { id: 'ar', name: 'Arabic', code: 'ar' },
  { id: 'he', name: 'Hebrew', code: 'he' },
  { id: 'hi', name: 'Hindi', code: 'hi' },
  { id: 'zh', name: 'Chinese (Mandarin)', code: 'zh' },
  { id: 'ja', name: 'Japanese', code: 'ja' },
  { id: 'ko', name: 'Korean', code: 'ko' },
  { id: 'vi', name: 'Vietnamese', code: 'vi' },
  { id: 'th', name: 'Thai', code: 'th' },
  { id: 'id', name: 'Indonesian', code: 'id' },
];

export const topics: Record<string, Topic[]> = {
  es: [
    { id: 'greetings', title: 'Greetings & Introductions', description: 'Learn basic greetings and how to introduce yourself' },
    { id: 'numbers', title: 'Numbers', description: 'Master numbers from 1 to 100' },
    { id: 'verbs', title: 'Common Verbs', description: 'Essential verbs for daily conversation' },
    { id: 'food', title: 'Food & Dining', description: 'Vocabulary for restaurants and cooking' },
    { id: 'travel', title: 'Travel', description: 'Essential phrases for traveling' },
  ],
  de: [
    { id: 'greetings', title: 'Greetings & Introductions', description: 'Learn basic greetings and how to introduce yourself' },
    { id: 'numbers', title: 'Numbers', description: 'Master numbers from 1 to 100' },
    { id: 'verbs', title: 'Common Verbs', description: 'Essential verbs for daily conversation' },
    { id: 'grammar', title: 'Grammar Basics', description: 'Introduction to German grammar' },
  ],
  ru: [
    { id: 'greetings', title: 'Greetings & Introductions', description: 'Learn basic greetings and how to introduce yourself' },
    { id: 'alphabet', title: 'Cyrillic Alphabet', description: 'Master the Cyrillic alphabet' },
    { id: 'numbers', title: 'Numbers', description: 'Master numbers from 1 to 100' },
  ],
  fr: [
    { id: 'greetings', title: 'Greetings & Introductions', description: 'Learn basic greetings and how to introduce yourself' },
  ],
  it: [
    { id: 'greetings', title: 'Greetings & Introductions', description: 'Learn basic greetings and how to introduce yourself' },
  ],
  pt: [
    { id: 'greetings', title: 'Greetings & Introductions', description: 'Learn basic greetings and how to introduce yourself' },
  ],
  nl: [
    { id: 'greetings', title: 'Greetings & Introductions', description: 'Learn basic greetings and how to introduce yourself' },
  ],
  sv: [
    { id: 'greetings', title: 'Greetings & Introductions', description: 'Learn basic greetings and how to introduce yourself' },
  ],
  no: [
    { id: 'greetings', title: 'Greetings & Introductions', description: 'Learn basic greetings and how to introduce yourself' },
  ],
  da: [
    { id: 'greetings', title: 'Greetings & Introductions', description: 'Learn basic greetings and how to introduce yourself' },
  ],
  fi: [
    { id: 'greetings', title: 'Greetings & Introductions', description: 'Learn basic greetings and how to introduce yourself' },
  ],
  pl: [
    { id: 'greetings', title: 'Greetings & Introductions', description: 'Learn basic greetings and how to introduce yourself' },
  ],
  cs: [
    { id: 'greetings', title: 'Greetings & Introductions', description: 'Learn basic greetings and how to introduce yourself' },
  ],
  uk: [
    { id: 'greetings', title: 'Greetings & Introductions', description: 'Learn basic greetings and how to introduce yourself' },
  ],
  tr: [
    { id: 'greetings', title: 'Greetings & Introductions', description: 'Learn basic greetings and how to introduce yourself' },
  ],
  el: [
    { id: 'greetings', title: 'Greetings & Introductions', description: 'Learn basic greetings and how to introduce yourself' },
  ],
  ar: [
    { id: 'greetings', title: 'Greetings & Introductions', description: 'Learn basic greetings and how to introduce yourself' },
  ],
  he: [
    { id: 'greetings', title: 'Greetings & Introductions', description: 'Learn basic greetings and how to introduce yourself' },
  ],
  hi: [
    { id: 'greetings', title: 'Greetings & Introductions', description: 'Learn basic greetings and how to introduce yourself' },
  ],
  zh: [
    { id: 'greetings', title: 'Greetings & Introductions', description: 'Learn basic greetings and how to introduce yourself' },
  ],
  ja: [
    { id: 'greetings', title: 'Greetings & Introductions', description: 'Learn basic greetings and how to introduce yourself' },
  ],
  ko: [
    { id: 'greetings', title: 'Greetings & Introductions', description: 'Learn basic greetings and how to introduce yourself' },
  ],
  vi: [
    { id: 'greetings', title: 'Greetings & Introductions', description: 'Learn basic greetings and how to introduce yourself' },
  ],
  th: [
    { id: 'greetings', title: 'Greetings & Introductions', description: 'Learn basic greetings and how to introduce yourself' },
  ],
  id: [
    { id: 'greetings', title: 'Greetings & Introductions', description: 'Learn basic greetings and how to introduce yourself' },
  ],
};

const rawLessons: Record<string, Lesson[]> = {
  es: [
    {
      id: 'es-greetings-1',
      topicId: 'greetings',
      level: 'Novice',
      title: 'Basic Greetings',
      content: 'Learn how to say hello, goodbye, and ask how someone is doing.',
      vocabulary: ['Hola', 'Adiós', 'Buenos días', 'Buenas tardes', 'Buenas noches', '¿Cómo estás?', 'Bien', 'Gracias'],
    },
    {
      id: 'es-greetings-2',
      topicId: 'greetings',
      level: 'Beginner',
      title: 'Formal Greetings',
      content: 'Learn formal ways to greet people and introduce yourself.',
      vocabulary: ['Mucho gusto', 'Encantado', '¿Cómo se llama?', 'Me llamo', 'Señor', 'Señora', 'Señorita'],
    },
    {
      id: 'es-numbers-1',
      topicId: 'numbers',
      level: 'Intermediate',
      title: 'Numbers 1-20',
      content: 'Learn to count from 1 to 20 in Spanish.',
      vocabulary: ['uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve', 'diez'],
    },
    {
      id: 'es-verbs-1',
      topicId: 'verbs',
      level: 'Advanced',
      title: 'Essential Verbs',
      content: 'Learn common verbs: to be, to have, to go, to do.',
      vocabulary: ['ser', 'estar', 'tener', 'ir', 'hacer'],
    },
    {
      id: 'es-sentences-1',
      topicId: 'verbs',
      level: 'Expert',
      title: 'Building Sentences',
      content: 'Learn to construct simple sentences using common verbs.',
      vocabulary: [
        'Yo estoy en casa.',
        'Tú eres estudiante.',
        'Él tiene un perro.',
        'Nosotros vamos al parque.',
        'Ellos hacen la tarea.',
      ],
    },
  ],
  de: [
    {
      id: 'de-greetings-1',
      topicId: 'greetings',
      level: 'Novice',
      title: 'Basic Greetings',
      content: 'Learn how to say hello and goodbye in German.',
      vocabulary: ['Hallo', 'Guten Tag', 'Guten Morgen', 'Guten Abend', 'Auf Wiedersehen', 'Tschüss'],
    },
    {
      id: 'de-numbers-1',
      topicId: 'numbers',
      level: 'Novice',
      title: 'Numbers 1-20',
      content: 'Learn to count from 1 to 20 in German.',
      vocabulary: ['eins', 'zwei', 'drei', 'vier', 'fünf', 'sechs', 'sieben', 'acht', 'neun', 'zehn'],
    },
    {
      id: 'de-greetings-2',
      topicId: 'greetings',
      level: 'Intermediate',
      title: 'Please and Thank You',
      content: 'Learn polite phrases for everyday interactions.',
      vocabulary: ['Bitte', 'Danke', 'Danke schön', 'Gern geschehen', 'Entschuldigung', 'Es tut mir leid'],
    },
    {
      id: 'de-greetings-3',
      topicId: 'greetings',
      level: 'Advanced',
      title: 'Introducing Yourself',
      content: 'Learn how to introduce yourself and ask others their name.',
      vocabulary: ['Ich heiße...', 'Wie heißen Sie?', 'Freut mich', 'Angenehm', 'Ich komme aus...', 'Woher kommen Sie?'],
    },
    {
      id: 'de-greetings-4',
      topicId: 'greetings',
      level: 'Expert',
      title: 'Saying Goodbye',
      content: 'Learn different ways to say goodbye and see you soon.',
      vocabulary: ['Bis später', 'Bis bald', 'Bis morgen', 'Auf Wiedersehen', 'Mach\'s gut', 'Tschüss!'],
    },
  ],
  ru: [
    {
      id: 'ru-greetings-1',
      topicId: 'greetings',
      level: 'Novice',
      title: 'Basic Greetings',
      content: 'Learn how to say hello and goodbye in Russian.',
      vocabulary: ['Привет', 'Здравствуйте', 'Доброе утро', 'Добрый вечер', 'До свидания', 'Пока'],
    },
    {
      id: 'ru-alphabet-1',
      topicId: 'alphabet',
      level: 'Novice',
      title: 'Cyrillic Basics',
      content: 'Learn the first 10 letters of the Cyrillic alphabet.',
      vocabulary: ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И'],
    },
    {
      id: 'ru-greetings-2',
      topicId: 'greetings',
      level: 'Intermediate',
      title: 'Please and Thank You',
      content: 'Learn polite phrases for everyday interactions.',
      vocabulary: ['Пожалуйста', 'Спасибо', 'Спасибо большое', 'Пожалуйста', 'Извините', 'Простите'],
    },
    {
      id: 'ru-greetings-3',
      topicId: 'greetings',
      level: 'Advanced',
      title: 'Introducing Yourself',
      content: 'Learn how to introduce yourself and ask others their name.',
      vocabulary: ['Меня зовут...', 'Как вас зовут?', 'Приятно познакомиться', 'Рад познакомиться', 'Я из...', 'Откуда вы?'],
    },
    {
      id: 'ru-greetings-4',
      topicId: 'greetings',
      level: 'Expert',
      title: 'Saying Goodbye',
      content: 'Learn different ways to say goodbye and see you soon.',
      vocabulary: ['До свидания', 'До скорого', 'До завтра', 'Увидимся', 'Пока', 'Всего хорошего!'],
    },
  ],
  fr: [
    {
      id: 'fr-greetings-1',
      topicId: 'greetings',
      level: 'Novice',
      title: 'Basic Greetings',
      content: 'Learn how to say hello and goodbye in French.',
      vocabulary: ['Bonjour', 'Salut', 'Bonsoir', 'Au revoir', 'Bonne nuit'],
    },
    {
      id: 'fr-greetings-2',
      topicId: 'greetings',
      level: 'Novice',
      title: 'Please and Thank You',
      content: 'Learn polite phrases for everyday interactions.',
      vocabulary: ['S\'il vous plaît', 'Merci', 'Merci beaucoup', 'De rien', 'Pardon', 'Je suis désolé'],
    },
    {
      id: 'fr-greetings-3',
      topicId: 'greetings',
      level: 'Intermediate',
      title: 'Introducing Yourself',
      content: 'Learn how to introduce yourself and ask others their name.',
      vocabulary: ['Je m\'appelle...', 'Comment vous appelez-vous?', 'Enchanté', 'Ravi de vous rencontrer', 'Je viens de...', 'D\'où venez-vous?'],
    },
    {
      id: 'fr-greetings-4',
      topicId: 'greetings',
      level: 'Advanced',
      title: 'Saying Goodbye',
      content: 'Learn different ways to say goodbye and see you soon.',
      vocabulary: ['À bientôt', 'À tout à l\'heure', 'À demain', 'Au revoir', 'Salut', 'À plus!'],
    },
    {
      id: 'fr-greetings-5',
      topicId: 'greetings',
      level: 'Expert',
      title: 'Asking How Someone Is',
      content: 'Learn how to ask how someone is feeling and respond.',
      vocabulary: ['Comment allez-vous?', 'Comment ça va?', 'Très bien', 'Pas mal', 'Comme ci comme ça', 'Et vous?'],
    },
  ],
  it: [
    {
      id: 'it-greetings-1',
      topicId: 'greetings',
      level: 'Novice',
      title: 'Basic Greetings',
      content: 'Learn how to say hello and goodbye in Italian.',
      vocabulary: ['Ciao', 'Salve', 'Buongiorno', 'Buonasera', 'Arrivederci'],
    },
    {
      id: 'it-greetings-2',
      topicId: 'greetings',
      level: 'Novice',
      title: 'Please and Thank You',
      content: 'Learn polite phrases for everyday interactions.',
      vocabulary: ['Per favore', 'Grazie', 'Grazie mille', 'Prego', 'Scusa', 'Mi dispiace'],
    },
    {
      id: 'it-greetings-3',
      topicId: 'greetings',
      level: 'Intermediate',
      title: 'Introducing Yourself',
      content: 'Learn how to introduce yourself and ask others their name.',
      vocabulary: ['Mi chiamo...', 'Come ti chiami?', 'Piacere', 'Lieto di conoscerti', 'Sono di...', 'Di dove sei?'],
    },
    {
      id: 'it-greetings-4',
      topicId: 'greetings',
      level: 'Advanced',
      title: 'Saying Goodbye',
      content: 'Learn different ways to say goodbye and see you soon.',
      vocabulary: ['A presto', 'A dopo', 'A domani', 'Arrivederci', 'Ciao', 'A più tardi!'],
    },
    {
      id: 'it-greetings-5',
      topicId: 'greetings',
      level: 'Expert',
      title: 'Asking How Someone Is',
      content: 'Learn how to ask how someone is feeling and respond.',
      vocabulary: ['Come sta?', 'Come va?', 'Molto bene', 'Non male', 'Così così', 'E lei?'],
    },
  ],
  pt: [
    {
      id: 'pt-greetings-1',
      topicId: 'greetings',
      level: 'Novice',
      title: 'Basic Greetings',
      content: 'Learn how to say hello and goodbye in Portuguese.',
      vocabulary: ['Olá', 'Bom dia', 'Boa tarde', 'Boa noite', 'Tchau'],
    },
    {
      id: 'pt-greetings-2',
      topicId: 'greetings',
      level: 'Novice',
      title: 'Please and Thank You',
      content: 'Learn polite phrases for everyday interactions.',
      vocabulary: ['Por favor', 'Obrigado', 'Obrigada', 'De nada', 'Desculpe', 'Com licença'],
    },
    {
      id: 'pt-greetings-3',
      topicId: 'greetings',
      level: 'Intermediate',
      title: 'Introducing Yourself',
      content: 'Learn how to introduce yourself and ask others their name.',
      vocabulary: ['Me chamo...', 'Como se chama?', 'Prazer', 'Encantado', 'Sou de...', 'De onde você é?'],
    },
    {
      id: 'pt-greetings-4',
      topicId: 'greetings',
      level: 'Advanced',
      title: 'Saying Goodbye',
      content: 'Learn different ways to say goodbye and see you soon.',
      vocabulary: ['Até logo', 'Até breve', 'Até amanhã', 'Tchau', 'Até mais', 'Adeus!'],
    },
    {
      id: 'pt-greetings-5',
      topicId: 'greetings',
      level: 'Expert',
      title: 'Asking How Someone Is',
      content: 'Learn how to ask how someone is feeling and respond.',
      vocabulary: ['Como você está?', 'Como vai?', 'Muito bem', 'Não mal', 'Mais ou menos', 'E você?'],
    },
  ],
  nl: [
    {
      id: 'nl-greetings-1',
      topicId: 'greetings',
      level: 'Novice',
      title: 'Basic Greetings',
      content: 'Learn how to say hello and goodbye in Dutch.',
      vocabulary: ['Hallo', 'Hoi', 'Goedemorgen', 'Goedenavond', 'Dag', 'Tot ziens'],
    },
    {
      id: 'nl-greetings-2',
      topicId: 'greetings',
      level: 'Novice',
      title: 'Please and Thank You',
      content: 'Learn polite phrases for everyday interactions.',
      vocabulary: ['Alsjeblieft', 'Dank je', 'Dank je wel', 'Graag gedaan', 'Sorry', 'Het spijt me'],
    },
    {
      id: 'nl-greetings-3',
      topicId: 'greetings',
      level: 'Intermediate',
      title: 'Introducing Yourself',
      content: 'Learn how to introduce yourself and ask others their name.',
      vocabulary: ['Ik heet...', 'Hoe heet u?', 'Aangenaam', 'Leuk je te ontmoeten', 'Ik kom uit...', 'Waar kom je vandaan?'],
    },
    {
      id: 'nl-greetings-4',
      topicId: 'greetings',
      level: 'Advanced',
      title: 'Saying Goodbye',
      content: 'Learn different ways to say goodbye and see you soon.',
      vocabulary: ['Tot ziens', 'Tot later', 'Tot morgen', 'Dag', 'Doei', 'Tot snel!'],
    },
    {
      id: 'nl-greetings-5',
      topicId: 'greetings',
      level: 'Expert',
      title: 'Asking How Someone Is',
      content: 'Learn how to ask how someone is feeling and respond.',
      vocabulary: ['Hoe gaat het?', 'Hoe maakt u het?', 'Heel goed', 'Niet slecht', 'Gaat wel', 'En u?'],
    },
  ],
  sv: [
    {
      id: 'sv-greetings-1',
      topicId: 'greetings',
      level: 'Novice',
      title: 'Basic Greetings',
      content: 'Learn how to say hello and goodbye in Swedish.',
      vocabulary: ['Hej', 'Hejdå', 'God morgon', 'God kväll', 'God natt'],
    },
    {
      id: 'sv-greetings-2',
      topicId: 'greetings',
      level: 'Novice',
      title: 'Please and Thank You',
      content: 'Learn polite phrases for everyday interactions.',
      vocabulary: ['Snälla', 'Tack', 'Tack så mycket', 'Varsågod', 'Förlåt', 'Jag är ledsen'],
    },
    {
      id: 'sv-greetings-3',
      topicId: 'greetings',
      level: 'Intermediate',
      title: 'Introducing Yourself',
      content: 'Learn how to introduce yourself and ask others their name.',
      vocabulary: ['Jag heter...', 'Vad heter du?', 'Trevligt att träffas', 'Nöjet att möta dig', 'Jag kommer från...', 'Var kommer du ifrån?'],
    },
    {
      id: 'sv-greetings-4',
      topicId: 'greetings',
      level: 'Advanced',
      title: 'Saying Goodbye',
      content: 'Learn different ways to say goodbye and see you soon.',
      vocabulary: ['Hej då', 'Vi ses', 'Vi ses imorgon', 'Adjö', 'Hej', 'Ha det bra!'],
    },
    {
      id: 'sv-greetings-5',
      topicId: 'greetings',
      level: 'Expert',
      title: 'Asking How Someone Is',
      content: 'Learn how to ask how someone is feeling and respond.',
      vocabulary: ['Hur mår du?', 'Hur är det?', 'Mycket bra', 'Inte illa', 'Sådär', 'Och du?'],
    },
  ],
  no: [
    {
      id: 'no-greetings-1',
      topicId: 'greetings',
      level: 'Novice',
      title: 'Basic Greetings',
      content: 'Learn how to say hello and goodbye in Norwegian.',
      vocabulary: ['Hei', 'Hallo', 'God morgen', 'God kveld', 'Ha det'],
    },
    {
      id: 'no-greetings-2',
      topicId: 'greetings',
      level: 'Novice',
      title: 'Please and Thank You',
      content: 'Learn polite phrases for everyday interactions.',
      vocabulary: ['Vær så snill', 'Takk', 'Tusen takk', 'Vær så god', 'Unnskyld', 'Beklager'],
    },
    {
      id: 'no-greetings-3',
      topicId: 'greetings',
      level: 'Intermediate',
      title: 'Introducing Yourself',
      content: 'Learn how to introduce yourself and ask others their name.',
      vocabulary: ['Jeg heter...', 'Hva heter du?', 'Hyggelig å møte deg', 'Hyggelig', 'Jeg er fra...', 'Hvor kommer du fra?'],
    },
    {
      id: 'no-greetings-4',
      topicId: 'greetings',
      level: 'Advanced',
      title: 'Saying Goodbye',
      content: 'Learn different ways to say goodbye and see you soon.',
      vocabulary: ['Ha det', 'Vi sees', 'Vi ses i morgen', 'Adjø', 'Hei hei', 'Ha det bra!'],
    },
    {
      id: 'no-greetings-5',
      topicId: 'greetings',
      level: 'Expert',
      title: 'Asking How Someone Is',
      content: 'Learn how to ask how someone is feeling and respond.',
      vocabulary: ['Hvordan har du det?', 'Hvordan går det?', 'Veldig bra', 'Ikke dårlig', 'Så passe', 'Og du?'],
    },
  ],
  da: [
    {
      id: 'da-greetings-1',
      topicId: 'greetings',
      level: 'Novice',
      title: 'Basic Greetings',
      content: 'Learn how to say hello and goodbye in Danish.',
      vocabulary: ['Hej', 'God dag', 'God aften', 'Farvel', 'Vi ses'],
    },
    {
      id: 'da-greetings-2',
      topicId: 'greetings',
      level: 'Novice',
      title: 'Please and Thank You',
      content: 'Learn polite phrases for everyday interactions.',
      vocabulary: ['Vær venlig', 'Tak', 'Mange tak', 'Selv tak', 'Undskyld', 'Beklager'],
    },
    {
      id: 'da-greetings-3',
      topicId: 'greetings',
      level: 'Intermediate',
      title: 'Introducing Yourself',
      content: 'Learn how to introduce yourself and ask others their name.',
      vocabulary: ['Jeg hedder...', 'Hvad hedder du?', 'Dejligt at møde dig', 'Hyggeligt', 'Jeg er fra...', 'Hvor kommer du fra?'],
    },
    {
      id: 'da-greetings-4',
      topicId: 'greetings',
      level: 'Advanced',
      title: 'Saying Goodbye',
      content: 'Learn different ways to say goodbye and see you soon.',
      vocabulary: ['Farvel', 'Vi ses', 'Vi ses i morgen', 'Hej hej', 'Pas på dig selv', 'Hej!'],
    },
    {
      id: 'da-greetings-5',
      topicId: 'greetings',
      level: 'Expert',
      title: 'Asking How Someone Is',
      content: 'Learn how to ask how someone is feeling and respond.',
      vocabulary: ['Hvordan har du det?', 'Hvordan går det?', 'Meget godt', 'Ikke dårligt', 'Sådan nogenlunde', 'Og dig?'],
    },
  ],
  fi: [
    {
      id: 'fi-greetings-1',
      topicId: 'greetings',
      level: 'Novice',
      title: 'Basic Greetings',
      content: 'Learn how to say hello and goodbye in Finnish.',
      vocabulary: ['Hei', 'Moi', 'Hyvää huomenta', 'Hyvää iltaa', 'Näkemiin'],
    },
    {
      id: 'fi-greetings-2',
      topicId: 'greetings',
      level: 'Novice',
      title: 'Please and Thank You',
      content: 'Learn polite phrases for everyday interactions.',
      vocabulary: ['Ole hyvä', 'Kiitos', 'Kiitos paljon', 'Ole hyvä', 'Anteeksi', 'Olen pahoillani'],
    },
    {
      id: 'fi-greetings-3',
      topicId: 'greetings',
      level: 'Intermediate',
      title: 'Introducing Yourself',
      content: 'Learn how to introduce yourself and ask others their name.',
      vocabulary: ['Minun nimeni on...', 'Mikä sinun nimesi on?', 'Hauska tavata', 'Mukava tutustua', 'Olen kotoisin...', 'Mistä olet kotoisin?'],
    },
    {
      id: 'fi-greetings-4',
      topicId: 'greetings',
      level: 'Advanced',
      title: 'Saying Goodbye',
      content: 'Learn different ways to say goodbye and see you soon.',
      vocabulary: ['Näkemiin', 'Nähdään', 'Nähdään huomenna', 'Hei hei', 'Moi moi', 'Hyvää matkaa!'],
    },
    {
      id: 'fi-greetings-5',
      topicId: 'greetings',
      level: 'Expert',
      title: 'Asking How Someone Is',
      content: 'Learn how to ask how someone is feeling and respond.',
      vocabulary: ['Mitä kuuluu?', 'Miten voit?', 'Hyvin', 'Ei huono', 'Niin niin', 'Entä sinulle?'],
    },
  ],
  pl: [
    {
      id: 'pl-greetings-1',
      topicId: 'greetings',
      level: 'Novice',
      title: 'Basic Greetings',
      content: 'Learn how to say hello and goodbye in Polish.',
      vocabulary: ['Cześć', 'Dzień dobry', 'Dobry wieczór', 'Do widzenia', 'Na razie'],
    },
    {
      id: 'pl-greetings-2',
      topicId: 'greetings',
      level: 'Novice',
      title: 'Please and Thank You',
      content: 'Learn polite phrases for everyday interactions.',
      vocabulary: ['Proszę', 'Dziękuję', 'Dziękuję bardzo', 'Proszę bardzo', 'Przepraszam', 'Przykro mi'],
    },
    {
      id: 'pl-greetings-3',
      topicId: 'greetings',
      level: 'Intermediate',
      title: 'Introducing Yourself',
      content: 'Learn how to introduce yourself and ask others their name.',
      vocabulary: ['Nazywam się...', 'Jak się nazywasz?', 'Miło mi', 'Miło mi pana poznać', 'Jestem z...', 'Skąd jesteś?'],
    },
    {
      id: 'pl-greetings-4',
      topicId: 'greetings',
      level: 'Advanced',
      title: 'Saying Goodbye',
      content: 'Learn different ways to say goodbye and see you soon.',
      vocabulary: ['Do widzenia', 'Do zobaczenia', 'Do jutra', 'Na razie', 'Cześć', 'Pa!'],
    },
    {
      id: 'pl-greetings-5',
      topicId: 'greetings',
      level: 'Expert',
      title: 'Asking How Someone Is',
      content: 'Learn how to ask how someone is feeling and respond.',
      vocabulary: ['Jak się masz?', 'Co słychać?', 'Bardzo dobrze', 'Nieźle', 'Tak sobie', 'A ty?'],
    },
  ],
  cs: [
    {
      id: 'cs-greetings-1',
      topicId: 'greetings',
      level: 'Novice',
      title: 'Basic Greetings',
      content: 'Learn how to say hello and goodbye in Czech.',
      vocabulary: ['Ahoj', 'Dobrý den', 'Dobré ráno', 'Dobrou noc', 'Na shledanou'],
    },
    {
      id: 'cs-greetings-2',
      topicId: 'greetings',
      level: 'Novice',
      title: 'Please and Thank You',
      content: 'Learn polite phrases for everyday interactions.',
      vocabulary: ['Prosím', 'Děkuji', 'Děkuji mnohokrát', 'Není zač', 'Promiňte', 'Omlouvám se'],
    },
    {
      id: 'cs-greetings-3',
      topicId: 'greetings',
      level: 'Intermediate',
      title: 'Introducing Yourself',
      content: 'Learn how to introduce yourself and ask others their name.',
      vocabulary: ['Jmenuji se...', 'Jak se jmenujete?', 'Těší mě', 'Rád vás poznávám', 'Jsem z...', 'Odkud jste?'],
    },
    {
      id: 'cs-greetings-4',
      topicId: 'greetings',
      level: 'Advanced',
      title: 'Saying Goodbye',
      content: 'Learn different ways to say goodbye and see you soon.',
      vocabulary: ['Na shledanou', 'Uvidíme se', 'Uvidíme se zítra', 'Ahoj', 'Měj se', 'Čau!'],
    },
    {
      id: 'cs-greetings-5',
      topicId: 'greetings',
      level: 'Expert',
      title: 'Asking How Someone Is',
      content: 'Learn how to ask how someone is feeling and respond.',
      vocabulary: ['Jak se máte?', 'Jak se máš?', 'Velmi dobře', 'Není špatně', 'Tak tak', 'A vy?'],
    },
  ],
  uk: [
    {
      id: 'uk-greetings-1',
      topicId: 'greetings',
      level: 'Novice',
      title: 'Basic Greetings',
      content: 'Learn how to say hello and goodbye in Ukrainian.',
      vocabulary: ['Привіт', 'Добрий ранок', 'Добрий день', 'Добрий вечір', 'До побачення'],
    },
    {
      id: 'uk-greetings-2',
      topicId: 'greetings',
      level: 'Novice',
      title: 'Please and Thank You',
      content: 'Learn polite phrases for everyday interactions.',
      vocabulary: ['Будь ласка', 'Дякую', 'Дуже дякую', 'Будь ласка', 'Вибачте', 'Перепрошую'],
    },
    {
      id: 'uk-greetings-3',
      topicId: 'greetings',
      level: 'Intermediate',
      title: 'Introducing Yourself',
      content: 'Learn how to introduce yourself and ask others their name.',
      vocabulary: ['Мене звати...', 'Як вас звати?', 'Приємно познайомитися', 'Радий познайомитися', 'Я з...', 'Звідки ви?'],
    },
    {
      id: 'uk-greetings-4',
      topicId: 'greetings',
      level: 'Advanced',
      title: 'Saying Goodbye',
      content: 'Learn different ways to say goodbye and see you soon.',
      vocabulary: ['До побачення', 'До зустрічі', 'До завтра', 'Бувай', 'Пока', 'Усього доброго!'],
    },
    {
      id: 'uk-greetings-5',
      topicId: 'greetings',
      level: 'Expert',
      title: 'Asking How Someone Is',
      content: 'Learn how to ask how someone is feeling and respond.',
      vocabulary: ['Як справи?', 'Як ви?', 'Дуже добре', 'Непогано', 'Так собі', 'А ви?'],
    },
  ],
  tr: [
    {
      id: 'tr-greetings-1',
      topicId: 'greetings',
      level: 'Novice',
      title: 'Basic Greetings',
      content: 'Learn how to say hello and goodbye in Turkish.',
      vocabulary: ['Merhaba', 'Selam', 'Günaydın', 'İyi akşamlar', 'Hoşça kal', 'Güle güle'],
    },
    {
      id: 'tr-greetings-2',
      topicId: 'greetings',
      level: 'Novice',
      title: 'Please and Thank You',
      content: 'Learn polite phrases for everyday interactions.',
      vocabulary: ['Lütfen', 'Teşekkürler', 'Çok teşekkür ederim', 'Rica ederim', 'Özür dilerim', 'Pardon'],
    },
    {
      id: 'tr-greetings-3',
      topicId: 'greetings',
      level: 'Intermediate',
      title: 'Introducing Yourself',
      content: 'Learn how to introduce yourself and ask others their name.',
      vocabulary: ['Benim adım...', 'Adınız ne?', 'Tanıştığımıza memnun oldum', 'Memnun oldum', 'Ben...\'den geliyorum', 'Nerelisiniz?'],
    },
    {
      id: 'tr-greetings-4',
      topicId: 'greetings',
      level: 'Advanced',
      title: 'Saying Goodbye',
      content: 'Learn different ways to say goodbye and see you soon.',
      vocabulary: ['Hoşça kal', 'Görüşürüz', 'Yarın görüşürüz', 'Güle güle', 'Allahaısmarladık', 'İyi günler!'],
    },
    {
      id: 'tr-greetings-5',
      topicId: 'greetings',
      level: 'Expert',
      title: 'Asking How Someone Is',
      content: 'Learn how to ask how someone is feeling and respond.',
      vocabulary: ['Nasılsınız?', 'Nasılsın?', 'Çok iyiyim', 'Fena değil', 'Şöyle böyle', 'Ya siz?'],
    },
  ],
  el: [
    {
      id: 'el-greetings-1',
      topicId: 'greetings',
      level: 'Novice',
      title: 'Basic Greetings',
      content: 'Learn how to say hello and goodbye in Greek.',
      vocabulary: ['Γεια σου', 'Γεια σας', 'Καλημέρα', 'Καλησπέρα', 'Καληνύχτα'],
    },
    {
      id: 'el-greetings-2',
      topicId: 'greetings',
      level: 'Novice',
      title: 'Please and Thank You',
      content: 'Learn polite phrases for everyday interactions.',
      vocabulary: ['Παρακαλώ', 'Ευχαριστώ', 'Ευχαριστώ πολύ', 'Παρακαλώ', 'Συγγνώμη', 'Λυπάμαι'],
    },
    {
      id: 'el-greetings-3',
      topicId: 'greetings',
      level: 'Intermediate',
      title: 'Introducing Yourself',
      content: 'Learn how to introduce yourself and ask others their name.',
      vocabulary: ['Με λένε...', 'Πώς σε λένε?', 'Χαίρω πολύ', 'Ευχάριστο', 'Είμαι από...', 'Από πού είσαι?'],
    },
    {
      id: 'el-greetings-4',
      topicId: 'greetings',
      level: 'Advanced',
      title: 'Saying Goodbye',
      content: 'Learn different ways to say goodbye and see you soon.',
      vocabulary: ['Αντίο', 'Τα λέμε', 'Τα λέμε αύριο', 'Γεια σου', 'Να προσέχεις', 'Γεια!'],
    },
    {
      id: 'el-greetings-5',
      topicId: 'greetings',
      level: 'Expert',
      title: 'Asking How Someone Is',
      content: 'Learn how to ask how someone is feeling and respond.',
      vocabulary: ['Τι κάνετε;', 'Πώς είστε;', 'Πολύ καλά', 'Όχι άσχημα', 'Έτσι κι έτσι', 'Και εσείς;'],
    },
  ],
  ar: [
    {
      id: 'ar-greetings-1',
      topicId: 'greetings',
      level: 'Novice',
      title: 'Basic Greetings',
      content: 'Learn how to say hello and goodbye in Arabic.',
      vocabulary: ['مرحبا', 'أهلاً وسهلاً', 'السلام عليكم', 'صباح الخير', 'مساء الخير', 'مع السلامة'],
    },
    {
      id: 'ar-greetings-2',
      topicId: 'greetings',
      level: 'Novice',
      title: 'Please and Thank You',
      content: 'Learn polite phrases for everyday interactions.',
      vocabulary: ['من فضلك', 'شكراً', 'شكراً جزيلاً', 'عفواً', 'آسف', 'عذراً'],
    },
    {
      id: 'ar-greetings-3',
      topicId: 'greetings',
      level: 'Intermediate',
      title: 'Introducing Yourself',
      content: 'Learn how to introduce yourself and ask others their name.',
      vocabulary: ['اسمي...', 'ما اسمك؟', 'تشرفت بمقابلتك', 'سعيد بلقائك', 'أنا من...', 'من أين أنت؟'],
    },
    {
      id: 'ar-greetings-4',
      topicId: 'greetings',
      level: 'Advanced',
      title: 'Saying Goodbye',
      content: 'Learn different ways to say goodbye and see you soon.',
      vocabulary: ['مع السلامة', 'إلى اللقاء', 'إلى الغد', 'وداعاً', 'باى', 'إلى اللقاء!'],
    },
    {
      id: 'ar-greetings-5',
      topicId: 'greetings',
      level: 'Expert',
      title: 'Asking How Someone Is',
      content: 'Learn how to ask how someone is feeling and respond.',
      vocabulary: ['كيف حالك؟', 'كيف أنت؟', 'بخير', 'ليس سيئاً', 'عادي', 'وأنت؟'],
    },
  ],
  he: [
    {
      id: 'he-greetings-1',
      topicId: 'greetings',
      level: 'Novice',
      title: 'Basic Greetings',
      content: 'Learn how to say hello and goodbye in Hebrew.',
      vocabulary: ['שלום', 'בוקר טוב', 'ערב טוב', 'לילה טוב', 'להתראות'],
    },
    {
      id: 'he-greetings-2',
      topicId: 'greetings',
      level: 'Novice',
      title: 'Please and Thank You',
      content: 'Learn polite phrases for everyday interactions.',
      vocabulary: ['בבקשה', 'תודה', 'תודה רבה', 'על לא דבר', 'סליחה', 'אני מצטער'],
    },
    {
      id: 'he-greetings-3',
      topicId: 'greetings',
      level: 'Intermediate',
      title: 'Introducing Yourself',
      content: 'Learn how to introduce yourself and ask others their name.',
      vocabulary: ['קוראים לי...', 'איך קוראים לך?', 'נעים להכיר', 'שמח לפגוש אותך', 'אני מ...', 'מאיפה אתה?'],
    },
    {
      id: 'he-greetings-4',
      topicId: 'greetings',
      level: 'Advanced',
      title: 'Saying Goodbye',
      content: 'Learn different ways to say goodbye and see you soon.',
      vocabulary: ['להתראות', 'נתראה', 'נתראה מחר', 'ביי', 'שלום', 'להתראות!'],
    },
    {
      id: 'he-greetings-5',
      topicId: 'greetings',
      level: 'Expert',
      title: 'Asking How Someone Is',
      content: 'Learn how to ask how someone is feeling and respond.',
      vocabulary: ['מה שלומך?', 'איך אתה?', 'טוב מאוד', 'לא רע', 'ככה ככה', 'ואתה?'],
    },
  ],
  hi: [
    {
      id: 'hi-greetings-1',
      topicId: 'greetings',
      level: 'Novice',
      title: 'Basic Greetings',
      content: 'Learn how to say hello and goodbye in Hindi.',
      vocabulary: ['नमस्ते', 'नमस्कार', 'सुप्रभात', 'शुभ संध्या', 'अलविदा'],
    },
    {
      id: 'hi-greetings-2',
      topicId: 'greetings',
      level: 'Novice',
      title: 'Please and Thank You',
      content: 'Learn polite phrases for everyday interactions.',
      vocabulary: ['कृपया', 'धन्यवाद', 'बहुत धन्यवाद', 'आपका स्वागत है', 'क्षमा कीजिए', 'मुझे खेद है'],
    },
    {
      id: 'hi-greetings-3',
      topicId: 'greetings',
      level: 'Intermediate',
      title: 'Introducing Yourself',
      content: 'Learn how to introduce yourself and ask others their name.',
      vocabulary: ['मेरा नाम... है', 'आपका नाम क्या है?', 'आपसे मिलकर खुशी हुई', 'मुझे आपसे मिलकर खुशी हुई', 'मैं... से हूँ', 'आप कहाँ से हैं?'],
    },
    {
      id: 'hi-greetings-4',
      topicId: 'greetings',
      level: 'Advanced',
      title: 'Saying Goodbye',
      content: 'Learn different ways to say goodbye and see you soon.',
      vocabulary: ['अलविदा', 'फिर मिलेंगे', 'कल मिलते हैं', 'नमस्ते', 'खुदा हाफिज', 'फिर मिलेंगे!'],
    },
    {
      id: 'hi-greetings-5',
      topicId: 'greetings',
      level: 'Expert',
      title: 'Asking How Someone Is',
      content: 'Learn how to ask how someone is feeling and respond.',
      vocabulary: ['आप कैसे हैं?', 'क्या हाल है?', 'बहुत अच्छा', 'ठीक है', 'ठीक ठाक', 'और आप?'],
    },
  ],
  zh: [
    {
      id: 'zh-greetings-1',
      topicId: 'greetings',
      level: 'Novice',
      title: 'Basic Greetings',
      content: 'Learn how to say hello and goodbye in Mandarin Chinese.',
      vocabulary: ['你好', '早上好', '下午好', '晚上好', '再见'],
    },
    {
      id: 'zh-greetings-2',
      topicId: 'greetings',
      level: 'Novice',
      title: 'Please and Thank You',
      content: 'Learn polite phrases for everyday interactions.',
      vocabulary: ['请', '谢谢', '非常感谢', '不客气', '对不起', '不好意思'],
    },
    {
      id: 'zh-greetings-3',
      topicId: 'greetings',
      level: 'Intermediate',
      title: 'Introducing Yourself',
      content: 'Learn how to introduce yourself and ask others their name.',
      vocabulary: ['我叫...', '你叫什么名字？', '很高兴认识你', '认识你很高兴', '我来自...', '你来自哪里？'],
    },
    {
      id: 'zh-greetings-4',
      topicId: 'greetings',
      level: 'Advanced',
      title: 'Saying Goodbye',
      content: 'Learn different ways to say goodbye and see you soon.',
      vocabulary: ['再见', '回头见', '明天见', '拜拜', '保重', '慢走！'],
    },
    {
      id: 'zh-greetings-5',
      topicId: 'greetings',
      level: 'Expert',
      title: 'Asking How Someone Is',
      content: 'Learn how to ask how someone is feeling and respond.',
      vocabulary: ['你好吗？', '你怎么样？', '很好', '不错', '马马虎虎', '你呢？'],
    },
  ],
  ja: [
    {
      id: 'ja-greetings-1',
      topicId: 'greetings',
      level: 'Novice',
      title: 'Basic Greetings',
      content: 'Learn how to say hello and goodbye in Japanese.',
      vocabulary: ['こんにちは', 'おはようございます', 'こんばんは', 'さようなら', 'おやすみなさい'],
    },
    {
      id: 'ja-greetings-2',
      topicId: 'greetings',
      level: 'Novice',
      title: 'Please and Thank You',
      content: 'Learn polite phrases for everyday interactions.',
      vocabulary: ['お願いします', 'ありがとう', 'ありがとうございます', 'どういたしまして', 'すみません', '申し訳ありません'],
    },
    {
      id: 'ja-greetings-3',
      topicId: 'greetings',
      level: 'Intermediate',
      title: 'Introducing Yourself',
      content: 'Learn how to introduce yourself and ask others their name.',
      vocabulary: ['私は...です', 'お名前は何ですか？', 'お会いできて嬉しいです', '初めまして', '私は...出身です', '出身はどこですか？'],
    },
    {
      id: 'ja-greetings-4',
      topicId: 'greetings',
      level: 'Advanced',
      title: 'Saying Goodbye',
      content: 'Learn different ways to say goodbye and see you soon.',
      vocabulary: ['さようなら', 'またね', 'また明日', 'バイバイ', '気をつけて', '失礼します！'],
    },
    {
      id: 'ja-greetings-5',
      topicId: 'greetings',
      level: 'Expert',
      title: 'Asking How Someone Is',
      content: 'Learn how to ask how someone is feeling and respond.',
      vocabulary: ['お元気ですか？', '調子はどう？', 'とても元気です', '悪くない', 'まあまあ', 'あなたは？'],
    },
  ],
  ko: [
    {
      id: 'ko-greetings-1',
      topicId: 'greetings',
      level: 'Novice',
      title: 'Basic Greetings',
      content: 'Learn how to say hello and goodbye in Korean.',
      vocabulary: ['안녕하세요', '좋은 아침입니다', '안녕히 가세요', '안녕히 계세요', '안녕'],
    },
    {
      id: 'ko-greetings-2',
      topicId: 'greetings',
      level: 'Novice',
      title: 'Please and Thank You',
      content: 'Learn polite phrases for everyday interactions.',
      vocabulary: ['제발', '감사합니다', '대단히 감사합니다', '천만에요', '죄송합니다', '미안합니다'],
    },
    {
      id: 'ko-greetings-3',
      topicId: 'greetings',
      level: 'Intermediate',
      title: 'Introducing Yourself',
      content: 'Learn how to introduce yourself and ask others their name.',
      vocabulary: ['제 이름은...입니다', '이름이 뭐예요?', '만나서 반갑습니다', '반갑습니다', '저는...에서 왔어요', '어디서 오셨어요?'],
    },
    {
      id: 'ko-greetings-4',
      topicId: 'greetings',
      level: 'Advanced',
      title: 'Saying Goodbye',
      content: 'Learn different ways to say goodbye and see you soon.',
      vocabulary: ['안녕히 가세요', '또 만나요', '내일 봐요', '안녕', '잘 가', '다음에 봐요!'],
    },
    {
      id: 'ko-greetings-5',
      topicId: 'greetings',
      level: 'Expert',
      title: 'Asking How Someone Is',
      content: 'Learn how to ask how someone is feeling and respond.',
      vocabulary: ['어떠세요?', '잘 지내세요?', '매우 좋아요', '나쁘지 않아요', '그냥 그래요', '당신은요?'],
    },
  ],
  vi: [
    {
      id: 'vi-greetings-1',
      topicId: 'greetings',
      level: 'Novice',
      title: 'Basic Greetings',
      content: 'Learn how to say hello and goodbye in Vietnamese.',
      vocabulary: ['Xin chào', 'Chào buổi sáng', 'Chào buổi tối', 'Tạm biệt', 'Hẹn gặp lại'],
    },
    {
      id: 'vi-greetings-2',
      topicId: 'greetings',
      level: 'Novice',
      title: 'Please and Thank You',
      content: 'Learn polite phrases for everyday interactions.',
      vocabulary: ['Xin vui lòng', 'Cảm ơn', 'Cảm ơn rất nhiều', 'Không có gì', 'Xin lỗi', 'Tôi xin lỗi'],
    },
    {
      id: 'vi-greetings-3',
      topicId: 'greetings',
      level: 'Intermediate',
      title: 'Introducing Yourself',
      content: 'Learn how to introduce yourself and ask others their name.',
      vocabulary: ['Tôi tên là...', 'Bạn tên gì?', 'Rất vui được gặp bạn', 'Hân hạnh được biết bạn', 'Tôi đến từ...', 'Bạn đến từ đâu?'],
    },
    {
      id: 'vi-greetings-4',
      topicId: 'greetings',
      level: 'Advanced',
      title: 'Saying Goodbye',
      content: 'Learn different ways to say goodbye and see you soon.',
      vocabulary: ['Tạm biệt', 'Hẹn gặp lại', 'Gặp lại ngày mai', 'Chào', 'Bảo trọng', 'Hẹn gặp lại!'],
    },
    {
      id: 'vi-greetings-5',
      topicId: 'greetings',
      level: 'Expert',
      title: 'Asking How Someone Is',
      content: 'Learn how to ask how someone is feeling and respond.',
      vocabulary: ['Bạn khỏe không?', 'Bạn thế nào?', 'Rất tốt', 'Không tệ', 'Bình thường', 'Còn bạn?'],
    },
  ],
  th: [
    {
      id: 'th-greetings-1',
      topicId: 'greetings',
      level: 'Novice',
      title: 'Basic Greetings',
      content: 'Learn how to say hello and goodbye in Thai.',
      vocabulary: ['สวัสดี', 'สวัสดีตอนเช้า', 'สวัสดีตอนเย็น', 'ราตรีสวัสดิ์', 'ลาก่อน'],
    },
    {
      id: 'th-greetings-2',
      topicId: 'greetings',
      level: 'Novice',
      title: 'Please and Thank You',
      content: 'Learn polite phrases for everyday interactions.',
      vocabulary: ['กรุณา', 'ขอบคุณ', 'ขอบคุณมาก', 'ไม่เป็นไร', 'ขอโทษ', 'เสียใจด้วย'],
    },
    {
      id: 'th-greetings-3',
      topicId: 'greetings',
      level: 'Intermediate',
      title: 'Introducing Yourself',
      content: 'Learn how to introduce yourself and ask others their name.',
      vocabulary: ['ผมชื่อ...', 'คุณชื่ออะไร?', 'ยินดีที่ได้รู้จัก', 'ยินดีครับ', 'ผมมาจาก...', 'คุณมาจากไหน?'],
    },
    {
      id: 'th-greetings-4',
      topicId: 'greetings',
      level: 'Advanced',
      title: 'Saying Goodbye',
      content: 'Learn different ways to say goodbye and see you soon.',
      vocabulary: ['ลาก่อน', 'แล้วพบกัน', 'เจอกันพรุ่งนี้', 'บาย', 'ดูแลตัวเอง', 'แล้วเจอกัน!'],
    },
    {
      id: 'th-greetings-5',
      topicId: 'greetings',
      level: 'Expert',
      title: 'Asking How Someone Is',
      content: 'Learn how to ask how someone is feeling and respond.',
      vocabulary: ['สบายดีไหม?', 'เป็นอย่างไรบ้าง?', 'ดีมาก', 'ไม่แย่', 'พอใช้', 'แล้วคุณล่ะ?'],
    },
  ],
  id: [
    {
      id: 'id-greetings-1',
      topicId: 'greetings',
      level: 'Novice',
      title: 'Basic Greetings',
      content: 'Learn how to say hello and goodbye in Indonesian.',
      vocabulary: ['Halo', 'Selamat pagi', 'Selamat malam', 'Sampai jumpa'],
    },
    {
      id: 'id-greetings-2',
      topicId: 'greetings',
      level: 'Novice',
      title: 'Please and Thank You',
      content: 'Learn polite phrases for everyday interactions.',
      vocabulary: ['Tolong', 'Terima kasih', 'Terima kasih banyak', 'Sama-sama', 'Maaf', 'Mohon maaf'],
    },
    {
      id: 'id-greetings-3',
      topicId: 'greetings',
      level: 'Intermediate',
      title: 'Introducing Yourself',
      content: 'Learn how to introduce yourself and ask others their name.',
      vocabulary: ['Nama saya...', 'Siapa nama Anda?', 'Senang bertemu dengan Anda', 'Senang bertemu', 'Saya dari...', 'Dari mana Anda?'],
    },
    {
      id: 'id-greetings-4',
      topicId: 'greetings',
      level: 'Advanced',
      title: 'Saying Goodbye',
      content: 'Learn different ways to say goodbye and see you soon.',
      vocabulary: ['Sampai jumpa', 'Sampai bertemu lagi', 'Sampai jumpa besok', 'Dah', 'Hati-hati', 'Selamat tinggal!'],
    },
    {
      id: 'id-greetings-5',
      topicId: 'greetings',
      level: 'Expert',
      title: 'Asking How Someone Is',
      content: 'Learn how to ask how someone is feeling and respond.',
      vocabulary: ['Apa kabar?', 'Bagaimana keadaannya?', 'Sangat baik', 'Tidak buruk', 'Biasa saja', 'Dan Anda?'],
    },
  ],
};

const LEVELS = ['Novice', 'Beginner', 'Intermediate', 'Advanced', 'Expert'] as const;
const LESSONS_PER_LEVEL = 5;

const LEVEL_LESSON_TEMPLATES: Record<string, { title: string; content: string }[]> = {
  Novice: [
    { title: 'Basic Greetings', content: 'Learn how to say hello, goodbye, and ask how someone is doing.' },
    { title: 'Hello & Goodbye', content: 'Learn essential greetings for meeting and parting.' },
    { title: 'Good Morning & Evening', content: 'Learn time-of-day greetings.' },
    { title: 'Please & Thank You', content: 'Learn polite phrases for everyday interactions.' },
    { title: 'Nice to Meet You', content: 'Learn phrases for first introductions.' },
  ],
  Beginner: [
    { title: 'Formal Greetings', content: 'Learn formal ways to greet people and introduce yourself.' },
    { title: 'Introducing Yourself', content: 'Learn how to introduce yourself and ask others their name.' },
    { title: 'Saying Goodbye', content: 'Learn different ways to say goodbye and see you soon.' },
    { title: 'Asking How Someone Is', content: 'Learn how to ask how someone is feeling and respond.' },
    { title: 'Common Phrases', content: 'Learn everyday phrases for basic conversation.' },
  ],
  Intermediate: [
    { title: 'Numbers 1-20', content: 'Learn to count from 1 to 20.' },
    { title: 'Days of the Week', content: 'Learn the days of the week.' },
    { title: 'Colors', content: 'Learn basic color vocabulary.' },
    { title: 'Family Members', content: 'Learn words for family members.' },
    { title: 'Common Verbs', content: 'Learn essential verbs for daily conversation.' },
  ],
  Advanced: [
    { title: 'Essential Verbs', content: 'Learn common verbs: to be, to have, to go, to do.' },
    { title: 'Directions', content: 'Learn how to ask for and give directions.' },
    { title: 'Shopping', content: 'Learn vocabulary for shopping and buying.' },
    { title: 'Weather', content: 'Learn how to talk about the weather.' },
    { title: 'Time & Schedules', content: 'Learn to tell time and discuss schedules.' },
  ],
  Expert: [
    { title: 'Building Sentences', content: 'Learn to construct simple sentences using common verbs.' },
    { title: 'Conversation Starters', content: 'Learn phrases to start and maintain conversations.' },
    { title: 'Idioms & Expressions', content: 'Learn common idioms and expressions.' },
    { title: 'Complex Sentences', content: 'Learn to form more complex sentence structures.' },
    { title: 'Cultural Phrases', content: 'Learn phrases that reflect cultural norms.' },
  ],
};

// Vocabulary per lesson title per language - English prompt maps to target language word
type VocabItem = { en: string } & Partial<Record<string, string>>;
const LESSON_VOCAB_ITEMS: Record<string, VocabItem[]> = {
  'Basic Greetings': [
    { en: 'hello', es: 'Hola', de: 'Hallo', fr: 'Bonjour', it: 'Ciao', pt: 'Olá', nl: 'Hallo', ru: 'Привет', zh: '你好', ja: 'こんにちは', ko: '안녕하세요', ar: 'مرحبا', he: 'שלום', hi: 'नमस्ते' },
    { en: 'goodbye', es: 'Adiós', de: 'Auf Wiedersehen', fr: 'Au revoir', it: 'Arrivederci', pt: 'Tchau', nl: 'Tot ziens', ru: 'До свидания', zh: '再见', ja: 'さようなら', ko: '안녕히 가세요', ar: 'مع السلامة', he: 'להתראות', hi: 'अलविदा' },
    { en: 'good morning', es: 'Buenos días', de: 'Guten Morgen', fr: 'Bonjour', it: 'Buongiorno', pt: 'Bom dia', nl: 'Goedemorgen', ru: 'Доброе утро', zh: '早上好', ja: 'おはようございます', ko: '좋은 아침입니다', ar: 'صباح الخير', he: 'בוקר טוב', hi: 'सुप्रभात' },
    { en: 'good evening', es: 'Buenas tardes', de: 'Guten Abend', fr: 'Bonsoir', it: 'Buonasera', pt: 'Boa tarde', nl: 'Goedenavond', ru: 'Добрый вечер', zh: '晚上好', ja: 'こんばんは', ko: '안녕하세요', ar: 'مساء الخير', he: 'ערב טוב', hi: 'शुभ संध्या' },
  ],
  'Hello & Goodbye': [
    { en: 'hello', es: 'Hola', de: 'Hallo', fr: 'Bonjour', it: 'Ciao', pt: 'Olá', nl: 'Hallo', ru: 'Привет', zh: '你好', ja: 'こんにちは', ko: '안녕하세요' },
    { en: 'goodbye', es: 'Adiós', de: 'Tschüss', fr: 'Au revoir', it: 'Ciao', pt: 'Tchau', nl: 'Tot ziens', ru: 'Пока', zh: '再见', ja: 'バイバイ', ko: '안녕' },
    { en: 'hi', es: 'Hola', de: 'Hallo', fr: 'Salut', it: 'Ciao', pt: 'Oi', nl: 'Hoi', ru: 'Привет', zh: '嗨', ja: 'やあ', ko: '안녕' },
    { en: 'bye', es: 'Adiós', de: 'Tschüss', fr: 'Salut', it: 'Ciao', pt: 'Tchau', nl: 'Doei', ru: 'Пока', zh: '拜拜', ja: 'じゃあ', ko: '바이' },
  ],
  'Good Morning & Evening': [
    { en: 'good morning', es: 'Buenos días', de: 'Guten Morgen', fr: 'Bonjour', it: 'Buongiorno', pt: 'Bom dia', nl: 'Goedemorgen', ru: 'Доброе утро', zh: '早上好', ja: 'おはよう', ko: '좋은 아침' },
    { en: 'good evening', es: 'Buenas tardes', de: 'Guten Abend', fr: 'Bonsoir', it: 'Buonasera', pt: 'Boa tarde', nl: 'Goedenavond', ru: 'Добрый вечер', zh: '晚上好', ja: 'こんばんは', ko: '안녕하세요' },
    { en: 'good night', es: 'Buenas noches', de: 'Gute Nacht', fr: 'Bonne nuit', it: 'Buonanotte', pt: 'Boa noite', nl: 'Welterusten', ru: 'Спокойной ночи', zh: '晚安', ja: 'おやすみなさい', ko: '잘 자요' },
  ],
  'Please & Thank You': [
    { en: 'please', es: 'Por favor', de: 'Bitte', fr: 'S\'il vous plaît', it: 'Per favore', pt: 'Por favor', nl: 'Alsjeblieft', ru: 'Пожалуйста', zh: '请', ja: 'お願いします', ko: '제발' },
    { en: 'thank you', es: 'Gracias', de: 'Danke', fr: 'Merci', it: 'Grazie', pt: 'Obrigado', nl: 'Dank je', ru: 'Спасибо', zh: '谢谢', ja: 'ありがとう', ko: '감사합니다' },
    { en: "you're welcome", es: 'De nada', de: 'Gern geschehen', fr: 'De rien', it: 'Prego', pt: 'De nada', nl: 'Graag gedaan', ru: 'Пожалуйста', zh: '不客气', ja: 'どういたしまして', ko: '천만에요' },
    { en: 'sorry', es: 'Lo siento', de: 'Entschuldigung', fr: 'Désolé', it: 'Scusa', pt: 'Desculpe', nl: 'Sorry', ru: 'Извините', zh: '对不起', ja: 'すみません', ko: '죄송합니다' },
  ],
  'Nice to Meet You': [
    { en: 'nice to meet you', es: 'Mucho gusto', de: 'Freut mich', fr: 'Enchanté', it: 'Piacere', pt: 'Prazer', nl: 'Aangenaam', ru: 'Приятно познакомиться', zh: '很高兴认识你', ja: '初めまして', ko: '만나서 반가워요' },
    { en: 'my name is', es: 'Me llamo', de: 'Ich heiße', fr: 'Je m\'appelle', it: 'Mi chiamo', pt: 'Me chamo', nl: 'Ik heet', ru: 'Меня зовут', zh: '我叫', ja: '私は...です', ko: '제 이름은...입니다' },
    { en: "what's your name?", es: '¿Cómo te llamas?', de: 'Wie heißen Sie?', fr: 'Comment vous appelez-vous?', it: 'Come ti chiami?', pt: 'Como se chama?', nl: 'Hoe heet u?', ru: 'Как вас зовут?', zh: '你叫什么名字？', ja: 'お名前は？', ko: '이름이 뭐예요?' },
    { en: 'pleased to meet you', es: 'Encantado', de: 'Angenehm', fr: 'Ravi de vous rencontrer', it: 'Lieto di conoscerti', pt: 'Encantado', nl: 'Leuk je te ontmoeten', ru: 'Рад познакомиться', zh: '认识你很高兴', ja: 'お会いできて嬉しいです', ko: '만나서 반갑습니다' },
  ],
  'Formal Greetings': [
    { en: 'pleased to meet you', es: 'Mucho gusto', de: 'Freut mich', fr: 'Enchanté', it: 'Piacere', pt: 'Prazer', nl: 'Aangenaam', ru: 'Приятно познакомиться', zh: '幸会', ja: 'お会いできて光栄です', ko: '반갑습니다' },
    { en: 'what is your name?', es: '¿Cómo se llama?', de: 'Wie heißen Sie?', fr: 'Comment vous appelez-vous?', it: 'Come si chiama?', pt: 'Como se chama?', nl: 'Hoe heet u?', ru: 'Как вас зовут?', zh: '请问贵姓？', ja: 'お名前は何ですか？', ko: '성함이 어떻게 되세요?' },
    { en: 'my name is', es: 'Me llamo', de: 'Ich heiße', fr: 'Je m\'appelle', it: 'Mi chiamo', pt: 'Me chamo', nl: 'Ik heet', ru: 'Меня зовут', zh: '我叫', ja: '私は...と申します', ko: '제 이름은...입니다' },
    { en: 'sir', es: 'Señor', de: 'Herr', fr: 'Monsieur', it: 'Signore', pt: 'Senhor', nl: 'Meneer', ru: 'Господин', zh: '先生', ja: '～さん', ko: '선생님' },
    { en: 'madam', es: 'Señora', de: 'Frau', fr: 'Madame', it: 'Signora', pt: 'Senhora', nl: 'Mevrouw', ru: 'Госпожа', zh: '女士', ja: '～様', ko: '여사님' },
  ],
  'Introducing Yourself': [
    { en: 'my name is', es: 'Me llamo', de: 'Ich heiße', fr: 'Je m\'appelle', it: 'Mi chiamo', pt: 'Me chamo', nl: 'Ik heet', ru: 'Меня зовут', zh: '我叫', ja: '私は...です', ko: '제 이름은...입니다' },
    { en: "what's your name?", es: '¿Cómo te llamas?', de: 'Wie heißt du?', fr: 'Comment tu t\'appelles?', it: 'Come ti chiami?', pt: 'Como você se chama?', nl: 'Hoe heet je?', ru: 'Как тебя зовут?', zh: '你叫什么？', ja: '名前は？', ko: '이름이 뭐예요?' },
    { en: 'nice to meet you', es: 'Mucho gusto', de: 'Freut mich', fr: 'Enchanté', it: 'Piacere', pt: 'Prazer', nl: 'Aangenaam', ru: 'Приятно познакомиться', zh: '很高兴认识你', ja: '初めまして', ko: '만나서 반가워요' },
    { en: "i'm from", es: 'Soy de', de: 'Ich komme aus', fr: 'Je viens de', it: 'Sono di', pt: 'Sou de', nl: 'Ik kom uit', ru: 'Я из', zh: '我来自', ja: '私は...出身です', ko: '저는...에서 왔어요' },
  ],
  'Saying Goodbye': [
    { en: 'see you later', es: 'Hasta luego', de: 'Bis später', fr: 'À bientôt', it: 'A presto', pt: 'Até logo', nl: 'Tot later', ru: 'До скорого', zh: '回头见', ja: 'またね', ko: '나중에 봐요' },
    { en: 'see you tomorrow', es: 'Hasta mañana', de: 'Bis morgen', fr: 'À demain', it: 'A domani', pt: 'Até amanhã', nl: 'Tot morgen', ru: 'До завтра', zh: '明天见', ja: 'また明日', ko: '내일 봐요' },
    { en: 'goodbye', es: 'Adiós', de: 'Auf Wiedersehen', fr: 'Au revoir', it: 'Arrivederci', pt: 'Adeus', nl: 'Tot ziens', ru: 'До свидания', zh: '再见', ja: 'さようなら', ko: '안녕히 가세요' },
    { en: 'take care', es: 'Cuídate', de: 'Mach\'s gut', fr: 'Prends soin', it: 'Statti bene', pt: 'Cuide-se', nl: 'Pas op jezelf', ru: 'Береги себя', zh: '保重', ja: '気をつけて', ko: '잘 가' },
  ],
  'Asking How Someone Is': [
    { en: "how are you?", es: '¿Cómo estás?', de: 'Wie geht es dir?', fr: 'Comment vas-tu?', it: 'Come stai?', pt: 'Como você está?', nl: 'Hoe gaat het?', ru: 'Как дела?', zh: '你好吗？', ja: '元気？', ko: '잘 지내세요?' },
    { en: "i'm fine", es: 'Estoy bien', de: 'Mir geht es gut', fr: 'Je vais bien', it: 'Sto bene', pt: 'Estou bem', nl: 'Het gaat goed', ru: 'У меня всё хорошо', zh: '我很好', ja: '元気です', ko: '잘 지내요' },
    { en: 'and you?', es: '¿Y tú?', de: 'Und dir?', fr: 'Et toi?', it: 'E tu?', pt: 'E você?', nl: 'En jij?', ru: 'А у тебя?', zh: '你呢？', ja: 'あなたは？', ko: '당신은요?' },
  ],
  'Common Phrases': [
    { en: 'yes', es: 'Sí', de: 'Ja', fr: 'Oui', it: 'Sì', pt: 'Sim', nl: 'Ja', ru: 'Да', zh: '是', ja: 'はい', ko: '네' },
    { en: 'no', es: 'No', de: 'Nein', fr: 'Non', it: 'No', pt: 'Não', nl: 'Nee', ru: 'Нет', zh: '不', ja: 'いいえ', ko: '아니요' },
    { en: 'please', es: 'Por favor', de: 'Bitte', fr: 'S\'il vous plaît', it: 'Per favore', pt: 'Por favor', nl: 'Alsjeblieft', ru: 'Пожалуйста', zh: '请', ja: 'お願いします', ko: '제발' },
    { en: 'thank you', es: 'Gracias', de: 'Danke', fr: 'Merci', it: 'Grazie', pt: 'Obrigado', nl: 'Dank je', ru: 'Спасибо', zh: '谢谢', ja: 'ありがとう', ko: '감사합니다' },
    { en: 'excuse me', es: 'Disculpe', de: 'Entschuldigung', fr: 'Excusez-moi', it: 'Scusi', pt: 'Com licença', nl: 'Sorry', ru: 'Извините', zh: '不好意思', ja: 'すみません', ko: '실례합니다' },
  ],
  'Numbers 1-20': [
    { en: 'one', es: 'uno', de: 'eins', fr: 'un', it: 'uno', pt: 'um', nl: 'een', ru: 'один', zh: '一', ja: '一', ko: '일', sv: 'ett', no: 'en', da: 'en', fi: 'yksi', pl: 'jeden', tr: 'bir', el: 'ένα', ar: 'واحد', he: 'אחד', hi: 'एक', vi: 'một', th: 'หนึ่ง', id: 'satu' },
    { en: 'two', es: 'dos', de: 'zwei', fr: 'deux', it: 'due', pt: 'dois', nl: 'twee', ru: 'два', zh: '二', ja: '二', ko: '이', sv: 'två', no: 'to', da: 'to', fi: 'kaksi', pl: 'dwa', tr: 'iki', el: 'δύο', ar: 'اثنان', he: 'שניים', hi: 'दो', vi: 'hai', th: 'สอง', id: 'dua' },
    { en: 'three', es: 'tres', de: 'drei', fr: 'trois', it: 'tre', pt: 'três', nl: 'drie', ru: 'три', zh: '三', ja: '三', ko: '삼', sv: 'tre', no: 'tre', da: 'tre', fi: 'kolme', pl: 'trzy', tr: 'üç', el: 'τρία', ar: 'ثلاثة', he: 'שלושה', hi: 'तीन', vi: 'ba', th: 'สาม', id: 'tiga' },
    { en: 'four', es: 'cuatro', de: 'vier', fr: 'quatre', it: 'quattro', pt: 'quatro', nl: 'vier', ru: 'четыре', zh: '四', ja: '四', ko: '사', sv: 'fyra', no: 'fire', da: 'fire', fi: 'neljä', pl: 'cztery', tr: 'dört', el: 'τέσσερα', ar: 'أربعة', he: 'ארבעה', hi: 'चार', vi: 'bốn', th: 'สี่', id: 'empat' },
    { en: 'five', es: 'cinco', de: 'fünf', fr: 'cinq', it: 'cinque', pt: 'cinco', nl: 'vijf', ru: 'пять', zh: '五', ja: '五', ko: '오', sv: 'fem', no: 'fem', da: 'fem', fi: 'viisi', pl: 'pięć', tr: 'beş', el: 'πέντε', ar: 'خمسة', he: 'חמישה', hi: 'पाँच', vi: 'năm', th: 'ห้า', id: 'lima' },
  ],
  'Days of the Week': [
    { en: 'Monday', es: 'lunes', de: 'Montag', fr: 'lundi', it: 'lunedì', pt: 'segunda-feira', nl: 'maandag', ru: 'понедельник', zh: '星期一', ja: '月曜日', ko: '월요일', sv: 'måndag', no: 'mandag', da: 'mandag', fi: 'maanantai', pl: 'poniedziałek', tr: 'Pazartesi', el: 'Δευτέρα', ar: 'الإثنين', he: 'יום שני', hi: 'सोमवार', vi: 'Thứ Hai', th: 'วันจันทร์', id: 'Senin', uk: 'понеділок', cs: 'pondělí' },
    { en: 'Tuesday', es: 'martes', de: 'Dienstag', fr: 'mardi', it: 'martedì', pt: 'terça-feira', nl: 'dinsdag', ru: 'вторник', zh: '星期二', ja: '火曜日', ko: '화요일', sv: 'tisdag', no: 'tirsdag', da: 'tirsdag', fi: 'tiistai', pl: 'wtorek', tr: 'Salı', el: 'Τρίτη', ar: 'الثلاثاء', he: 'יום שלישי', hi: 'मंगलवार', vi: 'Thứ Ba', th: 'วันอังคาร', id: 'Selasa', uk: 'вівторок', cs: 'úterý' },
    { en: 'Wednesday', es: 'miércoles', de: 'Mittwoch', fr: 'mercredi', it: 'mercoledì', pt: 'quarta-feira', nl: 'woensdag', ru: 'среда', zh: '星期三', ja: '水曜日', ko: '수요일', sv: 'onsdag', no: 'onsdag', da: 'onsdag', fi: 'keskiviikko', pl: 'środa', tr: 'Çarşamba', el: 'Τετάρτη', ar: 'الأربعاء', he: 'יום רביעי', hi: 'बुधवार', vi: 'Thứ Tư', th: 'วันพุธ', id: 'Rabu', uk: 'середа', cs: 'středa' },
    { en: 'Thursday', es: 'jueves', de: 'Donnerstag', fr: 'jeudi', it: 'giovedì', pt: 'quinta-feira', nl: 'donderdag', ru: 'четверг', zh: '星期四', ja: '木曜日', ko: '목요일', sv: 'torsdag', no: 'torsdag', da: 'torsdag', fi: 'torstai', pl: 'czwartek', tr: 'Perşembe', el: 'Πέμπτη', ar: 'الخميس', he: 'יום חמישי', hi: 'गुरूवार', vi: 'Thứ Năm', th: 'วันพฤหัสบดี', id: 'Kamis', uk: 'четвер', cs: 'čtvrtek' },
    { en: 'Friday', es: 'viernes', de: 'Freitag', fr: 'vendredi', it: 'venerdì', pt: 'sexta-feira', nl: 'vrijdag', ru: 'пятница', zh: '星期五', ja: '金曜日', ko: '금요일', sv: 'fredag', no: 'fredag', da: 'fredag', fi: 'perjantai', pl: 'piątek', tr: 'Cuma', el: 'Παρασκευή', ar: 'الجمعة', he: 'יום שישי', hi: 'शुक्रवार', vi: 'Thứ Sáu', th: 'วันศุกร์', id: 'Jumat', uk: 'п\'ятниця', cs: 'pátek' },
  ],
  'Colors': [
    { en: 'red', es: 'rojo', de: 'rot', fr: 'rouge', it: 'rosso', pt: 'vermelho', nl: 'rood', ru: 'красный', zh: '红', ja: '赤', ko: '빨간색', sv: 'röd', no: 'rød', da: 'rød', fi: 'punainen', pl: 'czerwony', tr: 'kırmızı', el: 'κόκκινο', ar: 'أحمر', he: 'אדום', hi: 'लाल', vi: 'đỏ', th: 'แดง', id: 'merah', uk: 'червоний', cs: 'červená' },
    { en: 'blue', es: 'azul', de: 'blau', fr: 'bleu', it: 'blu', pt: 'azul', nl: 'blauw', ru: 'синий', zh: '蓝', ja: '青', ko: '파란색', sv: 'blå', no: 'blå', da: 'blå', fi: 'sininen', pl: 'niebieski', tr: 'mavi', el: 'μπλε', ar: 'أزرق', he: 'כחול', hi: 'नीला', vi: 'xanh dương', th: 'น้ำเงิน', id: 'biru', uk: 'синій', cs: 'modrá' },
    { en: 'green', es: 'verde', de: 'grün', fr: 'vert', it: 'verde', pt: 'verde', nl: 'groen', ru: 'зелёный', zh: '绿', ja: '緑', ko: '초록색', sv: 'grön', no: 'grønn', da: 'grøn', fi: 'vihreä', pl: 'zielony', tr: 'yeşil', el: 'πράσινο', ar: 'أخضر', he: 'ירוק', hi: 'हरा', vi: 'xanh lá', th: 'เขียว', id: 'hijau', uk: 'зелений', cs: 'zelená' },
    { en: 'yellow', es: 'amarillo', de: 'gelb', fr: 'jaune', it: 'giallo', pt: 'amarelo', nl: 'geel', ru: 'жёлтый', zh: '黄', ja: '黄色', ko: '노란색', sv: 'gul', no: 'gul', da: 'gul', fi: 'keltainen', pl: 'żółty', tr: 'sarı', el: 'κίτρινο', ar: 'أصفر', he: 'צהוב', hi: 'पीला', vi: 'vàng', th: 'เหลือง', id: 'kuning', uk: 'жовтий', cs: 'žlutá' },
    { en: 'black', es: 'negro', de: 'schwarz', fr: 'noir', it: 'nero', pt: 'preto', nl: 'zwart', ru: 'чёрный', zh: '黑', ja: '黒', ko: '검은색', sv: 'svart', no: 'svart', da: 'sort', fi: 'musta', pl: 'czarny', tr: 'siyah', el: 'μαύρο', ar: 'أسود', he: 'שחור', hi: 'काला', vi: 'đen', th: 'ดำ', id: 'hitam', uk: 'чорний', cs: 'černá' },
  ],
  'Family Members': [
    { en: 'mother', es: 'madre', de: 'Mutter', fr: 'mère', it: 'madre', pt: 'mãe', nl: 'moeder', ru: 'мать', zh: '妈妈', ja: '母', ko: '어머니', sv: 'mor', no: 'mor', da: 'mor', fi: 'äiti', pl: 'matka', tr: 'anne', el: 'μητέρα', ar: 'أم', he: 'אמא', hi: 'माँ', vi: 'mẹ', th: 'แม่', id: 'ibu', uk: 'мама', cs: 'matka' },
    { en: 'father', es: 'padre', de: 'Vater', fr: 'père', it: 'padre', pt: 'pai', nl: 'vader', ru: 'отец', zh: '爸爸', ja: '父', ko: '아버지', sv: 'far', no: 'far', da: 'far', fi: 'isä', pl: 'ojciec', tr: 'baba', el: 'πατέρας', ar: 'أب', he: 'אבא', hi: 'पिता', vi: 'cha', th: 'พ่อ', id: 'ayah', uk: 'тато', cs: 'otec' },
    { en: 'sister', es: 'hermana', de: 'Schwester', fr: 'sœur', it: 'sorella', pt: 'irmã', nl: 'zus', ru: 'сестра', zh: '姐姐/妹妹', ja: '姉/妹', ko: '언니/여동생', sv: 'syster', no: 'søster', da: 'søster', fi: 'sisar', pl: 'siostra', tr: 'kız kardeş', el: 'αδερφή', ar: 'أخت', he: 'אחות', hi: 'बहन', vi: 'chị/em gái', th: 'พี่สาว/น้องสาว', id: 'saudari', uk: 'сестра', cs: 'sestra' },
    { en: 'brother', es: 'hermano', de: 'Bruder', fr: 'frère', it: 'fratello', pt: 'irmão', nl: 'broer', ru: 'брат', zh: '哥哥/弟弟', ja: '兄/弟', ko: '오빠/남동생', sv: 'bror', no: 'bror', da: 'bror', fi: 'veli', pl: 'brat', tr: 'erkek kardeş', el: 'αδερφός', ar: 'أخ', he: 'אח', hi: 'भाई', vi: 'anh/em trai', th: 'พี่ชาย/น้องชาย', id: 'saudara', uk: 'брат', cs: 'bratr' },
    { en: 'family', es: 'familia', de: 'Familie', fr: 'famille', it: 'famiglia', pt: 'família', nl: 'familie', ru: 'семья', zh: '家庭', ja: '家族', ko: '가족', sv: 'familj', no: 'familie', da: 'familie', fi: 'perhe', pl: 'rodzina', tr: 'aile', el: 'οικογένεια', ar: 'عائلة', he: 'משפחה', hi: 'परिवार', vi: 'gia đình', th: 'ครอบครัว', id: 'keluarga', uk: 'родина', cs: 'rodina' },
  ],
  'Common Verbs': [
    { en: 'to go', es: 'ir', de: 'gehen', fr: 'aller', it: 'andare', pt: 'ir', nl: 'gaan', ru: 'идти', zh: '去', ja: '行く', ko: '가다', sv: 'gå', no: 'gå', da: 'gå', fi: 'mennä', pl: 'iść', tr: 'gitmek', el: 'πηγαίνω', ar: 'يذهب', he: 'ללכת', hi: 'जाना', vi: 'đi', th: 'ไป', id: 'pergi', uk: 'йти', cs: 'jít' },
    { en: 'to come', es: 'venir', de: 'kommen', fr: 'venir', it: 'venire', pt: 'vir', nl: 'komen', ru: 'приходить', zh: '来', ja: '来る', ko: '오다', sv: 'komma', no: 'komme', da: 'komme', fi: 'tulla', pl: 'przychodzić', tr: 'gelmek', el: 'έρχομαι', ar: 'يأتي', he: 'לבוא', hi: 'आना', vi: 'đến', th: 'มา', id: 'datang', uk: 'приходити', cs: 'přijít' },
    { en: 'to eat', es: 'comer', de: 'essen', fr: 'manger', it: 'mangiare', pt: 'comer', nl: 'eten', ru: 'есть', zh: '吃', ja: '食べる', ko: '먹다', sv: 'äta', no: 'spise', da: 'spise', fi: 'syödä', pl: 'jeść', tr: 'yemek', el: 'τρώω', ar: 'يأكل', he: 'לאכול', hi: 'खाना', vi: 'ăn', th: 'กิน', id: 'makan', uk: 'їсти', cs: 'jíst' },
    { en: 'to drink', es: 'beber', de: 'trinken', fr: 'boire', it: 'bere', pt: 'beber', nl: 'drinken', ru: 'пить', zh: '喝', ja: '飲む', ko: '마시다', sv: 'dricka', no: 'drikke', da: 'drikke', fi: 'juoda', pl: 'pić', tr: 'içmek', el: 'πίνω', ar: 'يشرب', he: 'לשתות', hi: 'पीना', vi: 'uống', th: 'ดื่ม', id: 'minum', uk: 'пити', cs: 'pít' },
    { en: 'to sleep', es: 'dormir', de: 'schlafen', fr: 'dormir', it: 'dormire', pt: 'dormir', nl: 'slapen', ru: 'спать', zh: '睡', ja: '寝る', ko: '자다', sv: 'sova', no: 'sove', da: 'sove', fi: 'nukkua', pl: 'spać', tr: 'uyumak', el: 'κοιμάμαι', ar: 'ينام', he: 'לישון', hi: 'सोना', vi: 'ngủ', th: 'นอน', id: 'tidur', uk: 'спати', cs: 'spát' },
  ],
  'Essential Verbs': [
    { en: 'to be', es: 'ser/estar', de: 'sein', fr: 'être', it: 'essere', pt: 'ser/estar', nl: 'zijn', ru: 'быть', zh: '是', ja: 'です', ko: '이다', sv: 'vara', no: 'være', da: 'være', fi: 'olla', pl: 'być', tr: 'olmak', el: 'είμαι', ar: 'يكون', he: 'להיות', hi: 'होना', vi: 'là', th: 'เป็น', id: 'adalah', uk: 'бути', cs: 'být' },
    { en: 'to have', es: 'tener', de: 'haben', fr: 'avoir', it: 'avere', pt: 'ter', nl: 'hebben', ru: 'иметь', zh: '有', ja: '持つ', ko: '가지다', sv: 'ha', no: 'ha', da: 'have', fi: 'olla', pl: 'mieć', tr: 'sahip olmak', el: 'έχω', ar: 'يملك', he: 'יש', hi: 'होना', vi: 'có', th: 'มี', id: 'punya', uk: 'мати', cs: 'mít' },
    { en: 'to go', es: 'ir', de: 'gehen', fr: 'aller', it: 'andare', pt: 'ir', nl: 'gaan', ru: 'идти', zh: '去', ja: '行く', ko: '가다', sv: 'gå', no: 'gå', da: 'gå', fi: 'mennä', pl: 'iść', tr: 'gitmek', el: 'πηγαίνω', ar: 'يذهب', he: 'ללכת', hi: 'जाना', vi: 'đi', th: 'ไป', id: 'pergi', uk: 'йти', cs: 'jít' },
    { en: 'to do', es: 'hacer', de: 'tun', fr: 'faire', it: 'fare', pt: 'fazer', nl: 'doen', ru: 'делать', zh: '做', ja: 'する', ko: '하다', sv: 'göra', no: 'gjøre', da: 'gøre', fi: 'tehdä', pl: 'robić', tr: 'yapmak', el: 'κάνω', ar: 'يفعل', he: 'לעשות', hi: 'करना', vi: 'làm', th: 'ทำ', id: 'melakukan', uk: 'робити', cs: 'dělat' },
  ],
  'Directions': [
    { en: 'left', es: 'izquierda', de: 'links', fr: 'gauche', it: 'sinistra', pt: 'esquerda', nl: 'links', ru: 'лево', zh: '左', ja: '左', ko: '왼쪽', sv: 'vänster', no: 'venstre', da: 'venstre', fi: 'vasen', pl: 'lewo', tr: 'sol', el: 'αριστερά', ar: 'يسار', he: 'שמאל', hi: 'बाएं', vi: 'trái', th: 'ซ้าย', id: 'kiri', uk: 'ліворуч', cs: 'vlevo' },
    { en: 'right', es: 'derecha', de: 'rechts', fr: 'droite', it: 'destra', pt: 'direita', nl: 'rechts', ru: 'право', zh: '右', ja: '右', ko: '오른쪽', sv: 'höger', no: 'høyre', da: 'højre', fi: 'oikea', pl: 'prawo', tr: 'sağ', el: 'δεξιά', ar: 'يمين', he: 'ימין', hi: 'दाएं', vi: 'phải', th: 'ขวา', id: 'kanan', uk: 'праворуч', cs: 'vpravo' },
    { en: 'straight', es: 'recto', de: 'geradeaus', fr: 'tout droit', it: 'dritto', pt: 'em frente', nl: 'rechtdoor', ru: 'прямо', zh: '直走', ja: 'まっすぐ', ko: '직진', sv: 'rakt fram', no: 'rett fram', da: 'lige ud', fi: 'suoraan', pl: 'prosto', tr: 'düz', el: 'ευθεία', ar: 'مستقيم', he: 'ישר', hi: 'सीधे', vi: 'thẳng', th: 'ตรง', id: 'lurus', uk: 'прямо', cs: 'rovně' },
    { en: 'turn', es: 'girar', de: 'abbiegen', fr: 'tourner', it: 'girare', pt: 'virar', nl: 'sla af', ru: 'повернуть', zh: '转弯', ja: '曲がる', ko: '돌다', sv: 'svänga', no: 'snu', da: 'dreje', fi: 'kääntyä', pl: 'skręcić', tr: 'dönmek', el: 'στρίψε', ar: 'يتحول', he: 'לפנות', hi: 'मुड़ना', vi: 'rẽ', th: 'เลี้ยว', id: 'belok', uk: 'повернути', cs: 'zatáčet' },
    { en: 'near', es: 'cerca', de: 'nah', fr: 'près', it: 'vicino', pt: 'perto', nl: 'dichtbij', ru: 'близко', zh: '附近', ja: '近い', ko: '가까이', sv: 'nära', no: 'nær', da: 'nær', fi: 'lähellä', pl: 'blisko', tr: 'yakın', el: 'κοντά', ar: 'قريب', he: 'קרוב', hi: 'पास', vi: 'gần', th: 'ใกล้', id: 'dekat', uk: 'близько', cs: 'blízko' },
  ],
  'Shopping': [
    { en: 'to buy', es: 'comprar', de: 'kaufen', fr: 'acheter', it: 'comprare', pt: 'comprar', nl: 'kopen', ru: 'покупать', zh: '买', ja: '買う', ko: '사다', sv: 'köpa', no: 'kjøpe', da: 'købe', fi: 'ostaa', pl: 'kupić', tr: 'almak', el: 'αγοράζω', ar: 'يشتري', he: 'לקנות', hi: 'खरीदना', vi: 'mua', th: 'ซื้อ', id: 'beli', uk: 'купувати', cs: 'koupit' },
    { en: 'price', es: 'precio', de: 'Preis', fr: 'prix', it: 'prezzo', pt: 'preço', nl: 'prijs', ru: 'цена', zh: '价格', ja: '値段', ko: '가격', sv: 'pris', no: 'pris', da: 'pris', fi: 'hinta', pl: 'cena', tr: 'fiyat', el: 'τιμή', ar: 'سعر', he: 'מחיר', hi: 'कीमत', vi: 'giá', th: 'ราคา', id: 'harga', uk: 'ціна', cs: 'cena' },
    { en: 'store', es: 'tienda', de: 'Geschäft', fr: 'magasin', it: 'negozio', pt: 'loja', nl: 'winkel', ru: 'магазин', zh: '商店', ja: '店', ko: '가게', sv: 'affär', no: 'butikk', da: 'butik', fi: 'myymälä', pl: 'sklep', tr: 'mağaza', el: 'κατάστημα', ar: 'متجر', he: 'חנות', hi: 'दुकान', vi: 'cửa hàng', th: 'ร้าน', id: 'toko', uk: 'магазин', cs: 'obchod' },
    { en: 'cheap', es: 'barato', de: 'billig', fr: 'bon marché', it: 'economico', pt: 'barato', nl: 'goedkoop', ru: 'дёшево', zh: '便宜', ja: '安い', ko: '싼', sv: 'billig', no: 'billig', da: 'billig', fi: 'halpa', pl: 'tani', tr: 'ucuz', el: 'φθηνό', ar: 'رخيص', he: 'זול', hi: 'सस्ता', vi: 'rẻ', th: 'ถูก', id: 'murah', uk: 'дешево', cs: 'levný' },
    { en: 'expensive', es: 'caro', de: 'teuer', fr: 'cher', it: 'costoso', pt: 'caro', nl: 'duur', ru: 'дорого', zh: '贵', ja: '高い', ko: '비싼', sv: 'dyr', no: 'dyr', da: 'dyr', fi: 'kallis', pl: 'drogi', tr: 'pahalı', el: 'ακριβό', ar: 'غالي', he: 'יקר', hi: 'महंगा', vi: 'đắt', th: 'แพง', id: 'mahal', uk: 'дорого', cs: 'drahý' },
  ],
  'Weather': [
    { en: 'sunny', es: 'soleado', de: 'sonnig', fr: 'ensoleillé', it: 'soleggiato', pt: 'ensolarado', nl: 'zonnig', ru: 'солнечно', zh: '晴朗', ja: '晴れ', ko: '맑은', sv: 'solig', no: 'solrik', da: 'solrig', fi: 'aurinkoinen', pl: 'słoneczny', tr: 'güneşli', el: 'ηλιόλουστος', ar: 'مشمس', he: 'שמשי', hi: 'धूप', vi: 'nắng', th: 'แดดออก', id: 'cerah', uk: 'сонячно', cs: 'slunečno' },
    { en: 'rainy', es: 'lluvioso', de: 'regnerisch', fr: 'pluvieux', it: 'piovoso', pt: 'chuvoso', nl: 'regenachtig', ru: 'дождливо', zh: '下雨', ja: '雨', ko: '비오는', sv: 'regnig', no: 'regnfull', da: 'regnfuld', fi: 'sateinen', pl: 'deszczowy', tr: 'yağmurlu', el: 'βροχερός', ar: 'ممطر', he: 'גשום', hi: 'बरसाती', vi: 'mưa', th: 'ฝนตก', id: 'hujan', uk: 'дощовий', cs: 'deštivý' },
    { en: 'cloudy', es: 'nublado', de: 'bewölkt', fr: 'nuageux', it: 'nuvoloso', pt: 'nublado', nl: 'bewolkt', ru: 'облачно', zh: '多云', ja: '曇り', ko: '흐린', sv: 'mulen', no: 'skyet', da: 'overskyet', fi: 'pilvinen', pl: 'pochmurny', tr: 'bulutlu', el: 'συννεφιασμένος', ar: 'غائم', he: 'מעונן', hi: 'बादल', vi: 'nhiều mây', th: 'มีเมฆ', id: 'berawan', uk: 'хмарно', cs: 'oblačno' },
    { en: 'hot', es: 'caliente', de: 'heiß', fr: 'chaud', it: 'caldo', pt: 'quente', nl: 'heet', ru: 'жарко', zh: '热', ja: '暑い', ko: '더운', sv: 'varm', no: 'varm', da: 'varm', fi: 'kuuma', pl: 'gorący', tr: 'sıcak', el: 'ζεστό', ar: 'حار', he: 'חם', hi: 'गर्म', vi: 'nóng', th: 'ร้อน', id: 'panas', uk: 'жарко', cs: 'horko' },
    { en: 'cold', es: 'frío', de: 'kalt', fr: 'froid', it: 'freddo', pt: 'frio', nl: 'koud', ru: 'холодно', zh: '冷', ja: '寒い', ko: '추운', sv: 'kall', no: 'kald', da: 'kold', fi: 'kylmä', pl: 'zimny', tr: 'soğuk', el: 'κρύο', ar: 'بارد', he: 'קר', hi: 'ठंडा', vi: 'lạnh', th: 'หนาว', id: 'dingin', uk: 'холодно', cs: 'studený' },
  ],
  'Time & Schedules': [
    { en: 'hour', es: 'hora', de: 'Stunde', fr: 'heure', it: 'ora', pt: 'hora', nl: 'uur', ru: 'час', zh: '小时', ja: '時間', ko: '시간', sv: 'timme', no: 'time', da: 'time', fi: 'tunti', pl: 'godzina', tr: 'saat', el: 'ώρα', ar: 'ساعة', he: 'שעה', hi: 'घंटा', vi: 'giờ', th: 'ชั่วโมง', id: 'jam', uk: 'година', cs: 'hodina' },
    { en: 'minute', es: 'minuto', de: 'Minute', fr: 'minute', it: 'minuto', pt: 'minuto', nl: 'minuut', ru: 'минута', zh: '分钟', ja: '分', ko: '분', sv: 'minut', no: 'minutt', da: 'minut', fi: 'minuutti', pl: 'minuta', tr: 'dakika', el: 'λεπτό', ar: 'دقيقة', he: 'דקה', hi: 'मिनट', vi: 'phút', th: 'นาที', id: 'menit', uk: 'хвилина', cs: 'minuta' },
    { en: 'morning', es: 'mañana', de: 'Morgen', fr: 'matin', it: 'mattina', pt: 'manhã', nl: 'ochtend', ru: 'утро', zh: '早上', ja: '朝', ko: '아침', sv: 'morgon', no: 'morgen', da: 'morgen', fi: 'aamu', pl: 'ranek', tr: 'sabah', el: 'πρωί', ar: 'صباح', he: 'בוקר', hi: 'सुबह', vi: 'sáng', th: 'เช้า', id: 'pagi', uk: 'ранок', cs: 'ráno' },
    { en: 'afternoon', es: 'tarde', de: 'Nachmittag', fr: 'après-midi', it: 'pomeriggio', pt: 'tarde', nl: 'middag', ru: 'день', zh: '下午', ja: '午後', ko: '오후', sv: 'eftermiddag', no: 'ettermiddag', da: 'eftermiddag', fi: 'iltapäivä', pl: 'popołudnie', tr: 'öğleden sonra', el: 'απόγευμα', ar: 'بعد الظهر', he: 'אחר הצהריים', hi: 'दोपहर', vi: 'chiều', th: 'บ่าย', id: 'siang', uk: 'день', cs: 'odpoledne' },
    { en: 'evening', es: 'noche', de: 'Abend', fr: 'soir', it: 'sera', pt: 'noite', nl: 'avond', ru: 'вечер', zh: '晚上', ja: '夕方', ko: '저녁', sv: 'kväll', no: 'kveld', da: 'aften', fi: 'ilta', pl: 'wieczór', tr: 'akşam', el: 'βράδυ', ar: 'مساء', he: 'ערב', hi: 'शाम', vi: 'tối', th: 'เย็น', id: 'malam', uk: 'вечір', cs: 'večer' },
  ],
  'Building Sentences': [
    { en: 'I am at home', es: 'Yo estoy en casa', de: 'Ich bin zu Hause', fr: 'Je suis à la maison', it: 'Sono a casa', pt: 'Estou em casa', nl: 'Ik ben thuis', ru: 'Я дома', zh: '我在家', ja: '私は家にいます', ko: '나는 집에 있어요', sv: 'Jag är hemma', no: 'Jeg er hjemme', da: 'Jeg er hjemme', fi: 'Olen kotona', pl: 'Jestem w domu', tr: 'Evdeyim', el: 'Είμαι σπίτι', ar: 'أنا في المنزل', he: 'אני בבית', hi: 'मैं घर पर हूँ', vi: 'Tôi ở nhà', th: 'ฉันอยู่บ้าน', id: 'Saya di rumah', uk: 'Я вдома', cs: 'Jsem doma' },
    { en: 'you are a student', es: 'Tú eres estudiante', de: 'Du bist Student', fr: 'Tu es étudiant', it: 'Sei uno studente', pt: 'Você é estudante', nl: 'Je bent student', ru: 'Ты студент', zh: '你是学生', ja: 'あなたは学生です', ko: '당신은 학생이에요', sv: 'Du är student', no: 'Du er student', da: 'Du er studerende', fi: 'Olet opiskelija', pl: 'Jesteś studentem', tr: 'Sen bir öğrencisin', el: 'Είσαι φοιτητής', ar: 'أنت طالب', he: 'אתה סטודנט', hi: 'तुम छात्र हो', vi: 'Bạn là sinh viên', th: 'คุณเป็นนักเรียน', id: 'Kamu adalah siswa', uk: 'Ти студент', cs: 'Jsi student' },
    { en: 'he has a dog', es: 'Él tiene un perro', de: 'Er hat einen Hund', fr: 'Il a un chien', it: 'Lui ha un cane', pt: 'Ele tem um cachorro', nl: 'Hij heeft een hond', ru: 'У него есть собака', zh: '他有一只狗', ja: '彼は犬を飼っています', ko: '그는 개가 있어요', sv: 'Han har en hund', no: 'Han har en hund', da: 'Han har en hund', fi: 'Hänellä on koira', pl: 'On ma psa', tr: 'Onun bir köpeği var', el: 'Έχει ένα σκύλο', ar: 'لديه كلب', he: 'יש לו כלב', hi: 'उसके पास कुत्ता है', vi: 'Anh ấy có một con chó', th: 'เขามีสุนัข', id: 'Dia punya seekor anjing', uk: 'У нього є собака', cs: 'Má psa' },
  ],
  'Conversation Starters': [
    { en: 'how are things?', es: '¿Cómo van las cosas?', de: 'Wie läuft es?', fr: 'Comment ça va?', it: 'Come vanno le cose?', pt: 'Como vão as coisas?', nl: 'Hoe gaat het?', ru: 'Как дела?', zh: '最近怎么样？', ja: '調子はどう？', ko: '잘 지내요?', sv: 'Hur är läget?', no: 'Hvordan går det?', da: 'Hvordan går det?', fi: 'Miten menee?', pl: 'Jak leci?', tr: 'Nasıl gidiyor?', el: 'Πώς πάει;', ar: 'كيف الحال؟', he: 'איך הולך?', hi: 'कैसे चल रहा है?', vi: 'Mọi việc thế nào?', th: 'เป็นอย่างไรบ้าง?', id: 'Bagaimana keadaannya?', uk: 'Як справи?', cs: 'Jak to jde?' },
    { en: "what's new?", es: '¿Qué hay de nuevo?', de: 'Was gibt es Neues?', fr: 'Quoi de neuf?', it: 'Cosa c\'è di nuovo?', pt: 'O que há de novo?', nl: 'Wat is er nieuw?', ru: 'Что новенького?', zh: '有什么新鲜事？', ja: '何か新しいこと？', ko: '뭐 새로워요?', sv: 'Vad är nytt?', no: 'Hva er nytt?', da: 'Hvad er nyt?', fi: 'Mitä uutta?', pl: 'Co nowego?', tr: 'Ne var ne yok?', el: 'Τι νέο;', ar: 'ماذا الجديد؟', he: 'מה חדש?', hi: 'क्या नया है?', vi: 'Có gì mới không?', th: 'มีอะไรใหม่ไหม?', id: 'Ada kabar baru?', uk: 'Що нового?', cs: 'Co je nového?' },
    { en: 'long time no see', es: '¡Cuánto tiempo!', de: 'Lange nicht gesehen!', fr: 'Ça fait longtemps!', it: 'Quanto tempo!', pt: 'Quanto tempo!', nl: 'Lang niet gezien!', ru: 'Давно не виделись!', zh: '好久不见！', ja: 'お久しぶり！', ko: '오랜만이에요!', sv: 'Länge sedan!', no: 'Lenge siden!', da: 'Lang tid siden!', fi: 'Pitkä aika!', pl: 'Dawno nie widzieliśmy się!', tr: 'Uzun zamandır görüşmedik!', el: 'Καιρό να σε δω!', ar: 'منذ فترة طويلة!', he: 'עבר הרבה זמן!', hi: 'बहुत दिनों से मिले नहीं!', vi: 'Lâu rồi không gặp!', th: 'นานๆ ไม่เจอ!', id: 'Lama tidak bertemu!', uk: 'Давно не бачились!', cs: 'Dlouho jsme se neviděli!' },
  ],
  'Idioms & Expressions': [
    { en: 'break a leg', es: '¡Mucha mierda!', de: 'Hals- und Beinbruch!', fr: 'Merde!', it: 'In bocca al lupo!', pt: 'Boa sorte!', nl: 'Succes!', ru: 'Ни пуха ни пера!', zh: '祝你好运！', ja: '頑張って！', ko: '화이팅!', sv: 'Lycka till!', no: 'Lykke til!', da: 'Held og lykke!', fi: 'Onnea!', pl: 'Połamania nóg!', tr: 'Kolay gelsin!', el: 'Καλή επιτυχία!', ar: 'حظاً سعيداً!', he: 'בהצלחה!', hi: 'शुभकामनाएं!', vi: 'Chúc may mắn!', th: 'โชคดี!', id: 'Semoga berhasil!', uk: 'Удачи!', cs: 'Zlom vaz!' },
    { en: 'piece of cake', es: 'pan comido', de: 'Kinderleicht', fr: 'un jeu d\'enfant', it: 'un gioco da ragazzi', pt: 'muito fácil', nl: 'een makkie', ru: 'проще простого', zh: '小菜一碟', ja: '朝飯前', ko: '식은 죽 먹기', sv: 'lätt som en plätt', no: 'enkel', da: 'nemt', fi: 'helppo nakki', pl: 'bułka z masłem', tr: 'çok kolay', el: 'παιχνιδάκι', ar: 'سهل جداً', he: 'קלי קלות', hi: 'बहुत आसान', vi: 'dễ như ăn kẹo', th: 'ง่ายมาก', id: 'mudah sekali', uk: 'легко', cs: 'snadné' },
    { en: 'raining cats and dogs', es: 'llover a cántaros', de: 'in Strömen regnen', fr: 'pleuvoir des cordes', it: 'piovere a catinelle', pt: 'chover muito', nl: 'pijpenstelen regenen', ru: 'льёт как из ведра', zh: '倾盆大雨', ja: '土砂降り', ko: '폭우', sv: 'regna ute och inne', no: 'øsregne', da: 'øse ned', fi: 'sataa kaatamalla', pl: 'lać jak z cebra', tr: 'bardak boşanırcasına yağmak', el: 'βρέχει καρεκλοπόδαρα', ar: 'يمطر بغزارة', he: 'יורד גשם שוטף', hi: 'मूसलाधार बारिश', vi: 'mưa như trút nước', th: 'ฝนตกหนักมาก', id: 'hujan deras', uk: 'дощить як з відра', cs: 'lít jako z konve' },
  ],
  'Complex Sentences': [
    { en: 'although', es: 'aunque', de: 'obwohl', fr: 'bien que', it: 'sebbene', pt: 'embora', nl: 'hoewel', ru: 'хотя', zh: '虽然', ja: '〜にもかかわらず', ko: '~에도 불구하고', sv: 'även om', no: 'selv om', da: 'selv om', fi: 'vaikka', pl: 'chociaż', tr: 'rağmen', el: 'αν και', ar: 'على الرغم من', he: 'למרות', hi: 'हालांकि', vi: 'mặc dù', th: 'ถึงแม้ว่า', id: 'meskipun', uk: 'хоча', cs: 'ačkoli' },
    { en: 'because', es: 'porque', de: 'weil', fr: 'parce que', it: 'perché', pt: 'porque', nl: 'omdat', ru: 'потому что', zh: '因为', ja: 'なぜなら', ko: '~때문에', sv: 'eftersom', no: 'fordi', da: 'fordi', fi: 'koska', pl: 'ponieważ', tr: 'çünkü', el: 'επειδή', ar: 'لأن', he: 'בגלל', hi: 'क्योंकि', vi: 'vì', th: 'เพราะว่า', id: 'karena', uk: 'тому що', cs: 'protože' },
    { en: 'therefore', es: 'por tanto', de: 'deshalb', fr: 'donc', it: 'quindi', pt: 'portanto', nl: 'daarom', ru: 'поэтому', zh: '因此', ja: 'したがって', ko: '그래서', sv: 'därför', no: 'derfor', da: 'derfor', fi: 'siksi', pl: 'więc', tr: 'bu yüzden', el: 'επομένως', ar: 'لذلك', he: 'לכן', hi: 'इसलिए', vi: 'vì vậy', th: 'ดังนั้น', id: 'oleh karena itu', uk: 'тому', cs: 'proto' },
    { en: 'however', es: 'sin embargo', de: 'jedoch', fr: 'cependant', it: 'tuttavia', pt: 'contudo', nl: 'echter', ru: 'однако', zh: '然而', ja: 'しかし', ko: '그러나', sv: 'emellertid', no: 'imidlertid', da: 'imidlertid', fi: 'kuitenkin', pl: 'jednak', tr: 'ancak', el: 'όμως', ar: 'لكن', he: 'עם זאת', hi: 'हालांकि', vi: 'tuy nhiên', th: 'อย่างไรก็ตาม', id: 'namun', uk: 'однак', cs: 'nicméně' },
  ],
  'Cultural Phrases': [
    { en: 'please', es: 'Por favor', de: 'Bitte', fr: 'S\'il vous plaît', it: 'Per favore', pt: 'Por favor', nl: 'Alsjeblieft', ru: 'Пожалуйста', zh: '请', ja: 'お願いします', ko: '제발', sv: 'Snälla', no: 'Vær så snill', da: 'Vær venlig', fi: 'Ole hyvä', pl: 'Proszę', tr: 'Lütfen', el: 'Παρακαλώ', ar: 'من فضلك', he: 'בבקשה', hi: 'कृपया', vi: 'Xin vui lòng', th: 'กรุณา', id: 'Tolong', uk: 'Будь ласка', cs: 'Prosím' },
    { en: 'thank you', es: 'Gracias', de: 'Danke', fr: 'Merci', it: 'Grazie', pt: 'Obrigado', nl: 'Dank je', ru: 'Спасибо', zh: '谢谢', ja: 'ありがとう', ko: '감사합니다', sv: 'Tack', no: 'Takk', da: 'Tak', fi: 'Kiitos', pl: 'Dziękuję', tr: 'Teşekkürler', el: 'Ευχαριστώ', ar: 'شكراً', he: 'תודה', hi: 'धन्यवाद', vi: 'Cảm ơn', th: 'ขอบคุณ', id: 'Terima kasih', uk: 'Дякую', cs: 'Děkuji' },
    { en: "you're welcome", es: 'De nada', de: 'Gern geschehen', fr: 'De rien', it: 'Prego', pt: 'De nada', nl: 'Graag gedaan', ru: 'Пожалуйста', zh: '不客气', ja: 'どういたしまして', ko: '천만에요', sv: 'Varsågod', no: 'Vær så god', da: 'Selv tak', fi: 'Ole hyvä', pl: 'Proszę bardzo', tr: 'Rica ederim', el: 'Παρακαλώ', ar: 'عفواً', he: 'על לא דבר', hi: 'आपका स्वागत है', vi: 'Không có gì', th: 'ไม่เป็นไร', id: 'Sama-sama', uk: 'Будь ласка', cs: 'Není zač' },
    { en: 'bless you', es: 'Jesús', de: 'Gesundheit', fr: 'À tes souhaits', it: 'Salute', pt: 'Santinho', nl: 'Gezondheid', ru: 'Будьте здоровы', zh: '保佑你', ja: 'お大事に', ko: '축하해요', sv: 'Prosit', no: 'Prosit', da: 'Prosit', fi: 'Terveydeksi', pl: 'Na zdrowie', tr: 'Çok yaşa', el: 'Γεια σου', ar: 'يرحمك الله', he: 'לחיים', hi: 'आपकी सेहत के लिए', vi: 'Chúc mừng', th: 'ขอให้มีสุขภาพดี', id: 'Semoga sehat', uk: 'Будь здоров', cs: 'Na zdraví' },
    { en: 'excuse me', es: 'Disculpe', de: 'Entschuldigung', fr: 'Excusez-moi', it: 'Scusi', pt: 'Com licença', nl: 'Sorry', ru: 'Извините', zh: '不好意思', ja: 'すみません', ko: '실례합니다', sv: 'Ursäkta', no: 'Unnskyld', da: 'Undskyld', fi: 'Anteeksi', pl: 'Przepraszam', tr: 'Affedersiniz', el: 'Συγγνώμη', ar: 'عذراً', he: 'סליחה', hi: 'क्षमा कीजिए', vi: 'Xin lỗi', th: 'ขอโทษ', id: 'Maaf', uk: 'Вибачте', cs: 'Promiňte' },
  ],
  'Cyrillic Basics': [
    { en: 'letter A', es: 'А', de: 'А', fr: 'А', it: 'А', pt: 'А', nl: 'А', ru: 'А', zh: 'А', ja: 'А', ko: 'А', uk: 'А', cs: 'А' },
    { en: 'letter B', es: 'Б', de: 'Б', fr: 'Б', it: 'Б', pt: 'Б', nl: 'Б', ru: 'Б', zh: 'Б', ja: 'Б', ko: 'Б', uk: 'Б', cs: 'Б' },
    { en: 'letter V', es: 'В', de: 'В', fr: 'В', it: 'В', pt: 'В', nl: 'В', ru: 'В', zh: 'В', ja: 'В', ko: 'В', uk: 'В', cs: 'В' },
  ],
};

function getVocabForLesson(langId: string, lessonTitle: string, levelLessons: Lesson[]): string[] {
  const items = LESSON_VOCAB_ITEMS[lessonTitle];
  if (items) {
    return items.map((item) => (item as Record<string, string>)[langId] || item.en);
  }
  const seedLesson = levelLessons[0];
  const seedVocab = seedLesson?.vocabulary || [];
  if (seedVocab.length === 0) return ['word1', 'word2', 'word3'];
  const len = seedVocab.length;
  return Array.from({ length: Math.max(5, seedVocab.length) }, (_, i) => seedVocab[i % len]);
}

function expandLessons(baseLessons: Record<string, Lesson[]>): Record<string, Lesson[]> {
  const result: Record<string, Lesson[]> = {};
  for (const langId of Object.keys(baseLessons)) {
    const langLessons = baseLessons[langId];
    const byLevel: Record<string, Lesson[]> = {};
    for (const level of LEVELS) {
      byLevel[level] = langLessons.filter(l => l.level === level);
    }
    const expanded: Lesson[] = [];
    for (const level of LEVELS) {
      const existing = byLevel[level];
      const templates = LEVEL_LESSON_TEMPLATES[level] || [];
      for (let i = 0; i < LESSONS_PER_LEVEL; i++) {
        if (existing[i]) {
          expanded.push(existing[i]);
        } else {
          const t = templates[i] || { title: `${level} Lesson ${i + 1}`, content: `Learn ${level.toLowerCase()} level vocabulary.` };
          expanded.push({
            id: `${langId}-${level.toLowerCase()}-${i + 1}`,
            topicId: 'greetings',
            level,
            title: t.title,
            content: t.content,
            vocabulary: getVocabForLesson(langId, t.title, existing),
          });
        }
      }
    }
    result[langId] = expanded;
  }
  return result;
}

export const lessons = expandLessons(rawLessons);

export const LESSON_PROMPTS: Record<string, string[]> = {
  'Basic Greetings': ['hello', 'goodbye', 'good morning', 'good night'],
  'Hello & Goodbye': ['hello', 'goodbye', 'hi', 'bye'],
  'Good Morning & Evening': ['good morning', 'good evening', 'good night'],
  'Please & Thank You': ['please', 'thank you', "you're welcome", 'sorry'],
  'Nice to Meet You': ['nice to meet you', 'my name is', "what's your name?", 'pleased to meet you'],
  'Formal Greetings': ['pleased to meet you', 'what is your name?', 'my name is'],
  'Introducing Yourself': ['my name is', "what's your name?", 'nice to meet you', "i'm from"],
  'Saying Goodbye': ['see you later', 'see you tomorrow', 'goodbye', 'take care'],
  'Asking How Someone Is': ["how are you?", "i'm fine", 'and you?'],
  'Common Phrases': ['yes', 'no', 'please', 'thank you', 'excuse me'],
  'Numbers 1-20': ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'],
  'Days of the Week': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  'Colors': ['red', 'blue', 'green', 'yellow', 'black'],
  'Family Members': ['mother', 'father', 'sister', 'brother', 'family'],
  'Common Verbs': ['to go', 'to come', 'to eat', 'to drink', 'to sleep'],
  'Essential Verbs': ['to be', 'to have', 'to go', 'to do'],
  'Directions': ['left', 'right', 'straight', 'turn', 'near'],
  'Shopping': ['to buy', 'price', 'store', 'cheap', 'expensive'],
  'Weather': ['sunny', 'rainy', 'cloudy', 'hot', 'cold'],
  'Time & Schedules': ['hour', 'minute', 'morning', 'afternoon', 'evening'],
  'Building Sentences': ['I am at home', 'you are a student', 'he has a dog'],
  'Conversation Starters': ['how are things?', "what's new?", 'long time no see'],
  'Idioms & Expressions': ['break a leg', 'piece of cake', 'raining cats and dogs'],
  'Complex Sentences': ['although', 'because', 'therefore', 'however'],
  'Cultural Phrases': ['please', 'thank you', "you're welcome", 'bless you'],
  'Cyrillic Basics': ['letter A', 'letter B', 'letter V'],
};

function createQuizForLesson(langId: string, lesson: Lesson, questionIdStart: number): Quiz {
  const vocab = lesson.vocabulary || [];
  const prompts = LESSON_PROMPTS[lesson.title] || vocab.map((_, i) => `vocabulary word ${i + 1}`);

  // Pair each word with its prompt, then shuffle
  const pairs = vocab
    .map((word, i) => ({ word, prompt: prompts[i] }))
    .filter(pair => pair.prompt) // only include pairs that have a matching prompt
    .sort(() => Math.random() - 0.5) // shuffle
    .slice(0, 4); // take 4 random ones

  const questions: QuizQuestion[] = pairs.map((pair, i) => {
    const others = vocab.filter(v => v !== pair.word);
    const alternatives = others.slice(0, 3);
    return {
      id: `q${questionIdStart + i}`,
      type: 'translation' as const,
      question: `How do you say "${pair.prompt}"?`,
      correctAnswer: pair.word,
      alternatives: alternatives.length > 0 ? alternatives : undefined,
      level: lesson.level,
    };
  });

  // fallback if no questions
  if (questions.length === 0) {
    questions.push({
      id: `q${questionIdStart}`,
      type: 'translation' as const,
      question: `What vocabulary did you learn in "${lesson.title}"?`,
      correctAnswer: vocab[0] || lesson.title,
      alternatives: vocab.slice(1, 4),
      level: lesson.level,
    });
  }

  const lessonBaseId = lesson.id.replace(`${langId}-`, '');
  return {
    id: `${langId}-quiz-${lessonBaseId}`,
    lessonId: lesson.id,
    title: `${lesson.title} Quiz`,
    questions,
  };
}
function createQuizzes(): Record<string, Quiz[]> {
  const result: Record<string, Quiz[]> = {};
  let questionIdCounter = 1;
  for (const langId of Object.keys(lessons)) {
    const langLessons = lessons[langId];
    result[langId] = langLessons.map((lesson) => {
      const quiz = createQuizForLesson(langId, lesson, questionIdCounter);
      questionIdCounter += quiz.questions.length;
      return quiz;
    });
  }
  return result;
}

export const quizzes = createQuizzes();

