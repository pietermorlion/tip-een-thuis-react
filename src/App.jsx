import React, { useState } from "react";

// Tip een Thuis — Landing page (herwerkt)
// Warm (hartelijk) én professioneel met TailwindCSS.

export default function TipEenThuisSite() {
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
      blurb: "Innovatie- en mobiliteitsstudio; faciliterend partner van het burgerinitiatief en projecten rond sociaal wonen.",
      url: "https://www.more-lion.com/",
      favicon: "/images/partners/morelion.png",
      logo: "/images/partners/morelion.png",
    },
    {
      name: "Een Hart Voor Vluchtelingen",
      blurb: "Begeleidt verhuur aan erkende vluchtelingen en ondersteunt nieuwkomers richting duurzame integratie.",
      url: "https://eenhartvoorvluchtelingen.be/",
      favicon: "/images/partners/ehvv.png",
      logo: "/images/partners/ehvv.png",
    },
    {
      name: "Het Pandschap / Pandschap Invest",
      blurb: "Koopt/renoveert panden en zet ze in voor sociale verhuur met focus op kwaliteit en betaalbaarheid.",
      url: "https://pandschap.be/",
      favicon: "/images/partners/pandschap.png",
      logo: "/images/partners/pandschap.png",
    },
    {
      name: "CLT Gent",
      blurb: "Community Land Trust die betaalbaar wonen realiseert door grond en woning te scheiden.",
      url: "https://www.cltgent.be/",
      favicon: "/images/partners/cltgent.png",
      logo: "/images/partners/cltgent.png",
    },
    {
      name: "Orbit vzw",
      blurb: "Werkt rond migratie, armoede en een menswaardig woonbeleid; verbindt lokale netwerken.",
      url: "https://www.orbitvzw.be/",
      favicon: "/images/partners/orbit.png",
      logo: "/images/partners/orbit.png",
    },
    {
      name: "VZW Thope",
      blurb: "Begeleidt erkende vluchtelingen en kwetsbare gezinnen naar en tijdens hun huurtraject.",
      url: "https://www.thopevzw.be/",
      favicon: "/images/partners/thope.png",
      logo: "/images/partners/thope.png",
    },
    {
      name: "Huizen van de Vrede vzw",
      blurb: "Zoekt en begeleidt huurwoningen in Brugge, met warme ondersteuning voor huurders en verhuurders.",
      url: "https://www.huizenvanvredevzw.be/",
      favicon: "/images/partners/huizen-vrede.png",
      logo: "/images/partners/huizen-vrede.png",
    },
    {
      name: "Fedasil",
      blurb: "Coördineert opvang en doorstroming van verzoekers om internationale bescherming.",
      url: "https://www.fedasil.be/",
      favicon: "/images/partners/fedasil.png",
      logo: "/images/partners/fedasil.png",
    },
    {
      name: "IOM (VN Migratieagentschap)",
      blurb: "Internationale Organisatie voor Migratie; partner in duurzame woontrajecten.",
      url: "https://www.iom.int/",
      favicon: "/images/partners/iom.png",
      logo: "/images/partners/iom.png",
    },
    {
      name: "PATHS-project",
      blurb: "Zoekt huurwoningen in heel België voor erkende vluchtelingen; verbindt eigenaars en huurders.",
      url: "https://www.fedasil.be/en/news/paths-project-housing",
      favicon: "/images/partners/paths.png",
      logo: "/images/partners/paths.png",
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
            <a href="#formulier" className="hover:text-emerald-700">Formulier</a>
            <a href="#faq" className="hover:text-emerald-700">FAQ</a>
            <a href="#contact" className="hover:text-emerald-700">Contact</a>
          </nav>
          <a href="#formulier" className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700">Tip een pand</a>
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
            <a href="#formulier" className="rounded-xl bg-emerald-600 px-6 py-3 font-medium text-white hover:bg-emerald-700">Deel je tip</a>
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

      {/* ... rest van je bestand ongewijzigd (Wat zoeken we, Formulier, Beloning, Partners, etc.) ... */}
    </div>
  );
}
