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
    // ... partner array unchanged ...
  ];

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Tip verstuurd:", form);
    setSent(true);
  }

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Header */}
      {/* ... header unchanged ... */}

      {/* Hero */}
      {/* ... hero unchanged ... */}

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

      {/* ... rest of file unchanged ... */}
    </div>
  );
}
