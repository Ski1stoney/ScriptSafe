export const metadata = {
  title: 'ScriptSafe — Pharmacy Digital Payments Accreditation',
  description: 'Faster. Trusted. Affordable.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
