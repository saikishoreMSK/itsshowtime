# It's Showtime 🎬

A movie-ticket-booking website with a rich, animation-driven UI. Browse movies by
genre, pick seats, add food, play a mini-game for a discount, and book your tickets.

It is a **fully static site** (HTML / CSS / vanilla JS) hosted on **GitHub Pages**.
Confirmation emails are sent client-side via [EmailJS](https://www.emailjs.com/) —
there is no backend server.

## Tech stack

- HTML5, CSS3, vanilla JavaScript
- [GSAP](https://gsap.com/) — animations
- [Locomotive Scroll](https://locomotivemtl.github.io/locomotive-scroll/) — smooth scrolling
- [jQuery](https://jquery.com/) — used by the Simon mini-game
- [EmailJS](https://www.emailjs.com/) — client-side confirmation emails

## Project structure

```
index.html / script.js / script2.js   Landing page (hero, genres, food cart, contact)
style.css / loco.css                   Landing-page styles
List/                                  Browse movies by genre + search
Ticket/                                Seat selection, pricing, city/theatre, booking
SimonGame/                             Memory mini-game; score becomes a ticket discount
Movies/                                Image/video assets
```

Pages pass state to each other through URL query parameters
(e.g. `Ticket/Ticket.html?name=...&price=...&score=...`).

## Running locally

It's a static site, so any static file server works. The simplest options:

- **VS Code:** install the *Live Server* extension and click "Go Live".
- **Python:** `python -m http.server 8000` then open <http://localhost:8000>.
- **Node:** `npx serve` then open the printed URL.

Then open `index.html` (or the server's root URL).

## Deploying (GitHub Pages)

This repo is served by GitHub Pages from the default branch. Push to `main` and
GitHub Pages publishes the site automatically. No build step is required.

## Configuring confirmation emails (EmailJS)

Emails are sent entirely from the browser, so this works on GitHub Pages with no
server.

1. Create a free account at <https://www.emailjs.com/>.
2. Add an **Email Service** (e.g. Gmail) and an **Email Template**. In the template,
   reference these variables: `{{to_email}}`, `{{to_name}}`, `{{message}}`.
3. Copy your **Public Key**, **Service ID**, and **Template ID**.
4. Paste them into the config block at the top of [`Ticket/script.js`](Ticket/script.js):

   ```js
   const EMAILJS_PUBLIC_KEY  = "YOUR_PUBLIC_KEY";
   const EMAILJS_SERVICE_ID  = "YOUR_SERVICE_ID";
   const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
   ```

5. In the EmailJS dashboard, restrict **allowed origins** to your GitHub Pages domain
   so the keys can't be abused from other sites.

> These three IDs are **public by design** and safe to commit — they are not secrets.
> EmailJS protects you via the allowed-origins setting, not by hiding the keys.

Until these are filled in, booking still works and shows the on-screen confirmation;
the email step is simply skipped.

## Ticket pricing

| Rows        | Price (₹) |
|-------------|-----------|
| Balcony     | 200       |
| 1st Class   | 150       |
| 2nd Class   | 100       |

Playing the Simon mini-game earns a discount based on your score (capped at 8%).

## Notes

- Seat availability is randomized for demo purposes; there is no real persistence.
- The payment form is illustrative only — **do not enter real card details.**
