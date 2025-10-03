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
- Secret required: FIREBASE_TOKEN (valid and updated)
- On push to main  deploys all 3 sites

## Business / Contact
- Company: WildCat Trio Limited
- Address: 20 Harcourt Street, Dublin 2, D02 H364, Ireland
- Phone: +353 892355536
- Emails: admin@wildcattrio.com, elevatequotes@wildcattrio.com, calsmartai@wildcattrio.com
- Privacy (EQ): https://sites.google.com/view/elevatequotes/privacy-policy

## Current Status
- Corporate site live with new landing.
- Product landings require full Stitch HTML to replace placeholders.

## Immediate Task Checklist
- [ ] Replace EQ landing with full Stitch HTML (no trimming)  apps/elevatequotes-site/public/index.html
- [ ] Replace CS landing with full Stitch HTML (no trimming)  apps/calsmartai-site/public/index.html
- [ ] Commit & push to trigger CI
- [ ] Verify pages render

## Future Enhancements
- Hook real app store badges/links
- Add Privacy/Terms URLs for corporate/CS
- Optional: GA4 per site

## Notes for New Chats
- Use this file as the authoritative context for the web monorepo.
- Keep the Elevate Quotes apps own PROJECT_CONTEXT.md focused on the Flutter app. This file should remain separate and live here at the monorepo root.