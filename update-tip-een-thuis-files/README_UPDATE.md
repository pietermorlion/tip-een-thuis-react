# Tip een Thuis — update bundle
Laatste update: 2025-09-23

Dit pakketje bevat:
- `src/App.jsx` — nieuwe pagina (Formulier-sectie, typografie verbeterd, partnerlogo's, finca-foto placeholder)
- `vercel.json` — SPA rewrite zodat refreshes altijd werken
- Deze `README_UPDATE.md`

## Stap-voor-stap (GitHub → Vercel)

1. **Zet de bestanden op de juiste plek in je repo**
   - Kopieer `src/App.jsx` over je bestaande `src/App.jsx`
   - Plaats `vercel.json` in de **root** van je project (naast `package.json`)

2. **Voeg de foto toe**
   - Zet je afbeelding op: `public/images/la-perla-verde.jpg` (exacte bestandsnaam)
   - De code verwijst naar `/images/la-perla-verde.jpg`

3. **Commit & push**
```bash
git add src/App.jsx vercel.json public/images/la-perla-verde.jpg
git commit -m "update: nieuwe layout + formulier + finca foto + SPA rewrite"
git push
```

4. **Vercel build & deploy**
- Vercel detecteert de push en bouwt automatisch.
- Framework: Vite • Build command: `npm run build` • Output: `dist`

## Lokale test (optioneel)
```bash
npm install
npm run dev
# open http://localhost:5173
```
