import type {
  ApproachSectionData,
  BottomPortfolioSectionsData,
  EngoraCaseData,
  HilolMedCaseData,
  IbtidoCaseData,
  IqiblaCaseData,
  MarketingMaximumCaseData,
  MuxsinzadaCaseData,
  NavItem,
  OtlichnoCaseData,
  PersonalProfile,
  ScholarHubCaseData,
  StatItem,
  UstozAkademiyasiCaseData,
  WaterFilterCaseData,
  ZamonaCaseData,
  ZetricCaseData,
} from '../types/portfolio.ts';

export const PROFILE_DATA: PersonalProfile = {
  name: 'Kamronbek Mamajonov',
  role: 'Digital Marketolog',
  headlinePrefix: 'Biznes natijasiga ishlaydigan',
  headlineHighlight: 'tizimli marketing.',
  bioQuote:
    'Marketingdagi faoliyatimni SMM va kontentdan boshlaganman. Bugungi kunda esa Kontent, SMM va Performance Marketing yo‘nalishlarini birlashtirib, biznes uchun marketingni tizimli ravishda boshqarish ustida ishlayman.',
  primaryCtaText: 'Loyihalarni ko‘rish',
  primaryCtaHref: '#projects',
  secondaryCtaText: 'Bog‘lanish',
  secondaryCtaHref: '#contact',
};

export const HILOL_MED_CASE_DATA: HilolMedCaseData = {
  id: 'hilol-med',
  title: 'HILOL MED',
  category: 'Healthcare / Content Marketing',
  field: 'Tibbiyot / Klinika',
  shortDesc:
    'Klinika uchun kontent strategiyasi, ekspert videolari va ijtimoiy tarmoqlarni rivojlantirish.',
  objective:
    'Klinika kontentini tizimli tashkil etish, ekspertlar ishtirokidagi videolarni rivojlantirish va auditoriya bilan aloqani kuchaytirish.',
  completedTasks: [
    'Kontent strategiyasi va kontent rejasini ishlab chiqish',
    'Reels uchun ssenariylar yozish',
    'Kontent rubrikalarini shakllantirish',
    'Syomka jarayonlarini muvofiqlashtirish',
    'Shifokorlar va ekspertlar ishtirokidagi videolarni tashkil etish',
    'YouTube kontent jarayonini rivojlantirish',
    'Kontent natijalarini kuzatish va hisobotlar tayyorlash',
  ],
  rubricsExamples: [
    '“60 soniya ichida tashxisni toping”',
    '“Bemor A holati va B holati”',
  ],
  metrics: [
    {
      id: 'audience-growth',
      value: '63–65K → 100K',
      label: 'Instagram auditoriyasining o‘sishi',
      context:
        'Qadoqlash, Stories va kontent tizimi (davr davomida Target reklama ham qo‘llanilgan; oyiga ~4–5 ming obunachi).',
    },
    {
      id: 'reels-output',
      value: '15 Reels / oy',
      label: 'Oylik kontent ishlab chiqarish',
      context:
        'Shifokorlar bilan tizimli ssenariylar asosida tayyorlangan ekspert videolari.',
    },
    {
      id: 'youtube-shorts',
      value: '600K views',
      label: 'Tanlangan YouTube Shorts natijasi',
      context: 'Bitta viral Shorts orqali 1,000+ yangi obunachi jalb etilgan.',
    },
    {
      id: 'youtube-expert',
      value: '10K+ views',
      label: 'YouTube ekspert videolari',
      context:
        'Avvalgi 600–1,200 ko‘rishlardan ekspert mavzulari orqali 10,000+ barqaror ko‘rishlarga chiqildi.',
    },
  ],
  images: {
    building: '/hilol-building.jpg',
    logo: '/hilol-logo.jpg',
    profileProof: '/hilol-profile.png',
    reelProof: '/hilol-reelproof.png',
    interview: '/hilol-interview.png',
    team: '/hilol-team.png',
  },
};

export const SCHOLARHUB_CASE_DATA: ScholarHubCaseData = {
  id: 'scholarhub',
  title: 'SCHOLARHUB',
  category: 'Education / SAT Preparation / Content Marketing',
  field: 'SAT imtihoniga tayyorlovchi online ta’lim platformasi',
  shortDesc:
    'SAT platformasi uchun organik auditoriya o‘sishi, lead generation va kontent orqali arizalarni jalb qilish.',
  objective:
    'SAT haqida bilim va xabardorlikni oshirish, maqsadli auditoriyani jalb qilish va kontent orqali arizalar hamda sotuvlarga yordam berish.',
  completedTasks: [
    'SAT mavzusida kontent va Reels yo‘nalishlarini ishlab chiqish',
    'Kontent ssenariylari va lead magnetlar ustida ishlash',
    'Izohlar orqali auditoriyani jalb qiluvchi kontent mexanikasini ishlab chiqish',
    'Trend formatlarini SAT imkoniyatlarini tushuntirish uchun moslashtirish',
    '$256 000 grant yutgan talaba haqidagi 6 daqiqalik VSL videoni tayyorlash jarayonida qatnashish',
    'ChatPlace orqali lead magnet oqimini yo‘lga qo‘yish va auditoriyani profilga jalb qilish',
  ],
  mainMetrics: [
    {
      id: 'audience-gain',
      value: '+22 200',
      label: '5 oyda yangi obunachilar',
      context:
        '2024-yil oktabrdan 2025-yil fevralgacha organik kontent va lead magnetlar orqali barqaror o‘sish.',
    },
    {
      id: 'total-audience',
      value: '24 500+',
      label: 'Jami auditoriya (2025 fevral)',
      context:
        'Boshlang‘ich 2 741 obunachidan 24 500+ ga yetkazilgan platforma profili.',
    },
    {
      id: 'comments-vsl',
      value: '1 700+ izoh',
      label: 'Lead magnet videosi',
      context:
        'Dastlabki reja 300 ta izoh bo‘lgan, amalda 1 700+ izoh va yuqori konversiya qayd etilgan.',
    },
    {
      id: 'views-vsl',
      value: '183K views',
      label: 'Organik VSL/Reels ko‘rishi',
      context:
        'SAT grant imkoniyatlarini tushuntiruvchi 6 daqiqalik VSL videosi natijasi.',
    },
  ],
  additionalMetrics: [
    {
      id: 'likes-vsl',
      value: '13K likes',
      label: 'Organik ma’qullash',
      context: 'Organik VSL va Reels videolari bo‘yicha to‘plangan layklar.',
    },
    {
      id: 'comments-total',
      value: '11K comments',
      label: 'Auditoriya faolligi',
      context: 'Reels va lead magnetlar bo‘yicha jami izohlar oqimi.',
    },
    {
      id: 'chatplace-leads',
      value: '~4 000 kishi',
      label: 'Profilga jalb qilingan',
      context:
        'ChatPlace lead magneti orqali organik ravishda profilga jalb qilingan o‘quvchilar.',
    },
    {
      id: 'daily-leads',
      value: '176 ta ariza',
      label: 'Bir kunda kelgan lidlar',
      context:
        'Video faolligi kuchaygan kun uchun qayd etilgan eng yuqori kunlik arizalar.',
    },
  ],
  images: {
    before: '/scholar-before.jpg',
    after: '/scholar-after.jpg',
    leadMagnetReel: '/lidmagnit-reel-2.jpg',
    salesProof: '/sotuv-otzivi.jpg',
    process: '/scholar-process.jpg',
    visual1: '/scholar-visual.jpg',
    visual2: '/scholar-visual-2.jpg',
  },
};

export const OTLICHNO_CASE_DATA: OtlichnoCaseData = {
  id: 'otlichno',
  title: 'Otlichno o‘quv markazi',
  role: 'Account Manager → Content Manager',
  period: '2022–2023',
  category: 'Education / Content & SMM (Instagram · TikTok · YouTube · Telegram)',
  field: 'Ta’lim loyihasi / O‘quv markazi',
  shortDesc:
    'Ta’lim loyihasi uchun ijtimoiy tarmoqlarda kontent yaratish va auditoriyani rivojlantirish.',
  objective:
    'Ta’lim loyihasi uchun ijtimoiy tarmoqlarda (Instagram, TikTok, YouTube va Telegram) auditoriya muammolari va og‘riqlarini o‘rganish, tizimli kontent ishlab chiqarish hamda jamoa bilan birgalikda organik o‘sish va murojaatlarni rivojlantirish.',
  completedTasks: [
    'Real loyihalar bilan ishlash va auditoriya muammolari hamda og‘riqlarini chuqur o‘rganish',
    'Instagram Reels, Stories va postlar uchun kontent g‘oyalar hamda ssenariylar ishlab chiqish',
    'TikTok platformasi uchun organik qamrov va murojaat olib keluvchi qisqa videolar tayyorlash',
    'YouTube kanali auditoriyasini o‘stirish bo‘yicha video kontent jarayonlarida qatnashish',
    'Agentlik va o‘quv markazi jamoasi bilan kontent-reja hamda syomka jarayonlarini muvofiqlashtirish',
    'Platformalar kesimida kontent ko‘rsatkichlari va o‘sish dinamikasini tahlil qilish',
  ],
  oct2022Stats: [
    {
      id: 'oct2022-ig',
      value: '30 ming',
      label: 'Instagram obunachi',
      context: '2022-yil oktabr holatiga ko‘ra boshlang‘ich auditoriya.',
    },
    {
      id: 'oct2022-tg',
      value: '5 ming',
      label: 'Telegram obunachi',
      context: '2022-yil oktabr holatiga ko‘ra Telegram kanal auditoriyasi.',
    },
    {
      id: 'oct2022-yt',
      value: '150 ming',
      label: 'YouTube obunachi',
      context: '2022-yil oktabr holatiga ko‘ra YouTube kanal obunachilari.',
    },
    {
      id: 'oct2022-tt',
      value: '130 ming',
      label: 'TikTok obunachi',
      context: '2022-yil oktabr holatiga ko‘ra TikTok sahifa obunachilari.',
    },
  ],
  nov2023Stats: [
    {
      id: 'nov2023-yt',
      value: '306 ming+',
      label: 'YouTube obunachi (2023-yil noyabr)',
      context:
        '2022-yil oktabrdagi 150 ming obunachidan 2023-yil noyabrda 306 mingdan ortiq obunachiga yetdi.',
    },
    {
      id: 'mar2023-tt',
      value: '173 ming',
      label: 'TikTok obunachi (2023-yil mart–aprel)',
      context:
        'Shu davrda TikTok sahifasi 173 ming obunachiga yetgan va +15 ming obunachi o‘sishi qayd etilgan.',
    },
    {
      id: 'ig-reels-report',
      value: '50 ming+',
      label: 'Reels orqali organik obunachi',
      context:
        'Hisobotlarda Instagram Reels orqali 50 mingdan ortiq organik obunachi jalb qilingani qayd etilgan.',
    },
    {
      id: 'stories-views',
      value: '2–6 ming (maks. 8 ming)',
      label: 'Stories ko‘rishlar ko‘rsatkichi',
      context:
        'Stories odatda 2–6 ming ko‘rish olgan, eng yuqori qayd etilgan natija 8 ming.',
    },
  ],
  reportHighlights: [
    'Instagram Reels orqali 16,5 ming obunachi o‘sishi qayd etilgan (alohida viral Reels natijasi sifatida +6 ming obunachi ham qayd etilgan).',
    'Hisobotda Reels orqali 50 mingdan ortiq organik obunachi haqida ham ma’lumot bor.',
    'TikTok 2023-yil mart–aprel davrida 173 ming obunachiga yetgan; shu davrda 15 ming obunachi o‘sishi qayd etilgan.',
    'Bitta TikTok videosi orqali 552 ta organik murojaat olib kelingan.',
    'Stories odatda 2–6 ming ko‘rish olgan, eng yuqori qayd etilgan natija 8 ming.',
    'Ayrim videolarning ko‘rishlari birinchi oyda 2–6 baravargacha oshgan.',
  ],
  mainMetrics: [
    {
      id: 'reel-16k',
      value: '+16,5 ming',
      label: 'Instagram Reels obunachi o‘sishi',
      context: 'Instagram Reels orqali qayd etilgan 16,5 ming obunachi o‘sishi.',
    },
    {
      id: 'tiktok-leads',
      value: '552 ta',
      label: 'Bitta TikTok videodan murojaat',
      context: 'Bitta TikTok videosi orqali 552 ta organik murojaat.',
    },
    {
      id: 'youtube-growth',
      value: '150K → 306K+',
      label: 'YouTube kanalining o‘sishi',
      context: '2022-yil oktabrdan 2023-yil noyabrgacha YouTube obunachilari o‘sishi.',
    },
    {
      id: 'video-multiplier',
      value: '2–6 baravar',
      label: 'Birinchi oyda ko‘rishlar o‘sishi',
      context: 'Ayrim videolarning ko‘rishlari birinchi oyda 2–6 baravargacha oshgan.',
    },
  ],
  images: {
    logo: '/otlichno-logo.jpg',
    before: '/otlichno-before.png',
    after: '/otlichno-after.jpg',
    reel16k: '/otlichno-reel-16,5Kfollowers.jpg',
    reel6k: '/otlichno-reel-6Kfollowers.jpg',
    tiktokReel: '/tiktok-reel.jpg',
    tiktokLeads: '/tiktokleads.jpg',
    youtubeVideo: '/youtube-video.PNG',
  },
};

export const MARKETING_MAXIMUM_CASE_DATA: MarketingMaximumCaseData = {
  id: 'marketing-maximum',
  title: 'Marketing Maximum',
  category: 'Education / Content Marketing & Instagram Packaging',
  field: 'Marketing kursi va ta’lim loyihasi',
  shortDesc:
    'Instagram profilini tizimli qadoqlash, kontent yo‘nalishini shakllantirish va auditoriya o‘sishiga xizmat qiladigan formatlarni ishlab chiqish.',
  objective:
    'Loyiha Instagram sahifasini tartibga solish, brend uslubiga mos uch xil vizual yo‘nalishni shakllantirish hamda podcast formatidagi Reels va ekspert karusellari yordamida maqsadli auditoriyani jalb qilish.',
  completedTasks: [
    'Instagram profilini professional qadoqlash',
    'Uch xil vizual yo‘nalishni ishlab chiqish',
    'Highlight bo‘limlarini yaratish',
    'Stories faolligini yo‘lga qo‘yish',
    'Podcast formatidagi Reels',
    'Natijalar va o‘qituvchilar haqida karusel kontentlar',
  ],
  mainMetrics: [
    {
      id: 'mm-initial',
      value: '500–600',
      label: 'Boshlang‘ich auditoriya',
      context:
        'Ish boshlangan vaqtdagi dastlabki obunachilar soni (skrinshotda 657 obunachi).',
    },
    {
      id: 'mm-growth',
      value: '2 500+',
      label: 'Taxminan 2 oyda obunachilar',
      context:
        'Taxminan 2 oy davomida tizimli qadoqlash va kontent orqali 2 500 dan ortiq obunachiga o‘sish.',
    },
    {
      id: 'mm-avg-reels',
      value: '5–6 ming',
      label: 'O‘rtacha Reels ko‘rishlari',
      context:
        'Muntazam joylab borilgan Reels videolarining barqaror o‘rtacha ko‘rish ko‘rsatkichi.',
    },
    {
      id: 'mm-top-reel',
      value: '322 ming',
      label: 'Eng yaxshi Reels natijasi',
      context:
        'Podcast formatidagi Reels orqali qayd etilgan 322 ming ko‘rish va 18,1 ming layk.',
    },
  ],
  images: {
    before: '/mm-before.png',
    after: '/mm-after.png',
    visualBefore: '/mm-visual-before.png',
    visualAfter: '/mm-visual-after.png',
    reel: '/mm-reel.png',
  },
};

export const USTOZ_AKADEMIYASI_CASE_DATA: UstozAkademiyasiCaseData = {
  id: 'ustoz-akademiyasi',
  title: 'Ustoz Akademiyasi',
  role: 'Content Manager',
  category: 'Education / Content Strategy & Reels Production',
  field: 'Ta’lim loyihasi / Arab tili akademiyasi',
  shortDesc:
    'Ta’lim loyihasi uchun kontent strategiyasi, Reels ssenariylari va auditoriya o‘sishiga yo‘naltirilgan kontent jarayonlari.',
  completedTasks: [
    'Bozor va raqobatchilar tahlili.',
    'Kontent rejasini ishlab chiqish.',
    'Kontent rubrikalarini yaratish.',
    'Stories tayyorlash.',
    'O‘qituvchilar va filiallar haqida kontent yaratish.',
  ],
  mainMetrics: [
    {
      id: 'ustoz-monthly-growth',
      value: '4–5 ming / oy',
      label: 'Oylik obunachi o‘sishi',
      context:
        'Loyiha davomida oyiga taxminan 4–5 ming obunachi o‘sishi qayd etilgan.',
    },
    {
      id: 'ustoz-single-scenario',
      value: '~1 000 obunachi',
      label: 'Bir kunda bitta ssenariydan',
      context:
        'Bitta ssenariy asosida tayyorlangan video bir kunda taxminan 1 000 obunachi olib kelgan.',
    },
    {
      id: 'ustoz-top-reel',
      value: '5,4 million',
      label: 'Reels ko‘rish natijasi',
      context:
        'Bitta Reel 5,4 million ko‘rish va 49,2 ming layk olgan (skrinshotda tasdiqlangan).',
    },
  ],
  images: {
    profile: '/ustoz-profile.png',
    reel: '/ustoz-reel.png',
    visual: '/ustoz-visual.png',
  },
};

export const ENGORA_CASE_DATA: EngoraCaseData = {
  id: 'engora',
  title: 'Engora',
  role: 'Kontent boshqaruvi va kontent strategiyasi',
  period: 'May–Iyun',
  category: 'Education / Online English Learning Platform',
  field: 'Onlayn ingliz tili ta’lim platformasi',
  shortDesc:
    'Onlayn ingliz tili platformasi uchun noldan kontent strategiyasi, maqsadli auditoriya tahlili, rubrikalar va Reels kontent tizimini yo‘lga qo‘yish.',
  statusNote: 'Loyiha moliyaviy sabablar tufayli vaqtincha to‘xtatilgan.',
  completedTasks: [
    'Maqsadli auditoriya portretini ishlab chiqish',
    'Raqobatchilar tahlili',
    'Kontent-reja va kontent rubrikalarini shakllantirish',
    'Lead magnet g‘oyalarini ishlab chiqish',
    'Stories kontentini rejalashtirish',
    'Kontent syomkalarini tashkil qilish',
  ],
  mainMetrics: [
    {
      id: 'engora-followers-growth',
      value: '0 → 1 006',
      label: 'Bir oy ichida obunachilar soni',
      context:
        'Sahifa noldan (0 obunachi va 0 post) boshlanib, bir oy ichida 1 006 obunachiga yetkazilgan.',
    },
    {
      id: 'engora-trial-reels',
      value: '350+',
      label: 'Test Reels videolari orqali jalb qilingan obunachilar',
      context:
        'Sinov (test) Reels formatidagi videolar orqali profilga organik ravishda 350 dan ortiq yangi obunachi jalb qilingan.',
    },
  ],
  images: {
    before: '/engora-before.png',
    after: '/engora-after.png',
    reel1: '/engora-reel.png',
    reel2: '/engora-reel-2.png',
  },
};

export const MUXSINZADA_CASE_DATA: MuxsinzadaCaseData = {
  id: 'muxsinzada-perfumes',
  title: 'Muxsinzada Perfumes',
  role: 'Content Manager',
  period: 'Mart–aprel',
  field: 'Parfyumeriya',
  shortDesc:
    'Parfyumeriya brendi uchun kontent jarayoni, kreativ ssenariylar, mavsumiy atirlar g‘oyalari va brend uslubiga mos vizual kommunikatsiyani tashkil etish.',
  focusSummary:
    'Loyihada asosiy e’tibor brend estetikasini saqlagan holda kontent ishlab chiqarish tizimini yo‘lga qo‘yish, mijozlar ehtiyojiga mos rubrikalar hamda Reels va Stories formatlarini sinovdan o‘tkazishga qaratildi.',
  completedTasks: [
    'Raqobatchilar tahlili',
    'Brend uslubiga mos kontent ssenariylarini ishlab chiqish',
    'Kontent-reja tuzish',
    'Mavsumiy atirlar uchun kontent g‘oyalari',
    'Mijozlar fikrlari va sharhlariga asoslangan kontent',
    'Ovozli xabarlar orqali Stories formatlarini ishlab chiqish',
    'Reels va Stories formatlarini sinovdan o‘tkazish',
  ],
  images: {
    main: '/muxsinzada.png',
    visual: '/muxsinzada-visual.png',
    reel: '/muxsinzada-reel.png',
    process: '/muxsinzada-process.png',
  },
};

export const ZETRIC_CASE_DATA: ZetricCaseData = {
  id: 'zetric',
  title: 'Zetric',
  role: 'Content Manager',
  period: 'Aprel–iyun',
  field: 'B2B — kabel lotoklari va metall shkaflar ishlab chiqarish',
  shortDesc:
    'B2B ishlab chiqarish korxonasi uchun texnik ustunliklar, mahsulot sifati va ishlab chiqarish quvvatini biznes auditoriyasiga tushunarli tilda yetkazuvchi kontent tizimi.',
  b2bContext:
    'B2B segmentida kontent faqat vizual ko‘rinish uchun emas, balki qurilish kompaniyalari, elektr montajchilar, muhandislar va ta’minotchilar bilan texnik ishonch hamda uzoq muddatli hamkorlik kommunikatsiyasini qurish uchun ishlab chiqildi.',
  resultValue: 'Oyiga 1 000–2 000 ta yangi obunachi',
  resultLabel: 'Kontent + Target reklama sinergiyasi',
  resultDescription:
    'Kontent va Target reklamasini birgalikda qo‘llash orqali oyiga taxminan 1 000–2 000 ta yangi obunachi jalb qilindi.',
  completedTasks: [
    'Bozor va raqobatchilar tahlili',
    'Yangi kontent yo‘nalishini ishlab chiqish',
    'Kontent rubrikalarini shakllantirish',
    'Lead magnet g‘oyalarini ishlab chiqish',
    'Influencer bilan hamkorlikni tashkil qilish',
    'Stories kontentini rejalashtirish va yuritish',
  ],
  images: {
    main: '/zetrik.png',
    visual: '/zetric-visual.png',
    process1: '/zetric-process.png',
    process2: '/zetric-process-2.png',
  },
};

export const IQIBLA_CASE_DATA: IqiblaCaseData = {
  id: 'iqibla',
  title: 'IQibla',
  role: 'SMM jarayonlarini nazorat qilish, syomka va lokatsiyalarni tashkil etish, mahsulot kontentini ishlab chiqish.',
  field: 'Smart qurilmalar va Zikr Ring mahsulotlari',
  shortDesc:
    'Smart qurilmalar va Zikr Ring mahsulotlarining funksional imkoniyatlarini auditoriyaga sodda, tushunarli hamda vizual jihatdan sifatli yetkazish uchun SMM, syomka va kontent jarayonlarini boshqarish.',
  focusSummary:
    'Loyihada asosiy urg‘u mahsulot taqdimoti, kontent sifati, professional syomka lokatsiyalarini tashkil etish hamda Zikr Ring modellarining texnik xususiyatlari va o‘zaro farqlarini xaridorlarga aniq tushuntirib berishga qaratildi.',
  completedTasks: [
    'SMM jarayonlarini nazorat qilish',
    'Mahsulotlar uchun kontent g‘oyalarini ishlab chiqish',
    'Kontent syomkalarini tashkil qilish',
    'Syomka lokatsiyalarini tanlash va tayyorlash',
    'Mahsulot xususiyatlarini tushuntiruvchi kontent yaratish',
    'Zikr Ring modellari o‘rtasidagi farqlarni ko‘rsatuvchi carousel kontent tayyorlash',
  ],
  images: {
    main: '/iqibla-zikrring.png',
    profile: '/iqibla-profile.png',
    carousel: '/iqibla-carousel.png',
    bloger1: '/iqibla-bloger-1.png',
    bloger2: '/iqibla-bloger-2.png',
  },
};

export const ZAMONA_CASE_DATA: ZamonaCaseData = {
  id: 'zamona',
  title: 'Zamona To‘yxonasi',
  field: 'Target Ads',
  objective: 'To‘yxona uchun reklama orqali buyurtmalar jalb qilish',
  adBudget: '$1 500',
  ordersResult: '10–15 ta buyurtma',
  ordersDescription: 'Reklama kampaniyasi davomida Target orqali olingan buyurtmalar soni.',
  budgetDescription: 'Kampaniya uchun ishlatilgan reklama budjeti.',
  measurementNote:
    'Kampaniya samaradorligi shunchaki qamrov yoki obunachilar bilan emas, bevosita real to‘y va marosim buyurtmalari (10–15 ta buyurtma) orqali o‘lchandi.',
  menuPriceContext:
    'To‘yxona menyusining bir kishilik narxi 320 000 so‘mdan 400 000 so‘mgacha.',
  beforeContext:
    'Loyiha boshlanishidan oldin mijozlar asosan tanish-bilish (sarafan radio) orqali kelgan, ijtimoiy tarmoqlardan esa yetarli natija olinmagan.',
  afterContext:
    'Target reklama orqali ijtimoiy tarmoqlardan yangi mijozlar oqimi yo‘lga qo‘yildi va to‘yxona uchun 10–15 ta real buyurtma jalb qilindi.',
  images: {
    profile: '/zamona-profile.png',
  },
};

export const IBTIDO_CASE_DATA: IbtidoCaseData = {
  id: 'ibtido-talim',
  tag: 'TARGET ADS / LEAD GENERATION',
  title: 'Ibtido Ta’lim',
  field: 'Arab tili va madrasalarga tayyorlov kurslari',
  role: 'Target Ads',
  projectState: 'Reklama loyihasi noldan yo‘lga qo‘yilgan.',
  contextSummary:
    'Maqsadli auditoriya o‘rganilib, reklama orqali birinchi mijozlar va sotuvlar jalb qilingan. SMM xizmatiga yetarli budjet bo‘lmagani sababli asosiy e’tibor Target reklamasiga qaratilgan.',
  honestComparisonNote:
    'Ikkinchi oyda reklama budjeti kamroq ajratilgani sababli leadlar soni va umumiy xarajat kamroq bo‘lgan, biroq auditoriya va kreativlar optimizatsiyasi natijasida bitta lead narxi (CPL) $0.22 dan $0.05–$0.06 gacha sezilarli darajada arzonlashgan.',
  month1: {
    monthLabel: '1-oy natijalari',
    leads: '754 ta lead',
    cpl: '$0.22 CPL',
    spend: '$169.30 reklama xarajati',
    spendNote: 'taxminiy (~$169.30)',
  },
  month2: {
    monthLabel: '2-oy natijalari',
    leads: '143 ta lead',
    cpl: '$0.05–$0.06 CPL',
    spend: '$8.94 reklama xarajati',
  },
  comparisonTable: [
    {
      metric: 'Leadlar',
      month1: '754',
      month2: '143',
      isHighlighted: false,
    },
    {
      metric: 'CPL',
      month1: '$0.22',
      month2: '$0.05–$0.06',
      isHighlighted: true,
    },
    {
      metric: 'Reklama xarajati',
      month1: '~$169.30',
      month2: '$8.94',
      isHighlighted: false,
    },
  ],
  images: {
    adsMain: '/ibtido-ads.png',
    adsSecondary: '/ibtido-ads-2.png',
    profile: '/ibtido-profile.png',
  },
};

export const WATER_FILTER_CASE_DATA: WaterFilterCaseData = {
  id: 'suv-filtri',
  title: 'Suv filtri loyihasi',
  field: 'SMM + Target Ads',
  role: 'SMM va Target jarayonlarini to‘liq nazorat qilish',
  shortDesc:
    'SMM kontent tizimi va Target reklamasini birgalikda boshqarish orqali murojaatlar hamda real sotuvlar hajmini ikki oy davomida barqaror oshirishga qaratilgan kompleks loyiha.',
  completedTasks: [
    'Bozor va raqobatchilar tahlili',
    'Offer va reklama kreativlarini takomillashtirish',
    'Mahsulot haqida ma’lumot beruvchi Stories',
    'Mijozlar fikrlari asosidagi kontent',
    'Auditoriya muammolariga qaratilgan Reels',
    'SMM va Target faoliyatini birgalikda boshqarish',
  ],
  month1: {
    monthLabel: '1-oy natijalari',
    sales: '102 ta sotuv',
    inquiries: '693 ta murojaat',
    spend: '$436.39',
  },
  month2: {
    monthLabel: '2-oy natijalari',
    sales: '138 ta sotuv',
    inquiries: '817 ta murojaat',
    spend: '$492.64',
  },
  additionalResultValue: '100K ga yaqin ko‘rish',
  additionalResultLabel: 'Reels videolaridan biri qayd etgan natija',
  comparisonRows: [
    {
      metric: 'Sotuvlar soni',
      month1: '102 ta sotuv',
      month2: '138 ta sotuv',
      growthNote: '+36 ta sotuvga o‘sish',
      isHighlighted: true,
    },
    {
      metric: 'Murojaatlar soni',
      month1: '693 ta murojaat',
      month2: '817 ta murojaat',
      growthNote: '+124 ta murojaatga o‘sish',
      isHighlighted: true,
    },
    {
      metric: 'Reklama xarajati',
      month1: '$436.39',
      month2: '$492.64',
      growthNote: 'Reklama budjeti',
      isHighlighted: false,
    },
  ],
  images: {
    profile: '/water-profile.png',
    reelResult: '/water-reel-result.png',
    reel: '/water-reel.png',
  },
};

export const BOTTOM_SECTIONS_DATA: BottomPortfolioSectionsData = {
  beforeAfterItems: [
    {
      id: 'mm-visual',
      projectTitle: 'Marketing Maximum — Vizual qadoqlash',
      category: 'Vizual uslub va lenta',
      metricBadge: '500–600 → 2 500+ obunachi',
      summary:
        'Sahifaning dastlabki tartibsiz ko‘rinishi yagona dizayn tizimi, aniq rubrikalar va o‘qilishi oson muqovalar bilan professional holatga keltirildi.',
      beforeLabel: 'Oldin: Dastlabki lenta ko‘rinishi (mm-visual-before.png)',
      afterLabel: 'Keyin: Yangilangan vizual tizim (mm-visual-after.png)',
      beforeImage: '/mm-visual-before.png',
      afterImage: '/mm-visual-after.png',
    },
    {
      id: 'scholarhub-profile',
      projectTitle: 'ScholarHUB — Profil va obunachilar o‘sishi',
      category: 'Ta’lim va SAT loyihasi',
      metricBadge: '1 924 → 24 500+ obunachi',
      summary:
        'Bio, Highlight va kontent-strategiya yangilanib, lead-magnit hamda maqsadli Reels formatlari orqali auditoriya 24 500+ obunachiga yetkazildi.',
      beforeLabel: 'Oldin: 1 924 obunachi (scholar-before.jpg)',
      afterLabel: 'Keyin: 24 500+ obunachi (scholar-after.jpg)',
      beforeImage: '/scholar-before.jpg',
      afterImage: '/scholar-after.jpg',
    },
    {
      id: 'otlichno-profile',
      projectTitle: 'Otlichno o‘quv markazi — Sahifa rivojlanishi',
      category: 'O‘quv markazi',
      metricBadge: '2 601 → 32,7 ming obunachi',
      summary:
        'Tizimli kontent-reja va Reels videolar orqali profil 2 601 obunachidan 32,7 ming obunachiga o‘sdi.',
      beforeLabel: 'Oldin: 2 601 obunachi (otlichno-before.png)',
      afterLabel: 'Keyin: 32,7 ming obunachi (otlichno-after.jpg)',
      beforeImage: '/otlichno-before.png',
      afterImage: '/otlichno-after.jpg',
    },
    {
      id: 'engora-profile',
      projectTitle: 'Engora — Noldan qadoqlash va o‘sish',
      category: 'Online ingliz tili platformasi',
      metricBadge: '0 → 1 006 obunachi (1 oyda)',
      summary:
        'Yangi ochilgan sahifa noldan qadoqlanib, kontent rubrikalari va test Reels videolari yordamida bir oyda 1 006 obunachi jalb qilindi.',
      beforeLabel: 'Oldin: 0 obunachi (engora-before.png)',
      afterLabel: 'Keyin: 1 006 obunachi (engora-after.png)',
      beforeImage: '/engora-before.png',
      afterImage: '/engora-after.png',
    },
  ],
  aboutPositioningQuote:
    'Marketingdagi faoliyatimni SMM va kontentdan boshlaganman. Bugungi kunda esa Kontent, SMM va Performance Marketing yo‘nalishlarini birlashtirib, biznes uchun marketingni tizimli ravishda boshqarish ustida ishlayman.',
  aboutPillars: [
    {
      title: 'Kontent va ma’no tizimi',
      description:
        'Auditoriya va raqobatchilarni tahlil qilib, mahsulot qiymatini tushunarli yetkazuvchi rubrikalar, Reels ssenariylari va syomka jarayonlarini tashkil etish.',
    },
    {
      title: 'SMM va sahifa qadoqlash',
      description:
        'Instagram va boshqa platformalarda brend pozitsionirovaniyesi, vizual uyg‘unlik, Stories faolligi va ishonch uyg‘otuvchi profil arxitekturasini shakllantirish.',
    },
    {
      title: 'Performance Marketing va natija',
      description:
        'Target reklama kampaniyalarini leadlar soni, CPL samaradorligi, murojaatlar va real sotuvlar kabi o‘lchanadigan biznes ko‘rsatkichlariga bog‘lab boshqarish.',
    },
  ],
  experiences: [
    {
      id: 'obsess-2026',
      period: '2026',
      company: 'Obsess Marketing',
      role: 'Content Manager',
      description:
        'Loyihalar uchun kontent strategiyasi, rubrikalar tizimi, Reels va Stories ssenariylarini ishlab chiqish hamda kontent ishlab chiqarish jarayonlarini boshqarish.',
    },
    {
      id: 'mohir-2025-2026',
      period: '2025–2026',
      company: 'Mohir Marketing',
      role: 'Project Manager / SMM / Target',
      description:
        'Marketing loyihalarini kompleks nazorat qilish, SMM va kontent jamoasi ishini muvofiqlashtirish hamda Target reklama kampaniyalari samaradorligini boshqarish.',
    },
    {
      id: 'scholarhub-2024-2025',
      period: '2024–2025',
      company: 'ScholarHUB',
      role: 'SMM / Content',
      description:
        'SAT va xalqaro ta’lim loyihasi uchun kontent-strategiya, lead-magnit mexanikalari va Reels formatlarini ishlab chiqish orqali auditoriyani 24 500+ obunachiga yetkazish.',
    },
    {
      id: 'otlichno-2022-2023',
      period: '2022–2023',
      company: 'Otlichno',
      role: 'Account Manager → Content Manager',
      description:
        'O‘quv markazi ijtimoiy tarmoqlarini yuritish, Instagram, TikTok va YouTube uchun kontent yaratish hamda sahifani 2 601 dan 32,7 ming obunachiga olib chiqish.',
    },
  ],
  competencies: [
    {
      id: 'content-marketing',
      title: 'Content Marketing',
      description:
        'Maqsadli auditoriya muammolari va biznes maqsadlariga xizmat qiluvchi tizimli kontent ishlab chiqish.',
      tasks: [
        'Maqsadli auditoriya portreti va raqobatchilar tahlili',
        'Kontent-strategiya, kontent-reja va rubrikalarni shakllantirish',
        'Reels, Stories va karusel postlar uchun ssenariylar yozish',
        'Syomka jarayonlari va lokatsiyalarni tashkil etish',
      ],
    },
    {
      id: 'smm',
      title: 'SMM',
      description:
        'Ijtimoiy tarmoqlarda brend sahifalarini professional qadoqlash va auditoriya bilan uzluksiz kommunikatsiya qurish.',
      tasks: [
        'Instagram profilni (Bio, Highlight, vizual uslub) tizimli qadoqlash',
        'Kunlik Stories rejasi va auditoriya faolligini oshirish',
        'Mahsulot afzalliklari va mijozlar sharhlariga asoslangan kontent',
        'Blogger va influencerlar bilan hamkorlikni tashkil etish',
      ],
    },
    {
      id: 'target-ads',
      title: 'Target Ads',
      description:
        'Meta Ads orqali maqsadli auditoriyani jalb qilish, lead-formalar va murojaatlar oqimini yo‘lga qo‘yish.',
      tasks: [
        'Maqsadli auditoriya segmentlarini o‘rganish va sozlash',
        'Offer va reklama kreativlarini ishlab chiqish hamda test qilish',
        'Lead Generation va xabarlar (murojaatlar) kampaniyalarini yo‘lga qo‘yish',
        'Lead narxi (CPL) va reklama budjetini optimizatsiya qilish',
      ],
    },
    {
      id: 'performance-marketing',
      title: 'Performance Marketing',
      description:
        'Marketing harakatlarini o‘lchanadigan biznes natijalari — leadlar, murojaatlar, buyurtmalar va sotuvlarga yo‘naltirish.',
      tasks: [
        'Lead magnet mexanikalari va konversiya zanjirini shakllantirish',
        'Reklama xarajatlari, murojaatlar va real sotuvlar dinamikasini tahlil qilish',
        'Kontent va Target reklamasini yagona sotuv tizimiga birlashtirish',
        'Ikki va undan ortiq oylik kampaniya ko‘rsatkichlarini qiyosiy optimizatsiya qilish',
      ],
    },
    {
      id: 'project-management',
      title: 'Project Management',
      description:
        'Marketing, kontent va syomka jarayonlarini reja asosida boshqarish hamda jamoa ishini muvofiqlashtirish.',
      tasks: [
        'SMM, kontent va Target jarayonlarini to‘liq nazorat qilish',
        'Dizayner, videograf va mutaxassislar uchun texnik topshiriqlar (TZ) tuzish',
        'Kontent syomkalari, lokatsiyalar va muddatlarni rejalashtirish',
        'Oylik hisobotlar va marketing ko‘rsatkichlari monitoringini yuritish',
      ],
    },
  ],
  universityEducation: {
    institution: 'Toshkent Axborot Texnologiyalari Universiteti',
    field: 'Iqtisodiyot va menejment',
    year: '2024',
  },
  professionalCourses: [
    {
      id: 'najot-talim',
      provider: 'Najot Ta’lim',
      program: 'SMM Pro',
    },
    {
      id: 'xayot-sharapov',
      provider: 'Xayot Sharapov',
      program: 'Target Pro',
    },
    {
      id: 'mikhail-timochko',
      provider: 'Mikhail Timochko',
      program: 'Kontent va Zapusk',
    },
    {
      id: 'danil-matukhno',
      provider: 'Danil Matukhno',
      program: 'Zapusk, Product',
    },
    {
      id: 'aziz-abdumajitov',
      provider: 'Aziz Abdumajitov',
      program: 'Performance Marketing + Media Production',
    },
    {
      id: 'aziz-axtamov',
      provider: 'Aziz Axtamov',
      program: 'Tujjor Akademiyasi',
    },
    {
      id: 'altair-abduraxmonov',
      provider: 'Altair Abduraxmonov',
      program: 'Kreativ va Strategik Kontent',
    },
  ],
  contactCtaTitle: 'Marketing loyihangiz haqida gaplashamiz.',
  contactCtaSubtitle:
    'Loyihangiz uchun Kontent, SMM yoki Performance Marketing yo‘nalishida tizimli yechim kerak bo‘lsa, ma’lumot qoldiring.',
};

export const MARKETING_APPROACH_DATA: ApproachSectionData = {
  kicker: 'Yondashuv va Metodologiya',
  title: 'Marketingga tizimli yondashuv',
  description:
    'Marketingni alohida vazifalar yig‘indisi sifatida emas, tahlil, strategiya, amalga oshirish va optimizatsiyadan iborat yaxlit jarayon sifatida ko‘raman.',
  steps: [
    {
      stepNumber: '01',
      title: 'Tahlil',
      description: 'Bozor, raqobatchilar va maqsadli auditoriyani o‘rganish.',
      icon: 'search',
    },
    {
      stepNumber: '02',
      title: 'Strategiya',
      description: 'Offer, kontent yo‘nalishi va marketing rejasini ishlab chiqish.',
      icon: 'target',
    },
    {
      stepNumber: '03',
      title: 'Amalga oshirish',
      description: 'Kontent, SMM va Performance Marketing jarayonlarini boshqarish.',
      icon: 'rocket',
    },
    {
      stepNumber: '04',
      title: 'Tahlil va optimizatsiya',
      description: 'Natijalarni o‘lchash va keyingi marketing harakatlarini yaxshilash.',
      icon: 'chart',
    },
  ],
};

export const HERO_STATS: readonly StatItem[] = [
  {
    id: 'projects',
    value: '12 ta',
    label: 'loyiha',
    description: 'Amalga oshirilgan keyslar',
  },
  {
    id: 'directions',
    value: '3 ta',
    label: 'asosiy yo‘nalish',
    description: 'Content, SMM, Performance Marketing',
  },
  {
    id: 'experience',
    value: '2022 dan',
    label: 'marketingdagi faoliyat boshlanishi',
    description: 'Professional amaliy tajriba',
  },
];

export const NAV_LINKS: readonly NavItem[] = [
  { label: 'Bosh sahifa', href: '#hero' },
  { label: 'Yondashuv', href: '#directions' },
  { label: 'Loyihalar', href: '#projects' },
  { label: 'Tajriba', href: '#experience' },
  { label: 'Bog‘lanish', href: '#contact' },
];

/**
 * Returns initials from full name
 */
export function getInitials(fullName: string): string {
  if (!fullName || typeof fullName !== 'string') return 'KM';
  const parts = fullName.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

/**
 * Validates anchor identifier
 */
export function isValidAnchor(href: string): boolean {
  return typeof href === 'string' && href.startsWith('#') && href.length > 1;
}

/**
 * Splits bio quote into formatted segments highlighting core disciplines
 */
export interface BioSegment {
  text: string;
  isStrong: boolean;
}

export function parseBioSegments(bio: string): BioSegment[] {
  // Highlights: "Kontent, SMM", "Performance Marketing"
  const target1 = 'Kontent, SMM';
  const target2 = 'Performance Marketing';

  const segments: BioSegment[] = [];
  let remaining = bio;

  const idx1 = remaining.indexOf(target1);
  if (idx1 !== -1) {
    segments.push({ text: remaining.slice(0, idx1), isStrong: false });
    segments.push({ text: target1, isStrong: true });
    remaining = remaining.slice(idx1 + target1.length);
  }

  const idx2 = remaining.indexOf(target2);
  if (idx2 !== -1) {
    segments.push({ text: remaining.slice(0, idx2), isStrong: false });
    segments.push({ text: target2, isStrong: true });
    remaining = remaining.slice(idx2 + target2.length);
  }

  if (remaining.length > 0) {
    segments.push({ text: remaining, isStrong: false });
  }

  return segments;
}
