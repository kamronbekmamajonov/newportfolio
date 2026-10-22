import React, { useState, useEffect } from 'react';
import {
  Briefcase,
  Camera,
  CheckCircle2,
  Layers,
  Maximize2,
  Smartphone,
  Sparkles,
  X,
} from 'lucide-react';
import { IQIBLA_CASE_DATA } from '../utils/portfolio.ts';

interface LightboxState {
  isOpen: boolean;
  src: string;
  title: string;
  subtitle: string;
}

export const IqiblaCaseStudy: React.FC = () => {
  const [lightbox, setLightbox] = useState<LightboxState>({
    isOpen: false,
    src: '',
    title: '',
    subtitle: '',
  });

  const openLightbox = (src: string, title: string, subtitle: string) => {
    setLightbox({ isOpen: true, src, title, subtitle });
  };

  const closeLightbox = () => {
    setLightbox({ isOpen: false, src: '', title: '', subtitle: '' });
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && lightbox.isOpen) {
        closeLightbox();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightbox.isOpen]);

  const caseData = IQIBLA_CASE_DATA;

  return (
    <section
      id="iqibla"
      aria-label="IQibla Case Study"
      className="relative scroll-mt-20 sm:scroll-mt-24 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#F5F8FF]/60 border-t border-[#E2E8F0]"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* 1. LOYIHA SARLAVHASI VA KONTEKSTI */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-[#E2E8F0]">
          <div>
            <div className="flex flex-wrap items-center gap-2.5 mb-3.5 text-xs font-bold text-[#2563EB]">
              <span className="uppercase tracking-wider">09 / 10 · Keys</span>
              <span aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1.5 text-[#111827]">
                <Smartphone className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>Yo‘nalish: {caseData.field}</span>
              </span>
            </div>

            <div className="flex items-center gap-4 sm:gap-5 mt-2">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#EAF2FF] text-[#2563EB] flex flex-col items-center justify-center border border-[#E2E8F0] shrink-0">
                <span className="font-display font-black text-2xl sm:text-3xl tracking-tight leading-none">
                  iQ
                </span>
                <span className="text-[8px] font-bold text-[#111827] uppercase tracking-widest mt-1">
                  ZIKR RING
                </span>
              </div>
              <div>
                <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[2.6rem] text-[#111827] tracking-tight leading-none">
                  {caseData.title}
                </h2>
                <div className="flex items-start gap-2 mt-2.5 text-xs sm:text-sm font-bold text-[#2563EB] max-w-xl">
                  <Briefcase className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>Mening rolim: {caseData.role}</span>
                </div>
              </div>
            </div>

            <p className="mt-4 text-base sm:text-lg text-[#111827] font-medium max-w-2xl leading-relaxed">
              {caseData.shortDesc}
            </p>
          </div>

          <div className="flex flex-col gap-2 shrink-0 bg-white p-4 sm:p-5 rounded-2xl border border-[#E2E8F0] max-w-sm">
            <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#2563EB]">
              <Sparkles className="w-4 h-4 shrink-0" />
              <span>Mahsulot Taqdimoti va Kontent Sifati</span>
            </div>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Zikr Ring modellarining funksiyalarini tushuntirish, professional syomka lokatsiyalarini tayyorlash va SMM jarayonlarini tizimli nazorat qilish.
            </p>
          </div>
        </div>

        {/* 2. MAHSULOT ASOSIY VIZUALI (iqibla-zikrring.png) VA BAJARILGAN ISHLAR */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Chap ustun: Loyihaning asosiy vizuali (iqibla-zikrring.png) */}
          <div className="lg:col-span-6">
            <div
              onClick={() =>
                openLightbox(
                  caseData.images.main,
                  'IQibla — Zikr Ring Flex Pro mahsulot taqdimoti',
                  'Loyihaning asosiy vizuali: mahsulot xususiyatlarini tushuntiruvchi dizayn (iqibla-zikrring.png).'
                )
              }
              className="group p-5 sm:p-6 rounded-3xl bg-white border-2 border-[#2563EB]/25 hover:border-[#2563EB] transition-all cursor-pointer flex flex-col justify-between"
              role="button"
              tabIndex={0}
              aria-label="IQibla Zikr Ring asosiy vizual rasmini kattalashtirib ko‘rish"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  openLightbox(
                    caseData.images.main,
                    'IQibla — Zikr Ring Flex Pro mahsulot taqdimoti',
                    'Loyihaning asosiy vizuali: mahsulot xususiyatlarini tushuntiruvchi dizayn (iqibla-zikrring.png).'
                  );
                }
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#2563EB] block">
                    Asosiy Mahsulot Vizuali
                  </span>
                  <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#111827] mt-0.5">
                    Zikr Ring Flex Pro xususiyatlari
                  </h3>
                </div>
                <span className="text-xs font-bold text-[#64748B]">iqibla-zikrring.png</span>
              </div>

              <div className="relative w-full rounded-2xl overflow-hidden bg-[#F5F8FF] border border-[#E2E8F0] flex items-center justify-center p-3">
                <img
                  src={caseData.images.main}
                  alt="IQibla — Zikr Ring Flex Pro asosiy vizuali (iqibla-zikrring.png)"
                  className="w-full h-auto max-h-[600px] object-contain rounded-xl group-hover:scale-[1.01] transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-slate-900/75 backdrop-blur-xs text-white text-[11px] font-semibold flex items-center gap-1">
                  <Maximize2 className="w-3 h-3" />
                  <span>Kattalashtirish</span>
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#64748B] mt-4 leading-relaxed">
                Mahsulotning asosiy texnik ustunliklari — <strong className="text-[#111827]">IP67 suvdan himoya, 0.42&quot; OLED displey, 5 vaqt namoz eslatmalari, 15 kungacha quvvat, quvvatlovchi keys va 3 xil o‘lcham</strong> — bitta aniq vizual postda jamlangan (<span className="font-mono text-xs">iqibla-zikrring.png</span>).
              </p>
            </div>
          </div>

          {/* O'ng ustun: Bajarilgan ishlar (6 ta band) va Yondashuv */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E2E8F0]">
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#2563EB] mb-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>SMM, Syomka va Mahsulot Kontenti</span>
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-[#111827] mb-5">
                Bajarilgan ishlar:
              </h3>

              <div className="space-y-3">
                {caseData.completedTasks.map((task, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#F5F8FF] border border-[#E2E8F0]"
                  >
                    <span className="w-6 h-6 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-[#111827] leading-snug">
                      {task}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-[#E2E8F0]">
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#2563EB] block mb-1.5">
                  Loyiha Fokus Yo‘nalishi
                </span>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  {caseData.focusSummary}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. CAROUSEL KONTENT (iqibla-carousel.png) VA INSTAGRAM PROFILI (iqibla-profile.png) */}
        <div className="mt-14 sm:mt-18 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Chap ustun (7 col): Zikr Ring modellarini taqqoslovchi Carousel kontent */}
          <div
            onClick={() =>
              openLightbox(
                caseData.images.carousel,
                'IQibla — Zikr Ring modellari taqqoslangan Carousel kontent',
                '“Qaysi model sizga mos?” — Zikr Ring modellarining farqlarini tushuntiruvchi karusel muqovasi (iqibla-carousel.png).'
              )
            }
            className="lg:col-span-7 group p-6 sm:p-7 rounded-3xl bg-white border border-[#E2E8F0] hover:border-[#2563EB]/40 transition-all cursor-pointer flex flex-col justify-between"
            role="button"
            tabIndex={0}
            aria-label="IQibla Zikr Ring modellari karusel rasmini kattalashtirib ko‘rish"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                openLightbox(
                  caseData.images.carousel,
                  'IQibla — Zikr Ring modellari taqqoslangan Carousel kontent',
                  '“Qaysi model sizga mos?” — Zikr Ring modellarining farqlarini tushuntiruvchi karusel muqovasi (iqibla-carousel.png).'
                );
              }
            }}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#2563EB]">
                    <Layers className="w-3.5 h-3.5" />
                    <span>Mahsulot Modellari Taqqoslashi · Carousel</span>
                  </span>
                  <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#111827] mt-0.5">
                    “Qaysi model sizga mos?” — Zikr Ring farqlari
                  </h3>
                </div>
                <span className="text-xs font-bold text-[#64748B]">iqibla-carousel.png</span>
              </div>

              <div className="relative w-full rounded-2xl overflow-hidden bg-[#F5F8FF] border border-[#E2E8F0] flex items-center justify-center p-3">
                <img
                  src={caseData.images.carousel}
                  alt="IQibla — Zikr Ring modellari taqqoslangan Carousel kontent (iqibla-carousel.png)"
                  className="w-full h-auto max-h-[600px] object-contain rounded-xl group-hover:scale-[1.01] transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-slate-900/75 backdrop-blur-xs text-white text-[11px] font-semibold flex items-center gap-1">
                  <Maximize2 className="w-3 h-3" />
                  <span>Kattalashtirish</span>
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#64748B] mt-4 leading-relaxed">
              Xaridorlarga kundalik hayot tarzi va ehtiyojiga qarab mos Zikr Ring modelini tanlashga yordam beruvchi taqqoslovchi karusel kontenti (<span className="font-mono text-xs">iqibla-carousel.png</span>).
            </p>
          </div>

          {/* O'ng ustun (5 col): Instagram profili va loyiha konteksti (iqibla-profile.png) */}
          <div
            onClick={() =>
              openLightbox(
                caseData.images.profile,
                'IQibla — Instagram profili va loyiha konteksti',
                'iqibla.central.asia rasmiy Instagram sahifasi ko‘rinishi (iqibla-profile.png).'
              )
            }
            className="lg:col-span-5 group p-6 sm:p-7 rounded-3xl bg-white border border-[#E2E8F0] hover:border-[#2563EB]/40 transition-all cursor-pointer flex flex-col justify-between"
            role="button"
            tabIndex={0}
            aria-label="IQibla Instagram profil rasmini kattalashtirib ko‘rish"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                openLightbox(
                  caseData.images.profile,
                  'IQibla — Instagram profili va loyiha konteksti',
                  'iqibla.central.asia rasmiy Instagram sahifasi ko‘rinishi (iqibla-profile.png).'
                );
              }
            }}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#2563EB] block">
                    Instagram Profili va Kontekst
                  </span>
                  <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#111827] mt-0.5">
                    @iqibla.central.asia sahifasi
                  </h3>
                </div>
                <span className="text-xs font-bold text-[#64748B]">iqibla-profile.png</span>
              </div>

              <div className="relative w-full rounded-2xl overflow-hidden bg-[#F5F8FF] border border-[#E2E8F0] flex items-center justify-center p-3">
                <img
                  src={caseData.images.profile}
                  alt="IQibla — Instagram profili va loyiha konteksti (iqibla-profile.png)"
                  className="w-full h-auto max-h-[600px] object-contain rounded-xl group-hover:scale-[1.01] transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-slate-900/75 backdrop-blur-xs text-white text-[11px] font-semibold flex items-center gap-1">
                  <Maximize2 className="w-3 h-3" />
                  <span>Kattalashtirish</span>
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#64748B] mt-4 leading-relaxed">
              Markaziy Osiyodagi rasmiy hamkor sahifasi qadoqlanishi, hududiy Highlights bo‘limlari hamda yagona uslubdagi Reels va mahsulot postlari (<span className="font-mono text-xs">iqibla-profile.png</span>).
            </p>
          </div>
        </div>

        {/* 4. BLOGERLAR ISHTIROKIDAGI KONTENT VA SYOMKA JARAYONI (iqibla-bloger-1.png & iqibla-bloger-2.png) */}
        <div className="mt-14 sm:mt-18 p-6 sm:p-8 lg:p-10 rounded-3xl bg-white border border-[#E2E8F0]">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#2563EB] mb-1">
                <Camera className="w-4 h-4" />
                <span>Syomka Lokatsiyalari va Ekspert Taqdimoti</span>
              </div>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#111827] tracking-tight">
                Blogerlar bilan kontent va mahsulot syomkalari
              </h3>
            </div>
            <span className="text-xs sm:text-sm font-medium text-[#64748B]">
              Maxsus tanlangan va tayyorlangan studiya lokatsiyalarida tasvirga olish jarayoni
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* iqibla-bloger-1.png */}
            <div
              onClick={() =>
                openLightbox(
                  caseData.images.bloger1,
                  'IQibla — Bloger ishtirokidagi Zikr Ring syomkasi (iqibla-bloger-1.png)',
                  'Studiyada Zikr Ring funksiyalarini tushuntiruvchi video kontent syomkasi jarayoni.'
                )
              }
              className="group p-5 sm:p-6 rounded-3xl bg-[#F5F8FF] border border-[#E2E8F0] hover:border-[#2563EB]/40 transition-all cursor-pointer flex flex-col justify-between"
              role="button"
              tabIndex={0}
              aria-label="IQibla bloger bilan syomka birinchi rasmini kattalashtirib ko‘rish"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  openLightbox(
                    caseData.images.bloger1,
                    'IQibla — Bloger ishtirokidagi Zikr Ring syomkasi (iqibla-bloger-1.png)',
                    'Studiyada Zikr Ring funksiyalarini tushuntiruvchi video kontent syomkasi jarayoni.'
                  );
                }
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] block">
                      Syomka va Lokatsiya · 01
                    </span>
                    <h4 className="font-display font-extrabold text-lg sm:text-xl text-[#111827] mt-0.5">
                      Zikr Ring imkoniyatlari sharhi
                    </h4>
                  </div>
                  <span className="text-xs font-bold text-[#64748B]">iqibla-bloger-1.png</span>
                </div>

                <div className="relative w-full rounded-2xl overflow-hidden bg-white border border-[#E2E8F0] flex items-center justify-center p-2.5">
                  <img
                    src={caseData.images.bloger1}
                    alt="IQibla — Bloger bilan kontent syomkasi 1 (iqibla-bloger-1.png)"
                    className="w-full h-auto max-h-[540px] object-contain rounded-xl group-hover:scale-[1.01] transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-slate-900/75 backdrop-blur-xs text-white text-[11px] font-semibold flex items-center gap-1">
                    <Maximize2 className="w-3 h-3" />
                    <span>Kattalashtirish</span>
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#64748B] mt-3.5 leading-relaxed">
                Maxsus yoritilgan studiya lokatsiyasida Zikr Ring aqlli uzugining kundalik foydali funksiyalarini jonli tushuntirish syomkasi (<span className="font-mono text-xs">iqibla-bloger-1.png</span>).
              </p>
            </div>

            {/* iqibla-bloger-2.png */}
            <div
              onClick={() =>
                openLightbox(
                  caseData.images.bloger2,
                  'IQibla — Bloger ishtirokida mahsulot taqdimoti syomkasi (iqibla-bloger-2.png)',
                  'Ikkinchi lokatsiyada bloger ishtirokida mahsulot xususiyatlarini tanishtirish jarayoni.'
                )
              }
              className="group p-5 sm:p-6 rounded-3xl bg-[#F5F8FF] border border-[#E2E8F0] hover:border-[#2563EB]/40 transition-all cursor-pointer flex flex-col justify-between"
              role="button"
              tabIndex={0}
              aria-label="IQibla bloger bilan syomka ikkinchi rasmini kattalashtirib ko‘rish"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  openLightbox(
                    caseData.images.bloger2,
                    'IQibla — Bloger ishtirokida mahsulot taqdimoti syomkasi (iqibla-bloger-2.png)',
                    'Ikkinchi lokatsiyada bloger ishtirokida mahsulot xususiyatlarini tanishtirish jarayoni.'
                  );
                }
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] block">
                      Syomka va Lokatsiya · 02
                    </span>
                    <h4 className="font-display font-extrabold text-lg sm:text-xl text-[#111827] mt-0.5">
                      Bloger ishtirokida mahsulot taqdimoti
                    </h4>
                  </div>
                  <span className="text-xs font-bold text-[#64748B]">iqibla-bloger-2.png</span>
                </div>

                <div className="relative w-full rounded-2xl overflow-hidden bg-white border border-[#E2E8F0] flex items-center justify-center p-2.5">
                  <img
                    src={caseData.images.bloger2}
                    alt="IQibla — Bloger bilan kontent syomkasi 2 (iqibla-bloger-2.png)"
                    className="w-full h-auto max-h-[540px] object-contain rounded-xl group-hover:scale-[1.01] transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-slate-900/75 backdrop-blur-xs text-white text-[11px] font-semibold flex items-center gap-1">
                    <Maximize2 className="w-3 h-3" />
                    <span>Kattalashtirish</span>
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#64748B] mt-3.5 leading-relaxed">
                Syomka lokatsiyasini tayyorlash, kadr kompozitsiyasini qurish va blogerlar ishtirokida mahsulot taqdimotini tasvirga olish jarayoni (<span className="font-mono text-xs">iqibla-bloger-2.png</span>).
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightbox.isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-labelledby="iqibla-lightbox-title"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-700"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-100 bg-white">
              <div>
                <h3
                  id="iqibla-lightbox-title"
                  className="font-display font-bold text-lg text-slate-900"
                >
                  {lightbox.title}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">{lightbox.subtitle}</p>
              </div>
              <button
                type="button"
                onClick={closeLightbox}
                className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Yopish"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 sm:p-6 bg-slate-950/5 flex items-center justify-center max-h-[75vh] overflow-auto">
              <img
                src={lightbox.src}
                alt={lightbox.title}
                className="max-h-[70vh] w-auto max-w-full rounded-xl object-contain shadow-md"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
