import React, { useState, useEffect } from 'react';
import {
  Briefcase,
  Calendar,
  Camera,
  CheckCircle2,
  LayoutGrid,
  Maximize2,
  Sparkles,
  Video,
  X,
} from 'lucide-react';
import { MUXSINZADA_CASE_DATA } from '../utils/portfolio.ts';

interface LightboxState {
  isOpen: boolean;
  src: string;
  title: string;
  subtitle: string;
}

export const MuxsinzadaCaseStudy: React.FC = () => {
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

  const caseData = MUXSINZADA_CASE_DATA;

  return (
    <section
      id="muxsinzada-perfumes"
      aria-label="Muxsinzada Perfumes Case Study"
      className="relative scroll-mt-20 sm:scroll-mt-24 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#F5F8FF]/50 border-t border-[#E2E8F0]"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* 1. LOYIHA SARLAVHASI VA BREND MA’LUMOTLARI */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-[#E2E8F0]">
          <div>
            <div className="flex flex-wrap items-center gap-2.5 mb-3.5 text-xs font-bold text-[#2563EB]">
              <span className="uppercase tracking-wider">07 / 10 · Keys</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#64748B]">Yo‘nalish: {caseData.field}</span>
              <span aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1.5 text-[#111827]">
                <Calendar className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>Davr: {caseData.period}</span>
              </span>
            </div>

            <div className="flex items-center gap-4 sm:gap-5 mt-2">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#EAF2FF] text-[#2563EB] flex flex-col items-center justify-center border border-[#E2E8F0] shrink-0">
                <span className="font-display font-black text-xl sm:text-2xl tracking-tight leading-none">
                  MP
                </span>
                <span className="text-[8px] font-bold text-[#111827] uppercase tracking-widest mt-1">
                  PERFUMES
                </span>
              </div>
              <div>
                <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[2.6rem] text-[#111827] tracking-tight leading-none">
                  {caseData.title}
                </h2>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2 text-xs sm:text-sm font-bold text-[#2563EB]">
                  <span className="inline-flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>Lavozim: {caseData.role}</span>
                  </span>
                  <span className="text-[#E2E8F0]" aria-hidden="true">|</span>
                  <span className="text-[#64748B] font-semibold">
                    Yo‘nalish: {caseData.field}
                  </span>
                  <span className="text-[#E2E8F0]" aria-hidden="true">|</span>
                  <span className="text-[#64748B] font-semibold">
                    Davr: {caseData.period}
                  </span>
                </div>
              </div>
            </div>

            <p className="mt-4 text-base sm:text-lg text-[#111827] font-medium max-w-2xl leading-relaxed">
              {caseData.shortDesc}
            </p>
          </div>

          <div className="flex flex-col gap-2 shrink-0 bg-white p-4 sm:p-5 rounded-2xl border border-[#E2E8F0] max-w-sm">
            <div className="flex items-center gap-2 text-xs font-bold text-[#2563EB]">
              <Sparkles className="w-4 h-4 shrink-0" />
              <span>Kontent jarayoni va kreativ kommunikatsiya</span>
            </div>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Brend xarakteriga mos ssenariylar, mavsumiy atirlar taqdimoti hamda Reels va Stories formatlarini sinovdan o‘tkazish.
            </p>
          </div>
        </div>

        {/* 2. ASOSIY VIZUAL (muxsinzada.png) VA BAJARILGAN ISHLAR */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Chap ustun: Asosiy vizual (muxsinzada.png) */}
          <div className="lg:col-span-5">
            <div
              onClick={() =>
                openLightbox(
                  caseData.images.main,
                  'Muxsinzada Perfumes — Asosiy vizual',
                  'Muxsinzada Perfumes Instagram profili ko‘rinishi (muxsinzada.png).'
                )
              }
              className="group p-5 sm:p-6 rounded-3xl bg-white border border-[#E2E8F0] hover:border-[#2563EB]/40 transition-all cursor-pointer flex flex-col justify-between"
              role="button"
              tabIndex={0}
              aria-label="Muxsinzada Perfumes asosiy vizual rasmini kattalashtirib ko‘rish"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  openLightbox(
                    caseData.images.main,
                    'Muxsinzada Perfumes — Asosiy vizual',
                    'Muxsinzada Perfumes Instagram profili ko‘rinishi (muxsinzada.png).'
                  );
                }
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#2563EB] block">
                    Asosiy Vizual
                  </span>
                  <h3 className="font-display font-extrabold text-lg sm:text-xl text-[#111827] mt-0.5">
                    Brend profili va pozitsionirovaniye
                  </h3>
                </div>
                <span className="text-xs font-bold text-[#64748B]">@muxsinzada_perfumes</span>
              </div>

              <div className="relative w-full rounded-2xl overflow-hidden bg-[#F5F8FF] border border-[#E2E8F0] flex items-center justify-center p-3">
                <img
                  src={caseData.images.main}
                  alt="Muxsinzada Perfumes — Asosiy vizual (muxsinzada.png)"
                  className="w-full h-auto max-h-[500px] object-contain rounded-xl group-hover:scale-[1.01] transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-slate-900/75 backdrop-blur-xs text-white text-[11px] font-semibold flex items-center gap-1">
                  <Maximize2 className="w-3 h-3" />
                  <span>Kattalashtirish</span>
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#64748B] mt-3.5 leading-relaxed">
                Parfyumeriya yo‘nalishidagi sahifa identifikatsiyasi, filiallar ish vaqti va aloqa ma’lumotlari (<span className="font-mono text-xs">muxsinzada.png</span>).
              </p>
            </div>
          </div>

          {/* O'ng ustun: Bajarilgan ishlar (7 ta band) va Kreativ yondashuv */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E2E8F0]">
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#2563EB] mb-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Lavozim: {caseData.role} · {caseData.period}</span>
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-[#111827] mb-5">
                Bajarilgan ishlar:
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {caseData.completedTasks.map((task, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 rounded-2xl bg-[#F5F8FF] border border-[#E2E8F0]"
                  >
                    <span className="w-5 h-5 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-[#111827] leading-snug">
                      {task}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-[#E2E8F0]">
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#2563EB] block mb-1.5">
                  Kreativ Yondashuv va Brendga Mos Kommunikatsiya
                </span>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  {caseData.focusSummary}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. KONTENT DIZAYNI VA VIZUAL USLUB (muxsinzada-visual.png) */}
        <div className="mt-14 sm:mt-18 p-6 sm:p-8 lg:p-10 rounded-3xl bg-white border border-[#E2E8F0]">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#2563EB] mb-1">
                <LayoutGrid className="w-4 h-4" />
                <span>Lenta Estetikasi va Rubrikalar</span>
              </div>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#111827] tracking-tight">
                Kontent dizayni va vizual uslub
              </h3>
            </div>
            <span className="text-xs sm:text-sm font-semibold text-[#64748B]">
              Brend xarakterini aks ettiruvchi yagona rang va tipografika tizimi
            </span>
          </div>

          <div
            onClick={() =>
              openLightbox(
                caseData.images.visual,
                'Muxsinzada Perfumes — Kontent dizayni va vizual uslub',
                'Instagram lenta ko‘rinishi va ekspert rubrikalar muqovalari (muxsinzada-visual.png).'
              )
            }
            className="group grid grid-cols-1 lg:grid-cols-12 gap-8 items-center cursor-pointer"
            role="button"
            tabIndex={0}
            aria-label="Muxsinzada Perfumes kontent dizayni va vizual uslub rasmini kattalashtirib ko‘rish"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                openLightbox(
                  caseData.images.visual,
                  'Muxsinzada Perfumes — Kontent dizayni va vizual uslub',
                  'Instagram lenta ko‘rinishi va ekspert rubrikalar muqovalari (muxsinzada-visual.png).'
                );
              }
            }}
          >
            <div className="lg:col-span-7 relative w-full rounded-2xl overflow-hidden bg-[#F5F8FF] border border-[#E2E8F0] flex items-center justify-center p-3 sm:p-4">
              <img
                src={caseData.images.visual}
                alt="Muxsinzada Perfumes — Kontent dizayni va vizual uslub (muxsinzada-visual.png)"
                className="w-full h-auto max-h-[640px] object-contain rounded-xl group-hover:scale-[1.01] transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
              <span className="absolute top-4 right-4 px-3 py-1.5 rounded-md bg-slate-900/75 backdrop-blur-xs text-white text-xs font-semibold flex items-center gap-1.5">
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Kattalashtirish</span>
              </span>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#2563EB] block mb-2">
                  Brendga Mos Kommunikatsiya
                </span>
                <h4 className="font-display font-extrabold text-2xl text-[#111827] leading-snug">
                  Parfyumeriya madaniyati va mijoz savollariga asoslangan rubrikalar
                </h4>
                <p className="mt-3 text-sm sm:text-base text-[#64748B] leading-relaxed">
                  Lenta dizaynida premium to‘q ranglar, aniq tipografika va mahsulot estetikasiga urg‘u berildi. Har bir video va karusel mijozlarning real qiziqishlari asosida shakllantirildi:
                </p>

                <div className="mt-6 space-y-3">
                  <div className="p-4 rounded-2xl bg-[#F5F8FF] border border-[#E2E8F0]">
                    <span className="text-xs font-bold text-[#2563EB] uppercase tracking-wider block">
                      Amaliy va Foydali Mavzular
                    </span>
                    <p className="text-xs sm:text-sm text-[#111827] font-medium mt-1">
                      “5 ml, 10 ml, 20 ml — qaysi biri qancha muddatga yetadi?”, “Nega atiringiz hidi uzoq turmaydi?”, “Flakonni qayta to‘ldirish xizmati”.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#F5F8FF] border border-[#E2E8F0]">
                    <span className="text-xs font-bold text-[#2563EB] uppercase tracking-wider block">
                      Tanlov va Mavsumiy Tavsiyalar
                    </span>
                    <p className="text-xs sm:text-sm text-[#111827] font-medium mt-1">
                      “Holat uchun parfyum”, “Klassika yoki trend?”, “Ayollar uchun TOP 3 parfyum”, “Louis Vuitton — o‘zgacha taassurot qoldiradigan parfyumlar”.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E2E8F0] flex items-center justify-between text-xs text-[#64748B]">
                <span>Original fayl: muxsinzada-visual.png</span>
                <span className="font-bold text-[#2563EB]">To‘liq o‘lchamda ko‘rish →</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4. REELS KONTENTI (muxsinzada-reel.png) VA ISH JARAYONI (muxsinzada-process.png) */}
        <div className="mt-14 sm:mt-18 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Reels kontenti (muxsinzada-reel.png) */}
          <div
            onClick={() =>
              openLightbox(
                caseData.images.reel,
                'Muxsinzada Perfumes — Reels kontenti',
                'Mavsumiy va xarakterli atirlar uchun tayyorlangan Reels kontenti (muxsinzada-reel.png).'
              )
            }
            className="group p-6 sm:p-7 rounded-3xl bg-white border border-[#E2E8F0] hover:border-[#2563EB]/40 transition-all cursor-pointer flex flex-col justify-between"
            role="button"
            tabIndex={0}
            aria-label="Muxsinzada Perfumes Reels kontenti rasmini kattalashtirib ko‘rish"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                openLightbox(
                  caseData.images.reel,
                  'Muxsinzada Perfumes — Reels kontenti',
                  'Mavsumiy va xarakterli atirlar uchun tayyorlangan Reels kontenti (muxsinzada-reel.png).'
                );
              }
            }}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#2563EB]">
                    <Video className="w-3.5 h-3.5" />
                    <span>Reels Kontenti</span>
                  </span>
                  <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#111827] mt-0.5">
                    Brend uslubidagi Reels ssenariylari
                  </h3>
                </div>
                <span className="text-xs font-bold text-[#64748B]">muxsinzada-reel.png</span>
              </div>

              <div className="relative w-full rounded-2xl overflow-hidden bg-[#F5F8FF] border border-[#E2E8F0] flex items-center justify-center p-3">
                <img
                  src={caseData.images.reel}
                  alt="Muxsinzada Perfumes — Reels kontenti (muxsinzada-reel.png)"
                  className="w-full h-auto max-h-[560px] object-contain rounded-xl group-hover:scale-[1.01] transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-slate-900/75 backdrop-blur-xs text-white text-[11px] font-semibold flex items-center gap-1">
                  <Maximize2 className="w-3 h-3" />
                  <span>Kattalashtirish</span>
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#64748B] mt-4 leading-relaxed">
              Mavsumiy atirlar, obraz va xarakterga mos parfyum tanlash bo‘yicha tayyorlangan Reels formatlari hamda ovozli xabarlar asosidagi interaktiv Stories sinovlari (<span className="font-mono text-xs">muxsinzada-reel.png</span>).
            </p>
          </div>

          {/* Ish jarayoni (muxsinzada-process.png) */}
          <div
            onClick={() =>
              openLightbox(
                caseData.images.process,
                'Muxsinzada Perfumes — Ish jarayoni',
                'Do‘kon ichida syomka va kontent tayyorlash jarayoni (muxsinzada-process.png).'
              )
            }
            className="group p-6 sm:p-7 rounded-3xl bg-white border border-[#E2E8F0] hover:border-[#2563EB]/40 transition-all cursor-pointer flex flex-col justify-between"
            role="button"
            tabIndex={0}
            aria-label="Muxsinzada Perfumes ish jarayoni rasmini kattalashtirib ko‘rish"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                openLightbox(
                  caseData.images.process,
                  'Muxsinzada Perfumes — Ish jarayoni',
                  'Do‘kon ichida syomka va kontent tayyorlash jarayoni (muxsinzada-process.png).'
                );
              }
            }}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#2563EB]">
                    <Camera className="w-3.5 h-3.5" />
                    <span>Ish Jarayoni</span>
                  </span>
                  <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#111827] mt-0.5">
                    Syomka va kontent ishlab chiqarish
                  </h3>
                </div>
                <span className="text-xs font-bold text-[#64748B]">muxsinzada-process.png</span>
              </div>

              <div className="relative w-full rounded-2xl overflow-hidden bg-[#F5F8FF] border border-[#E2E8F0] flex items-center justify-center p-3">
                <img
                  src={caseData.images.process}
                  alt="Muxsinzada Perfumes — Ish jarayoni (muxsinzada-process.png)"
                  className="w-full h-auto max-h-[560px] object-contain rounded-xl group-hover:scale-[1.01] transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-slate-900/75 backdrop-blur-xs text-white text-[11px] font-semibold flex items-center gap-1">
                  <Maximize2 className="w-3 h-3" />
                  <span>Kattalashtirish</span>
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#64748B] mt-4 leading-relaxed">
              Parfyum tayyorlash, qadoqlash va mijozlarga xizmat ko‘rsatish jarayonlarini bevosita filialda tasvirga olish hamda ssenariylarni amalda sinovdan o‘tkazish (<span className="font-mono text-xs">muxsinzada-process.png</span>).
            </p>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightbox.isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-labelledby="muxsinzada-lightbox-title"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-700"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-100 bg-white">
              <div>
                <h3
                  id="muxsinzada-lightbox-title"
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
