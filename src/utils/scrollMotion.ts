import { useEffect, useState } from 'react';

/**
 * Unified, single-loop Scroll Motion & Active Section Engine.
 * - Orchestrates intersection-based and scroll-verified staggered reveals for
 *   headings, paragraphs, metric cards, task items, and image containers.
 * - Runs a single requestAnimationFrame scroll listener for scroll progress,
 *   active navigation tracking, and subtle scroll-reactive parallax offsets.
 * - Respects prefers-reduced-motion and guarantees zero layout shift or flicker.
 */
export function usePortfolioScrollMotion() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeNavHref, setActiveNavHref] = useState('#hero');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const mainEl = document.querySelector('main');
    if (!mainEl) return;

    // 1. Tag semantic targets inside sections below Hero for coordinated reveal
    const sections = Array.from(
      mainEl.querySelectorAll<HTMLElement>(':scope > section')
    );
    const revealTargets: HTMLElement[] = [];
    const parallaxFrames: HTMLElement[] = [];

    sections.forEach((section) => {
      if (section.id === 'hero') return;

      // A. Section Headlines & Quotes
      const headings = Array.from(
        section.querySelectorAll<HTMLElement>('h2, h3, blockquote')
      );
      headings.forEach((el, idx) => {
        if (!el.dataset.motionReveal) {
          el.dataset.motionReveal = 'heading';
          el.style.setProperty(
            '--reveal-delay',
            `${Math.min(idx * 45, 160)}ms`
          );
          revealTargets.push(el);
        }
      });

      // B. Image & Screenshot Frames (preserve full image content, never crop)
      const imgContainers = Array.from(
        section.querySelectorAll<HTMLElement>('img')
      )
        .map((img) => img.parentElement)
        .filter(
          (el): el is HTMLElement => !!el && !el.closest('[role="dialog"]')
        );

      imgContainers.forEach((frame, idx) => {
        if (!frame.dataset.motionReveal) {
          frame.dataset.motionReveal = 'media';
          frame.style.setProperty(
            '--reveal-delay',
            `${Math.min(idx * 65, 220)}ms`
          );
          revealTargets.push(frame);
          parallaxFrames.push(frame);
        }
      });

      // C. Cards, Metrics, Comparison Tables, and Timeline blocks
      const cards = Array.from(
        section.querySelectorAll<HTMLElement>(
          '.rounded-3xl, .rounded-2xl, table'
        )
      ).filter(
        (el) =>
          !el.closest('[role="dialog"]') &&
          !el.dataset.motionReveal &&
          el.parentElement !== null
      );

      cards.forEach((card, idx) => {
        const siblingIndex = idx % 6;
        card.dataset.motionReveal = 'card';
        card.style.setProperty('--reveal-delay', `${siblingIndex * 55}ms`);
        revealTargets.push(card);
      });
    });

    const syncRevealStates = () => {
      if (prefersReducedMotion) {
        for (let i = 0; i < revealTargets.length; i++) {
          revealTargets[i].dataset.revealState = 'visible';
        }
        return;
      }

      const vh = window.innerHeight || 900;
      for (let i = 0; i < revealTargets.length; i++) {
        const el = revealTargets[i];
        const rect = el.getBoundingClientRect();
        if (rect.top <= vh * 0.93) {
          el.dataset.revealState = 'visible';
        } else if (rect.top > vh * 1.04) {
          el.dataset.revealState = 'pending';
        }
      }
    };

    syncRevealStates();

    // 2. IntersectionObserver for smooth viewport entry triggers
    let observer: IntersectionObserver | null = null;
    if (!prefersReducedMotion && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const target = entry.target as HTMLElement;
            if (entry.isIntersecting) {
              target.dataset.revealState = 'visible';
            }
          });
        },
        {
          root: null,
          rootMargin: '0px 0px -6% 0px',
          threshold: 0.05,
        }
      );

      revealTargets.forEach((el) => observer?.observe(el));
    }

    // 3. Single requestAnimationFrame scroll loop for progress bar, active nav, reveal sync, and parallax
    let rafId: number | null = null;
    let ticking = false;

    const updateOnScroll = () => {
      ticking = false;
      const scrollY = window.scrollY || window.pageYOffset;
      const vh = window.innerHeight || 900;
      const docHeight = document.documentElement.scrollHeight - vh;
      const progress =
        docHeight > 0 ? Math.min(1, Math.max(0, scrollY / docHeight)) : 0;

      setScrollProgress(progress);
      setIsScrolled(scrollY > 24);

      // Sync reveal states on scroll (handles both forward/reverse scroll and anchor jumps)
      syncRevealStates();

      // Determine active navigation section using viewport-relative bounding rects
      const experienceEl = document.getElementById('experience');
      const projectsEl = document.getElementById('projects');
      const directionsEl = document.getElementById('directions');
      const triggerY = vh * 0.36;

      if (experienceEl && experienceEl.getBoundingClientRect().top <= triggerY) {
        setActiveNavHref('#experience');
      } else if (projectsEl && projectsEl.getBoundingClientRect().top <= triggerY) {
        setActiveNavHref('#projects');
      } else if (
        directionsEl &&
        directionsEl.getBoundingClientRect().top <= triggerY
      ) {
        setActiveNavHref('#directions');
      } else {
        setActiveNavHref('#hero');
      }

      // Apply restrained parallax on desktop/tablet if reduced motion is off
      if (!prefersReducedMotion && window.innerWidth >= 768) {
        for (let i = 0; i < parallaxFrames.length; i++) {
          const frame = parallaxFrames[i];
          const rect = frame.getBoundingClientRect();
          if (rect.bottom >= -100 && rect.top <= vh + 100) {
            const centerOffset =
              (rect.top + rect.height / 2 - vh / 2) / (vh / 2);
            const shiftY = Math.max(-8, Math.min(8, -centerOffset * 6));
            frame.style.setProperty('--parallax-y', `${shiftY.toFixed(1)}px`);
          }
        }
      }
    };

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        rafId = window.requestAnimationFrame(updateOnScroll);
      }
    };

    updateOnScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      if (observer) {
        observer.disconnect();
      }
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return { scrollProgress, activeNavHref, isScrolled };
}
