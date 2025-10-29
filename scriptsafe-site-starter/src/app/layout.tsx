export const metadata = {
  title: "ScriptSafe — Pharmacy Digital Payments Accreditation",
  description: "Faster. Trusted. Affordable.",
};

import "./styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-slate-50 text-slate-900">
        {children}
      </body>
    </html>
  );
}
