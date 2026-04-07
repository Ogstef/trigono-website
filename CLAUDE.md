# Trigono Taverna Website

## Project Overview
A modern, visually impressive marketing website for "The Triangle" (Το Τρίγωνο), a highly popular Greek meat taverna in Kalyvia, Attica with nearly 8,000 Google reviews. The goal is to build a fast, beautiful, SEO-friendly site to pitch to the owner as a freelance project.

## Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **Language:** JavaScript (no TypeScript)
- **Deployment:** Vercel
- **No backend, no database** — this is a pure static marketing site

## Project Structure
```
/app
  layout.js         ← root layout, fonts, metadata
  page.js           ← home page (imports all sections)
/components
  Navbar.jsx
  Hero.jsx
  About.jsx
  Menu.jsx
  Gallery.jsx
  Contact.jsx
  Footer.jsx
/public
  /images           ← place restaurant photos here
```

## Design Guidelines
- **Vibe:** Upscale rustic Greek taverna — warm, premium, inviting. Think deep earthy tones: dark olive greens, warm off-whites, terracotta, charcoal. NOT a generic food template.
- **Font:** Use Google Fonts — something like "Playfair Display" for headings (elegant, serif) and "Inter" for body text
- **Images:** Use high quality placeholder images from unsplash.com until real photos are provided. Use `next/image` for all images.
- **Mobile first:** Must look great on mobile — the owner will check on their phone
- **NO generic stock-photo taverna clichés** — make it feel modern and premium

## Sections to Build (in order)
1. **Navbar** — Logo/name left, nav links right (smooth scroll to sections). Transparent over hero, solid background on scroll.
2. **Hero** — Full viewport height, strong background image of grilled meat or the restaurant, big headline in Greek + English, CTA button ("See our menu" / "Κάλεσε μας")
3. **About** — Short story about the taverna, highlight the ~8000 reviews and the wood-fired grill. Two-column layout with image.
4. **Menu** — Display menu categories (Ορεκτικά, Κρέατα, Σαλάτες, Ποτά). Use cards or a clean list. Prices are placeholder for now.
5. **Gallery** — Responsive image grid (3–4 photos). Lightbox optional.
6. **Contact** — Address (Kalyvia, Attica), phone number, opening hours, embedded Google Map iframe.
7. **Footer** — Simple, dark background, logo, copyright.

## Key Business Info
- **Name:** Το Τρίγωνο / The Triangle
- **Address:** Athinon 36, Kalivia Thorikou 190 10
- **Phone:** +30 2299 048540
- **Hours:** Monday–Sunday 12:00 – 23:30
- **Specialty:** Grilled lamb chops (παϊδάκια), meat dishes, Greek salad
- **Google rating:** 4.4★ with ~8,000 reviews — mention this as social proof on the site

## Code Style
- Functional components only, no class components
- Keep each component focused and clean — one responsibility per component
- Use Tailwind utility classes directly, no separate CSS files unless necessary
- Use `next/image` for all images (never a raw `<img>` tag)
- Use `next/font` to load Google Fonts
- Smooth scroll behavior on the html element

## What This Site Does NOT Need
- Authentication
- CMS or admin panel
- Database
- API routes
- Cart / e-commerce
- Animations library (keep it CSS transitions only for performance)

## Goal
The finished site should be impressive enough to walk into The Triangle and show the owner on a laptop or phone, and have them say yes on the spot.
