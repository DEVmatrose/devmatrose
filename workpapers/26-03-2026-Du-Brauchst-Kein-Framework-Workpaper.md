# Workpaper: Du brauchst kein Framework. Du brauchst eine Datei.

**Status:** In Bearbeitung  
**Datum:** 26. März 2026  
**Autor:** Ogerly – DEVmatrose  

---

## Artikeldaten

| Feld | Wert |
|------|------|
| **Titel** | Du brauchst kein Framework. Du brauchst eine Datei. |
| **Slug** | `du-brauchst-kein-framework` |
| **Datums-Prefix** | `26-03-26` |
| **Komponentenname** | `26-03-26-Du-Brauchst-Kein-Framework` |
| **Kategorie** | KI-Architektur & Praxis |
| **Lesezeit** | 10 min |
| **Tags** | AAMS, Kontextverlust, Tool Lock-in, Agent Memory, Open Source, Produktivität |
| **Excerpt** | Du nutzt KI und bist 10x produktiver. Cool. Aber weißt du, was Session 47 entschieden hat? Warum eine einzige Datei mehr Wert ist als jedes Framework. |
| **Meta-Description** | Kontextverlust bei KI-gestützter Entwicklung ist unsichtbar – bis er zuschlägt. AAMS löst das Problem mit einer einzigen Datei. Kein npm install, kein Vendor Lock-in. |

---

## Inhaltliche Struktur

1. **Hook:** "Du nutzt KI und bist 10x produktiver. Cool. Aber weißt du, was Session 47 entschieden hat?"
2. **Problem – Kontextverlust ist unsichtbar:** Nicht DU verlierst Kontext – dein Agent verliert ihn. Du kompensierst mit deinem Kopf. Das funktioniert – bis es nicht mehr funktioniert (Toolwechsel, neuer Kollege, 3 Monate Pause).
3. **Tool Lock-in als unsichtbares Problem:** .cursorrules, CLAUDE.md, .windsurfrules – jedes Tool bringt eigene Konventionen. Wer sich festlegt, schließt die anderen aus.
4. **Skalierung bricht manuelles Tracking:** 5 Sessions → kein Problem. 50 → du wiederholst Entscheidungen. 100 → der Agent halluziniert Lösungen für bereits gelöste Probleme.
5. **Die zweite Person ändert alles:** Dein Kontext im Kopf ist für niemand anderen lesbar. Nicht für den Kollegen, nicht für den Freelancer, nicht für den nächsten Agenten.
6. **Wendepunkt – Was AAMS wirklich ist:** Eine Datei. Null Dependencies. `curl -sO https://.../.agent.json` – fertig.
7. **Vier-Schichten-Modell als Disziplin:** Workpaper (was tue ich), Whitepaper (wie ist das System), Diary (warum wurde entschieden), Memory (was haben wir gelernt). Ein Agent braucht dasselbe wie ein Entwickler – nur explizit und persistent.
8. **Beweis – AAMS testet sich selbst:** 39+ Commits, 20+ Workpapers, 80+ LTM-Einträge. Kein Demo-Projekt – echte Dogfooding-History.
9. **Open Source, CC0, Public Domain:** Kein Vendor, kein Lock-in, keine Lizenzsorgen. Fork it, use it, build on it.
10. **Call to Action:** Ein curl. Eine Datei. Fertig.

## Stil

- Direkt, konfrontativ, provokant
- These → Problem → Wendepunkt → Lösung → Beweis → CTA
- Ansprache: "Du" – erfahrener Entwickler, nutzt KI produktiv
- Kein Gendern

---

## Dateien-Checkliste

- [ ] `src/components/blog/article/26-03-26-Du-Brauchst-Kein-Framework.vue`
- [ ] `public/blog-du-brauchst-kein-framework.html`
- [ ] `public/data/blog-metadata.json`
- [ ] `src/components/BlogTab.vue`
- [ ] `src/components/BlogArticle.vue`
- [ ] `vite.config.js` → blogSlugs
- [ ] Hero-Bild → `public/images/blog/aams-einedatei.png` ✅ vorhanden

---

## Deployment

- **Live-URL:** `https://devmatrose.github.io/devmatrose/blog/du-brauchst-kein-framework`
- **SEO-HTML:** `https://devmatrose.github.io/devmatrose/blog-du-brauchst-kein-framework.html`
