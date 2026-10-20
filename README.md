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
Einmalig in GitHub: Settings → Pages → Source: **GitHub Actions**.

## Struktur
- `src/components/Hero.astro` – Hero mit interaktiver Strompreis-/Scheduling-Grafik (synthetische Daten)
- `src/components/Sections.astro` – Kennzahlen, Projekte, Werdegang, Kenntnisse, Kontakt
- `src/scripts/motion.ts` – Scroll-Animationen (respektiert „Bewegung reduzieren“)
- `public/CNAME` – eigene Domain
