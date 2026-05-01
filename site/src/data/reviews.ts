/**
 * Client testimonials. Used for the on-page Reviews section AND for Review schema.org JSON-LD.
 *
 * Each review can carry an English translation in the *En fields. ReviewsList picks the
 * locale based on the `lang` prop. If a translation is missing, the Russian original is
 * used as a fallback.
 *
 * IMPORTANT: every entry should be a real review from a real client.
 * Star ratings drive Google rich snippets — never inflate.
 */

export interface Review {
  id: string;
  /** Display name (first name + last initial typical) — Russian / default form */
  author: string;
  /** Optional English transliteration of the author name. Falls back to `author`. */
  authorEn?: string;
  /** Optional author city or country (RU form). */
  authorLocation?: string;
  /** Optional EN form of the location. Falls back to `authorLocation`. */
  authorLocationEn?: string;
  /** ISO month, e.g. "2024-09" */
  date: string;
  /** Tour ID from tours.ts; null if reviewing the overall service. */
  tourId: string | null;
  /** 1-5, Google requires integer or half-integer */
  rating: 1 | 2 | 3 | 4 | 5;
  /** Review body (Russian). Plain text — no HTML. 80-300 chars sweet spot, longer OK for substantive ones. */
  text: string;
  /** English translation. Falls back to `text` if absent. */
  textEn?: string;
}

export const reviews: Review[] = [
  {
    id: 'r-greek-tour-family',
    author: 'Семья Игнатьевых',
    authorEn: 'The Ignatiev Family',
    authorLocation: 'путешествовали с подростками',
    authorLocationEn: 'travelled with teenagers',
    date: '2026-04',
    tourId: 'greek-tour',
    rating: 5,
    text: 'Наши неаполитанские каникулы проходили в сопровождении замечательного гида Маши Шишковой. Это наш первый опыт путешествия с личным гидом. Маша потрясающая и профессиональная — смогла совершенно ненавязчиво и легко увлечь за собой в незабываемое путешествие всё наше разношёрстное семейство. К моему бесконечному удивлению, даже некоторые подростки, которых обычно ничего кроме экрана не интересует, слушали Машу внимательно и разыскивали кошелёк и собачек, атрибуты Бурбонов, носатых Фердинандов — и убеждались, что сначала были греки.',
    textEn: 'Our Neapolitan holiday was guided by the wonderful Masha Shishkova. It was our first experience travelling with a personal guide. Masha is amazing and professional — she managed, completely effortlessly and unobtrusively, to draw our motley family into an unforgettable journey. To my endless surprise, even some of the teenagers — who usually care about nothing beyond their screens — listened to Masha attentively and went looking for the wallet and the little dogs, the Bourbon emblems and the long-nosed Ferdinands. They were finally convinced that, yes, first came the Greeks.',
  },
  // TODO(reviews): replace these placeholders with real client reviews.
  {
    id: 'r-pompeii-deep-1',
    author: 'Анна К.',
    authorEn: 'Anna K.',
    authorLocation: 'Москва',
    authorLocationEn: 'Moscow',
    date: '2026-02',
    tourId: 'pompeii-deep',
    rating: 5,
    text: 'Маша провела нас по Помпеям так, что мы почувствовали себя римлянами 79 года. Обед в каупоне с фресками — отдельное приключение. Дети 9 и 12 лет были в восторге, не отвлекались ни секунды.',
    textEn: 'Masha walked us through Pompeii in a way that made us feel like Romans in 79 AD. Lunch at the caupona with frescoes was an adventure on its own. The kids (9 and 12) were absolutely captivated and never got distracted for a second.',
  },
  {
    id: 'r-amalfi-day-1',
    author: 'Сергей и Мария',
    authorEn: 'Sergey & Maria',
    authorLocation: 'Санкт-Петербург',
    authorLocationEn: 'Saint Petersburg',
    date: '2025-09',
    tourId: 'amalfi-ravello-day',
    rating: 5,
    text: 'День в Амальфи и Равелло превзошёл ожидания. Просекко в Pansa утром, обед с видом на Салерно, виллы Чимброне на закате. Маша знает все детали и при этом не превращает экскурсию в лекцию.',
    textEn: 'A day in Amalfi and Ravello that exceeded our expectations. Prosecco at Pansa in the morning, lunch with views over the Salerno gulf, Villa Cimbrone at sunset. Masha knows every detail without ever turning the tour into a lecture.',
  },
  {
    id: 'r-naples-character-1',
    author: 'Ольга М.',
    authorEn: 'Olga M.',
    authorLocation: 'Берлин',
    authorLocationEn: 'Berlin',
    date: '2025-07',
    tourId: 'naples-character',
    rating: 5,
    text: 'Это не экскурсия, а спектакль. Суеверия, святые с «кипящей» кровью, истории про Шо-шо и его магический ритуал — даже скептику не отвертеться. Неаполь после такого видишь иначе.',
    textEn: 'This is not a tour — it is a performance. Superstitions, saints with "boiling" blood, stories about Sciò-sciò and his magic ritual — even a sceptic cannot escape. After this, you see Naples in an entirely new light.',
  },
  {
    id: 'r-greek-tour-1',
    author: 'Дмитрий В.',
    authorEn: 'Dmitry V.',
    authorLocation: 'Тель-Авив',
    authorLocationEn: 'Tel Aviv',
    date: '2025-06',
    tourId: 'greek-tour',
    rating: 5,
    text: 'Трёхдневный тур "Сначала были греки" — лучшее погружение в античную Кампанию, которое мы пробовали. Пестум, Археологический музей, Геркуланум, виллы — всё в логичной последовательности, без спешки.',
    textEn: 'The three-day "First Came the Greeks" tour was the best immersion into ancient Campania we have ever experienced. Paestum, the Archaeological Museum, Herculaneum, the villas — everything in a logical sequence, never rushed.',
  },
  {
    id: 'r-naples-gastro-1',
    author: 'Юлия и Антон',
    authorEn: 'Yulia & Anton',
    authorLocation: 'Прага',
    authorLocationEn: 'Prague',
    date: '2025-10',
    tourId: 'naples-gastro',
    rating: 5,
    text: 'Гастротур "для сильных духом" — это честная заявка. Уличная еда, кофе, пицца с собственноручной готовкой. Историй и баек — на полноценную книгу. Вернёмся ещё.',
    textEn: 'The "for the strong-hearted" food tour really lives up to its name. Street food, coffee, pizza we made ourselves. Enough stories and anecdotes to fill a book. We will be back.',
  },
  {
    id: 'r-quest-pompeii-1',
    author: 'Екатерина Л.',
    authorEn: 'Ekaterina L.',
    authorLocation: 'Лондон',
    authorLocationEn: 'London',
    date: '2025-08',
    tourId: 'quest-pompeii',
    rating: 5,
    text: 'Сын 8 лет уехал из Помпей с горящими глазами и потом полгода рассказывал про термополий и фрески. Маша подбирает задания так, что ребёнок реально включается, а не просто ходит за взрослыми.',
    textEn: 'My 8-year-old son left Pompeii with shining eyes and spent the next six months telling everyone about thermopolia and frescoes. Masha picks the quest tasks so that the kid actually engages, instead of just trailing behind the adults.',
  },
];

/**
 * Aggregate rating computed from reviews. Used in LocalBusiness/Service JSON-LD.
 */
export const aggregateRating = {
  ratingValue: reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length,
  reviewCount: reviews.length,
  bestRating: 5,
  worstRating: 1,
};
