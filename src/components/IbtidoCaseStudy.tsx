import React, { useState, useEffect } from 'react';
import {
  ArrowDownRight,
  BarChart3,
  CheckCircle2,
  Crosshair,
  DollarSign,
  Info,
  Maximize2,
  RotateCcw,
  Users,
  X,
  ZoomIn,
  ZoomOut,
} from 'lucide-react';
import { IBTIDO_CASE_DATA } from '../utils/portfolio.ts';

interface LightboxState {
  isOpen: boolean;
  src: string;
  title: string;
  subtitle: string;
  isWideAdsScreenshot: boolean;
  naturalWidth: number;
}

export const IbtidoCaseStudy: React.FC = () => {
  const [lightbox, setLightbox] = useState<LightboxState>({
    isOpen: false,
    src: '',
    title: '',
    subtitle: '',
    isWideAdsScreenshot: false,
    naturalWidth: 1200,
  });

  const [zoom, setZoom] = useState<number>(1);

  const openLightbox = (
    src: string,
    title: string,
    subtitle: string,
    isWideAdsScreenshot = false,
    naturalWidth = 1200
  ) => {
    setLightbox({
      isOpen: true,
      src,
      title,
      subtitle,
      isWideAdsScreenshot,
      naturalWidth,
    });
    setZoom(1);
  };

  const closeLightbox = () => {
    setLightbox({
      isOpen: false,
      src: '',
      title: '',
      subtitle: '',
      isWideAdsScreenshot: false,
      naturalWidth: 1200,
    });
    setZoom(1);
  };

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(3, Number((prev + 0.25).toFixed(2))));
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

  const caseData = IBTIDO_CASE_DATA;

  return (
    <section
      id="ibtido-talim"
      aria-label="Ibtido Ta’lim Target Ads Case Study"
      className="relative scroll-mt-20 sm:scroll-mt-24 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#F5F8FF]/70 border-t border-[#E2E8F0]"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* 1. LOYIHA HAQIDA SARLAVHA VA TARGET ADS / LEAD GENERATION POZITSIYASI */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-[#E2E8F0]">
          <div>
            <div className="flex flex-wrap items-center gap-2.5 mb-3.5 text-xs font-extrabold text-[#2563EB]">
              <span className="px-2.5 py-1 rounded-md bg-[#EAF2FF] border border-[#2563EB]/30 uppercase tracking-wider">
                {caseData.tag}
              </span>
              <span aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1.5 text-[#111827] font-bold">
                <Crosshair className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>Mening rolim: {caseData.role}</span>
              </span>
            </div>

            <div className="flex items-center gap-4 sm:gap-5 mt-2">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#EAF2FF] text-[#2563EB] flex flex-col items-center justify-center border border-[#E2E8F0] shrink-0">
                <span className="font-display font-black text-2xl sm:text-3xl tracking-tight leading-none">
                  IT
                </span>
                <span className="text-[8px] font-bold text-[#111827] uppercase tracking-widest mt-1">
                  LEAD GEN
                </span>
              </div>
              <div>
                <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[2.6rem] text-[#111827] tracking-tight leading-none">
                  {caseData.title}
                </h2>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2.5 text-xs sm:text-sm font-bold text-[#2563EB]">
                  <span>Yo‘nalish: {caseData.field}</span>
                  <span className="text-[#E2E8F0]" aria-hidden="true">|</span>
                  <span className="text-[#111827] font-semibold">
                    Rol: {caseData.role}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 max-w-2xl space-y-2">
              <p className="text-sm sm:text-base font-bold text-[#111827]">
                <span className="text-[#2563EB]">Loyiha holati:</span> {caseData.projectState}
              </p>
              <p className="text-sm sm:text-base text-[#111827]/90 leading-relaxed">
                {caseData.contextSummary}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2 shrink-0 bg-white p-4 sm:p-5 rounded-2xl border border-[#E2E8F0] max-w-sm">
            <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#2563EB]">
              <BarChart3 className="w-4 h-4 shrink-0" />
              <span>Lead Acquisition & CPL Optimizatsiyasi</span>
            </div>
            <p className="text-xs text-[#64748B] leading-relaxed">
              SMM xizmatiga yetarli budjet bo‘lmagani sababli barcha e’tibor Target reklama orqali arzon va maqsadli leadlar jalb qilishga hamda birinchi sotuvlarni yo‘lga qo‘yishga qaratildi.
            </p>
          </div>
        </div>

        {/* 2. CPL OPTIMIZATSIYASI VIZUAL URG'USI VA IKKI OYLIK KO'RSATKICHLAR TAQQOSLASHI */}
        <div className="mt-10 sm:mt-12 p-6 sm:p-8 lg:p-10 rounded-3xl bg-white border-2 border-[#2563EB]">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-6 border-b border-[#E2E8F0]">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#2563EB] block">
                Asosiy Performance Ko‘rsatkichi · CPL Pasayishi
              </span>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#111827] mt-1">
                1-oy va 2-oy Target reklama natijalari
              </h3>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#EAF2FF] text-[#2563EB] text-xs sm:text-sm font-extrabold">
              <ArrowDownRight className="w-4 h-4 shrink-0" />
              <span>CPL: $0.22 → $0.05–$0.06 (lead narxi arzonlashishi)</span>
            </div>
          </div>

          {/* CPL Vizual Grafik / Bar Taqqoslash Bloki */}
          <div className="mt-6 p-5 sm:p-6 rounded-2xl bg-[#F5F8FF] border border-[#E2E8F0]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#2563EB]">
                Bitta lead narxi (CPL) vizual taqqoslashi
              </span>
              <span className="text-xs font-semibold text-[#64748B]">
                Past ko‘rsatkich = yuqori xarajat samaradorligi
              </span>
            </div>

            <div className="space-y-4">
              {/* 1-oy CPL Bar */}
              <div>
                <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-[#111827] mb-1.5">
                  <span>1-oy: Boshlang‘ich kampaniya CPL ko‘rsatkichi</span>
                  <span className="font-display font-extrabold text-base sm:text-lg text-[#111827]">
                    $0.22 CPL
                  </span>
                </div>
                <div className="w-full h-4 rounded-lg bg-[#E2E8F0] overflow-hidden">
                  <div
                    className="h-full bg-[#64748B] rounded-lg"
                    style={{ width: '100%' }}
                    aria-label="1-oy CPL $0.22"
                  />
                </div>
              </div>

              {/* 2-oy CPL Bar */}
              <div>
                <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-[#2563EB] mb-1.5">
                  <span>2-oy: Optimizatsiyadan keyingi CPL ko‘rsatkichi</span>
                  <span className="font-display font-extrabold text-lg sm:text-xl text-[#2563EB]">
                    $0.05–$0.06 CPL
                  </span>
                </div>
                <div className="w-full h-4 rounded-lg bg-[#E2E8F0] overflow-hidden">
                  <div
                    className="h-full bg-[#2563EB] rounded-lg"
                    style={{ width: '25%' }}
                    aria-label="2-oy CPL $0.05–$0.06"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Desktop ekranida ikki ustunli, mobil qurilmada vertikal 1-oy va 2-oy natijalari */}
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* 1-OY NATIJALARI KARTASI */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#F5F8FF] border border-[#E2E8F0] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 pb-4 border-b border-[#E2E8F0]">
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#64748B] block">
                      Birinchi bosqich
                    </span>
                    <h4 className="font-display font-extrabold text-xl sm:text-2xl text-[#111827] mt-0.5">
                      Birinchi oy natijalari
                    </h4>
                  </div>
                  <span className="px-3 py-1 rounded-lg bg-white border border-[#E2E8F0] text-xs font-bold text-[#111827]">
                    1-oy
                  </span>
                </div>

                {/* CPL — Asosiy urg'u */}
                <div className="mt-5 p-4 sm:p-5 rounded-2xl bg-white border border-[#E2E8F0]">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#64748B] block">
                    Bitta lead narxi (CPL)
                  </span>
                  <div className="font-display font-extrabold text-3xl sm:text-4xl text-[#111827] tracking-tight mt-1">
                    {caseData.month1.cpl}
                  </div>
                </div>

                {/* Leadlar va Reklama xarajati alohida */}
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white border border-[#E2E8F0]">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#64748B]">
                      <Users className="w-3.5 h-3.5 text-[#2563EB]" />
                      <span>Jalb qilingan leadlar</span>
                    </div>
                    <div className="font-display font-extrabold text-2xl sm:text-3xl text-[#111827] mt-1">
                      {caseData.month1.leads}
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-[#E2E8F0]">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#64748B]">
                      <DollarSign className="w-3.5 h-3.5 text-[#2563EB]" />
                      <span>Reklama xarajati (taxminiy)</span>
                    </div>
                    <div className="font-display font-extrabold text-xl sm:text-2xl text-[#111827] mt-1">
                      {caseData.month1.spend}
                    </div>
                    <span className="text-[11px] font-medium text-[#64748B] block mt-0.5">
                      {caseData.month1.spendNote}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#E2E8F0] flex items-center gap-2 text-xs text-[#64748B]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                <span>Reklama noldan yo‘lga qo‘yilib, birinchi mijozlar va sotuvlar jalb qilindi.</span>
              </div>
            </div>

            {/* 2-OY NATIJALARI KARTASI */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#EAF2FF]/60 border-2 border-[#2563EB] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 pb-4 border-b border-[#2563EB]/20">
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#2563EB] block">
                      Optimizatsiya bosqichi
                    </span>
                    <h4 className="font-display font-extrabold text-xl sm:text-2xl text-[#111827] mt-0.5">
                      Ikkinchi oy natijalari
                    </h4>
                  </div>
                  <span className="px-3 py-1 rounded-lg bg-[#2563EB] text-xs font-bold text-white">
                    2-oy · Eng past CPL
                  </span>
                </div>

                {/* CPL — Eng kuchli vizual urg'u */}
                <div className="mt-5 p-4 sm:p-5 rounded-2xl bg-white border-2 border-[#2563EB]">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#2563EB] block">
                      Bitta lead narxi (CPL)
                    </span>
                    <span className="text-[11px] font-bold text-[#2563EB]">
                      1-oyga nisbatan ancha past
                    </span>
                  </div>
                  <div className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#2563EB] tracking-tight mt-1">
                    {caseData.month2.cpl}
                  </div>
                </div>

                {/* Leadlar va Reklama xarajati alohida */}
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white border border-[#E2E8F0]">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#64748B]">
                      <Users className="w-3.5 h-3.5 text-[#2563EB]" />
                      <span>Jalb qilingan leadlar</span>
                    </div>
                    <div className="font-display font-extrabold text-2xl sm:text-3xl text-[#111827] mt-1">
                      {caseData.month2.leads}
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-[#E2E8F0]">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#64748B]">
                      <DollarSign className="w-3.5 h-3.5 text-[#2563EB]" />
                      <span>Reklama xarajati</span>
                    </div>
                    <div className="font-display font-extrabold text-xl sm:text-2xl text-[#111827] mt-1">
                      {caseData.month2.spend}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#2563EB]/20 flex items-center gap-2 text-xs text-[#111827] font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                <span>Minimal budjet ($8.94) bilan bitta lead narxi $0.05–$0.06 gacha tushirildi.</span>
              </div>
            </div>
          </div>

          {/* 3. IKKI OYLIK TAQQOSLASH JADVALI VA HALOL IZOH */}
          <div className="mt-8 pt-8 border-t border-[#E2E8F0] grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7 overflow-x-auto">
              <h4 className="font-display font-bold text-base sm:text-lg text-[#111827] mb-3">
                Ikki oylik ko‘rsatkichlar taqqoslashi
              </h4>
              <table className="w-full text-left border-collapse rounded-2xl overflow-hidden border border-[#E2E8F0]">
                <thead>
                  <tr className="bg-[#F5F8FF] border-b border-[#E2E8F0] text-xs font-extrabold uppercase tracking-wider text-[#64748B]">
                    <th className="py-3.5 px-4">Ko‘rsatkich</th>
                    <th className="py-3.5 px-4 text-right">1-oy</th>
                    <th className="py-3.5 px-4 text-right text-[#2563EB]">2-oy</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E2E8F0] text-sm">
                  {caseData.comparisonTable.map((row) => (
                    <tr
                      key={row.metric}
                      className={
                        row.isHighlighted
                          ? 'bg-[#EAF2FF]/70 font-extrabold'
                          : 'bg-white font-semibold'
                      }
                    >
                      <td className="py-3.5 px-4 text-[#111827]">
                        {row.metric}
                        {row.isHighlighted && (
                          <span className="ml-2 text-[11px] font-bold text-[#2563EB]">
                            (Asosiy o‘sish samaradorligi)
                          </span>
                        )}
                      </td>
                      <td className="py-3.5 px-4 text-right text-[#111827]">
                        {row.month1}
                      </td>
                      <td
                        className={`py-3.5 px-4 text-right ${
                          row.isHighlighted
                            ? 'text-[#2563EB] font-display text-base sm:text-lg font-extrabold'
                            : 'text-[#111827]'
                        }`}
                      >
                        {row.month2}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="lg:col-span-5 p-5 sm:p-6 rounded-2xl bg-[#F5F8FF] border border-[#E2E8F0]">
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#2563EB] mb-2">
                <Info className="w-4 h-4 shrink-0" />
                <span>Muhim Tahliliy Izoh</span>
              </div>
              <p className="text-xs sm:text-sm text-[#111827] font-medium leading-relaxed">
                {caseData.honestComparisonNote}
              </p>
            </div>
          </div>
        </div>

        {/* 4. KENG FORMATLI ADS MANAGER SKRINSHOTLARI VA LOYIHA PROFILI */}
        <div className="mt-12 sm:mt-16">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#2563EB] block mb-1">
                Tasdiqlangan Reklama Kabineti Dalillari va Loyiha Konteksti
              </span>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#111827] tracking-tight">
                Ads Manager statistikasi va loyiha profili
              </h3>
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#2563EB]">
              <ZoomIn className="w-4 h-4" />
              <span>Reklama natijalarini kattalashtirib ko‘rish uchun skrinshot ustiga bosing</span>
            </span>
          </div>

          {/* KENG FORMATLI ADS MANAGER SKRINSHOTLARI (100% kenglikda, siqilmasdan va kesilmasdan) */}
          <div className="flex flex-col gap-8">
            {/* 1. ibtido-ads.png — Asosiy reklama natijalari (To'liq 12 ustun kenglikda) */}
            <div
              onClick={() =>
                openLightbox(
                  caseData.images.adsMain,
                  'Ibtido Ta’lim — Asosiy reklama natijalari (Ads Manager)',
                  '1-oy (755 lead, $0.22 CPL, $169.30 xarajat) va 2-oy (144 lead, $0.06 CPL, $8.94 xarajat) ko‘rsatkichlari (ibtido-ads.png).',
                  true,
                  1605
                )
              }
              className="group p-5 sm:p-7 rounded-3xl bg-white border-2 border-[#2563EB]/35 hover:border-[#2563EB] transition-all cursor-pointer flex flex-col justify-between shadow-xs"
              role="button"
              tabIndex={0}
              aria-label="Reklama natijalarini kattalashtirib ko‘rish: Ibtido Ta’lim asosiy reklama natijalari (ibtido-ads.png)"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openLightbox(
                    caseData.images.adsMain,
                    'Ibtido Ta’lim — Asosiy reklama natijalari (Ads Manager)',
                    '1-oy (755 lead, $0.22 CPL, $169.30 xarajat) va 2-oy (144 lead, $0.06 CPL, $8.94 xarajat) ko‘rsatkichlari (ibtido-ads.png).',
                    true,
                    1605
                  );
                }
              }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#2563EB] block">
                    Asosiy Reklama Natijalari · Ads Manager (ibtido-ads.png)
                  </span>
                  <h4 className="font-display font-extrabold text-lg sm:text-xl text-[#111827] mt-0.5">
                    1-oy ($0.22 CPL · 755 lead) va 2-oy ($0.06 CPL · 144 lead) kampaniyalari
                  </h4>
                </div>
                <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#EAF2FF] text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-colors text-xs sm:text-sm font-extrabold shrink-0">
                  <ZoomIn className="w-4 h-4" />
                  <span>Reklama natijalarini kattalashtirib ko‘rish</span>
                </span>
              </div>

              {/* Keng gorizontal ko'rish maydoni: mobil va planshetda siqilmasligi uchun gorizontal scroll, desktopda to'liq kenglik */}
              <div className="relative w-full rounded-2xl bg-[#FFFFFF] border-2 border-[#E2E8F0] p-3 sm:p-5 overflow-x-auto">
                <div className="min-w-[920px] lg:min-w-full">
                  <img
                    src={caseData.images.adsMain}
                    alt="Ibtido Ta’lim — reklama natijalariga oid asosiy vizual (ibtido-ads.png)"
                    className="w-full h-auto block select-none"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs sm:text-sm text-[#64748B]">
                <p className="leading-relaxed">
                  Reklama kabinetidagi real ko‘rsatkichlar: <strong className="text-[#111827]">18.11.2025</strong> kampaniyasida <strong className="text-[#111827]">755 lead, $0.22 CPL, $169.30</strong> xarajat; <strong className="text-[#111827]">24.12.2025</strong> kampaniyasida esa <strong className="text-[#2563EB]">144 lead, $0.06 CPL, $8.94</strong> xarajat (<span className="font-mono text-xs">ibtido-ads.png</span>).
                </p>
                <span className="text-xs font-bold text-[#2563EB] shrink-0">
                  To‘liq o‘lchamda va zoom bilan ko‘rish →
                </span>
              </div>
            </div>

            {/* 2. ibtido-ads-2.png — Qo'shimcha reklama statistikasi (To'liq 12 ustun kenglikda) */}
            <div
              onClick={() =>
                openLightbox(
                  caseData.images.adsSecondary,
                  'Ibtido Ta’lim — Qo‘shimcha reklama statistikasi (Ads Manager)',
                  'Toshkent (18–50) auditoriyasida o‘tkazilgan kampaniya dalili: 37 ta lead, $0.08 CPL, $3.00 o‘rtacha kunlik budjet (ibtido-ads-2.png).',
                  true,
                  1280
                )
              }
              className="group p-5 sm:p-7 rounded-3xl bg-white border-2 border-[#E2E8F0] hover:border-[#2563EB] transition-all cursor-pointer flex flex-col justify-between shadow-xs"
              role="button"
              tabIndex={0}
              aria-label="Reklama natijalarini kattalashtirib ko‘rish: Ibtido Ta’lim qo‘shimcha reklama statistikasi (ibtido-ads-2.png)"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openLightbox(
                    caseData.images.adsSecondary,
                    'Ibtido Ta’lim — Qo‘shimcha reklama statistikasi (Ads Manager)',
                    'Toshkent (18–50) auditoriyasida o‘tkazilgan kampaniya dalili: 37 ta lead, $0.08 CPL, $3.00 o‘rtacha kunlik budjet (ibtido-ads-2.png).',
                    true,
                    1280
                  );
                }
              }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#2563EB] block">
                    Qo‘shimcha Kampaniya Dalili · Ads Manager (ibtido-ads-2.png)
                  </span>
                  <h4 className="font-display font-extrabold text-lg sm:text-xl text-[#111827] mt-0.5">
                    Qo‘shimcha reklama statistikasi: 37 ta lead · $0.08 CPL
                  </h4>
                </div>
                <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#EAF2FF] text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-colors text-xs sm:text-sm font-extrabold shrink-0">
                  <ZoomIn className="w-4 h-4" />
                  <span>Reklama natijalarini kattalashtirib ko‘rish</span>
                </span>
              </div>

              {/* Keng gorizontal ko'rish maydoni */}
              <div className="relative w-full rounded-2xl bg-[#FFFFFF] border-2 border-[#E2E8F0] p-3 sm:p-5 overflow-x-auto">
                <div className="min-w-[860px] lg:min-w-full">
                  <img
                    src={caseData.images.adsSecondary}
                    alt="Ibtido Ta’lim — qo‘shimcha reklama statistikasi (ibtido-ads-2.png)"
                    className="w-full h-auto block select-none"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs sm:text-sm text-[#64748B]">
                <p className="leading-relaxed">
                  Maqsadli auditoriya segmentlari bo‘yicha sinov kampaniyasi: <strong className="text-[#111827]">TOF - B - Tashkent(18-50)</strong> — <strong className="text-[#111827]">37 ta lead</strong>, <strong className="text-[#2563EB]">$0.08 CPL</strong> (<span className="font-mono text-xs">ibtido-ads-2.png</span>).
                </p>
                <span className="text-xs font-bold text-[#2563EB] shrink-0">
                  To‘liq o‘lchamda va zoom bilan ko‘rish →
                </span>
              </div>
            </div>

            {/* 3. ibtido-profile.png — Loyiha kontekstini ko'rsatuvchi profil rasmi */}
            <div
              onClick={() =>
                openLightbox(
                  caseData.images.profile,
                  'Ibtido Ta’lim — Loyiha kontekstini ko‘rsatuvchi profil',
                  'Arab tili va madrasalarga tayyorlov kurslari sahifasi: @ibtido_talim (ibtido-profile.png).',
                  false,
                  1170
                )
              }
              className="group p-5 sm:p-7 rounded-3xl bg-white border border-[#E2E8F0] hover:border-[#2563EB]/40 transition-all cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
              role="button"
              tabIndex={0}
              aria-label="Ibtido Ta’lim loyiha profili skrinshotini kattalashtirib ko‘rish"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openLightbox(
                    caseData.images.profile,
                    'Ibtido Ta’lim — Loyiha kontekstini ko‘rsatuvchi profil',
                    'Arab tili va madrasalarga tayyorlov kurslari sahifasi: @ibtido_talim (ibtido-profile.png).',
                    false,
                    1170
                  );
                }
              }}
            >
              <div className="lg:col-span-5">
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#2563EB] block">
                  Loyiha Konteksti · @ibtido_talim
                </span>
                <h4 className="font-display font-extrabold text-xl sm:text-2xl text-[#111827] mt-1">
                  Ibtido Ta’lim — Arab tili va madrasalarga tayyorlov kurslari
                </h4>
                <p className="text-sm text-[#64748B] mt-2.5 leading-relaxed">
                  Loyiha yo‘nalishi va o‘quv kurslari kontekstini ko‘rsatuvchi sahifa ko‘rinishi (<span className="font-mono text-xs">ibtido-profile.png</span>). Asosiy natijalar Target reklama va lead-forma orqali shakllantirilgan.
                </p>
                <span className="inline-flex items-center gap-1.5 mt-4 px-3 py-1.5 rounded-xl bg-[#F5F8FF] border border-[#E2E8F0] text-xs font-bold text-[#2563EB]">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Profil rasmini kattalashtirib ko‘rish</span>
                </span>
              </div>

              <div className="lg:col-span-7 relative w-full rounded-2xl overflow-hidden bg-[#F5F8FF] border border-[#E2E8F0] flex items-center justify-center p-4">
                <img
                  src={caseData.images.profile}
                  alt="Ibtido Ta’lim — loyiha kontekstini ko‘rsatuvchi profil rasmi (ibtido-profile.png)"
                  className="w-full h-auto max-h-[380px] object-contain rounded-xl group-hover:scale-[1.01] transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
              </div>
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
            className="relative max-w-6xl w-full bg-white rounded-3xl overflow-hidden border border-[#E2E8F0] shadow-2xl flex flex-col max-h-[92vh]"
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

              {/* Zoom va boshqaruv tugmalari */}
              <div className="flex flex-wrap items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={handleZoomOut}
                  disabled={zoom <= 0.5}
                  className="px-2.5 py-1.5 rounded-xl bg-[#F5F8FF] border border-[#E2E8F0] text-[#111827] hover:bg-[#EAF2FF] hover:text-[#2563EB] disabled:opacity-40 flex items-center gap-1 text-xs font-bold transition-colors cursor-pointer"
                  aria-label="Kichraytirish"
                  title="Kichraytirish"
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
                  disabled={zoom >= 3}
                  className="px-2.5 py-1.5 rounded-xl bg-[#F5F8FF] border border-[#E2E8F0] text-[#111827] hover:bg-[#EAF2FF] hover:text-[#2563EB] disabled:opacity-40 flex items-center gap-1 text-xs font-bold transition-colors cursor-pointer"
                  aria-label="Kattalashtirish"
                  title="Kattalashtirish"
                >
                  <ZoomIn className="w-4 h-4" />
                  <span>Kattalashtirish</span>
                </button>

                <button
                  type="button"
                  onClick={handleResetZoom}
                  className="px-2.5 py-1.5 rounded-xl bg-[#F5F8FF] border border-[#E2E8F0] text-[#111827] hover:bg-[#EAF2FF] hover:text-[#2563EB] flex items-center gap-1 text-xs font-bold transition-colors cursor-pointer"
                  aria-label="Asl o‘lchamga qaytarish"
                  title="Asl o‘lchamga qaytarish"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Asl o‘lcham</span>
                </button>

                <button
                  type="button"
                  onClick={closeLightbox}
                  className="w-9 h-9 rounded-xl bg-[#F5F8FF] border border-[#E2E8F0] text-[#111827] hover:bg-[#EAF2FF] hover:text-[#2563EB] flex items-center justify-center transition-colors cursor-pointer ml-1"
                  aria-label="Modalni yopish"
                  title="Yopish"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Image Viewport (scroll va zoom bilan, hech qanday kesishsiz) */}
            <div className="p-4 sm:p-8 bg-[#F8FAFC] overflow-auto flex-1">
              <div
                className="mx-auto flex items-center justify-start sm:justify-center min-h-[220px]"
                style={{
                  width: lightbox.isWideAdsScreenshot
                    ? `${Math.round(lightbox.naturalWidth * zoom)}px`
                    : `${Math.round(680 * zoom)}px`,
                }}
              >
                <img
                  src={lightbox.src}
                  alt={lightbox.title}
                  className="w-full h-auto block rounded-xl bg-white p-2 border border-[#E2E8F0] shadow-sm select-none"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Modal Footer Hint */}
            <div className="px-4 sm:px-6 py-3 bg-white border-t border-[#E2E8F0] flex flex-wrap items-center justify-between gap-2 text-xs text-[#64748B]">
              <span>
                Maslahat: Raqamlarni yaqinroq ko‘rish uchun <strong>“Kattalashtirish”</strong> tugmasini bosing va rasmni chapga-o‘ngga suring.
              </span>
              <button
                type="button"
                onClick={closeLightbox}
                className="font-bold text-[#2563EB] hover:underline cursor-pointer"
              >
                Yopish (ESC)
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
