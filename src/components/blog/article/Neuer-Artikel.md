# Vorlage für neue Blog-Artikel – DEVmatrose

> **Diese Datei ist eine Checkliste und Vorlage.**  
> Sie dient als Leitfaden, damit beim Erstellen eines neuen Artikels nichts vergessen wird.

---

## Checkliste: Neuen Blog-Artikel anlegen

### 1. Artikeldaten festlegen
- [ ] **Slug** bestimmen (URL-freundlich, Kleinbuchstaben, Bindestriche): z.B. `mein-neuer-artikel`
- [ ] **Datums-Prefix** für Dateinamen: `TT-MM-JJ` z.B. `17-02-26`
- [ ] **Komponentenname**: `TT-MM-JJ-Mein-Neuer-Artikel` (PascalCase nach Datum)
- [ ] **Titel**, **Excerpt**, **Meta-Description**, **Tags**, **Kategorie**, **Lesezeit**
- [ ] **Hero-Bild** erstellen/beschaffen (mind. 1200x630px für Social Media)

### 2. Dateien erstellen/ändern (7 Stellen!)

#### A) Vue-Artikel-Komponente erstellen
- [ ] `src/components/blog/article/TT-MM-JJ-Mein-Neuer-Artikel.vue`  
  → Struktur von bestehenden Artikeln kopieren (Hero, Breadcrumb, Tags, Content, SEO)

#### B) Statische SEO-HTML erstellen (für Social-Media-Crawler)
- [ ] `public/blog-mein-neuer-artikel.html`  
  → Redirect-Seite mit allen Meta-Tags (OG, Twitter, JSON-LD)  
  → **Vorschaubild-URL korrekt setzen** für og:image, twitter:image, etc.

#### C) blog-metadata.json aktualisieren
- [ ] `public/data/blog-metadata.json`  
  → Neuen Eintrag **als erstes Element** im `posts`-Array einfügen  
  → Felder: id, title, slug, date, author, excerpt, category, tags, readTime, featured, image, imageAlt, metaDescription, component, socialMedia

#### D) BlogTab.vue registrieren
- [ ] `src/components/BlogTab.vue`  
  → Import des neuen Komponenten hinzufügen  
  → In `articleComponents`-Mapping eintragen (als erstes Element)

#### E) BlogArticle.vue registrieren
- [ ] `src/components/BlogArticle.vue`  
  → In `blogPosts`-Array als erstes Element eintragen  
  → In `articleComponents`-Mapping mit `defineAsyncComponent` eintragen

#### F) ⚠️ vite.config.js – SSG-Slug eintragen!
- [ ] `vite.config.js` → `blogSlugs`-Array  
  → **Den Slug des neuen Artikels hinzufügen!**  
  → Ohne diesen Schritt wird die Seite unter `/blog/slug` **nicht pre-gerendert** und ist **404**!

#### G) Hero-Bild ablegen
- [ ] `public/images/blog/mein-bild.png` (für Dev-Server + wird beim Build nach docs/ kopiert)

### 3. Build & Verify
- [ ] `npm run build` ausführen (generiert SSG-HTML in `docs/blog/`)
- [ ] Prüfen dass `docs/blog/mein-neuer-artikel.html` existiert
- [ ] Lokal testen: `npm run preview`
- [ ] Commit & Push

### 4. Nach dem Deploy prüfen
- [ ] Direkt-URL funktioniert: `https://devmatrose.github.io/devmatrose/blog/mein-neuer-artikel`
- [ ] Hash-URL funktioniert: `https://devmatrose.github.io/devmatrose/#/blog/mein-neuer-artikel`
- [ ] Social-Media-Preview testen (z.B. https://www.opengraph.xyz/)

---

## Dateinamen-Konvention

| Datei | Beispiel |
|-------|---------|
| Vue-Komponente | `src/components/blog/article/17-02-26-Von-Code-Zu-Kontext-Agenten-Navigation.vue` |
| Static HTML | `public/blog-von-code-zu-kontext-agenten-navigation.html` |
| Hero-Bild | `public/images/blog/agenten-im-repro.png` |
| SSG-Output | `docs/blog/von-code-zu-kontext-agenten-navigation.html` (automatisch) |

---

## Häufige Fehler

| Problem | Ursache |
|---------|---------|
| **404 auf `/blog/slug`** | Slug fehlt in `vite.config.js` → `blogSlugs` |
| Artikel erscheint nicht in Liste | Eintrag fehlt in `blog-metadata.json` |
| Klick auf Artikel zeigt weiße Seite | Komponente nicht in `BlogTab.vue` oder `BlogArticle.vue` registriert |
| Kein Social-Media-Preview | `public/blog-slug.html` fehlt oder Bild-URL falsch |

---

## Zusammenfassung: Diese 7 Dateien müssen angefasst werden

```
1. src/components/blog/article/TT-MM-JJ-Name.vue        ← NEU erstellen
2. public/blog-slug.html                                  ← NEU erstellen (SEO)
3. public/data/blog-metadata.json                         ← Eintrag hinzufügen
4. src/components/BlogTab.vue                              ← Import + Mapping
5. src/components/BlogArticle.vue                          ← blogPosts + Mapping
6. vite.config.js                                          ← blogSlugs Array!
7. public/images/blog/bild.png                             ← Hero-Bild ablegen
```
