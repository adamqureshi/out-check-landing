Out-Check landing page (static HTML)

Files:
- index.html
- assets/styles.css
- assets/app.js

What changed in this version:
- The main CTA ("Get OUT-CHECK report") opens /connect-progress.html/ in a lightbox modal (iframe) so users don't leave the page.
- Added a second section with a divider and a big button: "View a sample report" (opens /OUT-report/ in the same lightbox).

Quick edits (search for TODO in index.html):
1) Update the connect URL if your production connect page lives somewhere else.
2) Replace $XX with your actual price.
3) Update support email addresses in the Contact section.
4) Keep the 'Not affiliated with Tesla' disclaimer consistent across pages.

Deploy:
- Host these files anywhere (GitHub Pages, Vercel, Netlify, S3, or serve from your app).


Update: Minimal version (hero + sample + FAQ + footer). Removed How it works, Included, Pricing, and Contact sections.
