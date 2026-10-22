import React, { useState, useEffect } from 'react';
import {
  Briefcase,
  CheckCircle2,
  Eye,
  Heart,
  LayoutGrid,
  Maximize2,
  Sparkles,
  TrendingUp,
  Video,
  X,
} from 'lucide-react';
import { USTOZ_AKADEMIYASI_CASE_DATA } from '../utils/portfolio.ts';

interface LightboxState {
  isOpen: boolean;
  src: string;
  title: string;
  subtitle: string;
}

export const UstozAkademiyasiCaseStudy: React.FC = () => {
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

  const caseData = USTOZ_AKADEMIYASI_CASE_DATA;

  return (
    <section
      id="ustoz-akademiyasi"
      aria-label="Ustoz Akademiyasi Case Study"
      className="relative scroll-mt-20 sm:scroll-mt-24 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-[#F5F8FF]/60 to-white border-t border-[#E2E8F0]"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* 1. ASOSIY LOYIHA SARLAVHASI VA LAVOZIM */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-[#E2E8F0]">
          <div>
            <div className="flex flex-wrap items-center gap-2.5 mb-3.5 text-xs font-bold text-[#2563EB]">
              <span className="uppercase tracking-wider">05 / 10 · Keys</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#64748B]">{caseData.field}</span>
              <span aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1.5 text-[#111827]">
                <Briefcase className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>Lavozim: {caseData.role}</span>
              </span>
            </div>

            <div className="flex items-center gap-4 sm:gap-5 mt-2">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#EAF2FF] text-[#2563EB] flex flex-col items-center justify-center border border-[#E2E8F0] shadow-xs shrink-0">
                <span className="font-display font-black text-xl sm:text-2xl tracking-tight leading-none">
                  UA
                </span>
                <span className="text-[8px] font-bold text-[#111827] uppercase tracking-widest mt-1">
                  AKADEMIYA
                </span>
              </div>
              <div>
                <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[2.6rem] text-[#111827] tracking-tight leading-none">
                  {caseData.title}
                </h2>
                <span className="text-xs sm:text-sm font-bold text-[#2563EB] tracking-wide mt-2 block">
                  Lavozim: {caseData.role}
                </span>
              </div>
            </div>

            <p className="mt-4 text-base sm:text-lg text-[#111827] font-medium max-w-2xl leading-relaxed">
              {caseData.shortDesc}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 shrink-0 bg-[#F5F8FF] p-4 sm:p-5 rounded-2xl border border-[#E2E8F0]">
            <div className="flex items-center gap-2 text-xs font-bold text-[#2563EB]">
              <Sparkles className="w-4 h-4 shrink-0" />
              <span>Eng yuqori Reel natijasi: 5,4 million ko‘rish</span>
            </div>
            <div className="h-px bg-[#E2E8F0] hidden lg:block" />
            <div className="flex items-center gap-2 text-xs font-semibold text-[#64748B]">
              <TrendingUp className="w-4 h-4 text-[#2563EB] shrink-0" />
              <span>Oylik o‘sish: ~4–5 ming obunachi</span>
            </div>
          </div>
        </div>

        {/* 2. ASOSIY BLOK: PROFIL VIZUALI (ustoz-profile.png) + ASOSIY ISHLAR VA NATIJALAR */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Chap ustun: Asosiy vizual sifatida ustoz-profile.png (katta va aniq) */}
          <div className="lg:col-span-6">
            <div
              onClick={() =>
                openLightbox(
                  caseData.images.profile,
                  'Ustoz Akademiyasi — Instagram profil ko‘rinishi',
                  'Asosiy vizual: ustoz_akademiyasi rasmiy sahifasi (714 post, 129 ming obunachi — ustoz-profile.png).'
                )
              }
              className="group p-5 sm:p-7 rounded-3xl bg-[#F5F8FF] border border-[#E2E8F0] shadow-sm hover:shadow-md hover:border-[#2563EB]/40 transition-all cursor-pointer flex flex-col justify-between"
              role="button"
              tabIndex={0}
              aria-label="Ustoz Akademiyasi profil rasmini kattalashtirib ko‘rish"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  openLightbox(
                    caseData.images.profile,
                    'Ustoz Akademiyasi — Instagram profil ko‘rinishi',
                    'Asosiy vizual: ustoz_akademiyasi rasmiy sahifasi (714 post, 129 ming obunachi — ustoz-profile.png).'
                  );
                }
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#2563EB] block">
                    Asosiy Vizual
                  </span>
                  <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#111827] mt-0.5">
                    Ustoz Akademiyasi profili
                  </h3>
                </div>
                <span className="text-xs font-bold text-[#64748B]">@ustoz_akademiyasi</span>
              </div>

              <div className="relative w-full rounded-2xl overflow-hidden bg-white border border-[#E2E8F0] flex items-center justify-center p-3 sm:p-4">
                <img
                  src={caseData.images.profile}
                  alt="Ustoz Akademiyasi Instagram profili (ustoz-profile.png)"
                  className="w-full h-auto max-h-[540px] object-contain rounded-xl group-hover:scale-[1.01] transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-slate-900/75 backdrop-blur-xs text-white text-[11px] font-semibold flex items-center gap-1">
                  <Maximize2 className="w-3 h-3" />
                  <span>Kattalashtirish</span>
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#64748B] mt-4 leading-relaxed">
                Loyiha Instagram sahifasi: <strong className="text-[#111827]">129 ming obunachi</strong>, 714 ta publikatsiya, aniq pozitsionirovaniye va kurs yo‘nalishlari haqida tizimli ma’lumot (<span className="font-mono text-xs">ustoz-profile.png</span>).
              </p>
            </div>
          </div>

          {/* O'ng ustun: Asosiy ishlar ro'yxati va Kontent jarayoni */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm">
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#2563EB] mb-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Lavozim: {caseData.role}</span>
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-[#111827] mb-5">
                Asosiy ishlar:
              </h3>

              <div className="space-y-3">
                {caseData.completedTasks.map((task, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#F5F8FF] border border-[#E2E8F0] hover:bg-[#EAF2FF]/60 transition-colors"
                  >
                    <span className="w-6 h-6 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-[#111827] leading-snug">
                      {task}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-[#E2E8F0] text-xs text-[#64748B] leading-relaxed">
                Eslatma: Keltirilgan o‘sish va qamrov ko‘rsatkichlari loyiha jamoasi hamda tizimli kontent jarayonlari doirasida erishilgan natijalarni aks ettiradi.
              </div>
            </div>
          </div>
        </div>

        {/* 3. TASDIQLANGAN NATIJALAR (3 ta katta raqamli kartochka) */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {caseData.mainMetrics.map((metric) => (
            <div
              key={metric.id}
              className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm shadow-blue-500/5 hover:border-[#2563EB]/40 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="font-display font-extrabold text-3xl sm:text-4xl text-[#2563EB] tracking-tight tabular-nums block">
                  {metric.value}
                </span>
                <span className="text-base font-bold text-[#111827] mt-2.5 block leading-snug">
                  {metric.label}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#64748B] mt-4 pt-4 border-t border-[#E2E8F0] leading-relaxed">
                {metric.context}
              </p>
            </div>
          ))}
        </div>

        {/* 4. REELS NATIJASI — ALOHIDA KATTA VIZUAL BLOK (ustoz-reel.png) */}
        <div className="mt-14 sm:mt-18">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#2563EB] block mb-1">
                Tasdiqlangan Reels Ko‘rsatkichi
              </span>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#111827] tracking-tight">
                Reels orqali erishilgan natija
              </h3>
            </div>
            <span className="text-xs sm:text-sm font-bold text-[#2563EB]">
              Skrinshotda tasdiqlangan eng yuqori natija: 5,4 million ko‘rish
            </span>
          </div>

          <div
            onClick={() =>
              openLightbox(
                caseData.images.reel,
                'Reels orqali erishilgan natija — 5,4 million ko‘rish',
                'Original skrinshotda tasdiqlangan natija: 5,4 млн ko‘rish va 49,2 тыс. layk (ustoz-reel.png).'
              )
            }
            className="group p-6 sm:p-8 lg:p-10 rounded-3xl bg-white border-2 border-[#2563EB]/25 shadow-md hover:shadow-lg hover:border-[#2563EB] transition-all cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            role="button"
            tabIndex={0}
            aria-label="Reels orqali erishilgan natija rasmini kattalashtirib ko‘rish"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                openLightbox(
                  caseData.images.reel,
                  'Reels orqali erishilgan natija — 5,4 million ko‘rish',
                  'Original skrinshotda tasdiqlangan natija: 5,4 млн ko‘rish va 49,2 тыс. layk (ustoz-reel.png).'
                );
              }
            }}
          >
            {/* Chap ustun: ustoz-reel.png katta va kesilmagan ko'rinishda */}
            <div className="lg:col-span-6 relative w-full rounded-2xl overflow-hidden bg-[#F5F8FF] border border-[#E2E8F0] flex items-center justify-center p-3 sm:p-4">
              <img
                src={caseData.images.reel}
                alt="Reels orqali erishilgan natija — 5,4 million ko‘rish (ustoz-reel.png)"
                className="w-full h-auto max-h-[640px] object-contain rounded-xl group-hover:scale-[1.01] transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
              <span className="absolute top-4 right-4 px-3 py-1.5 rounded-md bg-slate-900/75 backdrop-blur-xs text-white text-xs font-semibold flex items-center gap-1.5">
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Kattalashtirish</span>
              </span>
            </div>

            {/* O'ng ustun: 5,4 million ko'rish va skrinshotdagi aniq raqamlar */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#2563EB] mb-2">
                  <Video className="w-4 h-4" />
                  <span>Viral Reels Ssenariysi va Ijrosi</span>
                </div>
                <h4 className="font-display font-extrabold text-2xl sm:text-3xl text-[#111827] leading-tight">
                  Bitta Reel orqali 5,4 million ko‘rish
                </h4>
                <p className="mt-3 text-sm sm:text-base text-[#64748B] leading-relaxed">
                  Arab tilidagi iboralarni sodda va esda qolarli formatda tushuntiruvchi Reels videosi (<strong className="text-[#111827]">“Havo juda yoqimli — Al-jawwu Lateef Jiddan”</strong>) organik ravishda keng auditoriyaga tarqalib, 5,4 million ko‘rishga erishgan. Shuningdek, loyiha doirasida bitta ssenariy asosida tayyorlangan video bir kunda taxminan 1 000 obunachi olib kelgan.
                </p>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-[#EAF2FF]/70 border border-[#2563EB]/20">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#2563EB] mb-1">
                      <Eye className="w-4 h-4" />
                      <span>Ko‘rishlar soni (Просмотры)</span>
                    </div>
                    <span className="font-display font-extrabold text-3xl text-[#2563EB] block">
                      5,4 million
                    </span>
                    <span className="text-xs text-[#64748B] mt-1 block">
                      Skrinshotda: 5,4 млн ko‘rish
                    </span>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#F5F8FF] border border-[#E2E8F0]">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#111827] mb-1">
                      <Heart className="w-4 h-4 text-[#2563EB]" />
                      <span>Layklar (Отметки &quot;Нравится&quot;)</span>
                    </div>
                    <span className="font-display font-extrabold text-3xl text-[#111827] block">
                      49,2 ming
                    </span>
                    <span className="text-xs text-[#64748B] mt-1 block">
                      Skrinshotda: 49,2 тыс. layk · 250 izoh · 106 repost
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E2E8F0] flex items-center justify-between text-xs text-[#64748B]">
                <span>Original fayl: ustoz-reel.png</span>
                <span className="font-bold text-[#2563EB]">To‘liq o‘lchamda ko‘rish →</span>
              </div>
            </div>
          </div>
        </div>

        {/* 5. KONTENT VIZUALI — ALOHIDA KATTA BLOK (ustoz-visual.png) */}
        <div className="mt-14 sm:mt-18 p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#F5F8FF] border border-[#E2E8F0]">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#2563EB] block mb-1">
                Kontent Tizimi va Rubrikalar
              </span>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#111827] tracking-tight">
                Kontent va vizual yo‘nalish
              </h3>
            </div>
            <span className="text-xs sm:text-sm font-semibold text-[#64748B]">
              Kontent rubrikalari, o‘qituvchilar va filiallar haqida yagona vizual tizim
            </span>
          </div>

          <div
            onClick={() =>
              openLightbox(
                caseData.images.visual,
                'Ustoz Akademiyasi — Kontent va vizual yo‘nalish',
                'Kontent rubrikalari, foydali arab tili darslari va o‘qituvchilar ishtirokidagi Reels muqovalari (ustoz-visual.png).'
              )
            }
            className="group p-6 sm:p-8 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm hover:shadow-md hover:border-[#2563EB]/40 transition-all cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            role="button"
            tabIndex={0}
            aria-label="Kontent va vizual yo‘nalish rasmini kattalashtirib ko‘rish"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                openLightbox(
                  caseData.images.visual,
                  'Ustoz Akademiyasi — Kontent va vizual yo‘nalish',
                  'Kontent rubrikalari, foydali arab tili darslari va o‘qituvchilar ishtirokidagi Reels muqovalari (ustoz-visual.png).'
                );
              }
            }}
          >
            {/* Chap ustun: Kontent rubrikalari va vizual tizim tavsifi */}
            <div className="lg:col-span-5 flex flex-col justify-between order-2 lg:order-1">
              <div>
                <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#2563EB] mb-2">
                  <LayoutGrid className="w-4 h-4" />
                  <span>Lenta va Rubrikalar Tizimi</span>
                </div>
                <h4 className="font-display font-extrabold text-2xl text-[#111827] leading-snug">
                  Tizimli kontent rubrikalari va brend identifikatsiyasi
                </h4>
                <p className="mt-3 text-sm sm:text-base text-[#64748B] leading-relaxed">
                  Bozor va raqobatchilar tahlili asosida o‘quvchilar uchun qiziqarli bo‘lgan doimiy kontent rubrikalari, o‘qituvchilar ishtirokidagi ekspert videolari hamda akademiya hayotini yorituvchi vizual yo‘nalish shakllantirildi.
                </p>

                <div className="mt-6 space-y-3">
                  <div className="p-4 rounded-2xl bg-[#F5F8FF] border border-[#E2E8F0]">
                    <span className="text-xs font-bold text-[#2563EB] uppercase tracking-wider block">
                      01 · Ekspert va foydali rubrikalar
                    </span>
                    <p className="text-xs sm:text-sm text-[#111827] font-medium mt-1">
                      “Arab tilidagi eng muhim mavzular”, “Ranglar arab tilida”, “Nega arab tilidagi kitoblar harakatsiz yoziladi?”, “Ko‘pincha bir xil o‘qiladigan harflar”.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#F5F8FF] border border-[#E2E8F0]">
                    <span className="text-xs font-bold text-[#2563EB] uppercase tracking-wider block">
                      02 · Real vaziyatlar va amaliy so‘zlashuv
                    </span>
                    <p className="text-xs sm:text-sm text-[#111827] font-medium mt-1">
                      “Bikam al-kilu? Kilosi nech pul?”, “Bahorga oid so‘zlar”, “Ya’ni so‘zi” kabi kundalik hayotdagi foydali iboralar.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#F5F8FF] border border-[#E2E8F0]">
                    <span className="text-xs font-bold text-[#2563EB] uppercase tracking-wider block">
                      03 · O‘qituvchilar, o‘quvchilar va qabul kontenti
                    </span>
                    <p className="text-xs sm:text-sm text-[#111827] font-medium mt-1">
                      “Nega aynan Ustoz Akademiyasini tanladingiz?”, “Arab tili kurslariga qabul ochiq” hamda o‘qituvchilar va bolalar guruhlari ishtirokidagi videolar.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E2E8F0] flex items-center justify-between text-xs text-[#64748B]">
                <span>Original fayl: ustoz-visual.png</span>
                <span className="font-bold text-[#2563EB]">Kattalashtirib ko‘rish →</span>
              </div>
            </div>

            {/* O'ng ustun: ustoz-visual.png katta va aniq ko'rinishda */}
            <div className="lg:col-span-7 relative w-full rounded-2xl overflow-hidden bg-[#F5F8FF] border border-[#E2E8F0] flex items-center justify-center p-3 sm:p-4 order-1 lg:order-2">
              <img
                src={caseData.images.visual}
                alt="Ustoz Akademiyasi — Kontent va vizual yo‘nalish (ustoz-visual.png)"
                className="w-full h-auto max-h-[680px] object-contain rounded-xl group-hover:scale-[1.01] transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
              <span className="absolute top-4 right-4 px-3 py-1.5 rounded-md bg-slate-900/75 backdrop-blur-xs text-white text-xs font-semibold flex items-center gap-1.5">
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Kattalashtirish</span>
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
          aria-labelledby="ustoz-lightbox-title"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-700"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-100 bg-white">
              <div>
                <h3
                  id="ustoz-lightbox-title"
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
