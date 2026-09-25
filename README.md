# Md. Ryhan Munna — CSE portfolio

Updated directly from rayhanswork-main.zip. The original React, TypeScript, TanStack Start and Vite foundation, portrait, existing routes and EmailJS integration are retained.

## Run locally
Requires Node.js 22.12+ (tested with Node.js 24).
1. Open a terminal in this folder.
2. Run npm ci.
3. Run npm run dev.
4. Open the local address printed by Vite.

## Build
Run npm run build. The existing Lovable/TanStack configuration controls the deployment output. No website has been published by this update.

## Content to finish before publishing
Edit src/lib/portfolio.ts:
- Add the public LinkedIn URL, contact email and resume URL. Empty social links are hidden, and the resume section shows an honest availability message.
- Add verified repository links for Deepfake Detection, Number Duel and Android Malware Detection.
- Confirm the final descriptions and skill list. The broader CSE projects use conservative summaries from the supplied context; no model accuracy or performance claims have been added.
- Update the resume property to a hosted document URL or a file such as /resume.pdf placed in public/.

The two featured project links and dashboard images come from the user's Olist and Bank Loan project repositories. Dashboard buttons open screenshots, not embedded live Power BI reports. Replace with published reports only when available.

## Contact form
The original EmailJS service, template and public key are preserved in src/components/ContactForm.tsx. Name, email and message field names remain unchanged. The form includes required fields, email validation, a pending state, and success/error messages.

Email delivery must be checked by the owner using the existing EmailJS account and allowed-domain settings before publishing. No test email was sent during development.

## Layout
- CSE-focused introduction and original portrait
- About and four areas of interest
- Six skill categories
- Two prominent analytics projects with documented metrics and real dashboard images
- Six additional CSE projects with category filters
- Education, resume and contact
- Existing /about, /projects and /contact routes retained
- Mobile navigation, keyboard focus states, skip link and reduced-motion support

Sajib Khan's and Sabbir Hossain Rossi's websites were used as visual references only. Their employment, certifications, claims and contact information are not used in this portfolio.

## Verification
- Production client and server build passed.
- TypeScript checking passed.
- Lint checks passed for all modified TypeScript/React files.
- Browser checks passed for all four project filters, expandable project details, dashboard image loading, mobile navigation and required contact fields.
- No horizontal overflow at the tested desktop and 390-pixel phone widths.
- Preserved /projects route renders successfully; browser error log was empty.
- Live EmailJS delivery and deployment were not exercised.

## Animation update
Added rotating typewriter interests, drifting background accents, animated name color, floating portrait labels, one-time scroll reveals, and hover feedback. The CSE heading remains fixed. Visitors can pause motion, and reduced-motion preferences disable automatic effects.
Type and lint checks and desktop/mobile browser checks cover this update. A new production build could not run under the current filesystem restrictions; the successful production build noted above predates this animation update.
