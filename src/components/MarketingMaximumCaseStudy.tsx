import React, { useState, useEffect } from 'react';
import {
  CheckCircle2,
  Layers,
  Maximize2,
  Sparkles,
  TrendingUp,
  Video,
  X,
} from 'lucide-react';
import { MARKETING_MAXIMUM_CASE_DATA } from '../utils/portfolio.ts';

interface LightboxState {
  isOpen: boolean;
  src: string;
  title: string;
  subtitle: string;
}

export const MarketingMaximumCaseStudy: React.FC = () => {
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

  const caseData = MARKETING_MAXIMUM_CASE_DATA;

  return (
    <section
      id="marketing-maximum"
      aria-label="Marketing Maximum Case Study"
      className="relative scroll-mt-20 sm:scroll-mt-24 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F5F8FF]/70 via-white to-white border-t border-[#E2E8F0]"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* 1. ASOSIY LOYIHA BLOKI */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-[#E2E8F0]">
          <div>
            <div className="flex flex-wrap items-center gap-2.5 mb-3.5 text-xs font-bold text-[#2563EB]">
              <span className="uppercase tracking-wider">04 / 10 · Keys</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-600">{caseData.field}</span>
            </div>

            <div className="flex items-center gap-4 sm:gap-5 mt-2">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#072B3A] text-[#2DD4BF] flex flex-col items-center justify-center border border-[#E2E8F0] shadow-sm shrink-0">
                <span className="font-display font-black text-xl sm:text-2xl tracking-tighter leading-none">
                  MM
                </span>
                <span className="text-[8px] font-bold text-white/90 uppercase tracking-widest mt-1">
                  MAXIMUM
                </span>
              </div>
              <div>
                <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[2.6rem] text-[#111827] tracking-tight leading-none">
                  {caseData.title}
                </h2>
                <span className="text-xs sm:text-sm font-bold text-[#2563EB] tracking-wide mt-2 block">
                  {caseData.category}
                </span>
              </div>
            </div>

            <p className="mt-4 text-base sm:text-lg text-[#111827] font-medium max-w-2xl leading-relaxed">
              {caseData.shortDesc}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 shrink-0 bg-white p-4 sm:p-5 rounded-2xl border border-[#E2E8F0] shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold text-[#2563EB]">
              <Sparkles className="w-4 h-4 shrink-0" />
              <span>500–600 → 2 500+ obunachi (~2 oyda)</span>
            </div>
            <div className="h-px bg-[#E2E8F0] hidden lg:block" />
            <div className="flex items-center gap-2 text-xs font-semibold text-[#64748B]">
              <TrendingUp className="w-4 h-4 text-[#2563EB] shrink-0" />
              <span>Eng yaxshi Reels: ~322 ming ko‘rish</span>
            </div>
          </div>
        </div>

        {/* 2. VAZIFA, ASOSIY ISHLAR VA TASDIQLANGAN NATIJALAR */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Chap ustun: Maqsad va eslatma */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-[#F5F8FF] border border-[#E2E8F0]">
            <div>
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#2563EB] mb-3">
                <Layers className="w-4 h-4" />
                <span>Loyiha Yo‘nalishi</span>
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-[#111827] leading-snug">
                Tizimli Qadoqlash va Kontent
              </h3>
              <p className="mt-3 text-sm sm:text-base text-[#111827]/90 leading-relaxed">
                {caseData.objective}
              </p>

              <div className="mt-6 pt-6 border-t border-[#E2E8F0]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#111827] block mb-2">
                  Vizual va Kontent Yechimi:
                </span>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  Sahifa uchun uch xil vizual yo‘nalish, tizimli Highlight bo‘limlari, podcast formatidagi Reels hamda o‘qituvchilar va bitiruvchilar natijalarini ko‘rsatuvchi karusel postlar ishlab chiqildi.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#E2E8F0] text-xs text-[#64748B]">
              Ko‘rsatkichlar loyiha jamoasi va kontent tizimi doirasida qayd etilgan real natijalardir.
            </div>
          </div>

          {/* O'ng ustun: Asosiy ishlar ro'yxati */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm">
            <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#2563EB] mb-3">
              <CheckCircle2 className="w-4 h-4" />
              <span>Bajarilgan Ishlar</span>
            </div>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-[#111827] mb-5">
              Asosiy ishlar:
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {caseData.completedTasks.map((task, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-[#F5F8FF]/80 border border-[#E2E8F0] hover:bg-[#EAF2FF]/60 transition-colors"
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
        </div>

        {/* Tasdiqlangan 4 ta natija kartochkalari */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {caseData.mainMetrics.map((metric) => (
            <div
              key={metric.id}
              className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm shadow-blue-500/5 hover:border-[#2563EB]/30 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="font-display font-extrabold text-2xl sm:text-3xl text-[#2563EB] tracking-tight tabular-nums block">
                  {metric.value}
                </span>
                <span className="text-sm font-bold text-[#111827] mt-2 block leading-snug">
                  {metric.label}
                </span>
              </div>
              <p className="text-xs text-[#64748B] mt-3 pt-3 border-t border-slate-100 leading-relaxed">
                {metric.context}
              </p>
            </div>
          ))}
        </div>

        {/* 3. PROFILNING OLDINGI VA KEYINGI HOLATI (mm-before.png & mm-after.png) */}
        <div className="mt-14 sm:mt-18">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#2563EB] block mb-1">
                Profil Taqqoslashi
              </span>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#111827] tracking-tight">
                Boshlang‘ich holat va Keyingi natija
              </h3>
            </div>
            <span className="text-xs text-[#64748B] font-medium">
              Taxminan 500–600 obunachidan 2 oyda 2 500+ obunachigacha o‘sish jarayoni
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Boshlang'ich holat (mm-before.png) */}
            <div
              onClick={() =>
                openLightbox(
                  caseData.images.before,
                  'Marketing Maximum — Boshlang‘ich holat',
                  'Qadoqlashdan avvalgi profil: 26 publikatsiya va 657 obunachi (mm-before.png).'
                )
              }
              className="group p-5 sm:p-6 rounded-3xl bg-[#F5F8FF] border border-[#E2E8F0] shadow-sm hover:shadow-md hover:border-[#2563EB]/40 transition-all cursor-pointer flex flex-col justify-between"
              role="button"
              tabIndex={0}
              aria-label="Marketing Maximum boshlang‘ich holat rasmini kattalashtirib ko‘rish"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  openLightbox(
                    caseData.images.before,
                    'Marketing Maximum — Boshlang‘ich holat',
                    'Qadoqlashdan avvalgi profil: 26 publikatsiya va 657 obunachi (mm-before.png).'
                  );
                }
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-display font-extrabold text-lg sm:text-xl text-[#111827]">
                  Boshlang‘ich holat
                </h4>
                <span className="text-xs font-bold text-[#64748B]">
                  ~500–600 obunachi (skrinshotda 657)
                </span>
              </div>

              <div className="relative w-full rounded-2xl overflow-hidden bg-white border border-[#E2E8F0] flex items-center justify-center p-2">
                <img
                  src={caseData.images.before}
                  alt="Marketing Maximum — Boshlang‘ich holat (mm-before.png)"
                  className="w-full h-auto max-h-[580px] object-contain rounded-xl group-hover:scale-[1.01] transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-slate-900/75 backdrop-blur-xs text-white text-[11px] font-semibold flex items-center gap-1">
                  <Maximize2 className="w-3 h-3" />
                  <span>Kattalashtirish</span>
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#64748B] mt-3.5 leading-relaxed">
                Profilni professional qadoqlash, Highlight bo‘limlari va yangi vizual tizimdan oldingi holat.
              </p>
            </div>

            {/* Keyingi natija (mm-after.png) */}
            <div
              onClick={() =>
                openLightbox(
                  caseData.images.after,
                  'Marketing Maximum — Keyingi natija',
                  'Tizimli qadoqlash, yangi bio, Highlights va 658,8 ming oylik ko‘rishlar (mm-after.png).'
                )
              }
              className="group p-5 sm:p-6 rounded-3xl bg-white border-2 border-[#2563EB]/30 shadow-md shadow-blue-500/5 hover:shadow-lg hover:border-[#2563EB] transition-all cursor-pointer flex flex-col justify-between"
              role="button"
              tabIndex={0}
              aria-label="Marketing Maximum keyingi natija rasmini kattalashtirib ko‘rish"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  openLightbox(
                    caseData.images.after,
                    'Marketing Maximum — Keyingi natija',
                    'Tizimli qadoqlash, yangi bio, Highlights va 658,8 ming oylik ko‘rishlar (mm-after.png).'
                  );
                }
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-display font-extrabold text-lg sm:text-xl text-[#2563EB]">
                  Keyingi natija
                </h4>
                <span className="text-xs font-bold text-[#111827]">
                  2 oyda 2 500+ obunachiga o‘sish
                </span>
              </div>

              <div className="relative w-full rounded-2xl overflow-hidden bg-white border border-[#E2E8F0] flex items-center justify-center p-2">
                <img
                  src={caseData.images.after}
                  alt="Marketing Maximum — Keyingi natija (mm-after.png)"
                  className="w-full h-auto max-h-[580px] object-contain rounded-xl group-hover:scale-[1.01] transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-slate-900/75 backdrop-blur-xs text-white text-[11px] font-semibold flex items-center gap-1">
                  <Maximize2 className="w-3 h-3" />
                  <span>Kattalashtirish</span>
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#64748B] mt-3.5 leading-relaxed">
                Yangi brend identifikatsiyasi, aniq pozitsionirovaniye, Highlight’lar va 30 kunda 658,8 ming ko‘rish.
              </p>
            </div>
          </div>
        </div>

        {/* 4. VIZUAL USLUBDAGI O'ZGARISH (mm-visual-before.png & mm-visual-after.png) */}
        <div className="mt-14 sm:mt-18 p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#F5F8FF] border border-[#E2E8F0]">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#2563EB] block mb-1">
                Lenta va Kontent Dizayni
              </span>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#111827] tracking-tight">
                Vizual uslubdagi o‘zgarish
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#64748B] max-w-md">
              Uch xil vizual yo‘nalish, ekspert karusellari va yagona rang tizimi asosida qayta shakllantirilgan Instagram lenta ko‘rinishi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* mm-visual-before.png */}
            <div
              onClick={() =>
                openLightbox(
                  caseData.images.visualBefore,
                  'Vizual uslubdagi o‘zgarish — Avvalgi lenta ko‘rinishi',
                  'Yagona vizual uslub joriy etilishidan oldingi postlar va Reels muqovalari (mm-visual-before.png).'
                )
              }
              className="group p-5 sm:p-6 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm hover:shadow-md hover:border-[#2563EB]/40 transition-all cursor-pointer flex flex-col justify-between"
              role="button"
              tabIndex={0}
              aria-label="Avvalgi vizual uslub rasmini kattalashtirib ko‘rish"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  openLightbox(
                    caseData.images.visualBefore,
                    'Vizual uslubdagi o‘zgarish — Avvalgi lenta ko‘rinishi',
                    'Yagona vizual uslub joriy etilishidan oldingi postlar va Reels muqovalari (mm-visual-before.png).'
                  );
                }
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-display font-bold text-lg sm:text-xl text-[#111827]">
                  Avvalgi vizual ko‘rinish
                </h4>
                <span className="text-xs font-bold text-[#64748B]">mm-visual-before.png</span>
              </div>

              <div className="relative w-full rounded-2xl overflow-hidden bg-slate-50 border border-[#E2E8F0] flex items-center justify-center p-2">
                <img
                  src={caseData.images.visualBefore}
                  alt="Marketing Maximum — Avvalgi vizual uslub (mm-visual-before.png)"
                  className="w-full h-auto max-h-[580px] object-contain rounded-xl group-hover:scale-[1.01] transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-slate-900/75 backdrop-blur-xs text-white text-[11px] font-semibold flex items-center gap-1">
                  <Maximize2 className="w-3 h-3" />
                  <span>Kattalashtirish</span>
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#64748B] mt-3.5 leading-relaxed">
                Tizimli tipografika va brend ranglariga o‘tishdan avvalgi lenta.
              </p>
            </div>

            {/* mm-visual-after.png */}
            <div
              onClick={() =>
                openLightbox(
                  caseData.images.visualAfter,
                  'Vizual uslubdagi o‘zgarish — Yangi tizimli vizual',
                  'Uch xil vizual yo‘nalish, o‘quvchilar natijalari va ekspert karusellari (mm-visual-after.png).'
                )
              }
              className="group p-5 sm:p-6 rounded-3xl bg-white border-2 border-[#2563EB]/30 shadow-md hover:shadow-lg hover:border-[#2563EB] transition-all cursor-pointer flex flex-col justify-between"
              role="button"
              tabIndex={0}
              aria-label="Yangi vizual uslub rasmini kattalashtirib ko‘rish"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  openLightbox(
                    caseData.images.visualAfter,
                    'Vizual uslubdagi o‘zgarish — Yangi tizimli vizual',
                    'Uch xil vizual yo‘nalish, o‘quvchilar natijalari va ekspert karusellari (mm-visual-after.png).'
                  );
                }
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-display font-bold text-lg sm:text-xl text-[#2563EB]">
                  Yangilangan vizual uslub
                </h4>
                <span className="text-xs font-bold text-[#111827]">3 xil vizual yo‘nalish</span>
              </div>

              <div className="relative w-full rounded-2xl overflow-hidden bg-slate-50 border border-[#E2E8F0] flex items-center justify-center p-2">
                <img
                  src={caseData.images.visualAfter}
                  alt="Marketing Maximum — Yangilangan vizual uslub (mm-visual-after.png)"
                  className="w-full h-auto max-h-[580px] object-contain rounded-xl group-hover:scale-[1.01] transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-slate-900/75 backdrop-blur-xs text-white text-[11px] font-semibold flex items-center gap-1">
                  <Maximize2 className="w-3 h-3" />
                  <span>Kattalashtirish</span>
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#64748B] mt-3.5 leading-relaxed">
                Uch xil vizual yo‘nalish, podkast muqovalari hamda o‘qituvchilar va natijalar haqidagi karusel kontentlar.
              </p>
            </div>
          </div>
        </div>

        {/* 5. ENG YAXSHI REELS NATIJASI (mm-reel.png — Alohida katta blok) */}
        <div className="mt-14 sm:mt-18">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#2563EB] block mb-1">
                Podcast Formatidagi Reels
              </span>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#111827] tracking-tight">
                Eng yaxshi Reels natijasi
              </h3>
            </div>
            <span className="text-xs sm:text-sm font-bold text-[#2563EB]">
              O‘rtacha Reels: 5–6 ming ko‘rish · Eng yaxshi natija: 322 ming ko‘rish
            </span>
          </div>

          <div
            onClick={() =>
              openLightbox(
                caseData.images.reel,
                'Marketing Maximum — Eng yaxshi Reels natijasi',
                'Podcast formatidagi Reels: 322 ming ko‘rish, 18,1 ming layk, 600 izoh va 11,6 ming ulashish (mm-reel.png).'
              )
            }
            className="group p-6 sm:p-8 lg:p-10 rounded-3xl bg-white border border-[#E2E8F0] shadow-md hover:shadow-lg hover:border-[#2563EB]/40 transition-all cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            role="button"
            tabIndex={0}
            aria-label="Eng yaxshi Reels natijasi rasmini kattalashtirib ko‘rish"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                openLightbox(
                  caseData.images.reel,
                  'Marketing Maximum — Eng yaxshi Reels natijasi',
                  'Podcast formatidagi Reels: 322 ming ko‘rish, 18,1 ming layk, 600 izoh va 11,6 ming ulashish (mm-reel.png).'
                );
              }
            }}
          >
            {/* Chap tomonda katta vertikal original rasm */}
            <div className="lg:col-span-6 relative w-full rounded-2xl overflow-hidden bg-[#F5F8FF] border border-[#E2E8F0] flex items-center justify-center p-3">
              <img
                src={caseData.images.reel}
                alt="Eng yaxshi Reels natijasi — 322 ming ko‘rish (mm-reel.png)"
                className="w-full h-auto max-h-[600px] object-contain rounded-xl group-hover:scale-[1.01] transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
              <span className="absolute top-4 right-4 px-3 py-1.5 rounded-md bg-slate-900/75 backdrop-blur-xs text-white text-xs font-semibold flex items-center gap-1.5">
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Kattalashtirish</span>
              </span>
            </div>

            {/* O'ng tomonda skrinshotdagi haqiqiy ko'rsatkichlar */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#2563EB] mb-2">
                  <Video className="w-4 h-4" />
                  <span>“Maktab standartlari” · Podcast Reels</span>
                </div>
                <h4 className="font-display font-extrabold text-2xl sm:text-3xl text-[#111827] leading-tight">
                  322 ming ko‘rish va yuqori auditoriya faolligi
                </h4>
                <p className="mt-3 text-sm sm:text-base text-[#64748B] leading-relaxed">
                  Loyiha doirasida yo‘lga qo‘yilgan podcast formatidagi Reels videolari auditoriya tomonidan keng ulashildi. Muntazam Reels videolarining o‘rtacha ko‘rishlari 5–6 mingni tashkil etgan bo‘lsa, eng yaxshi video 322 ming ko‘rishga chiqdi.
                </p>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-[#F5F8FF] border border-[#E2E8F0]">
                    <span className="font-display font-extrabold text-2xl text-[#2563EB] block">
                      322 ming
                    </span>
                    <span className="text-xs font-bold text-[#111827] mt-0.5 block">
                      Jami ko‘rishlar (Просмотры)
                    </span>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#F5F8FF] border border-[#E2E8F0]">
                    <span className="font-display font-extrabold text-2xl text-[#111827] block">
                      18,1 ming
                    </span>
                    <span className="text-xs font-bold text-[#64748B] mt-0.5 block">
                      Layklar (Отметки &quot;Нравится&quot;)
                    </span>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#F5F8FF] border border-[#E2E8F0]">
                    <span className="font-display font-extrabold text-2xl text-[#111827] block">
                      11,6 ming
                    </span>
                    <span className="text-xs font-bold text-[#64748B] mt-0.5 block">
                      Ulashishlar (Поделились)
                    </span>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#F5F8FF] border border-[#E2E8F0]">
                    <span className="font-display font-extrabold text-2xl text-[#111827] block">
                      1 022 / 600
                    </span>
                    <span className="text-xs font-bold text-[#64748B] mt-0.5 block">
                      Repostlar va izohlar
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E2E8F0] flex items-center justify-between text-xs text-[#64748B]">
                <span>Manba fayl: mm-reel.png</span>
                <span className="font-bold text-[#2563EB]">To‘liq o‘lchamda ko‘rish →</span>
              </div>
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
          aria-labelledby="mm-lightbox-title"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-700"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-100 bg-white">
              <div>
                <h3 id="mm-lightbox-title" className="font-display font-bold text-lg text-slate-900">
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
