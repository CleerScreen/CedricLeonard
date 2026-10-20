# cedric-leonard.de

Persönliche Website (Astro + GSAP + Lenis), gehostet über GitHub Pages.

## Lokal starten
```bash
npm install
npm run dev        # http://localhost:4321
```

## Inhalte ändern
Alle Texte, Kennzahlen, Projekte und Stationen stehen in `src/data/content.ts`.
Impressum: `src/pages/impressum.astro` (Platzhalter in eckigen Klammern ausfüllen).

## Veröffentlichen
Jeder Push auf `main` baut und veröffentlicht die Seite automatisch (`.github/workflows/deploy.yml`).
Pages ist eingerichtet (Source: GitHub Actions, eigene Domain cedric-leonard.de).

## Struktur
- `src/components/Hero.astro` – Einstieg: Status-Button (Kontakt), Name wird wie im 3D-Drucker gedruckt
- `src/components/Background.astro` – Punktraster im Hintergrund, reagiert auf den Mauszeiger
- `src/components/EnergyDemo.astro` – interaktive Strompreis-/Scheduling-Grafik (synthetische Daten)
- `src/components/Sections.astro` – Kennzahlen, Projekte, Werdegang, Kenntnisse, Kontakt
- `src/scripts/motion.ts` – Scroll-Animationen (respektiert „Bewegung reduzieren“)
- `public/CNAME` – eigene Domain
