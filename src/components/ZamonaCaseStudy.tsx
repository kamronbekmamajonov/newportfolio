import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Banknote,
  CheckCircle2,
  Crosshair,
  DollarSign,
  Maximize2,
  TrendingUp,
  X,
} from 'lucide-react';
import { ZAMONA_CASE_DATA } from '../utils/portfolio.ts';

interface LightboxState {
  isOpen: boolean;
  src: string;
  title: string;
  subtitle: string;
}

export const ZamonaCaseStudy: React.FC = () => {
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

  const caseData = ZAMONA_CASE_DATA;

  return (
    <section
      id="zamona"
      aria-label="Zamona To‘yxonasi Target Ads Case Study"
      className="relative scroll-mt-20 sm:scroll-mt-24 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-[#E2E8F0]"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* 1. LOYIHA SARLAVHASI VA TARGET ADS YO'NALISHI */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-[#E2E8F0]">
          <div>
            <div className="flex flex-wrap items-center gap-2.5 mb-3.5 text-xs font-bold text-[#2563EB]">
              <span className="uppercase tracking-wider">10 / 10 · Keys</span>
              <span aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1.5 text-[#111827]">
                <Crosshair className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>Yo‘nalish: {caseData.field}</span>
              </span>
              <span aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1.5 text-[#64748B]">
                <DollarSign className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>Reklama budjeti: {caseData.adBudget}</span>
              </span>
            </div>

            <div className="flex items-center gap-4 sm:gap-5 mt-2">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#EAF2FF] text-[#2563EB] flex flex-col items-center justify-center border border-[#E2E8F0] shrink-0">
                <span className="font-display font-black text-2xl sm:text-3xl tracking-tight leading-none">
                  ZM
                </span>
                <span className="text-[8px] font-bold text-[#111827] uppercase tracking-widest mt-1">
                  TARGET ADS
                </span>
              </div>
              <div>
                <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[2.6rem] text-[#111827] tracking-tight leading-none">
                  {caseData.title}
                </h2>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2.5 text-xs sm:text-sm font-bold text-[#2563EB]">
                  <span className="inline-flex items-center gap-1.5">
                    <Crosshair className="w-3.5 h-3.5" />
                    <span>Yo‘nalish: {caseData.field} (Performance Marketing)</span>
                  </span>
                  <span className="text-[#E2E8F0]" aria-hidden="true">|</span>
                  <span className="text-[#111827] font-semibold">
                    Reklama budjeti: {caseData.adBudget}
                  </span>
                </div>
              </div>
            </div>

            <p className="mt-4 text-base sm:text-lg text-[#111827] font-medium max-w-2xl leading-relaxed">
              <strong className="text-[#2563EB]">Maqsad:</strong> {caseData.objective}.
            </p>
          </div>

          <div className="flex flex-col gap-2 shrink-0 bg-[#F5F8FF] p-4 sm:p-5 rounded-2xl border border-[#E2E8F0] max-w-sm">
            <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#2563EB]">
              <TrendingUp className="w-4 h-4 shrink-0" />
              <span>Performance Marketing Fokusi</span>
            </div>
            <p className="text-xs text-[#64748B] leading-relaxed">
              {caseData.measurementNote}
            </p>
          </div>
        </div>

        {/* 2. ASOSIY VIZUAL MARKAZ: TARGET REKLAMA SAMARADORLIGI VA BIZNES NATIJA */}
        <div className="mt-10 sm:mt-12 p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#F5F8FF] border-2 border-[#2563EB]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[#E2E8F0]">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#2563EB] block">
                Asosiy Natija · Target Ads Samaradorligi
              </span>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#111827] mt-1">
                Reklama budjeti va buyurtmalar ko‘rsatkichi
              </h3>
            </div>
            <span className="text-xs sm:text-sm font-bold text-[#2563EB]">
              Natija o‘lchovi: Real buyurtmalar soni
            </span>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Markaziy ko'rsatkich 1: 10–15 ta buyurtma */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border-2 border-[#2563EB] flex flex-col justify-between shadow-xs">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#2563EB]">
                    Asosiy Biznes Natija
                  </span>
                  <CheckCircle2 className="w-5 h-5 text-[#2563EB] shrink-0" />
                </div>
                <div className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#2563EB] tracking-tight leading-none">
                  {caseData.ordersResult}
                </div>
                <p className="mt-3 text-sm sm:text-base font-bold text-[#111827]">
                  {caseData.ordersDescription}
                </p>
              </div>
              <p className="mt-4 pt-3 border-t border-[#E2E8F0] text-xs text-[#64748B] leading-relaxed">
                Kampaniya samaradorligi bevosita to‘y va marosimlar uchun olingan real buyurtmalar orqali baholandi.
              </p>
            </div>

            {/* Markaziy ko'rsatkich 2: $1 500 reklama budjeti */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E2E8F0] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#111827]">
                    Reklama Budjeti
                  </span>
                  <Banknote className="w-5 h-5 text-[#2563EB] shrink-0" />
                </div>
                <div className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#111827] tracking-tight leading-none">
                  {caseData.adBudget}
                </div>
                <p className="mt-3 text-sm sm:text-base font-bold text-[#111827]">
                  {caseData.budgetDescription}
                </p>
              </div>
              <p className="mt-4 pt-3 border-t border-[#E2E8F0] text-xs text-[#64748B] leading-relaxed">
                Maqsadli auditoriyani jalb qilish va to‘yxona buyurtmalarini shakllantirish uchun yo‘naltirilgan investitsiya.
              </p>
            </div>
          </div>
        </div>

        {/* 3. BIZNES KONTEKSTI VA LOYIHA SAHIFASI (zamona-profile.png) */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Chap ustun: Biznes konteksti va menyu narxi */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#F5F8FF] border border-[#E2E8F0]">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#2563EB] block mb-2">
                Biznes Konteksti va Muammo Yechimi
              </span>
              <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#111827] mb-6">
                Tanish-bilish oqimidan tizimli Target Ads buyurtmalariga o‘tish
              </h3>

              <div className="space-y-4">
                {/* Kampaniyadan oldingi holat */}
                <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0]">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#64748B] block mb-1.5">
                    Loyiha boshlanishidan oldin
                  </span>
                  <p className="text-sm sm:text-base font-medium text-[#111827] leading-relaxed">
                    {caseData.beforeContext}
                  </p>
                </div>

                <div className="flex justify-center text-[#2563EB]" aria-hidden="true">
                  <ArrowRight className="w-5 h-5 rotate-90" />
                </div>

                {/* Target reklama natijasi */}
                <div className="p-5 rounded-2xl bg-white border-2 border-[#2563EB]/30">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#2563EB] block mb-1.5">
                    Target reklama natijasida
                  </span>
                  <p className="text-sm sm:text-base font-semibold text-[#111827] leading-relaxed">
                    {caseData.afterContext}
                  </p>
                </div>
              </div>

              {/* To'yxona menyusi narxi konteksti */}
              <div className="mt-6 p-5 sm:p-6 rounded-2xl bg-[#EAF2FF]/70 border border-[#2563EB]/25">
                <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#2563EB] mb-2">
                  <Banknote className="w-4 h-4 shrink-0" />
                  <span>O‘rtacha Chek va Xizmat Qiymati Konteksti</span>
                </div>
                <div className="font-display font-extrabold text-lg sm:text-xl text-[#111827]">
                  320 000 – 400 000 so‘m / kishi
                </div>
                <p className="mt-1.5 text-xs sm:text-sm text-[#111827]/90 leading-relaxed">
                  {caseData.menuPriceContext} To‘y va marosim buyurtmalarida har bir jalb qilingan mijoz yuqori chekli xarid hisoblangani sababli, reklama kampaniyasi natijasi bevosita buyurtmalar soni (<strong className="text-[#2563EB]">10–15 ta buyurtma</strong>) bilan o‘lchandi.
                </p>
              </div>

              {/* Loyiha ma'lumotlari xulosasi */}
              <div className="mt-6 pt-6 border-t border-[#E2E8F0] grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748B] block">
                    Loyiha
                  </span>
                  <span className="text-xs sm:text-sm font-extrabold text-[#111827] mt-0.5 block">
                    {caseData.title}
                  </span>
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748B] block">
                    Yo‘nalish
                  </span>
                  <span className="text-xs sm:text-sm font-extrabold text-[#2563EB] mt-0.5 block">
                    {caseData.field}
                  </span>
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748B] block">
                    Budjet
                  </span>
                  <span className="text-xs sm:text-sm font-extrabold text-[#111827] mt-0.5 block">
                    {caseData.adBudget}
                  </span>
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748B] block">
                    Natija
                  </span>
                  <span className="text-xs sm:text-sm font-extrabold text-[#2563EB] mt-0.5 block">
                    {caseData.ordersResult}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* O'ng ustun: Original rasm (zamona-profile.png) */}
          <div className="lg:col-span-5">
            <div
              onClick={() =>
                openLightbox(
                  caseData.images.profile,
                  'Zamona To‘yxonasi — Instagram sahifasi',
                  'Reklama kampaniyasi yo‘naltirilgan loyiha sahifasi: @zamona_restaurant (zamona-profile.png).'
                )
              }
              className="group p-5 sm:p-6 rounded-3xl bg-[#F5F8FF] border border-[#E2E8F0] hover:border-[#2563EB]/40 transition-all cursor-pointer flex flex-col justify-between"
              role="button"
              tabIndex={0}
              aria-label="Zamona To‘yxonasi Instagram sahifasi skrinshotini kattalashtirib ko‘rish"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  openLightbox(
                    caseData.images.profile,
                    'Zamona To‘yxonasi — Instagram sahifasi',
                    'Reklama kampaniyasi yo‘naltirilgan loyiha sahifasi: @zamona_restaurant (zamona-profile.png).'
                  );
                }
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#2563EB] block">
                    Loyiha Sahifasi
                  </span>
                  <h4 className="font-display font-extrabold text-lg sm:text-xl text-[#111827] mt-0.5">
                    Zamona Restorani
                  </h4>
                </div>
                <span className="text-xs font-bold text-[#64748B]">@zamona_restaurant</span>
              </div>

              <div className="relative w-full rounded-2xl overflow-hidden bg-white border border-[#E2E8F0] flex items-center justify-center p-3">
                <img
                  src={caseData.images.profile}
                  alt="Zamona To‘yxonasi — Instagram sahifasi (zamona-profile.png)"
                  className="w-full h-auto max-h-[520px] object-contain rounded-xl group-hover:scale-[1.01] transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-slate-900/75 backdrop-blur-xs text-white text-[11px] font-semibold flex items-center gap-1">
                  <Maximize2 className="w-3 h-3" />
                  <span>Kattalashtirish</span>
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#64748B] mt-3.5 leading-relaxed">
                Target reklama kampaniyasi orqali murojaat va buyurtmalar qabul qilingan loyiha sahifasi (<span className="font-mono text-xs">zamona-profile.png</span>).
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      {lightbox.isOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.title}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden border border-[#E2E8F0] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-[#E2E8F0]">
              <div>
                <h3 className="font-display font-bold text-base sm:text-lg text-[#111827]">
                  {lightbox.title}
                </h3>
                <p className="text-xs text-[#64748B] mt-0.5">{lightbox.subtitle}</p>
              </div>
              <button
                type="button"
                onClick={closeLightbox}
                className="w-9 h-9 rounded-xl bg-[#F5F8FF] text-[#111827] hover:bg-[#EAF2FF] hover:text-[#2563EB] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Yopish"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 sm:p-6 bg-[#F8FAFC] flex items-center justify-center max-h-[80vh] overflow-auto">
              <img
                src={lightbox.src}
                alt={lightbox.title}
                className="max-h-[72vh] w-auto object-contain rounded-xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
