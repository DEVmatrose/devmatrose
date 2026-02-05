# Workpaper: SSG Pre-Rendering für Social Media SEO

**Datum:** 05.02.2026  
**Projekt:** DEVmatrose Website  
**Repository:** https://github.com/DEVmatrose/devmatrose  
**Ziel:** Echte statische Seiten beim Build generieren für optimale Social Media SEO

---

## 1. Ausgangssituation

### Aktueller (Hybrid-)Ansatz
```
├── public/
│   ├── blog-keine-angst-vor-ki.html      ← Manuell gepflegt
│   ├── blog-pen-and-paper-rollenspiele.html
│   ├── blog-smart-editor-llm-tool.html
│   └── blog-vom-code-zum-architekten.html
├── src/components/blog/article/
│   ├── 02-12-25-Vom-Code-zum-Architekten.vue  ← Doppelt gepflegt
│   ├── 03-12-25-Smart-Editor-LLM-Tool.vue
│   ├── 04-12-25-Pen-And-Paper-Rollenspiele.vue
│   └── 05-02-26-Keine-Angst-Vor-KI.vue
└── public/data/blog-metadata.json         ← Dritte Quelle der Wahrheit
```

**Probleme:**
- 3 Stellen müssen bei jedem neuen Artikel gepflegt werden
- Statische HTML-Dateien sind Boilerplate mit Redirect-Logic
- Meta-Tags können divergieren
- Fehleranfällig bei Updates

### Ziel-Architektur mit SSG
```
├── src/
│   ├── content/blog/           ← EINE Quelle der Wahrheit (Markdown)
│   │   ├── keine-angst-vor-ki.md
│   │   ├── pen-and-paper-rollenspiele.md
│   │   └── ...
│   └── pages/                  ← Auto-generierte Routen
│       ├── index.vue
│       ├── blog/
│       │   ├── index.vue
│       │   └── [slug].vue      ← Dynamische Blog-Artikel
│       └── ...
└── dist/                       ← Build Output (statische HTML)
    ├── index.html
    ├── blog/
    │   ├── index.html
    │   ├── keine-angst-vor-ki/index.html  ← Vollständige HTML mit Meta-Tags
    │   └── ...
```

---

## 2. Technologie-Entscheidung

### Option A: vite-ssg
**Vorteile:**
- Speziell für Vue 3 + Vite
- Generiert statische HTML für jede Route
- Kompatibel mit vue-router
- Leichtgewichtig

**Nachteile:**
- Weniger Features als Nuxt
- Manuelle Konfiguration nötig

### Option B: vite-plugin-ssr (Vike)
**Vorteile:**
- Flexibel (SSR, SSG, SPA hybrid)
- Gute Dokumentation
- Aktive Community

**Nachteile:**
- Steile Lernkurve
- Mehr Boilerplate

### Option C: Nuxt 3 (Migration)
**Vorteile:**
- Vollständiges Framework
- Built-in SSG (`nuxt generate`)
- Automatische Meta-Tags
- Content-Modul für Markdown

**Nachteile:**
- Komplette Migration nötig
- Overhead für kleine Seite

### ✅ Empfehlung: vite-ssg + @unhead/vue

**Begründung:**
- `@unhead/vue` ist bereits installiert
- Minimaler Migrationsaufwand
- Behält aktuelle Struktur größtenteils bei
- Perfekt für GitHub Pages

---

## 3. Implementierungsplan

### Phase 1: vite-ssg Setup

#### 3.1.1 Installation
```bash
npm install vite-ssg @vueuse/head --save-dev
```

#### 3.1.2 vite.config.js anpassen
```javascript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/devmatrose/',
  
  // SSG-spezifische Konfiguration
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    // Alle Blog-Routen pre-rendern
    includedRoutes: (paths, routes) => {
      // Statische Routen
      const staticRoutes = ['/', '/work', '/blog', '/references', '/contact']
      
      // Dynamische Blog-Artikel aus Metadata laden
      // (wird in 3.1.4 implementiert)
      return [...staticRoutes, ...getBlogRoutes()]
    }
  }
})
```

#### 3.1.3 main.js zu main.ts migrieren (für vite-ssg)
```typescript
// src/main.ts
import { ViteSSG } from 'vite-ssg'
import { createHead } from '@unhead/vue'
import App from './App.vue'
import routes from './router/routes'
import './style.css'

export const createApp = ViteSSG(
  App,
  { 
    routes,
    base: '/devmatrose/',
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) return savedPosition
      return { top: 0 }
    }
  },
  ({ app, router, initialState }) => {
    const head = createHead()
    app.use(head)
  }
)
```

#### 3.1.4 Router-Routen extrahieren
```typescript
// src/router/routes.ts
import type { RouteRecordRaw } from 'vue-router'

// Lazy Loading für Code-Splitting
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/HomeTab.vue'),
    meta: {
      title: 'DEVmatrose - Die Architekturschmiede',
      description: 'Software-Architekt & Senior Developer. Ich erschaffe digitale Ökosysteme.'
    }
  },
  {
    path: '/work',
    name: 'work',
    component: () => import('../components/WorkTab.vue'),
    meta: {
      title: 'Arbeit - DEVmatrose',
      description: 'Projekte und Entwicklungsarbeit'
    }
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('../components/BlogTab.vue'),
    meta: {
      title: 'Blog - DEVmatrose',
      description: 'Deep Dives, Architektur-Entscheidungen und technische Insights'
    }
  },
  {
    path: '/blog/:slug',
    name: 'blog-article',
    component: () => import('../components/BlogArticle.vue'),
    // Meta-Tags werden dynamisch in der Komponente gesetzt
  },
  {
    path: '/references',
    name: 'references',
    component: () => import('../components/ReferencesTab.vue'),
    meta: {
      title: 'Referenzen - DEVmatrose',
      description: 'Kundenfeedback und Projektreferenzen'
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../components/ContactTab.vue'),
    meta: {
      title: 'Kontakt - DEVmatrose',
      description: 'Kontaktmöglichkeiten'
    }
  }
]

export default routes
```

---

### Phase 2: Dynamische Meta-Tags mit @unhead/vue

#### 3.2.1 Zentrale SEO-Composable erstellen
```typescript
// src/composables/useSEO.ts
import { useHead, useSeoMeta } from '@unhead/vue'
import { computed } from 'vue'

interface SEOOptions {
  title: string
  description: string
  image?: string
  url?: string
  type?: 'website' | 'article'
  author?: string
  publishedTime?: string
  tags?: string[]
}

const BASE_URL = 'https://devmatrose.github.io/devmatrose'

export function useSEO(options: SEOOptions) {
  const fullTitle = computed(() => 
    options.title.includes('DEVmatrose') 
      ? options.title 
      : `${options.title} - DEVmatrose`
  )
  
  const imageUrl = computed(() => 
    options.image?.startsWith('http') 
      ? options.image 
      : `${BASE_URL}${options.image || '/images/og-default.png'}`
  )
  
  const pageUrl = computed(() => 
    options.url 
      ? `${BASE_URL}${options.url}` 
      : BASE_URL
  )

  // Basis-Head-Tags
  useHead({
    title: fullTitle,
    link: [
      { rel: 'canonical', href: pageUrl }
    ]
  })

  // SEO Meta-Tags (Open Graph + Twitter)
  useSeoMeta({
    // Basis
    title: fullTitle,
    description: options.description,
    
    // Open Graph
    ogTitle: fullTitle,
    ogDescription: options.description,
    ogImage: imageUrl,
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogUrl: pageUrl,
    ogType: options.type || 'website',
    ogSiteName: 'DEVmatrose',
    ogLocale: 'de_DE',
    
    // Twitter Card
    twitterCard: 'summary_large_image',
    twitterSite: '@devmatrose',
    twitterCreator: '@ogerly',
    twitterTitle: fullTitle,
    twitterDescription: options.description,
    twitterImage: imageUrl,
    
    // Artikel-spezifisch
    ...(options.type === 'article' && {
      articleAuthor: options.author,
      articlePublishedTime: options.publishedTime,
      articleTag: options.tags
    })
  })
}
```

#### 3.2.2 BlogArticle.vue mit dynamischen Meta-Tags
```vue
<!-- src/components/BlogArticle.vue -->
<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useSEO } from '../composables/useSEO'

const route = useRoute()
const router = useRouter()

const article = ref(null)
const loading = ref(true)

// Artikel-Metadaten laden
async function loadArticle(slug: string) {
  loading.value = true
  try {
    const response = await fetch('/devmatrose/data/blog-metadata.json')
    const data = await response.json()
    article.value = data.posts.find(p => p.slug === slug)
    
    if (!article.value) {
      router.push('/blog')
      return
    }
    
    // SEO-Tags setzen
    useSEO({
      title: article.value.title,
      description: article.value.excerpt,
      image: article.value.image,
      url: `/blog/${article.value.slug}`,
      type: 'article',
      author: article.value.author,
      publishedTime: article.value.date,
      tags: article.value.tags
    })
  } catch (error) {
    console.error('Failed to load article:', error)
  } finally {
    loading.value = false
  }
}

// Artikel-Komponente dynamisch laden
const ArticleComponent = computed(() => {
  if (!article.value?.component) return null
  
  // Dynamic import basierend auf component-Name
  const components = {
    '02-12-25-Vom-Code-zum-Architekten': () => import('./blog/article/02-12-25-Vom-Code-zum-Architekten.vue'),
    '03-12-25-Smart-Editor-LLM-Tool': () => import('./blog/article/03-12-25-Smart-Editor-LLM-Tool.vue'),
    '04-12-25-Pen-And-Paper-Rollenspiele': () => import('./blog/article/04-12-25-Pen-And-Paper-Rollenspiele.vue'),
    '05-02-26-Keine-Angst-Vor-KI': () => import('./blog/article/05-02-26-Keine-Angst-Vor-KI.vue'),
  }
  
  return components[article.value.component]
})

watch(() => route.params.slug, (newSlug) => {
  if (newSlug) loadArticle(newSlug as string)
}, { immediate: true })
</script>

<template>
  <div v-if="loading" class="flex justify-center items-center min-h-[50vh]">
    <span class="loading loading-spinner loading-lg text-copper-orange"></span>
  </div>
  
  <template v-else-if="article">
    <Suspense>
      <component :is="ArticleComponent" />
      <template #fallback>
        <div class="flex justify-center py-12">
          <span class="loading loading-spinner loading-lg text-copper-orange"></span>
        </div>
      </template>
    </Suspense>
  </template>
  
  <div v-else class="text-center py-12">
    <p class="text-off-white/60">Artikel nicht gefunden</p>
  </div>
</template>
```

---

### Phase 3: Build-Konfiguration für SSG

#### 3.3.1 package.json Scripts anpassen
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite-ssg build",
    "preview": "vite preview",
    "generate": "vite-ssg build"
  }
}
```

#### 3.3.2 Blog-Routen für Pre-Rendering generieren
```typescript
// src/utils/getBlogRoutes.ts
import blogMetadata from '../../public/data/blog-metadata.json'

export function getBlogRoutes(): string[] {
  return blogMetadata.posts.map(post => `/blog/${post.slug}`)
}
```

#### 3.3.3 vite.config.js finale Version
```javascript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  base: '/devmatrose/',
  
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true
  },
  
  // SSG Options (verwendet von vite-ssg)
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    crittersOptions: {
      preload: 'swap'
    },
    onFinished() {
      console.log('✅ SSG Build completed!')
    }
  }
})
```

---

### Phase 4: GitHub Pages Deployment

#### 3.4.1 GitHub Actions Workflow
```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build with SSG
        run: npm run build
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

---

## 4. Migration Checklist

### Vorbereitungen
- [ ] Backup des aktuellen Projekts erstellen
- [ ] Git Branch für Migration anlegen: `git checkout -b feature/ssg-migration`

### Phase 1: vite-ssg Setup
- [ ] `npm install vite-ssg @vueuse/head --save-dev`
- [ ] `vite.config.js` anpassen
- [ ] `main.js` zu `main.ts` konvertieren (oder `.js` mit ViteSSG)
- [ ] Router-Routen in separate Datei extrahieren

### Phase 2: SEO Composables
- [ ] `src/composables/useSEO.ts` erstellen
- [ ] `BlogArticle.vue` Komponente erstellen
- [ ] Meta-Tags aus Artikel-Komponenten entfernen (optional, da @unhead überschreibt)

### Phase 3: Build & Test
- [ ] `npm run build` ausführen
- [ ] Generierte HTML-Dateien prüfen (Meta-Tags vorhanden?)
- [ ] Lokal mit `npm run preview` testen
- [ ] Social Media Debugger testen:
  - Facebook: https://developers.facebook.com/tools/debug/
  - Twitter: https://cards-dev.twitter.com/validator
  - LinkedIn: https://www.linkedin.com/post-inspector/

### Phase 4: Cleanup
- [ ] Statische HTML-Dateien aus `public/` entfernen:
  - `blog-keine-angst-vor-ki.html`
  - `blog-pen-and-paper-rollenspiele.html`
  - `blog-smart-editor-llm-tool.html`
  - `blog-vom-code-zum-architekten.html`
- [ ] GitHub Actions Workflow hinzufügen
- [ ] Merge zu `main` und Deploy

---

## 5. Erwartetes Ergebnis

### Vorher (Hybrid)
```
Social Media teilt: blog-keine-angst-vor-ki.html
  → Lädt statische HTML mit Meta-Tags
  → Redirect zu Vue SPA
  → Vue rendert Artikel
```

### Nachher (SSG)
```
Social Media teilt: /blog/keine-angst-vor-ki/
  → Crawler erhält vollständige HTML mit Meta-Tags
  → Hydration aktiviert Vue-Interaktivität
  → Keine Redirects, keine doppelte Pflege
```

### Build Output Struktur
```
dist/
├── index.html                           ← Home mit vollständigen Meta-Tags
├── work/index.html
├── blog/
│   ├── index.html                       ← Blog-Übersicht
│   ├── keine-angst-vor-ki/index.html    ← Artikel mit Meta-Tags
│   ├── pen-and-paper-rollenspiele/index.html
│   ├── smart-editor-llm-tool/index.html
│   └── vom-code-zum-architekten/index.html
├── references/index.html
├── contact/index.html
├── data/
│   └── blog-metadata.json
├── images/
│   └── ...
└── assets/
    └── ... (JS, CSS Bundles)
```

---

## 6. Fallback-Plan

Falls SSG Probleme macht (z.B. mit dynamischen Komponenten):

### Alternative: Manuelles Pre-Rendering Script
```javascript
// scripts/generate-seo-pages.js
import fs from 'fs'
import path from 'path'
import blogMetadata from '../public/data/blog-metadata.json'

const BASE_URL = 'https://devmatrose.github.io/devmatrose'

function generateMetaTags(post) {
  return `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${post.title} - DEVmatrose</title>
  <meta name="description" content="${post.excerpt}">
  
  <!-- Open Graph -->
  <meta property="og:title" content="${post.title}">
  <meta property="og:description" content="${post.excerpt}">
  <meta property="og:image" content="${BASE_URL}${post.image}">
  <meta property="og:url" content="${BASE_URL}/blog/${post.slug}">
  <meta property="og:type" content="article">
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${post.title}">
  <meta name="twitter:description" content="${post.excerpt}">
  <meta name="twitter:image" content="${BASE_URL}${post.image}">
  
  <!-- Redirect zum SPA (nur für alte Crawler) -->
  <link rel="canonical" href="${BASE_URL}/#/blog/${post.slug}">
  <script>window.location.href = '${BASE_URL}/#/blog/${post.slug}';</script>
</head>
<body>
  <noscript>
    <meta http-equiv="refresh" content="0;url=${BASE_URL}/#/blog/${post.slug}">
  </noscript>
</body>
</html>`
}

// Für jeden Blog-Post eine HTML-Datei generieren
blogMetadata.posts.forEach(post => {
  const html = generateMetaTags(post)
  const filePath = path.join('public', `blog-${post.slug}.html`)
  fs.writeFileSync(filePath, html)
  console.log(`✅ Generated: ${filePath}`)
})
```

---

## 7. Nächste Schritte

1. **Entscheidung:** Soll ich mit der Implementierung von Phase 1 beginnen?
2. **Fragen klären:**
   - Soll TypeScript eingeführt werden oder bei JavaScript bleiben?
   - Sollen die Artikel-Komponenten zu Markdown migriert werden (Phase 5)?

---

**Geschätzte Implementierungszeit:** 2-4 Stunden für Basis-SSG

**Autor:** GitHub Copilot  
**Status:** 📋 Geplant
