import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Award,
  BookOpen,
  Briefcase,
  CheckCircle2,
  GraduationCap,
  Layers,
  Maximize2,
  Send,
  SlidersHorizontal,
  Sparkles,
  UserCheck,
  X,
} from 'lucide-react';
import { BOTTOM_SECTIONS_DATA, PROFILE_DATA } from '../utils/portfolio.ts';
import {
  appendContactRowToSheet,
  createPortfolioContactsSheet,
  fetchSpreadsheetMetadata,
  getAccessToken,
  getActiveSpreadsheetMeta,
  googleSignIn,
  initAuth,
  isGoogleSheetsEndpointConfigured,
  listDriveSpreadsheets,
  logout,
  setActiveSpreadsheetMeta,
  submitContactToGoogleSheets,
  validateContactFormInput,
  type ActiveSpreadsheetMeta,
  type DriveSpreadsheetItem,
} from '../services/googleSheets.ts';

interface LightboxState {
  isOpen: boolean;
  src: string;
  title: string;
  subtitle: string;
}

export const PortfolioBottomSections: React.FC = () => {
  const data = BOTTOM_SECTIONS_DATA;

  // 1. Before / After Interactive State
  const [activeTabId, setActiveTabId] = useState<string>(data.beforeAfterItems[0].id);
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [viewMode, setViewMode] = useState<'side-by-side' | 'slider'>('side-by-side');

  const activeComparison =
    data.beforeAfterItems.find((item) => item.id === activeTabId) ||
    data.beforeAfterItems[0];

  // Lightbox for Before / After authentic screenshots
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

  // 6. Contact Form State (Google Sheets integration + duplicate submission lock)
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const isSubmittingRef = React.useRef(false);

  // Google Workspace OAuth & Sheet state
  const [needsAuth, setNeedsAuth] = useState(true);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [driveSheets, setDriveSheets] = useState<DriveSpreadsheetItem[]>([]);
  const [activeSheet, setActiveSheet] = useState<ActiveSpreadsheetMeta | null>(
    getActiveSpreadsheetMeta()
  );
  const [confirmAppendOpen, setConfirmAppendOpen] = useState(false);

  const loadUserSpreadsheets = async (token: string) => {
    try {
      const files = await listDriveSpreadsheets(token);
      setDriveSheets(files);
      if (!getActiveSpreadsheetMeta() && files.length > 0) {
        const preferred =
          files.find(
            (f) =>
              f.name.toLowerCase().includes('murojaatlar') ||
              f.name.toLowerCase().includes('portfolio')
          ) || files[0];
        const meta = await fetchSpreadsheetMetadata(token, preferred.id);
        setActiveSpreadsheetMeta(meta);
        setActiveSheet(meta);
      }
    } catch (err) {
      console.error('Drive spreadsheets load error:', err);
    }
  };

  useEffect(() => {
    const unsubscribe = initAuth(
      (_user, token) => {
        setNeedsAuth(false);
        void loadUserSpreadsheets(token);
      },
      () => {
        setNeedsAuth(true);
      }
    );
    return () => unsubscribe();
  }, []);

  const handleGoogleLogin = async () => {
    setIsLoggingIn(true);
    setSubmitError(null);
    try {
      const res = await googleSignIn();
      if (res) {
        setNeedsAuth(false);
        await loadUserSpreadsheets(res.accessToken);
      }
    } catch {
      setSubmitError('Google orqali ulanishda xatolik yuz berdi.');
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleSelectSheet = async (spreadsheetId: string) => {
    if (!spreadsheetId) return;
    const token = await getAccessToken();
    if (!token) {
      setNeedsAuth(true);
      return;
    }
    try {
      const meta = await fetchSpreadsheetMetadata(token, spreadsheetId);
      setActiveSpreadsheetMeta(meta);
      setActiveSheet(meta);
    } catch {
      setSubmitError('Tanlangan Google Sheet ma’lumotlarini yuklab bo‘lmadi.');
    }
  };

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmittingRef.current || isSubmitting) return;

    setSubmitError(null);
    const validation = validateContactFormInput({ name, contact, message });
    if (!validation.valid) {
      setSubmitError(validation.message);
      return;
    }

    // 1. If Google OAuth token is active, open explicit confirmation dialog before mutating Google Sheet
    const token = await getAccessToken();
    if (token) {
      setConfirmAppendOpen(true);
      return;
    }

    // 2. Otherwise fall back to configured Apps Script Web App endpoint (or report if not configured)
    isSubmittingRef.current = true;
    setIsSubmitting(true);

    try {
      const result = await submitContactToGoogleSheets({
        name,
        contact,
        message,
        source: 'contact-section',
      });

      if (!result.ok) {
        setSubmitError(result.message);
        return;
      }

      setSubmitted(true);
    } finally {
      isSubmittingRef.current = false;
      setIsSubmitting(false);
    }
  };

  const handleConfirmAppendToSheet = async () => {
    if (isSubmittingRef.current || isSubmitting) return;
    const token = await getAccessToken();
    if (!token) {
      setConfirmAppendOpen(false);
      setNeedsAuth(true);
      return;
    }

    isSubmittingRef.current = true;
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      let targetMeta = activeSheet;
      if (!targetMeta) {
        targetMeta = await createPortfolioContactsSheet(token);
        setActiveSpreadsheetMeta(targetMeta);
        setActiveSheet(targetMeta);
        await loadUserSpreadsheets(token);
      }

      await appendContactRowToSheet(token, targetMeta, {
        name,
        contact,
        message,
        source: 'contact-section',
      });

      setConfirmAppendOpen(false);
      setSubmitted(true);
    } catch {
      setConfirmAppendOpen(false);
      setSubmitError(
        'Kontakt ma’lumotlarini Google Sheets jadvaliga yozishda xatolik yuz berdi.'
      );
    } finally {
      isSubmittingRef.current = false;
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* =====================================================================
          1. BEFORE / AFTER SECTION
      ===================================================================== */}
      <section
        id="before-after"
        aria-label="Oldin va Keyin natijalar taqqoslashi"
        className="relative scroll-mt-20 sm:scroll-mt-24 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#F5F8FF] border-t border-[#E2E8F0]"
      >
        <div className="max-w-6xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#E2E8F0]">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#2563EB] mb-2">
                <SlidersHorizontal className="w-4 h-4" />
                <span>Vizual va Statistik Transformatsiya</span>
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#111827] tracking-tight">
                Before / After — Oldin va Keyin
              </h2>
              <p className="mt-2.5 text-sm sm:text-base text-[#64748B] max-w-2xl leading-relaxed">
                Loyihalarda profil qadoqlanishi, vizual uslub va auditoriya ko‘rsatkichlarining real skrinshotlar asosidagi o‘zgarishi.
              </p>
            </div>

            {/* Ko'rish usulini tanlash (Yonma-yon yoki Interaktiv Slayder) */}
            <div className="flex items-center gap-2 bg-white p-1.5 rounded-2xl border border-[#E2E8F0] self-start lg:self-auto">
              <button
                type="button"
                onClick={() => setViewMode('side-by-side')}
                className={`px-3.5 py-2 rounded-xl text-xs font-extrabold transition-colors cursor-pointer ${
                  viewMode === 'side-by-side'
                    ? 'bg-[#2563EB] text-white'
                    : 'text-[#64748B] hover:text-[#111827]'
                }`}
              >
                Yonma-yon taqqoslash
              </button>
              <button
                type="button"
                onClick={() => setViewMode('slider')}
                className={`px-3.5 py-2 rounded-xl text-xs font-extrabold transition-colors cursor-pointer ${
                  viewMode === 'slider'
                    ? 'bg-[#2563EB] text-white'
                    : 'text-[#64748B] hover:text-[#111827]'
                }`}
              >
                Interaktiv slayder
              </button>
            </div>
          </div>

          {/* Loyiha tanlash tugmalari (4 ta haqiqiy original keys) */}
          <div
            className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
            role="tablist"
            aria-label="Before / After loyihalari"
          >
            {data.beforeAfterItems.map((item) => {
              const isSelected = item.id === activeComparison.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveTabId(item.id)}
                  className={`text-left p-4 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-white border-2 border-[#2563EB] shadow-xs'
                      : 'bg-white/70 border-[#E2E8F0] hover:border-[#2563EB]/40'
                  }`}
                >
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#2563EB] block">
                    {item.category}
                  </span>
                  <span className="font-display font-bold text-sm sm:text-base text-[#111827] mt-1 block">
                    {item.projectTitle}
                  </span>
                  <span className="text-xs font-bold text-[#64748B] mt-1.5 block">
                    {item.metricBadge}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Tanlangan loyiha transformatsiyasi kartasi */}
          <div className="mt-6 p-6 sm:p-8 rounded-3xl bg-white border border-[#E2E8F0]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E2E8F0]">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#2563EB]">
                  {activeComparison.category}
                </span>
                <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#111827] mt-0.5">
                  {activeComparison.projectTitle}
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] mt-1 max-w-2xl leading-relaxed">
                  {activeComparison.summary}
                </p>
              </div>
              <div className="px-4 py-2 rounded-xl bg-[#EAF2FF] text-[#2563EB] font-display font-extrabold text-sm sm:text-base shrink-0 self-start sm:self-center">
                {activeComparison.metricBadge}
              </div>
            </div>

            {viewMode === 'side-by-side' ? (
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {/* OLDIN (BEFORE) */}
                <div
                  onClick={() =>
                    openLightbox(
                      activeComparison.beforeImage,
                      `${activeComparison.projectTitle} — Oldin`,
                      activeComparison.beforeLabel
                    )
                  }
                  className="group p-4 sm:p-5 rounded-2xl bg-[#F5F8FF] border border-[#E2E8F0] hover:border-[#2563EB]/40 transition-all cursor-pointer flex flex-col justify-between"
                  role="button"
                  tabIndex={0}
                  aria-label={`${activeComparison.projectTitle} Oldin rasmini kattalashtirish`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      openLightbox(
                        activeComparison.beforeImage,
                        `${activeComparison.projectTitle} — Oldin`,
                        activeComparison.beforeLabel
                      );
                    }
                  }}
                >
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-md bg-white border border-[#E2E8F0] text-xs font-extrabold uppercase tracking-wider text-[#64748B]">
                      Oldin (Before)
                    </span>
                    <span className="text-xs font-bold text-[#2563EB] flex items-center gap-1">
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Kattalashtirish</span>
                    </span>
                  </div>

                  <div className="relative w-full rounded-xl overflow-hidden bg-white border border-[#E2E8F0] flex items-center justify-center p-3">
                    <img
                      src={activeComparison.beforeImage}
                      alt={activeComparison.beforeLabel}
                      className="w-full h-auto max-h-[500px] object-contain rounded-lg"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <p className="text-xs font-semibold text-[#64748B] mt-3">
                    {activeComparison.beforeLabel}
                  </p>
                </div>

                {/* KEYIN (AFTER) */}
                <div
                  onClick={() =>
                    openLightbox(
                      activeComparison.afterImage,
                      `${activeComparison.projectTitle} — Keyin`,
                      activeComparison.afterLabel
                    )
                  }
                  className="group p-4 sm:p-5 rounded-2xl bg-[#EAF2FF]/45 border-2 border-[#2563EB] transition-all cursor-pointer flex flex-col justify-between"
                  role="button"
                  tabIndex={0}
                  aria-label={`${activeComparison.projectTitle} Keyin rasmini kattalashtirish`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      openLightbox(
                        activeComparison.afterImage,
                        `${activeComparison.projectTitle} — Keyin`,
                        activeComparison.afterLabel
                      );
                    }
                  }}
                >
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-md bg-[#2563EB] text-xs font-extrabold uppercase tracking-wider text-white">
                      Keyin (After)
                    </span>
                    <span className="text-xs font-bold text-[#2563EB] flex items-center gap-1">
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Kattalashtirish</span>
                    </span>
                  </div>

                  <div className="relative w-full rounded-xl overflow-hidden bg-white border border-[#E2E8F0] flex items-center justify-center p-3">
                    <img
                      src={activeComparison.afterImage}
                      alt={activeComparison.afterLabel}
                      className="w-full h-auto max-h-[500px] object-contain rounded-lg"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <p className="text-xs font-bold text-[#111827] mt-3">
                    {activeComparison.afterLabel}
                  </p>
                </div>
              </div>
            ) : (
              /* INTERAKTIV SLAYDER REJIMI */
              <div className="mt-6">
                <div className="max-w-xl mx-auto">
                  <div className="flex items-center justify-between text-xs font-extrabold uppercase tracking-wider mb-3">
                    <span className="text-[#64748B]">← Oldin (Before)</span>
                    <span className="text-[#2563EB]">Slayder: {sliderPosition}%</span>
                    <span className="text-[#2563EB]">Keyin (After) →</span>
                  </div>

                  <div className="relative w-full h-[460px] sm:h-[540px] rounded-2xl overflow-hidden bg-[#F5F8FF] border-2 border-[#E2E8F0] select-none">
                    {/* Asosiy qatlam: Keyin (After) */}
                    <img
                      src={activeComparison.afterImage}
                      alt={activeComparison.afterLabel}
                      className="absolute inset-0 w-full h-full object-contain p-4 bg-white"
                      referrerPolicy="no-referrer"
                    />

                    {/* Ustki qirqilgan qatlam: Oldin (Before) */}
                    <div
                      className="absolute inset-0 overflow-hidden bg-[#F5F8FF]"
                      style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                    >
                      <img
                        src={activeComparison.beforeImage}
                        alt={activeComparison.beforeLabel}
                        className="w-full h-full object-contain p-4 bg-[#F8FAFC]"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Vertikal ajratuvchi chiziq */}
                    <div
                      className="absolute top-0 bottom-0 w-0.5 bg-[#2563EB] pointer-events-none"
                      style={{ left: `${sliderPosition}%` }}
                    >
                      <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#2563EB] text-white flex items-center justify-center shadow-md text-xs font-bold">
                        ↔
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <label
                      htmlFor="before-after-range"
                      className="block text-xs font-bold text-[#64748B] text-center mb-2"
                    >
                      Oldin va Keyin holatini solishtirish uchun slayderni suring
                    </label>
                    <input
                      id="before-after-range"
                      type="range"
                      min={0}
                      max={100}
                      value={sliderPosition}
                      onChange={(e) => setSliderPosition(Number(e.target.value))}
                      className="w-full accent-[#2563EB] cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. MEN HAQIMDA — PROFESSIONAL POSITIONING
      ===================================================================== */}
      <section
        id="about"
        aria-label="Men haqimda — professional pozitsionirovaniye"
        className="relative scroll-mt-20 sm:scroll-mt-24 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-[#E2E8F0]"
      >
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#2563EB] mb-2">
                <UserCheck className="w-4 h-4" />
                <span>Professional Pozitsionirovaniye</span>
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#111827] tracking-tight">
                Men haqimda
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#64748B] leading-relaxed">
                {PROFILE_DATA.name} — {PROFILE_DATA.role}.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="p-6 sm:p-8 rounded-3xl bg-[#F5F8FF] border-2 border-[#2563EB]/30">
                <blockquote className="font-display font-bold text-lg sm:text-xl lg:text-2xl text-[#111827] leading-relaxed">
                  “{data.aboutPositioningQuote}”
                </blockquote>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {data.aboutPillars.map((pillar, idx) => (
                  <div
                    key={pillar.title}
                    className="p-5 rounded-2xl bg-white border border-[#E2E8F0] flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-xs font-extrabold text-[#2563EB] block mb-1.5">
                        0{idx + 1}
                      </span>
                      <h3 className="font-display font-bold text-base text-[#111827]">
                        {pillar.title}
                      </h3>
                      <p className="mt-2 text-xs text-[#64748B] leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. ISH TAJRIBASI
      ===================================================================== */}
      <section
        id="experience"
        aria-label="Ish tajribasi"
        className="relative scroll-mt-20 sm:scroll-mt-24 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#F5F8FF] border-t border-[#E2E8F0]"
      >
        <div className="max-w-6xl mx-auto w-full">
          <div className="pb-8 border-b border-[#E2E8F0] flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#2563EB] mb-2">
                <Briefcase className="w-4 h-4" />
                <span>Karera va Amaliy Faoliyat</span>
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#111827] tracking-tight">
                Ish tajribasi
              </h2>
            </div>
            <span className="text-xs sm:text-sm font-bold text-[#64748B]">
              2022–2026 yillar xronologiyasi
            </span>
          </div>

          <div className="mt-8 relative border-l-2 border-[#2563EB]/30 ml-3 sm:ml-6 pl-6 sm:pl-8 space-y-6">
            {data.experiences.map((exp) => (
              <div
                key={exp.id}
                className="relative p-6 sm:p-7 rounded-3xl bg-white border border-[#E2E8F0] hover:border-[#2563EB]/40 transition-colors"
              >
                {/* Timeline dot */}
                <span
                  className="absolute -left-[31px] sm:-left-[39px] top-7 w-4 h-4 rounded-full bg-[#2563EB] border-4 border-[#F5F8FF]"
                  aria-hidden="true"
                />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#E2E8F0]">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="px-3 py-1 rounded-lg bg-[#EAF2FF] text-[#2563EB] text-xs font-extrabold">
                      {exp.period}
                    </span>
                    <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#111827]">
                      {exp.company}
                    </h3>
                  </div>
                  <span className="text-xs sm:text-sm font-extrabold text-[#2563EB]">
                    {exp.role}
                  </span>
                </div>

                <p className="mt-3.5 text-sm sm:text-base text-[#64748B] leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. KOMPETENSIYALAR
      ===================================================================== */}
      <section
        id="competencies"
        aria-label="Kompetensiyalar"
        className="relative scroll-mt-20 sm:scroll-mt-24 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-[#E2E8F0]"
      >
        <div className="max-w-6xl mx-auto w-full">
          <div className="pb-8 border-b border-[#E2E8F0] flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#2563EB] mb-2">
                <Layers className="w-4 h-4" />
                <span>Mutaxassislik Yo‘nalishlari</span>
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#111827] tracking-tight">
                Kompetensiyalar
              </h2>
            </div>
            <span className="text-xs sm:text-sm font-semibold text-[#64748B]">
              5 ta asosiy professional yo‘nalish
            </span>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.competencies.map((comp, idx) => (
              <div
                key={comp.id}
                className={`p-6 sm:p-7 rounded-3xl bg-[#F5F8FF] border border-[#E2E8F0] flex flex-col justify-between ${
                  idx === 4 ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#2563EB]">
                      0{idx + 1} · Yo‘nalish
                    </span>
                    <Sparkles className="w-4 h-4 text-[#2563EB]" />
                  </div>
                  <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#111827]">
                    {comp.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    {comp.description}
                  </p>

                  <ul className="mt-5 space-y-2.5 pt-4 border-t border-[#E2E8F0]">
                    {comp.tasks.map((task) => (
                      <li
                        key={task}
                        className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-[#111827]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          5. TA’LIM VA PROFESSIONAL RIVOJLANISH
      ===================================================================== */}
      <section
        id="education"
        aria-label="Ta’lim va professional rivojlanish"
        className="relative scroll-mt-20 sm:scroll-mt-24 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#F5F8FF] border-t border-[#E2E8F0]"
      >
        <div className="max-w-6xl mx-auto w-full">
          <div className="pb-8 border-b border-[#E2E8F0] flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#2563EB] mb-2">
                <GraduationCap className="w-4 h-4" />
                <span>Akademik Baza va Malaka Oshirish</span>
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#111827] tracking-tight">
                Ta’lim va professional rivojlanish
              </h2>
            </div>
            <span className="text-xs sm:text-sm font-semibold text-[#64748B]">
              Oliy ta’lim va ixtisoslashtirilgan dasturlar
            </span>
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Oliy ta'lim */}
            <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-white border-2 border-[#2563EB] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#2563EB] mb-3">
                  <GraduationCap className="w-4 h-4" />
                  <span>Oliy Ta’lim · {data.universityEducation.year}</span>
                </div>
                <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#111827] leading-snug">
                  {data.universityEducation.institution}
                </h3>
                <p className="mt-2.5 text-sm sm:text-base font-bold text-[#2563EB]">
                  {data.universityEducation.field}, {data.universityEducation.year}
                </p>
              </div>
              <p className="mt-6 pt-4 border-t border-[#E2E8F0] text-xs text-[#64748B] leading-relaxed">
                Iqtisodiyot va menejment yo‘nalishidagi fundamental bilimlar marketingni biznes jarayonlari bilan uyg‘unlashtirishga asos bo‘lgan.
              </p>
            </div>

            {/* Professional kurslar va intensiv dasturlar */}
            <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-white border border-[#E2E8F0]">
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#2563EB] mb-4">
                <BookOpen className="w-4 h-4" />
                <span>Professional Kurslar va Rivojlanish Dasturlari</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {data.professionalCourses.map((course) => (
                  <div
                    key={course.id}
                    className="p-4 rounded-2xl bg-[#F5F8FF] border border-[#E2E8F0] flex items-start gap-3"
                  >
                    <Award className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-display font-bold text-sm text-[#111827]">
                        {course.provider}
                      </div>
                      <div className="text-xs font-semibold text-[#2563EB] mt-0.5">
                        {course.program}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          6. BOG‘LANISH
      ===================================================================== */}
      <section
        id="contact"
        aria-label="Bog‘lanish"
        className="relative scroll-mt-20 sm:scroll-mt-24 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-[#E2E8F0]"
      >
        <div className="max-w-6xl mx-auto w-full">
          <div className="p-6 sm:p-10 lg:p-12 rounded-3xl bg-[#F5F8FF] border-2 border-[#2563EB]/30 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#2563EB] block mb-2">
                Hamkorlik va Aloqa
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#111827] tracking-tight leading-tight">
                {data.contactCtaTitle}
              </h2>
              <p className="mt-4 text-sm sm:text-base text-[#64748B] leading-relaxed">
                {data.contactCtaSubtitle}
              </p>

              <div className="mt-6 pt-6 border-t border-[#E2E8F0] space-y-2.5 text-xs sm:text-sm text-[#111827] font-semibold">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <span>Kontent-strategiya va SMM tizimini yo‘lga qo‘yish</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <span>Target Ads va Performance Marketing orqali lead/sotuv jalb qilish</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <span>Marketing jarayonlarini kompleks boshqarish</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E2E8F0] shadow-xs">
                {submitted ? (
                  <div className="py-8 flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-[#EAF2FF] text-[#2563EB] flex items-center justify-center mb-3">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-display font-bold text-[#111827]">
                      Xabaringiz qabul qilindi!
                    </h3>
                    <p className="text-sm text-[#64748B] mt-1 max-w-xs">
                      Rahmat, {name}. Tez orada siz ko‘rsatgan aloqa manzili orqali bog‘lanaman.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setSubmitError(null);
                        setName('');
                        setContact('');
                        setMessage('');
                      }}
                      className="mt-6 px-5 py-2.5 bg-[#2563EB] text-white text-xs sm:text-sm font-bold rounded-xl hover:bg-[#1D4ED8] transition-colors cursor-pointer"
                    >
                      Yangi xabar yuborish
                    </button>
                  </div>
                ) : (
                  <form
                    name="portfolio-contact"
                    method="POST"
                    data-netlify="true"
                    noValidate
                    onSubmit={handleContactSubmit}
                    className="space-y-4"
                  >
                    <input type="hidden" name="form-name" value="portfolio-contact" />

                    <div>
                      <label
                        htmlFor="section-contact-name"
                        className="block text-xs font-bold text-[#111827] mb-1.5"
                      >
                        Ismingiz yoki kompaniyangiz <span className="text-[#2563EB]">*</span>
                      </label>
                      <input
                        id="section-contact-name"
                        name="name"
                        type="text"
                        required
                        disabled={isSubmitting}
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                          if (submitError) setSubmitError(null);
                        }}
                        placeholder="Masalan: Sardor Komilov"
                        className="w-full px-4 py-2.5 rounded-xl border border-[#E2E8F0] text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] transition-all disabled:opacity-60"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="section-contact-handle"
                        className="block text-xs font-bold text-[#111827] mb-1.5"
                      >
                        Telefon raqamingiz yoki Telegram <span className="text-[#2563EB]">*</span>
                      </label>
                      <input
                        id="section-contact-handle"
                        name="contact"
                        type="text"
                        required
                        disabled={isSubmitting}
                        value={contact}
                        onChange={(e) => {
                          setContact(e.target.value);
                          if (submitError) setSubmitError(null);
                        }}
                        placeholder="+998 90 123-45-67 yoki @username"
                        className="w-full px-4 py-2.5 rounded-xl border border-[#E2E8F0] text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] transition-all disabled:opacity-60"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="section-contact-message"
                        className="block text-xs font-bold text-[#111827] mb-1.5"
                      >
                        Loyiha haqida qisqacha ma’lumot
                      </label>
                      <textarea
                        id="section-contact-message"
                        name="message"
                        rows={3}
                        disabled={isSubmitting}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Loyiha yo‘nalishi va maqsadlaringiz..."
                        className="w-full px-4 py-2.5 rounded-xl border border-[#E2E8F0] text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] transition-all resize-none disabled:opacity-60"
                      />
                    </div>

                    {submitError && (
                      <div
                        role="alert"
                        aria-live="polite"
                        className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs font-semibold text-red-700 leading-relaxed"
                      >
                        {submitError}
                      </div>
                    )}

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-sm rounded-xl transition-all cursor-pointer disabled:opacity-60"
                      >
                        <span>{isSubmitting ? 'Yuborilmoqda...' : 'Xabarni yuborish'}</span>
                        <Send className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Google Sheets Direct Connection Bar */}
                    {!isGoogleSheetsEndpointConfigured() && (
                      <div className="pt-3 border-t border-[#E2E8F0] flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs">
                        {needsAuth ? (
                          <>
                            <span className="text-[#64748B]">
                              Google Sheets jadvaliga to‘g‘ridan-to‘g‘ri yozish:
                            </span>
                            <button
                              type="button"
                              onClick={handleGoogleLogin}
                              disabled={isLoggingIn}
                              className="gsi-material-button inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl bg-white hover:bg-slate-50 border border-[#E2E8F0] text-xs font-bold text-[#111827] transition-all cursor-pointer shrink-0 disabled:opacity-60"
                            >
                              <div className="gsi-material-button-state" />
                              <div className="gsi-material-button-content-wrapper flex items-center gap-2">
                                <div className="gsi-material-button-icon w-4 h-4 shrink-0">
                                  <svg
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 48 48"
                                    style={{ display: 'block', width: '100%', height: '100%' }}
                                  >
                                    <path
                                      fill="#EA4335"
                                      d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                                    />
                                    <path
                                      fill="#4285F4"
                                      d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                                    />
                                    <path
                                      fill="#FBBC05"
                                      d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                                    />
                                    <path
                                      fill="#34A853"
                                      d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                                    />
                                    <path fill="none" d="M0 0h48v48H0z" />
                                  </svg>
                                </div>
                                <span className="gsi-material-button-contents">
                                  {isLoggingIn ? 'Ulanmoqda...' : 'Sign in with Google'}
                                </span>
                                <span style={{ display: 'none' }}>Sign in with Google</span>
                              </div>
                            </button>
                          </>
                        ) : (
                          <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                            <div className="flex items-center gap-2 flex-1 min-w-0">
                              <span className="text-[#111827] font-bold shrink-0">
                                Google Sheet:
                              </span>
                              <select
                                aria-label="Google Sheets jadvalini tanlash"
                                value={activeSheet?.spreadsheetId || ''}
                                onChange={(e) => void handleSelectSheet(e.target.value)}
                                className="flex-1 min-w-0 px-2.5 py-1.5 rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] text-xs font-semibold text-[#111827]"
                              >
                                <option value="">
                                  {driveSheets.length === 0
                                    ? 'Avtomatik yangi jadval yaratiladi'
                                    : 'Jadvalni tanlang...'}
                                </option>
                                {driveSheets.map((s) => (
                                  <option key={s.id} value={s.id}>
                                    {s.name}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <button
                              type="button"
                              onClick={() => void logout()}
                              className="text-xs font-semibold text-[#64748B] hover:text-red-600 cursor-pointer shrink-0 self-end sm:self-auto"
                            >
                              Chiqish
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Minimal Footer */}
          <footer className="mt-12 pt-8 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
            <div className="font-bold text-[#111827]">
              {PROFILE_DATA.name} — {PROFILE_DATA.role}
            </div>
            <div>
              Kontent · SMM · Performance Marketing
            </div>
          </footer>
        </div>
      </section>

      {/* EXPLICIT USER CONFIRMATION MODAL FOR GOOGLE SHEETS MUTATION */}
      {confirmAppendOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="confirm-sheets-modal-title"
        >
          <div className="max-w-md w-full bg-white rounded-3xl p-6 border border-[#E2E8F0] shadow-2xl">
            <h3
              id="confirm-sheets-modal-title"
              className="font-display font-bold text-lg text-[#111827]"
            >
              Google Sheets jadvaliga yozishni tasdiqlaysizmi?
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#64748B] leading-relaxed">
              Quyidagi kontakt ma’lumotlari{' '}
              <strong className="text-[#111827]">
                {activeSheet
                  ? `"${activeSheet.title}" (${activeSheet.firstSheetTitle})`
                  : '"Kamronbek Portfolio — Murojaatlar" (yangi jadval)'}
              </strong>{' '}
              ichiga qo‘shiladi:
            </p>
            <div className="mt-3 p-3.5 rounded-2xl bg-[#F5F8FF] border border-[#E2E8F0] text-xs space-y-1">
              <div>
                <span className="text-[#64748B]">Ism / Kompaniya: </span>
                <strong className="text-[#111827]">{name}</strong>
              </div>
              <div>
                <span className="text-[#64748B]">Aloqa: </span>
                <strong className="text-[#111827]">{contact}</strong>
              </div>
              {message.trim() && (
                <div>
                  <span className="text-[#64748B]">Xabar: </span>
                  <span className="text-[#111827]">{message}</span>
                </div>
              )}
            </div>
            <div className="mt-5 flex items-center justify-end gap-2.5">
              <button
                type="button"
                onClick={() => setConfirmAppendOpen(false)}
                disabled={isSubmitting}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs sm:text-sm font-bold text-slate-700 transition-colors cursor-pointer"
              >
                Bekor qilish
              </button>
              <button
                type="button"
                onClick={() => void handleConfirmAppendToSheet()}
                disabled={isSubmitting}
                className="px-4 py-2 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-xs sm:text-sm font-bold text-white transition-colors cursor-pointer disabled:opacity-60"
              >
                {isSubmitting ? 'Saqlanmoqda...' : 'Tasdiqlash va yozish'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* LIGHTBOX MODAL FOR BEFORE / AFTER */}
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
    </>
  );
};
