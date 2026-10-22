import React from 'react';
import { Search, Target, Rocket, BarChart3, ArrowRight } from 'lucide-react';
import { MARKETING_APPROACH_DATA } from '../utils/portfolio.ts';
import type { MarketingStep } from '../types/portfolio.ts';

export const ApproachSection: React.FC = () => {
  const renderIcon = (iconName: MarketingStep['icon']) => {
    switch (iconName) {
      case 'search':
        return <Search className="w-5 h-5" aria-hidden="true" />;
      case 'target':
        return <Target className="w-5 h-5" aria-hidden="true" />;
      case 'rocket':
        return <Rocket className="w-5 h-5" aria-hidden="true" />;
      case 'chart':
        return <BarChart3 className="w-5 h-5" aria-hidden="true" />;
      default:
        return <Target className="w-5 h-5" aria-hidden="true" />;
    }
  };

  return (
    <section
      id="directions"
      aria-label="Marketingga tizimli yondashuv"
      className="relative scroll-mt-20 sm:scroll-mt-24 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F5F8FF]/60 via-white to-white border-t border-[#E2E8F0]"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#2563EB] bg-[#EAF2FF] border border-[#2563EB]/15">
              {MARKETING_APPROACH_DATA.kicker}
            </span>
          </div>

          <h2 className="font-display font-extrabold text-slate-900 text-3xl sm:text-4xl lg:text-[2.65rem] leading-[1.2] tracking-tight">
            {MARKETING_APPROACH_DATA.title}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#64748B] leading-relaxed font-normal">
            {MARKETING_APPROACH_DATA.description}
          </p>
        </div>

        {/* 4 Steps Grid: 1 column on mobile, 2 columns on tablet, 4 columns on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 relative">
          {MARKETING_APPROACH_DATA.steps.map((step, index) => {
            const isLast = index === MARKETING_APPROACH_DATA.steps.length - 1;

            return (
              <div
                key={step.stepNumber}
                className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-white border border-[#E2E8F0] shadow-sm shadow-blue-500/5 hover:border-[#2563EB]/30 hover:shadow-md hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-200"
              >
                <div>
                  {/* Top Header: Step Number, Icon and Sequence Arrow */}
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-extrabold tracking-wide text-[#2563EB] bg-[#EAF2FF]">
                      {step.stepNumber}
                    </span>

                    <div className="flex items-center gap-2">
                      <div className="w-11 h-11 rounded-xl bg-[#F5F8FF] border border-[#E2E8F0] flex items-center justify-center text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white group-hover:border-[#2563EB] transition-all duration-200">
                        {renderIcon(step.icon)}
                      </div>

                      {/* Desktop connector arrow to next step */}
                      {!isLast && (
                        <div className="hidden lg:flex items-center text-slate-300 pl-2">
                          <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#2563EB] transition-colors" />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-slate-900 text-lg sm:text-xl tracking-tight mb-2.5">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#64748B] leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                {/* Bottom Editorial Hairline Accent */}
                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-400">
                  <span className="text-[11px] tracking-wider uppercase text-slate-400 group-hover:text-[#2563EB] transition-colors">
                    Bosqich {step.stepNumber}
                  </span>
                  <div className="w-6 h-0.5 rounded-full bg-slate-200 group-hover:bg-[#2563EB] group-hover:w-10 transition-all duration-200" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
