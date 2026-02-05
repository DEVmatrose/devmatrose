# Blog-Artikel Meta-Template

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

- [ ] Vue-Komponente erstellt: `src/components/blog/DD-MM-YY-Artikel-Name.vue`
- [ ] HTML-Landingpage erstellt: `blog-artikel-slug.html`
- [ ] Hero-Bild hochgeladen: `images/blog/artikel-slug-hero.png`
- [ ] Preview-Bild hochgeladen: `images/blog/artikel-slug-preview.png`
- [ ] Artikel in BlogTab.vue registriert
- [ ] Meta-Tags vollständig ausgefüllt
- [ ] URLs korrekt (ohne Tippfehler)
- [ ] Datum im ISO-Format
- [ ] Lokal getestet (npm run dev)
- [ ] Build erstellt (npm run build)
- [ ] Zu GitHub gepusht

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