// Egyetlen hely a szöveges tartalomhoz — itt kell módosítani, ha valami változik.

// Ingyenes kulcs igényelhető: https://web3forms.com — a beérkező üzenetek
// a `business.email` címre érkeznek. Regisztráció után illessze be ide a kulcsot.
export const web3formsAccessKey = 'IDE-ILLESSZE-BE-A-WEB3FORMS-KULCSOT';

export const business = {
  name: 'Zátony Vendégház',
  location: 'Tiszacsege',
  tagline: 'A pihenés otthona. Az alkalmak helyszíne.',
  phone: '+36 30 899 0982',
  phoneHref: 'tel:+36308990982',
  email: 'info@zatonyvendeghaz.com',
  address: 'Zátony VIII. u. 21., 4066 Tiszacsege',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Z%C3%A1tony+VIII.+u.+21.+Tiszacsege',
  mapsEmbedUrl:
    'https://www.google.com/maps?q=Z%C3%A1tony+VIII.+u.+21.,+4066+Tiszacsege&output=embed',
  guestCapacity: 23,
  roomCount: 7,
  lat: 47.7378,
  lng: 21.0561
};

export const partners = {
  tiszavirag: {
    name: 'Tiszavirág Büfé',
    phone: '06 20 945 9149',
    phoneHref: 'tel:+36209459149'
  }
};

export const nav = [
  { href: '/', label: 'Kezdőlap' },
  { href: '/szallas/', label: 'Szállás' },
  { href: '/rendezvenyek/', label: 'Rendezvények' },
  { href: '/programok/', label: 'Programok' },
  { href: '/galeria/', label: 'Galéria' },
  { href: '/kapcsolat/', label: 'Kapcsolat' }
];

export const pillars = [
  {
    key: 'szallas',
    title: 'Szállás',
    description: '23 fő, 7 önálló szoba — mindegyikben saját fürdő, TV, hűtő és Wi-Fi.',
    href: '/szallas/',
    cta: 'A szobákról'
  },
  {
    key: 'rendezveny',
    title: 'Rendezvény',
    description: 'Kisebb esküvők, szülinapok, baráti és családi összejövetelek otthona.',
    href: '/rendezvenyek/',
    cta: 'A rendezvényekről'
  },
  {
    key: 'aktiv',
    title: 'Aktív pihenés',
    description: 'Grill, bogrács, hangulatos udvar — csocsó, biliárd és pingpong esténként.',
    href: '/szallas/#udvar',
    cta: 'Az udvarról'
  }
];

export const stats = [
  { value: '23 fő', label: 'befogadóképesség' },
  { value: '7', label: 'önálló szoba' },
  { value: '1', label: 'saját, zárt udvar' },
  { value: '2 perc', label: 'a Tisza-partig' }
];

export const testimonials = [
  {
    name: 'Andrea',
    quote: 'Tiszta, rendezett szobák, kényelmes ágyak — pontosan azt kaptuk, amit vártunk.'
  },
  {
    name: 'Gábor',
    quote: 'Az udvar esténként varázslatos a lámpafüzérekkel, a gyerekek imádták a csocsót.'
  },
  {
    name: 'Katalin',
    quote: 'A születésnapi rendezvényünket itt tartottuk, mindenki csak dicsérte a hangulatot.'
  },
  {
    name: 'Zoltán',
    quote: 'Nagy társasággal érkeztünk, mégis mindenki kényelmesen elfért — remek ár-érték arány.'
  },
  {
    name: 'Nóra',
    quote: 'Kedves fogadtatás, tiszta udvar, csendes környék — pont erre volt szükségünk.'
  }
];

export const nearbyIcons: Record<string, string> = {
  'Tiszacsegei Termálstrand':
    'M2 12c1.5 1.5 3 1.5 4.5 0s3-1.5 4.5 0 3 1.5 4.5 0 3-1.5 4.5 0 M2 17c1.5 1.5 3 1.5 4.5 0s3-1.5 4.5 0 3 1.5 4.5 0 3-1.5 4.5 0 M7 8a3 3 0 1 1 6 0c0 1.5-1 2-1 3',
  'Tisza vízitúra': 'M2 20c3-6 6-14 10-16s7 2 8 6-2 8-6 10-9 4-12 0 M8 12l7-7',
  'Hortobágy kapuja': 'M12 3v7m0 0-4 4m4-4 4 4M6 14c0 4 2.5 7 6 7s6-3 6-7',
  'Helyi gasztronómia':
    'M7 3v7a2 2 0 0 0 4 0V3M9 10v11M17 3c-1.5 1-2 3-2 5a2 2 0 0 0 4 0v-5M17 13v8'
};

export const roomAmenities = [
  'Saját fürdőszoba és WC minden szobában',
  'Külön bejárat szobánként',
  'TV és Wi-Fi',
  'Hűtőszekrény',
  'Ingyenes parkolás az udvarban',
  'Közös, felszerelt konyha főzéshez'
];

export const eventTypes = [
  {
    title: 'Esküvő',
    description: 'Kisebb, meghitt esküvők a rendezvényteremben és a lámpafüzéres udvaron.'
  },
  {
    title: 'Szülinap',
    description: 'Kerek évfordulók, szülinapi bulik akár 40-50 fős társaságnak is.'
  },
  {
    title: 'Családi / baráti összejövetel',
    description: 'Bogrács, grill, hosszú asztalok — a nyári esték otthona.'
  }
];

export const nearby = [
  {
    title: 'Tiszacsegei Termálstrand',
    distance: '5 perc autóval',
    description:
      'Hat medencés gyógyfürdő a település szélén — két kültéri és két fedett termálmedence, úszó- és gyermekmedence.',
    long:
      'A Tiszacsegei Termálstrand hat medencéje — két kültéri és két fedett termálmedence, egy úszó- és egy gyermekmedence — egész évben várja a feltöltődni vágyókat. Az oldott szerves anyagot tartalmazó, alkálihidrogén-karbonátos gyógyvíz kiválóan alkalmas izom- és reumatikus panaszok enyhítésére, úgyhogy egy aktívabb nap után tökéletes választás.',
    hasPhoto: true
  },
  {
    title: 'Tisza vízitúra',
    distance: '2 perc a partig',
    description:
      'Kajak, kenu vagy sétahajó a folyón — nyáron induló túrák ismertetik meg a vízparti világot.',
    long:
      'A Tisza egész nyáron ideális helyszín vízitúrákhoz: kajakkal vagy kenuval indulva, vagy egy kikötőből induló sétahajón is felfedezhető a folyó élővilága. A vendégházból két perc séta a folyópartig, így egy kora reggeli evezés simán belefér az utazás elé.',
    hasPhoto: false
  },
  {
    title: 'Hortobágy kapuja',
    distance: '~15 perc autóval',
    description:
      'A Hortobágyi Nemzeti Park madárparadicsoma és pusztai világa autóval negyedóra alatt elérhető.',
    long:
      'A Hortobágyi Nemzeti Park — Magyarország első nemzeti parkja és UNESCO világörökségi helyszín — a puszta végtelen látképét, a kilenclyukú hidat és egy igazi madárparadicsomot kínál. Kocsival negyedóra alatt elérhető Tiszacsegéről, egy egész napos kirándulásra is bőven elég élményt tartogat.',
    hasPhoto: false
  },
  {
    title: 'Helyi gasztronómia',
    distance: 'a vendégházban és a közelben',
    description:
      'A híres korhelyhalászlé és a helyi bográcsos ételek — kóstolja meg a Halászcsárda Tiszacsege és a Tiszavirág Büfé kínálatát.',
    long:
      'Tiszacsege híres a korhelyhalászléről, amelynek alapját a sok zöldség és a kétféle hal (ponty és keszeg) adja. A vendégházban saját bogrács és grill áll rendelkezésre, ha inkább magunk főznénk — vagy ha egy estére kikapcsolódnánk a konyhából, a közeli Halászcsárda Tiszacsege és a Tiszavirág Büfé kínálatát ajánljuk.',
    hasPhoto: true
  }
];
