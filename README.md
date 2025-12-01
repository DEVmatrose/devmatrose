# DEVmatrose - Die Architekturschmiede

> Ich schreibe nicht nur Code, ich erschaffe Ökosysteme.

# [DEVmatrose bei GitHub](https://github.com/DEVmatrose)

Website für **DEVmatrose** - Senior Developer & Software-Architekt für digitale Ökosysteme.
## [DEVmatrose Webseite](https://github.com/DEVmatrose)
## 🕸️ Features

- **Interaktives Spiderweb Canvas**: Reaktiver Netzwerk-Hintergrund mit Mausverfolgung
- **Dark Mode Design**: Professionelle Hacker-Ästhetik mit Neon-Akzenten
- **Single Page Application**: Schnelle Navigation zwischen Tabs
- **Dynamische Inhalte**: JSON-basierte Datenhaltung für Projekte und Referenzen
- **Responsive Design**: Optimiert für alle Geräte

## 🚀 Tech Stack

- **Framework**: Vue.js 3 (Composition API)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + daisyUI
- **Hosting**: GitHub Pages
- **CI/CD**: GitHub Actions

## 💻 Development

### Prerequisites

- Node.js 20+
- npm

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Projekt-Struktur

```
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions Workflow
├── public/
│   └── data/
│       ├── projects.json       # Projekt-Datenbank
│       └── references.json     # Referenz-Datenbank
├── src/
│   ├── components/
│   │   ├── SpiderwebCanvas.vue # Interaktiver Hintergrund
│   │   ├── HomeTab.vue         # Home / Die Zentrale
│   │   ├── WorkTab.vue         # Arbeit & Forschung
│   │   ├── ReferencesTab.vue   # Wall of Trust
│   │   └── ContactTab.vue      # Kontakt / Frequenz
│   ├── App.vue                 # Hauptkomponente
│   ├── main.js                 # Entry Point
│   └── style.css               # Global Styles
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

## 🎨 Design-Konzept

**Leitmotiv**: "Die Spinne im digitalen Raum"

### Farbpalette

- **Background**: `#0a0f14` (Void)
- **Primary**: `#FF8C42` (Copper Orange)
- **Secondary**: `#00D9FF` (Cyber Cyan)
- **Accent**: `#ff0055` (Glitch Red)
- **Text**: `#e0e6ed` (Off-White)

### Interaktive Elemente

- Pulsierende Glow-Effekte
- Reaktives Spinnennetz-Canvas
- Smooth Transitions zwischen Tabs

## 📊 Content-Management

Die Inhalte werden über JSON-Dateien verwaltet:

### Projekte (`public/data/projects.json`)

```json
{
  "projects": [
    {
      "id": "projekt-id",
      "name": "Projekt Name",
      "description": "Beschreibung",
      "category": "Kategorie",
      "tags": ["Tag1", "Tag2"],
      "repository": "https://github.com/...",
      "highlight": true,
      "valueProposition": "Was macht dieses Projekt besonders?"
    }
  ]
}
```

### Referenzen (`public/data/references.json`)

```json
{
  "references": [
    {
      "id": 1,
      "client": "Kunde",
      "project": "Projekt",
      "year": "2024",
      "technologies": ["Tech1", "Tech2"],
      "description": "Beschreibung",
      "outcome": "Ergebnis"
    }
  ]
}
```

## 🚢 Deployment

Das Projekt wird automatisch über GitHub Actions auf GitHub Pages deployed:

1. Push to `main` branch
2. GitHub Actions baut die Anwendung
3. Deployment auf GitHub Pages

**Live URL**: `https://<username>.github.io`

## 📝 Lizenz

© 2025 DEVmatrose - Alle Rechte vorbehalten

## 🔗 Links

- GitHub: [@ogerly](https://github.com/ogerly)
- GitHub: [@DEVmatrose](https://github.com/DEVmatrose)

---

**Built with ❤️ and Vue.js**
