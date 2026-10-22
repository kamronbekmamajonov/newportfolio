import React, { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { NAV_LINKS, PROFILE_DATA } from '../utils/portfolio.ts';

interface NavbarProps {
  onContactClick?: () => void;
  scrollProgress?: number;
  activeNavHref?: string;
  isScrolled?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  onContactClick,
  scrollProgress = 0,
  activeNavHref = '#hero',
  isScrolled = false,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileMenuOpen(false);
    if (href === '#contact' && onContactClick) {
      e.preventDefault();
      onContactClick();
      return;
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4 pb-2 transition-all duration-300">
      {/* Top Scroll Progress Indicator Bar */}
      <div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-transparent z-50 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="h-full bg-[#2563EB] origin-left transition-transform duration-75 ease-out"
          style={{ transform: `scaleX(${scrollProgress})` }}
        />
      </div>

      <div className="max-w-6xl mx-auto">
        <nav
          aria-label="Asosiy navigatsiya"
          className={`flex items-center justify-between gap-6 px-5 py-2.5 sm:py-3 rounded-full bg-white/92 backdrop-blur-md border transition-all duration-300 ${
            isScrolled
              ? 'border-[#2563EB]/20 shadow-md shadow-blue-500/8'
              : 'border-[#E2E8F0] shadow-xs shadow-blue-500/5'
          }`}
        >
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#hero"
            className="group flex items-center gap-1.5 text-slate-950 font-display font-extrabold text-xl tracking-tight whitespace-nowrap shrink-0 hover:opacity-90 transition-opacity"
            aria-label="Kamronbek Mamajonov — Bosh sahifa"
          >
            <span>KM</span>
            <span
              className="w-1.5 h-1.5 rounded-full bg-[#2563EB] inline-block mb-1 group-hover:scale-125 transition-transform duration-200"
              aria-hidden="true"
            />
          </a>

          {/* Zone 2: Navigation Links (Desktop) with Active Section Highlight */}
          <ul className="hidden md:flex items-center gap-2 text-sm font-semibold text-[#64748B]">
            {NAV_LINKS.filter((item) => item.href !== '#contact').map((link) => {
              const isActive = activeNavHref === link.href;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`relative inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full whitespace-nowrap shrink-0 transition-all duration-200 ${
                      isActive
                        ? 'text-[#2563EB] bg-[#EAF2FF]/85 font-bold'
                        : 'text-[#64748B] hover:text-[#111827] hover:bg-[#F5F8FF]'
                    }`}
                  >
                    {isActive && (
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-[#2563EB]"
                        aria-hidden="true"
                      />
                    )}
                    <span>{link.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Zone 3: Primary Action Button (Desktop) & Mobile Toggle */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="group inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] active:scale-[0.98] rounded-full shadow-xs shadow-blue-600/20 transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>{PROFILE_DATA.secondaryCtaText}</span>
              <ArrowUpRight
                className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                aria-hidden="true"
              />
            </a>

            {/* Mobile Menu Trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-700 hover:text-[#2563EB] rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? 'Menyuni yopish' : 'Menyuni ochish'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            className="md:hidden mt-2 p-4 rounded-2xl bg-white border border-[#E2E8F0] shadow-lg shadow-blue-500/10 flex flex-col gap-2 transition-all"
            role="menu"
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeNavHref === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3.5 py-2.5 text-sm font-semibold rounded-xl transition-colors ${
                    isActive
                      ? 'text-[#2563EB] bg-[#EAF2FF]/70 font-bold'
                      : 'text-slate-700 hover:text-[#2563EB] hover:bg-[#F5F8FF]'
                  }`}
                  role="menuitem"
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
};
