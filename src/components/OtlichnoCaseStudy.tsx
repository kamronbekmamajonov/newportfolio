import React, { useState, useEffect } from 'react';
import {
  Briefcase,
  Calendar,
  CheckCircle2,
  GraduationCap,
  Layers,
  Maximize2,
  MessageSquare,
  Sparkles,
  TrendingUp,
  Video,
  X,
} from 'lucide-react';
import { OTLICHNO_CASE_DATA } from '../utils/portfolio.ts';

interface LightboxState {
  isOpen: boolean;
  src: string;
  title: string;
  subtitle: string;
}

export const OtlichnoCaseStudy: React.FC = () => {
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

  const caseData = OTLICHNO_CASE_DATA;

  return (
    <section
      id="otlichno"
      aria-label="Otlichno o‘quv markazi Case Study"
      className="relative scroll-mt-20 sm:scroll-mt-24 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-[#E2E8F0]"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* 1. ASOSIY LOYIHA BLOKI */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-[#E2E8F0]">
          <div>
            <div className="flex flex-wrap items-center gap-2.5 mb-3.5 text-xs font-bold text-[#2563EB]">
              <span className="uppercase tracking-wider">03 / 10 · Keys</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-600">{caseData.field}</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-700">{caseData.period}</span>
            </div>

            <div className="flex items-center gap-4 sm:gap-5 mt-2">
              <img
                src={caseData.images.logo}
                alt={`${caseData.title} logotipi`}
                onClick={() =>
                  openLightbox(
                    caseData.images.logo,
                    'Otlichno o‘quv markazi — Logotip',
                    'Ta’lim loyihasi identifikatsiyasi (otlichno-logo.jpg)'
                  )
                }
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border border-[#E2E8F0] shadow-sm shrink-0 bg-white cursor-pointer hover:opacity-95 transition-opacity"
                referrerPolicy="no-referrer"
              />
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

          {/* Lavozim va Davr ma'lumotlari */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0 bg-[#F5F8FF] p-4 sm:p-5 rounded-2xl border border-[#E2E8F0]">
            <div className="flex items-center gap-2.5">
              <Briefcase className="w-4 h-4 text-[#2563EB] shrink-0" />
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748B] block">
                  Lavozim
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#111827]">
                  {caseData.role}
                </span>
              </div>
            </div>
            <div className="h-px bg-[#E2E8F0] hidden lg:block" />
            <div className="flex items-center gap-2.5">
              <Calendar className="w-4 h-4 text-[#2563EB] shrink-0" />
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748B] block">
                  Faoliyat davri
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#111827]">
                  {caseData.period} (Jamoaviy va amaliy faoliyat)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. OLDINGI VA KEYINGI HOLAT (otlichno-before.png & otlichno-after.jpg) */}
        <div className="mt-10 sm:mt-14">
          <div className="mb-5 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#2563EB] block mb-1">
                Vizual Taqqoslash
              </span>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#111827] tracking-tight">
                Boshlang‘ich holat va Keyingi natija
              </h3>
            </div>
            <span className="text-xs text-[#64748B] font-medium">
              Profil statistikalari kesilmagan to‘liq formatda (kattalashtirish uchun bosing)
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Boshlang'ich holat (otlichno-before.png) */}
            <div
              onClick={() =>
                openLightbox(
                  caseData.images.before,
                  'Otlichno o‘quv markazi — Boshlang‘ich holat',
                  '2022-yil oktabr holati: 119 publikatsiya va 30.3K obunachi (otlichno-before.png).'
                )
              }
              className="group p-5 sm:p-6 rounded-3xl bg-[#F5F8FF] border border-[#E2E8F0] shadow-sm hover:shadow-md hover:border-[#2563EB]/40 transition-all cursor-pointer flex flex-col justify-between"
              role="button"
              tabIndex={0}
              aria-label="Boshlang‘ich holat rasmini kattalashtirib ko‘rish"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  openLightbox(
                    caseData.images.before,
                    'Otlichno o‘quv markazi — Boshlang‘ich holat',
                    '2022-yil oktabr holati: 119 publikatsiya va 30.3K obunachi (otlichno-before.png).'
                  );
                }
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-display font-extrabold text-lg sm:text-xl text-[#111827]">
                  Boshlang‘ich holat
                </h4>
                <span className="text-xs font-bold text-[#64748B]">
                  2022-yil oktabr · 30,3K obunachi
                </span>
              </div>

              <div className="relative w-full min-h-[260px] sm:min-h-[320px] rounded-2xl overflow-hidden bg-white border border-[#E2E8F0] flex items-center justify-center p-3">
                <img
                  src={caseData.images.before}
                  alt="Otlichno o‘quv markazi — Boshlang‘ich holat"
                  className="w-full h-auto max-h-[360px] object-contain rounded-xl group-hover:scale-[1.01] transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-slate-900/75 backdrop-blur-xs text-white text-[11px] font-semibold flex items-center gap-1">
                  <Maximize2 className="w-3 h-3" />
                  <span>Kattalashtirish</span>
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#64748B] mt-3.5 leading-relaxed">
                Loyiha boshlangan davrdagi dastlabki Instagram profil ko‘rinishi (119 publikatsiya, 30.3K obunachi).
              </p>
            </div>

            {/* Keyingi natija (otlichno-after.jpg) */}
            <div
              onClick={() =>
                openLightbox(
                  caseData.images.after,
                  'Otlichno o‘quv markazi — Keyingi natija',
                  'Kontent tizimi va Reels orqali erishilgan natija: 304 publikatsiya va 96,1 ming obunachi (otlichno-after.jpg).'
                )
              }
              className="group p-5 sm:p-6 rounded-3xl bg-white border-2 border-[#2563EB]/30 shadow-md shadow-blue-500/5 hover:shadow-lg hover:border-[#2563EB] transition-all cursor-pointer flex flex-col justify-between"
              role="button"
              tabIndex={0}
              aria-label="Keyingi natija rasmini kattalashtirib ko‘rish"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  openLightbox(
                    caseData.images.after,
                    'Otlichno o‘quv markazi — Keyingi natija',
                    'Kontent tizimi va Reels orqali erishilgan natija: 304 publikatsiya va 96,1 ming obunachi (otlichno-after.jpg).'
                  );
                }
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-display font-extrabold text-lg sm:text-xl text-[#2563EB]">
                  Keyingi natija
                </h4>
                <span className="text-xs font-bold text-[#111827]">
                  96,1 ming obunachi (Reels orqali +50K organik o‘sish)
                </span>
              </div>

              <div className="relative w-full min-h-[260px] sm:min-h-[320px] rounded-2xl overflow-hidden bg-white border border-[#E2E8F0] flex items-center justify-center p-3">
                <img
                  src={caseData.images.after}
                  alt="Otlichno o‘quv markazi — Keyingi natija"
                  className="w-full h-auto max-h-[360px] object-contain rounded-xl group-hover:scale-[1.01] transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-slate-900/75 backdrop-blur-xs text-white text-[11px] font-semibold flex items-center gap-1">
                  <Maximize2 className="w-3 h-3" />
                  <span>Kattalashtirish</span>
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#64748B] mt-3.5 leading-relaxed">
                Tizimli kontent, Reels rubrikalari va jamoaviy ish natijasida rivojlangan sahifa holati (96,1 ming obunachi).
              </p>
            </div>
          </div>
        </div>

        {/* 3. NATIJALAR VA STATISTIKALAR (Davr va platformalar kesimida aniq ajratilgan) */}
        <div className="mt-14 sm:mt-18 p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#F5F8FF] border border-[#E2E8F0]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#E2E8F0]">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#2563EB] block mb-1">
                Natijalar va Statistikalar
              </span>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#111827] tracking-tight">
                Davrlar va platformalar kesimidagi ko‘rsatkichlar
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#64748B] max-w-md">
              Ko‘rsatkichlar turli davr va platformalar bo‘yicha alohida keltirilgan. Ushbu natijalarning katta qismi agentlik va loyiha jamoasi bilan birgalikda amalga oshirilgan.
            </p>
          </div>

          {/* 2022-yil oktabr holati */}
          <div className="mt-6">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#111827] mb-3.5">
              2022-yil oktabr holatiga ko‘ra boshlang‘ich ko‘rsatkichlar:
            </h4>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {caseData.oct2022Stats.map((stat) => (
                <div
                  key={stat.id}
                  className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs"
                >
                  <span className="font-display font-extrabold text-xl sm:text-2xl text-[#111827] block">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#2563EB] mt-1 block">
                    {stat.label}
                  </span>
                  <p className="text-[11px] text-[#64748B] mt-1.5 leading-relaxed">
                    {stat.context}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 2023-yil va hisobot davri natijalari */}
          <div className="mt-8">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#111827] mb-3.5">
              2023-yil noyabr va hisobotlarda qayd etilgan o‘sish ko‘rsatkichlari:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {caseData.nov2023Stats.map((stat) => (
                <div
                  key={stat.id}
                  className="p-4 sm:p-5 rounded-2xl bg-white border border-[#2563EB]/25 shadow-sm"
                >
                  <span className="font-display font-extrabold text-xl sm:text-2xl text-[#2563EB] block">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#111827] mt-1 block">
                    {stat.label}
                  </span>
                  <p className="text-[11px] text-[#64748B] mt-1.5 leading-relaxed">
                    {stat.context}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Hisobotlarda qayd etilgan barcha faktlar */}
          <div className="mt-8 pt-6 border-t border-[#E2E8F0] grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {caseData.reportHighlights.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-[#E2E8F0]"
              >
                <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#111827] font-medium leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 4. INSTAGRAM REELS NATIJALARI (Alohida katta blok) */}
        <div className="mt-14 sm:mt-18">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#2563EB] block mb-1">
                Instagram Kontent Samaradorligi
              </span>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#111827] tracking-tight">
                Instagram Reels natijalari
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#64748B] max-w-md">
              Instagram Reels orqali 16,5 ming va 6 ming obunachi o‘sishi qayd etilgan real statistika skrinshotlari.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* otlichno-reel-16,5Kfollowers.jpg */}
            <div
              onClick={() =>
                openLightbox(
                  caseData.images.reel16k,
                  'Instagram Reels natijalari — +16,5 ming obunachi',
                  'Instagram Reels orqali 16,5 ming obunachi o‘sishi qayd etilgan (otlichno-reel-16,5Kfollowers.jpg).'
                )
              }
              className="group p-5 sm:p-6 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm hover:shadow-md hover:border-[#2563EB]/40 transition-all cursor-pointer flex flex-col justify-between"
              role="button"
              tabIndex={0}
              aria-label="Instagram Reels 16,5K obunachi rasmini kattalashtirib ko‘rish"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  openLightbox(
                    caseData.images.reel16k,
                    'Instagram Reels natijalari — +16,5 ming obunachi',
                    'Instagram Reels orqali 16,5 ming obunachi o‘sishi qayd etilgan (otlichno-reel-16,5Kfollowers.jpg).'
                  );
                }
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#2563EB] block">
                    Viral Reels #1
                  </span>
                  <h4 className="font-display font-bold text-lg sm:text-xl text-[#111827] mt-0.5">
                    Bitta Reels orqali +16,5 ming obunachi
                  </h4>
                </div>
                <span className="text-sm font-extrabold text-[#2563EB]">+16,5K</span>
              </div>

              <div className="relative w-full rounded-2xl overflow-hidden bg-[#F5F8FF] border border-[#E2E8F0] flex items-center justify-center p-2">
                <img
                  src={caseData.images.reel16k}
                  alt="Instagram Reels natijalari — 16,5 ming obunachi"
                  className="w-full h-auto max-h-[540px] object-contain rounded-xl group-hover:scale-[1.01] transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-slate-900/75 backdrop-blur-xs text-white text-[11px] font-semibold flex items-center gap-1">
                  <Maximize2 className="w-3 h-3" />
                  <span>Kattalashtirish</span>
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#64748B] mt-3.5 leading-relaxed">
                Instagram Reels orqali 16,5 ming yangi obunachi o‘sishi qayd etilgan ko‘rsatkich.
              </p>
            </div>

            {/* otlichno-reel-6Kfollowers.jpg */}
            <div
              onClick={() =>
                openLightbox(
                  caseData.images.reel6k,
                  'Instagram Reels natijalari — +6 ming obunachi',
                  'Instagram Reels orqali +6 ming obunachi o‘sishi qayd etilgan (otlichno-reel-6Kfollowers.jpg).'
                )
              }
              className="group p-5 sm:p-6 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm hover:shadow-md hover:border-[#2563EB]/40 transition-all cursor-pointer flex flex-col justify-between"
              role="button"
              tabIndex={0}
              aria-label="Instagram Reels 6K obunachi rasmini kattalashtirib ko‘rish"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  openLightbox(
                    caseData.images.reel6k,
                    'Instagram Reels natijalari — +6 ming obunachi',
                    'Instagram Reels orqali +6 ming obunachi o‘sishi qayd etilgan (otlichno-reel-6Kfollowers.jpg).'
                  );
                }
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#2563EB] block">
                    Viral Reels #2
                  </span>
                  <h4 className="font-display font-bold text-lg sm:text-xl text-[#111827] mt-0.5">
                    Bitta Reels orqali +6 ming obunachi
                  </h4>
                </div>
                <span className="text-sm font-extrabold text-[#2563EB]">+6K</span>
              </div>

              <div className="relative w-full rounded-2xl overflow-hidden bg-[#F5F8FF] border border-[#E2E8F0] flex items-center justify-center p-2">
                <img
                  src={caseData.images.reel6k}
                  alt="Instagram Reels natijalari — 6 ming obunachi"
                  className="w-full h-auto max-h-[540px] object-contain rounded-xl group-hover:scale-[1.01] transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-slate-900/75 backdrop-blur-xs text-white text-[11px] font-semibold flex items-center gap-1">
                  <Maximize2 className="w-3 h-3" />
                  <span>Kattalashtirish</span>
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#64748B] mt-3.5 leading-relaxed">
                Hisobotda Reels orqali jami 50 mingdan ortiq organik obunachi jalb qilingani qayd etilgan.
              </p>
            </div>
          </div>
        </div>

        {/* 5. TIKTOK NATIJALARI (Alohida katta blok) */}
        <div className="mt-14 sm:mt-18 p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#F5F8FF] border border-[#E2E8F0]">
          <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#2563EB] block mb-1">
                TikTok Natijalari va Lead Generation
              </span>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#111827] tracking-tight">
                TikTok orqali organik murojaatlar
              </h3>
              <p className="mt-2 text-sm sm:text-base font-bold text-[#2563EB]">
                Bitta TikTok videosi orqali 552 ta organik murojaat.
              </p>
            </div>
            <p className="text-xs sm:text-sm text-[#64748B] max-w-md">
              TikTok 2023-yil mart–aprel davrida 173 ming obunachiga yetgan; shu davrda 15 ming obunachi o‘sishi qayd etilgan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* tiktok-reel.jpg */}
            <div
              onClick={() =>
                openLightbox(
                  caseData.images.tiktokReel,
                  'TikTok orqali organik murojaatlar — TikTok Reel',
                  'TikTok 2023-yil mart–aprel davrida 173 ming obunachiga yetgan (+15 ming o‘sish) (tiktok-reel.jpg).'
                )
              }
              className="group p-5 sm:p-6 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm hover:shadow-md hover:border-[#2563EB]/40 transition-all cursor-pointer flex flex-col justify-between"
              role="button"
              tabIndex={0}
              aria-label="TikTok Reel rasmini kattalashtirib ko‘rish"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  openLightbox(
                    caseData.images.tiktokReel,
                    'TikTok orqali organik murojaatlar — TikTok Reel',
                    'TikTok 2023-yil mart–aprel davrida 173 ming obunachiga yetgan (+15 ming o‘sish) (tiktok-reel.jpg).'
                  );
                }
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#2563EB] block">
                    TikTok O‘sishi
                  </span>
                  <h4 className="font-display font-bold text-lg sm:text-xl text-[#111827] mt-0.5">
                    130 ming → 173 ming obunachi
                  </h4>
                </div>
                <span className="text-xs font-bold text-[#64748B]">+15 ming (mart–aprel)</span>
              </div>

              <div className="relative w-full rounded-2xl overflow-hidden bg-slate-900 border border-[#E2E8F0] flex items-center justify-center p-2">
                <img
                  src={caseData.images.tiktokReel}
                  alt="TikTok video natijasi (tiktok-reel.jpg)"
                  className="w-full h-auto max-h-[540px] object-contain rounded-xl group-hover:scale-[1.01] transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-slate-900/75 backdrop-blur-xs text-white text-[11px] font-semibold flex items-center gap-1">
                  <Maximize2 className="w-3 h-3" />
                  <span>Kattalashtirish</span>
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#64748B] mt-3.5 leading-relaxed">
                TikTok sahifasida qisqa video formatlar orqali erishilgan qamrov va auditoriya o‘sishi.
              </p>
            </div>

            {/* tiktokleads.jpg */}
            <div
              onClick={() =>
                openLightbox(
                  caseData.images.tiktokLeads,
                  'TikTok orqali organik murojaatlar — 552 ta murojaat',
                  'Bitta TikTok videosi orqali 552 ta organik murojaat (tiktokleads.jpg).'
                )
              }
              className="group p-5 sm:p-6 rounded-3xl bg-white border-2 border-[#2563EB]/30 shadow-md hover:shadow-lg hover:border-[#2563EB] transition-all cursor-pointer flex flex-col justify-between"
              role="button"
              tabIndex={0}
              aria-label="TikTok murojaatlar rasmini kattalashtirib ko‘rish"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  openLightbox(
                    caseData.images.tiktokLeads,
                    'TikTok orqali organik murojaatlar — 552 ta murojaat',
                    'Bitta TikTok videosi orqali 552 ta organik murojaat (tiktokleads.jpg).'
                  );
                }
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#2563EB] block">
                    Tasdiqlangan Natija
                  </span>
                  <h4 className="font-display font-bold text-lg sm:text-xl text-[#111827] mt-0.5">
                    Bitta TikTok videosi orqali 552 ta organik murojaat
                  </h4>
                </div>
                <span className="text-sm font-extrabold text-[#2563EB]">552 lid</span>
              </div>

              <div className="relative w-full rounded-2xl overflow-hidden bg-[#F5F8FF] border border-[#E2E8F0] flex items-center justify-center p-2">
                <img
                  src={caseData.images.tiktokLeads}
                  alt="Bitta TikTok videosi orqali 552 ta organik murojaat (tiktokleads.jpg)"
                  className="w-full h-auto max-h-[540px] object-contain rounded-xl group-hover:scale-[1.01] transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-slate-900/75 backdrop-blur-xs text-white text-[11px] font-semibold flex items-center gap-1">
                  <Maximize2 className="w-3 h-3" />
                  <span>Kattalashtirish</span>
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#64748B] mt-3.5 leading-relaxed">
                Bitta TikTok videosining o‘zidan kelib tushgan 552 ta organik murojaat isboti.
              </p>
            </div>
          </div>
        </div>

        {/* 6. YOUTUBE NATIJALARI (Alohida katta vizual blok) */}
        <div className="mt-14 sm:mt-18">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#2563EB] block mb-1">
                YouTube Natijalari
              </span>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#111827] tracking-tight">
                YouTube kanalining o‘sishi
              </h3>
              <p className="mt-1.5 text-sm sm:text-base text-[#64748B]">
                Loyiha davomida YouTube kanalining auditoriyasi o‘sdi.
              </p>
            </div>
            <div className="text-xs sm:text-sm font-bold text-[#2563EB]">
              2022 oktabr: 150 ming → 2023 noyabr: 306 ming+ obunachi
            </div>
          </div>

          <div
            onClick={() =>
              openLightbox(
                caseData.images.youtubeVideo,
                'YouTube kanalining o‘sishi',
                'Loyiha davomida YouTube kanalining auditoriyasi o‘sdi: 150 mingdan 306 mingdan ortiq obunachiga yetdi (youtube-video.PNG).'
              )
            }
            className="group p-5 sm:p-8 rounded-3xl bg-white border border-[#E2E8F0] shadow-md hover:shadow-lg hover:border-[#2563EB]/40 transition-all cursor-pointer"
            role="button"
            tabIndex={0}
            aria-label="YouTube kanalining o‘sishi rasmini kattalashtirib ko‘rish"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                openLightbox(
                  caseData.images.youtubeVideo,
                  'YouTube kanalining o‘sishi',
                  'Loyiha davomida YouTube kanalining auditoriyasi o‘sdi: 150 mingdan 306 mingdan ortiq obunachiga yetdi (youtube-video.PNG).'
                );
              }
            }}
          >
            <div className="relative w-full rounded-2xl overflow-hidden bg-[#F5F8FF] border border-[#E2E8F0] flex items-center justify-center p-2 sm:p-4">
              <img
                src={caseData.images.youtubeVideo}
                alt="YouTube kanalining o‘sishi (youtube-video.PNG)"
                className="w-full h-auto max-h-[520px] object-contain rounded-xl group-hover:scale-[1.01] transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
              <span className="absolute top-4 right-4 px-3 py-1.5 rounded-md bg-slate-900/75 backdrop-blur-xs text-white text-xs font-semibold flex items-center gap-1.5">
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Kattalashtirish</span>
              </span>
            </div>

            <div className="mt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 border-t border-[#E2E8F0]">
              <div>
                <h4 className="font-display font-bold text-lg text-[#111827]">
                  YouTube kanalining o‘sishi (150 000 → 306 000+ obunachi)
                </h4>
                <p className="text-xs sm:text-sm text-[#64748B] mt-0.5">
                  Loyiha davomida YouTube kanalining auditoriyasi o‘sdi va 2023-yil noyabr holatiga ko‘ra 306 mingdan ortiq obunachidan oshdi.
                </p>
              </div>
              <span className="text-xs font-bold text-[#2563EB] shrink-0">
                youtube-video.PNG
              </span>
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
          aria-labelledby="otlichno-lightbox-title"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-700"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-100 bg-white">
              <div>
                <h3 id="otlichno-lightbox-title" className="font-display font-bold text-lg text-slate-900">
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
