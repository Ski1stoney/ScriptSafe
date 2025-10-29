// No "use client" needed — static, fast, export-friendly

function Logo({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 32" role="img" aria-label="ScriptSafe">
      <defs>
        <linearGradient id="ssGrad" x1="0" x2="1">
          <stop offset="0%" stopColor="#1e3a8a"/>
          <stop offset="100%" stopColor="#2563eb"/>
        </linearGradient>
      </defs>
      <g transform="translate(0,2)">
        <path d="M14 4c6 0 10 3 10 7 0 3-2 5-7 6l-3 .6c-2.7.5-4 1.5-4 3 0 2 2.4 3.4 6 3.4 2.5 0 5-.7 7.2-2l2.2 3.2C22.6 27 19.2 28 15.8 28 8.8 28 4 24.8 4 20c0-4 2.9-6.2 7.3-7l3-.6c2.6-.5 3.7-1.4 3.7-2.9 0-1.9-2.1-3.1-5.8-3.1-2.7 0-5.4.8-7.7 2.1L2.5 5.3C5.7 3.8 9.7 4 14 4Z" fill="url(#ssGrad)"/>
        <path d="M34 4c7 0 12 3.3 12 8.3 0 3.8-2.7 6.2-7.5 7.2l-4.1.8c-2.2.4-3.4 1.3-3.4 2.7 0 2.1 2.8 3.5 7.2 3.5 3 0 5.8-.7 8.2-2l2.1 3.1C46.4 27.2 43 28 38.4 28 31 28 26 24.6 26 19.9c0-4.1 2.9-6.6 7.9-7.6l4-.8c2.1-.4 3-1.2 3-2.4 0-1.8-2.5-3-6.9-3-3 0-6 .8-8.6 2.1l-2.1-3.1C26.6 4.8 30.1 4 34 4Z" fill="url(#ssGrad)" opacity="0.85"/>
      </g>
      <text x="58" y="22" fontFamily="ui-sans-serif, system-ui" fontSize="18" fontWeight="800" fill="#1e3a8a">Script</text>
      <text x="104" y="22" fontFamily="ui-sans-serif, system-ui" fontSize="18" fontWeight="800" fill="#0f172a">Safe</text>
    </svg>
  );
}

function Section({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`container py-16 ${className}`}>{children}</section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b bg-white/90 backdrop-blur sticky top-0 z-50">
        <div className="container h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Logo className="h-10 w-auto" />
            <div className="leading-tight hidden sm:block">
              <div className="text-lg sm:text-xl font-extrabold text-blue-800">ScriptSafe</div>
              <div className="kicker">Pharmacy Digital Payments Accreditation</div>
            </div>
          </div>
          <div className="hidden md:flex gap-2">
            <a className="btn btn-outline" href="#accreditation">Accreditation</a>
            <a className="btn btn-outline" href="#faq">FAQ</a>
            <a className="btn btn-primary" href="#contact">Get Accredited</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <Section id="hero" className="text-center">
        <div className="kicker mb-2">Pharmacy Digital Payments Accreditation</div>
        <h1 className="h1">Pharmacy Digital Payments Accreditation</h1>
        <p className="mt-2 text-blue-700 font-semibold">Faster. Trusted. Affordable.</p>
        <p className="mt-4 text-lg text-slate-700 max-w-3xl mx-auto">
          Official digital accreditation enabling pharmacies to accept card-not-present payments online.
          Streamlined reviews, clear standards, recognition by acquiring banks and payment gateways.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <a className="btn btn-primary" href="#contact">Begin Application</a>
          <a className="btn btn-outline" href="#accreditation">View Standards</a>
        </div>
      </Section>

      {/* Three pillars */}
      <Section id="pillars" className="pt-0">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Licensure & Governance",
              blurb: "Active state/federal licenses, PIC oversight, scope of practice, and disclosures.",
              img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop",
            },
            {
              title: "Product & Marketing Integrity",
              blurb: "Lawful catalog, truthful claims, storage & shipping safeguards, age-restricted controls.",
              img: "https://images.unsplash.com/photo-1582719478252-2bd1c3a8dd24?q=80&w=1600&auto=format&fit=crop",
            },
            {
              title: "E-Commerce & Payments",
              blurb: "AVS/CVV, refund/chargeback policy, clear descriptors, privacy & data protection.",
              img: "https://images.unsplash.com/photo-1585432959449-b1c211b2342f?q=80&w=1600&auto=format&fit=crop",
            },
          ].map((c, i) => (
            <div key={i} className="card overflow-hidden">
              <img className="w-full h-40 object-cover" src={c.img} alt={c.title} />
              <div className="card-body">
                <div className="font-semibold text-blue-800">{c.title}</div>
                <p className="text-sm text-slate-700 mt-2">{c.blurb}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Accreditation summary */}
      <Section id="accreditation" className="pt-0">
        <h2 className="h2">Accreditation Standards & Process</h2>
        <div className="mt-4 grid md:grid-cols-2 gap-8">
          <div className="card"><div className="card-body">
            <div className="font-semibold">Eligibility</div>
            <ul className="list-disc pl-5 mt-2 text-sm text-slate-700 space-y-1">
              <li>Valid licenses in all jurisdictions served; pharmacist-in-charge identified</li>
              <li>Digital practice elements (Rx intake/refills, portals, counselling)</li>
              <li>Lawful product set and compliant marketing</li>
              <li>Documented checkout, refund, and chargeback policies</li>
            </ul>
          </div></div>
          <div className="card"><div className="card-body">
            <div className="font-semibold">Timeline (Typical)</div>
            <ol className="list-decimal pl-5 mt-2 text-sm text-slate-700 space-y-1">
              <li><b>Day 0:</b> Application & documentation</li>
              <li><b>Days 1–7:</b> Parallel checks: licensure, operations, website, payments</li>
              <li><b>Days 8–10:</b> Remediation & decision</li>
              <li><b>Day 10+:</b> Certificate, ScriptSafe ID, optional public listing</li>
            </ol>
          </div></div>
        </div>
        <div className="mt-6 flex gap-3">
          <a className="btn btn-primary" href="#contact">Start application</a>
          <a className="btn btn-outline" href="#faq">Read FAQ</a>
        </div>
      </Section>

      {/* FAQ (short) */}
      <Section id="faq" className="pt-0">
        <h2 className="h2">Frequently Asked Questions</h2>
        <div className="mt-4 grid md:grid-cols-2 gap-4">
          {[
            ["What is this accreditation?", "An impartial evaluation confirming standards for lawful operations and secure online card acceptance."],
            ["How long does it take?", "Target ~10 business days for documentation-ready applicants."],
            ["Is it recognized by processors?", "Designed for payments enablement; share your ScriptSafe packet with acquirers/gateways."],
            ["What ongoing monitoring?", "Annual light-touch review, automated license checks, website scans, and attestations."],
          ].map(([q,a],i)=>(
            <div key={i} className="card"><div className="card-body">
              <div className="font-medium text-slate-800">{q}</div>
              <p className="text-sm text-slate-700 mt-2">{a}</p>
            </div></div>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" className="pt-0">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card"><div className="card-body">
            <div className="h2">Contact ScriptSafe</div>
            <p className="mt-2 text-slate-700">Begin your accreditation process.</p>
            <form className="grid gap-3 mt-4" onSubmit={(e)=>e.preventDefault()}>
              <input className="rounded-xl border px-3 py-2" placeholder="Pharmacy name" />
              <input className="rounded-xl border px-3 py-2" placeholder="Website" />
              <input className="rounded-xl border px-3 py-2" placeholder="Primary contact" />
              <input className="rounded-xl border px-3 py-2" placeholder="Email" />
              <textarea className="rounded-xl border px-3 py-2 min-h-[120px]" placeholder="Tell us about your pharmacy and goals." />
              <button className="btn btn-primary">Submit</button>
            </form>
          </div></div>
          <div className="card overflow-hidden">
            <img src="https://images.unsplash.com/photo-1582719478296-93f244f0c3c1?q=80&w=1600&auto=format&fit=crop" alt="Pharmacy support" className="w-full h-40 object-cover" />
            <div className="card-body">
              <div className="font-semibold text-blue-800">What to Expect</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-700 list-disc pl-5">
                <li>Response within one business day</li>
                <li>Application guide and checklist</li>
                <li>Clear, streamlined review</li>
                <li>Decision in as few as 10 business days</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="mt-20 border-t bg-white/80">
        <div className="container py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-3">
            <Logo className="h-9 mt-0.5" />
            <div>
              <div className="text-lg font-extrabold text-blue-800 leading-tight">ScriptSafe</div>
              <div className="kicker">Pharmacy Digital Payments Accreditation</div>
              <p className="text-xs text-slate-600 max-w-xl mt-3">
                Digital accreditation for pharmacy merchants to accept online card payments. Fast, fair, and recognized by acquiring banks and payment gateways.
              </p>
              <p className="text-[11px] text-slate-500 mt-3">
                © 2025 ScriptSafe Accreditation Services. Independent accrediting organization. Not affiliated with VISA, NABP, or LegitScript.
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <a className="btn btn-outline" href="#faq">FAQ</a>
            <a className="btn btn-primary" href="#contact">Start Now</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
