import React, { useState, useEffect } from 'react';
import {
  ArrowUpRight,
  Briefcase,
  CheckCircle2,
  DollarSign,
  Eye,
  Layers,
  Maximize2,
  MessageSquare,
  RotateCcw,
  ShoppingBag,
  TrendingUp,
  Video,
  X,
  ZoomIn,
  ZoomOut,
} from 'lucide-react';
import { WATER_FILTER_CASE_DATA } from '../utils/portfolio.ts';

interface LightboxState {
  isOpen: boolean;
  src: string;
  title: string;
  subtitle: string;
}

export const WaterFilterCaseStudy: React.FC = () => {
  const [lightbox, setLightbox] = useState<LightboxState>({
    isOpen: false,
    src: '',
    title: '',
    subtitle: '',
  });

  const [zoom, setZoom] = useState<number>(1);

  const openLightbox = (src: string, title: string, subtitle: string) => {
    setLightbox({ isOpen: true, src, title, subtitle });
    setZoom(1);
  };

  const closeLightbox = () => {
    setLightbox({ isOpen: false, src: '', title: '', subtitle: '' });
    setZoom(1);
  };

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(2.5, Number((prev + 0.25).toFixed(2))));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(0.5, Number((prev - 0.25).toFixed(2))));
  };

  const handleResetZoom = () => {
    setZoom(1);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightbox.isOpen) return;
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === '+' || e.key === '=') {
        handleZoomIn();
      } else if (e.key === '-') {
        handleZoomOut();
      } else if (e.key === '0') {
        handleResetZoom();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightbox.isOpen]);

  const caseData = WATER_FILTER_CASE_DATA;

  return (
    <section
      id="suv-filtri"
      aria-label="Suv filtri loyihasi Case Study"
      className="relative scroll-mt-20 sm:scroll-mt-24 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-[#E2E8F0]"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* 1. LOYIHA HAQIDA SARLAVHA VA SMM + TARGET ADS YO'NALISHI */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-[#E2E8F0]">
          <div>
            <div className="flex flex-wrap items-center gap-2.5 mb-3.5 text-xs font-extrabold text-[#2563EB]">
              <span className="px-2.5 py-1 rounded-md bg-[#EAF2FF] border border-[#2563EB]/30 uppercase tracking-wider">
                SMM + TARGET ADS
              </span>
              <span aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1.5 text-[#111827] font-bold">
                <Layers className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>Yo‘nalish: {caseData.field}</span>
              </span>
            </div>

            <div className="flex items-center gap-4 sm:gap-5 mt-2">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#EAF2FF] text-[#2563EB] flex flex-col items-center justify-center border border-[#E2E8F0] shrink-0">
                <span className="font-display font-black text-2xl sm:text-3xl tracking-tight leading-none">
                  SF
                </span>
                <span className="text-[8px] font-bold text-[#111827] uppercase tracking-widest mt-1">
                  SMM & ADS
                </span>
              </div>
              <div>
                <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[2.6rem] text-[#111827] tracking-tight leading-none">
                  {caseData.title}
                </h2>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2.5 text-xs sm:text-sm font-bold text-[#2563EB]">
                  <span className="inline-flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>Mening rolim: {caseData.role}</span>
                  </span>
                </div>
              </div>
            </div>

            <p className="mt-4 text-base sm:text-lg text-[#111827] font-medium max-w-2xl leading-relaxed">
              {caseData.shortDesc}
            </p>
          </div>

          <div className="flex flex-col gap-2 shrink-0 bg-[#F5F8FF] p-4 sm:p-5 rounded-2xl border border-[#E2E8F0] max-w-sm">
            <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#2563EB]">
              <TrendingUp className="w-4 h-4 shrink-0" />
              <span>Biznes Natija va Sotuvlar Fokusi</span>
            </div>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Offer, video-kontent hamda Target reklamasining yagona tizim sifatida boshqarilishi natijasida ikkinchi oyda murojaatlar va sotuvlar soni sezilarli darajada oshdi.
            </p>
          </div>
        </div>

        {/* 2. MARKAZIY NATIJALAR BLOKI: 1-OY VA 2-OY SOTUVLAR, MUROJAATLAR VA XARAJATLAR TAQQOSLASHI */}
        <div className="mt-10 sm:mt-12 p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#F5F8FF] border-2 border-[#2563EB]">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-6 border-b border-[#E2E8F0]">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#2563EB] block">
                Asosiy Biznes Natijalar · Ikki Oylik Dinamika
              </span>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#111827] mt-1">
                1-oy va 2-oy sotuvlar, murojaatlar hamda reklama xarajatlari
              </h3>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#EAF2FF] text-[#2563EB] text-xs sm:text-sm font-extrabold">
              <ArrowUpRight className="w-4 h-4 shrink-0" />
              <span>Sotuvlar: 102 → 138 ta | Murojaatlar: 693 → 817 ta</span>
            </div>
          </div>

          {/* 1-oy va 2-oy alohida katta raqamli kartalar */}
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* 1-OY NATIJALARI */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E2E8F0] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 pb-4 border-b border-[#E2E8F0]">
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#64748B] block">
                      Birinchi oy ko‘rsatkichlari
                    </span>
                    <h4 className="font-display font-extrabold text-xl sm:text-2xl text-[#111827] mt-0.5">
                      1-oy natijalari
                    </h4>
                  </div>
                  <span className="px-3 py-1 rounded-lg bg-[#F5F8FF] border border-[#E2E8F0] text-xs font-bold text-[#111827]">
                    1-oy
                  </span>
                </div>

                {/* Sotuvlar — Asosiy urg'u */}
                <div className="mt-5 p-4 sm:p-5 rounded-2xl bg-[#F5F8FF] border border-[#E2E8F0]">
                  <div className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#2563EB]">
                    <ShoppingBag className="w-4 h-4" />
                    <span>Real sotuvlar soni</span>
                  </div>
                  <div className="font-display font-extrabold text-3xl sm:text-4xl text-[#111827] tracking-tight mt-1">
                    {caseData.month1.sales}
                  </div>
                </div>

                {/* Murojaatlar va Reklama xarajati alohida */}
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-[#F5F8FF] border border-[#E2E8F0]">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#64748B]">
                      <MessageSquare className="w-3.5 h-3.5 text-[#2563EB]" />
                      <span>Murojaatlar soni</span>
                    </div>
                    <div className="font-display font-extrabold text-2xl sm:text-3xl text-[#111827] mt-1">
                      {caseData.month1.inquiries}
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#F5F8FF] border border-[#E2E8F0]">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#64748B]">
                      <DollarSign className="w-3.5 h-3.5 text-[#2563EB]" />
                      <span>Reklama xarajati</span>
                    </div>
                    <div className="font-display font-extrabold text-2xl sm:text-3xl text-[#111827] mt-1">
                      {caseData.month1.spend}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2-OY NATIJALARI (O'sish urg'usi bilan) */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white border-2 border-[#2563EB] flex flex-col justify-between shadow-xs">
              <div>
                <div className="flex items-center justify-between gap-2 pb-4 border-b border-[#E2E8F0]">
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#2563EB] block">
                      Ikkinchi oy ko‘rsatkichlari
                    </span>
                    <h4 className="font-display font-extrabold text-xl sm:text-2xl text-[#111827] mt-0.5">
                      2-oy natijalari
                    </h4>
                  </div>
                  <span className="px-3 py-1 rounded-lg bg-[#2563EB] text-xs font-bold text-white">
                    2-oy · Sotuv va murojaatlar o‘sishi
                  </span>
                </div>

                {/* Sotuvlar — Eng kuchli vizual urg'u */}
                <div className="mt-5 p-4 sm:p-5 rounded-2xl bg-[#EAF2FF]/70 border-2 border-[#2563EB]">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#2563EB]">
                      <ShoppingBag className="w-4 h-4" />
                      <span>Real sotuvlar soni</span>
                    </div>
                    <span className="text-xs font-extrabold text-[#2563EB]">
                      1-oyga nisbatan +36 ta ko‘p
                    </span>
                  </div>
                  <div className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#2563EB] tracking-tight mt-1">
                    {caseData.month2.sales}
                  </div>
                </div>

                {/* Murojaatlar va Reklama xarajati alohida */}
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-[#F5F8FF] border border-[#2563EB]/30">
                    <div className="flex items-center justify-between gap-1 text-xs font-bold text-[#64748B]">
                      <span className="inline-flex items-center gap-1.5">
                        <MessageSquare className="w-3.5 h-3.5 text-[#2563EB]" />
                        <span>Murojaatlar</span>
                      </span>
                      <span className="text-[11px] font-extrabold text-[#2563EB]">+124 ta</span>
                    </div>
                    <div className="font-display font-extrabold text-2xl sm:text-3xl text-[#111827] mt-1">
                      {caseData.month2.inquiries}
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#F5F8FF] border border-[#E2E8F0]">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#64748B]">
                      <DollarSign className="w-3.5 h-3.5 text-[#2563EB]" />
                      <span>Reklama xarajati</span>
                    </div>
                    <div className="font-display font-extrabold text-2xl sm:text-3xl text-[#111827] mt-1">
                      {caseData.month2.spend}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Vizual o'sish taqqoslashi (Sotuvlar va Murojaatlar) + Qo'shimcha Reels natijasi */}
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Ikki oylik qiyosiy jadval va vizual o'sish ko'rsatkichi */}
            <div className="lg:col-span-8 p-5 sm:p-6 rounded-2xl bg-white border border-[#E2E8F0]">
              <h4 className="font-display font-bold text-base sm:text-lg text-[#111827] mb-3">
                Ikki oylik natijalar qiyosiy taqqoslashi
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse rounded-xl overflow-hidden border border-[#E2E8F0]">
                  <thead>
                    <tr className="bg-[#F5F8FF] border-b border-[#E2E8F0] text-xs font-extrabold uppercase tracking-wider text-[#64748B]">
                      <th className="py-3 px-4">Ko‘rsatkich</th>
                      <th className="py-3 px-4 text-right">1-oy</th>
                      <th className="py-3 px-4 text-right text-[#2563EB]">2-oy</th>
                      <th className="py-3 px-4 text-right">Farq / O‘sish</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E2E8F0] text-xs sm:text-sm">
                    {caseData.comparisonRows.map((row) => (
                      <tr
                        key={row.metric}
                        className={
                          row.isHighlighted
                            ? 'bg-[#EAF2FF]/45 font-bold'
                            : 'bg-white font-semibold'
                        }
                      >
                        <td className="py-3.5 px-4 text-[#111827]">{row.metric}</td>
                        <td className="py-3.5 px-4 text-right text-[#111827]">{row.month1}</td>
                        <td
                          className={`py-3.5 px-4 text-right ${
                            row.isHighlighted
                              ? 'text-[#2563EB] font-display font-extrabold text-sm sm:text-base'
                              : 'text-[#111827]'
                          }`}
                        >
                          {row.month2}
                        </td>
                        <td className="py-3.5 px-4 text-right text-[#2563EB] font-bold">
                          {row.growthNote}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Qo'shimcha natija: 100K ga yaqin ko'rish */}
            <div className="lg:col-span-4 p-5 sm:p-6 rounded-2xl bg-white border-2 border-[#2563EB]/35 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#2563EB] mb-2">
                  <Eye className="w-4 h-4 shrink-0" />
                  <span>Qo‘shimcha Kontent Natijasi</span>
                </div>
                <div className="font-display font-extrabold text-2xl sm:text-3xl text-[#2563EB] tracking-tight">
                  {caseData.additionalResultValue}
                </div>
                <p className="mt-2 text-xs sm:text-sm font-bold text-[#111827]">
                  {caseData.additionalResultLabel}
                </p>
              </div>
              <p className="mt-4 pt-3 border-t border-[#E2E8F0] text-xs text-[#64748B] leading-relaxed">
                Auditoriya muammolariga qaratilgan Reels videolaridan biri organik va reklama qamrovi orqali 100K ga yaqin (81,7 ming+) ko‘rish va 3 356 ta layk qayd etdi.
              </p>
            </div>
          </div>
        </div>

        {/* 3. BAJARILGAN ISHLAR (6 TA ASOSIY YO'NALISH) */}
        <div className="mt-10 sm:mt-12 p-6 sm:p-8 rounded-3xl bg-[#F5F8FF] border border-[#E2E8F0]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#2563EB] mb-1">
                <CheckCircle2 className="w-4 h-4" />
                <span>SMM va Target Jarayonlari Nazorati</span>
              </div>
              <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#111827]">
                Bajarilgan ishlar
              </h3>
            </div>
            <span className="text-xs sm:text-sm font-semibold text-[#64748B]">
              Kontent va Target reklamasining uzviy integratsiyasi
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {caseData.completedTasks.map((task, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 sm:p-5 rounded-2xl bg-white border border-[#E2E8F0]"
              >
                <span className="w-6 h-6 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#111827] leading-snug">
                  {task}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 4. ORIGINAL INSTAGRAM VA REELS SKRINSHOTLARI GALEREYASI (water-profile.png, water-reel-result.png, water-reel.png) */}
        <div className="mt-12 sm:mt-16">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#2563EB] mb-1">
                <Video className="w-4 h-4" />
                <span>Original Vizual Dalillar Galereyasi</span>
              </div>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#111827] tracking-tight">
                Instagram profil, Reels kontenti va ko‘rishlar natijasi
              </h3>
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#2563EB]">
              <ZoomIn className="w-4 h-4" />
              <span>Skrinshotlarni to‘liq o‘lchamda kattalashtirib ko‘rish uchun ustiga bosing</span>
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {/* 1. water-profile.png — Instagram profil va kontent rubrikalari */}
            <div
              onClick={() =>
                openLightbox(
                  caseData.images.profile,
                  'Suv filtri loyihasi — Instagram sahifasi va kontent rubrikalari',
                  'Mahsulot afzalliklari, mijozlar fikrlari va muammoli savollarga asoslangan kontent (water-profile.png).'
                )
              }
              className="group p-5 sm:p-6 rounded-3xl bg-[#F5F8FF] border border-[#E2E8F0] hover:border-[#2563EB] transition-all cursor-pointer flex flex-col justify-between"
              role="button"
              tabIndex={0}
              aria-label="Suv filtri loyihasi Instagram profil skrinshotini kattalashtirib ko‘rish (water-profile.png)"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openLightbox(
                    caseData.images.profile,
                    'Suv filtri loyihasi — Instagram sahifasi va kontent rubrikalari',
                    'Mahsulot afzalliklari, mijozlar fikrlari va muammoli savollarga asoslangan kontent (water-profile.png).'
                  );
                }
              }}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#2563EB] block">
                      01 · Kontent va Rubrikalar
                    </span>
                    <h4 className="font-display font-extrabold text-base sm:text-lg text-[#111827] mt-0.5">
                      Instagram profil ko‘rinishi
                    </h4>
                  </div>
                  <span className="px-2.5 py-1 rounded-lg bg-[#EAF2FF] text-[#2563EB] text-xs font-bold flex items-center gap-1 shrink-0">
                    <Maximize2 className="w-3 h-3" />
                    <span>Kattalashtirish</span>
                  </span>
                </div>

                <div className="relative w-full rounded-2xl overflow-hidden bg-white border border-[#E2E8F0] flex items-center justify-center p-3">
                  <img
                    src={caseData.images.profile}
                    alt="Suv filtri loyihasi — Instagram profil va kontent rubrikalari (water-profile.png)"
                    className="w-full h-auto max-h-[540px] object-contain rounded-xl group-hover:scale-[1.01] transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#64748B] mt-3.5 leading-relaxed">
                Mahsulot xususiyatlari, modellar farqi va mijozlar fikrlari asosida qadoqlangan sahifa lentasi (<span className="font-mono text-xs">water-profile.png</span>).
              </p>
            </div>

            {/* 2. water-reel-result.png — Reels 100K ga yaqin ko'rish natijasi */}
            <div
              onClick={() =>
                openLightbox(
                  caseData.images.reelResult,
                  'Suv filtri loyihasi — Reels ko‘rishlar natijasi',
                  '100K ga yaqin (81,7 ming+) ko‘rish va 3 356 ta layk qayd etgan Reels statistikasi (water-reel-result.png).'
                )
              }
              className="group p-5 sm:p-6 rounded-3xl bg-[#F5F8FF] border-2 border-[#2563EB]/35 hover:border-[#2563EB] transition-all cursor-pointer flex flex-col justify-between"
              role="button"
              tabIndex={0}
              aria-label="Suv filtri loyihasi Reels natijasi skrinshotini kattalashtirib ko‘rish (water-reel-result.png)"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openLightbox(
                    caseData.images.reelResult,
                    'Suv filtri loyihasi — Reels ko‘rishlar natijasi',
                    '100K ga yaqin (81,7 ming+) ko‘rish va 3 356 ta layk qayd etgan Reels statistikasi (water-reel-result.png).'
                  );
                }
              }}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#2563EB] block">
                      02 · 100K Ga Yaqin Ko‘rish
                    </span>
                    <h4 className="font-display font-extrabold text-base sm:text-lg text-[#111827] mt-0.5">
                      Reels natijasi skrinshoti
                    </h4>
                  </div>
                  <span className="px-2.5 py-1 rounded-lg bg-[#EAF2FF] text-[#2563EB] text-xs font-bold flex items-center gap-1 shrink-0">
                    <Maximize2 className="w-3 h-3" />
                    <span>Kattalashtirish</span>
                  </span>
                </div>

                <div className="relative w-full rounded-2xl overflow-hidden bg-white border border-[#E2E8F0] flex items-center justify-center p-3">
                  <img
                    src={caseData.images.reelResult}
                    alt="Suv filtri loyihasi — Reels 100K ga yaqin ko‘rish natijasi (water-reel-result.png)"
                    className="w-full h-auto max-h-[540px] object-contain rounded-xl group-hover:scale-[1.01] transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#64748B] mt-3.5 leading-relaxed">
                Reels videolaridan biri qayd etgan <strong className="text-[#111827]">81,7 ming+ (100K ga yaqin) ko‘rish</strong> va <strong className="text-[#111827]">3 356 ta layk</strong> ko‘rsatkichi (<span className="font-mono text-xs">water-reel-result.png</span>).
              </p>
            </div>

            {/* 3. water-reel.png — Auditoriya muammolariga qaratilgan Reels */}
            <div
              onClick={() =>
                openLightbox(
                  caseData.images.reel,
                  'Suv filtri loyihasi — Auditoriya muammolariga qaratilgan Reels',
                  'Kundalik suv muammolari va yechimiga bag‘ishlangan Reels video lavhasi (water-reel.png).'
                )
              }
              className="group p-5 sm:p-6 rounded-3xl bg-[#F5F8FF] border border-[#E2E8F0] hover:border-[#2563EB] transition-all cursor-pointer flex flex-col justify-between"
              role="button"
              tabIndex={0}
              aria-label="Suv filtri loyihasi Reels video skrinshotini kattalashtirib ko‘rish (water-reel.png)"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openLightbox(
                    caseData.images.reel,
                    'Suv filtri loyihasi — Auditoriya muammolariga qaratilgan Reels',
                    'Kundalik suv muammolari va yechimiga bag‘ishlangan Reels video lavhasi (water-reel.png).'
                  );
                }
              }}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#2563EB] block">
                      03 · Reels Kreativi
                    </span>
                    <h4 className="font-display font-extrabold text-base sm:text-lg text-[#111827] mt-0.5">
                      Auditoriya muammosiga qaratilgan Reels
                    </h4>
                  </div>
                  <span className="px-2.5 py-1 rounded-lg bg-[#EAF2FF] text-[#2563EB] text-xs font-bold flex items-center gap-1 shrink-0">
                    <Maximize2 className="w-3 h-3" />
                    <span>Kattalashtirish</span>
                  </span>
                </div>

                <div className="relative w-full rounded-2xl overflow-hidden bg-white border border-[#E2E8F0] flex items-center justify-center p-3">
                  <img
                    src={caseData.images.reel}
                    alt="Suv filtri loyihasi — auditoriya muammolariga qaratilgan Reels (water-reel.png)"
                    className="w-full h-auto max-h-[540px] object-contain rounded-xl group-hover:scale-[1.01] transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#64748B] mt-3.5 leading-relaxed">
                Auditoriyaning kundalik og‘riqlari va suv sifatiga oid muammolarini yorituvchi Reels video formati (<span className="font-mono text-xs">water-reel.png</span>).
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* INTERAKTIV ZOOM LIGHTBOX MODAL */}
      {lightbox.isOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-xs flex items-center justify-center p-2 sm:p-6"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.title}
        >
          <div
            className="relative max-w-5xl w-full bg-white rounded-3xl overflow-hidden border border-[#E2E8F0] shadow-2xl flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header + Zoom Controls */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-4 sm:px-6 py-4 border-b border-[#E2E8F0] bg-white">
              <div>
                <h3 className="font-display font-bold text-base sm:text-lg text-[#111827]">
                  {lightbox.title}
                </h3>
                <p className="text-xs text-[#64748B] mt-0.5">{lightbox.subtitle}</p>
              </div>

              <div className="flex flex-wrap items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={handleZoomOut}
                  disabled={zoom <= 0.5}
                  className="px-2.5 py-1.5 rounded-xl bg-[#F5F8FF] border border-[#E2E8F0] text-[#111827] hover:bg-[#EAF2FF] hover:text-[#2563EB] disabled:opacity-40 flex items-center gap-1 text-xs font-bold transition-colors cursor-pointer"
                  aria-label="Kichraytirish"
                >
                  <ZoomOut className="w-4 h-4" />
                  <span>Kichraytirish</span>
                </button>

                <span
                  className="px-2.5 py-1.5 rounded-xl bg-[#EAF2FF] text-[#2563EB] text-xs font-extrabold min-w-[58px] text-center"
                  aria-live="polite"
                >
                  {Math.round(zoom * 100)}%
                </span>

                <button
                  type="button"
                  onClick={handleZoomIn}
                  disabled={zoom >= 2.5}
                  className="px-2.5 py-1.5 rounded-xl bg-[#F5F8FF] border border-[#E2E8F0] text-[#111827] hover:bg-[#EAF2FF] hover:text-[#2563EB] disabled:opacity-40 flex items-center gap-1 text-xs font-bold transition-colors cursor-pointer"
                  aria-label="Kattalashtirish"
                >
                  <ZoomIn className="w-4 h-4" />
                  <span>Kattalashtirish</span>
                </button>

                <button
                  type="button"
                  onClick={handleResetZoom}
                  className="px-2.5 py-1.5 rounded-xl bg-[#F5F8FF] border border-[#E2E8F0] text-[#111827] hover:bg-[#EAF2FF] hover:text-[#2563EB] flex items-center gap-1 text-xs font-bold transition-colors cursor-pointer"
                  aria-label="Asl o‘lchamga qaytarish"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Asl o‘lcham</span>
                </button>

                <button
                  type="button"
                  onClick={closeLightbox}
                  className="w-9 h-9 rounded-xl bg-[#F5F8FF] border border-[#E2E8F0] text-[#111827] hover:bg-[#EAF2FF] hover:text-[#2563EB] flex items-center justify-center transition-colors cursor-pointer ml-1"
                  aria-label="Modalni yopish"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Image Viewport */}
            <div className="p-4 sm:p-6 bg-[#F8FAFC] overflow-auto flex-1">
              <div
                className="mx-auto flex items-center justify-center"
                style={{ width: `${Math.round(480 * zoom)}px` }}
              >
                <img
                  src={lightbox.src}
                  alt={lightbox.title}
                  className="w-full h-auto block rounded-xl bg-white p-2 border border-[#E2E8F0] shadow-sm select-none"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
