# Street Health website

Next.js site, deployed on Vercel.

## Edit content
Almost everything lives in **`content/site.js`** — org name, phone numbers, stats, services,
schedule, team, FAQs, donate link. Lines marked `[FILLER]` are placeholders.

Photos: drop files into `public/images/` and set the path in `content/site.js`
(e.g. `heroImage: "/images/hero.jpg"`). Empty paths show a branded placeholder.

## Run locally (optional)
    npm install
    npm run dev      # http://localhost:3000

## Deploy
Every `git push` to `main` auto-deploys on Vercel.

## Contact form email
Works immediately (submissions appear in Vercel → Logs). To receive emails,
add the variables from `.env.example` in Vercel → Settings → Environment Variables, then redeploy.
