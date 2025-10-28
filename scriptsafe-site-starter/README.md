# ScriptSafe starter (Vite + React + Tailwind)

## Quick start
1) Install Node.js LTS (>=18). Check with: `node -v` `npm -v`
2) Unzip this project and `cd scriptsafe-site`
3) Install deps: `npm install`
4) Start dev server: `npm run dev` → open the local URL it prints
5) Build for production: `npm run build` (outputs to `dist/`)

## Deploy options
- **Netlify**: drag the repo or connect Git; build command `npm run build` and publish `dist/`
- **Vercel**: import the repo; framework = Vite; build `npm run build`; output `dist`
- **Cloudflare Pages**: framework preset Vite; build `npm run build`; output `dist`

## Fonts (TT Gentlemens & TT Fellows)
Purchase and download from the foundry. Add font files to `public/fonts/` and include in `index.css`:

```css
@font-face {
  font-family: 'TT Gentlemens';
  src: url('/fonts/TTGentlemens-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'TT Fellows';
  src: url('/fonts/TTFellows-Regular.woff2') format('woff2');
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}
/* Example usage */
.brand-script { font-family: 'TT Gentlemens', system-ui, sans-serif; }
.brand-safe { font-family: 'TT Fellows', system-ui, sans-serif; }
```

Then replace the two spans in the Nav with classes `brand-script` and `brand-safe`.

## Customize pages
Edit `src/App.jsx` to change copy and sections. Page A/B are full-page placeholders—rename as needed.
