# Tip een Thuis — updatepakket

Inbegrepen:
- `src/App.jsx` — nieuwe pagina (logo, hero-achtergrond, klikbare formulierlinks, beloningstegels, partners + sponsors)
- `public/logo.svg`, `public/favicon.svg`
- `public/images/banner.jpg` (uit jouw foto `banner.jpg`)
- `public/images/la-perla-verde.jpg` (geoptimaliseerd)
- `public/images/beloning-bon.jpg`, `public/images/beloning-grond.jpg` (placeholders)
- `vercel.json` — SPA rewrite

## Bestanden plaatsen
Kopieer deze mapinhoud bovenop je project `tip-een-thuis-react` zodat de paden exact zo zijn:

```
tip-een-thuis-react/
  public/
    favicon.svg
    logo.svg
    images/
      banner.jpg
      la-perla-verde.jpg
      beloning-bon.jpg
      beloning-grond.jpg
  src/
    App.jsx
  vercel.json
```

> Let op: als `public/images/` nog niet bestond, maak die map aan.

## Test lokaal (optioneel)
```bash
npm install
npm run dev
# open http://localhost:5173
```

## Push naar GitHub (triggert Vercel automatisch)
Open PowerShell in je projectmap en voer uit:
```powershell
git add src/App.jsx public\favicon.svg public\logo.svg public\images\banner.jpg public\images\la-perla-verde.jpg public\images\beloning-bon.jpg public\images\beloning-grond.jpg vercel.json
git commit -m "site: logo + hero-bg + formulierlinks + beloningstegels + sponsors + SPA rewrite"
git push
```

Ga naar Vercel → je ziet een nieuwe **Deployment**. Klik **Visit**.
