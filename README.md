# Digital Monk OS v3.0

Een retro OS-stijl persoonlijke website met blog, spelletjes, muziek en meer.

---

## 🚀 Hosten in 5 stappen (gratis, ~10 minuten)

### Stap 1 — Zet het op GitHub

```bash
# In de digitalmonk map:
git init
git add .
git commit -m "Initial commit"
git branch -M main

# Maak een repo aan op github.com (naam: digitalmonk)
git remote add origin https://github.com/JOUW-USERNAME/digitalmonk.git
git push -u origin main
```

### Stap 2 — Koppel aan Netlify

1. Ga naar **netlify.com** → Log in met GitHub
2. Klik **"Add new site" → "Import an existing project"**
3. Kies je `digitalmonk` GitHub repo
4. Build settings worden automatisch geladen uit `netlify.toml`
5. Klik **Deploy** — je site is live! (bijv. `digitalmonk.netlify.app`)

### Stap 3 — Activeer het CMS (eenmalig)

1. Ga in Netlify naar **Site settings → Identity → Enable Identity**
2. Scroll naar **Git Gateway → Enable Git Gateway**
3. Ga naar **Identity → Invite users** en voeg je eigen email toe
4. Check je email en accepteer de uitnodiging

### Stap 4 — Stel je repo in config.yml in

Open `admin/config.yml` en verander:
```yaml
backend:
  name: github
  repo: JOUW-USERNAME/digitalmonk   # ← jouw GitHub username hier
  branch: main
```

Commit en push deze wijziging.

### Stap 5 — Klaar!

- **Je site:** `https://digitalmonk.netlify.app`
- **CMS (posts schrijven):** `https://digitalmonk.netlify.app/admin`

---

## ✏️ Een nieuwe post schrijven

1. Ga naar `/admin` op je site
2. Log in met je email
3. Klik **"New Blog Posts"**
4. Vul in: titel, datum, tags, samenvatting, en schrijf je post in de markdown editor
5. Klik **Publish** → Netlify bouwt de site opnieuw en je post staat live (±30 sec)

---

## 📁 Structuur

```
digitalmonk/
├── index.html          ← De hele site (HTML/CSS/JS)
├── admin/
│   ├── index.html      ← CMS interface
│   └── config.yml      ← CMS instellingen (pas repo naam aan!)
├── posts/              ← Je blog posts als .md bestanden
│   ├── 2025-06-01-transmissions-from-the-void.md
│   └── 2025-05-14-japanese-record-hunting.md
├── static/
│   └── images/         ← Zet hier je foto's
├── posts-index.json    ← Auto-gegenereerd door build.py
├── build.py            ← Bouwt posts-index.json (Netlify doet dit automatisch)
└── netlify.toml        ← Netlify configuratie
```

---

## 🎨 Aanpassen

**Thema kleuren** → Zoek in `index.html` naar `:root {` en pas de CSS variabelen aan

**Je naam/info** → Zoek naar `aboutContent()` in `index.html`

**Muziek tracks** → Zoek naar `musicContent()` en pas de tracks array aan

**Domein koppelen** → In Netlify: Site settings → Domain management → Add custom domain

---

## 💰 Kosten

| Dienst | Kosten |
|--------|--------|
| GitHub | Gratis |
| Netlify hosting | Gratis (100GB/maand) |
| Netlify CMS | Gratis |
| Eigen domein (.nl) | ~€10/jaar (optioneel) |
| **Totaal** | **€0/maand** |
