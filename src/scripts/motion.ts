import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

export function initMotion() {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;
  gsap.registerPlugin(ScrollTrigger);

  // Weiches Scrollen, synchron mit GSAP
  const lenis = new Lenis({ lerp: 0.1 });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
  document.querySelectorAll<HTMLAnchorElement>('a[href^="/#"], a[href^="#"]').forEach((a) =>
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href')!.split('#')[1];
      const el = id && document.getElementById(id);
      if (el && location.pathname === '/') { e.preventDefault(); lenis.scrollTo(el, { offset: -70 }); }
    }),
  );

  // Hero-Einstieg
  gsap.from('[data-hero]', { y: 36, opacity: 0, duration: 1, stagger: 0.09, ease: 'power3.out', delay: 0.1 });

  // Reveals beim Scrollen
  ScrollTrigger.batch('[data-reveal]', {
    start: 'top 88%',
    once: true,
    onEnter: (els) => gsap.to(els, { opacity: 1, y: 0, duration: 0.9, stagger: 0.08, ease: 'power3.out' }),
  });

  // Zähler in den Kennzahlen
  document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
    const target = Number(el.dataset.count);
    const dec = Number(el.dataset.decimals || 0);
    const o = { v: 0 };
    el.textContent = '0';
    ScrollTrigger.create({
      trigger: el, start: 'top 90%', once: true,
      onEnter: () => gsap.to(o, { v: target, duration: 1.6, ease: 'power2.out', onUpdate: () => (el.textContent = o.v.toFixed(dec).replace('.', ',')) }),
    });
  });

  // Fortschrittslinie im Werdegang
  const tl = document.querySelector<HTMLElement>('.timeline');
  if (tl) {
    ScrollTrigger.create({
      trigger: tl, start: 'top 70%', end: 'bottom 70%', scrub: true,
      onUpdate: (s) => tl.style.setProperty('--p', s.progress.toFixed(3)),
      onRefresh: (s) => tl.style.setProperty('--p', s.progress.toFixed(3)),
    });
  }
}
