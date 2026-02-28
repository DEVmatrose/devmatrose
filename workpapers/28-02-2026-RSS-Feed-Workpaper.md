# Workpaper: RSS-Feed für DEVmatrose Blog

**Status:** Offen  
**Datum:** 28. Februar 2026  
**Autor:** Ogerly – DEVmatrose  

---

## Ziel

Den Blog RSS-fähig machen, damit Leser über Feed-Reader (Feedly, Thunderbird, etc.) neue Artikel automatisch erhalten. Der Feed wird als statische XML-Datei beim Build generiert.

---

## Technischer Ansatz

### Variante: Build-Script generiert `feed.xml` aus `blog-metadata.json`

Da wir vite-ssg nutzen und alle Metadaten bereits in `public/data/blog-metadata.json` liegen, brauchen wir kein zusätzliches Plugin. Ein Node-Script liest die JSON-Daten und erzeugt eine valide RSS 2.0 XML-Datei.

### Feed-URL

```
https://devmatrose.github.io/devmatrose/feed.xml
```

---

## Umsetzungsschritte

### 1. Feed-Generator-Script erstellen
- [ ] `scripts/generate-feed.js` – Node-Script
- Liest `public/data/blog-metadata.json`
- Generiert valides RSS 2.0 XML
- Schreibt nach `docs/feed.xml` (nach dem Build)
- Felder pro Item: `<title>`, `<link>`, `<description>`, `<pubDate>`, `<guid>`, `<category>`, `<dc:creator>`, `<enclosure>` (Hero-Bild)

### 2. Build-Script anpassen
- [ ] `package.json` → `"build"` erweitern: `"vite-ssg build && node scripts/generate-feed.js"`
- Feed wird automatisch bei jedem Build generiert

### 3. Feed im HTML-Head verlinken
- [ ] `index.html` → `<link rel="alternate" type="application/rss+xml" ...>`
- [ ] Optional: Footer-Link zum RSS-Feed auf der Webseite

### 4. Feed validieren
- [ ] W3C Feed Validator: https://validator.w3.org/feed/
- [ ] Manueller Test in Feed-Reader

---

## RSS 2.0 Struktur (Ziel)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" 
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>DEVmatrose Blog</title>
    <link>https://devmatrose.github.io/devmatrose/blog</link>
    <description>Deep Dives, Architektur-Entscheidungen und technische Insights</description>
    <language>de-de</language>
    <lastBuildDate>...</lastBuildDate>
    <atom:link href=".../feed.xml" rel="self" type="application/rss+xml"/>
    
    <item>
      <title>...</title>
      <link>https://devmatrose.github.io/devmatrose/#/blog/slug</link>
      <description>...</description>
      <pubDate>RFC 822 Datum</pubDate>
      <guid isPermaLink="true">...</guid>
      <dc:creator>Ogerly – DEVmatrose</dc:creator>
      <category>...</category>
      <enclosure url="...hero-bild.png" type="image/png"/>
    </item>
    ...
  </channel>
</rss>
```

---

## Dateien-Checkliste

- [ ] `scripts/generate-feed.js` ← NEU
- [ ] `package.json` → Build-Script erweitern
- [ ] `index.html` → RSS `<link>` Tag
- [ ] `docs/feed.xml` ← wird automatisch generiert
- [ ] Optional: RSS-Icon im Footer/Navigation

---

## Abhängigkeiten

Keine neuen npm-Pakete nötig – reines Node.js `fs` + Template-String-basierte XML-Generierung. Die `blog-metadata.json` hat bereits alle benötigten Felder (title, slug, date, author, excerpt, image, tags, category).

---

## Notizen

- Kein Atom-Feed nötig, RSS 2.0 reicht für alle gängigen Reader
- `<guid>` sollte die permanente Artikel-URL sein
- Datumsformat in RSS: RFC 822 (z.B. `Thu, 28 Feb 2026 10:00:00 +0100`)
- Feed zeigt die letzten 20 Artikel (oder alle, da wir nicht so viele haben)
- Hero-Bilder als `<enclosure>` einbinden für visuelle Feed-Reader
