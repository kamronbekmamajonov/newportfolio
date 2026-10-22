import React from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { ArrowDownRight, ArrowRight, UserCheck } from 'lucide-react';
import { HERO_STATS, PROFILE_DATA } from '../utils/portfolio.ts';
import { PortraitCard } from './PortraitCard.tsx';

interface HeroSectionProps {
  onContactClick?: () => void;
}

const EASE_OUT_EXPO: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const HeroSection: React.FC<HeroSectionProps> = () => {
  const prefersReducedMotion = useReducedMotion();
  const { scrollY } = useScroll();

  // Restrained scroll-reactive parallax for the portrait stage and background grid
  const portraitParallaxY = useTransform(
    scrollY,
    [0, 600],
    prefersReducedMotion ? [0, 0] : [0, -22]
  );
  const gridParallaxY = useTransform(
    scrollY,
    [0, 600],
    prefersReducedMotion ? [0, 0] : [0, 28]
  );

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      aria-label="Kamronbek Mamajonov — Digital Marketolog Portfolio Hero"
      className="relative min-h-[calc(100vh-84px)] flex flex-col justify-center px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 pb-12 sm:pb-16 lg:py-16 overflow-hidden bg-white"
    >
      {/* Subtle Boldex-inspired geometric grid background with gentle scroll parallax */}
      <motion.div
        style={{ y: gridParallaxY }}
        className="absolute inset-0 pointer-events-none opacity-65"
        aria-hidden="true"
      >
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="hero-arch-grid"
              width="88"
              height="88"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 88 0 L 0 0 0 88"
                fill="none"
                stroke="#E2E8F0"
                strokeWidth="0.9"
              />
              <path
                d="M 0 88 L 88 0"
                fill="none"
                stroke="#EAF2FF"
                strokeWidth="0.8"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-arch-grid)" />
        </svg>
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 20% 35%, rgba(234,242,255,0.7) 0%, rgba(255,255,255,0.88) 55%, #FFFFFF 100%)',
          }}
        />
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Main Hero Composition: Boldex 12-column split (Left Typography & CTAs, Right Integrated Portrait) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Orchestrated Staggered Entrance */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* 1. Status Pill (Boldex style) */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: EASE_OUT_EXPO, delay: 0.02 }}
              className="inline-flex items-center gap-2.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#F5F8FF] border border-[#E2E8F0] shadow-2xs mb-5 sm:mb-6"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-[#111827]">
                DIGITAL MARKETOLOG · UZBEKISTAN
              </span>
            </motion.div>

            {/* 2. Personal Brand Identity Kicker */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: EASE_OUT_EXPO, delay: 0.08 }}
              className="flex flex-wrap items-center gap-2.5 mb-2.5 text-sm sm:text-base font-extrabold text-[#2563EB]"
            >
              <span>{PROFILE_DATA.name}</span>
              <span className="text-[#E2E8F0]" aria-hidden="true">
                /
              </span>
              <span className="text-[#64748B] font-semibold">
                {PROFILE_DATA.role}
              </span>
            </motion.div>

            {/* 3. Expressive Display Headline with Coordinated Line Reveal */}
            <motion.h1
              initial={prefersReducedMotion ? false : { opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.68, ease: EASE_OUT_EXPO, delay: 0.14 }}
              className="font-display font-extrabold text-[#111827] text-[2.35rem] sm:text-5xl lg:text-[3.85rem] leading-[1.08] tracking-tight mb-5 sm:mb-6 max-w-2xl"
            >
              Marketingni{' '}
              <span className="text-[#2563EB]">tizimli</span>{' '}
              boshqaraman.
            </motion.h1>

            {/* 4. Supporting Text */}
            <motion.p
              initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: EASE_OUT_EXPO, delay: 0.22 }}
              className="text-base sm:text-lg lg:text-[1.15rem] text-[#64748B] leading-relaxed max-w-xl mb-7 sm:mb-9 font-medium"
            >
              <strong className="font-bold text-[#111827]">
                Kontent, SMM va Performance Marketingni
              </strong>{' '}
              birlashtirib, biznes maqsadlariga xizmat qiladigan marketing yechimlari ustida ishlayman.
            </motion.p>

            {/* 5. Boldex-inspired CTA Row */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: EASE_OUT_EXPO, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto"
            >
              {/* Primary CTA: Scrolls to #projects */}
              <a
                href="#projects"
                onClick={(e) => handleSmoothScroll(e, 'projects')}
                className="group inline-flex items-center justify-start gap-3.5 pl-2.5 pr-6 py-2.5 rounded-full text-sm sm:text-base font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] hover:-translate-y-0.5 active:scale-[0.99] shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/30 transition-all duration-200 cursor-pointer"
              >
                <span className="w-9 h-9 rounded-full bg-white text-[#2563EB] flex items-center justify-center shrink-0 group-hover:translate-x-1 transition-transform duration-200">
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
                </span>
                <span>Loyihalarimni ko‘rish</span>
              </a>

              {/* Secondary CTA: Scrolls to #about */}
              <a
                href="#about"
                onClick={(e) => handleSmoothScroll(e, 'about')}
                className="group inline-flex items-center justify-between sm:justify-start gap-3 pl-2.5 pr-6 py-2.5 rounded-full text-sm sm:text-base font-bold text-[#111827] bg-[#F5F8FF] hover:bg-[#EAF2FF] hover:text-[#2563EB] hover:-translate-y-0.5 active:scale-[0.99] border border-[#E2E8F0] hover:border-[#2563EB]/30 transition-all duration-200 cursor-pointer"
              >
                <span className="inline-flex items-center gap-3">
                  <span className="w-9 h-9 rounded-full bg-white border border-[#E2E8F0] text-[#2563EB] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
                    <UserCheck className="w-4 h-4" aria-hidden="true" />
                  </span>
                  <span>Men haqimda</span>
                </span>
                <ArrowDownRight
                  className="w-4 h-4 text-[#64748B] group-hover:text-[#2563EB] group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-all duration-200"
                  aria-hidden="true"
                />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Integrated Boldex-inspired Portrait Composition with Scroll Parallax */}
          <motion.div
            style={{ y: portraitParallaxY }}
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.78, ease: EASE_OUT_EXPO, delay: 0.16 }}
            className="lg:col-span-5 flex justify-center lg:justify-end w-full"
          >
            <PortraitCard className="max-w-[400px] sm:max-w-[440px] lg:max-w-[470px]" />
          </motion.div>
        </div>

        {/* Bottom Statistics Bar: 3 Key Proof Points with Staggered Reveal */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: EASE_OUT_EXPO, delay: 0.38 }}
          className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-[#E2E8F0]"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 lg:gap-12">
            {HERO_STATS.map((stat) => (
              <div
                key={stat.id}
                className="flex items-center sm:items-start justify-between sm:justify-start sm:flex-col p-4 sm:p-0 rounded-2xl sm:rounded-none bg-[#F5F8FF]/80 sm:bg-transparent border border-[#E2E8F0] sm:border-0"
              >
                <div>
                  <span className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#2563EB] tracking-tight tabular-nums block">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm font-extrabold text-[#111827] mt-0.5 block capitalize">
                    {stat.label}
                  </span>
                </div>
                {stat.description && (
                  <span className="text-xs text-[#64748B] sm:mt-0.5 font-medium text-right sm:text-left">
                    {stat.description}
                  </span>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
