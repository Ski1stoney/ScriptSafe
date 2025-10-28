import React, { useState } from "react";

const brand = {
  name: "ScriptSafe",
  primary: "#1E88E5",
  primaryLight: "#E6F2FF",
  primaryDark: "#1565C0",
  accent: "#10B981",
  slate: "#0F172A",
};

const pages = [
  { key: "home", label: "Home" },
  { key: "accreditation", label: "Accreditation" },
  { key: "faq", label: "FAQ" },
  { key: "who", label: "Who We Are" },
  { key: "pageA", label: "Page A" },
  { key: "pageB", label: "Page B" },
];

function Container({ children }) {
  return <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>;
}

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-black/5 shadow-sm">
      {children}
    </span>
  );
}

function Section({ id, title, eyebrow, children }) {
  return (
    <section id={id} className="py-16 sm:py-20 scroll-mt-24">
      <Container>
        {eyebrow && (
          <div className="mb-3">
            <Pill>{eyebrow}</Pill>
          </div>
        )}
        {title && (
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">
            {title}
          </h2>
        )}
        <div>{children}</div>
      </Container>
    </section>
  );
}

function Nav({ current, onNavigate }) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200">
      <Container>
        <div className="flex items-center justify-between py-3">
          <div
            className="flex items-baseline gap-1 select-none cursor-pointer"
            onClick={() => onNavigate("home")}
          >
            <span
              className="text-2xl sm:text-3xl font-semibold italic"
              style={{ color: brand.primary }}
            >
              Script
            </span>
            <span className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-800">
              Safe
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            {pages.map((p) => (
              <button
                key={p.key}
                onClick={() => onNavigate(p.key)}
                className={`transition-colors hover:text-[color:var(--brand-primary)] ${
                  current === p.key ? "text-[color:var(--brand-primary)]" : "text-slate-700"
                }`}
                style={{ ["--brand-primary"]: brand.primary }}
              >
                {p.label}
              </button>
            ))}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                onNavigate("home");
                setTimeout(() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }, 0);
              }}
              className="rounded-full bg-[color:var(--brand-primary)] px-4 py-2 text-white font-medium shadow-sm hover:bg-[color:var(--brand-primary-dark)] transition-colors"
              style={{ ["--brand-primary"]: brand.primary, ["--brand-primary-dark"]: brand.primaryDark }}
            >
              Get Started
            </a>
          </nav>
        </div>
      </Container>
    </header>
  );
}

function Feature({ title, text }) {
  return (
    <div className="rounded-2xl bg-white/80 p-6 ring-1 ring-slate-200 shadow-sm">
      <h3 className="font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600 text-sm leading-6">{text}</p>
    </div>
  );
}

function HomePage({ onNavigate }) {
  return (
    <>
      <section
        className="relative overflow-hidden bg-gradient-to-b from-[color:var(--brand-primary-light)] to-white"
        style={{ ["--brand-primary-light"]: brand.primaryLight }}
      >
        <Container>
          <div className="py-16 sm:py-24 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="mb-3">
                <Pill>Pharmacy • Security • Compliance</Pill>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
                Accreditation-ready payments & workflow for modern pharmacies
              </h1>
              <p className="mt-4 text-slate-600 text-lg leading-7">
                ScriptSafe helps digital and community pharmacies build trust with patients and payers.
                Streamline payments, protect health data, and align with accreditation standards—all in one place.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  onClick={() => onNavigate("accreditation")}
                  className="rounded-xl bg-[color:var(--brand-primary)] px-5 py-3 text-white font-medium shadow hover:bg-[color:var(--brand-primary-dark)]"
                  style={{ ["--brand-primary"]: brand.primary, ["--brand-primary-dark"]: brand.primaryDark }}
                >
                  Explore Accreditation
                </button>
                <button
                  onClick={() => onNavigate("faq")}
                  className="rounded-xl px-5 py-3 font-medium ring-1 ring-slate-300 text-slate-800 hover:bg-slate-50"
                >
                  View FAQs
                </button>
              </div>
              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-700">
                {[
                  "HIPAA-aligned data handling",
                  "Chargeback + PCI guidance",
                  "Patient-first checkout",
                  "Gateway + PMS integration",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <span
                      className="mt-1 inline-block h-2 w-2 rounded-full bg-[color:var(--accent)]"
                      style={{ ["--accent"]: brand.accent }}
                    />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl bg-white/70 ring-1 ring-slate-200 shadow-inner p-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl">🛡️💊</div>
                  <p className="mt-3 text-slate-600">Placeholder for hero illustration / product shots.</p>
                </div>
              </div>
              <div className="absolute -z-10 blur-3xl opacity-40 inset-0 bg-[radial-gradient(circle_at_70%_30%,#93C5FD,transparent_60%)]" />
            </div>
          </div>
        </Container>
      </section>

      <Section eyebrow="Why ScriptSafe" title="Built for trust, speed, and compliance">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Feature title="Accreditation-ready" text="Opinionated checklists and docs to prepare for digital pharmacy standards. Map requirements to concrete actions." />
          <Feature title="Secure payments" text="Tokenization, reduced PCI scope strategies, and dispute workflows tailored for pharmacy." />
          <Feature title="Seamless integrations" text="Connect gateways and pharmacy systems. Reduce re-keying and manual reconciliation." />
          <Feature title="Patient experience" text="Clean, accessible checkout and receipts that reinforce your brand and safety." />
          <Feature title="Monitoring & reporting" text="Track fees, chargebacks, and exceptions. Export evidence for audits in one click." />
          <Feature title="Expert support" text="Work with advisors who understand both healthcare and card networks." />
        </div>
      </Section>

      <Section id="contact" eyebrow="Get Started" title="Stand up the basics in days, not months">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <form className="rounded-2xl bg-white/80 p-6 ring-1 ring-slate-200 shadow-sm grid sm:grid-cols-2 gap-4">
              <input className="rounded-xl border border-slate-300 px-4 py-3" placeholder="Name" />
              <input className="rounded-xl border border-slate-300 px-4 py-3" placeholder="Email" />
              <input className="rounded-xl border border-slate-300 px-4 py-3 sm:col-span-2" placeholder="Pharmacy / Org" />
              <textarea className="rounded-xl border border-slate-300 px-4 py-3 sm:col-span-2" rows={4} placeholder="What are you hoping to achieve?" />
              <button className="sm:col-span-2 rounded-xl bg-[color:var(--brand-primary)] px-5 py-3 text-white font-medium shadow hover:bg-[color:var(--brand-primary-dark)]" style={{ ["--brand-primary"]: brand.primary, ["--brand-primary-dark"]: brand.primaryDark }}>Request a consult</button>
            </form>
          </div>
          <div className="rounded-2xl bg-white/80 p-6 ring-1 ring-slate-200 shadow-sm">
            <h3 className="font-semibold text-slate-900">What you’ll get</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>• Quick assessment of current payment & compliance posture</li>
              <li>• Accreditation prep checklist</li>
              <li>• Integration guidance for your stack</li>
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}

function AccreditationPage() {
  return (
    <>
      <Section eyebrow="Accreditation" title="Your path to digital pharmacy accreditation">
        <p className="text-slate-700 max-w-3xl">
          This page is a framework to map accreditation requirements to tangible actions across policy, technology,
          and payment operations. Replace the placeholders with your program’s specific standards and evidence.
        </p>
      </Section>
      <Section title="Framework">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-white/80 p-6 ring-1 ring-slate-200 shadow-sm">
            <h3 className="font-semibold">1) Governance & Policies</h3>
            <ul className="mt-2 text-sm text-slate-700 space-y-1">
              <li>• HIPAA privacy & security program</li>
              <li>• PCI responsibilities matrix</li>
              <li>• Incident response & breach notification</li>
              <li>• Vendor risk management</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white/80 p-6 ring-1 ring-slate-200 shadow-sm">
            <h3 className="font-semibold">2) Technical Controls</h3>
            <ul className="mt-2 text-sm text-slate-700 space-y-1">
              <li>• Encryption, tokenization, key management</li>
              <li>• Access controls & audit logs</li>
              <li>• Secure checkout & receipt handling</li>
              <li>• Data retention & disposal</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white/80 p-6 ring-1 ring-slate-200 shadow-sm">
            <h3 className="font-semibold">3) Operations & Training</h3>
            <ul className="mt-2 text-sm text-slate-700 space-y-1">
              <li>• Chargeback workflow & evidence</li>
              <li>• Reconciliation & monthly reviews</li>
              <li>• Staff training & attestations</li>
              <li>• Business continuity</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white/80 p-6 ring-1 ring-slate-200 shadow-sm">
            <h3 className="font-semibold">4) Evidence & Audit Prep</h3>
            <ul className="mt-2 text-sm text-slate-700 space-y-1">
              <li>• Policies, SOPs, and screenshots</li>
              <li>• Logs, reports, and quarterly reviews</li>
              <li>• Vendor attestations & agreements</li>
              <li>• Risk register & remediation plan</li>
            </ul>
          </div>
        </div>
      </Section>
      <Section title="How ScriptSafe helps">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Feature title="Checklists" text="Actionable tasks mapped to standards so your team knows exactly what to do." />
          <Feature title="Templates" text="Policy & procedure templates you can tailor quickly." />
          <Feature title="Evidence Kit" text="Capture exports, logs, and receipts—organized for auditors." />
          <Feature title="Advisory" text="Access payments + pharmacy experts when you have questions." />
          <Feature title="Integrations" text="Guidance to connect gateways, EHR/PMS, and analytics." />
          <Feature title="Reviews" text="Quarterly program reviews to maintain compliance." />
        </div>
      </Section>
    </>
  );
}

function FAQPage() {
  const items = [
    {
      q: "What is ScriptSafe?",
      a: "A toolkit and advisory service that helps pharmacies strengthen payments, security, and accreditation readiness.",
    },
    { q: "Do you integrate with my systems?", a: "We work with common gateways and pharmacy systems. Tell us your stack and we’ll outline options." },
    { q: "Are you a gateway or processor?", a: "We’re vendor-neutral advisors with accelerators and templates. We help you choose and implement the right stack." },
    { q: "How long does accreditation prep take?", a: "It varies by maturity. Many teams stand up the basics in weeks and iterate from there." },
  ];
  return (
    <Section eyebrow="FAQ" title="Answers to common questions">
      <div className="mx-auto max-w-3xl divide-y divide-slate-200 rounded-2xl bg-white/80 ring-1 ring-slate-200">
        {items.map((it, i) => (
          <details key={i} className="group p-6">
            <summary className="flex cursor-pointer list-none items-center justify-between text-slate-900 font-medium">
              <span>{it.q}</span>
              <span className="ml-4 text-slate-500 transition-transform group-open:rotate-45">＋</span>
            </summary>
            <p className="mt-3 text-slate-700 leading-7">{it.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}

function WhoWeArePage() {
  const people = [
    { name: "Your Name", role: "Founder, Payments & Pharmacy", blurb: "20+ years across merchant processing, pharmacy systems, and compliance." },
    { name: "Advisor Name", role: "Clinical Advisor", blurb: "Focus on patient safety and digital operations." },
    { name: "Engineer Name", role: "Integrations", blurb: "Connect gateways, PMS, and reporting." },
  ];
  return (
    <>
      <Section eyebrow="Team" title="Who we are">
        <p className="max-w-3xl text-slate-700">
          We combine deep payments expertise with healthcare experience. Our mission is to help pharmacies earn and keep
          patient trust while running efficient, compliant operations.
        </p>
      </Section>
      <Section title="Leadership & Advisors">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {people.map((p) => (
            <div key={p.name} className="rounded-2xl bg-white/80 p-6 ring-1 ring-slate-200 shadow-sm">
              <div className="h-20 w-20 rounded-full bg-gradient-to-br from-blue-200 to-blue-300 mb-4" />
              <div className="font-semibold text-slate-900">{p.name}</div>
              <div className="text-sm text-slate-600">{p.role}</div>
              <p className="mt-2 text-sm text-slate-700">{p.blurb}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}

function PlaceholderPage({ title }) {
  return (
    <Section eyebrow="Draft" title={title}>
      <div className="rounded-2xl bg-white/80 p-6 ring-1 ring-slate-200 shadow-sm">
        <p className="text-slate-700">
          This is a full-page placeholder. Use it for a future section such as Pricing, Resources, Partners, or Case Studies.
          Replace with real content blocks (hero, features, CTA) when ready.
        </p>
      </div>
    </Section>
  );
}

export default function App() {
  const [route, setRoute] = useState("home");

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <style>{` :root { --brand-primary: ${brand.primary}; --brand-primary-dark: ${brand.primaryDark}; } `}</style>
      <Nav current={route} onNavigate={setRoute} />
      {route === "home" && <HomePage onNavigate={setRoute} />}
      {route === "accreditation" && <AccreditationPage />}
      {route === "faq" && <FAQPage />}
      {route === "who" && <WhoWeArePage />}
      {route === "pageA" && <PlaceholderPage title="Page A" />}
      {route === "pageB" && <PlaceholderPage title="Page B" />}

      <footer className="border-t border-slate-200 mt-10">
        <Container>
          <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600">
            <div>
              <span className="font-semibold italic" style={{ color: brand.primary }}>Script</span>
              <span className="font-bold">Safe</span> © {new Date().getFullYear()} — All rights reserved
            </div>
            <div className="flex items-center gap-4">
              <a className="hover:text-slate-900" href="#">Privacy</a>
              <a className="hover:text-slate-900" href="#">Terms</a>
              <a className="hover:text-slate-900" href="#">Contact</a>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}
