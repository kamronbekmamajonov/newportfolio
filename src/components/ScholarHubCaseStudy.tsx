import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Award,
  CheckCircle2,
  GraduationCap,
  Layers,
  Maximize2,
  MessageSquare,
  Sparkles,
  TrendingUp,
  Users,
  Video,
  X,
} from 'lucide-react';
import { SCHOLARHUB_CASE_DATA } from '../utils/portfolio.ts';

interface LightboxState {
  isOpen: boolean;
  src: string;
  title: string;
  subtitle: string;
}

export const ScholarHubCaseStudy: React.FC = () => {
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

  const caseData = SCHOLARHUB_CASE_DATA;

  return (
    <section
      id="scholarhub"
      aria-label="ScholarHUB Case Study"
      className="relative scroll-mt-20 sm:scroll-mt-24 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F5F8FF]/80 via-white to-white border-t border-[#E2E8F0]"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* A. Loyiha Sarlavhasi */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#E2E8F0]">
          <div>
            <div className="flex flex-wrap items-center gap-2.5 mb-3.5">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#2563EB] bg-[#EAF2FF] border border-[#2563EB]/15">
                02 / 10 · Keys
              </span>
              <span className="text-xs font-bold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-full">
                Online Ta’lim
              </span>
            </div>

            <div className="flex items-center gap-4 mt-2">
              <div className="w-14 h-14 rounded-2xl bg-[#0A192F] text-white flex flex-col items-center justify-center border border-[#E2E8F0] shadow-sm shrink-0">
                <span className="font-display font-extrabold text-sm tracking-tight leading-none">Scholar</span>
                <span className="text-[8px] font-bold text-red-500 uppercase tracking-widest mt-0.5">HUB</span>
              </div>
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
            <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold text-blue-800 bg-blue-50 border border-blue-200">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              5 oyda +22 200 yangi obunachi
            </span>
          </div>
        </div>

        {/* B. Asosiy Vizual: Oldingi va Keyingi Holat (Before & After) */}
        <div className="mt-10 sm:mt-12">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#2563EB]">
              Profil Taqqoslashi (Before & After)
            </span>
            <span className="text-xs text-slate-500 font-medium hidden sm:inline">
              Boshlang‘ich 2 741 dan 24 500+ gacha o‘sish dinamikasi
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 1. Before */}
            <div
              onClick={() =>
                openLightbox(
                  caseData.images.before,
                  'ScholarHUB — Boshlang‘ich Holat (Before)',
                  '2024-yil oktabr: 2 741 obunachi va 26 ta publikatsiya.'
                )
              }
              className="group p-5 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm hover:shadow-md hover:border-red-300 transition-all cursor-pointer flex flex-col justify-between"
              role="button"
              tabIndex={0}
              aria-label="Oldingi holat rasmini kattalashtirib ko‘rish"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  openLightbox(
                    caseData.images.before,
                    'ScholarHUB — Boshlang‘ich Holat (Before)',
                    '2024-yil oktabr: 2 741 obunachi va 26 ta publikatsiya.'
                  );
                }
              }}
            >
              <div className="flex items-center justify-between mb-3.5">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold text-rose-700 bg-rose-50 border border-rose-200">
                  Boshlang‘ich Holat · Before
                </span>
                <span className="text-xs font-bold text-slate-500">2 741 Obunachi</span>
              </div>

              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                <img
                  src={caseData.images.before}
                  alt="ScholarHUB Oldingi Holat (Before)"
                  className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-2.5 right-2.5 px-2 py-1 rounded-md bg-black/60 backdrop-blur-xs text-white text-[10px] font-semibold flex items-center gap-1">
                  <Maximize2 className="w-3 h-3" />
                  <span>Kattalashtirish</span>
                </span>
              </div>

              <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                2024-yil oktabr holatiga ko‘ra platformaning dastlabki ko‘rinishi.
              </p>
            </div>

            {/* 2. After */}
            <div
              onClick={() =>
                openLightbox(
                  caseData.images.after,
                  'ScholarHUB — Erishilgan Natija (After)',
                  '2025-yil fevral: 24 500+ jami obunachi va 5 oyda +22 200 yangi o‘quvchilar.'
                )
              }
              className="group p-5 rounded-3xl bg-white border border-[#2563EB]/30 shadow-md shadow-blue-500/5 hover:shadow-lg hover:border-[#2563EB] transition-all cursor-pointer flex flex-col justify-between"
              role="button"
              tabIndex={0}
              aria-label="Keyingi holat rasmini kattalashtirib ko‘rish"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  openLightbox(
                    caseData.images.after,
                    'ScholarHUB — Erishilgan Natija (After)',
                    '2025-yil fevral: 24 500+ jami obunachi va 5 oyda +22 200 yangi o‘quvchilar.'
                  );
                }
              }}
            >
              <div className="flex items-center justify-between mb-3.5">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200">
                  Erishilgan Natija · After
                </span>
                <span className="text-xs font-bold text-[#2563EB]">24 500+ Obunachi (+22.2K)</span>
              </div>

              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                <img
                  src={caseData.images.after}
                  alt="ScholarHUB Keyingi Holat (After)"
                  className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-2.5 right-2.5 px-2 py-1 rounded-md bg-black/60 backdrop-blur-xs text-white text-[10px] font-semibold flex items-center gap-1">
                  <Maximize2 className="w-3 h-3" />
                  <span>Kattalashtirish</span>
                </span>
              </div>

              <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                5 oy davomida qadoqlash, SAT kontent tizimi va lead magnetlar orqali yetkazilgan profil.
              </p>
            </div>
          </div>
        </div>

        {/* C. Vazifa va Bajarilgan Ishlar Bloki */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Chap ustun: Vazifa */}
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

              <div className="mt-6 pt-6 border-t border-[#E2E8F0]">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-800 block mb-2.5">
                  Asosiy Yondashuv:
                </span>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  SAT imtihoni haqida yetarli ma’lumotga ega bo‘lmagan auditoriyaga grantlar va chet el universitetlariga kirish imkoniyatlarini VSL va lead magnetlar orqali bosqichma-bosqich tushuntirish.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#E2E8F0] flex items-center gap-2 text-xs font-medium text-slate-500">
              <GraduationCap className="w-4 h-4 text-[#2563EB]" />
              <span>Soha: SAT Imtihoniga Online Tayyorgarlik</span>
            </div>
          </div>

          {/* O'ng ustun: Bajarilgan Ishlar */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm">
            <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#2563EB] mb-3">
              <CheckCircle2 className="w-4 h-4" />
              <span>Bajarilgan Ishlar</span>
            </div>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 mb-5">
              Amaliy Vazifalar:
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

        {/* D. Asosiy Natijalar (4 Asosiy + 4 Qo'shimcha) */}
        <div className="mt-14 sm:mt-18">
          <div className="mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#2563EB] bg-[#EAF2FF] border border-[#2563EB]/15 mb-2">
              Erishilgan Natijalar
            </span>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
              Aniq raqamlar va ko‘rsatkichlar
            </h3>
          </div>

          {/* 4 Asosiy Metrika */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {caseData.mainMetrics.map((metric) => (
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

          {/* 4 Qo'shimcha Metrika */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            {caseData.additionalMetrics.map((metric) => (
              <div
                key={metric.id}
                className="p-4 rounded-xl bg-[#F5F8FF]/80 border border-[#E2E8F0] flex flex-col justify-between"
              >
                <div>
                  <span className="font-display font-bold text-lg text-slate-900 tabular-nums block">
                    {metric.value}
                  </span>
                  <span className="text-xs font-semibold text-slate-700 mt-1 block">
                    {metric.label}
                  </span>
                </div>
                <p className="text-[11px] text-[#64748B] mt-2 leading-relaxed">
                  {metric.context}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* E. Kontent, Jarayon va Sotuv Dalillari Gallery (5 ta rasm) */}
        <div className="mt-14 sm:mt-18">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#2563EB] bg-[#EAF2FF] border border-[#2563EB]/15 mb-2">
                Kontent, Jarayon va Sotuv Dalillari
              </span>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                Lead magnet, Reels to‘plamlari, syomka jarayoni va arizalar
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 1. Lead Magnet Reels (lidmagnit-reel-2.jpg) */}
            <div
              onClick={() =>
                openLightbox(
                  caseData.images.leadMagnetReel,
                  'ScholarHUB — Lead Magnet Reels Tahlili',
                  '“Qanday qilib $256.000 grant yutib oldim?”: 66K views, 3,6K comments va 64,205 reach.'
                )
              }
              className="group flex flex-col justify-between rounded-2xl sm:rounded-3xl bg-white border border-[#E2E8F0] p-4 shadow-sm hover:shadow-md hover:border-[#2563EB]/40 transition-all cursor-pointer"
              role="button"
              tabIndex={0}
              aria-label="Lead magnet rasmini kattalashtirib ko‘rish"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  openLightbox(
                    caseData.images.leadMagnetReel,
                    'ScholarHUB — Lead Magnet Reels Tahlili',
                    '“Qanday qilib $256.000 grant yutib oldim?”: 66K views, 3,6K comments va 64,205 reach.'
                  );
                }
              }}
            >
              <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-slate-50 mb-4">
                <img
                  src={caseData.images.leadMagnetReel}
                  alt="ScholarHUB Lead Magnet Reel"
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
                  Lead Magnet
                </span>
                <h4 className="font-display font-bold text-sm sm:text-base text-slate-900 mt-0.5">
                  $256 000 Grant VSL Videosi
                </h4>
                <p className="text-xs text-[#64748B] mt-1 line-clamp-2">
                  Izohlar orqali ChatPlace lead magneti va 1 700+ dan ziyod ariza oqimini shakllantirgan video.
                </p>
              </div>
            </div>

            {/* 2. Sotuv va Lidlar Dalili (sotuv-otzivi.jpg) */}
            <div
              onClick={() =>
                openLightbox(
                  caseData.images.salesProof,
                  'ScholarHUB — Sotuv va Lidlar Oqimi Dalili',
                  'Telegram orqali qayd etilgan natija: “kecha 175 ta vsl ni o‘zidan lid kelibdi, 46% sifatli”.'
                )
              }
              className="group flex flex-col justify-between rounded-2xl sm:rounded-3xl bg-white border border-[#E2E8F0] p-4 shadow-sm hover:shadow-md hover:border-[#2563EB]/40 transition-all cursor-pointer"
              role="button"
              tabIndex={0}
              aria-label="Sotuv dalili rasmini kattalashtirib ko‘rish"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  openLightbox(
                    caseData.images.salesProof,
                    'ScholarHUB — Sotuv va Lidlar Oqimi Dalili',
                    'Telegram orqali qayd etilgan natija: “kecha 175 ta vsl ni o‘zidan lid kelibdi, 46% sifatli”.'
                  );
                }
              }}
            >
              <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-slate-50 mb-4">
                <img
                  src={caseData.images.salesProof}
                  alt="ScholarHUB Sotuv va Lidlar Dalili"
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
                  Lidlar va Sotuv
                </span>
                <h4 className="font-display font-bold text-sm sm:text-base text-slate-900 mt-0.5">
                  Kunlik 176 ta Ariza Natijasi
                </h4>
                <p className="text-xs text-[#64748B] mt-1 line-clamp-2">
                  VSL va kontent orqali sotuv bo‘limiga yetkazilgan yuqori sifatli lidlar oqimi.
                </p>
              </div>
            </div>

            {/* 3. Syomka Jarayoni (scholar-process.jpg) */}
            <div
              onClick={() =>
                openLightbox(
                  caseData.images.process,
                  'ScholarHUB — Studiya va Production Jarayoni',
                  'Professional Godox studiya yoritishi, audio uskunalar va doska tahlili bilan ekspert syomkasi.'
                )
              }
              className="group flex flex-col justify-between rounded-2xl sm:rounded-3xl bg-white border border-[#E2E8F0] p-4 shadow-sm hover:shadow-md hover:border-[#2563EB]/40 transition-all cursor-pointer"
              role="button"
              tabIndex={0}
              aria-label="Syomka jarayoni rasmini kattalashtirib ko‘rish"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  openLightbox(
                    caseData.images.process,
                    'ScholarHUB — Studiya va Production Jarayoni',
                    'Professional Godox studiya yoritishi, audio uskunalar va doska tahlili bilan ekspert syomkasi.'
                  );
                }
              }}
            >
              <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-slate-50 mb-4">
                <img
                  src={caseData.images.process}
                  alt="ScholarHUB Studio Production Jarayoni"
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
                  Production Jarayoni
                </span>
                <h4 className="font-display font-bold text-sm sm:text-base text-slate-900 mt-0.5">
                  Studiya Syomka Tizimi
                </h4>
                <p className="text-xs text-[#64748B] mt-1 line-clamp-2">
                  SAT instruktorlari bilan doimiy formatlar va vizual production jarayonlarini boshqarish.
                </p>
              </div>
            </div>

            {/* 4. Reels Kontent To'plami #1 (scholar-visual.jpg) */}
            <div
              onClick={() =>
                openLightbox(
                  caseData.images.visual1,
                  'ScholarHUB — Reels Kontent To‘plami #1',
                  '“Men Amerikada o‘qiyman (582K views)”, “Self Study (43K)” va boshqa viral formatlar.'
                )
              }
              className="group flex flex-col justify-between rounded-2xl sm:rounded-3xl bg-white border border-[#E2E8F0] p-4 shadow-sm hover:shadow-md hover:border-[#2563EB]/40 transition-all cursor-pointer"
              role="button"
              tabIndex={0}
              aria-label="Reels to‘plami 1 rasmini kattalashtirib ko‘rish"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  openLightbox(
                    caseData.images.visual1,
                    'ScholarHUB — Reels Kontent To‘plami #1',
                    '“Men Amerikada o‘qiyman (582K views)”, “Self Study (43K)” va boshqa viral formatlar.'
                  );
                }
              }}
            >
              <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-slate-50 mb-4">
                <img
                  src={caseData.images.visual1}
                  alt="ScholarHUB Reels Kontent To‘plami 1"
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
                  Kontent To‘plami #1
                </span>
                <h4 className="font-display font-bold text-sm sm:text-base text-slate-900 mt-0.5">
                  582K Viral Reels Formati
                </h4>
                <p className="text-xs text-[#64748B] mt-1 line-clamp-2">
                  Auditoriya qiziqishini oshiruvchi trendlar va SAT imkoniyatlarini ko‘rsatuvchi kontent.
                </p>
              </div>
            </div>

            {/* 5. Reels Kontent To'plami #2 (scholar-visual-2.jpg) */}
            <div
              onClick={() =>
                openLightbox(
                  caseData.images.visual2,
                  'ScholarHUB — Reels Kontent To‘plami #2',
                  '“Turin grant yutmoqchiman (606K views)”, “Hali ham orzu qilyapsizmi (240K)” va boshqalar.'
                )
              }
              className="group flex flex-col justify-between rounded-2xl sm:rounded-3xl bg-white border border-[#E2E8F0] p-4 shadow-sm hover:shadow-md hover:border-[#2563EB]/40 transition-all cursor-pointer"
              role="button"
              tabIndex={0}
              aria-label="Reels to‘plami 2 rasmini kattalashtirib ko‘rish"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  openLightbox(
                    caseData.images.visual2,
                    'ScholarHUB — Reels Kontent To‘plami #2',
                    '“Turin grant yutmoqchiman (606K views)”, “Hali ham orzu qilyapsizmi (240K)” va boshqalar.'
                  );
                }
              }}
            >
              <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-slate-50 mb-4">
                <img
                  src={caseData.images.visual2}
                  alt="ScholarHUB Reels Kontent To‘plami 2"
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
                  Kontent To‘plami #2
                </span>
                <h4 className="font-display font-bold text-sm sm:text-base text-slate-900 mt-0.5">
                  606K Viral Rubrika
                </h4>
                <p className="text-xs text-[#64748B] mt-1 line-clamp-2">
                  Squid Game va taqqoslash formatlarini SAT tushunchasiga moslashtirish orqali keng qamrov.
                </p>
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
          aria-labelledby="scholar-lightbox-title"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-700"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-100 bg-white">
              <div>
                <h3 id="scholar-lightbox-title" className="font-display font-bold text-lg text-slate-900">
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
