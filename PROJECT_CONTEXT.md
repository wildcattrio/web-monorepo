# WildCat Trio  Web Monorepo Context (Live)

## Repos and Paths
- Repo: wildcattrio/web-monorepo (GitHub)
- Sites (static hosting via Firebase Hosting):
  - Corporate: apps/wildcattrio-site/public/index.html
  - Elevate Quotes: apps/elevatequotes-site/public/index.html
  - CalSmart AI: apps/calsmartai-site/public/index.html

## Custom Domains
- Corporate: wildcattrio.com (with www  apex redirect)
- Products:
  - Elevate Quotes: elevatequotes.wildcattrio.com
  - CalSmart AI: calsmartai.wildcattrio.com

## Firebase Hosting Projects
- wildcattrio-web-prod  wildcattrio.com
- elevatequotes-web-prod  elevatequotes.wildcattrio.com
- calsmartai-web-prod  calsmartai.wildcattrio.com

## CI/CD
- GitHub Actions workflow: .github/workflows/deploy.yml
- Secret required: FIREBASE_TOKEN (token-based deploy; plan to migrate to service account later)
- On push to main  deploys all 3 sites

## Business / Contact
- Company: WildCat Trio Limited
- Address: 20 Harcourt Street, Dublin 2, D02 H364, Ireland
- Phone: not listed on site UI (use email channels)
- Emails: admin@wildcattrio.com, elevatequotes@wildcattrio.com, calsmartai@wildcattrio.com
- Legal pages (static):
  - Corporate: /privacy.html, /terms.html
  - Elevate Quotes: /privacy.html, /terms.html

## Current Status
- Corporate site live with new landing.
- Product landings require full Stitch HTML to replace placeholders.

### 2025-10-03 GA/SEO Work (in progress)
- Search Console: Domain property verified for wildcattrio.com. Sitemaps submitted for all 3:
  - https://wildcattrio.com/sitemap.xml
  - https://elevatequotes.wildcattrio.com/sitemap.xml
  - https://calsmartai.wildcattrio.com/sitemap.xml
- Indexing: Corporate homepage indexed; product homepages submitted and live-test OK (await crawl).
- GA4 properties and links created/confirmed:
  - WildCat Trio (Corporate Web)
  - Elevate Quotes (Web)
  - CalSmart AI (Web)
  - Search Console associations established for each.
- GA4 events/conversions (aka Key events):
  - CalSmart AI: custom events created in GA4
    - `outbound_click` (event_name=click AND outbound=true)
    - `download_cta_click` (event_name=click AND link_text matches regex `(Download|App Store|Google Play)`)
  - CalSmart AI landing CTAs converted to real anchors with placeholder hrefs:
    - App Store → `https://apps.apple.com/placeholder`
    - Google Play → `https://play.google.com/placeholder`
  - Elevate Quotes: CTAs switched to official store badges (SVG), both equal height.
  - Elevate Quotes hero redesigned: Cinzel (bold) headline "ELEVATE QUOTES" with purple underline; Roboto (bold) subheadline "Create Personalize Share Inspiration".
  - Features section updated to include: "Elevate Your Day with Inspiring Quotes" + "400,000+ quote database available offline. Discover, create, and share stunning quote art." and removed prior "Enhance Your Daily Inspiration" heading.
  - Euro pricing set for EQ: €4.60 (monthly), €18.50 (annual), €37.00 (lifetime).
  - FAQ additions for EQ: notifications, watermark export, supported devices; de-duplicated repeated items (one duplicate "Is my data private?" may remain; to remove next pass).

### 2025-10-10 Web updates
- Corporate (wildcattrio.com)
  - Added legal pages `apps/wildcattrio-site/public/privacy.html` and `terms.html`; footer now links to them.
  - Removed phone number from Contact section; copyright updated to 2025.
  - Product tiles now use rounded app icons: `images/eq_foreground_512.png` and `images/calsmart_ai.png`.
- Elevate Quotes (elevatequotes.wildcattrio.com)
  - Removed duplicate bottom "Is my data private?" FAQ.
  - Hero: underline via pseudo-element; background unified with Go Pro tiles; official store badges with matched sizes.
  - Monthly plan shows "7‑Day Free Trial" tag; added Contact mailto and footer plain-text email.
  - Mobile: responsive page padding and grids (features and pricing) for better phone layout.
  - Legal pages added (`apps/elevatequotes-site/public/privacy.html`, `terms.html`) and footer links updated.
- CalSmart AI (calsmartai.wildcattrio.com)
  - New hero image at `apps/calsmartai-site/public/images/hero_2048x1000.webp`; headline/paragraph moved below hero.
  - Store CTAs switched to official badges; removed outer borders and size-matched badges.
  - Mobile layout widened (responsive paddings; responsive grids in "How It Works" and "Key Features").
  - Footer year updated to 2025. Removed dark gradient over hero to preserve bright text.

Notes
- Preferred hero artwork dimension: 2048×1000 (2.048:1). Place under each site's `public/images/`.

Notes
- In GA4 UI, “Conversions” are now shown as “Key events”. Star events in Admin → Data display → Events → Recent events to mark as key events.
- Realtime report is the quickest way to confirm events while clicking site CTAs.

## Immediate Task Checklist
- [x] Refresh EQ landing (hero, features copy, pricing, FAQ, badges).
- [ ] Remove remaining duplicate FAQ entry at the bottom of EQ page (keep only the top "Is my data private?" block).
- [ ] Replace CS landing with full Stitch HTML (no trimming)  apps/calsmartai-site/public/index.html
- [x] Commit & push to trigger CI
- [x] Verify pages render

### Continue Here (next session)
1) Elevate Quotes – finish FAQ tidy-up
   - Remove the duplicate "Is my data private?" in the lower FAQ block.
   - Optional: adjust hero underline to use ::after for auto-fit to rendered text width.
2) GA4 (Elevate Quotes property)
   - Ensure Data stream → Enhanced measurement has Clicks/Outbound ON.
   - Create the two custom events (if not already present):
     - `outbound_click`: event_name=click AND outbound=true (copy params ON)
     - `download_cta_click`: event_name=click AND link_text matches `(Download|App Store|Google Play)` (copy params ON)
   - Open EQ site, click CTAs a few times → Admin → Data display → Events → Recent events → star both events to mark as Key events.
3) GA4 (CalSmart AI property)
   - Open site and click CTAs; confirm `outbound_click` and `download_cta_click` appear under Recent events.
   - Star both as Key events (if not already starred).
4) Optional hardening
   - Replace placeholder store URLs with real store links once available.
   - Migrate CI to service account to avoid token rotation.
   - Keep HSTS/CSP headers already added in `firebase.json`.

Outcome
- Both product pages fire `outbound_click` and `download_cta_click` as key events; Search Console will index product homepages; analytics and conversions ready before store launch.

## Future Enhancements
- Hook real app store badges/links
- Add Privacy/Terms URLs for corporate/CS
- Optional: GA4 per site

## Notes for New Chats
- Use this file as the authoritative context for the web monorepo.
- Keep the Elevate Quotes apps own PROJECT_CONTEXT.md focused on the Flutter app. This file should remain separate and live here at the monorepo root.