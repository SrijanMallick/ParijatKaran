# Parijat Karan — Advocate Website

Official website for **Parijat Karan**, Advocate practising at Patna High Court & Central Administrative Tribunal, Patna.

- **Stack:** HTML, CSS, JavaScript (static site)
- **Live domain:** `https://www.parijatkaran.in`
- **Repo:** Push to client's GitHub account
- **Recommended hosting:** [Vercel](#hosting-on-vercel-recommended) + GoDaddy domain

---

## Table of contents

1. [Project structure](#project-structure)
2. [Local preview](#local-preview)
3. [Git workflow](#git-workflow)
4. [Add a new blog](#add-a-new-blog)
5. [Remove a blog](#remove-a-blog)
6. [Meta tags & SEO guide](#meta-tags--seo-guide)
7. [Update profile / contact info](#update-profile--contact-info)
8. [Hosting on Vercel (recommended)](#hosting-on-vercel-recommended)
9. [Buy domain on GoDaddy](#buy-domain-on-godaddy)
10. [Connect domain to Vercel — GoDaddy DNS](#connect-domain-to-vercel--godaddy-dns)
11. [Hosting on GitHub Pages (alternative)](#hosting-on-github-pages-alternative)
12. [Handover to client GitHub](#handover-to-client-github)
13. [Optional SEO (minimal)](#optional-seo-minimal)
14. [Troubleshooting](#troubleshooting)

---

## Project structure

```
Parijat Karan/
├── index.html              Home page (hero, profile, blog preview)
├── blogs.html              All blogs listing
├── contact.html            Contact page + form
├── blog-*.html             Individual blog pages
├── blog-TEMPLATE.html      Copy this to create new blogs (NOT live)
├── CNAME                   Custom domain for GitHub Pages
├── css/style.css           All styling
├── js/main.js              Mobile menu, contact form message
├── assets/images/          Photos and blog thumbnails
├── sitemap.xml             Page list for Google
├── robots.txt              Search engine permissions
└── README.md               This file
```

**Important:** The site uses folders (`css/`, `js/`, `assets/`). Always upload or push the **entire project**, not individual files only.

---

## Local preview

1. Open the project folder on your computer.
2. Double-click `index.html` to preview in a browser.
3. Or use **Live Server** extension in VS Code / Cursor.

Changes are not live until you push to GitHub or Vercel.

---

## Git workflow

### First-time setup (on a new machine)

```powershell
cd "path\to\Parijat Karan"
git init
git remote add origin https://github.com/CLIENT_USERNAME/ParijatKaran.git
git pull origin main
```

### Every update

```powershell
cd "path\to\Parijat Karan"
git add .
git commit -m "Describe your change"
git push
```

Site updates in **1–3 minutes** after push.

---

## Add a new blog

### Step 1 — Create the blog file

1. Copy `blog-TEMPLATE.html`.
2. Rename to `blog-your-topic-name.html` (lowercase, hyphens, no spaces).
3. Replace every `[CHANGE: ...]` marker in the file.
4. Write the article inside `<div class="blog-article-content">`.

**HTML writing rules:**

| You want | Write |
|----------|--------|
| Paragraph | `<p>Text here.</p>` |
| Section heading | `<h2>Section Title</h2>` |
| Case name (italic) | `<em>Lata Singh v. State of UP</em> (2006)` |
| Quote from judgment | `<blockquote>"Quote here."</blockquote>` |
| Ampersand | `&amp;` not `&` |

Paste from Word into **Notepad first**, then into HTML (avoids smart quotes).

**Available images:**

- `assets/images/blog-judiciary-sentinel.svg`
- `assets/images/blog-interfaith-couple.svg`
- `assets/images/blog-special-marriage-act.svg`
- `assets/images/parijat-karan-hero.png` (profile photo)

---

### Step 2 — Update `blogs.html`

Copy an existing `<article class="blog-card">...</article>` block. Paste at the **top** of the grid. Update:

```html
<article class="blog-card">
  <div class="blog-card-image">
    <img src="assets/images/blog-judiciary-sentinel.svg" alt="Short image description" width="400" height="250" loading="lazy">
  </div>
  <div class="blog-card-body">
    <p class="blog-card-meta">Service Law · CAT Patna</p>
    <h3 class="blog-card-title">Your New Blog Title</h3>
    <p class="blog-card-excerpt">2–3 sentence preview for the listing page.</p>
    <a href="blog-your-topic-name.html" class="btn btn-outline">Read More</a>
  </div>
</article>
```

The `href` must match your new file name exactly.

---

### Step 3 — Update `index.html` (recommended)

Same card block in the **Recent Blogs** section.

- Add new card at the top.
- If keeping only 3 on home, delete the oldest card.

---

### Step 4 — Update `sitemap.xml`

Add before `</urlset>`:

```xml
<url>
  <loc>https://www.parijatkaran.in/blog-your-topic-name.html</loc>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
```

**Do not** add `blog-TEMPLATE.html` to the sitemap.

---

### Step 5 — Push and test

```powershell
git add .
git commit -m "Add blog: your topic name"
git push
```

Open the live site → **Blogs** → click **Read More** → confirm the page loads.

---

### Add blog checklist

```
□ Copy blog-TEMPLATE.html → rename
□ Fill all [CHANGE] markers + article body
□ Add card on blogs.html
□ Add card on index.html (remove oldest if keeping 3)
□ Add URL in sitemap.xml
□ git add → commit → push
□ Test live link
```

---

## Remove a blog

1. **Delete** the `blog-*.html` file.
2. **Remove** its card from `blogs.html`.
3. **Remove** its card from `index.html` (if present).
4. **Remove** its `<url>...</url>` block from `sitemap.xml`.
5. Push to GitHub/Vercel.

```powershell
git add .
git commit -m "Remove blog: topic name"
git push
```

---

## Meta tags & SEO guide

Each blog page has SEO tags in the `<head>`. Use `blog-TEMPLATE.html` as reference.

### Tags to change on every new blog

| Tag | What to write | Example |
|-----|---------------|---------|
| `<title>` | Topic + `\| Parijat Karan` (~60 chars) | `Service Law at CAT Patna \| Parijat Karan` |
| `meta name="description"` | 1–2 sentence summary (~150 chars) | `Analysis of... — by Advocate Parijat Karan.` |
| `meta name="keywords"` | 5–8 comma-separated search phrases | `service law, CAT Patna, Parijat Karan` |
| `link rel="canonical"` | Full URL of this page | `https://www.parijatkaran.in/blog-file.html` |
| `og:title` | Blog title (social sharing) | Same as or shorter than `<h1>` |
| `og:description` | Short summary for WhatsApp/LinkedIn | One sentence |
| `og:url` | Same as canonical | Full page URL |
| `og:image` | Full URL to blog image | `https://www.parijatkaran.in/assets/images/...` |

### Tags to leave unchanged

```html
<meta name="author" content="Parijat Karan">
<meta name="robots" content="index, follow">
<meta property="og:type" content="article">
```

### JSON-LD block (for Google)

Inside `<script type="application/ld+json">`, change:

| Field | What to write |
|-------|---------------|
| `"headline"` | Full blog title (same as `<h1>`) |
| `"description"` | One-line summary |
| `"datePublished"` | `"2026-06-01"` (YYYY-MM-DD) |
| `"dateModified"` | Same as publish date |
| `"url"` | Full page URL |
| `"image"` | Full image URL |
| `"keywords"` | `["Topic 1", "Topic 2", "Topic 3"]` |

**Do not change** `"author"` and `"publisher"` — keep as Parijat Karan.

### Visible content SEO (on the page)

| Element | Purpose |
|---------|---------|
| `<h1 class="blog-article-title">` | Main title Google reads |
| `<p class="blog-article-lead">` | Intro under title |
| `<h2>` | Section headings inside article |
| `<p>` | Body text — write clear, original legal analysis |

---

## Update profile / contact info

### Phone number

Search entire project for `7250472734` and replace everywhere:

- Display: `+91 7250472734`
- Link: `tel:+917250472734`

**Files affected:** `index.html`, `contact.html`, all `blog-*.html` (footer), `blogs.html` (footer).

Also update `"telephone"` in JSON blocks on `index.html` and `contact.html`.

### Bio, practice areas, court name

Edit **`index.html`** — profile and hero sections.

Also update **`contact.html`** — practice tags and form dropdown.

### Profile photo

1. Replace `assets/images/parijat-karan-hero.png` (or add new file and update `src` in `index.html`).

### Domain change

If domain ever changes, search and replace `www.parijatkaran.in` across all `.html`, `sitemap.xml`, and `robots.txt`.

---

## Hosting on Vercel (recommended)

**Use Vercel + GoDaddy** for the easiest custom domain setup. The site code stays on GitHub; Vercel deploys it automatically on every push.

> Use **either** Vercel **or** GitHub Pages for the live domain — not both at once.

---

### Phase A — Push code to GitHub first

Skip if the repo already exists on the client's GitHub.

1. Client creates a GitHub account at [github.com](https://github.com).
2. Client creates a new **public** repository named `ParijatKaran`.
3. On your computer, open PowerShell in the project folder:

```powershell
cd "C:\Users\offic\OneDrive\Documents\Desktop\Parijat Karan"
git remote set-url origin https://github.com/CLIENT_USERNAME/ParijatKaran.git
git push -u origin main
```

4. On GitHub, confirm the repo contains folders: `css/`, `js/`, `assets/images/`, and `index.html`.

---

### Phase B — Create Vercel account and import project

1. Go to [vercel.com](https://vercel.com).
2. Click **Sign Up** → choose **Continue with GitHub**.
3. Authorize Vercel to access GitHub when prompted.
4. On the Vercel dashboard, click **Add New… → Project**.
5. Under **Import Git Repository**, find **`ParijatKaran`**.
   - If not listed: click **Adjust GitHub App Permissions** and grant access to the repo.
6. Click **Import** next to the repo.

---

### Phase C — Configure and deploy

On the **Configure Project** screen, set these exactly:

| Setting | Value |
|---------|--------|
| **Project Name** | `parijat-karan` (or any name — this is internal) |
| **Framework Preset** | **Other** |
| **Root Directory** | `./` (leave as root) |
| **Build Command** | Leave **empty** |
| **Output Directory** | Leave **empty** |
| **Install Command** | Leave **empty** |

7. Click **Deploy**.
8. Wait 1–2 minutes until the build shows **Ready**.
9. Vercel gives a temporary URL like `https://parijat-karan.vercel.app` — open it and confirm:
   - CSS/styling loads
   - Navigation works
   - Profile photo shows
   - Blog pages open

---

### Phase D — Remove GitHub Pages conflict (if previously used)

If the site was on GitHub Pages before:

1. GitHub repo → **Settings → Pages**.
2. Set source to **None** / disable Pages.
3. Delete the `CNAME` file from the repo (only needed for GitHub Pages):

```powershell
git rm CNAME
git commit -m "Remove CNAME — using Vercel for hosting"
git push
```

Vercel manages the domain in its dashboard — no `CNAME` file in code needed.

---

### Phase E — Add custom domain in Vercel

**Do this after buying `parijatkaran.in` on GoDaddy** (Phase F below), or add the domain now and configure DNS once the domain is purchased.

1. Vercel project → **Settings** (top tab).
2. Click **Domains** in the left sidebar.
3. Type `www.parijatkaran.in` → click **Add**.
4. Vercel shows **Invalid Configuration** until DNS is set — that is normal.
5. Also add `parijatkaran.in` (without www) → click **Add**.
6. Click each domain to see the **DNS records** Vercel requires. Keep this tab open for Phase G.

**Set primary domain (recommended):**

7. Next to `www.parijatkaran.in`, set it as the **primary** domain if Vercel offers that option.
8. Vercel will redirect `parijatkaran.in` → `www.parijatkaran.in` automatically once DNS is verified.

---

### Phase F — HTTPS

1. After DNS verifies (Phase G), Vercel issues an SSL certificate automatically.
2. In **Settings → Domains**, both domains should show **Valid Configuration** with a green check.
3. No manual HTTPS toggle needed — Vercel handles it.

---

### Ongoing — how updates go live

Every time you push to GitHub:

```powershell
git add .
git commit -m "Describe change"
git push
```

Vercel redeploys in **1–2 minutes** automatically. No manual upload needed.

---

### Vercel setup checklist

```
□ Code pushed to client's GitHub (full folder structure)
□ Vercel account created (Sign in with GitHub)
□ ParijatKaran repo imported
□ Framework: Other, no build command
□ Deploy successful — test *.vercel.app URL
□ GitHub Pages disabled (if used before)
□ CNAME file removed from repo
□ www.parijatkaran.in added in Vercel Domains
□ parijatkaran.in added in Vercel Domains
□ GoDaddy DNS records added (Phase G)
□ Both domains show Valid Configuration in Vercel
□ https://www.parijatkaran.in loads with styling
```

---

## Buy domain on GoDaddy

### Step 1 — Purchase

1. Go to [godaddy.com](https://www.godaddy.com).
2. Search for **`parijatkaran.in`**.
3. Add to cart and complete checkout.
4. Sign in to your GoDaddy account after purchase.

### Step 2 — Open DNS settings

1. Go to **My Products** (top-right account menu).
2. Find **`parijatkaran.in`** → click **DNS** (or **Manage DNS**).
3. You land on the **DNS Management** page with a list of records.

### Step 3 — Clean up default records (important)

GoDaddy often adds parking records that conflict with Vercel. **Delete or edit** these if present:

- CNAME record where Name = `www` pointing to GoDaddy parking
- A record where Name = `@` pointing to GoDaddy parking IP

Click the **pencil icon** or **trash icon** next to each conflicting record.

> Do not delete NS (nameserver) records unless GoDaddy support tells you to.

---

## Connect domain to Vercel — GoDaddy DNS

Follow Vercel's dashboard for exact values — they can change. The steps below match the usual setup.

### Step 1 — Get records from Vercel

1. Vercel → your project → **Settings → Domains**.
2. Click **`www.parijatkaran.in`** — note the CNAME target (usually `cname.vercel-dns.com`).
3. Click **`parijatkaran.in`** — note the A record IP address(es) Vercel shows (commonly `76.76.21.21`).

### Step 2 — Add CNAME for www (GoDaddy)

1. GoDaddy DNS page → click **Add** (or **Add Record**).
2. Fill in:

| Field | Value |
|-------|--------|
| **Type** | CNAME |
| **Name** | `www` |
| **Value** | `cname.vercel-dns.com` *(use exact value from Vercel)* |
| **TTL** | 1 Hour (default is fine) |

3. Click **Save**.

### Step 3 — Add A record for root domain (GoDaddy)

1. Click **Add** again.
2. Fill in:

| Field | Value |
|-------|--------|
| **Type** | A |
| **Name** | `@` |
| **Value** | `76.76.21.21` *(use exact IP from Vercel dashboard)* |
| **TTL** | 1 Hour |

3. Click **Save**.

If Vercel shows **multiple A records**, add one A record in GoDaddy for each IP.

### Step 4 — Wait for DNS propagation

- Usually **15 minutes to 48 hours** (often under 1 hour).
- Vercel → **Settings → Domains** — refresh until both domains show **Valid Configuration**.

### Step 5 — Test the live site

Open these URLs in a browser:

| URL | Expected result |
|-----|-----------------|
| `https://www.parijatkaran.in` | Full styled site loads |
| `https://parijatkaran.in` | Redirects to `www` version |
| `https://www.parijatkaran.in/blogs.html` | Blogs page loads |
| `https://www.parijatkaran.in/contact.html` | Contact page loads |

Hard refresh if needed: **Ctrl + F5** (Windows) or **Cmd + Shift + R** (Mac).

---

### GoDaddy DNS quick reference

| Type | Name | Value | Purpose |
|------|------|--------|---------|
| CNAME | `www` | `cname.vercel-dns.com` | www subdomain → Vercel |
| A | `@` | `76.76.21.21` | Root domain → Vercel |

Always confirm values in **your Vercel Domains dashboard** before saving in GoDaddy.

---

### GoDaddy + Vercel troubleshooting

| Problem | Fix |
|---------|-----|
| Vercel shows "Invalid Configuration" | DNS not propagated yet — wait up to 48 hrs |
| "www works but root domain doesn't" | Add A record for `@` with Vercel's IP |
| "Root works but www doesn't" | Add CNAME `www` → `cname.vercel-dns.com` |
| GoDaddy says record conflict | Delete old parking CNAME/A records first |
| Site shows old version | Hard refresh browser; check Vercel Deployments tab |
| CSS broken on live site | Confirm `css/` folder exists in GitHub repo |

---

## Hosting on GitHub Pages (alternative)

Use this only if you prefer not to use Vercel. **Do not run both** on the same domain.

### One-time setup

1. Push full project to GitHub (client's account).
2. Repo → **Settings → Pages**.
3. **Source:** Deploy from branch **`main`**, folder **`/ (root)`**.
4. Save. Temporary URL: `https://CLIENT_USERNAME.github.io/ParijatKaran/`
5. Verify CSS loads (check `css/style.css` exists in repo).

### Custom domain

1. Ensure `CNAME` file in repo contains:
   ```
   www.parijatkaran.in
   ```
2. **Settings → Pages → Custom domain** → enter `www.parijatkaran.in` → Save.
3. Wait for DNS check (up to 48 hours).
4. Enable **Enforce HTTPS**.

### GoDaddy DNS for GitHub Pages

| Type | Name | Value |
|------|------|--------|
| **CNAME** | `www` | `CLIENT_USERNAME.github.io` |

Forward `parijatkaran.in` → `https://www.parijatkaran.in` (301) in GoDaddy forwarding settings.

### Ongoing

Every `git push` to `main` automatically redeploys the site.

---

## Handover to client GitHub

When moving from a developer account to the client's GitHub:

```
□ Push full project to client's GitHub repo
□ Import repo on Vercel (recommended) OR enable GitHub Pages
□ Add www.parijatkaran.in + parijatkaran.in in Vercel Domains
□ Buy parijatkaran.in on GoDaddy
□ Add GoDaddy DNS records (CNAME www + A @) per Vercel dashboard
□ Remove CNAME file from repo if using Vercel
□ Disable GitHub Pages on old developer repo
□ Confirm Valid Configuration + HTTPS in Vercel
□ Test live site end-to-end
□ Give client GitHub + Vercel login (or add as collaborator)
```

**No code changes needed** when switching GitHub accounts — only DNS and hosting settings change.

---

## Optional SEO (minimal)

Not required, but helpful once:

1. **Google Search Console** — [search.google.com/search-console](https://search.google.com/search-console)
   - Add property: `https://www.parijatkaran.in`
   - Verify via HTML file or meta tag
   - Submit sitemap: `sitemap.xml`

2. **Share the link** — LinkedIn, WhatsApp, email signature, visiting card. This matters more than tools for a new site.

3. **Google Business Profile** — for local "Advocate Patna" searches (optional).

No monthly SEO maintenance required beyond publishing blogs and sharing the site.

---

## Troubleshooting

### CSS not loading / site looks plain

**Cause:** Files uploaded without folders. `css/style.css` missing from repo.

**Fix:** Push entire project with folder structure intact. Verify on GitHub that `css/`, `js/`, and `assets/images/` exist.

### Blog page shows 404

**Cause:** File name doesn't match link in `blogs.html`.

**Fix:** Ensure `href="blog-exact-name.html"` matches the actual file name (case-sensitive on some hosts).

### Images broken

**Cause:** Wrong path or file not uploaded.

**Fix:** Images must be at `assets/images/filename.ext`. Use relative paths: `assets/images/...`

### Domain not working

**Cause:** DNS not propagated, wrong records, or old GoDaddy parking records.

**Fix:** Wait up to 48 hours. Match GoDaddy records exactly to Vercel **Settings → Domains**. Delete conflicting parking CNAME/A records in GoDaddy.

### Contact form doesn't send email

The form only shows a "Thank you" message in the browser. To send real emails, connect a service like [Formspree](https://formspree.io) later.

---

## Quick reference

| Task | Files to edit |
|------|---------------|
| Add blog | New `blog-*.html` + `blogs.html` + `index.html` + `sitemap.xml` |
| Remove blog | Delete file + `blogs.html` + `index.html` + `sitemap.xml` |
| Change phone | All `.html` files (search `7250472734`) |
| Change bio | `index.html`, `contact.html` |
| Change design | `css/style.css` only |
| Go live | Push to GitHub → Vercel auto-deploys → GoDaddy DNS |

---

## Contact on site

- **Name:** Parijat Karan
- **Mobile:** +91 7250472734
- **Practice:** Patna High Court & Central Administrative Tribunal, Patna
- **Areas:** Service Law, Insolvency & Bankruptcy Law, Commercial Law

---

*Last updated: June 2026*
