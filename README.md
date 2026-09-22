# Rockford Street Medicine website

Next.js site, deployed on Vercel.

## Edit content
Almost everything lives in **`content/site.js`**: contact email, Instagram, wishlist and
volunteer sign-up links, "by the numbers" stats, services, donation inventory, partners and
board members.

Photos: team headshots go in `public/team/` (set `photo: "/team/name.jpg"` on the person).
An optional home hero photo goes in `public/images/` (set `home.heroImage`).
The logo is `public/logo.png`; favicons are `app/icon.png` and `app/apple-icon.png`.

## Run locally (optional)
    npm install
    npm run dev      # http://localhost:3000

## Deploy
Every `git push` to `main` auto-deploys on Vercel.
