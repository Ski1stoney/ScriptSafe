echo "export const metadata = { title: 'ScriptSafe — Pharmacy Digital Payments Accreditation', description: 'Faster. Trusted. Affordable.' };" >> scriptsafe-site-starter/src/app/layout.tsx

echo "export default function RootLayout({ children }: { children: React.ReactNode }) { return (<html lang='en'><body>{children}</body></html>); }" >> scriptsafe-site-starter/src/app/layout.tsx

> scriptsafe-site-starter/src/app/page.tsx

echo "export default function Home(){return (<main style={{padding:32,fontFamily:'ui-sans-serif,system-ui'}}><h1 style={{fontSize:36,fontWeight:800,color:'#1e40af'}}>Pharmacy Digital Payments Accreditation</h1><p style={{marginTop:8,fontSize:18,color:'#334155'}}>Faster. Trusted. Affordable.</p></main>)}" >> scriptsafe-site-starter/src/app/page.tsx

> scriptsafe-site-starter/src/app/styles/globals.css

echo "/* minimal globals */ html,body{height:100%}" >> scriptsafe-site-starter/src/app/styles/globals.css

git add scriptsafe-site-starter/src/app/layout.tsx scriptsafe-site-starter/src/app/page.tsx scriptsafe-site-starter/src/app/styles/globals.css

git commit -m "Add src/app root layout and page for Next build"

git push

cd ~/Desktop/ScriptSafe

