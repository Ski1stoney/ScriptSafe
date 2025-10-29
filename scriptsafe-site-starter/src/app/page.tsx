'use client';
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, ExternalLink } from "lucide-react";

const Button = ({ children, className = "", variant, ...props }: any) => (
  <button
    className={`inline-flex items-center justify-center px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
      variant === "outline"
        ? "border bg-white hover:bg-slate-50"
        : "bg-blue-700 text-white hover:bg-blue-800"
    } ${className}`}
    {...props}
  >
    {children}
  </button>
);

const Card = ({ className = "", children }: any) => (
  <div className={`rounded-2xl border bg-white ${className}`}>{children}</div>
);
const CardContent = ({ className = "", children }: any) => (
  <div className={`p-4 ${className}`}>{children}</div>
);

// Inline SVG brand mark
const Logo = ({ className = "h-10 w-auto" }: { className?: string }) => (
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

const Section = ({ id, children, className = "" }: any) => (
  <section id={id} className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 ${className}`}>{children}</section>
);
const NavButton = ({ label, active, onClick }: any) => (
  <button onClick={onClick} className={`px-3 py-2 rounded-xl text-sm font-medium transition-all ${active ? "bg-blue-700 text-white shadow" : "hover:bg-blue-100"}`}>{label}</button>
);
const Tagline = ({ className = "" }: any) => (
  <div className={`text-[11px] sm:text-xs font-medium tracking-wide text-blue-700/80 ${className}`}>Pharmacy Digital Payments Accreditation</div>
);
const GradientImage = ({ src, alt, className = "" }: any) => (
  <div className={`relative overflow-hidden rounded-3xl ${className}`}>
    <img src={src} alt={alt} className="w-full h-full object-cover filter brightness-90" />
    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-blue-700/20 to-transparent" />
  </div>
);

function Home() {
  return (
    <main>
      <Section id="hero" className="pt-20 pb-6 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Logo className="h-24 mx-auto mb-3" />
          <Tagline className="mx-auto" />
          <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold text-blue-800 tracking-tight leading-tight">
            Pharmacy Digital Payments Accreditation
            <br />
            <span className="text-blue-600">Faster. Trusted. Affordable.</span>
          </h1>
          <p className="mt-4 text-lg text-slate-700 leading-relaxed max-w-3xl mx-auto">
            ScriptSafe provides official accreditation enabling pharmacies to accept online payments securely. Trusted by acquiring banks,
            recognized by payment gateways, and approved in under two weeks.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Button className="rounded-xl bg-blue-700 hover:bg-blue-800 text-white">Begin Application</Button>
            <Button variant="outline" className="rounded-xl border-blue-600 text-blue-700">Learn More</Button>
          </div>
        </motion.div>
      </Section>
      <Section id="visuals" className="pt-4">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { src: "https://source.unsplash.com/1200x800/?pharmacist,lab-coat", title: "Licensure Verification", blurb: "State and federal credentials, PIC verification, and scope of practice." },
            { src: "https://source.unsplash.com/1200x800/?pills,pharmacy", title: "Clinical & Product Integrity", blurb: "Lawful catalog, truthful claims, and safe sourcing & fulfillment." },
            { src: "https://source.unsplash.com/1200x800/?pharmacy,counter", title: "Checkout & Risk Controls", blurb: "AVS/CVV enforcement, refunds, chargebacks, and data protection." },
          ].map((img, i) => (
            <div key={i} className="relative">
              <GradientImage src={img.src} alt={img.title} className="h-52 w-full object-cover" />
              <div className="absolute bottom-0 left-0 p-5 text-white">
                <div className="font-semibold text-lg drop-shadow-lg">{img.title}</div>
                <p className="text-sm opacity-90">{img.blurb}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}

function Accreditation() {
  return (
    <main>
      <Section id="accred-hero" className="pt-12 pb-4">
        <div className="rounded-3xl overflow-hidden border shadow">
          <GradientImage src="https://source.unsplash.com/1600x500/?pharmacy,accreditation" alt="Accreditation overview" className="h-56" />
        </div>
        <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-blue-800">Accreditation Standards & Process</h2>
        <p className="mt-3 text-slate-700 max-w-3xl">
          ScriptSafe recognizes pharmacy merchants that consistently meet defined standards of quality, safety, and performance through an impartial evaluation.
          Our framework is aligned to digital pharmacy practice and card-not-present payment risk expectations.
        </p>
      </Section>
    </main>
  );
}

function FAQ() {
  const faqs = [
    { q: "What is Pharmacy Digital Payments Accreditation?", a: "An impartial evaluation confirming standards for lawful operations and secure online card acceptance." },
    { q: "How long does it take?", a: "Our target is ~10 business days for documentation-ready applicants." },
    { q: "Is it recognized by processors?", a: "Yes—share your ScriptSafe packet with acquirers and gateways to support underwriting." },
  ];
  return (
    <main>
      <Section id="faq">
        <h2 className="text-3xl font-extrabold tracking-tight text-blue-800">Frequently Asked Questions</h2>
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          {faqs.map((f, i) => (
            <details key={i} className="group rounded-2xl border bg-white p-5 shadow-sm">
              <summary className="list-none cursor-pointer select-none flex items-center justify-between">
                <span className="font-medium text-slate-800 pr-4">{f.q}</span>
                <ChevronRight className="shrink-0 transition-transform group-open:rotate-90" />
              </summary>
              <div className="pt-3 text-slate-700 leading-relaxed text-sm">{f.a}</div>
            </details>
          ))}
        </div>
      </Section>
    </main>
  );
}

function WhoWeAre() {
  return (
    <main>
      <Section id="about">
        <h2 className="text-3xl font-bold text-blue-800 tracking-tight">Who We Are</h2>
        <p className="mt-3 text-slate-700 leading-relaxed max-w-3xl">
          ScriptSafe was founded by experts in pharmacy compliance, risk management, and payment technology. Our mission is to make
          digital pharmacy accreditation faster, more transparent, and more accessible—so legitimate pharmacies can thrive online.
        </p>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl overflow-hidden border shadow">
            <img src="https://source.unsplash.com/1600x900/?pharmacist,team" alt="Pharmacist team" className="w-full h-64 object-cover" />
          </div>
          <div className="rounded-3xl overflow-hidden border shadow">
            <img src="https://source.unsplash.com/1600x900/?pill-bottles,pharmacy" alt="Compliance review" className="w-full h-64 object-cover" />
          </div>
        </div>
        <div className="mt-6">
          <a href="#" onClick={(e)=>e.preventDefault()} className="inline-flex items-center gap-2 text-blue-700 underline"><ExternalLink className="h-4 w-4"/> Learn about governance</a>
        </div>
      </Section>
    </main>
  );
}

function Resources() {
  return (
    <main>
      <Section id="resources">
        <h2 className="text-3xl font-bold text-blue-800 tracking-tight">Resources</h2>
        <p className="mt-3 text-slate-700">Essential downloads for applicants and partners.</p>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {["Application Checklist", "Accreditation Standards", "Gateway Packet"].map((r) => (
            <Card key={r} className="rounded-2xl shadow-md overflow-hidden">
              <img src="https://source.unsplash.com/1200x600/?rx,bottle" alt="Document preview" className="w-full h-36 object-cover" />
              <CardContent className="p-6">
                <div className="font-semibold text-blue-700">{r}</div>
                <p className="text-sm text-slate-700 mt-2">Download {r.toLowerCase()} to prepare your submission.</p>
                <div className="mt-4"><Button variant="outline" className="rounded-xl border-blue-700 text-blue-700">Download</Button></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
    </main>
  );
}

function Contact() {
  return (
    <main>
      <Section id="contact">
        <h2 className="text-3xl font-bold text-blue-800 tracking-tight">Contact ScriptSafe</h2>
        <p className="mt-2 text-slate-700">Reach out to begin your accreditation process.</p>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl border bg-white p-6 shadow">
            <form className="grid gap-4" onSubmit={(e)=>e.preventDefault()}>
              <input className="rounded-xl border px-3 py-2" placeholder="Pharmacy name" />
              <input className="rounded-xl border px-3 py-2" placeholder="Website" />
              <input className="rounded-xl border px-3 py-2" placeholder="Primary contact" />
              <input className="rounded-xl border px-3 py-2" placeholder="Email" />
              <textarea className="rounded-2xl border px-3 py-2 min-h-[120px]" placeholder="Tell us about your pharmacy and goals." />
              <Button className="rounded-xl bg-blue-700 hover:bg-blue-800 text-white">Submit</Button>
            </form>
          </div>
          <div className="rounded-3xl border bg-white p-0 overflow-hidden shadow">
            <img src="https://source.unsplash.com/1600x400/?pharmacy,help-desk" alt="Support" className="w-full h-40 object-cover" />
            <div className="p-6">
              <h3 className="font-semibold text-blue-700">What to Expect</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700 list-disc pl-5">
                <li>We respond within one business day.</li>
                <li>Receive an application guide and checklist.</li>
                <li>Our team reviews your materials quickly and clearly.</li>
                <li>Approval and listing in as few as 10 business days.</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}

export default function Page() {
  const [page, setPage] = useState("Home");
  const nav = ["Home", "Accreditation", "FAQ", "Who We Are", "Resources", "Contact"];

  const PageBody = useMemo(() => {
    switch (page) {
      case "Home": return <Home />;
      case "Accreditation": return <Accreditation />;
      case "FAQ": return <FAQ />;
      case "Who We Are": return <WhoWeAre />;
      case "Resources": return <Resources />;
      case "Contact": return <Contact />;
      default: return <Home />;
    }
  }, [page]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-slate-100 text-slate-900">
      <header className="border-b bg-white/90 backdrop-blur sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Logo className="h-10 w-auto" />
            <div className="leading-tight hidden sm:block">
              <div className="text-lg sm:text-xl font-extrabold text-blue-800">ScriptSafe</div>
              <Tagline />
            </div>
          </div>
          <nav className="hidden md:flex gap-2">
            {nav.map((n) => (<NavButton key={n} label={n} active={page === n} onClick={() => setPage(n)} />))}
          </nav>
          <div className="flex items-center gap-2">
            <Button className="rounded-xl bg-blue-700 hover:bg-blue-800 text-white" onClick={() => setPage("Contact")}>Get Accredited</Button>
          </div>
        </div>
      </header>

      {PageBody}

      <footer className="mt-20 border-t bg-white/70">
        <Section className="py-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-3">
              <Logo className="h-9 mt-0.5" />
              <div>
                <div className="text-lg font-extrabold text-blue-800 leading-tight">ScriptSafe</div>
                <Tagline />
                <p className="text-sm text-slate-600 max-w-xl mt-2">
                  Digital accreditation for pharmacy merchants to accept online card payments. Fast, fair, and recognized by acquiring banks and payment gateways.
                </p>
                <p className="text-xs text-slate-500 mt-3">
                  © 2025 ScriptSafe Accreditation Services. Independent accrediting organization. Not affiliated with VISA, NABP, or LegitScript.
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="rounded-xl" onClick={() => setPage("Resources")}>Resources</Button>
              <Button className="rounded-xl bg-blue-700 hover:bg-blue-800 text-white" onClick={() => setPage("Contact")}>Start Now</Button>
            </div>
          </div>
        </Section>
      </footer>
    </div>
  );
}
