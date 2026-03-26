# Vorlage für neue Blog-Artikel – DEVmatrose

> **Diese Datei ist eine Checkliste und Vorlage.**  
> Sie dient als Leitfaden, damit beim Erstellen eines neuen Artikels nichts vergessen wird.
>
> **Siehe auch:** `workpapers/template für artikel vorlage.md` für Meta-Daten-Schema und Social-Media-Test-URLs.

---

## Checkliste: Neuen Blog-Artikel anlegen

### 1. Artikeldaten festlegen
- [ ] **Slug** bestimmen (URL-freundlich, Kleinbuchstaben, Bindestriche): z.B. `mein-neuer-artikel`
- [ ] **Datums-Prefix** für Dateinamen: `TT-MM-JJ` z.B. `17-02-26`
- [ ] **Komponentenname**: `TT-MM-JJ-Mein-Neuer-Artikel` (PascalCase nach Datum)
- [ ] **Titel**, **Excerpt**, **Meta-Description**, **Tags**, **Kategorie**, **Lesezeit**
- [ ] **Hero-Bild** erstellen/beschaffen (mind. 1200x630px für Social Media)
- [ ] **Social-Media-Vorschaubild** vorhanden – dasselbe Bild wird für og:image, twitter:image und JSON-LD verwendet!

### 2. Dateien erstellen/ändern (8 Stellen!)

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

#### H) ⚠️ Social-Media-Vorschaubild prüfen!
- [ ] Bild existiert unter `public/images/blog/` und ist **mind. 1200x630px**
- [ ] Bild-URL in `public/blog-slug.html` ist **absolute URL** mit vollem Pfad:  
  `https://devmatrose.github.io/devmatrose/images/blog/BILD.png`
- [ ] Bild-URL ist identisch in **allen 4 Stellen** der SEO-HTML:  
  → `og:image` + `og:image:secure_url` + `twitter:image` + JSON-LD `image`
- [ ] Bild-URL in `blog-metadata.json` → `image`-Feld (relativ: `/images/blog/BILD.png`)
- [ ] Bild-URL in Vue-Komponente → `useSEO({ image: ... })` (relativ: `/images/blog/BILD.png`)
- [ ] **Nach dem Push prüfen** mit https://www.opengraph.xyz/ ob das Bild angezeigt wird!

### 3. Build & Verify
- [ ] `npm run build` ausführen (generiert SSG-HTML in `docs/blog/`)
- [ ] Prüfen dass `docs/blog/mein-neuer-artikel.html` existiert
- [ ] Lokal testen: `npm run preview`
- [ ] Commit & Push

### 4. Nach dem Deploy prüfen
- [ ] Direkt-URL funktioniert: `https://devmatrose.github.io/devmatrose/blog/mein-neuer-artikel`
- [ ] Hash-URL funktioniert: `https://devmatrose.github.io/devmatrose/#/blog/mein-neuer-artikel`
- [ ] ⚠️ **Social-Media-Preview testen** (PFLICHT vor Teilen!):
  - [ ] https://www.opengraph.xyz/ → Vorschaubild wird korrekt angezeigt?
  - [ ] Titel, Beschreibung, Bild stimmen?
  - [ ] Falls kein Bild: Prüfe ob Bild-URL in `public/blog-slug.html` korrekt ist (absolute URL!)

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
| Social-Media-Bild fehlt | Bild nicht in `public/images/blog/` oder URL nicht absolut (`https://devmatrose.github.io/...`) |
| Bild nur teilweise sichtbar | Bild-URL nicht in allen 4 Stellen der SEO-HTML identisch (og:image, og:image:secure_url, twitter:image, JSON-LD) |

---

## Zusammenfassung: Diese 8 Stellen müssen angefasst werden

```
1. src/components/blog/article/TT-MM-JJ-Name.vue        ← NEU erstellen
2. public/blog-slug.html                                  ← NEU erstellen (SEO + Vorschaubild-URLs!)
3. public/data/blog-metadata.json                         ← Eintrag hinzufügen
4. src/components/BlogTab.vue                              ← Import + Mapping
5. src/components/BlogArticle.vue                          ← blogPosts + Mapping
6. vite.config.js                                          ← blogSlugs Array!
7. public/images/blog/bild.png                             ← Hero-/Vorschaubild ablegen
8. ⚠️ SOCIAL-MEDIA-VORSCHAU PRÜFEN                        ← opengraph.xyz nach Push!
```

> **Merke:** Das Bild muss in der SEO-HTML (`public/blog-slug.html`) als **absolute URL**  
> (`https://devmatrose.github.io/devmatrose/images/blog/BILD.png`) eingetragen sein.  
> In `blog-metadata.json` und der Vue-Komponente reicht der **relative Pfad** (`/images/blog/BILD.png`).
