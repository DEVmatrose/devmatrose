# Blog-Artikel Meta-Template

> **Siehe auch:** `src/components/blog/article/Neuer-Artikel.md` – die vollständige 8-Stellen-Checkliste für neue Artikel.

## Für jeden neuen Artikel:

### 1. Dateinamen festlegen
```
blog-ARTIKEL-SLUG.html
```
Beispiel: `blog-vom-code-zum-architekten.html`

### 2. Meta-Daten Schema

```javascript
{
  // Primary
  title: "ARTIKEL-TITEL | DEVmatrose",
  description: "ARTIKEL-BESCHREIBUNG (max 160 Zeichen)",
  
  // URLs
  canonical: "https://devmatrose.github.io/devmatrose/blog-ARTIKEL-SLUG.html",
  redirect: "/devmatrose/#blog?article=ARTIKEL-SLUG",
  
  // Open Graph
  ogType: "article",
  ogTitle: "ARTIKEL-TITEL",
  ogDescription: "AUSFÜHRLICHE BESCHREIBUNG (max 200 Zeichen)",
  ogImage: "https://devmatrose.github.io/devmatrose/images/blog/ARTIKEL-SLUG-preview.png",
  ogImageAlt: "BILD-BESCHREIBUNG",
  
  // Article Info
  publishedTime: "YYYY-MM-DDTHH:MM:SS+00:00",
  author: "DEVmatrose",
  section: "KATEGORIE",
  tags: ["Tag1", "Tag2", "Tag3"],
  
  // Twitter
  twitterCard: "summary_large_image",
  twitterTitle: "TWITTER-OPTIMIERTER TITEL",
  twitterDescription: "TWITTER BESCHREIBUNG (max 200 Zeichen)",
}
```

### 3. Bilder vorbereiten

Für optimale Social-Media-Vorschauen:

**Hero Image**: `images/blog/ARTIKEL-SLUG-hero.png`
- Größe: 1920x1080px
- Format: PNG oder JPG
- Im Artikel-Header verwendet

**Preview Image**: `images/blog/ARTIKEL-SLUG-preview.png`
- Größe: 1200x630px (Open Graph Standard)
- Format: PNG
- Für Social-Media-Vorschauen

### 4. Checklist für neuen Artikel

- [ ] Vue-Komponente erstellt: `src/components/blog/article/DD-MM-YY-Artikel-Name.vue`
- [ ] HTML-Landingpage erstellt: `public/blog-artikel-slug.html`
- [ ] Hero-/Vorschaubild hochgeladen: `public/images/blog/bild.png`
- [ ] ⚠️ **Bild-URL in SEO-HTML** als absolute URL korrekt gesetzt (og:image, twitter:image, JSON-LD)
- [ ] Artikel in `BlogTab.vue` registriert (Import + Mapping)
- [ ] Artikel in `BlogArticle.vue` registriert (blogPosts + defineAsyncComponent)
- [ ] Slug in `vite.config.js` → `blogSlugs`-Array eingetragen
- [ ] Eintrag in `public/data/blog-metadata.json` (als erstes Element!)
- [ ] Meta-Tags vollständig ausgefüllt
- [ ] URLs korrekt (ohne Tippfehler)
- [ ] Datum im ISO-Format
- [ ] `npm run build` erfolgreich
- [ ] ⚠️ **Social-Media-Preview prüfen** nach Push mit https://www.opengraph.xyz/

### 5. Test-URLs

Nach dem Deploy teste:
- ✓ HTML-Seite: `https://devmatrose.github.io/devmatrose/blog-artikel-slug.html`
- ✓ Redirect zur Vue-App funktioniert
- ✓ Artikel lädt korrekt in Vue-App
- ✓ Meta-Tags mit [Social Share Preview](https://www.opengraph.xyz/) prüfen
- ✓ Twitter Card mit [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- ✓ Facebook mit [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)

### 6. BlogTab.vue Update

Artikel registrieren:

```javascript
import NeuerArtikel from './blog/DD-MM-YY-Artikel-Name.vue'

const articles = {
  'vom-code-zum-architekten': ArtikelVomCodeZumArchitekten,
  'neuer-artikel-slug': NeuerArtikel,  // NEU
}
``` 