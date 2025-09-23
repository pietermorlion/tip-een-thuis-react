import React, { useState } from "react";

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

  const partners = [
    {
      name: "MORE LION",
      blurb:
        "Innovatie- en mobiliteitsstudio; faciliterend partner van het burgerinitiatief en projecten rond sociaal wonen.",
      url: "https://www.more-lion.com/",
      logo: "https://static.wixstatic.com/media/0e1026_a47c2ef2379d45e08dd4dcee424a005f~mv2.png/v1/fill/w_183,h_202,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/More%20Lion%20Logo%20zonder%20tekst%20-%20wit%20(2).png",
    },
    {
      name: "Een Hart Voor Vluchtelingen",
      blurb:
        "Begeleidt verhuur aan erkende vluchtelingen en ondersteunt nieuwkomers richting duurzame integratie.",
      url: "https://eenhartvoorvluchtelingen.be/",
      logo: "https://eenhartvoorvluchtelingen.be/favicon.ico",
    },
    {
      name: "Het Pandschap / Pandschap Invest",
      blurb:
        "Koopt/renoveert panden en zet ze in voor sociale verhuur met focus op kwaliteit en betaalbaarheid.",
      url: "https://pandschap.be/",
      logo: "https://pandschap.be/favicon.ico",
    },
    {
      name: "CLT Gent",
      blurb:
        "Community Land Trust die betaalbaar wonen realiseert door grond en woning te scheiden.",
      url: "https://www.cltgent.be/",
      logo: "https://www.cltgent.be/favicon.ico",
    },
    {
      name: "Orbit vzw",
      blurb:
        "Werkt rond migratie, armoede en een menswaardig woonbeleid; verbindt lokale netwerken.",
      url: "https://www.orbitvzw.be/",
      logo: "https://www.orbitvzw.be/favicon.ico",
    },
    {
      name: "VZW Thope",
      blurb:
        "Begeleidt erkende vluchtelingen en kwetsbare gezinnen naar en tijdens hun huurtraject.",
      url: "https://www.thopevzw.be/",
      logo: "https://www.thopevzw.be/favicon.ico",
    },
    {
      name: "Huizen van de Vrede vzw",
      blurb:
        "Zoekt en begeleidt huurwoningen in Brugge, met warme ondersteuning voor huurders en verhuurders.",
      url: "https://www.huizenvanvredevzw.be/",
      logo: "https://www.huizenvanvredevzw.be/favicon.ico",
    },
    {
      name: "Fedasil",
      blurb:
        "Coördineert opvang en doorstroming van verzoekers om internationale bescherming.",
      url: "https://www.fedasil.be/",
      logo: "https://www.fedasil.be/favicon.ico",
    },
    {
      name: "IOM (VN Migratieagentschap)",
      blurb:
        "Internationale Organisatie voor Migratie; partner in duurzame woontrajecten.",
      url: "https://www.iom.int/",
      logo: "https://www.iom.int/themes/custom/bootstrap_sass/logo.png",
    },
    {
      name: "PATHS-project",
      blurb:
        "Zoekt huurwoningen in heel België voor erkende vluchtelingen; verbindt eigenaars en huurders.",
      url: "https://www.fedasil.be/en/news/paths-project-housing",
      logo: "https://www.fedasil.be/favicon.ico",
    },
  ];

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Tip verstuurd:", form);
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
            <a href="#faq" className="hover:text-emerald-700">FAQ</a>
            <a href="#contact" className="hover:text-emerald-700">Contact</a>
          </nav>
          <a href="#tip" className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700">Tip een pand</a>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="bg-gradient-to-b from-emerald-50 to-transparent">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Iedereen verdient een <span className="text-emerald-700">thuis</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-700">
            Veel mensen vinden moeilijk een woning. Vaak beschikken zij over een inkomen of ondersteuning, maar botsen ze op barrières. Met <em>Tip een Thuis</em> bundelen we krachten om de instroom van beschikbare panden te vergroten — warm, professioneel en samen met jou.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="#tip" className="rounded-xl bg-emerald-600 px-6 py-3 font-medium text-white hover:bg-emerald-700">Deel je tip</a>
            <a href="#hoe" className="rounded-xl border border-neutral-300 px-6 py-3 font-medium hover:border-neutral-400">Hoe werkt het?</a>
          </div>
        </div>
      </section>

      {/* Hoe werkt het */}
      <section id="hoe" className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-3xl font-semibold tracking-tight">Hoe werkt het?</h2>
          <ol className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              { step: "1", title: "Geef je tip door", text: "Heb je weet van een woning of grond die te huur of te koop komt? Laat het ons weten via het formulier." },
              { step: "2", title: "Wij bekijken je tip", text: "We delen je tip met de geschikte partnerorganisatie. Zij nemen contact met je op." },
              { step: "3", title: "Ontvang een beloning", text: "Wordt de woning effectief gehuurd of gekocht via een van onze organisaties? Dan ontvang jij een beloning." }
            ].map((s) => (
              <li key={s.step} className="relative rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
                <div className="absolute -top-3 left-6 grid h-8 w-8 place-items-center rounded-full bg-emerald-600 text-sm font-semibold text-white">{s.step}</div>
                <h3 className="mt-4 font-medium">{s.title}</h3>
                <p className="mt-2 text-sm text-neutral-700">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Wat zoeken we */}
      <section id="wat" className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-3xl font-semibold tracking-tight">Wat zoeken we?</h2>
          <p className="mt-4 max-w-3xl text-neutral-700">Afhankelijk van de regio zoeken partnerorganisaties verschillende types panden:</p>
          <ul className="mt-6 space-y-3 text-sm text-neutral-700">
            <li><strong>Gent</strong>: huurwoningen (Een Hart Voor Vluchtelingen, Thope), koopwoningen en appartementen (Pandschap Invest), bouwgrond (CLT Gent).</li>
            <li><strong>Brugge</strong>: huurwoningen (Huizen van de Vrede), koopwoningen (MORE LION, Pandschap Invest).</li>
            <li><strong>Heel België</strong>: huurwoningen via het PATHS-project van Fedasil en IOM.</li>
          </ul>
          <p className="mt-6 text-sm text-neutral-700">Ook buddy’s en vrijwilligers zijn welkom!</p>
        </div>
      </section>

      {/* Tipformulier */}
      <section id="tip" className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-3xl font-semibold tracking-tight">Tip een pand</h2>
          {sent ? (
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
              <h3 className="font-medium text-emerald-800">Bedankt! Je tip is verstuurd.</h3>
              <p className="mt-2 text-sm text-emerald-900">We koppelen terug zodra een partnerorganisatie je tip heeft bekeken.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium">Naam</label>
                  <input required value={form.naam} onChange={(e)=>setForm({...form, naam:e.target.value})} className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2"/>
                </div>
                <div>
                  <label className="block text-sm font-medium">E‑mail</label>
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
              <button type="submit" className="w-full rounded-xl bg-emerald-600 px-5 py-3 font-medium text-white hover:bg-emerald-700">Verzend tip</button>
            </form>
          )}
        </div>
      </section>

      {/* Beloning */}
      <section id="beloning" className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-3xl font-semibold tracking-tight">Welke beloning krijg ik?</h2>
          <ul className="mt-6 space-y-4 text-sm text-neutral-700">
            <li><strong>Verhuur via partnerorganisatie:</strong> supermarktbon t.w.v. €200.</li>
            <li><strong>Verkoop woning:</strong> verblijf van 5 dagen voor 6 personen in Spanje (finca La Perla Verde, enjoymicasa.be).</li>
            <li><strong>Verkoop grond:</strong> nog te bepalen.</li>
          </ul>
        </div>
      </section>

      {/* Partners: grid tiles + logo strip */}
      <section id="partners" className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-3xl font-semibold tracking-tight">Partners</h2>
          <p className="mt-3 max-w-3xl text-neutral-700">
            Tip een Thuis is een burgerinitiatief, gedragen door organisaties die actief zijn rond huisvesting en steun aan vluchtelingen. We brengen tipgevers in contact met hen en faciliteren de beloning van goede tips.
          </p>

          {/* Grid van tegels met logo en link */}
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {partners.map((p) => (
              <article key={p.name} className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <img src={p.logo} alt={`${p.name} logo`} className="h-8 w-auto" />
                  <h3 className="text-base font-semibold">{p.name}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-neutral-700">{p.blurb}</p>
                <a
                  href={p.url}
                  className="mt-4 inline-block text-sm font-medium text-emerald-700 underline underline-offset-4 hover:text-emerald-800"
                  target="_blank"
                  rel="noreferrer"
                >
                  Bezoek website
                </a>
              </article>
            ))}
          </div>

          {/* Logo strip onderaan */}
          <div className="mt-12 border-t border-neutral-200 pt-6">
            <p className="mb-4 text-sm text-neutral-600">Met steun van onze partners:</p>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-5">
              {partners.map((p) => (
                <div key={`${p.name}-logo`} className="flex items-center justify-center">
                  <img
                    src={p.logo}
                    alt={`${p.name} logo`}
                    className="h-10 w-auto opacity-90 grayscale hover:opacity-100 hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-3xl font-semibold tracking-tight">Veelgestelde vragen</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[{
              q: "Hoe weet ik of mijn tip in aanmerking komt?",
              a: "De partnerorganisatie bekijkt elke tip zorgvuldig en beoordeelt of deze past binnen hun werking.",
            },{
              q: "Wanneer krijg ik mijn beloning?",
              a: "Na bevestiging dat jouw tip effectief leidde tot verhuur of verkoop aan de doelgroep, ontvang je de beloning.",
            },{
              q: "Mag ik ook tips geven buiten Gent of Brugge?",
              a: "Ja. Via het PATHS-project van Fedasil en IOM zijn we actief in heel België.",
            }].map((item) => (
              <div key={item.q} className="rounded-2xl border border-neutral-200 bg-white p-5">
                <h3 className="font-medium">{item.q}</h3>
                <p className="mt-2 text-sm text-neutral-700">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-3xl font-semibold tracking-tight">Contact</h2>
          <p className="mt-3 text-neutral-700">
            Heb je een vraag? Mail ons op <a className="underline" href="mailto:info@tipeenthuis.be">info@tipeenthuis.be</a> of gebruik het contactformulier.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-neutral-600">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} Tip een Thuis. Alle rechten voorbehouden.</p>
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
