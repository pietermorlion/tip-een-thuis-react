import React, { useState } from "react";

export default function App() {
  const [form, setForm] = useState({
    naam: "", email: "", rol: "Ik tip een pand", type: "Huurwoning",
    locatie: "", beschrijving: "", akkoord: false,
  });
  const [sent, setSent] = useState(false);

  const steps = [
    {
      n: "1",
      title: "Geef je tip door",
      text: <>Heb of ken je een woning of stuk grond dat binnenkort te huur of te koop komt? Laat het ons weten via het <a href="#formulier">formulier</a>.</>
    },
    {
      n: "2",
      title: "Wij koppelen je tip",
      text: "We koppelen je tip aan de juiste partnerorganisatie. Zij nemen contact met je op en houden je op de hoogte van de volgende stappen."
    },
    {
      n: "3",
      title: "Ontvang een beloning",
      text: "Leidt je tip effectief tot verhuur of verkoop? Dan krijg jij een beloning en weet je dat jouw tip een nieuw thuis heeft opgeleverd."
    }
  ];

  const partners = [
    { key: "morelion", name: "MORE LION", url: "https://www.more-lion.com/", blurb: "Innovatiestudio; facilitatie van burgerinitiatief en projecten rond sociaal wonen." },
    { key: "ehvv", name: "Een Hart Voor Vluchtelingen", url: "https://eenhartvoorvluchtelingen.be/", blurb: "Begeleidt verhuur aan erkende vluchtelingen en ondersteunt duurzame integratie." },
    { key: "pandschap", name: "Het Pandschap / Pandschap Invest", url: "https://pandschap.be/", blurb: "Koopt/renoveert panden voor sociale verhuur met kwaliteit en betaalbaarheid." },
    { key: "cltgent", name: "CLT Gent", url: "https://www.cltgent.be/", blurb: "Community Land Trust: betaalbaar wonen via scheiding van grond en woning." },
    { key: "orbit", name: "Orbit vzw", url: "https://www.orbitvzw.be/", blurb: "Werkt rond migratie, armoede en menswaardig woonbeleid; verbindt lokale netwerken." },
    { key: "thope", name: "VZW Thope", url: "https://www.thopevzw.be/", blurb: "Begeleidt erkende vluchtelingen/gezinnen naar en tijdens hun huurtraject." },
    { key: "huizenvanvrede", name: "Huizen van de Vrede vzw", url: "https://www.huizenvanvredevzw.be/", blurb: "Zoekt en begeleidt huurwoningen in Brugge; warme ondersteuning voor huurders/verhuurders." },
    { key: "fedasil", name: "Fedasil", url: "https://www.fedasil.be/", blurb: "Coördineert opvang en doorstroming van verzoekers om internationale bescherming." },
    { key: "iom", name: "IOM (VN Migratieagentschap)", url: "https://www.iom.int/", blurb: "Internationale Organisatie voor Migratie; partner in duurzame woontrajecten." },
    { key: "paths", name: "PATHS-project", url: "https://www.fedasil.be/en/news/paths-project-housing", blurb: "Zoekt huurwoningen in heel België; verbindt eigenaars en huurders." }
  ];

  function handleSubmit(e){ e.preventDefault(); setSent(true); }

  return (
    <>
      <header className="header">
        <div className="container header-inner">
          <a href="#home" className="brand" aria-label="Homepage">
            <div className="brand-badge" aria-hidden="true">T</div>
            <span>Tip een Thuis</span>
          </a>
          <nav className="nav" aria-label="Hoofdnavigatie">
            <a href="#hoe">Hoe werkt het</a>
            <a href="#wat">Wat zoeken we</a>
            <a href="#beloning">Beloning</a>
            <a href="#partners">Partners</a>
            <a href="#formulier">Formulier</a>
          </nav>
          <a href="#formulier" className="cta">Tip een pand</a>
        </div>
      </header>

      <main id="main">
        {/* Hero */}
        <section id="home" className="section" aria-label="Intro">
          <div
            className="hero"
            style={{ "--hero": "url('/images/banner_spanje.jpg')" }}
          >
            <style>{`.hero::before{ background-image: var(--hero), linear-gradient(135deg,#0b1220 0%,#0d3b2a 100%); }`}</style>
            <div className="hero-content">
              <h1>Iedereen verdient een <span style={{color:"#bbf7d0"}}>thuis</span></h1>
              <p>Moeilijk een woning vinden? Samen zorgen we voor een warme thuis voor kwetsbare doelgroepen — en jij krijgt er een mooie beloning voor terug!</p>
              <div className="hero-actions">
                <a href="#formulier" className="btn btn-primary">Deel je tip</a>
                <a href="#hoe" className="btn btn-outline">Hoe werkt het?</a>
              </div>
            </div>
          </div>
        </section>

        {/* Hoe werkt het */}
        <section id="hoe" className="section" aria-label="Hoe werkt het">
          <div className="container" style={{padding:"56px 0"}}>
            <h2 className="h2">Hoe werkt het?</h2>
            <div className="grid cols-3" style={{marginTop:16}}>
              {steps.map(s => (
                <article className="card" key={s.n}>
                  <div className="badge" aria-hidden="true">{s.n}</div>
                  <h3 style={{marginTop:12}}>{s.title}</h3>
                  <p style={{marginTop:8,color:"var(--muted)"}}>{s.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Wat zoeken we */}
        <section id="wat" className="section alt" aria-label="Wat zoeken we">
          <div className="container" style={{padding:"56px 0"}}>
            <h2 className="h2">Wat zoeken we?</h2>
            <p className="lead">We zoeken woningen en gronden in verschillende regio’s:</p>
            <div className="grid cols-3" style={{marginTop:16}}>
              <article className="card">
                <h3>Gent</h3>
                <ul className="list">
                  <li>Huurwoningen (Een Hart Voor Vluchtelingen vzw, Thope vzw)</li>
                  <li>Koopwoningen & appartementen (Pandschap Invest)</li>
                  <li>Bouwgrond (CLT Gent)</li>
                </ul>
              </article>
              <article className="card">
                <h3>Brugge</h3>
                <ul className="list">
                  <li>Huurwoningen (Huizen van de Vrede)</li>
                  <li>Koopwoningen (MORE LION, Pandschap Invest)</li>
                </ul>
              </article>
              <article className="card">
                <h3>Heel België</h3>
                <ul className="list">
                  <li>Huurwoningen via PATHS (project van Fedasil, Orbit & IOM)</li>
                  <li>Eigenaars die willen verhuren of verkopen aan de doelgroep</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* Beloning */}
        <section id="beloning" className="section" aria-label="Beloning">
          <div className="container" style={{padding:"56px 0"}}>
            <h2 className="h2">Welke beloning krijg ik?</h2>
            <p className="lead">Ontvang een beloning wanneer je tip effectief leidt tot verhuur of verkoop aan de doelgroep.</p>
            <div className="grid cols-3" style={{marginTop:16}}>
              <article className="card">
                <a className="card-media bg1" style={{"--img1":"url('/images/beloning-bon.jpg')"}} aria-hidden="true"></a>
                <h3 style={{marginTop:12}}>Supermarktbon van €200</h3>
                <p style={{color:"var(--muted)"}}>Bij succesvolle <em>verhuur</em>.</p>
              </article>
              <article className="card">
                <a className="card-media bg2" style={{"--img2":"url('/images/la-perla-verde.jpg')"}} aria-hidden="true"></a>
                <h3 style={{marginTop:12}}>5 dagen in Spanje (6p)</h3>
                <p style={{color:"var(--muted)"}}>Bij succesvolle <em>verkoop</em> van een pand of grond. Verblijf in Finca La Perla Verde. <a href="https://enjoymicasa.be" target="_blank" rel="noreferrer">Meer info ↗</a></p>
              </article>
              <article className="card">
                <a className="card-media bg3" style={{"--img3":"url('/images/beloning-grond.jpg')"}} aria-hidden="true"></a>
                <h3 style={{marginTop:12}}>Verkoop van grond</h3>
                <p style={{color:"var(--muted)"}}>Details volgen — we houden je op de hoogte.</p>
              </article>
            </div>
          </div>
        </section>

        {/* Partners */}
        <section id="partners" className="section" aria-label="Partners">
          <div className="container" style={{padding:"56px 0"}}>
            <h2 className="h2">Partners</h2>
            <p className="lead">Samen met onze partners bouwen we aan meer woningen en kansen voor kwetsbare doelgroepen en erkende vluchtelingen.</p>
            <div className="grid cols-3" style={{marginTop:16}}>
              {partners.map(p => (
                <article className="card" key={p.key}>
                  <h3 style={{marginBottom:6}}>{p.name}</h3>
                  <p style={{color:"var(--muted)", marginTop:0}}>{p.blurb}</p>
                  <a href={p.url} target="_blank" rel="noreferrer">Bezoek website ↗</a>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <p>© {new Date().getFullYear()} Tip een Thuis. Alle rechten voorbehouden.</p>
          <nav style={{display:"flex",gap:12}} aria-label="Footer">
            <a href="#hoe">Hoe werkt het</a>
            <a href="#wat">Wat zoeken we</a>
            <a href="#beloning">Beloning</a>
            <a href="#partners">Partners</a>
          </nav>
        </div>
      </footer>
    </>
  );
}
