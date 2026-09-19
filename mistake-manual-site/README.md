# The Mistake Manual: Sales Site

Static site (HTML/CSS + ek chhoti config file). Koi build step ya library nahi.

```
index.html               Sales page  (/)
thank-you/index.html     Thank You + download page  (/thank-you/)
ebook/                   <- eBook PDF yahin hai
config.js                <- SIRF YAHIN values badalni hain
setup.html               Easy panel: values bharke ready config.js banayein
styles.css
```

## Setup (simple steps)

1. **PDF pehle se `ebook/` folder me rakhi hui hai** (`config.js` ke `EBOOK_DOWNLOAD_URL` se juda hua). Nayi PDF daalni ho to usi naam se replace karein.
2. `config.js` kholein aur `PAYMENT_CHECKOUT_URL` me apne payment gateway ka checkout link paste karein.
3. `SUPPORT_EMAIL` aur `BOOK_PRICE` (e.g. `"₹199"`) bharein. Discount ke liye `BOOK_ORIGINAL_PRICE`.
4. Ya `setup.html` browser me kholkar values bharein aur ban chuka `config.js` copy-paste kar dein.

## Deploy

Netlify, Vercel ya Cloudflare Pages par **poora folder** (ebook/ folder ke saath) upload karein. Build settings ki zarurat nahi.

## Payment gateway me kaunsa URL daalna hai

Deploy ke baad: `https://YOUR-DOMAIN/thank-you/` ko gateway ke **Custom Redirect / Success URL** me daalein (aap manually karenge).

## Flow

Sales page → Payment gateway → Success redirect → `/thank-you/` → "Download The Mistake Manual" button → PDF `ebook/` folder se seedha download.

## Suraksha ke baare me sach

- Thank-you page payment verify **nahi** karta; woh sirf redirect ke baad khulta hai.
- Site ke andar rakhi PDF ka link (`/ebook/<file>.pdf`) jisko pata ho woh bina payment ke bhi khol sakta hai. Random naam se sirf guess karna mushkil hota hai; agar koi buyer link share kar de to rok nahi sakte.
- Zyada suraksha chahiye to payment gateway ki apni protected file-delivery / server-side verification use karein.
- Frontend me kabhi secret key ya API secret na daalein.
