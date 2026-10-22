/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { ApproachSection } from './components/ApproachSection.tsx';
import { HilolMedCaseStudy } from './components/HilolMedCaseStudy.tsx';
import { ScholarHubCaseStudy } from './components/ScholarHubCaseStudy.tsx';
import { OtlichnoCaseStudy } from './components/OtlichnoCaseStudy.tsx';
import { MarketingMaximumCaseStudy } from './components/MarketingMaximumCaseStudy.tsx';
import { UstozAkademiyasiCaseStudy } from './components/UstozAkademiyasiCaseStudy.tsx';
import { EngoraCaseStudy } from './components/EngoraCaseStudy.tsx';
import { MuxsinzadaCaseStudy } from './components/MuxsinzadaCaseStudy.tsx';
import { ZetricCaseStudy } from './components/ZetricCaseStudy.tsx';
import { IqiblaCaseStudy } from './components/IqiblaCaseStudy.tsx';
import { ZamonaCaseStudy } from './components/ZamonaCaseStudy.tsx';
import { IbtidoCaseStudy } from './components/IbtidoCaseStudy.tsx';
import { WaterFilterCaseStudy } from './components/WaterFilterCaseStudy.tsx';
import { PortfolioBottomSections } from './components/PortfolioBottomSections.tsx';
import { ContactModal } from './components/ContactModal.tsx';
import { usePortfolioScrollMotion } from './utils/scrollMotion.ts';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const { scrollProgress, activeNavHref, isScrolled } = usePortfolioScrollMotion();

  return (
    <div className="min-h-screen bg-white text-[#111827] flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* 1. Header / Navbar */}
      <Navbar
        onContactClick={() => setIsContactOpen(true)}
        scrollProgress={scrollProgress}
        activeNavHref={activeNavHref}
        isScrolled={isScrolled}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Block 1: Hero Section (Preserved & Intact) */}
        <HeroSection onContactClick={() => setIsContactOpen(true)} />

        {/* Block 2: Marketingga Tizimli Yondashuv (Preserved & Intact) */}
        <ApproachSection />

        {/* Block 3: Hilol Med Case Study (Preserved & Intact) */}
        <HilolMedCaseStudy />

        {/* Block 4: ScholarHUB Case Study (Preserved & Intact) */}
        <ScholarHubCaseStudy />

        {/* Block 5: Otlichno O‘quv Markazi Case Study (Preserved & Intact) */}
        <OtlichnoCaseStudy />

        {/* Block 6: Marketing Maximum Case Study (Preserved & Intact) */}
        <MarketingMaximumCaseStudy />

        {/* Block 7: Ustoz Akademiyasi Case Study (Preserved & Intact) */}
        <UstozAkademiyasiCaseStudy />

        {/* Block 8: Engora Case Study (Preserved & Intact) */}
        <EngoraCaseStudy />

        {/* Block 9: Muxsinzada Perfumes Case Study (Preserved & Intact) */}
        <MuxsinzadaCaseStudy />

        {/* Block 10: Zetric B2B Case Study (Preserved & Intact) */}
        <ZetricCaseStudy />

        {/* Block 11: IQibla Smart Devices Case Study (Preserved & Intact) */}
        <IqiblaCaseStudy />

        {/* Block 12: Zamona To‘yxonasi Target Ads Case Study (Preserved & Intact) */}
        <ZamonaCaseStudy />

        {/* Block 13: Ibtido Ta’lim Target Ads / Lead Generation Case Study (Preserved & Intact) */}
        <IbtidoCaseStudy />

        {/* Block 14: Suv filtri loyihasi SMM + Target Ads Case Study (Preserved & Intact) */}
        <WaterFilterCaseStudy />

        {/* Ordered Sections Below Projects:
            1. Before / After
            2. Men haqimda
            3. Ish tajribasi
            4. Kompetensiyalar
            5. Ta’lim va professional rivojlanish
            6. Bog‘lanish */}
        <PortfolioBottomSections />
      </main>

      {/* Contact Dialog */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}
