# Law Offices of Jason Berke PC — Website (Static)

This repository contains a professional, mobile-friendly static website for **Law Offices of Jason Berke PC**.

## Pages
- `index.html` — Homepage
- `practice-areas.html` — Practice Areas hub
- `bio.html` — Attorney Bio (Jason Berke, Esq.)
- `contact.html` — Consultation Request form
- Practice subpages:
  - `title-disputes.html`
  - `partition-cases.html`
  - `landlord-tenant.html`
  - `residential-evictions.html`
  - `commercial-evictions.html`
  - `yellowstone-injunctions.html`
  - `holdover-proceedings.html`
  - `nonpayment-proceedings.html`
  - `real-estate-contract-disputes.html`

## Contact Form Email Delivery (Important)
A purely static GitHub Pages site **cannot** directly send emails on its own. This project is set up to work with a form-to-email service.

### Option A (recommended): Formspree (works with GitHub Pages)
1. Create a Formspree form and set notifications to `jasonrossberke@gmail.com`.
2. Copy your endpoint URL (looks like `https://formspree.io/f/xxxxxx`).
3. In `contact.html`, replace:
   ```
   action="https://formspree.io/f/REPLACE_WITH_YOUR_FORM_ID"
   ```
   with your endpoint URL.

### Option B: Netlify Forms
Deploy the site on Netlify and enable form handling + email notifications.
(You would add `netlify` to the `<form>` tag and configure notifications in Netlify.)

## Deploy to GitHub Pages
1. Push this repo to GitHub.
2. In GitHub: **Settings → Pages**
3. Set **Source** to your default branch, root folder.
4. Save, then open the Pages URL.

## Local Preview
Open `index.html` in a browser, or run a static server:
```bash
python -m http.server 8000
```
then visit `http://localhost:8000`.

## Update Branding
- Logo: `assets/logo.png`
- Styles: `assets/styles.css`
