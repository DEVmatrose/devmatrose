# Workpaper: DEVmatrose Blog-System

**Version:** 1.0  
**Status:** Planung  
**Datum:** 02.12.2025  
**Autor:** GitHub Copilot (Claude Sonnet 4.5) in Zusammenarbeit mit DEVmatrose  

---

## 1. Vision & Anforderungen

### 1.1 Ziel
Ein integriertes Blog-System für DEVmatrose mit Fokus auf:
- **Social Media Optimierung** (LinkedIn, YouTube, Instagram, X/Twitter)
- **Perfekte Link-Vorschauen** via Meta-Tags
- **Einfaches Teilen** für Leser und Autor
- **Clean Architecture** - Eine Komponente, mehrfach verwendbar

### 1.2 Kernfeatures
- ✅ Zentrale Blog-Übersicht auf Startseite
- ✅ Dedizierte Blog-Sektion mit Navigation
- ✅ Markdown-basierte Artikel
- ✅ Individuelle Meta-Tags pro Artikel
- ✅ Social Share Buttons (LinkedIn, X, Instagram, YouTube)
- ✅ SEO-optimiert mit Schema.org
- ✅ Responsive & Mobile-First

---

## 2. Architektur & Struktur

### 2.1 Verzeichnisstruktur
```
src/
├── components/
│   ├── BlogList.vue          # Blog-Übersicht (wiederverwendbar)
│   ├── BlogPost.vue          # Einzelner Blog-Artikel
│   ├── BlogCard.vue          # Blog-Karte für Übersicht
│   ├── ShareButtons.vue      # Social Share Komponente
│   └── BlogTab.vue           # Dedizierte Blog-Seite
├── content/
│   └── blog/
│       ├── 2025-12-01-mein-erster-artikel.md
│       ├── 2025-12-02-nostr-dezentralisierung.md
│       └── blog-metadata.json    # Metadaten für alle Artikel
└── utils/
    └── blogLoader.js         # Helper für Markdown-Import

public/
└── images/
    └── blog/
        ├── 2025-12-01-preview.png
        └── 2025-12-02-preview.png
```

### 2.2 Komponenten-Hierarchie
```
App.vue
├── HomeTab.vue
│   └── BlogList.vue (Top 3 neueste Artikel)
└── BlogTab.vue
    └── BlogList.vue (Alle Artikel) oder BlogPost.vue (Einzelansicht)
```

---

## 3. Datenmodell

### 3.1 blog-metadata.json
```json
{
  "posts": [
    {
      "id": "nostr-dezentralisierung-2025",
      "title": "Warum Nostr die Zukunft dezentraler Kommunikation ist",
      "slug": "nostr-dezentralisierung-2025",
      "date": "2025-12-02",
      "author": "DEVmatrose",
      "excerpt": "Eine technische Deep Dive in das Nostr-Protokoll und warum es WhatsApp & Co. herausfordert.",
      "category": "Dezentrale Systeme",
      "tags": ["Nostr", "Web3", "Dezentralisierung", "Protokolle"],
      "readTime": "8 min",
      "featured": true,
      "image": "/images/blog/2025-12-02-preview.png",
      "imageAlt": "Nostr Protokoll Visualisierung",
      "metaDescription": "Ein technischer Einblick in das Nostr-Protokoll: Wie dezentrale Identitäten und Relay-Netzwerke die Zukunft der Kommunikation gestalten.",
      "socialMedia": {
        "linkedin": {
          "title": "🚀 Nostr: Die dezentrale Alternative zu WhatsApp & Co.",
          "hashtags": ["Nostr", "Web3", "Dezentralisierung", "SoftwareArchitektur"]
        },
        "twitter": {
          "title": "🧵 Thread: Warum Nostr die Zukunft ist",
          "hashtags": ["Nostr", "Web3", "BuildInPublic"]
        },
        "instagram": {
          "caption": "New Blog Post 🚀 Link in Bio",
          "hashtags": ["coding", "web3", "developer", "techblog"]
        }
      }
    }
  ]
}
```

### 3.2 Markdown-Artikel Format
```markdown
---
id: nostr-dezentralisierung-2025
title: Warum Nostr die Zukunft dezentraler Kommunikation ist
date: 2025-12-02
---

# Warum Nostr die Zukunft dezentraler Kommunikation ist

## Einleitung
...

## Technische Architektur
...

## Code-Beispiele
\```javascript
// Nostr Event erstellen
const event = {
  pubkey: userPublicKey,
  created_at: Math.floor(Date.now() / 1000),
  kind: 1,
  content: "Mein erster Nostr-Post!"
}
\```
```

---

## 4. Meta-Tags & SEO

### 4.1 Dynamische Meta-Tags pro Artikel
```html
<!-- In BlogPost.vue via Vue Meta oder useHead() -->
<meta property="og:type" content="article" />
<meta property="og:title" content="{{ post.title }}" />
<meta property="og:description" content="{{ post.metaDescription }}" />
<meta property="og:image" content="https://devmatrose.github.io/devmatrose{{ post.image }}" />
<meta property="og:url" content="https://devmatrose.github.io/devmatrose/blog/{{ post.slug }}" />
<meta property="article:published_time" content="{{ post.date }}" />
<meta property="article:author" content="DEVmatrose" />
<meta property="article:section" content="{{ post.category }}" />
<meta property="article:tag" content="{{ post.tags }}" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="{{ post.socialMedia.twitter.title }}" />
<meta name="twitter:description" content="{{ post.excerpt }}" />
<meta name="twitter:image" content="https://devmatrose.github.io/devmatrose{{ post.image }}" />

<!-- LinkedIn -->
<meta property="og:site_name" content="DEVmatrose - Die Architekturschmiede" />

<!-- Schema.org JSON-LD -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "{{ post.title }}",
  "image": "{{ post.image }}",
  "datePublished": "{{ post.date }}",
  "dateModified": "{{ post.date }}",
  "author": {
    "@type": "Person",
    "name": "DEVmatrose",
    "url": "https://devmatrose.github.io/devmatrose/"
  },
  "publisher": {
    "@type": "Organization",
    "name": "DEVmatrose",
    "logo": {
      "@type": "ImageObject",
      "url": "https://devmatrose.github.io/devmatrose/src/assets/logo-plastisch.png"
    }
  },
  "description": "{{ post.metaDescription }}"
}
</script>
```

---

## 5. Social Share Funktionalität

### 5.1 ShareButtons.vue
```vue
<template>
  <div class="flex gap-2 flex-wrap">
    <!-- LinkedIn -->
    <a 
      :href="linkedInUrl" 
      target="_blank"
      class="btn btn-sm btn-outline"
      title="Auf LinkedIn teilen"
    >
      <LinkedInIcon /> LinkedIn
    </a>
    
    <!-- X (Twitter) -->
    <a 
      :href="twitterUrl" 
      target="_blank"
      class="btn btn-sm btn-outline"
      title="Auf X teilen"
    >
      <XIcon /> X
    </a>
    
    <!-- Copy Link -->
    <button 
      @click="copyLink"
      class="btn btn-sm btn-outline"
      title="Link kopieren"
    >
      <CopyIcon /> Link kopieren
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  post: Object,
  url: String
})

const linkedInUrl = computed(() => 
  `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(props.url)}`
)

const twitterUrl = computed(() => {
  const text = props.post.socialMedia.twitter.title
  const hashtags = props.post.socialMedia.twitter.hashtags.join(',')
  return `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(props.url)}&hashtags=${hashtags}`
})

const copyLink = () => {
  navigator.clipboard.writeText(props.url)
  // Toast notification: "Link kopiert!"
}
</script>
```

### 5.2 Share-URLs für Plattformen
```javascript
// LinkedIn
https://www.linkedin.com/sharing/share-offsite/?url=URL

// X (Twitter)
https://twitter.com/intent/tweet?text=TEXT&url=URL&hashtags=TAG1,TAG2

// Facebook (optional)
https://www.facebook.com/sharer/sharer.php?u=URL

// WhatsApp (optional für Mobile)
https://wa.me/?text=TEXT%20URL
```

---

## 6. UI/UX Design

### 6.1 BlogCard.vue (Übersicht)
```vue
<template>
  <div class="card bg-base-200 border border-copper-orange/20 hover:border-copper-orange/60 transition-all">
    <figure>
      <img :src="post.image" :alt="post.imageAlt" class="h-48 w-full object-cover" />
    </figure>
    <div class="card-body">
      <!-- Featured Badge -->
      <div v-if="post.featured" class="badge badge-accent">Featured</div>
      
      <!-- Kategorie & Lesezeit -->
      <div class="flex gap-2 text-sm text-cyan-blue">
        <span>{{ post.category }}</span>
        <span>•</span>
        <span>{{ post.readTime }}</span>
      </div>
      
      <!-- Titel -->
      <h3 class="card-title text-copper-orange">{{ post.title }}</h3>
      
      <!-- Excerpt -->
      <p class="text-off-white/80">{{ post.excerpt }}</p>
      
      <!-- Tags -->
      <div class="flex flex-wrap gap-2 mt-2">
        <span 
          v-for="tag in post.tags" 
          :key="tag"
          class="badge badge-sm badge-outline"
        >
          {{ tag }}
        </span>
      </div>
      
      <!-- CTA -->
      <div class="card-actions justify-between items-center mt-4">
        <span class="text-xs text-off-white/60">{{ formatDate(post.date) }}</span>
        <router-link 
          :to="`/blog/${post.slug}`"
          class="btn btn-sm btn-primary"
        >
          Weiterlesen →
        </router-link>
      </div>
    </div>
  </div>
</template>
```

### 6.2 BlogPost.vue (Einzelansicht)
- Hero-Section mit großem Bild
- Breadcrumb Navigation (Home > Blog > Artikel)
- Autor & Datum
- Reading Progress Bar
- Table of Contents (Auto-generiert aus H2/H3)
- Syntax Highlighting (Code-Blöcke)
- Share Buttons (Sticky Sidebar + Footer)
- Related Posts (3-4 ähnliche Artikel)
- Kommentar-System (optional: Giscus, Utterances)

---

## 7. Technische Implementierung

### 7.1 Markdown-Verarbeitung
**Option 1: Vite-Plugin (Empfohlen)**
```bash
npm install vite-plugin-markdown markdown-it
```

```javascript
// vite.config.js
import markdown from 'vite-plugin-markdown'

export default defineConfig({
  plugins: [
    vue(),
    markdown({ mode: 'html' })
  ]
})
```

**Option 2: Runtime-Import**
```javascript
// blogLoader.js
import { marked } from 'marked'
import hljs from 'highlight.js'

export async function loadBlogPost(slug) {
  const md = await import(`../content/blog/${slug}.md?raw`)
  const html = marked(md.default, {
    highlight: (code, lang) => hljs.highlight(code, { language: lang }).value
  })
  return html
}
```

### 7.2 Router-Konfiguration
```javascript
// Aktuell: Hash-Router (für GitHub Pages)
// BlogTab.vue übernimmt Routing intern

// Zukünftig: Vue Router mit History Mode
const routes = [
  { path: '/', component: HomeTab },
  { path: '/blog', component: BlogList },
  { path: '/blog/:slug', component: BlogPost }
]
```

### 7.3 Meta-Tags dynamisch setzen
```javascript
// BlogPost.vue
import { useHead } from '@vueuse/head'

const post = ref(null)

useHead({
  title: computed(() => `${post.value?.title} | DEVmatrose Blog`),
  meta: [
    { property: 'og:title', content: computed(() => post.value?.title) },
    { property: 'og:description', content: computed(() => post.value?.metaDescription) },
    { property: 'og:image', content: computed(() => `${baseURL}${post.value?.image}`) },
    { property: 'og:type', content: 'article' }
  ]
})
```

---

## 8. Content-Workflow

### 8.1 Neuen Artikel erstellen
1. Markdown-Datei in `src/content/blog/` anlegen
   - Naming: `YYYY-MM-DD-slug.md`
2. Preview-Bild in `public/images/blog/` hochladen
   - Empfohlen: 1200x630px (OG Image Standard)
   - Format: PNG/JPG, max 500KB
3. Metadaten in `blog-metadata.json` eintragen
4. Git Commit & Push → Auto-Deploy

### 8.2 SEO-Checkliste pro Artikel
- [ ] Titel: 50-60 Zeichen
- [ ] Meta-Description: 150-160 Zeichen
- [ ] Preview-Bild: 1200x630px, < 500KB
- [ ] Alt-Text für Bild
- [ ] 3-5 relevante Tags
- [ ] Interne Links zu anderen Artikeln
- [ ] Code-Beispiele mit Syntax-Highlighting
- [ ] Strukturierte Überschriften (H2, H3)

---

## 9. Performance & Optimierung

### 9.1 Lazy Loading
```javascript
// Nur erste 3 Artikel auf Startseite laden
const recentPosts = computed(() => allPosts.slice(0, 3))

// Infinite Scroll auf Blog-Seite
const { list, containerProps, wrapperProps } = useVirtualList(allPosts, { itemHeight: 300 })
```

### 9.2 Image Optimization
```bash
# WebP-Konvertierung für Preview-Bilder
npm install vite-plugin-webp

# vite.config.js
import webp from 'vite-plugin-webp'

plugins: [
  webp({
    quality: 80
  })
]
```

### 9.3 Static Generation
```javascript
// Artikel als statische HTML-Seiten vorrendern
// Via vite-ssg oder vite-plugin-ssr
npm install vite-ssg
```

---

## 10. Analytics & Tracking

### 10.1 Metriken
- Page Views pro Artikel
- Reading Time (tatsächlich vs. geschätzt)
- Social Share Clicks
- Scroll Depth
- Exit Rate

### 10.2 Tools
- **Plausible Analytics** (Privacy-First)
- **Google Search Console** (SEO)
- **Bitly** (Link Tracking für Social Media)

---

## 11. Roadmap

### Phase 1: MVP (Woche 1)
- [x] Workpaper erstellt
- [ ] Komponenten-Struktur aufsetzen
- [ ] BlogList.vue implementieren
- [ ] BlogPost.vue Template erstellen
- [ ] Markdown-Loader einrichten
- [ ] Meta-Tags dynamisch setzen

### Phase 2: Content & Design (Woche 2)
- [ ] 3 Demo-Artikel schreiben
- [ ] Preview-Bilder erstellen
- [ ] ShareButtons.vue implementieren
- [ ] Mobile Optimierung
- [ ] Syntax Highlighting

### Phase 3: Advanced Features (Woche 3-4)
- [ ] Table of Contents Auto-Generation
- [ ] Related Posts Algorithmus
- [ ] Reading Progress Bar
- [ ] Kommentar-System (Giscus)
- [ ] Newsletter-Signup (optional)

### Phase 4: SEO & Launch (Woche 5)
- [x] Alle Meta-Tags validieren (OpenGraph Debugger)
- [ ] Google Search Console einrichten
- [ ] Sitemap.xml generieren
- [ ] RSS-Feed erstellen
- [ ] Social Media Ankündigung

---

## 14. Social Media Link-Vorschauen - Implementierung 02.12.2025

### 14.1 Problem & Lösung

**Herausforderung bei SPAs:**
Vue.js nutzt Hash-Routing (`#blog`), was Social Media Crawler nicht verarbeiten können. Dynamische Meta-Tags via JavaScript werden ignoriert.

**Gewählte Lösung: Static HTML Landing Pages (Option C)**
- Separate HTML-Datei pro Artikel mit vollständigen Meta-Tags
- Automatischer Redirect zur Vue.js App nach 0ms
- Crawler sehen statisches HTML, User erleben SPA

### 14.2 Implementierte Dateien

**Static Landing Page:**
```
blog-vom-code-zum-architekten.html
```

**Enthält:**
- Open Graph Meta-Tags (LinkedIn, Facebook)
- Twitter Card Meta-Tags
- Article-spezifische Metadaten (Autor, Datum, Kategorie)
- Preview-Bild: `images/blog/architekten-preview.png` (1200x630px)
- Auto-Redirect: `meta http-equiv="refresh"` + JavaScript-Fallback
- Branded Loading-Screen (DEVmatrose Design)

### 14.3 URL-Flow

**Shareable URL:**
```
https://devmatrose.github.io/devmatrose/blog-vom-code-zum-architekten.html
```

**Redirect-Ziel:**
```
https://devmatrose.github.io/devmatrose/#blog?article=vom-code-zum-architekten
```

**BlogTab.vue liest URL-Parameter:**
```javascript
const checkUrlForArticle = () => {
  const urlParams = new URLSearchParams(window.location.hash.split('?')[1])
  const articleSlug = urlParams.get('article')
  if (articleSlug === 'vom-code-zum-architekten') {
    selectedPost.value = { component: '02-12-25-Vom-Code-zum-Architekten' }
  }
}
```

### 14.4 "Link teilen" Button

**Location:** Artikel-Header neben Meta-Info
**Funktionalität:**
- Kopiert Static HTML URL in Clipboard
- Visuelles Feedback (Icon-Wechsel + Text)
- 3-Sekunden-Timeout zurück zum Default-State

```javascript
const copyArticleLink = async () => {
  const articleUrl = `${window.location.origin}${basePath}blog-vom-code-zum-architekten.html`
  await navigator.clipboard.writeText(articleUrl)
  linkCopied.value = true
  setTimeout(() => linkCopied.value = false, 3000)
}
```

### 14.5 Meta-Tags Template

**Vollständige Meta-Tags für optimale Previews:**
```html
<!-- SEO -->
<title>Artikeltitel | DEVmatrose</title>
<meta name="description" content="...">
<link rel="canonical" href="...">

<!-- Open Graph (LinkedIn, Facebook) -->
<meta property="og:type" content="article">
<meta property="og:site_name" content="DEVmatrose - Die Architekturschmiede">
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:image" content="https://devmatrose.github.io/devmatrose/images/blog/preview.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:url" content="...">
<meta property="article:published_time" content="2025-12-02T00:00:00Z">
<meta property="article:author" content="DEVmatrose">
<meta property="article:section" content="Kategorie">
<meta property="article:tag" content="Tag1">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@devmatrose">
<meta name="twitter:title" content="...">
<meta name="twitter:description" content="...">
<meta name="twitter:image" content="...">
<meta name="twitter:image:alt" content="...">
```

### 14.6 Workflow für neue Artikel

**Schritt-für-Schritt:**
1. Vue-Komponente schreiben: `src/components/blog/article/YYYY-MM-DD-Titel.vue`
2. Bilder erstellen:
   - Preview: 1200x630px PNG in `public/images/blog/`
   - Hero: Beliebige Größe für Artikel-Header
3. `blog-metadata.json` updaten
4. Static HTML erstellen:
   - Template `blog-vom-code-zum-architekten.html` kopieren
   - Meta-Tags anpassen (Titel, Beschreibung, Bild-URLs)
   - Redirect-URL mit neuem Slug updaten
5. `BlogTab.vue` erweitern:
   - Import der neuen Komponente
   - `articleComponents` Object erweitern
   - `checkUrlForArticle()` um neuen Slug erweitern
6. Testing:
   - Open Graph Debugger: https://www.opengraph.xyz/
   - LinkedIn Post Inspector
   - Twitter Card Validator
7. Git Commit & Push

### 14.7 Testing Tools

**Validation:**
- LinkedIn: https://www.linkedin.com/post-inspector/
- Facebook: https://developers.facebook.com/tools/debug/
- Twitter: https://cards-dev.twitter.com/validator
- General OG: https://www.opengraph.xyz/

**Test-Prozess:**
1. URL in Tool eingeben
2. Preview validieren (Bild, Titel, Beschreibung)
3. Bei Bedarf Cache clearen ("Fetch new information")
4. Erneut testen

### 14.8 Bildanforderungen

**Social Media Preview-Bilder:**
- Format: PNG oder JPG
- Größe: 1200x630px (Open Graph Standard)
- Max. Dateigröße: < 500KB
- Optimiert für Text-Lesbarkeit (Kontrast, Schriftgröße)
- Branding: DEVmatrose Logo + Farbschema

**Für ersten Artikel:**
- ✅ `architekten-preview.png` - Fraktal-Architektur-Visualisierung
- ✅ `architekten-hero.png` - Artikel-Header-Bild

### 14.9 Vorteile dieser Lösung

**SEO & Performance:**
- ✅ Perfekte Social Media Previews auf allen Plattformen
- ✅ Crawler sehen statisches HTML (instant load)
- ✅ User erleben Vue SPA (smooth interactions)
- ✅ Canonical URLs pro Artikel
- ✅ Funktioniert auch ohne JavaScript (Accessibility)

**Entwickler-Erfahrung:**
- ✅ Kein komplexes Prerendering nötig
- ✅ Einfaches Template-System (Copy & Paste)
- ✅ Skaliert für 10-50 Artikel problemlos
- ✅ Git-tracked (versioniert, reviewbar)

**Wartung:**
- ✅ Updates: Nur Static HTML ändern, Git Push
- ✅ Neue Artikel: Template kopieren, anpassen
- ✅ Debugging: Browser DevTools + OG Debugger

### 14.10 Bekannte Limitationen

**Edge Cases:**
- Bei >50 Artikeln wird manuelles Template-Management aufwändig
  → Lösung: Migration zu vite-ssg oder ähnlichem Prerendering-Tool
- Cache-Issues bei Social Media Plattformen
  → Lösung: Force Rescrape via Debugging-Tools

**Nicht implementiert (vorerst):**
- Automatische HTML-Generierung aus Metadaten
- Sitemap.xml mit allen Artikel-URLs
- RSS-Feed für Blog-Abonnements

---

**Status: ✅ Produktiv implementiert**
**Artikel: "Vom Coder zum Architekten"**
**Live-URL:** https://devmatrose.github.io/devmatrose/blog-vom-code-zum-architekten.html
**Implementierungsdatum:** 02.12.2025

---

## 12. Offene Fragen

1. **Kommentar-System?**
   - Giscus (GitHub Discussions)
   - Utterances (GitHub Issues)
   - Disqus (nicht DSGVO-konform)
   - Kein System (vorerst)

2. **Newsletter-Integration?**
   - Buttondown
   - ConvertKit
   - Mailchimp
   - Später entscheiden

3. **Kategorien?**
   - "Deep Dives" (technisch)
   - "Architecture Decisions" (Entscheidungen)
   - "Tools & Workflows" (Produktivität)
   - Weitere folgen

---

## 13. Technische Dependencies

```json
{
  "dependencies": {
    "marked": "^11.0.0",           // Markdown zu HTML
    "highlight.js": "^11.9.0",     // Syntax Highlighting
    "@vueuse/head": "^2.0.0"       // Meta-Tags Management
  },
  "devDependencies": {
    "vite-plugin-markdown": "^2.2.0",
    "vite-plugin-webp": "^1.0.0"
  }
}
```

---

**Status:** 📝 In Planung  
**Nächster Schritt:** Komponenten-Struktur aufsetzen  
**Letzte Aktualisierung:** 02.12.2025
