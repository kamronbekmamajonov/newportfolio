import React, { useState, useEffect } from 'react';
import {
  Activity,
  CheckCircle2,
  ExternalLink,
  Layers,
  Maximize2,
  TrendingUp,
  Video,
  X,
  Users,
  Film,
} from 'lucide-react';
import { HILOL_MED_CASE_DATA } from '../utils/portfolio.ts';

interface LightboxState {
  isOpen: boolean;
  src: string;
  title: string;
  subtitle: string;
}

export const HilolMedCaseStudy: React.FC = () => {
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

  const caseData = HILOL_MED_CASE_DATA;

  return (
    <section
      id="projects"
      aria-label="Hilol Med Case Study"
      className="relative scroll-mt-20 sm:scroll-mt-24 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-[#E2E8F0]"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* A. Loyiha Sarlavhasi & Brend Qismi */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#E2E8F0]">
          <div>
            <div className="flex flex-wrap items-center gap-2.5 mb-3.5">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#2563EB] bg-[#EAF2FF] border border-[#2563EB]/15">
                01 / 10 · Asosiy Keys
              </span>
              <span className="text-xs font-bold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-full">
                {caseData.field}
              </span>
            </div>

            <div className="flex items-center gap-4 mt-2">
              <img
                src={caseData.images.logo}
                alt={`${caseData.title} Logo`}
                className="w-13 h-13 sm:w-16 sm:h-16 rounded-2xl object-cover border border-[#E2E8F0] shadow-sm shrink-0 bg-white"
                referrerPolicy="no-referrer"
              />
              <div>
                <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[2.6rem] text-slate-900 tracking-tight leading-none">
                  {caseData.title}
                </h2>
                <span className="text-xs sm:text-sm font-bold text-[#2563EB] tracking-wide mt-1.5 block">
                  {caseData.category}
                </span>
              </div>
            </div>

            <p className="mt-4 text-base sm:text-lg text-[#64748B] max-w-2xl leading-relaxed">
              {caseData.shortDesc}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              100K Natijaga yetkazilgan
            </span>
          </div>
        </div>

        {/* B. Asosiy Vizual: Klinika Binosi */}
        <div className="mt-10 sm:mt-12">
          <div
            onClick={() =>
              openLightbox(
                caseData.images.building,
                'Hilol Med — Klinika Binosi',
                'Toshkentdagi zamonaviy ko‘p tarmoqli tibbiyot markazi'
              )
            }
            className="group relative w-full h-[260px] sm:h-[380px] lg:h-[460px] rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E2E8F0] shadow-md shadow-blue-500/5 bg-slate-100 cursor-pointer"
            role="button"
            tabIndex={0}
            aria-label="Klinika binosi rasmini kattalashtirib ko‘rish"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                openLightbox(
                  caseData.images.building,
                  'Hilol Med — Klinika Binosi',
                  'Toshkentdagi zamonaviy ko‘p tarmoqli tibbiyot markazi'
                );
              }
            }}
          >
            <img
              src={caseData.images.building}
              alt="Hilol Med Center klinika binosi"
              className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/15 to-transparent flex items-end justify-between p-5 sm:p-8">
              <div className="text-white max-w-lg">
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-200">
                  Loyiha Maydoni
                </span>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white mt-1">
                  Hilol Med Tibbiyot Markazi
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">
                  Toshkent shahrida joylashgan zamonaviy diagnostika va davolash markazi.
                </p>
              </div>

              <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold group-hover:bg-white group-hover:text-slate-900 transition-colors">
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Kattaroq ko‘rish</span>
              </span>
            </div>
          </div>
        </div>

        {/* C. Vazifa va Bajarilgan Ishlar Bloki */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Chap ustun: Vazifa va Rubrikalar */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-[#F5F8FF] border border-[#E2E8F0]">
            <div>
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#2563EB] mb-3">
                <Layers className="w-4 h-4" />
                <span>Loyiha Vazifasi</span>
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 leading-snug">
                Strategik Maqsad
              </h3>
              <p className="mt-3 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                {caseData.objective}
              </p>

              {/* Rubrikalar misoli */}
              <div className="mt-6 pt-6 border-t border-[#E2E8F0]">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-800 block mb-2.5">
                  Ishlatilgan rubrikalarga misollar:
                </span>
                <div className="flex flex-col gap-2">
                  {caseData.rubricsExamples.map((rubric, idx) => (
                    <div
                      key={idx}
                      className="px-3 py-2 rounded-xl bg-white border border-[#E2E8F0] text-xs font-semibold text-slate-800 shadow-xs"
                    >
                      {rubric}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#E2E8F0] flex items-center gap-2 text-xs font-medium text-slate-500">
              <Activity className="w-4 h-4 text-[#2563EB]" />
              <span>Soha: Tibbiyot va ekspert shifokorlar bilan ishlash</span>
            </div>
          </div>

          {/* O'ng ustun: Bajarilgan Ishlar Ro'yxati */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm">
            <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#2563EB] mb-3">
              <CheckCircle2 className="w-4 h-4" />
              <span>Amaliy Harakatlar</span>
            </div>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 mb-5">
              Bajarilgan ishlar:
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {caseData.completedTasks.map((task, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#F5F8FF]/70 border border-[#E2E8F0]/80 hover:bg-[#EAF2FF]/50 transition-colors"
                >
                  <span className="w-5 h-5 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                    {task}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* D. Natijalar Bloki (Metrikalar) */}
        <div className="mt-14 sm:mt-18">
          <div className="mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#2563EB] bg-[#EAF2FF] border border-[#2563EB]/15 mb-2">
              Erishilgan Natijalar
            </span>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
              Aniq raqamlar va ko‘rsatkichlar
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {caseData.metrics.map((metric) => (
              <div
                key={metric.id}
                className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm shadow-blue-500/5 hover:border-[#2563EB]/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="font-display font-extrabold text-2xl sm:text-3xl text-[#2563EB] tracking-tight tabular-nums block">
                    {metric.value}
                  </span>
                  <span className="text-sm font-bold text-slate-900 mt-2 block leading-snug">
                    {metric.label}
                  </span>
                </div>
                <p className="text-xs text-[#64748B] mt-3 pt-3 border-t border-slate-100 leading-relaxed font-normal">
                  {metric.context}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* E. Vizual Isbotlar va Jarayon (Faqat ruxsat berilgan 4 ta rasm) */}
        <div className="mt-14 sm:mt-18">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#2563EB] bg-[#EAF2FF] border border-[#2563EB]/15 mb-2">
                Vizual Isbotlar va Ish Jarayoni
              </span>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                Skrinshotlar, ekspert kontenti va jamoa
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 1. Instagram 100K Proof */}
            <div
              onClick={() =>
                openLightbox(
                  caseData.images.profileProof,
                  'Hilol Med — Instagram 100K Natijasi',
                  'Auditoriya 63–65K dan 100 minggacha o‘sdi (Organik va Target hisobiga).'
                )
              }
              className="group flex flex-col justify-between rounded-2xl sm:rounded-3xl bg-white border border-[#E2E8F0] p-4 shadow-sm hover:shadow-md hover:border-[#2563EB]/40 transition-all cursor-pointer"
              role="button"
              tabIndex={0}
              aria-label="Instagram 100K skrinshotini kattalashtirib ko‘rish"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  openLightbox(
                    caseData.images.profileProof,
                    'Hilol Med — Instagram 100K Natijasi',
                    'Auditoriya 63–65K dan 100 minggacha o‘sdi (Organik va Target hisobiga).'
                  );
                }
              }}
            >
              <div className="relative aspect-[9/16] w-full rounded-xl sm:rounded-2xl overflow-hidden bg-slate-50 mb-4">
                <img
                  src={caseData.images.profileProof}
                  alt="Hilol Med 100K Instagram Profili"
                  className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-2.5 right-2.5 px-2 py-1 rounded-md bg-black/60 backdrop-blur-xs text-white text-[10px] font-semibold flex items-center gap-1">
                  <Maximize2 className="w-3 h-3" />
                  <span>Kattalashtirish</span>
                </span>
              </div>

              <div>
                <span className="text-[10px] font-extrabold text-[#2563EB] uppercase tracking-wider block">
                  Instagram Proof
                </span>
                <h4 className="font-display font-bold text-sm sm:text-base text-slate-900 mt-0.5">
                  100K Obunachi Natijasi
                </h4>
                <p className="text-xs text-[#64748B] mt-1 line-clamp-2">
                  Profil qadoqlanishi, Stories va auditoriyani 100K ga yetkazish.
                </p>
              </div>
            </div>

            {/* 2. Reels 239K Proof */}
            <div
              onClick={() =>
                openLightbox(
                  caseData.images.reelProof,
                  'Hilol Med — Reels Tahlili (239,099 Ko‘rish)',
                  'Shifokor bilan tayyorlangan “60 soniya ichida tashxis” rubrikasi orqali 1,394 yangi obunachi.'
                )
              }
              className="group flex flex-col justify-between rounded-2xl sm:rounded-3xl bg-white border border-[#E2E8F0] p-4 shadow-sm hover:shadow-md hover:border-[#2563EB]/40 transition-all cursor-pointer"
              role="button"
              tabIndex={0}
              aria-label="Reels natijasi skrinshotini kattalashtirib ko‘rish"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  openLightbox(
                    caseData.images.reelProof,
                    'Hilol Med — Reels Tahlili (239,099 Ko‘rish)',
                    'Shifokor bilan tayyorlangan “60 soniya ichida tashxis” rubrikasi orqali 1,394 yangi obunachi.'
                  );
                }
              }}
            >
              <div className="relative aspect-[9/16] w-full rounded-xl sm:rounded-2xl overflow-hidden bg-slate-50 mb-4">
                <img
                  src={caseData.images.reelProof}
                  alt="Hilol Med Reels Tahlili 239K"
                  className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-2.5 right-2.5 px-2 py-1 rounded-md bg-black/60 backdrop-blur-xs text-white text-[10px] font-semibold flex items-center gap-1">
                  <Maximize2 className="w-3 h-3" />
                  <span>Kattalashtirish</span>
                </span>
              </div>

              <div>
                <span className="text-[10px] font-extrabold text-[#2563EB] uppercase tracking-wider block">
                  Reels Proof
                </span>
                <h4 className="font-display font-bold text-sm sm:text-base text-slate-900 mt-0.5">
                  239,099 Reels Ko‘rishi
                </h4>
                <p className="text-xs text-[#64748B] mt-1 line-clamp-2">
                  179,306 hisob qamrovi va 1,394 ta yangi obunachi keltirgan video.
                </p>
              </div>
            </div>

            {/* 3. Intervyu / Ekspert Kontenti */}
            <div
              onClick={() =>
                openLightbox(
                  caseData.images.interview,
                  'Hilol Med — Ekspert Shifokor Intervyusi',
                  'Studiyada professional yoritish va mikrofonlar bilan shifokorlar ishtirokidagi YouTube va podkast kontent jarayoni.'
                )
              }
              className="group flex flex-col justify-between rounded-2xl sm:rounded-3xl bg-white border border-[#E2E8F0] p-4 shadow-sm hover:shadow-md hover:border-[#2563EB]/40 transition-all cursor-pointer"
              role="button"
              tabIndex={0}
              aria-label="Intervyu syomka jarayonini kattalashtirib ko‘rish"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  openLightbox(
                    caseData.images.interview,
                    'Hilol Med — Ekspert Shifokor Intervyusi',
                    'Studiyada professional yoritish va mikrofonlar bilan shifokorlar ishtirokidagi YouTube va podkast kontent jarayoni.'
                  );
                }
              }}
            >
              <div className="relative aspect-[3/4] w-full rounded-xl sm:rounded-2xl overflow-hidden bg-slate-50 mb-4">
                <img
                  src={caseData.images.interview}
                  alt="Hilol Med shifokorlar intervyusi syomkasi"
                  className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-2.5 right-2.5 px-2 py-1 rounded-md bg-black/60 backdrop-blur-xs text-white text-[10px] font-semibold flex items-center gap-1">
                  <Maximize2 className="w-3 h-3" />
                  <span>Kattalashtirish</span>
                </span>
              </div>

              <div>
                <span className="text-[10px] font-extrabold text-[#2563EB] uppercase tracking-wider block">
                  Ekspert Kontenti
                </span>
                <h4 className="font-display font-bold text-sm sm:text-base text-slate-900 mt-0.5">
                  Intervyu va Podkastlar
                </h4>
                <p className="text-xs text-[#64748B] mt-1 line-clamp-2">
                  YouTube ekspert videolari uchun professional studiya syomka jarayoni.
                </p>
              </div>
            </div>

            {/* 4. Jamoa va Ish Jarayoni */}
            <div
              onClick={() =>
                openLightbox(
                  caseData.images.team,
                  'Hilol Med — Shifokorlar Jamoasi va Syomka',
                  'Klinika shifokorlari bilan jonli muloqot, ssenariylarni tasdiqlash va media production jarayoni.'
                )
              }
              className="group flex flex-col justify-between rounded-2xl sm:rounded-3xl bg-white border border-[#E2E8F0] p-4 shadow-sm hover:shadow-md hover:border-[#2563EB]/40 transition-all cursor-pointer"
              role="button"
              tabIndex={0}
              aria-label="Jamoa va ish jarayoni rasmini kattalashtirib ko‘rish"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  openLightbox(
                    caseData.images.team,
                    'Hilol Med — Shifokorlar Jamoasi va Syomka',
                    'Klinika shifokorlari bilan jonli muloqot, ssenariylarni tasdiqlash va media production jarayoni.'
                  );
                }
              }}
            >
              <div className="relative aspect-[3/4] w-full rounded-xl sm:rounded-2xl overflow-hidden bg-slate-50 mb-4">
                <img
                  src={caseData.images.team}
                  alt="Hilol Med shifokorlar jamoasi"
                  className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-2.5 right-2.5 px-2 py-1 rounded-md bg-black/60 backdrop-blur-xs text-white text-[10px] font-semibold flex items-center gap-1">
                  <Maximize2 className="w-3 h-3" />
                  <span>Kattalashtirish</span>
                </span>
              </div>

              <div>
                <span className="text-[10px] font-extrabold text-[#2563EB] uppercase tracking-wider block">
                  Ish Jarayoni
                </span>
                <h4 className="font-display font-bold text-sm sm:text-base text-slate-900 mt-0.5">
                  Shifokorlar Jamoasi
                </h4>
                <p className="text-xs text-[#64748B] mt-1 line-clamp-2">
                  Klinika mutaxassislari bilan syomka va ssenariylarni muvofiqlashtirish.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal (Click on any image to view high-res) */}
      {lightbox.isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-title"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-700"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-100 bg-white">
              <div>
                <h3 id="lightbox-title" className="font-display font-bold text-lg text-slate-900">
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
