# JustFix Auto Electrix — Website (Static, SEO-Ready)

Plain HTML/CSS/JS — no build step. Every page is a real, separately-crawlable
file, which is the most reliable way for a small-business site to get
indexed by Google.

**Live domain:** `https://www.justfixautoelectrix.co.za`

## Fixes in this update (favicon not showing in Google / AI Overview not using the site)

The root cause: every canonical URL, Open Graph tag, and structured-data
`url`/`logo` field in the previous package pointed at `www.justfix.co.za` —
which isn't your domain. Your real, live site is
`www.justfixautoelectrix.co.za`. That mismatch is exactly the kind of thing
that stops Google from confidently attaching your favicon/logo to search
results and from trusting your own site as the source of truth (which is
likely why the AI Overview fell back to your Facebook page instead).

Fixed in this version:
- Every canonical link, `og:url`, `og:image`, sitemap URL, and JSON-LD `url`
  now correctly points at `www.justfixautoelectrix.co.za`.
- Added a dedicated `Organization` structured-data block with a square
  `logo` field (`assets/logo.jpg`, 1254×1254px) — this is Google's
  documented way of associating a logo with your business in Search,
  separate from the general business listing data.
- Fixed a real bug that was likely hurting indexing: sections below the
  fold used a scroll-triggered fade-in animation that only became visible
  once a *person* scrolled to them. Google's renderer doesn't scroll during
  its snapshot, so that content — including the "Our Services" heading
  visible faded-out in your screenshot — was being captured as invisible
  (`opacity: 0`). Fixed with a safety-net timeout plus a `<noscript>`
  fallback, so all content is guaranteed visible regardless of whether or
  how a renderer scrolls.

### What to do next (these aren't code fixes — they're on Google's side)

- **Favicon in search results** can take days to weeks to update after a
  site changes, even once everything is correct. There's no way to force
  this faster than Google's own recrawl schedule.
- **Verify the correct domain in Google Search Console** (`www.justfixautoelectrix.co.za`,
  not any other variant) and submit `https://www.justfixautoelectrix.co.za/sitemap.xml`
  there. Use "Request Indexing" on the homepage to speed up the first crawl.
- **AI Overview / rich local results** depend heavily on your **Google
  Business Profile**, not just the website. If you haven't already, claim
  and verify a Google Business Profile for JustFix Auto Electrix with this
  exact name, address and phone number — this is usually what actually
  drives AI Overview and local-pack visibility, more than on-site SEO alone.
- Make sure the NAP (name, address, phone) on your Google Business Profile
  matches this site exactly: "74 Industrial, Shayandima, Next to Ven Oil,
  Thohoyandou" and 015 964 2319 — mismatches between the two are a known
  cause of Google not fully trusting either source.

## Deploying

Upload this whole folder (keeping the `assets/` subfolder alongside the
`.html` files) to your host at the **root** of `www.justfixautoelectrix.co.za`,
so that:

- `https://www.justfixautoelectrix.co.za/` serves `index.html`
- `https://www.justfixautoelectrix.co.za/services.html` serves `services.html`
- `https://www.justfixautoelectrix.co.za/assets/logo.jpg` serves the logo, etc.

If your host uses a different structure (e.g. everything must go in
`public_html/`), just keep the same relative layout inside that folder.

## What's set up for SEO

- **Unique `<title>` and meta description per page**, written around real
  search terms (e.g. "computer box", "ECU", "key coding", "Thohoyandou").
- **`<link rel="canonical">`** on every page, pointing at
  `www.justfixautoelectrix.co.za`.
- **`robots.txt`** and **`sitemap.xml`** at the site root — once the site is
  live, submit `https://www.justfixautoelectrix.co.za/sitemap.xml` in Google
  Search Console (Search Console → Sitemaps) so Google finds every page
  quickly.
- **LocalBusiness (`AutomotiveBusiness`) structured data** on every page with
  your real name, address, phone, email and hours, plus a separate
  **`Organization`** block with a square `logo` — this is what powers the
  Google Maps/local-pack style result and logo attribution.
- **Breadcrumb structured data** on every page except the homepage.
- **Open Graph + Twitter card tags** on every page (so links shared on
  WhatsApp/Facebook/etc. show your logo, title and description properly).
- **Real favicon** generated from your logo (`assets/favicon.ico` +
  PNG/apple-touch-icon variants) — no more generic browser-tab icon.
- Descriptive `alt` text on every image (also an SEO signal, and required
  for accessibility).
- `loading="lazy"` on below-the-fold images for faster page load (page speed
  is a ranking factor).
- All content is guaranteed visible to crawlers regardless of scroll
  position (see the reveal-animation fix above).

## Content changes from the previous draft

- Real logo (`assets/logo.jpg` / `logo2.jpg`) used in the nav and footer,
  replacing the placeholder text mark.
- Real, higher-resolution photos of the workshop, forecourt and the
  Tracker 24/7 fleet vehicle on the Home, About, Fleet and Gallery pages.
- Service catalogue matches your actual workshop signage exactly
  (Automotive Electrical Services, Key & ECU Services, Lighting & Electrical
  Services, Key Services, Fleet) — nothing invented.
- Contact details synced everywhere: `justfix@vodamail.co.za`,
  `www.justfixautoelectrix.co.za`, 015 964 2319 / 082 672 1865, 74 Industrial,
  Shayandima — next to Ven Oil.
- The workshop signage graphic itself is featured on the Services page.

## Still to do

- Update `sitemap.xml`'s `<lastmod>` dates whenever you make real content
  changes.
- The enquiry form still falls back to a pre-filled `mailto:` link rather
  than sending silently — see the note inside `script.js` (search for
  `emailEndpointConfigured`) for how to connect a real email provider.
