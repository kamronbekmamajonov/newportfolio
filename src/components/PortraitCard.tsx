import React, { useState } from 'react';
import {
  AlertCircle,
  BarChart3,
  Crosshair,
  Layers,
  Sparkles,
  User,
  Video,
} from 'lucide-react';
import { PROFILE_DATA } from '../utils/portfolio.ts';

interface PortraitCardProps {
  imageSrc?: string;
  className?: string;
}

export const PortraitCard: React.FC<PortraitCardProps> = ({
  imageSrc = '/portrait.png',
  className = '',
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative w-full select-none group ${className}`}>
      {/* Boldex-inspired architectural stage integrated seamlessly with #FFFFFF portrait canvas */}
      <div className="relative w-full aspect-[4/4.3] sm:aspect-[4/4.2] rounded-[2rem] sm:rounded-[2.5rem] bg-white border border-[#E2E8F0] group-hover:border-[#2563EB]/35 shadow-[0_24px_60px_-15px_rgba(37,99,235,0.09)] group-hover:shadow-[0_28px_70px_-15px_rgba(37,99,235,0.15)] transition-all duration-500 overflow-hidden">
        {/* Subtle architectural grid lines around the perimeter, fading to pure white in the center */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none opacity-75"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="boldex-hero-grid"
              width="64"
              height="64"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 64 0 L 0 0 0 64"
                fill="none"
                stroke="#E2E8F0"
                strokeWidth="1"
              />
              <path
                d="M 0 64 L 64 0"
                fill="none"
                stroke="#EAF2FF"
                strokeWidth="0.75"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#boldex-hero-grid)" />
        </svg>

        {/* Center white radial halo so portrait.png (#FFFFFF background) blends 100% seamlessly */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle at 50% 54%, #FFFFFF 48%, rgba(255,255,255,0.92) 68%, rgba(245,248,255,0.45) 100%)',
          }}
          aria-hidden="true"
        />

        {/* Subtle top accent bar */}
        <div className="absolute top-4 left-5 right-5 z-20 flex items-center justify-between pointer-events-none">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5F8FF]/95 border border-[#E2E8F0] text-[11px] font-extrabold text-[#111827] tracking-wide">
            <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
            <span>{PROFILE_DATA.name}</span>
          </div>
          <span className="px-2.5 py-1 rounded-full bg-[#EAF2FF] text-[#2563EB] text-[10px] font-extrabold uppercase tracking-wider">
            {PROFILE_DATA.role}
          </span>
        </div>

        {/* Floating Discipline Nodes (Boldex-inspired orbital badges around the portrait shoulders, never overlapping the face) */}
        <div
          className="hidden sm:flex animate-float-node-1 absolute top-[22%] left-4 sm:left-6 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/95 backdrop-blur-xs border border-[#E2E8F0] shadow-md shadow-blue-500/10 items-center justify-center text-[#2563EB]"
          title="Kontent Marketing"
          aria-hidden="true"
        >
          <Video className="w-5 h-5" />
        </div>

        <div
          className="hidden sm:flex animate-float-node-2 absolute top-[50%] left-3 sm:left-5 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#F5F8FF] border border-[#2563EB]/25 shadow-md shadow-blue-500/10 items-center justify-center text-[#2563EB]"
          title="SMM Tizimi"
          aria-hidden="true"
        >
          <Layers className="w-5 h-5" />
        </div>

        <div
          className="hidden sm:flex animate-float-node-3 absolute top-[18%] right-4 sm:right-6 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#F5F8FF] border border-[#2563EB]/25 shadow-md shadow-blue-500/10 items-center justify-center text-[#2563EB]"
          title="Target Ads"
          aria-hidden="true"
        >
          <Crosshair className="w-5 h-5" />
        </div>

        <div
          className="hidden sm:flex animate-float-node-4 absolute top-[44%] right-3 sm:right-5 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/95 backdrop-blur-xs border border-[#E2E8F0] shadow-md shadow-blue-500/10 items-center justify-center text-[#2563EB]"
          title="Performance Marketing"
          aria-hidden="true"
        >
          <BarChart3 className="w-5 h-5" />
        </div>

        {/* Actual Original Portrait Image — uncropped face, refined framing */}
        {!hasError ? (
          <div className="relative z-10 w-full h-full flex items-end justify-center pt-8 sm:pt-10">
            {!isLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-white">
                <div className="w-9 h-9 rounded-full border-2 border-[#2563EB]/20 border-t-[#2563EB] animate-spin" />
              </div>
            )}

            <img
              src={imageSrc}
              alt={`${PROFILE_DATA.name} — ${PROFILE_DATA.role}`}
              className={`w-[92%] sm:w-[90%] h-[94%] object-contain object-bottom transition-all duration-700 group-hover:scale-[1.015] ${
                isLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              referrerPolicy="no-referrer"
              onLoad={() => setIsLoaded(true)}
              onError={() => setHasError(true)}
            />

            {/* Smooth bottom grounding fade so the blazer edge blends naturally */}
            <div
              className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none"
              aria-hidden="true"
            />
          </div>
        ) : (
          <div
            className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 text-center bg-[#F5F8FF] text-[#111827]"
            role="figure"
            aria-label="Portret o‘rni"
          >
            <div className="w-16 h-16 rounded-full bg-white border border-[#E2E8F0] shadow-xs flex items-center justify-center text-[#2563EB] mb-3">
              <User className="w-8 h-8 stroke-[1.5]" />
            </div>
            <span className="font-display font-bold text-[#111827] text-base">
              {PROFILE_DATA.name}
            </span>
            <span className="text-xs font-semibold text-[#2563EB] uppercase tracking-wider mt-0.5 mb-2">
              {PROFILE_DATA.role}
            </span>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-50 border border-amber-200 text-amber-800 text-xs">
              <AlertCircle className="w-4 h-4 shrink-0 text-amber-600" />
              <span>
                Portret uchun <strong>portrait.png</strong> fayli kerak.
              </span>
            </div>
          </div>
        )}

        {/* Boldex-style Circular Editorial Seal Badge at Bottom-Right with continuous slow rotation */}
        <div
          className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-20 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/95 backdrop-blur-xs border border-[#E2E8F0] shadow-md flex items-center justify-center pointer-events-none"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full p-1.5 text-[#111827] animate-seal-spin"
          >
            <defs>
              <path
                id="seal-circle-path"
                d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
              />
            </defs>
            <text
              fill="#111827"
              fontSize="7.7"
              fontWeight="800"
              letterSpacing="1.65"
            >
              <textPath href="#seal-circle-path" startOffset="0%">
                DIGITAL MARKETOLOG • SYSTEM GROWTH •
              </textPath>
            </text>
          </svg>
          <div className="absolute w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center shadow-xs">
            <Sparkles className="w-4 h-4" />
          </div>
        </div>

        {/* Bottom-left discipline pill */}
        <div className="absolute bottom-3.5 left-4 sm:bottom-5 sm:left-5 z-20 inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-[#F5F8FF]/95 backdrop-blur-xs border border-[#E2E8F0] shadow-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span className="text-[11px] sm:text-xs font-extrabold text-[#111827]">
            Kontent · SMM · Performance
          </span>
        </div>
      </div>
    </div>
  );
};
