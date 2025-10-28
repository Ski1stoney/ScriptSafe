import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, ExternalLink } from "lucide-react";

// ---- Lightweight UI ----
const Button = ({ children, className = "", variant, ...props }) => (
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

const Card = ({ className = "", children }) => (
  <div className={`rounded-2xl border bg-white ${className}`}>{children}</div>
);
const CardContent = ({ className = "", children }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);

// ---- Inline Logo ----
const Logo = ({ className = "h-10 w-auto" }) => (
  <img
    className={`${className}`}
    alt="ScriptSafe logo"
    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAIAAADwf7zUAADe0WNhQlgAAN7RanVtYgAAAB5qdW1kYz..." // shortened for brevity
  />
);

// ---- Utility ----
const Section = ({ id, children, className = "" }) => (
  <section
    id={id}
    className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 ${className}`}
  >
    {children}
  </section>
);

const NavButton = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`px-3 py-2 rounded-xl text-sm font-medium transition-all ${
      active ? "bg-blue-700 text-white shadow" : "hover:bg-blue-100"
    }`}
  >
    {label}
  </button>
);

const Tagline = ({ className = "" }) => (
  <div
    className={`text-[11px] sm:text-xs font-medium tracking-wide text-blue-700/80 ${className}`}
  >
    Pharmacy Digital Payments Accreditation
  </div>
);

// ---- Gradient Overlay ----
const GradientImage = ({ src, alt, className = "" }) => (
  <div className={`relative overflow-hidden rounded-3xl ${className}`}>
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover filter brightness-90"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-blue-700/20 to-transparent" />
  </div>
);

export default function ScriptSafeSite() {
  const [page, setPage] = useState("Home");
  const nav = ["Home", "Accreditation", "FAQ", "Who We Are", "Resources", "Contact"];

  const PageBody = useMemo(() => {
    switch (page) {
      case "Home":
        return <Home />;
      case "Accreditation":
        return <AccreditationV2 />;
      case "FAQ":
        return <FAQV2 />;
      case "Who We Are":
        return <WhoWeAre />;
      case "Resources":
        return <Resources />;
      case "Contact":
        return <Contact />;
      default:
        return <Home />;
    }
  }, [page]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-slate-100 text-slate-900">
      <header className="border-b bg-white/90 backdrop-blur sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Logo className="h-10 w-auto" />
            <div className="leading-tight hidden sm:block">
              <div className="text-lg sm:text-xl font-extrabold text-blue-800">
                ScriptSafe
              </div>
              <Tagline />
            </div>
          </div>
          <nav className="hidden md:flex gap-2">
            {nav.map((n) => (
              <NavButton
                key={n}
                label={n}
                active={page === n}
                onClick={() => setPage(n)}
              />
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button
              className="rounded-xl bg-blue-700 hover:bg-blue-800 text-white"
              onClick={() => setPage("Contact")}
            >
              Get Accredited
            </Button>
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
                <div className="text-lg font-extrabold text-blue-800 leading-tight">
                  ScriptSafe
                </div>
                <Tagline />
                <p className="text-sm text-slate-600 max-w-xl mt-2">
                  Digital accreditation for pharmacy merchants to accept online card
                  payments. Fast, fair, and recognized by acquiring banks and payment
                  gateways.
                </p>
                <p className="text-xs text-slate-500 mt-3">
                  © 2025 ScriptSafe Accreditation Services. Independent accrediting
                  organization. Not affiliated with VISA, NABP, or LegitScript.
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                className="rounded-xl"
                onClick={() => setPage("Resources")}
              >
                Resources
              </Button>
              <Button
                className="rounded-xl bg-blue-700 hover:bg-blue-800 text-white"
                onClick={() => setPage("Contact")}
              >
                Start Now
              </Button>
            </div>
          </div>
        </Section>
      </footer>
    </div>
  );
}

function Home() {
  return (
    <main>
      <Section id="hero" className="pt-20 pb-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Logo className="h-24 mx-auto mb-3" />
          <Tagline className="mx-auto" />
          <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold text-blue-800 tracking-tight leading-tight">
            Pharmacy Digital Payments Accreditation
            <br />
            <span className="text-blue-600">Faster. Trusted. Affordable.</span>
          </h1>
          <p className="mt-4 text-lg text-slate-700 leading-relaxed max-w-3xl mx-auto">
            ScriptSafe provides official accreditation enabling pharmacies to accept
            online payments securely. Trusted by acquiring banks, recognized by
            payment gateways, and approved in under two weeks.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Button className="rounded-xl bg-blue-700 hover:bg-blue-800 text-white">
              Begin Application
            </Button>
            <Button
              variant="outline"
              className="rounded-xl border-blue-600 text-blue-700"
            >
              Learn More
            </Button>
          </div>
        </motion.div>
      </Section>

      <Section id="visuals" className="pt-4">
        <div className="grid md:grid-cols-3 gap-6">
          {[{
            src: "https://source.unsplash.com/1200x800/?pharmacist,lab-coat",
            title: "Licensure Verification",
            blurb:
              "State and federal credentials, PIC verification, and scope of practice.",
          }, {
            src: "https://source.unsplash.com/1200x800/?pills,pharmacy",
            title: "Clinical & Product Integrity",
            blurb:
              "Lawful catalog, truthful claims, and safe sourcing & fulfillment.",
          }, {
            src: "https://source.unsplash.com/1200x800/?pharmacy,counter",
            title: "Checkout & Risk Controls",
            blurb:
              "AVS/CVV enforcement, refunds, chargebacks, and data protection.",
          }].map((img, i) => (
            <div key={i} className="relative">
              <GradientImage
                src={img.src}
                alt={img.title}
                className="h-52 w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 p-5 text-white">
                <div className="font-semibold text-lg drop-shadow-lg">
                  {img.title}
                </div>
                <p className="text-sm opacity-90">{img.blurb}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}

// --- Accreditation V2 (full page) ---
function AccreditationV2() {
  return (
    <main>
      <Section id="accred-hero" className="pt-12 pb-4">
        <div className="rounded-3xl overflow-hidden border shadow">
          <GradientImage
            src="https://source.unsplash.com/1600x500/?pharmacy,accreditation"
            alt="Accreditation overview"
            className="h-56"
          />
        </div>
        <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-blue-800">
          Accreditation Standards & Process
        </h2>
        <p className="mt-3 text-slate-700 max-w-3xl">
          ScriptSafe recognizes pharmacy merchants that consistently meet defined
          standards of quality, safety, and performance through an impartial
          evaluation. Our framework is aligned to digital pharmacy practice and
          card‑not‑present payment risk expectations.
        </p>
      </Section>

      <Section id="why" className="pt-0">
        <h3 className="text-xl font-bold">Why Accreditation Matters</h3>
        <div className="grid md:grid-cols-3 gap-6 mt-4">
          {[{
            title: "Patient & Product Safety",
            text: "Active licensure, lawful catalog, and safe sourcing/fulfillment across every jurisdiction served.",
          },{
            title: "Transparent Operations",
            text: "Clear disclosures, truthful claims, and reliable website content for patients and prescribers.",
          },{
            title: "Payments Readiness",
            text: "Checkout and policy controls (AVS/CVV, refunds, chargebacks, data protection) that help acquirers underwrite faster.",
          }].map((f,i)=> (
            <Card key={i} className="rounded-2xl"><CardContent className="p-6">
              <div className="font-semibold text-blue-800">{f.title}</div>
              <p className="text-sm text-slate-700 mt-2">{f.text}</p>
            </CardContent></Card>
          ))}
        </div>
      </Section>

      <Section id="eligibility" className="pt-0">
        <h3 className="text-xl font-bold">Eligibility & Pre‑Check</h3>
        <ul className="mt-3 text-slate-700 text-sm space-y-2 list-disc pl-6 max-w-3xl">
          <li>Current, valid pharmacy licenses in all states where you conduct business; designated pharmacist‑in‑charge (PIC).</li>
          <li>Digital practice elements (eg, online Rx intake/refills, patient or prescriber portals, counselling/communication).</li>
          <li>Lawful product set and compliant marketing; appropriate handling of cross‑border shipments and age‑restricted items.</li>
          <li>Prepared to accept online card payments with documented checkout, refund, and chargeback policies.</li>
        </ul>
      </Section>

      <Section id="standards" className="pt-0">
        <h3 className="text-xl font-bold">Accreditation Framework – Core Domains</h3>
        <div className="grid lg:grid-cols-3 gap-6 mt-4">
          <Card className="rounded-2xl"><CardContent className="p-6">
            <div className="font-semibold text-blue-800">Licensure & Governance</div>
            <ul className="mt-2 text-sm text-slate-700 space-y-1 list-disc pl-5">
              <li>Active federal/state licensure; PIC oversight of online operations</li>
              <li>Scope of practice documented; affiliates and shared services disclosed</li>
              <li>Policies & procedures reviewed and kept current</li>
            </ul>
          </CardContent></Card>
          <Card className="rounded-2xl"><CardContent className="p-6">
            <div className="font-semibold text-blue-800">Product & Marketing Integrity</div>
            <ul className="mt-2 text-sm text-slate-700 space-y-1 list-disc pl-5">
              <li>Lawful catalog; prescription verification where required</li>
              <li>Truthful, non‑misleading claims; SEO/content controls</li>
              <li>DSCSA‑aligned sourcing/records; storage & shipping safeguards</li>
            </ul>
          </CardContent></Card>
          <Card className="rounded-2xl"><CardContent className="p-6">
            <div className="font-semibold text-blue-800">E‑Commerce & Payments</div>
            <ul className="mt-2 text-sm text-slate-700 space-y-1 list-disc pl-5">
              <li>AVS/CVV, clear descriptors, refunds/chargebacks policy</li>
              <li>Data protection & patient privacy practices</li>
              <li>Website/domain integrity and risk monitoring</li>
            </ul>
          </CardContent></Card>
        </div>
      </Section>

      <Section id="process" className="pt-0">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h3 className="text-xl font-bold">Process & Timelines</h3>
            <ol className="mt-3 space-y-3 text-slate-700 text-sm">
              <li><b>Application (Day 0):</b> Business info, licenses, PIC, domains, product scope, fulfillment & policies.</li>
              <li><b>Review (Days 1–7):</b> Parallel checks across licensure, operations, website content, and payment flow.</li>
              <li><b>Resolution (Days 8–10):</b> Address any gaps; brief call as needed.</li>
              <li><b>Decision & Listing (Day 10+):</b> Certificate, ScriptSafe ID, and optional public listing.</li>
            </ol>
            <p className="mt-3 text-xs text-slate-500">Timelines assume documentation‑ready applicants and responsive stakeholders. Complex models may require additional time.</p>
          </div>
          <div>
            <Card className="rounded-2xl"><CardContent className="p-6">
              <div className="font-semibold">Deliverables</div>
              <ul className="mt-2 text-sm text-slate-700 space-y-1 list-disc pl-5">
                <li>Accreditation certificate & ScriptSafe ID</li>
                <li>Public listing (optional)</li>
                <li>Acquirer/gateway packet summarizing our review</li>
              </ul>
              <div className="mt-4 flex gap-2">
                <Button className="rounded-xl">Start application</Button>
                <Button variant="outline" className="rounded-xl">Download standards (draft)</Button>
              </div>
            </CardContent></Card>
          </div>
        </div>
      </Section>

      <Section id="renewal" className="pt-0">
        <h3 className="text-xl font-bold">Renewal & Ongoing Monitoring</h3>
        <p className="mt-2 text-slate-700 text-sm max-w-3xl">
          Accreditation is issued for a multi‑year term with light‑touch annual reviews. We perform automated license checks,
          website scans, and request periodic attestations. Material changes to your model, product set, or fulfillment must be disclosed promptly.
        </p>
      </Section>

      <Section id="cta" className="pt-2">
        <div className="rounded-3xl border bg-gradient-to-tr from-blue-50 to-blue-100 p-8 md:p-12 text-center shadow">
          <h3 className="text-2xl font-bold text-blue-800">Ready to apply?</h3>
          <p className="mt-2 text-slate-700 max-w-2xl mx-auto">We’ll guide you from pre‑check to decision. Most applicants complete documentation in one sitting.</p>
          <div className="mt-6 flex justify-center gap-3">
            <Button className="rounded-xl">Begin application</Button>
            <Button variant="outline" className="rounded-xl">Talk to an expert</Button>
          </div>
        </div>
      </Section>
    </main>
  );
}

// --- FAQ V2 (full page) ---
function FAQV2() {
  const faqs = [
    {
      q: "What is Pharmacy Digital Payments Accreditation?",
      a: (
        <p>
          ScriptSafe accreditation confirms that a licensed pharmacy meets published
          standards for product safety, lawful operations, and secure e‑commerce
          practices required to accept card‑not‑present payments online. It includes
          an impartial initial evaluation and ongoing monitoring.
        </p>
      ),
    },
    {
      q: "Who is eligible to apply?",
      a: (
        <ul className="list-disc pl-5 space-y-1">
          <li>U.S. pharmacies with current, valid licenses in all states where they operate</li>
          <li>Clear scope of practice (retail/mail order, specialty, compounding, telehealth + dispensing, or OTC marketplace)</li>
          <li>A website that supports digital pharmacy functions (e.g., Rx intake/refills, patient or prescriber portals)</li>
          <li>Prepared policies for checkout, refunds, chargebacks, privacy, and data protection</li>
        </ul>
      ),
    },
    {
      q: "How long does the process take?",
      a: (
        <p>
          Our goal is approximately 10 business days for documentation‑ready applicants.
          Complex models or remediation items may extend the timeline.
        </p>
      ),
    },
    {
      q: "What does the review cover?",
      a: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Licensure & governance (active licenses, pharmacist‑in‑charge, disclosures)</li>
          <li>Product & marketing integrity (lawful catalog, truthful claims, shipping & age restrictions)</li>
          <li>E‑commerce & payments (AVS/CVV, clear descriptors, refund/chargeback policy, data handling)</li>
          <li>Website/domain integrity (content, redirects, security signals)</li>
        </ul>
      ),
    },
    {
      q: "Do you recognize telehealth‑first models?",
      a: (
        <p>
          Yes—where prescribing, dispensing, and fulfillment comply with applicable
          federal and state laws and align with ScriptSafe standards.
        </p>
      ),
    },
    {
      q: "Is the accreditation recognized by card programs or processors?",
      a: (
        <p>
          ScriptSafe is designed for payments enablement. Your accreditation status
          and documentation packet can be shared with acquirers and gateways to
          support underwriting decisions.
        </p>
      ),
    },
    {
      q: "What happens if issues are found?",
      a: (
        <p>
          We provide a clear remediation list. Most issues involve website content,
          missing policies, or catalog restrictions. Once corrected, we continue the
          review without resetting your place in the queue.
        </p>
      ),
    },
    {
      q: "How long is accreditation valid?",
      a: (
        <p>
          Accreditation is granted for a multi‑year term with light‑touch annual
          reviews and continuous monitoring. Significant changes to your model or
          product set should be disclosed promptly.
        </p>
      ),
    },
    {
      q: "What ongoing monitoring is required?",
      a: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Automated license checks and website scans</li>
          <li>Periodic attestations for inventory and key policies</li>
          <li>Timely notice of material changes (ownership, domains, fulfillment, catalog)</li>
        </ul>
      ),
    },
    {
      q: "What documents should I prepare before applying?",
      a: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Active licenses and pharmacist‑in‑charge details</li>
          <li>Website URL(s), domain owner, and hosting info</li>
          <li>Refund/chargeback policy, privacy policy, and data‑handling overview</li>
          <li>Product scope (Rx vs. OTC), fulfillment & shipping procedures</li>
        </ul>
      ),
    },
  ];

  return (
    <main>
      <Section id="faq-hero" className="pt-12 pb-4">
        <div className="rounded-3xl overflow-hidden border shadow">
          <GradientImage
            src="https://source.unsplash.com/1600x500/?pharmacist,faq"
            alt="FAQ banner"
            className="h-56"
          />
        </div>
        <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-blue-800">Frequently Asked Questions</h2>
        <p className="mt-3 text-slate-700 max-w-3xl">
          Answers to common questions about ScriptSafe’s Pharmacy Digital Payments
          Accreditation—covering eligibility, timelines, standards, and ongoing
          compliance.
        </p>
      </Section>

      <Section id="faq-list" className="pt-0">
        <div className="grid md:grid-cols-2 gap-4">
          {faqs.map((item, idx) => (
            <details key={idx} className="group rounded-2xl border bg-white p-5 shadow-sm">
              <summary className="list-none cursor-pointer select-none flex items-center justify-between">
                <span className="font-medium text-slate-800 pr-4">{item.q}</span>
                <ChevronRight className="shrink-0 transition-transform group-open:rotate-90" />
              </summary>
              <div className="pt-3 text-slate-700 leading-relaxed text-sm">{item.a}</div>
            </details>
          ))}
        </div>
      </Section>

      <Section id="faq-cta" className="pt-2">
        <div className="rounded-3xl border bg-gradient-to-tr from-blue-50 to-blue-100 p-8 md:p-12 text-center shadow">
          <h3 className="text-2xl font-bold text-blue-800">Still have questions?</h3>
          <p className="mt-2 text-slate-700 max-w-2xl mx-auto">Reach out and we’ll tailor the accreditation path to your model.</p>
          <div className="mt-6 flex justify-center gap-3">
            <Button className="rounded-xl">Talk to an expert</Button>
            <Button variant="outline" className="rounded-xl">Download standards (draft)</Button>
          </div>
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
          ScriptSafe was founded by experts in pharmacy compliance, risk management, and payment technology. Our mission is to make digital pharmacy accreditation faster, more transparent, and more accessible—so legitimate pharmacies can thrive online.
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
            <form className="grid gap-4">
              <input className="rounded-xl border px-3 py-2" placeholder="Pharmacy name" />
              <input className="rounded-xl border px-3 py-2" placeholder="Website" />
              <input className="rounded-xl border px-3 py-2" placeholder="Primary contact" />
              <input className="rounded-xl border px-3 py-2" placeholder="Email" />
              <textarea className="rounded-xl border px-3 py-2 min-h-[120px]" placeholder="Tell us about your pharmacy and goals." />
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
