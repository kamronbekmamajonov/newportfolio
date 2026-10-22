import React, { useState, useEffect } from 'react';
import {
  Briefcase,
  Calendar,
  CheckCircle2,
  Info,
  Maximize2,
  TrendingUp,
  Video,
  X,
} from 'lucide-react';
import { ENGORA_CASE_DATA } from '../utils/portfolio.ts';

interface LightboxState {
  isOpen: boolean;
  src: string;
  title: string;
  subtitle: string;
}

export const EngoraCaseStudy: React.FC = () => {
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

  const caseData = ENGORA_CASE_DATA;

  return (
    <section
      id="engora"
      aria-label="Engora Case Study"
      className="relative scroll-mt-20 sm:scroll-mt-24 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-[#E2E8F0]"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* 1. LOYIHA HERO QISMI */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-[#E2E8F0]">
          <div>
            <div className="flex flex-wrap items-center gap-2.5 mb-3.5 text-xs font-bold text-[#2563EB]">
              <span className="uppercase tracking-wider">06 / 10 · Keys</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#64748B]">{caseData.field}</span>
              <span aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1.5 text-[#111827]">
                <Calendar className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>Davr: {caseData.period}</span>
              </span>
            </div>

            <div className="flex items-center gap-4 sm:gap-5 mt-2">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#EAF2FF] text-[#2563EB] flex flex-col items-center justify-center border border-[#E2E8F0] shrink-0">
                <span className="font-display font-black text-2xl sm:text-3xl tracking-tight leading-none">
                  E
                </span>
                <span className="text-[8px] font-bold text-[#111827] uppercase tracking-widest mt-1">
                  ENGORA
                </span>
              </div>
              <div>
                <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[2.6rem] text-[#111827] tracking-tight leading-none">
                  {caseData.title}
                </h2>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2 text-xs sm:text-sm font-bold text-[#2563EB]">
                  <span className="inline-flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>{caseData.role}</span>
                  </span>
                  <span className="text-[#E2E8F0]" aria-hidden="true">|</span>
                  <span className="text-[#64748B] font-semibold">Davr: {caseData.period}</span>
                </div>
              </div>
            </div>

            <p className="mt-4 text-base sm:text-lg text-[#111827] font-medium max-w-2xl leading-relaxed">
              {caseData.shortDesc}
            </p>
          </div>

          <div className="flex flex-col gap-2 shrink-0 bg-[#F5F8FF] p-4 sm:p-5 rounded-2xl border border-[#E2E8F0] max-w-sm">
            <div className="flex items-center gap-2 text-xs font-bold text-[#2563EB]">
              <TrendingUp className="w-4 h-4 shrink-0" />
              <span>Bir oyda noldan: 0 → 1 006 obunachi</span>
            </div>
            <div className="h-px bg-[#E2E8F0]" />
            <div className="flex items-start gap-2 text-xs text-[#64748B]">
              <Info className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
              <span>{caseData.statusNote}</span>
            </div>
          </div>
        </div>

        {/* 2. BAJARILGAN ISHLAR VA ALOHIDA NATIJALAR BLOKI */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Chap ustun: Bajarilgan ishlar (6 ta band) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-[#F5F8FF] border border-[#E2E8F0] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#2563EB] mb-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Bajarilgan Ishlar ({caseData.period})</span>
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-[#111827] mb-5">
                Kontent strategiyasi va ishlab chiqarish jarayoni:
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {caseData.completedTasks.map((task, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-[#E2E8F0]"
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
            </div>

            <div className="mt-6 pt-4 border-t border-[#E2E8F0] flex items-center gap-2 text-xs font-medium text-[#64748B]">
              <Info className="w-4 h-4 text-[#2563EB] shrink-0" />
              <span>{caseData.statusNote}</span>
            </div>
          </div>

          {/* O'ng ustun: Alohida natijalar bloki (0 → 1 006 va 350+) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-5">
            {caseData.mainMetrics.map((metric) => (
              <div
                key={metric.id}
                className="flex-1 p-6 sm:p-7 rounded-3xl bg-white border-2 border-[#2563EB]/20 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#2563EB] block mb-1">
                    Tasdiqlangan Natija
                  </span>
                  <span className="font-display font-extrabold text-3xl sm:text-4xl text-[#2563EB] tracking-tight tabular-nums block">
                    {metric.value}
                  </span>
                  <span className="text-base font-bold text-[#111827] mt-2 block leading-snug">
                    {metric.label}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#64748B] mt-3 pt-3 border-t border-[#E2E8F0] leading-relaxed">
                  {metric.context}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. PROFILNING OLDINGI VA KEYINGI HOLATI (engora-before.png & engora-after.png) */}
        <div className="mt-14 sm:mt-18">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#2563EB] block mb-1">
                Instagram Profil Taqqoslashi
              </span>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#111827] tracking-tight">
                Ishdan oldingi va keyingi holat (0 → 1 006)
              </h3>
            </div>
            <span className="text-xs text-[#64748B] font-medium">
              Noldan ochilgan sahifaning 1 oy ichidagi real o‘sish ko‘rsatkichi
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* engora-before.png */}
            <div
              onClick={() =>
                openLightbox(
                  caseData.images.before,
                  'Engora — Ishdan oldingi holat (0 obunachi)',
                  'Ish boshlanishidan avvalgi Instagram sahifa: 0 publikatsiya va 0 obunachi (engora-before.png).'
                )
              }
              className="group p-5 sm:p-6 rounded-3xl bg-[#F5F8FF] border border-[#E2E8F0] hover:border-[#2563EB]/40 transition-all cursor-pointer flex flex-col justify-between"
              role="button"
              tabIndex={0}
              aria-label="Engora ishdan oldingi profil rasmini kattalashtirib ko‘rish"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  openLightbox(
                    caseData.images.before,
                    'Engora — Ishdan oldingi holat (0 obunachi)',
                    'Ish boshlanishidan avvalgi Instagram sahifa: 0 publikatsiya va 0 obunachi (engora-before.png).'
                  );
                }
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#64748B] block">
                    Boshlang‘ich nuqta
                  </span>
                  <h4 className="font-display font-extrabold text-lg sm:text-xl text-[#111827]">
                    Ishdan oldingi holat
                  </h4>
                </div>
                <span className="text-xs font-bold text-[#64748B]">0 obunachi · 0 post</span>
              </div>

              <div className="relative w-full rounded-2xl overflow-hidden bg-white border border-[#E2E8F0] flex items-center justify-center p-2.5">
                <img
                  src={caseData.images.before}
                  alt="Engora — Ishdan oldingi Instagram profili (engora-before.png)"
                  className="w-full h-auto max-h-[580px] object-contain rounded-xl group-hover:scale-[1.01] transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-slate-900/75 backdrop-blur-xs text-white text-[11px] font-semibold flex items-center gap-1">
                  <Maximize2 className="w-3 h-3" />
                  <span>Kattalashtirish</span>
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#64748B] mt-3.5 leading-relaxed">
                Loyiha mutlaqo noldan qabul qilingan: postlarsiz va obunachilarsiz yangi ochilgan sahifa (<span className="font-mono text-xs">engora-before.png</span>).
              </p>
            </div>

            {/* engora-after.png */}
            <div
              onClick={() =>
                openLightbox(
                  caseData.images.after,
                  'Engora — Bir oydan keyingi natija (1 006 obunachi)',
                  'Qadoqlangan profil, Highlights va 15 ta kontent orqali 1 006 obunachi (engora-after.png).'
                )
              }
              className="group p-5 sm:p-6 rounded-3xl bg-white border-2 border-[#2563EB]/30 hover:border-[#2563EB] transition-all cursor-pointer flex flex-col justify-between"
              role="button"
              tabIndex={0}
              aria-label="Engora ishdan keyingi profil rasmini kattalashtirib ko‘rish"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  openLightbox(
                    caseData.images.after,
                    'Engora — Bir oydan keyingi natija (1 006 obunachi)',
                    'Qadoqlangan profil, Highlights va 15 ta kontent orqali 1 006 obunachi (engora-after.png).'
                  );
                }
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] block">
                    1 oylik natija
                  </span>
                  <h4 className="font-display font-extrabold text-lg sm:text-xl text-[#2563EB]">
                    Ishdan keyingi holat
                  </h4>
                </div>
                <span className="text-xs font-bold text-[#111827]">1 006 obunachi · 15 post</span>
              </div>

              <div className="relative w-full rounded-2xl overflow-hidden bg-[#F5F8FF] border border-[#E2E8F0] flex items-center justify-center p-2.5">
                <img
                  src={caseData.images.after}
                  alt="Engora — Ishdan keyingi Instagram profili (engora-after.png)"
                  className="w-full h-auto max-h-[580px] object-contain rounded-xl group-hover:scale-[1.01] transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-slate-900/75 backdrop-blur-xs text-white text-[11px] font-semibold flex items-center gap-1">
                  <Maximize2 className="w-3 h-3" />
                  <span>Kattalashtirish</span>
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#64748B] mt-3.5 leading-relaxed">
                Bir oy ichida qadoqlangan profil, tizimli Highlights va kontent-reja asosida <strong className="text-[#111827]">0 → 1 006 obunachi</strong> natijasi (<span className="font-mono text-xs">engora-after.png</span>).
              </p>
            </div>
          </div>
        </div>

        {/* 4. REELS KONTENTI VA NATIJALARI GALEREYASI (engora-reel.png & engora-reel-2.png) */}
        <div className="mt-14 sm:mt-18 p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#F5F8FF] border border-[#E2E8F0]">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#2563EB] mb-1">
                <Video className="w-4 h-4" />
                <span>Reels Kontenti va Analitika</span>
              </div>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#111827] tracking-tight">
                Test Reels videolari va erishilgan natijalar
              </h3>
            </div>
            <span className="text-xs sm:text-sm font-bold text-[#2563EB]">
              Test Reels videolari orqali 350+ yangi obunachi jalb qilingan
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* engora-reel.png */}
            <div
              onClick={() =>
                openLightbox(
                  caseData.images.reel1,
                  'Engora — Test Reels statistikasi (engora-reel.png)',
                  'Пробное видео Reels: 10 443 ko‘rish, 9 165 qamrov va bitta videodan +79 obunachi.'
                )
              }
              className="group p-5 sm:p-6 rounded-3xl bg-white border border-[#E2E8F0] hover:border-[#2563EB]/40 transition-all cursor-pointer flex flex-col justify-between"
              role="button"
              tabIndex={0}
              aria-label="Test Reels statistikasi rasmini kattalashtirib ko‘rish"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  openLightbox(
                    caseData.images.reel1,
                    'Engora — Test Reels statistikasi (engora-reel.png)',
                    'Пробное видео Reels: 10 443 ko‘rish, 9 165 qamrov va bitta videodan +79 obunachi.'
                  );
                }
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] block">
                    Test Reels Analitikasi
                  </span>
                  <h4 className="font-display font-bold text-lg sm:text-xl text-[#111827]">
                    Sinov Reels statistikasi va obunalar
                  </h4>
                </div>
                <span className="text-xs font-bold text-[#64748B]">engora-reel.png</span>
              </div>

              <div className="relative w-full rounded-2xl overflow-hidden bg-[#F5F8FF] border border-[#E2E8F0] flex items-center justify-center p-2.5">
                <img
                  src={caseData.images.reel1}
                  alt="Engora — Test Reels statistikasi (engora-reel.png)"
                  className="w-full h-auto max-h-[580px] object-contain rounded-xl group-hover:scale-[1.01] transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-slate-900/75 backdrop-blur-xs text-white text-[11px] font-semibold flex items-center gap-1">
                  <Maximize2 className="w-3 h-3" />
                  <span>Kattalashtirish</span>
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#64748B] mt-3.5 leading-relaxed">
                Test Reels formatidagi video statistikasi: <strong className="text-[#111827]">10 443 ko‘rish</strong>, 9 165 qamrov va bitta videoning o‘zidan +79 obunachi (jami test Reels orqali <strong className="text-[#111827]">350+ obunachi</strong> jalb etilgan).
              </p>
            </div>

            {/* engora-reel-2.png */}
            <div
              onClick={() =>
                openLightbox(
                  caseData.images.reel2,
                  'Engora — Reels ko‘rish va faollik natijasi (engora-reel-2.png)',
                  'Reels kontent natijasi: 28,7 ming ko‘rish, 896 layk va 458 ulashish.'
                )
              }
              className="group p-5 sm:p-6 rounded-3xl bg-white border border-[#E2E8F0] hover:border-[#2563EB]/40 transition-all cursor-pointer flex flex-col justify-between"
              role="button"
              tabIndex={0}
              aria-label="Ikkinchi Reels natijasi rasmini kattalashtirib ko‘rish"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  openLightbox(
                    caseData.images.reel2,
                    'Engora — Reels ko‘rish va faollik natijasi (engora-reel-2.png)',
                    'Reels kontent natijasi: 28,7 ming ko‘rish, 896 layk va 458 ulashish.'
                  );
                }
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] block">
                    Reels Qamrovi va Faollik
                  </span>
                  <h4 className="font-display font-bold text-lg sm:text-xl text-[#111827]">
                    28,7 ming ko‘rish va auditoriya faolligi
                  </h4>
                </div>
                <span className="text-xs font-bold text-[#64748B]">engora-reel-2.png</span>
              </div>

              <div className="relative w-full rounded-2xl overflow-hidden bg-[#F5F8FF] border border-[#E2E8F0] flex items-center justify-center p-2.5">
                <img
                  src={caseData.images.reel2}
                  alt="Engora — Ikkinchi Reels natijasi (engora-reel-2.png)"
                  className="w-full h-auto max-h-[580px] object-contain rounded-xl group-hover:scale-[1.01] transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-slate-900/75 backdrop-blur-xs text-white text-[11px] font-semibold flex items-center gap-1">
                  <Maximize2 className="w-3 h-3" />
                  <span>Kattalashtirish</span>
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#64748B] mt-3.5 leading-relaxed">
                Kontent rubrikalari asosida suratga olingan Reels: <strong className="text-[#111827]">28,7 ming ko‘rish</strong>, 896 ta layk va 458 marta ulashish (<span className="font-mono text-xs">engora-reel-2.png</span>).
              </p>
            </div>
          </div>

          {/* Kichik, halol izoh */}
          <div className="mt-6 pt-5 border-t border-[#E2E8F0] flex items-center justify-between flex-wrap gap-2 text-xs text-[#64748B]">
            <span className="font-semibold text-[#111827]">
              Eslatma: {caseData.statusNote}
            </span>
            <span>Barcha skrinshotlar original loyiha arxividan olingan.</span>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightbox.isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-labelledby="engora-lightbox-title"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-700"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-100 bg-white">
              <div>
                <h3
                  id="engora-lightbox-title"
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
