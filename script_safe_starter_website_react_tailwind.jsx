import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

/**
 * ScriptSafe Starter Site
 * - Slightly 3D logo mark (inline SVG) matching the chosen shield/"S" with a subtle card + pill motif
 * - Color palette: deep navy + teal/aqua
 * - Pages: Home, Accreditation, FAQ, Who We Are, plus two scaffolds (Solutions, Contact)
 * - Responsive, accessible, and easy to extend
 */

// Brand palette (can be synchronized with Tailwind config if you export to a full project)
const colors = {
  navy: "#0C3455",
  navyDark: "#08273F",
  teal: "#11B5C1",
  aqua: "#2ED0CB",
  bg: "#F7FAFC",
};

function Logo({ size = 40, withWordmark = true }) {
  return (
    <div className="flex items-center gap-3">
      {/* Shield + S + subtle card & pill */}
      <svg
        width={size}
        height={(size * 42) / 36}
        viewBox="0 0 36 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-sm"
        aria-label="ScriptSafe logo"
      >
        {/* Shield base */}
        <defs>
          <linearGradient id="g1" x1="0" y1="0" x2="36" y2="42" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={colors.navy} />
            <stop offset="100%" stopColor={colors.navyDark} />
          </linearGradient>
          <linearGradient id="g2" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={colors.aqua} />
            <stop offset="100%" stopColor={colors.teal} />
          </linearGradient>
        </defs>
        <path
          d="M18 1.5c-4.9 2.2-9.8 3.2-14.7 3.7a2.2 2.2 0 0 0-2 2.2v14.5c0 4.7 2 9.2 5.6 12.3l8.3 7.2c1.7 1.5 4.3 1.5 6 0l8.3-7.2c3.6-3.1 5.6-7.6 5.6-12.3V7.4a2.2 2.2 0 0 0-2-2.2C27.8 4.7 23 3.7 18 1.5Z"
          fill="url(#g1)"
        />
        {/* Subtle card chip */}
        <rect x="6.5" y="9" rx="1.2" ry="1.2" width="6.5" height="4.4" fill="#E7F2F6" opacity="0.95" />
        {/* Stylized S ribbon */}
        <path
          d="M9.5 26.7c0 0 4.6 5.3 9.8 2.9c3.1-1.4 5-4.3 6.6-8.2c0.5-1.2-0.5-2.5-1.8-2.3c-2.7 0.3-5.5 0.4-7.7-0.8c-1.7-0.9-2.6-2.2-2.3-3.9c0.3-1.6 1.7-3.1 3.6-3.8c3-1.1 5.9 0.2 8.1 1.5"
          stroke="url(#g2)"
          strokeWidth="3.6"
          strokeLinecap="round"
          fill="none"
        />
        {/* Pill shard (echo of the previous icon) */}
        <path d="M10.2 28.2c2.8 2.6 6.3 3 9.9 1.4" stroke="url(#g2)" strokeWidth="3.6" strokeLinecap="round" />
      </svg>
      {withWordmark && (
        <div className="-mb-1">
          {/* Wordmark uses two distinct type styles; we'll emulate here with Tailwind */}
          <div className="leading-none">
            <span className="align-baseline text-2xl md:text-3xl font-medium italic" style={{ color: colors.navy }}>
              Script
            </span>
            <span className="align-baseline text-2xl md:text-3xl font-semibold ml-1" style={{ color: colors.navy }}>
              Safe
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

function Container({ children, className = "" }) {
  return <div className={`mx-auto max-w-7xl px-4 md:px-6 ${className}`}>{children}</div>;
}

function Nav() {
  const linkBase = "px-3 py-2 rounded-xl hover:bg-white/40 hover:backdrop-blur transition";
  const active = ({ isActive }) => (isActive ? "bg-white/60" : "");
  return (
    <header className="sticky top-0 z-40 border-b border-white/30 bg-gradient-to-r from-white/60 to-white/40 backdrop-blur-md">
      <Container className="flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <Logo size={32} withWordmark={false} />
          <span className="sr-only">ScriptSafe</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1 text-slate-800">
          <NavLink to="/" className={({ isActive }) => `${linkBase} ${active({ isActive })}`}>Home</NavLink>
          <NavLink to="/accreditation" className={({ isActive }) => `${linkBase} ${active({ isActive })}`}>Accreditation</NavLink>
          <NavLink to="/faq" className={({ isActive }) => `${linkBase} ${active({ isActive })}`}>FAQ</NavLink>
          <NavLink to="/who-we-are" className={({ isActive }) => `${linkBase} ${active({ isActive })}`}>Who We Are</NavLink>
          <NavLink to="/solutions" className={({ isActive }) => `${linkBase} ${active({ isActive })}`}>Solutions</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `${linkBase} ${active({ isActive })}`}>Contact</NavLink>
        </nav>
        <Link to="/contact" className="hidden md:inline-flex items-center rounded-2xl px-4 py-2 bg-[#0C3455] text-white font-medium shadow-sm hover:shadow transition">
          Get Started
        </Link>
      </Container>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0C3455] via-[#114870] to-[#11B5C1] opacity-10" />
      <Container className="py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-3 mb-6">
            <Logo size={56} withWordmark={false} />
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">ScriptSafe</h1>
          </div>
          <p className="text-lg md:text-xl text-slate-700 max-w-xl">
            Secure, modern accreditation & payments guidance for digital pharmacies. Build patient trust, protect data, and streamline compliance.
          </p>
          <div className="mt-8 flex gap-3">
            <Link to="/accreditation" className="rounded-2xl px-5 py-3 bg-[#0C3455] text-white font-semibold shadow hover:shadow-md">Accreditation</Link>
            <Link to="/solutions" className="rounded-2xl px-5 py-3 bg-white text-[#0C3455] font-semibold border border-[#0C3455]/20 hover:bg-white/70">Solutions</Link>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
          <div className="rounded-3xl bg-white/80 p-6 shadow-sm border border-slate-200">
            <h3 className="text-slate-900 font-semibold mb-3">Fast Wins</h3>
            <ul className="grid grid-cols-1 gap-2 text-slate-700">
              <li>• NABP Digital Pharmacy readiness checklist</li>
              <li>• PCI & HIPAA alignment baseline</li>
              <li>• Gateway & payment flow review</li>
              <li>• Patient privacy and refund policies</li>
            </ul>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

function HomePage() {
  return (
    <main>
      <Hero />
      <Container className="py-16 grid md:grid-cols-3 gap-6">
        {[
          { title: "Accreditation", desc: "Prepare for NABP Digital Pharmacy with clear guidance, templates, and evidence collection.", to: "/accreditation" },
          { title: "Payments & Security", desc: "Harden payment flows, reduce fees, and improve chargeback handling.", to: "/solutions" },
          { title: "Support", desc: "White-glove onboarding and quick answers to compliance questions.", to: "/contact" },
        ].map((c) => (
          <Link key={c.title} to={c.to} className="group rounded-3xl border border-slate-200 p-6 bg-white hover:shadow-md transition">
            <h4 className="text-xl font-semibold text-slate-900">{c.title}</h4>
            <p className="text-slate-600 mt-2">{c.desc}</p>
            <div className="mt-4 text-[#0C3455] font-semibold group-hover:underline">Learn more →</div>
          </Link>
        ))}
      </Container>
      <footer className="py-10 border-t border-slate-200 mt-10">
        <Container className="flex flex-col md:flex-row items-center justify-between gap-4 text-slate-600">
          <div className="flex items-center gap-2">
            <Logo size={22} withWordmark={false} />
            <span>© {new Date().getFullYear()} ScriptSafe</span>
          </div>
          <div className="text-sm">Built with care for pharmacies and patients.</div>
        </Container>
      </footer>
    </main>
  );
}

function AccreditationPage() {
  return (
    <Container className="py-14">
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Digital Pharmacy Accreditation</h1>
      <p className="text-slate-700 max-w-3xl">
        We help pharmacies prepare for <a className="text-[#0C3455] underline" href="https://nabp.pharmacy/programs/accreditations/digital-pharmacy/" target="_blank" rel="noreferrer">NABP Digital Pharmacy</a> by aligning your website, operations, privacy, and payment processes with the latest standards. Get a readiness checklist, policy templates, and evidence collection guidance.
      </p>
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <div className="rounded-2xl border border-slate-200 p-6 bg-white">
          <h3 className="font-semibold text-slate-900 mb-2">What we cover</h3>
          <ul className="space-y-1 text-slate-700 list-disc ml-5">
            <li>Ownership & licensure disclosures</li>
            <li>Prescribing, counseling, and pharmacist availability</li>
            <li>Website content, accessibility, and UX clarity</li>
            <li>HIPAA, PCI, refund, shipping, and privacy policies</li>
            <li>Payment gateway & reconciliation workflows</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-200 p-6 bg-white">
          <h3 className="font-semibold text-slate-900 mb-2">Deliverables</h3>
          <ul className="space-y-1 text-slate-700 list-disc ml-5">
            <li>Readiness report with gaps & fixes</li>
            <li>Policy & page copy templates</li>
            <li>Evidence folder structure & examples</li>
            <li>Final submission assistance</li>
          </ul>
        </div>
      </div>
      <div className="mt-8">
        <Link to="/contact" className="rounded-2xl px-5 py-3 bg-[#0C3455] text-white font-semibold shadow hover:shadow-md">Request a consult</Link>
      </div>
    </Container>
  );
}

function FAQItem({ q, a }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white">
      <button onClick={() => setOpen(!open)} className="w-full text-left px-5 py-4 font-semibold text-slate-900">
        {q}
      </button>
      {open && <div className="px-5 pb-5 text-slate-700">{a}</div>}
    </div>
  );
}

function FAQPage() {
  const items = [
    { q: "What is ScriptSafe?", a: "A consultancy helping digital pharmacies with accreditation, payment security, and CX." },
    { q: "Do you assist with policy writing?", a: "Yes—privacy, refunds, HIPAA notices, and site content templates." },
    { q: "Can you review our payment gateway setup?", a: "We evaluate flows, fees, PCI alignment, and chargeback readiness." },
  ];
  return (
    <Container className="py-14">
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h1>
      <div className="grid gap-3">
        {items.map((it) => (
          <FAQItem key={it.q} {...it} />
        ))}
      </div>
    </Container>
  );
}

function TeamCard({ name, role, bio }) {
  return (
    <div className="rounded-2xl border border-slate-200 p-5 bg-white">
      <div className="flex items-center gap-3 mb-2">
        <Logo size={18} withWordmark={false} />
        <div className="font-semibold text-slate-900">{name}</div>
      </div>
      <div className="text-sm text-slate-600">{role}</div>
      <p className="text-slate-700 mt-3 text-sm">{bio}</p>
    </div>
  );
}

function WhoWeArePage() {
  return (
    <Container className="py-14">
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Who We Are</h1>
      <p className="text-slate-700 max-w-3xl mb-8">
        We blend pharmacy operations, payments, and compliance expertise. Our team has guided independent and enterprise pharmacies through complex accreditation and technology changes.
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        <TeamCard name="Your Name" role="Founder" bio="Payments & pharmacy tech specialist; led fee optimization and compliance projects across 100+ locations." />
        <TeamCard name="Advisor" role="Clinical Lead" bio="Licensed pharmacist advising on best practices for counseling, dispensing, and online operations." />
        <TeamCard name="Partner" role="Security & PCI" bio="Security engineer focusing on PCI-DSS and HIPAA controls for healthcare merchants." />
      </div>
    </Container>
  );
}

function SolutionsPage() {
  return (
    <Container className="py-14">
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Solutions</h1>
      <p className="text-slate-700 max-w-3xl mb-6">From accreditation prep to gateway optimization, ScriptSafe provides clear steps and measurable outcomes.</p>
      <div className="grid md:grid-cols-3 gap-6">
        {["Accreditation Readiness", "Payments Review", "Policy & Site Copy"].map((t) => (
          <div key={t} className="rounded-2xl border border-slate-200 p-6 bg-white">
            <h3 className="font-semibold text-slate-900 mb-2">{t}</h3>
            <p className="text-slate-700 text-sm">Short description and example deliverables go here.</p>
          </div>
        ))}
      </div>
    </Container>
  );
}

function ContactPage() {
  return (
    <Container className="py-14">
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Contact</h1>
      <p className="text-slate-700 max-w-2xl mb-6">Tell us about your pharmacy and goals. We’ll follow up with a short plan and next steps.</p>
      <form className="grid md:grid-cols-2 gap-4 rounded-2xl border border-slate-200 p-6 bg-white">
        <input placeholder="Name" className="border rounded-xl px-3 py-2" />
        <input placeholder="Email" className="border rounded-xl px-3 py-2" />
        <input placeholder="Organization" className="border rounded-xl px-3 py-2 md:col-span-2" />
        <textarea placeholder="What do you need help with?" rows={5} className="border rounded-xl px-3 py-2 md:col-span-2" />
        <button type="button" className="rounded-2xl px-5 py-3 bg-[#0C3455] text-white font-semibold shadow hover:shadow-md md:col-span-2">Send</button>
      </form>
      <p className="text-xs text-slate-500 mt-3">Form is static for now—hook into your email or CRM later.</p>
    </Container>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[var(--bg,#F7FAFC)]">
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/accreditation" element={<AccreditationPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/who-we-are" element={<WhoWeArePage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

const root = createRoot(document.getElementById("root"));
root.render(<App />);
