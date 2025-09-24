import React, { useState } from "react";

export default function App() {
  const [form, setForm] = useState({ naam: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <h1 className="text-4xl font-bold text-white drop-shadow-lg">
        Iedereen verdient een <span className="text-emerald-200">thuis</span>
      </h1>
      {sent ? <p>Bedankt voor je tip!</p> : <form onSubmit={handleSubmit}>
        <input value={form.naam} onChange={(e)=>setForm({...form, naam:e.target.value})}/>
        <button type="submit">Verzend</button>
      </form>}
    </div>
  );
}
