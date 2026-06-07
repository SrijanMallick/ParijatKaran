# Parijat Karan — Advocate Website

Official website for **Parijat Karan**, Advocate practising at Patna High Court & Central Administrative Tribunal, Patna.

- **Stack:** HTML, CSS, JavaScript (static site)
- **Live domain:** `https://www.parijatkaran.in`
- **Repo:** Push to client's GitHub account

---

## Table of contents

1. [Project structure](#project-structure)
2. [Local preview](#local-preview)
3. [Git workflow](#git-workflow)
4. [Add a new blog](#add-a-new-blog)
5. [Remove a blog](#remove-a-blog)
6. [Meta tags & SEO guide](#meta-tags--seo-guide)
7. [Update profile / contact info](#update-profile--contact-info)
8. [Hosting on GitHub Pages](#hosting-on-github-pages)
9. [Hosting on Vercel (alternative)](#hosting-on-vercel-alternative)
10. [Domain setup — GoDaddy + parijatkaran.in](#domain-setup--godaddy--parijatkaranin)
11. [Handover to client GitHub](#handover-to-client-github)
12. [Optional SEO (minimal)](#optional-seo-minimal)
13. [Troubleshooting](#troubleshooting)

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

## Hosting on GitHub Pages

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

### Ongoing

Every `git push` to `main` automatically redeploys the site.

---

## Hosting on Vercel (alternative)

Use **either** GitHub Pages **or** Vercel — not both for the same domain at once.

### One-time setup

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
2. **Add New Project** → import the `ParijatKaran` repo.
3. **Framework Preset:** Other (static site).
4. **Root Directory:** `./` (project root).
5. Click **Deploy**.

Vercel auto-detects static HTML. No build command needed.

### Custom domain on Vercel

1. Vercel project → **Settings → Domains**.
2. Add `www.parijatkaran.in` and `parijatkaran.in`.
3. Vercel shows DNS records — add them in GoDaddy (see below).
4. Vercel handles HTTPS automatically.

### Ongoing

Every `git push` to `main` triggers automatic redeploy on Vercel.

### If using Vercel instead of GitHub Pages

- You can **delete the `CNAME` file** (it's only for GitHub Pages).
- Disable GitHub Pages on the repo to avoid conflicts.
- Point GoDaddy DNS to Vercel instead of GitHub.

---

## Domain setup — GoDaddy + parijatkaran.in

### Step 1 — Buy domain

1. Go to [godaddy.com](https://www.godaddy.com).
2. Buy **`parijatkaran.in`**.
3. Open **My Products → parijatkaran.in → DNS**.

---

### Step 2 — DNS for GitHub Pages

| Type | Name | Value |
|------|------|--------|
| **CNAME** | `www` | `CLIENT_USERNAME.github.io` |

**Domain forwarding (recommended):**

- Forward `parijatkaran.in` → `https://www.parijatkaran.in`
- Type: **Permanent (301)**
- Forward with HTTPS: **On**

---

### Step 3 — DNS for Vercel (if using Vercel instead)

Vercel → Project → Settings → Domains → copy the records shown. Typically:

| Type | Name | Value |
|------|------|--------|
| **CNAME** | `www` | `cname.vercel-dns.com` |
| **A** | `@` | Vercel IP addresses (shown in dashboard) |

Use exactly what Vercel displays for your project.

---

### Step 4 — Verify

- Open `https://www.parijatkaran.in`
- Check: styling works, images load, all nav links work
- Check: `https://parijatkaran.in` redirects to `www`

---

## Handover to client GitHub

When moving from a developer account to the client's GitHub:

```
□ Push full project to client's GitHub repo
□ Enable GitHub Pages (or Vercel) on client's account
□ Set custom domain www.parijatkaran.in in hosting settings
□ Update GoDaddy CNAME www → CLIENT_USERNAME.github.io (or Vercel DNS)
□ Forward parijatkaran.in → www.parijatkaran.in
□ Enable HTTPS
□ Disable Pages on old developer repo (avoid duplicate sites)
□ Test live site end-to-end
□ Give client GitHub login or add as collaborator
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

**Cause:** DNS not propagated or wrong CNAME target.

**Fix:** Wait up to 48 hours. Confirm GoDaddy CNAME points to correct GitHub username or Vercel target.

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
| Go live | Push to GitHub or Vercel + GoDaddy DNS |

---

## Contact on site

- **Name:** Parijat Karan
- **Mobile:** +91 7250472734
- **Practice:** Patna High Court & Central Administrative Tribunal, Patna
- **Areas:** Service Law, Insolvency & Bankruptcy Law, Commercial Law

---

*Last updated: June 2026*
