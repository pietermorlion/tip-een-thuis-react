import React, { useState } from "react";

/**
 * Tip een Thuis — landing page (Vite + React + Tailwind)
 * - Minimal clean-up, duidelijke partners & sponsors
 * - LogoImg: voorkeurs-extensie per partner om 404's te vermijden
 * - Alle assets onder /public/images/...
 */

// Voorkeurs-extensie per logo (match je echte bestanden in /public/images/partners)
const PREFERRED_EXT = {
  morelion: "jpg",
  ehvv: "jpg",
  pandschap: "png",
  cltgent: "webp",
  orbit: "png",
  thope: "png",
  fedasil: "png",
  iom: "png",
  huizenvanvrede: "jpg", // jij gebruikt nu huizenvanvrede.jpg
  enjoymicasa: "png",    // sponsor
  paths: "png"           // voeg toe als je het bestand hebt
};

// Generic fallback-volgorde (als preferred ontbreekt)
const BASE_ORDER = ["png", "jpg", "jpeg", "svg", "webp", "avif"];

// Slimme logo-loader: probeert eerst preferred, dan fallbackvolgorde
function LogoImg({ base, className = "h-8 w-auto", alt = "logo" }) {
  const preferred = PREFERRED_EXT[base];
  const extOrder = preferred
    ? [preferred, ...BASE_ORDER.filter((e) => e !== preferred)]
    : BASE_ORDER;

  const candidates = extOrder.map((ext) => `/images/partners/${base}.${ext}`);

  const [idx, setIdx] = React.useState(0);
  const src = candidates[idx];
  if (!src) return null;

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setIdx((i) => i + 1)}
      loading="lazy"
      decoding="async"
    />
  );
}

export default function App() {
  const [form, setForm] = useState({
    naam: "",
    email: "",
    rol: "Ik tip een pand",
    type: "Huurwoning",
    locatie: "",
    beschrijving: "",
    akkoord: false,
  });
  const [sent, setSent] = useState(false);

  // Let op: keys moeten overeenkomen met de bestandsbasen in /public/images/partners/
  const partners = [
    { key: "morelion", name: "MORE LION", url: "https://www.more-lion.com/",
      blurb: "Innovatiestudio; facilitatie van burgerinitiatief en projecten rond sociaal wonen." },
    { key: "ehvv", name: "Een Hart Voor Vluchtelingen", url: "https://eenhartvoorvluchtelingen.be/",
      blurb: "Begeleidt verhuur aan erkende vluchtelingen en ondersteunt duurzame integratie." },
    { key: "pandschap", name: "Het Pandschap / Pandschap Invest", url: "https://pandschap.be/",
      blurb: "Koopt/renoveert panden voor sociale verhuur met kwaliteit en betaalbaarheid." },
    { key: "cltgent", name: "CLT Gent", url: "https://www.cltgent.be/",
      blurb: "Community Land Trust: betaalbaar wonen via scheiding van grond en woning." },
    { key: "orbit", name: "Orbit vzw", url: "https://www.orbitvzw.be/",
      blurb: "Werkt rond migratie, armoede en menswaardig woonbeleid; verbindt lokale netwerken." },
    { key: "thope", name: "VZW Thope", url: "https://www.thopevzw.be/",
      blurb: "Begeleidt erkende vluchtelingen/gezinnen naar en tijdens hun huurtraject." },
    { key: "huizenvanvrede", name: "Huizen van de Vrede vzw", url: "https://www.huizenvanvredevzw.be/",
      blurb: "Zoekt en begeleidt huurwoningen in Brugge; warme ondersteuning voor huurders/verhuurders." },
    { key: "fedasil", name: "Fedasil", url: "https://www.fedasil.be/",
      blurb: "Coördineert opvang en doorstroming van verzoekers om internationale bescherming." },
    { key: "iom", name: "IOM (VN Migratieagentschap)", url: "https://www.iom.int/",
      blurb: "Internationale Organisatie voor Migratie; partner in duurzame woontrajecten." },
    { key: "paths", name: "PATHS-project", url: "https://www.fedasil.be/en/news/paths-project-housing",
      blurb: "Zoekt huurwoningen in heel België; verbindt eigenaars en huurders." },
  ];

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#home" className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-600 font-bold text-white">T</div>
            <span className="font-semibold tracking-tight">Tip een Thuis</span>
          </a>
          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#hoe" className="hover:text-emerald-700">Hoe werkt het</a>
            <a href="#wat" className="hover:text-emerald-700">Wat zoeken we</a>
            <a href="#beloning" className="hover:text-emerald-700">Beloning</a>
            <a href="#partners" className="hover:text-emerald-700">Partners</a>
            <a href="#formulier" className="hover:text-emerald-700">Formulier</a>
            <a href="#contact" className="hover:text-emerald-700">Contact</a>
          </nav>
          <a href="#formulier" className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700">
            Tip een pand
          </a>
        </div>
      </header>

      {/* Hero met achtergrondfoto */}
      <section id="home" className="relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/images/banner_spanje.jpg')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-emerald-900/15 mix-blend-multiply" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 py-16 text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Iedereen verdient een <span className="text-emerald-700">thuis</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-800">
            Veel mensen vinden moeilijk een woning. Met <em>Tip een Thuis</em> bundelen we krachten
            om de instroom van beschikbare panden te vergroten — warm, professioneel en samen met jou.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="#formulier" className="rounded-xl bg-emerald-600 px-6 py-3 font-medium text-white hover:bg-emerald-700">Deel je tip</a>
            <a href="#hoe" className="rounded-xl border border-neutral-300 bg-white/80 px-6 py-3 font-medium hover:border-neutral-400">Hoe werkt het?</a>
          </div>
        </div>
      </section>

      {/* ... rest van het bestand blijft ongewijzigd ... */}
    </div>
  );
}
