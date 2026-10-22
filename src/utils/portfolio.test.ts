import test from 'node:test';
import assert from 'node:assert/strict';
import {
  PROFILE_DATA,
  HERO_STATS,
  MARKETING_APPROACH_DATA,
  HILOL_MED_CASE_DATA,
  SCHOLARHUB_CASE_DATA,
  OTLICHNO_CASE_DATA,
  MARKETING_MAXIMUM_CASE_DATA,
  USTOZ_AKADEMIYASI_CASE_DATA,
  ENGORA_CASE_DATA,
  MUXSINZADA_CASE_DATA,
  ZETRIC_CASE_DATA,
  IQIBLA_CASE_DATA,
  ZAMONA_CASE_DATA,
  IBTIDO_CASE_DATA,
  WATER_FILTER_CASE_DATA,
  BOTTOM_SECTIONS_DATA,
  getInitials,
  isValidAnchor,
  parseBioSegments,
} from './portfolio.ts';
import {
  isGoogleSheetsEndpointConfigured,
  submitContactToGoogleSheets,
  validateContactFormInput,
} from '../services/googleSheets.ts';

test('PROFILE_DATA contains exact required personal brand info', () => {
  assert.equal(PROFILE_DATA.name, 'Kamronbek Mamajonov');
  assert.equal(PROFILE_DATA.role, 'Digital Marketolog');
  assert.equal(
    PROFILE_DATA.bioQuote,
    'Marketingdagi faoliyatimni SMM va kontentdan boshlaganman. Bugungi kunda esa Kontent, SMM va Performance Marketing yo‘nalishlarini birlashtirib, biznes uchun marketingni tizimli ravishda boshqarish ustida ishlayman.'
  );
  assert.equal(PROFILE_DATA.primaryCtaText, 'Loyihalarni ko‘rish');
  assert.equal(PROFILE_DATA.primaryCtaHref, '#projects');
  assert.equal(PROFILE_DATA.secondaryCtaText, 'Bog‘lanish');
  assert.equal(PROFILE_DATA.secondaryCtaHref, '#contact');
});

test('HERO_STATS contains the exact 3 specified metrics', () => {
  assert.equal(HERO_STATS.length, 3);
  assert.equal(HERO_STATS[0].value, '12 ta');
  assert.equal(HERO_STATS[0].label, 'loyiha');
  assert.equal(HERO_STATS[1].value, '3 ta');
  assert.equal(HERO_STATS[1].label, 'asosiy yo‘nalish');
  assert.equal(HERO_STATS[1].description, 'Content, SMM, Performance Marketing');
  assert.equal(HERO_STATS[2].value, '2022 dan');
  assert.equal(HERO_STATS[2].label, 'marketingdagi faoliyat boshlanishi');
});

test('getInitials extracts initials correctly', () => {
  assert.equal(getInitials('Kamronbek Mamajonov'), 'KM');
  assert.equal(getInitials('Kamronbek'), 'KA');
  assert.equal(getInitials(''), 'KM');
});

test('isValidAnchor validates target anchors correctly', () => {
  assert.equal(isValidAnchor('#projects'), true);
  assert.equal(isValidAnchor('#contact'), true);
  assert.equal(isValidAnchor('#'), false);
  assert.equal(isValidAnchor('https://example.com'), false);
});

test('parseBioSegments highlights target disciplines properly', () => {
  const segments = parseBioSegments(PROFILE_DATA.bioQuote);
  const strongSegments = segments.filter((s) => s.isStrong);
  assert.equal(strongSegments.length, 2);
  assert.equal(strongSegments[0].text, 'Kontent, SMM');
  assert.equal(strongSegments[1].text, 'Performance Marketing');

  // Verify reconstructed text matches bioQuote exactly
  const reconstructed = segments.map((s) => s.text).join('');
  assert.equal(reconstructed, PROFILE_DATA.bioQuote);
});

test('MARKETING_APPROACH_DATA contains exact title, description and 4 ordered steps', () => {
  assert.equal(MARKETING_APPROACH_DATA.title, 'Marketingga tizimli yondashuv');
  assert.equal(
    MARKETING_APPROACH_DATA.description,
    'Marketingni alohida vazifalar yig‘indisi sifatida emas, tahlil, strategiya, amalga oshirish va optimizatsiyadan iborat yaxlit jarayon sifatida ko‘raman.'
  );
  assert.equal(MARKETING_APPROACH_DATA.steps.length, 4);

  // Step 01: Tahlil
  assert.equal(MARKETING_APPROACH_DATA.steps[0].stepNumber, '01');
  assert.equal(MARKETING_APPROACH_DATA.steps[0].title, 'Tahlil');
  assert.equal(
    MARKETING_APPROACH_DATA.steps[0].description,
    'Bozor, raqobatchilar va maqsadli auditoriyani o‘rganish.'
  );
  assert.equal(MARKETING_APPROACH_DATA.steps[0].icon, 'search');

  // Step 02: Strategiya
  assert.equal(MARKETING_APPROACH_DATA.steps[1].stepNumber, '02');
  assert.equal(MARKETING_APPROACH_DATA.steps[1].title, 'Strategiya');
  assert.equal(
    MARKETING_APPROACH_DATA.steps[1].description,
    'Offer, kontent yo‘nalishi va marketing rejasini ishlab chiqish.'
  );
  assert.equal(MARKETING_APPROACH_DATA.steps[1].icon, 'target');

  // Step 03: Amalga oshirish
  assert.equal(MARKETING_APPROACH_DATA.steps[2].stepNumber, '03');
  assert.equal(MARKETING_APPROACH_DATA.steps[2].title, 'Amalga oshirish');
  assert.equal(
    MARKETING_APPROACH_DATA.steps[2].description,
    'Kontent, SMM va Performance Marketing jarayonlarini boshqarish.'
  );
  assert.equal(MARKETING_APPROACH_DATA.steps[2].icon, 'rocket');

  // Step 04: Tahlil va optimizatsiya
  assert.equal(MARKETING_APPROACH_DATA.steps[3].stepNumber, '04');
  assert.equal(MARKETING_APPROACH_DATA.steps[3].title, 'Tahlil va optimizatsiya');
  assert.equal(
    MARKETING_APPROACH_DATA.steps[3].description,
    'Natijalarni o‘lchash va keyingi marketing harakatlarini yaxshilash.'
  );
  assert.equal(MARKETING_APPROACH_DATA.steps[3].icon, 'chart');
});

test('HILOL_MED_CASE_DATA adheres strictly to user brief', () => {
  assert.equal(HILOL_MED_CASE_DATA.title, 'HILOL MED');
  assert.equal(HILOL_MED_CASE_DATA.category, 'Healthcare / Content Marketing');
  assert.equal(HILOL_MED_CASE_DATA.field, 'Tibbiyot / Klinika');
  assert.equal(
    HILOL_MED_CASE_DATA.objective,
    'Klinika kontentini tizimli tashkil etish, ekspertlar ishtirokidagi videolarni rivojlantirish va auditoriya bilan aloqani kuchaytirish.'
  );

  // 7 tasks
  assert.equal(HILOL_MED_CASE_DATA.completedTasks.length, 7);

  // 4 metrics
  assert.equal(HILOL_MED_CASE_DATA.metrics.length, 4);
  assert.equal(HILOL_MED_CASE_DATA.metrics[0].value, '63–65K → 100K');
  assert.equal(HILOL_MED_CASE_DATA.metrics[1].value, '15 Reels / oy');
  assert.equal(HILOL_MED_CASE_DATA.metrics[2].value, '600K views');
  assert.equal(HILOL_MED_CASE_DATA.metrics[3].value, '10K+ views');

  // Exact 6 images
  assert.equal(HILOL_MED_CASE_DATA.images.building, '/hilol-building.jpg');
  assert.equal(HILOL_MED_CASE_DATA.images.logo, '/hilol-logo.jpg');
  assert.equal(HILOL_MED_CASE_DATA.images.profileProof, '/hilol-profile.png');
  assert.equal(HILOL_MED_CASE_DATA.images.reelProof, '/hilol-reelproof.png');
  assert.equal(HILOL_MED_CASE_DATA.images.interview, '/hilol-interview.png');
  assert.equal(HILOL_MED_CASE_DATA.images.team, '/hilol-team.png');
});

test('SCHOLARHUB_CASE_DATA adheres strictly to user brief', () => {
  assert.equal(SCHOLARHUB_CASE_DATA.title, 'SCHOLARHUB');
  assert.equal(
    SCHOLARHUB_CASE_DATA.category,
    'Education / SAT Preparation / Content Marketing'
  );
  assert.equal(
    SCHOLARHUB_CASE_DATA.objective,
    'SAT haqida bilim va xabardorlikni oshirish, maqsadli auditoriyani jalb qilish va kontent orqali arizalar hamda sotuvlarga yordam berish.'
  );

  // 6 tasks
  assert.equal(SCHOLARHUB_CASE_DATA.completedTasks.length, 6);

  // 4 main metrics
  assert.equal(SCHOLARHUB_CASE_DATA.mainMetrics.length, 4);
  assert.equal(SCHOLARHUB_CASE_DATA.mainMetrics[0].value, '+22 200');
  assert.equal(SCHOLARHUB_CASE_DATA.mainMetrics[1].value, '24 500+');
  assert.equal(SCHOLARHUB_CASE_DATA.mainMetrics[2].value, '1 700+ izoh');
  assert.equal(SCHOLARHUB_CASE_DATA.mainMetrics[3].value, '183K views');

  // 4 additional metrics
  assert.equal(SCHOLARHUB_CASE_DATA.additionalMetrics.length, 4);
  assert.equal(SCHOLARHUB_CASE_DATA.additionalMetrics[0].value, '13K likes');
  assert.equal(SCHOLARHUB_CASE_DATA.additionalMetrics[1].value, '11K comments');
  assert.equal(SCHOLARHUB_CASE_DATA.additionalMetrics[2].value, '~4 000 kishi');
  assert.equal(SCHOLARHUB_CASE_DATA.additionalMetrics[3].value, '176 ta ariza');

  // Exactly 7 images specified
  assert.equal(SCHOLARHUB_CASE_DATA.images.before, '/scholar-before.jpg');
  assert.equal(SCHOLARHUB_CASE_DATA.images.after, '/scholar-after.jpg');
  assert.equal(
    SCHOLARHUB_CASE_DATA.images.leadMagnetReel,
    '/lidmagnit-reel-2.jpg'
  );
  assert.equal(SCHOLARHUB_CASE_DATA.images.salesProof, '/sotuv-otzivi.jpg');
  assert.equal(SCHOLARHUB_CASE_DATA.images.process, '/scholar-process.jpg');
  assert.equal(SCHOLARHUB_CASE_DATA.images.visual1, '/scholar-visual.jpg');
  assert.equal(SCHOLARHUB_CASE_DATA.images.visual2, '/scholar-visual-2.jpg');
});

test('OTLICHNO_CASE_DATA adheres strictly to user brief and all 8 images', () => {
  assert.equal(OTLICHNO_CASE_DATA.title, 'Otlichno o‘quv markazi');
  assert.equal(OTLICHNO_CASE_DATA.role, 'Account Manager → Content Manager');
  assert.equal(OTLICHNO_CASE_DATA.period, '2022–2023');
  assert.equal(
    OTLICHNO_CASE_DATA.shortDesc,
    'Ta’lim loyihasi uchun ijtimoiy tarmoqlarda kontent yaratish va auditoriyani rivojlantirish.'
  );
  assert.equal(OTLICHNO_CASE_DATA.oct2022Stats.length, 4);
  assert.equal(OTLICHNO_CASE_DATA.nov2023Stats.length, 4);
  assert.equal(OTLICHNO_CASE_DATA.completedTasks.length, 6);
  assert.equal(OTLICHNO_CASE_DATA.mainMetrics.length, 4);

  // Exact 8 images specified by user
  assert.equal(OTLICHNO_CASE_DATA.images.logo, '/otlichno-logo.jpg');
  assert.equal(OTLICHNO_CASE_DATA.images.before, '/otlichno-before.png');
  assert.equal(OTLICHNO_CASE_DATA.images.after, '/otlichno-after.jpg');
  assert.equal(
    OTLICHNO_CASE_DATA.images.reel16k,
    '/otlichno-reel-16,5Kfollowers.jpg'
  );
  assert.equal(
    OTLICHNO_CASE_DATA.images.reel6k,
    '/otlichno-reel-6Kfollowers.jpg'
  );
  assert.equal(OTLICHNO_CASE_DATA.images.tiktokReel, '/tiktok-reel.jpg');
  assert.equal(OTLICHNO_CASE_DATA.images.tiktokLeads, '/tiktokleads.jpg');
  assert.equal(OTLICHNO_CASE_DATA.images.youtubeVideo, '/youtube-video.PNG');
});

test('MARKETING_MAXIMUM_CASE_DATA adheres strictly to user brief and all 5 original images', () => {
  assert.equal(MARKETING_MAXIMUM_CASE_DATA.title, 'Marketing Maximum');
  assert.equal(MARKETING_MAXIMUM_CASE_DATA.field, 'Marketing kursi va ta’lim loyihasi');
  assert.equal(
    MARKETING_MAXIMUM_CASE_DATA.shortDesc,
    'Instagram profilini tizimli qadoqlash, kontent yo‘nalishini shakllantirish va auditoriya o‘sishiga xizmat qiladigan formatlarni ishlab chiqish.'
  );
  assert.equal(MARKETING_MAXIMUM_CASE_DATA.completedTasks.length, 6);
  assert.equal(MARKETING_MAXIMUM_CASE_DATA.mainMetrics.length, 4);

  // Exact 5 original images specified by user
  assert.equal(MARKETING_MAXIMUM_CASE_DATA.images.before, '/mm-before.png');
  assert.equal(MARKETING_MAXIMUM_CASE_DATA.images.after, '/mm-after.png');
  assert.equal(MARKETING_MAXIMUM_CASE_DATA.images.visualBefore, '/mm-visual-before.png');
  assert.equal(MARKETING_MAXIMUM_CASE_DATA.images.visualAfter, '/mm-visual-after.png');
  assert.equal(MARKETING_MAXIMUM_CASE_DATA.images.reel, '/mm-reel.png');
});

test('USTOZ_AKADEMIYASI_CASE_DATA adheres strictly to user brief and all 3 original images', () => {
  assert.equal(USTOZ_AKADEMIYASI_CASE_DATA.title, 'Ustoz Akademiyasi');
  assert.equal(USTOZ_AKADEMIYASI_CASE_DATA.role, 'Content Manager');
  assert.equal(
    USTOZ_AKADEMIYASI_CASE_DATA.shortDesc,
    'Ta’lim loyihasi uchun kontent strategiyasi, Reels ssenariylari va auditoriya o‘sishiga yo‘naltirilgan kontent jarayonlari.'
  );
  assert.equal(USTOZ_AKADEMIYASI_CASE_DATA.completedTasks.length, 5);
  assert.equal(USTOZ_AKADEMIYASI_CASE_DATA.mainMetrics.length, 3);

  // Exact 3 original images specified by user
  assert.equal(USTOZ_AKADEMIYASI_CASE_DATA.images.profile, '/ustoz-profile.png');
  assert.equal(USTOZ_AKADEMIYASI_CASE_DATA.images.reel, '/ustoz-reel.png');
  assert.equal(USTOZ_AKADEMIYASI_CASE_DATA.images.visual, '/ustoz-visual.png');
});

test('ENGORA_CASE_DATA adheres strictly to user brief and all 4 original images', () => {
  assert.equal(ENGORA_CASE_DATA.title, 'Engora');
  assert.equal(ENGORA_CASE_DATA.period, 'May–Iyun');
  assert.equal(
    ENGORA_CASE_DATA.statusNote,
    'Loyiha moliyaviy sabablar tufayli vaqtincha to‘xtatilgan.'
  );
  assert.equal(ENGORA_CASE_DATA.completedTasks.length, 6);
  assert.equal(ENGORA_CASE_DATA.mainMetrics.length, 2);
  assert.equal(ENGORA_CASE_DATA.mainMetrics[0].value, '0 → 1 006');
  assert.equal(ENGORA_CASE_DATA.mainMetrics[1].value, '350+');

  // Exact 4 original images specified by user
  assert.equal(ENGORA_CASE_DATA.images.before, '/engora-before.png');
  assert.equal(ENGORA_CASE_DATA.images.after, '/engora-after.png');
  assert.equal(ENGORA_CASE_DATA.images.reel1, '/engora-reel.png');
  assert.equal(ENGORA_CASE_DATA.images.reel2, '/engora-reel-2.png');
});

test('MUXSINZADA_CASE_DATA adheres strictly to user brief and all 4 original images', () => {
  assert.equal(MUXSINZADA_CASE_DATA.title, 'Muxsinzada Perfumes');
  assert.equal(MUXSINZADA_CASE_DATA.field, 'Parfyumeriya');
  assert.equal(MUXSINZADA_CASE_DATA.role, 'Content Manager');
  assert.equal(MUXSINZADA_CASE_DATA.period, 'Mart–aprel');
  assert.equal(MUXSINZADA_CASE_DATA.completedTasks.length, 7);

  // Exact 4 original images specified by user
  assert.equal(MUXSINZADA_CASE_DATA.images.main, '/muxsinzada.png');
  assert.equal(MUXSINZADA_CASE_DATA.images.visual, '/muxsinzada-visual.png');
  assert.equal(MUXSINZADA_CASE_DATA.images.reel, '/muxsinzada-reel.png');
  assert.equal(MUXSINZADA_CASE_DATA.images.process, '/muxsinzada-process.png');
});

test('ZETRIC_CASE_DATA adheres strictly to user brief and all 4 original images', () => {
  assert.equal(ZETRIC_CASE_DATA.title, 'Zetric');
  assert.equal(
    ZETRIC_CASE_DATA.field,
    'B2B — kabel lotoklari va metall shkaflar ishlab chiqarish'
  );
  assert.equal(ZETRIC_CASE_DATA.role, 'Content Manager');
  assert.equal(ZETRIC_CASE_DATA.period, 'Aprel–iyun');
  assert.equal(ZETRIC_CASE_DATA.resultValue, 'Oyiga 1 000–2 000 ta yangi obunachi');
  assert.equal(
    ZETRIC_CASE_DATA.resultDescription,
    'Kontent va Target reklamasini birgalikda qo‘llash orqali oyiga taxminan 1 000–2 000 ta yangi obunachi jalb qilindi.'
  );
  assert.equal(ZETRIC_CASE_DATA.completedTasks.length, 6);

  // Exact 4 original images specified by user
  assert.equal(ZETRIC_CASE_DATA.images.main, '/zetrik.png');
  assert.equal(ZETRIC_CASE_DATA.images.visual, '/zetric-visual.png');
  assert.equal(ZETRIC_CASE_DATA.images.process1, '/zetric-process.png');
  assert.equal(ZETRIC_CASE_DATA.images.process2, '/zetric-process-2.png');
});

test('IQIBLA_CASE_DATA adheres strictly to user brief and all 5 original images', () => {
  assert.equal(IQIBLA_CASE_DATA.title, 'IQibla');
  assert.equal(
    IQIBLA_CASE_DATA.field,
    'Smart qurilmalar va Zikr Ring mahsulotlari'
  );
  assert.equal(
    IQIBLA_CASE_DATA.role,
    'SMM jarayonlarini nazorat qilish, syomka va lokatsiyalarni tashkil etish, mahsulot kontentini ishlab chiqish.'
  );
  assert.equal(IQIBLA_CASE_DATA.completedTasks.length, 6);

  // Exact 5 original images specified by user
  assert.equal(IQIBLA_CASE_DATA.images.main, '/iqibla-zikrring.png');
  assert.equal(IQIBLA_CASE_DATA.images.profile, '/iqibla-profile.png');
  assert.equal(IQIBLA_CASE_DATA.images.carousel, '/iqibla-carousel.png');
  assert.equal(IQIBLA_CASE_DATA.images.bloger1, '/iqibla-bloger-1.png');
  assert.equal(IQIBLA_CASE_DATA.images.bloger2, '/iqibla-bloger-2.png');
});

test('ZAMONA_CASE_DATA adheres strictly to Target Ads brief and original image', () => {
  assert.equal(ZAMONA_CASE_DATA.title, 'Zamona To‘yxonasi');
  assert.equal(ZAMONA_CASE_DATA.field, 'Target Ads');
  assert.equal(
    ZAMONA_CASE_DATA.objective,
    'To‘yxona uchun reklama orqali buyurtmalar jalb qilish'
  );
  assert.equal(ZAMONA_CASE_DATA.adBudget, '$1 500');
  assert.equal(ZAMONA_CASE_DATA.ordersResult, '10–15 ta buyurtma');
  assert.equal(
    ZAMONA_CASE_DATA.menuPriceContext,
    'To‘yxona menyusining bir kishilik narxi 320 000 so‘mdan 400 000 so‘mgacha.'
  );
  assert.equal(ZAMONA_CASE_DATA.images.profile, '/zamona-profile.png');
});

test('IBTIDO_CASE_DATA adheres strictly to Target Ads / Lead Generation brief and 3 original images', () => {
  assert.equal(IBTIDO_CASE_DATA.tag, 'TARGET ADS / LEAD GENERATION');
  assert.equal(IBTIDO_CASE_DATA.title, 'Ibtido Ta’lim');
  assert.equal(IBTIDO_CASE_DATA.field, 'Arab tili va madrasalarga tayyorlov kurslari');
  assert.equal(IBTIDO_CASE_DATA.role, 'Target Ads');
  assert.equal(IBTIDO_CASE_DATA.month1.leads, '754 ta lead');
  assert.equal(IBTIDO_CASE_DATA.month1.cpl, '$0.22 CPL');
  assert.equal(IBTIDO_CASE_DATA.month1.spend, '$169.30 reklama xarajati');
  assert.equal(IBTIDO_CASE_DATA.month2.leads, '143 ta lead');
  assert.equal(IBTIDO_CASE_DATA.month2.cpl, '$0.05–$0.06 CPL');
  assert.equal(IBTIDO_CASE_DATA.month2.spend, '$8.94 reklama xarajati');
  assert.equal(IBTIDO_CASE_DATA.comparisonTable.length, 3);
  assert.equal(IBTIDO_CASE_DATA.images.adsMain, '/ibtido-ads.png');
  assert.equal(IBTIDO_CASE_DATA.images.adsSecondary, '/ibtido-ads-2.png');
  assert.equal(IBTIDO_CASE_DATA.images.profile, '/ibtido-profile.png');
});

test('WATER_FILTER_CASE_DATA adheres strictly to SMM + Target Ads brief, excludes prohibited brand name, and uses 3 original images', () => {
  assert.equal(WATER_FILTER_CASE_DATA.title, 'Suv filtri loyihasi');
  assert.equal(WATER_FILTER_CASE_DATA.field, 'SMM + Target Ads');
  assert.equal(
    WATER_FILTER_CASE_DATA.role,
    'SMM va Target jarayonlarini to‘liq nazorat qilish'
  );
  assert.equal(WATER_FILTER_CASE_DATA.completedTasks.length, 6);
  assert.equal(WATER_FILTER_CASE_DATA.month1.sales, '102 ta sotuv');
  assert.equal(WATER_FILTER_CASE_DATA.month1.inquiries, '693 ta murojaat');
  assert.equal(WATER_FILTER_CASE_DATA.month1.spend, '$436.39');
  assert.equal(WATER_FILTER_CASE_DATA.month2.sales, '138 ta sotuv');
  assert.equal(WATER_FILTER_CASE_DATA.month2.inquiries, '817 ta murojaat');
  assert.equal(WATER_FILTER_CASE_DATA.month2.spend, '$492.64');
  assert.equal(WATER_FILTER_CASE_DATA.additionalResultValue, '100K ga yaqin ko‘rish');
  assert.equal(
    JSON.stringify(WATER_FILTER_CASE_DATA).toLowerCase().includes('evora'),
    false
  );
  assert.equal(WATER_FILTER_CASE_DATA.images.profile, '/water-profile.png');
  assert.equal(WATER_FILTER_CASE_DATA.images.reelResult, '/water-reel-result.png');
  assert.equal(WATER_FILTER_CASE_DATA.images.reel, '/water-reel.png');
});

test('BOTTOM_SECTIONS_DATA adheres strictly to required content for Before/After, About, Experience, Competencies, Education, and Contact', () => {
  assert.equal(BOTTOM_SECTIONS_DATA.beforeAfterItems.length, 4);
  assert.equal(
    BOTTOM_SECTIONS_DATA.aboutPositioningQuote,
    'Marketingdagi faoliyatimni SMM va kontentdan boshlaganman. Bugungi kunda esa Kontent, SMM va Performance Marketing yo‘nalishlarini birlashtirib, biznes uchun marketingni tizimli ravishda boshqarish ustida ishlayman.'
  );
  assert.equal(BOTTOM_SECTIONS_DATA.experiences.length, 4);
  assert.equal(BOTTOM_SECTIONS_DATA.experiences[0].company, 'Obsess Marketing');
  assert.equal(BOTTOM_SECTIONS_DATA.experiences[1].company, 'Mohir Marketing');
  assert.equal(BOTTOM_SECTIONS_DATA.experiences[2].company, 'ScholarHUB');
  assert.equal(BOTTOM_SECTIONS_DATA.experiences[3].company, 'Otlichno');
  assert.equal(BOTTOM_SECTIONS_DATA.competencies.length, 5);
  assert.equal(
    BOTTOM_SECTIONS_DATA.universityEducation.institution,
    'Toshkent Axborot Texnologiyalari Universiteti'
  );
  assert.equal(BOTTOM_SECTIONS_DATA.professionalCourses.length, 7);
  assert.equal(
    BOTTOM_SECTIONS_DATA.contactCtaTitle,
    'Marketing loyihangiz haqida gaplashamiz.'
  );
});

test('Google Sheets contact form validation and endpoint checks enforce required fields and Uzbek messages', async () => {
  const emptyName = validateContactFormInput({
    name: '   ',
    contact: '+998901234567',
    message: 'Salom',
  });
  assert.equal(emptyName.valid, false);

  const emptyContact = validateContactFormInput({
    name: 'Sardor Komilov',
    contact: '   ',
    message: 'Salom',
  });
  assert.equal(emptyContact.valid, false);

  const validInput = validateContactFormInput({
    name: 'Sardor Komilov',
    contact: '@sardor_uz',
    message: 'SMM loyihasi',
  });
  assert.equal(validInput.valid, true);

  assert.equal(isGoogleSheetsEndpointConfigured(''), false);
  assert.equal(
    isGoogleSheetsEndpointConfigured('YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL'),
    false
  );
  assert.equal(
    isGoogleSheetsEndpointConfigured(
      'https://script.google.com/macros/s/AKfycbxExample/exec'
    ),
    true
  );

  const unconfiguredResult = await submitContactToGoogleSheets(
    {
      name: 'Sardor Komilov',
      contact: '+998901234567',
      message: 'Test xabar',
    },
    ''
  );
  assert.equal(unconfiguredResult.ok, false);
  assert.equal(unconfiguredResult.code, 'ENDPOINT_NOT_CONFIGURED');
  assert.equal(
    unconfiguredResult.message.includes('VITE_GOOGLE_SHEETS_WEB_APP_URL'),
    true
  );
});
