export type MedOption = {
  optionId: string;
  name: string;
  description: string;
  priceMin: number;
  priceMax: number;
  /** Прямо зазначено в рецепті / призначенні лікаря */
  prescribedByDoctor: boolean;
  /** Топовий варіант (преміум / рейтинг) */
  isTop: boolean;
  /** Найдешевший серед запропонованих */
  isCheapest: boolean;
};

export type PrescribedMed = {
  id: string;
  instruction: string;
  quantityLabel: string;
  options: MedOption[];
};

export const PRESCRIBED_MEDS: PrescribedMed[] = [
  {
    id: '1',
    instruction: 'Полоскати рот 2 рази на день після чищення зубів протягом 7 днів',
    quantityLabel: '200 мл',
    options: [
      {
        optionId: '1-a',
        name: 'Хлоргексидин Стоматофорт 0,05%',
        description:
          'Антисептик місцевої дії; знижує кількість бактерій у порожнині рота після профілактики.',
        priceMin: 85,
        priceMax: 120,
        prescribedByDoctor: true,
        isTop: false,
        isCheapest: false,
      },
      {
        optionId: '1-b',
        name: 'Curaprox Perio Plus+ CHX 0,05%',
        description:
          'Швейцарська лінія для ясен: CHX + гіалуронова кислота, м’якіший при смаку.',
        priceMin: 140,
        priceMax: 185,
        prescribedByDoctor: false,
        isTop: true,
        isCheapest: false,
      },
      {
        optionId: '1-c',
        name: 'Хлоргексидин-Дарниця 0,05%',
        description:
          'Базовий варіант з тією ж діючою речовиною; зручний флакон 200 мл.',
        priceMin: 45,
        priceMax: 68,
        prescribedByDoctor: false,
        isTop: false,
        isCheapest: true,
      },
      {
        optionId: '1-d',
        name: 'Віола Хлоргексидин 0,05%',
        description:
          'Середній сегмент; підходить для короткого курсу після чистки.',
        priceMin: 62,
        priceMax: 88,
        prescribedByDoctor: false,
        isTop: false,
        isCheapest: false,
      },
    ],
  },
  {
    id: '2',
    instruction: 'Наносити на ясна 2 рази на день 5–7 днів',
    quantityLabel: '20 г (1 тюбик)',
    options: [
      {
        optionId: '2-a',
        name: 'Метрогіл Дента гель',
        description:
          'Комбінація метронідазол + міконазол для ясен; класика стоматологічних протоколів.',
        priceMin: 165,
        priceMax: 210,
        prescribedByDoctor: true,
        isTop: false,
        isCheapest: false,
      },
      {
        optionId: '2-b',
        name: 'Parodontax Ultra гель',
        description:
          'Преміум-бренд з акцентом на зменшення кровоточивості ясен після процедур.',
        priceMin: 195,
        priceMax: 245,
        prescribedByDoctor: false,
        isTop: true,
        isCheapest: false,
      },
      {
        optionId: '2-c',
        name: 'Метронідазол стоматологічний гель',
        description:
          'Генерик з тією ж терапевтичною метою; економніший варіант.',
        priceMin: 95,
        priceMax: 130,
        prescribedByDoctor: false,
        isTop: false,
        isCheapest: true,
      },
      {
        optionId: '2-d',
        name: 'Гілан-метро гель',
        description:
          'Середній ціновий сегмент, часто є в мережевих аптеках.',
        priceMin: 120,
        priceMax: 158,
        prescribedByDoctor: false,
        isTop: false,
        isCheapest: false,
      },
    ],
  },
  {
    id: '3',
    instruction: 'Після чищення 1 раз на день ввечері 14 днів',
    quantityLabel: '50 мл',
    options: [
      {
        optionId: '3-a',
        name: 'Elmex Анти-карієс ополіскувач',
        description:
          'Фторид аміну + олова; зміцнює емаль після професійної гігієни.',
        priceMin: 120,
        priceMax: 155,
        prescribedByDoctor: true,
        isTop: false,
        isCheapest: false,
      },
      {
        optionId: '3-b',
        name: 'Sensodyne Pronamel ополіскувач',
        description:
          'Топ за відгуками при чутливості зубів; м’яка формула на щодень.',
        priceMin: 155,
        priceMax: 195,
        prescribedByDoctor: false,
        isTop: true,
        isCheapest: false,
      },
      {
        optionId: '3-c',
        name: 'Фторид натрію 0,05% ополіскувач',
        description:
          'Базовий фторидний розчин без бренду; достатній для курсу 14 днів.',
        priceMin: 55,
        priceMax: 85,
        prescribedByDoctor: false,
        isTop: false,
        isCheapest: true,
      },
      {
        optionId: '3-d',
        name: 'Lacalut фтор ополіскувач',
        description:
          'Німецька серія; баланс ціни та складу для підтримки емалі.',
        priceMin: 95,
        priceMax: 125,
        prescribedByDoctor: false,
        isTop: false,
        isCheapest: false,
      },
    ],
  },
  {
    id: '4',
    instruction: 'При болю після процедури до 3 разів на день після їжі',
    quantityLabel: '20 табл.',
    options: [
      {
        optionId: '4-a',
        name: 'Нурофен Експрес 200 мг',
        description:
          'Швидке зняття болю; лікар зазначив цю позицію в рекомендаціях.',
        priceMin: 95,
        priceMax: 125,
        prescribedByDoctor: true,
        isTop: false,
        isCheapest: false,
      },
      {
        optionId: '4-b',
        name: 'Найз 220 мг (флурбіпрофен)',
        description:
          'Топ-сегмент НПЗЗ при запаленні; альтернатива за узгодженням з лікарем.',
        priceMin: 130,
        priceMax: 165,
        prescribedByDoctor: false,
        isTop: true,
        isCheapest: false,
      },
      {
        optionId: '4-c',
        name: 'Ібупрофен 200 мг',
        description:
          'Найдешевший аналог з тією ж діючою речовиною в таблетках.',
        priceMin: 35,
        priceMax: 55,
        prescribedByDoctor: false,
        isTop: false,
        isCheapest: true,
      },
      {
        optionId: '4-d',
        name: 'Фламакс 200 мг',
        description:
          'Середній ціновий діапазон; часто випускають у блістерах по 10.',
        priceMin: 72,
        priceMax: 95,
        prescribedByDoctor: false,
        isTop: false,
        isCheapest: false,
      },
    ],
  },
  {
    id: '5',
    instruction: '1 капсула на день під час їжі, курс 30 днів',
    quantityLabel: '30 капс. (1 уп.)',
    options: [
      {
        optionId: '5-a',
        name: 'Вігантол D3 2000 МО',
        description:
          'Холекальциферол у зручній дозі; відповідає запису в електронному призначенні.',
        priceMin: 280,
        priceMax: 340,
        prescribedByDoctor: true,
        isTop: false,
        isCheapest: false,
      },
      {
        optionId: '5-b',
        name: 'Vigantol Gold D3 + K2',
        description:
          'Преміум-комплекс вітамінів D3/K2 з високим рейтингом користувачів.',
        priceMin: 420,
        priceMax: 490,
        prescribedByDoctor: false,
        isTop: true,
        isCheapest: false,
      },
      {
        optionId: '5-c',
        name: 'Холекальциферол D3 2000 МО',
        description:
          'Генерик; та сама доза 2000 МО на капсулу за нижчою ціною.',
        priceMin: 180,
        priceMax: 230,
        prescribedByDoctor: false,
        isTop: false,
        isCheapest: true,
      },
      {
        optionId: '5-d',
        name: 'AquaD3 2000 МО краплі',
        description:
          'Рідка форма; зручно дозувати, середній чек у аптеках.',
        priceMin: 240,
        priceMax: 295,
        prescribedByDoctor: false,
        isTop: false,
        isCheapest: false,
      },
    ],
  },
];

export function getDefaultOptionId(med: PrescribedMed): string {
  const prescribed = med.options.find((o) => o.prescribedByDoctor);
  return prescribed?.optionId ?? med.options[0].optionId;
}

export function getActiveOption(
  med: PrescribedMed,
  selectedByMedId: Record<string, string>,
): MedOption {
  const id = selectedByMedId[med.id] ?? getDefaultOptionId(med);
  return med.options.find((o) => o.optionId === id) ?? med.options[0];
}

export function getPrescriptionTotalRange(
  selectedByMedId: Record<string, string>,
): { min: number; max: number } {
  let min = 0;
  let max = 0;
  for (const med of PRESCRIBED_MEDS) {
    const opt = getActiveOption(med, selectedByMedId);
    min += opt.priceMin;
    max += opt.priceMax;
  }
  return { min, max };
}
