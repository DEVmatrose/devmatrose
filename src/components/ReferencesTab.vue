<template>
  <div class="container mx-auto py-12 px-4">

    <!-- ═══════════════════════════════════════ -->
    <!-- HERO SECTION                            -->
    <!-- ═══════════════════════════════════════ -->
    <div class="relative mb-16 rounded-2xl overflow-hidden border border-copper-orange/20">
      <img
        :src="`${basePath}images/references/image.png`"
        alt="DEVmatrose - Navigating the Digital Ocean"
        class="w-full h-56 md:h-[400px] object-cover object-center"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-base-100 via-base-100/60 to-transparent"></div>
      <div class="absolute bottom-0 left-0 right-0 p-6 md:p-10">
        <h1 class="text-3xl md:text-5xl font-bold terminal-font text-copper-orange mb-3">
          <span class="glow-pulse">Open Source &amp; Referenzen</span>
        </h1>
        <p class="text-base md:text-lg text-off-white/80 max-w-3xl leading-relaxed">
          125+ Repositories · 1.486 Contributions im letzten Jahr<br class="hidden md:block" />
          KI-Agenten · Mesh-Netzwerke · IPFS · Nostr · Dezentrale Systeme
        </p>
      </div>
    </div>

    <!-- ═══════════════════════════════════════ -->
    <!-- GITHUB PROFILE OVERVIEW                 -->
    <!-- ═══════════════════════════════════════ -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-20">

      <!-- DEVmatrose Profile Card -->
      <a href="https://github.com/DEVmatrose" target="_blank" rel="noopener noreferrer"
        class="card bg-base-200 border border-copper-orange/20 hover:border-copper-orange/50 transition-all duration-500 group cursor-pointer no-underline"
      >
        <div class="card-body">
          <div class="flex items-center gap-4 mb-4">
            <img
              src="https://avatars.githubusercontent.com/u/203218814?s=200&v=4"
              alt="DEVmatrose"
              class="w-14 h-14 rounded-full border-2 border-copper-orange/40 group-hover:border-copper-orange transition-all"
            />
            <div class="flex-1 min-w-0">
              <h2 class="text-xl md:text-2xl font-bold terminal-font text-copper-orange">DEVmatrose</h2>
              <p class="text-off-white/50 text-sm">Organisation · Firma · Dresden</p>
            </div>
            <div class="bg-base-300 rounded-lg px-3 py-2 border border-copper-orange/15 text-center shrink-0">
              <span class="text-2xl font-bold text-copper-orange block leading-tight">22</span>
              <span class="text-off-white/40 text-[10px] uppercase tracking-wider">Repos</span>
            </div>
          </div>

          <p class="text-off-white/70 text-sm leading-relaxed mb-4">
            ⚓ We Architect Economic Moats — Maßgeschneiderte Software-Architektur,
            KI-Integration und dezentrale Systeme. Von der Vision bis zur Schlüsselübergabe.
          </p>

          <div class="flex flex-wrap gap-1.5">
            <span class="badge badge-xs bg-[#41b883]/15 text-[#41b883] border-[#41b883]/25">Vue</span>
            <span class="badge badge-xs bg-[#3572A5]/15 text-[#6d9fdb] border-[#3572A5]/25">Python</span>
            <span class="badge badge-xs bg-[#f1e05a]/15 text-[#f1e05a] border-[#f1e05a]/25">JavaScript</span>
            <span class="badge badge-xs bg-[#e34c26]/15 text-[#e34c26] border-[#e34c26]/25">HTML</span>
          </div>
        </div>
      </a>

      <!-- ogerly Profile Card -->
      <a href="https://github.com/ogerly" target="_blank" rel="noopener noreferrer"
        class="card bg-base-200 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-500 group cursor-pointer no-underline"
      >
        <div class="card-body">
          <div class="flex items-center gap-4 mb-4">
            <img
              src="https://avatars.githubusercontent.com/u/1324583?s=200&v=4"
              alt="ogerly"
              class="w-14 h-14 rounded-full border-2 border-cyan-500/40 group-hover:border-cyan-500 transition-all"
            />
            <div class="flex-1 min-w-0">
              <h2 class="text-xl md:text-2xl font-bold terminal-font text-cyan-400">ogerly</h2>
              <p class="text-off-white/50 text-sm">Alexander Friedland · Persönlich</p>
            </div>
            <div class="bg-base-300 rounded-lg px-3 py-2 border border-cyan-500/15 text-center shrink-0">
              <span class="text-2xl font-bold text-cyan-400 block leading-tight">103</span>
              <span class="text-off-white/40 text-[10px] uppercase tracking-wider">Repos</span>
            </div>
          </div>

          <p class="text-off-white/70 text-sm leading-relaxed mb-4">
            Full-Stack-Entwickler seit 1999 — 1.486 Contributions im letzten Jahr,
            44 Followers. KI-Agenten, Mesh-Netzwerke, dezentrale Protokolle und Open Source.
          </p>

          <div class="flex flex-wrap gap-1.5">
            <span class="badge badge-xs bg-[#41b883]/15 text-[#41b883] border-[#41b883]/25">Vue</span>
            <span class="badge badge-xs bg-[#3572A5]/15 text-[#6d9fdb] border-[#3572A5]/25">Python</span>
            <span class="badge badge-xs bg-[#f1e05a]/15 text-[#f1e05a] border-[#f1e05a]/25">JavaScript</span>
            <span class="badge badge-xs bg-[#3178c6]/15 text-[#5a9fd4] border-[#3178c6]/25">TypeScript</span>
            <span class="badge badge-xs bg-[#dea584]/15 text-[#dea584] border-[#dea584]/25">Rust</span>
          </div>
        </div>
      </a>
    </div>

    <!-- ═══════════════════════════════════════ -->
    <!-- DEVmatrose REPOSITORIES                 -->
    <!-- ═══════════════════════════════════════ -->
    <section class="mb-20">
      <div class="flex items-baseline gap-3 mb-2">
        <h2 class="text-2xl md:text-3xl font-bold terminal-font text-copper-orange">DEVmatrose</h2>
        <span class="text-off-white/20">·</span>
        <span class="text-off-white/40 text-sm">Angepinnte Repositories</span>
      </div>
      <p class="text-off-white/50 text-sm mb-8">
        Professionelle Architektur — Auftragsarbeit, Tools und Systemlösungen
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        <a
          v-for="repo in devmatroseRepos"
          :key="repo.name"
          :href="repo.url"
          target="_blank"
          rel="noopener noreferrer"
          class="card bg-base-200 border border-copper-orange/10 hover:border-copper-orange/40 transition-all duration-300 group cursor-pointer no-underline"
        >
          <div class="card-body p-5">
            <div class="flex items-start justify-between mb-2">
              <h3 class="text-base font-semibold text-copper-orange group-hover:text-copper-orange/80 terminal-font leading-tight">
                {{ repo.name }}
              </h3>
              <svg class="w-4 h-4 text-off-white/30 group-hover:text-copper-orange shrink-0 ml-2 mt-0.5 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
            <p class="text-off-white/60 text-xs leading-relaxed mb-3 min-h-[2.5rem]">
              {{ repo.description }}
            </p>
            <div class="flex items-center gap-3 mt-auto">
              <span v-if="repo.language" class="flex items-center gap-1.5 text-xs text-off-white/50">
                <span class="w-2.5 h-2.5 rounded-full" :style="{ backgroundColor: repo.langColor }"></span>
                {{ repo.language }}
              </span>
              <span v-if="repo.stars" class="flex items-center gap-1 text-xs text-off-white/40">
                <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 16 16"><path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z"/></svg>
                {{ repo.stars }}
              </span>
              <span v-if="repo.forks" class="flex items-center gap-1 text-xs text-off-white/40">
                <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 16 16"><path d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"/></svg>
                {{ repo.forks }}
              </span>
              <span v-if="repo.license" class="text-xs text-off-white/30 ml-auto">{{ repo.license }}</span>
            </div>
          </div>
        </a>
      </div>
    </section>

    <!-- ═══════════════════════════════════════ -->
    <!-- ogerly REPOSITORIES                     -->
    <!-- ═══════════════════════════════════════ -->
    <section class="mb-20">
      <div class="flex items-baseline gap-3 mb-2">
        <h2 class="text-2xl md:text-3xl font-bold terminal-font text-cyan-400">ogerly</h2>
        <span class="text-off-white/20">·</span>
        <span class="text-off-white/40 text-sm">Angepinnte Repositories</span>
      </div>
      <p class="text-off-white/50 text-sm mb-8">
        Persönliche Projekte — KI-Agenten, Mesh-Netzwerke, dezentrale Systeme
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        <a
          v-for="repo in ogerlyRepos"
          :key="repo.name"
          :href="repo.url"
          target="_blank"
          rel="noopener noreferrer"
          class="card bg-base-200 border border-cyan-500/10 hover:border-cyan-500/40 transition-all duration-300 group cursor-pointer no-underline"
        >
          <div class="card-body p-5">
            <div class="flex items-start justify-between mb-2">
              <h3 class="text-base font-semibold text-cyan-400 group-hover:text-cyan-300 terminal-font leading-tight">
                {{ repo.name }}
              </h3>
              <svg class="w-4 h-4 text-off-white/30 group-hover:text-cyan-400 shrink-0 ml-2 mt-0.5 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
            <p class="text-off-white/60 text-xs leading-relaxed mb-3 min-h-[2.5rem]">
              {{ repo.description }}
            </p>
            <div class="flex items-center gap-3 mt-auto">
              <span v-if="repo.language" class="flex items-center gap-1.5 text-xs text-off-white/50">
                <span class="w-2.5 h-2.5 rounded-full" :style="{ backgroundColor: repo.langColor }"></span>
                {{ repo.language }}
              </span>
              <span v-if="repo.stars" class="flex items-center gap-1 text-xs text-off-white/40">
                <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 16 16"><path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z"/></svg>
                {{ repo.stars }}
              </span>
              <span v-if="repo.forks" class="flex items-center gap-1 text-xs text-off-white/40">
                <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 16 16"><path d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"/></svg>
                {{ repo.forks }}
              </span>
              <span v-if="repo.license" class="text-xs text-off-white/30 ml-auto">{{ repo.license }}</span>
            </div>
          </div>
        </a>
      </div>
    </section>

    <!-- ═══════════════════════════════════════ -->
    <!-- AKTUELLE SCHWERPUNKTE                   -->
    <!-- ═══════════════════════════════════════ -->
    <section class="mb-16">
      <h2 class="text-2xl md:text-3xl font-bold terminal-font text-copper-orange mb-8">
        Aktuelle Schwerpunkte
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          v-for="focus in focusAreas"
          :key="focus.title"
          class="card bg-base-200 border border-copper-orange/10 hover:border-copper-orange/30 transition-all duration-300"
        >
          <div class="card-body p-6">
            <div class="flex items-center gap-3 mb-3">
              <span class="text-2xl">{{ focus.icon }}</span>
              <h3 class="text-lg font-bold terminal-font text-copper-orange">{{ focus.title }}</h3>
            </div>
            <p class="text-off-white/70 text-sm leading-relaxed mb-4">
              {{ focus.description }}
            </p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in focus.tags"
                :key="tag"
                class="badge badge-sm badge-outline border-off-white/20 text-off-white/50"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer Note -->
    <div class="text-center py-8 border-t border-copper-orange/10">
      <p class="text-off-white/40 text-sm">
        ⚓ DEVmatrose — Coding since 1999. Building the Future since this Morning.
      </p>
    </div>

  </div>
</template>

<script setup>
const basePath = import.meta.env.BASE_URL

const devmatroseRepos = [
  {
    name: 'Aletheia-Labeling-Studio',
    description: 'Modernes Vue.js Text-Labeling-Tool für die Verifizierung und Aufbereitung von LLM-Trainingsdaten.',
    url: 'https://github.com/DEVmatrose/Aletheia-Labeling-Studio',
    language: 'Vue',
    langColor: '#41b883',
    license: 'MIT'
  },
  {
    name: 'ZPMS',
    description: 'Zero-Persistence Messaging System — Ephemeral Real-Time Communication Protocol für persistenzfreie 1:1 Kommunikation.',
    url: 'https://github.com/DEVmatrose/ZPMS---Zero-Persistence-Messaging-System',
    language: 'JavaScript',
    langColor: '#f1e05a',
    forks: 1,
    license: 'MIT'
  },
  {
    name: 'all-ai-pm-tool',
    description: 'KI-gestütztes Projektmanagement-Tool mit LLM-Integration für den gesamten Projekt-Lebenszyklus.',
    url: 'https://github.com/DEVmatrose/all-ai-pm-tool',
    language: 'HTML',
    langColor: '#e34c26'
  },
  {
    name: 'Meeting-to-Protocol',
    description: 'Automatisierte Meeting-Protokolle aus Audiodateien — PyAnnote-Sprecherdiarisierung und Whisper-Transkription.',
    url: 'https://github.com/DEVmatrose/Meeting-to-Protocol',
    language: 'Python',
    langColor: '#3572A5'
  },
  {
    name: 'token-kosten-rechner',
    description: 'GPU-Token-Kostenrechner — Was kosten deine Tokens wirklich und wie viel Gewinn machst du mit deinem Verkaufspreis?',
    url: 'https://github.com/DEVmatrose/token-kosten-rechner',
    language: 'HTML',
    langColor: '#e34c26'
  },
  {
    name: 'nostr-client-console',
    description: 'Feature-reicher Nostr-Client mit intuitiver Terminal-Oberfläche für dezentrale Nostr-Protokoll-Interaktion.',
    url: 'https://github.com/DEVmatrose/nostr-client-console',
    language: 'Python',
    langColor: '#3572A5'
  }
]

const ogerlyRepos = [
  {
    name: 'Shield-Claw',
    description: 'Zero-Trust Security Proxy für autonome AI-Agenten — Zwei-Rechner-Architektur mit 5-Layer kryptografischer Validierung.',
    url: 'https://github.com/ogerly/Shield-Claw',
    language: 'Python',
    langColor: '#3572A5'
  },
  {
    name: 'Mash-Claw',
    description: 'Dezentrales Agenten-Mesh — Autonome Agenten finden sich, tauschen Ressourcen und teilen Modelle ohne zentrale Kontrolle.',
    url: 'https://github.com/ogerly/Mash-Claw',
    language: 'Python',
    langColor: '#3572A5'
  },
  {
    name: 'Agent Sapiens',
    description: 'Blueprint für biologisch inspiriertes Agenten-Gedächtnis — duales Gedächtnis, Schichtenmodell und Spatial Memory.',
    url: 'https://github.com/ogerly/agent-sapiens',
    language: 'Konzept',
    langColor: '#8b5cf6'
  },
  {
    name: 'Global Future Compass',
    description: 'Strategisches Navigations-Dashboard für geopolitische Analyse — Resilience, Transformation und Sovereignty.',
    url: 'https://github.com/ogerly/global-future-compass',
    language: 'Vue',
    langColor: '#41b883',
    stars: 2
  },
  {
    name: 'Datenbank-Deutschland',
    description: 'Ort, Kreis, Bundesland, PLZ, GeoCode von Orten in Deutschland — Open Data Referenz.',
    url: 'https://github.com/ogerly/Datenbank-Deutschland',
    stars: 14,
    forks: 8
  },
  {
    name: 'mostro',
    description: 'Nostr-basierter dezentraler P2P-Marktplatz — Fork und Erweiterung des Mostro-Protokolls.',
    url: 'https://github.com/ogerly/mostro',
    language: 'Rust',
    langColor: '#dea584'
  }
]

const focusAreas = [
  {
    icon: '🤖',
    title: 'KI-Agenten & Autonomie',
    description: 'Von Zero-Trust-Sicherheit (Shield-Claw) über biologisch inspiriertes Agenten-Gedächtnis (Agent Sapiens) bis hin zu dezentralen Mesh-Netzwerken (Mash-Claw) — die nächste Generation autonomer Agenten-Systeme.',
    tags: ['Shield-Claw', 'Agent Sapiens', 'Mash-Claw', 'OpenClaw', 'LLM-Inference']
  },
  {
    icon: '🌐',
    title: 'Dezentrale Protokolle',
    description: 'IPFS, Nostr, Mostro und persistenzfreie Kommunikation — Technologien für Systeme, die dem Nutzer gehören. Kein Konzern, keine Cloud, keine Abhängigkeit.',
    tags: ['IPFS', 'Nostr', 'Mostro', 'P2P', 'ZPMS', 'Bitcoin']
  },
  {
    icon: '🧪',
    title: 'Open Source LLM Training',
    description: 'Verifikations-Tools für Trainingsdaten, Audio-Transkription mit Whisper und automatisierte Meeting-Protokolle — die Infrastruktur für souveräne KI.',
    tags: ['Aletheia', 'Whisper', 'PyAnnote', 'Fine-Tuning', 'LLaMA']
  },
  {
    icon: '🏗️',
    title: 'Fullstack-Architektur',
    description: '25+ Jahre Erfahrung in der Entwicklung skalierbarer Systeme. Von Social Networks (Pre-Facebook Ära) über Großprojekte wie Human Connection bis zu modernen KI-Architekturen.',
    tags: ['Vue.js', 'Node.js', 'Python', 'GraphQL', 'MongoDB', 'Neo4J']
  }
]
</script>
