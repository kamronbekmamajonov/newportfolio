import React, { useState, useEffect } from 'react';
import {
  Briefcase,
  Building2,
  Calendar,
  Camera,
  CheckCircle2,
  LayoutGrid,
  Maximize2,
  Target,
  X,
} from 'lucide-react';
import { ZETRIC_CASE_DATA } from '../utils/portfolio.ts';

interface LightboxState {
  isOpen: boolean;
  src: string;
  title: string;
  subtitle: string;
}

export const ZetricCaseStudy: React.FC = () => {
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

  const caseData = ZETRIC_CASE_DATA;

  return (
    <section
      id="zetric"
      aria-label="Zetric Case Study"
      className="relative scroll-mt-20 sm:scroll-mt-24 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-[#E2E8F0]"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* 1. LOYIHA SARLAVHASI VA B2B POZITSIONIROVANIYE */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-[#E2E8F0]">
          <div>
            <div className="flex flex-wrap items-center gap-2.5 mb-3.5 text-xs font-bold text-[#2563EB]">
              <span className="uppercase tracking-wider">08 / 10 · Keys</span>
              <span aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1.5 text-[#111827]">
                <Building2 className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>{caseData.field}</span>
              </span>
              <span aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1.5 text-[#64748B]">
                <Calendar className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>Davr: {caseData.period}</span>
              </span>
            </div>

            <div className="flex items-center gap-4 sm:gap-5 mt-2">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#EAF2FF] text-[#2563EB] flex flex-col items-center justify-center border border-[#E2E8F0] shrink-0">
                <span className="font-display font-black text-2xl sm:text-3xl tracking-tight leading-none">
                  ZZ
                </span>
                <span className="text-[8px] font-bold text-[#111827] uppercase tracking-widest mt-1">
                  B2B INDUSTRIAL
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
                    Davr: {caseData.period}
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
              <Building2 className="w-4 h-4 shrink-0" />
              <span>B2B Sanoat Kommunikatsiyasi</span>
            </div>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Kabel lotoklari, elektr shitlar va metall shkaflar ishlab chiqarish jarayonini biznes mijozlar va muhandislar uchun ochiq ko‘rsatish.
            </p>
          </div>
        </div>

        {/* 2. ASOSIY VIZUAL (zetrik.png), BAJARILGAN ISHLAR VA ALOHIDA NATIJA BLOKI */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Chap ustun: Asosiy vizual (zetrik.png) va Alohida Natija Bloki */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div
              onClick={() =>
                openLightbox(
                  caseData.images.main,
                  'Zetric — Asosiy profil vizuali',
                  'Zetric.uz B2B Instagram sahifasi: Elektr shit, kabel lotok va metall shkaflar ishlab chiqarish (zetrik.png).'
                )
              }
              className="group p-5 sm:p-6 rounded-3xl bg-[#F5F8FF] border border-[#E2E8F0] hover:border-[#2563EB]/40 transition-all cursor-pointer flex flex-col justify-between"
              role="button"
              tabIndex={0}
              aria-label="Zetric asosiy vizual rasmini kattalashtirib ko‘rish"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  openLightbox(
                    caseData.images.main,
                    'Zetric — Asosiy profil vizuali',
                    'Zetric.uz B2B Instagram sahifasi: Elektr shit, kabel lotok va metall shkaflar ishlab chiqarish (zetrik.png).'
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
                    Zetric B2B sahifasi
                  </h3>
                </div>
                <span className="text-xs font-bold text-[#64748B]">@zetric.uz</span>
              </div>

              <div className="relative w-full rounded-2xl overflow-hidden bg-white border border-[#E2E8F0] flex items-center justify-center p-3">
                <img
                  src={caseData.images.main}
                  alt="Zetric — Asosiy profil vizuali (zetrik.png)"
                  className="w-full h-auto max-h-[460px] object-contain rounded-xl group-hover:scale-[1.01] transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-slate-900/75 backdrop-blur-xs text-white text-[11px] font-semibold flex items-center gap-1">
                  <Maximize2 className="w-3 h-3" />
                  <span>Kattalashtirish</span>
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#64748B] mt-3.5 leading-relaxed">
                Ishlab chiqaruvchi korxonaning aniq B2B pozitsionirovaniyesi: <strong className="text-[#111827]">“Elektr shit | Kabel latok | Metal shkaf”</strong> (<span className="font-mono text-xs">zetrik.png</span>).
              </p>
            </div>

            {/* ALOHIDA VIZUAL URG'ULI NATIJA BLOKI */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border-2 border-[#2563EB] shadow-sm">
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#2563EB] mb-2">
                <Target className="w-4 h-4" />
                <span>Tasdiqlangan Natija · {caseData.resultLabel}</span>
              </div>
              <div className="font-display font-extrabold text-2xl sm:text-3xl text-[#2563EB] tracking-tight">
                {caseData.resultValue}
              </div>
              <p className="mt-3 text-sm sm:text-base font-medium text-[#111827] leading-relaxed">
                “{caseData.resultDescription}”
              </p>
              <div className="mt-4 pt-3 border-t border-[#E2E8F0] text-xs text-[#64748B]">
                Izoh: Ushbu o‘sish kontent tizimi hamda Target reklamasining birgalikdagi qo‘llanilishi natijasida qayd etilgan.
              </div>
            </div>
          </div>

          {/* O'ng ustun: Bajarilgan ishlar (6 ta band) va B2B kommunikatsiya mazmuni */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#F5F8FF] border border-[#E2E8F0]">
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

              <div className="mt-6 pt-6 border-t border-[#E2E8F0]">
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#2563EB] block mb-2">
                  B2B Auditoriya Bilan Kommunikatsiya Yondashuvi
                </span>
                <p className="text-sm sm:text-base text-[#111827]/90 leading-relaxed">
                  {caseData.b2bContext}
                </p>
                <p className="mt-3 text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  Buyurtmachilar va texnik mutaxassislar qaror qabul qilishda mahsulot chidamliligi, metall qalinligi, bo‘yoq sifati va yetkazib berish muddatlariga e’tibor qaratishi inobatga olinib, kontent rubrikalari hamda lead magnet g‘oyalari aynan shu mezonlar asosida shakllantirildi.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. KONTENT DIZAYNI VA VIZUAL MATERIALLAR (zetric-visual.png) */}
        <div className="mt-14 sm:mt-18 p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#F5F8FF] border border-[#E2E8F0]">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#2563EB] mb-1">
                <LayoutGrid className="w-4 h-4" />
                <span>Sanoat Rubrikalari va Lead Magnet</span>
              </div>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#111827] tracking-tight">
                Kontent dizayni va vizual materiallar
              </h3>
            </div>
            <span className="text-xs sm:text-sm font-semibold text-[#64748B]">
              Texnik savollar, ishlab chiqarish jarayoni va narxlar katalogi (lead magnet)
            </span>
          </div>

          <div
            onClick={() =>
              openLightbox(
                caseData.images.visual,
                'Zetric — Kontent dizayni va vizual materiallar',
                'B2B kontent rubrikalari, ishlab chiqarish videolari va katalog muqovalari (zetric-visual.png).'
              )
            }
            className="group grid grid-cols-1 lg:grid-cols-12 gap-8 items-center cursor-pointer bg-white p-5 sm:p-7 rounded-3xl border border-[#E2E8F0] hover:border-[#2563EB]/40 transition-all"
            role="button"
            tabIndex={0}
            aria-label="Zetric kontent dizayni va vizual materiallar rasmini kattalashtirib ko‘rish"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                openLightbox(
                  caseData.images.visual,
                  'Zetric — Kontent dizayni va vizual materiallar',
                  'B2B kontent rubrikalari, ishlab chiqarish videolari va katalog muqovalari (zetric-visual.png).'
                );
              }
            }}
          >
            <div className="lg:col-span-7 relative w-full rounded-2xl overflow-hidden bg-[#F5F8FF] border border-[#E2E8F0] flex items-center justify-center p-3">
              <img
                src={caseData.images.visual}
                alt="Zetric — Kontent dizayni va vizual materiallar (zetric-visual.png)"
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
                  Biznes Auditoriya Uchun Kontent Tizimi
                </span>
                <h4 className="font-display font-extrabold text-2xl text-[#111827] leading-snug">
                  Ishlab chiqarish standartlari va muhandislik yechimlari
                </h4>
                <p className="mt-3 text-sm sm:text-base text-[#64748B] leading-relaxed">
                  Sahifa vizualida korporativ ko‘k ranglar va metall fakturalar uyg‘unlashtirildi. Har bir rubrika B2B mijozlarning amaliy og‘riqlari hamda savollariga javob berishga yo‘naltirildi:
                </p>

                <div className="mt-6 space-y-3">
                  <div className="p-4 rounded-2xl bg-[#F5F8FF] border border-[#E2E8F0]">
                    <span className="text-xs font-bold text-[#2563EB] uppercase tracking-wider block">
                      01 · Texnik muammolar va sifat tahlili
                    </span>
                    <p className="text-xs sm:text-sm text-[#111827] font-medium mt-1">
                      “Nega metall shkaflar tez buziladi?”, “Kabel lotok egilib ketishining sabablari”, “Elektr shit eshiklari nega tez osilib qoladi?”.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#F5F8FF] border border-[#E2E8F0]">
                    <span className="text-xs font-bold text-[#2563EB] uppercase tracking-wider block">
                      02 · Ishlab chiqarish jarayoni
                    </span>
                    <p className="text-xs sm:text-sm text-[#111827] font-medium mt-1">
                      “Kabel lotoklarga ishlov berish jarayoni”, “Metall yuzasini bo‘yoq bilan himoyalash”, “Elektr shit tayyorlash jarayoni”.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#F5F8FF] border border-[#E2E8F0]">
                    <span className="text-xs font-bold text-[#2563EB] uppercase tracking-wider block">
                      03 · B2B taklif va narxlar ro‘yxati
                    </span>
                    <p className="text-xs sm:text-sm text-[#111827] font-medium mt-1">
                      “Kabelniy lotoklar — narxlar ro‘yxati bilan tanishing”, “Ishlab chiqaruvchidan birinchi qo‘l”.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E2E8F0] flex items-center justify-between text-xs text-[#64748B]">
                <span>Original fayl: zetric-visual.png</span>
                <span className="font-bold text-[#2563EB]">To‘liq o‘lchamda ko‘rish →</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4. ISH JARAYONI GALEREYASI (zetric-process.png & zetric-process-2.png) */}
        <div className="mt-14 sm:mt-18">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#2563EB] mb-1">
                <Camera className="w-4 h-4" />
                <span>Ishlab Chiqarish Maydonida Syomka</span>
              </div>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#111827] tracking-tight">
                Kontent tayyorlash va ish jarayoni
              </h3>
            </div>
            <span className="text-xs sm:text-sm font-medium text-[#64748B]">
              Zavod va ombor sharoitida real mahsulotlar bilan ishlash jarayoni
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* zetric-process.png */}
            <div
              onClick={() =>
                openLightbox(
                  caseData.images.process1,
                  'Zetric — Ish jarayoni (zetric-process.png)',
                  'Metall shkaflar va elektr shitlarni ishlab chiqarish maydonida tasvirga olish jarayoni.'
                )
              }
              className="group p-5 sm:p-6 rounded-3xl bg-[#F5F8FF] border border-[#E2E8F0] hover:border-[#2563EB]/40 transition-all cursor-pointer flex flex-col justify-between"
              role="button"
              tabIndex={0}
              aria-label="Zetric ish jarayoni birinchi rasmini kattalashtirib ko‘rish"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  openLightbox(
                    caseData.images.process1,
                    'Zetric — Ish jarayoni (zetric-process.png)',
                    'Metall shkaflar va elektr shitlarni ishlab chiqarish maydonida tasvirga olish jarayoni.'
                  );
                }
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] block">
                      Ish Jarayoni · 01
                    </span>
                    <h4 className="font-display font-extrabold text-lg sm:text-xl text-[#111827] mt-0.5">
                      Metall shkaflar va elektr shitlar syomkasi
                    </h4>
                  </div>
                  <span className="text-xs font-bold text-[#64748B]">zetric-process.png</span>
                </div>

                <div className="relative w-full rounded-2xl overflow-hidden bg-white border border-[#E2E8F0] flex items-center justify-center p-2.5">
                  <img
                    src={caseData.images.process1}
                    alt="Zetric — Ish jarayoni 1 (zetric-process.png)"
                    className="w-full h-auto max-h-[560px] object-contain rounded-xl group-hover:scale-[1.01] transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-slate-900/75 backdrop-blur-xs text-white text-[11px] font-semibold flex items-center gap-1">
                    <Maximize2 className="w-3 h-3" />
                    <span>Kattalashtirish</span>
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#64748B] mt-3.5 leading-relaxed">
                Tayyor metall shkaflar va elektr shitlarning konstruktiv detallarini ko‘rsatish uchun zavod hududida tashkil etilgan syomka jarayoni (<span className="font-mono text-xs">zetric-process.png</span>).
              </p>
            </div>

            {/* zetric-process-2.png */}
            <div
              onClick={() =>
                openLightbox(
                  caseData.images.process2,
                  'Zetric — Ish jarayoni va kontent tayyorlash (zetric-process-2.png)',
                  'Kabel lotoklari omborida video va Stories kontentini tayyorlash jarayoni.'
                )
              }
              className="group p-5 sm:p-6 rounded-3xl bg-[#F5F8FF] border border-[#E2E8F0] hover:border-[#2563EB]/40 transition-all cursor-pointer flex flex-col justify-between"
              role="button"
              tabIndex={0}
              aria-label="Zetric ish jarayoni ikkinchi rasmini kattalashtirib ko‘rish"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  openLightbox(
                    caseData.images.process2,
                    'Zetric — Ish jarayoni va kontent tayyorlash (zetric-process-2.png)',
                    'Kabel lotoklari omborida video va Stories kontentini tayyorlash jarayoni.'
                  );
                }
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] block">
                      Ish Jarayoni · 02
                    </span>
                    <h4 className="font-display font-extrabold text-lg sm:text-xl text-[#111827] mt-0.5">
                      Kabel lotoklari bo‘yicha kontent va Stories jarayoni
                    </h4>
                  </div>
                  <span className="text-xs font-bold text-[#64748B]">zetric-process-2.png</span>
                </div>

                <div className="relative w-full rounded-2xl overflow-hidden bg-white border border-[#E2E8F0] flex items-center justify-center p-2.5">
                  <img
                    src={caseData.images.process2}
                    alt="Zetric — Ish jarayoni 2 (zetric-process-2.png)"
                    className="w-full h-auto max-h-[560px] object-contain rounded-xl group-hover:scale-[1.01] transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-slate-900/75 backdrop-blur-xs text-white text-[11px] font-semibold flex items-center gap-1">
                    <Maximize2 className="w-3 h-3" />
                    <span>Kattalashtirish</span>
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#64748B] mt-3.5 leading-relaxed">
                Ishlab chiqarish sexi va kabel lotoklari zahirasidan bevosita video hamda Stories kontentlarini tayyorlash jarayoni (<span className="font-mono text-xs">zetric-process-2.png</span>).
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
          aria-labelledby="zetric-lightbox-title"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-700"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-100 bg-white">
              <div>
                <h3
                  id="zetric-lightbox-title"
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
