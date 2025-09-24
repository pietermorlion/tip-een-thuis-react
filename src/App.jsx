import React, { useState } from "react";

/**
 * Tip een Thuis Ã¢â‚¬â€ Landing page (Vite + React + Tailwind)
 * - Hero met achtergrondbanner (/public/images/banner.jpg)
 * - Hoe werkt het (met correcte JSX-link)
 * - Wat zoeken we
 * - Formulier
 * - Beloning (tegels + La Perla Verde foto)
 * - Partners (favicons in tegels, volledige logo's in footer)
 * - Sponsors (enjoymicasa)
 * - Logo's worden LOKAAL geladen uit /public/images/partners/
 */

// Helper: slim logo-element dat meerdere extensies probeert (png/jpg/jpeg/svg/webp)
function LogoImg({ base, className = "h-8 w-auto", alt = "logo" }) {
  const candidates = ['avif','webp','png','svg','jpg','jpeg']
  .map(ext => `/images/partners/${base}.${ext}`);
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

  // PARTNERS: gebruik lokale bestandsnamen in /public/images/partners/
  const partners = [
    { key: "morelion",     name: "MORE LION",                        url: "https://www.more-lion.com/",
      blurb: "Innovatie- en mobiliteitsstudio; faciliterend partner van het burgerinitiatief en projecten rond sociaal wonen." },
    { key: "ehvv",         name: "Een Hart Voor Vluchtelingen",      url: "https://eenhartvoorvluchtelingen.be/",
      blurb: "Begeleidt verhuur aan erkende vluchtelingen en ondersteunt nieuwkomers richting duurzame integratie." },
    { key: "pandschap",    name: "Het Pandschap / Pandschap Invest", url: "https://pandschap.be/",
      blurb: "Koopt/renoveert panden en zet ze in voor sociale verhuur met focus op kwaliteit en betaalbaarheid." },
    { key: "cltgent",      name: "CLT Gent",                         url: "https://www.cltgent.be/",
      blurb: "Community Land Trust die betaalbaar wonen realiseert door grond en woning te scheiden." },
    { key: "orbit",        name: "Orbit vzw",                        url: "https://www.orbitvzw.be/",
      blurb: "Werkt rond migratie, armoede en een menswaardig woonbeleid; verbindt lokale netwerken." },
    { key: "thope",        name: "VZW Thope",                        url: "https://www.thopevzw.be/",
      blurb: "Begeleidt erkende vluchtelingen en kwetsbare gezinnen naar en tijdens hun huurtraject." },
    { key: "huizenvanvrede", name: "Huizen van de Vrede vzw",          url: "https://www.huizenvanvredevzw.be/",
      blurb: "Zoekt en begeleidt huurwoningen in Brugge, met warme ondersteuning voor huurders en verhuurders." },
    { key: "fedasil",      name: "Fedasil",                          url: "https://www.fedasil.be/",
      blurb: "CoÃƒÂ¶rdineert opvang en doorstroming van verzoekers om internationale bescherming." },
    { key: "iom",          name: "IOM (VN Migratieagentschap)",      url: "https://www.iom.int/",
      blurb: "Internationale Organisatie voor Migratie; partner in duurzame woontrajecten." },
    { key: "paths",        name: "PATHS-project",                    url: "https://www.fedasil.be/en/news/paths-project-housing",
      blurb: "Zoekt huurwoningen in heel BelgiÃƒÂ« voor erkende vluchtelingen; verbindt eigenaars en huurders." },
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
            <a href="#faq" className="hover:text-emerald-700">FAQ</a>
            <a href="#contact" className="hover:text-emerald-700">Contact</a>
          </nav>
          <a href="#formulier" className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700">Tip een pand</a>
        </div>
      </header>

      {/* Hero met achtergrondfoto */}
      <section id="home" className="relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/images/banner.jpg')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-emerald-900/15 mix-blend-multiply" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 py-16 text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Iedereen verdient een <span className="text-emerald-700">thuis</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-800">
            Veel mensen vinden moeilijk een woning. Vaak beschikken zij over een inkomen of ondersteuning, maar botsen ze op barriÃƒÂ¨res. Met <em>Tip een Thuis</em> bundelen we krachten om de instroom van beschikbare panden te vergroten Ã¢â‚¬â€ warm, professioneel en samen met jou.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="#formulier" className="rounded-xl bg-emerald-600 px-6 py-3 font-medium text-white hover:bg-emerald-700">Deel je tip</a>
            <a href="#hoe" className="rounded-xl border border-neutral-300 bg-white/80 px-6 py-3 font-medium hover:border-neutral-400">Hoe werkt het?</a>
          </div>
        </div>
      </section>

      {/* Hoe werkt het */}
      <section id="hoe" className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-3xl font-semibold tracking-tight">Hoe werkt het?</h2>
          <ol className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              {
                step: "1",
                title: "Geef je tip door",
                text: (
                  <>
                    Heb je weet van een woning of grond die te huur of te koop komt? Laat het ons weten via het{" "}
                    <a
                      href="#formulier"
                      className="underline underline-offset-4 text-emerald-700 hover:text-emerald-800"
                    >
                      formulier
                    </a>
                    .
                  </>
                ),
              },
              {
                step: "2",
                title: "Wij bekijken je tip",
                text: "We delen je tip met de geschikte partnerorganisatie. Zij nemen contact met je op.",
              },
              {
                step: "3",
                title: "Ontvang een beloning",
                text: "Wordt de woning effectief gehuurd of gekocht via een van onze organisaties? Dan ontvang jij een beloning.",
              },
            ].map((s) => (
              <li key={s.step} className="relative rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
                <div className="absolute -top-3 left-6 grid h-8 w-8 place-items-center rounded-full bg-emerald-600 text-sm font-semibold text-white">
                  {s.step}
                </div>
                <h3 className="mt-4 font-medium">{s.title}</h3>
                <p className="mt-2 text-sm text-neutral-700">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Wat zoeken we */}
      <section id="wat" className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl font-semibold tracking-tight">Wat zoeken we?</h2>
          <p className="mt-4 max-w-3xl text-neutral-700 text-lg leading-relaxed">
            Afhankelijk van de regio zoeken partnerorganisaties verschillende types panden. We mikken op kwalitatieve, veilige woningen met correcte prijzen.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-neutral-200 bg-white p-6">
              <h3 className="text-lg font-semibold">Gent</h3>
              <ul className="mt-3 space-y-2 text-neutral-700">
                <li className="flex items-start gap-2"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-600" />Huurwoningen (Een Hart Voor Vluchtelingen, Thope)</li>
                <li className="flex items-start gap-2"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-600" />Koopwoningen & appartementen (Pandschap Invest)</li>
                <li className="flex items-start gap-2"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-600" />Bouwgrond (CLT Gent)</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-white p-6">
              <h3 className="text-lg font-semibold">Brugge</h3>
              <ul className="mt-3 space-y-2 text-neutral-700">
                <li className="flex items-start gap-2"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-600" />Huurwoningen (Huizen van de Vrede)</li>
                <li className="flex items-start gap-2"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-600" />Koopwoningen (MORE LION, Pandschap Invest)</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-white p-6">
              <h3 className="text-lg font-semibold">Heel BelgiÃƒÂ«</h3>
              <ul className="mt-3 space-y-2 text-neutral-700">
                <li className="flex items-start gap-2"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-600" />Huurwoningen via PATHS-project (Fedasil & IOM)</li>
                <li className="flex items-start gap-2"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-600" />Eigenaars die willen verhuren/verkopen aan de doelgroep</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-sm text-emerald-900">Ook buddyÃ¢â‚¬â„¢s en vrijwilligers zijn welkom!</div>
        </div>
      </section>

      {/* Formulier */}
      <section id="formulier" className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl font-semibold tracking-tight">Formulier</h2>
          {sent ? (
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
              <h3 className="font-medium text-emerald-800">Bedankt! Je tip is verstuurd.</h3>
              <p className="mt-2 text-sm text-emerald-900">We koppelen terug zodra een partnerorganisatie je tip heeft bekeken.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 space-y-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium">Naam</label>
                  <input required value={form.naam} onChange={(e)=>setForm({...form, naam:e.target.value})} className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2"/>
                </div>
                <div>
                  <label className="block text-sm font-medium">EÃ¢â‚¬â€˜mail</label>
                  <input type="email" required value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2"/>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium">Ik ben</label>
                  <select value={form.rol} onChange={(e)=>setForm({...form, rol:e.target.value})} className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2">
                    <option>Ik tip een pand</option>
                    <option>Ik verhuur/verkoop zelf</option>
                    <option>Ik wil vrijwilliger/buddy zijn</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium">Type pand</label>
                  <select value={form.type} onChange={(e)=>setForm({...form, type:e.target.value})} className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2">
                    <option>Huurwoning</option>
                    <option>Koopwoning</option>
                    <option>Appartementsgebouw</option>
                    <option>Bouwgrond</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium">Locatie</label>
                <input value={form.locatie} onChange={(e)=>setForm({...form, locatie:e.target.value})} className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2"/>
              </div>
              <div>
                <label className="block text-sm font-medium">Korte beschrijving</label>
                <textarea rows={3} value={form.beschrijving} onChange={(e)=>setForm({...form, beschrijving:e.target.value})} className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2"/>
              </div>
              <div className="flex items-start gap-3">
                <input id="akkoord" type="checkbox" checked={form.akkoord} onChange={(e)=>setForm({...form, akkoord:e.target.checked})} className="mt-1 h-5 w-5 rounded border-neutral-300" required />
                <label htmlFor="akkoord" className="text-sm text-neutral-700">Ik ga akkoord dat Tip een Thuis mijn gegevens verwerkt om mijn tip te beoordelen en te delen met partnerorganisaties.</label>
              </div>
              <button type="submit" className="w-full rounded-xl bg-emerald-600 px-5 py-3 font-medium text-white hover:bg-emerald-700">Verzend</button>
            </form>
          )}
        </div>
      </section>

      {/* Beloning */}
      <section id="beloning" className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl font-semibold tracking-tight">Welke beloning krijg ik?</h2>
          <p className="mt-3 text-neutral-700">Kies jouw beloning wanneer je tip effectief leidt tot verhuur of verkoop aan de doelgroep.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <article className="overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50">
              <div className="h-40 bg-[url('/images/beloning-bon.jpg')] bg-cover bg-center" aria-hidden></div>
              <div className="p-5">
                <h3 className="text-lg font-semibold">Supermarktbon t.w.v. Ã¢â€šÂ¬200</h3>
                <p className="mt-2 text-sm text-neutral-700">Bij succesvolle <em>verhuur</em> via een partnerorganisatie.</p>
              </div>
            </article>
            <article className="overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50">
              <div className="h-40 bg-[url('/images/la-perla-verde.jpg')] bg-cover bg-center" aria-hidden></div>
              <div className="p-5">
                <h3 className="text-lg font-semibold">5 dagen in Spanje (6p)</h3>
                <p className="mt-2 text-sm text-neutral-700">Bij succesvolle <em>verkoop van een woning</em>. Verblijf in Finca La Perla Verde.</p>
                <a href="https://enjoymicasa.be" target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-1 text-emerald-700 underline underline-offset-4">Meer over enjoymicasa<span aria-hidden>Ã¢â€ â€”</span></a>
              </div>
            </article>
            <article className="overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50">
              <div className="h-40 bg-[url('/images/beloning-grond.jpg')] bg-cover bg-center" aria-hidden></div>
              <div className="p-5">
                <h3 className="text-lg font-semibold">Verkoop van grond</h3>
                <p className="mt-2 text-sm text-neutral-700">Beloning nog te bepalen Ã¢â‚¬â€ we houden je op de hoogte.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section id="partners" className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-3xl font-semibold tracking-tight">Partners</h2>
          <p className="mt-3 max-w-3xl text-neutral-700">
            Tip een Thuis is een burgerinitiatief, gedragen door organisaties die actief zijn rond huisvesting en steun aan vluchtelingen. We brengen tipgevers in contact met hen en faciliteren de beloning van goede tips.
          </p>
          {/* Grid tegels met favicon-achtige kleine logo's */}
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {partners.map((p) => (
              <article key={p.name} className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <a href={p.url} target="_blank" rel="noreferrer" className="shrink-0">
                    <LogoImg base={p.key} className="h-8 w-8 object-contain" alt={`${p.name} logo`} />
                  </a>
                  <h3 className="text-base font-semibold">{p.name}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-neutral-700">{p.blurb}</p>
                <a href={p.url} className="mt-4 inline-block text-sm font-medium text-emerald-700 underline underline-offset-4 hover:text-emerald-800" target="_blank" rel="noreferrer">
                  Bezoek website
                </a>
              </article>
            ))}
          </div>

          {/* Logo strip met volledige logo's */}
          <div className="mt-12 border-t border-neutral-200 pt-6">
            <p className="mb-4 text-sm text-neutral-600">Met steun van onze partners:</p>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-6">
              {partners.map((p) => (
                <div key={`${p.name}-footer`} className="flex items-center justify-center">
                  <a href={p.url} target="_blank" rel="noreferrer" aria-label={`${p.name} website`}>
                    <LogoImg base={p.key} className="max-h-12 w-auto object-contain opacity-90 grayscale hover:opacity-100 hover:grayscale-0" alt={`${p.name} logo`} />
                  </a>
                </div>
              ))}
            </div>

            {/* Sponsors */}
            <div className="mt-10">
              <p className="mb-4 text-sm text-neutral-600">Met steun van onze sponsors:</p>
              <div className="grid grid-cols-2 gap-6 md:grid-cols-6">
                <div className="flex items-center justify-center">
                  <a href="https://enjoymicasa.be" target="_blank" rel="noreferrer" aria-label="enjoymicasa.be">
                    <img src="/images/partners/enjoymicasa.png" alt="enjoymicasa logo" className="max-h-12 w-auto opacity-90 grayscale hover:opacity-100 hover:grayscale-0" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-neutral-600">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p>Ã‚Â© {new Date().getFullYear()} Tip een Thuis. Alle rechten voorbehouden.</p>
            <div className="flex gap-4">
              <a href="#hoe" className="hover:text-neutral-800">Hoe werkt het</a>
              <a href="#wat" className="hover:text-neutral-800">Wat zoeken we</a>
              <a href="#beloning" className="hover:text-neutral-800">Beloning</a>
              <a href="#partners" className="hover:text-neutral-800">Partners</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
