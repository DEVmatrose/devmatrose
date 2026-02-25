<template>
  <div class="min-h-screen bg-void text-off-white">
    <!-- Hero Image -->
    <div class="relative w-full h-96 overflow-hidden">
      <img 
        :src="heroImage" 
        alt="Das OpenClaw-Universum 2026 – Original, Forks und Spezial-Varianten"
        class="w-full h-full object-cover opacity-60"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-void/50 to-void"></div>
    </div>
    
    <!-- Hero Section -->
    <div class="relative bg-gradient-to-b from-void via-void/95 to-void -mt-32">
      <div class="max-w-4xl mx-auto px-4 py-16 sm:py-20">
        <!-- Breadcrumb -->
        <nav class="text-sm text-cyber-cyan/60 mb-8">
          <button @click="navigateToHome" class="hover:text-cyber-cyan transition-colors">Home</button>
          <span class="mx-2">/</span>
          <button @click="navigateToBlog" class="hover:text-cyber-cyan transition-colors">Blog</button>
          <span class="mx-2">/</span>
          <span class="text-off-white">OpenClaw-Universum 2026</span>
        </nav>

        <!-- Meta Info & Share -->
        <div class="flex flex-wrap gap-4 items-center justify-between mb-6 text-sm">
          <div class="flex flex-wrap gap-4 text-off-white/70">
            <span>📅 25. Februar 2026</span>
            <span>•</span>
            <span>⏱️ 12 min Lesezeit</span>
            <span>•</span>
            <span>🦞 KI-Ökosystem & Open Source</span>
          </div>
          
          <button 
            @click="copyArticleLink"
            class="btn btn-sm btn-ghost border border-cyber-cyan/30 hover:border-cyber-cyan hover:bg-cyber-cyan/10 transition-all"
          >
            <span v-if="!linkCopied">🔗 Link kopieren</span>
            <span v-else class="text-cyber-cyan">✓ Kopiert!</span>
          </button>
        </div>

        <!-- Title -->
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-copper-orange mb-6 glow-pulse leading-tight">
          Das OpenClaw-Universum 2026
        </h1>

        <!-- Subtitle -->
        <p class="text-xl sm:text-2xl text-cyber-cyan/90 mb-8 leading-relaxed">
          Die definitive Übersicht zu Original, Forks und Spezial-Varianten
        </p>

        <!-- Author Info -->
        <div class="flex items-center gap-3 mb-8">
          <div class="text-sm text-off-white/70">
            <span class="font-semibold text-off-white">Ogerly</span> – Programmierer bei
            <a href="https://github.com/DEVmatrose" target="_blank" class="text-cyber-cyan hover:underline">DEVmatrose</a>
          </div>
        </div>

        <!-- Tags -->
        <div class="flex flex-wrap gap-2">
          <span 
            v-for="tag in tags" 
            :key="tag"
            class="badge badge-outline border-cyber-cyan/50 text-cyber-cyan"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </div>

    <!-- Article Content -->
    <article class="max-w-4xl mx-auto px-4 py-12">
      <div class="prose prose-invert prose-lg max-w-none">

        <!-- Intro -->
        <div class="p-6 bg-copper-orange/10 border-l-4 border-copper-orange rounded-r-lg my-8">
          <p class="text-xl text-off-white/90 italic">
            Ein Ökosystem, das niemand geplant hat – und das trotzdem funktioniert. Vom Mutterschiff in TypeScript bis zum 5-Dollar-Chip ohne Betriebssystem: Das ist der Stand der Dinge.
          </p>
        </div>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Das Projekt <a href="https://github.com/openclaw/openclaw" target="_blank" class="text-cyber-cyan">OpenClaw</a> hat sich seit seinem Start zum unangefochtenen Standard für lokale, persönliche KI-Assistenten entwickelt. Unter dem Leitsatz <strong class="text-copper-orange">„The lobster way 🦞"</strong> ist ein Ökosystem entstanden, das im Februar 2026 eine beeindruckende Diversität aufweist.
        </p>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Vom ressourcenstarken Mutterschiff in TypeScript bis hin zu spezialisierten Rust-Implementierungen und winzigen Mikrocontroller-Agenten ohne Betriebssystem – die Auswahl ist riesig. Diese Übersicht analysiert das aktuelle Feld basierend auf Performance, Sicherheit und dem entscheidenden Faktor für die Community-Akzeptanz: den <strong class="text-cyber-cyan">GitHub-Stars</strong>.
        </p>

        <!-- 1. Das Fundament -->
        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          1️⃣ Das Fundament: Klassiker & Portabilitäts-Welle
        </h2>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Diese Gruppe umfasst das Originalprojekt sowie die ersten großen Reimplementierungen, die den Weg für den Einsatz auf unterschiedlicher Hardware ebneten.
        </p>

        <!-- OpenClaw Original -->
        <div class="p-5 bg-copper-orange/10 border border-copper-orange/30 rounded-lg my-6">
          <div class="flex items-center justify-between mb-3">
            <h3 class="text-xl font-bold text-copper-orange">🦞 openclaw/openclaw (Original)</h3>
            <span class="badge badge-lg bg-copper-orange/20 border-copper-orange/50 text-copper-orange font-bold">⭐ 226k</span>
          </div>
          <div class="flex flex-wrap gap-2 mb-3">
            <span class="badge badge-sm badge-outline border-cyber-cyan/50 text-cyber-cyan">TypeScript/Node.js</span>
            <span class="badge badge-sm badge-outline border-off-white/30 text-off-white/70">Desktop/Server</span>
          </div>
          <p class="text-off-white/80 text-sm">
            Volles Feature-Set: Multi-Channel (WhatsApp, iMessage), Voice, Vision, Live-Canvas, Skills-Ökosystem. Das Mutterschiff für Alltagsnutzer mit maximaler Integration.
          </p>
        </div>

        <!-- PicoClaw -->
        <div class="p-5 bg-cyber-cyan/10 border border-cyber-cyan/30 rounded-lg my-6">
          <div class="flex items-center justify-between mb-3">
            <h3 class="text-xl font-bold text-cyber-cyan">⚡ sipeed/picoclaw</h3>
            <span class="badge badge-lg bg-cyber-cyan/20 border-cyber-cyan/50 text-cyber-cyan font-bold">⭐ 19.6k</span>
          </div>
          <div class="flex flex-wrap gap-2 mb-3">
            <span class="badge badge-sm badge-outline border-cyber-cyan/50 text-cyber-cyan">Go</span>
            <span class="badge badge-sm badge-outline border-off-white/30 text-off-white/70">&lt;10 MB RAM, $10 Hardware</span>
            <span class="badge badge-sm badge-outline border-copper-orange/50 text-copper-orange">Reimpl.</span>
          </div>
          <p class="text-off-white/80 text-sm">
            Ultra-portable Single-Binary. <strong class="text-cyber-cyan">400x schneller</strong> als das Original. Zu 95% von KI geschrieben. Zielgruppe: Embedded, Low-Power, RISC-V.
          </p>
        </div>

        <!-- MimiClaw -->
        <div class="p-5 bg-cyber-cyan/10 border border-cyber-cyan/30 rounded-lg my-6">
          <div class="flex items-center justify-between mb-3">
            <h3 class="text-xl font-bold text-cyber-cyan">🔒 memovai/mimiclaw</h3>
            <span class="badge badge-lg bg-cyber-cyan/20 border-cyber-cyan/50 text-cyber-cyan font-bold">⭐ 3.1k</span>
          </div>
          <div class="flex flex-wrap gap-2 mb-3">
            <span class="badge badge-sm badge-outline border-cyber-cyan/50 text-cyber-cyan">C (pure)</span>
            <span class="badge badge-sm badge-outline border-off-white/30 text-off-white/70">ESP32-S3, kein OS</span>
            <span class="badge badge-sm badge-outline border-copper-orange/50 text-copper-orange">Reimpl.</span>
          </div>
          <p class="text-off-white/80 text-sm">
            Embedded ohne Betriebssystem. Lokale Memory auf Flash, Telegram-only, Dual-LLM-Support. Maximale Privacy auf Edge-Devices.
          </p>
        </div>

        <!-- Weitere Fundament-Projekte -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div class="p-4 bg-void border border-off-white/10 rounded-lg">
            <h4 class="font-bold text-off-white mb-1">smallnest/goclaw</h4>
            <div class="flex gap-2 mb-2">
              <span class="badge badge-xs badge-outline text-cyber-cyan">Go</span>
              <span class="text-xs text-off-white/50">⭐ 223</span>
            </div>
            <p class="text-xs text-off-white/60">Go-Neuimplementierung mit modularen Tools, CLI/TUI Fokus, Sandbox.</p>
          </div>
          <div class="p-4 bg-void border border-off-white/10 rounded-lg">
            <h4 class="font-bold text-off-white mb-1">jasperan/picooraclaw</h4>
            <div class="flex gap-2 mb-2">
              <span class="badge badge-xs badge-outline text-cyber-cyan">Go</span>
              <span class="text-xs text-off-white/50">⭐ 143 • Fork (Pico)</span>
            </div>
            <p class="text-xs text-off-white/60">PicoClaw-Fork mit Oracle AI Database als Backend für semantische Vector-Memory (ONNX lokal).</p>
          </div>
          <div class="p-4 bg-void border border-off-white/10 rounded-lg">
            <h4 class="font-bold text-off-white mb-1">drpedapati/sciclaw</h4>
            <div class="flex gap-2 mb-2">
              <span class="badge badge-xs badge-outline text-cyber-cyan">Go</span>
              <span class="text-xs text-off-white/50">⭐ neu • Fork (Pico)</span>
            </div>
            <p class="text-xs text-off-white/60">Wissenschafts-Erweiterung: PubMed-Suche, Word-Integration (Track-Changes), Experiment-Tracking.</p>
          </div>
          <div class="p-4 bg-void border border-off-white/10 rounded-lg">
            <h4 class="font-bold text-off-white mb-1">ghazalialshafi/nimclaw</h4>
            <div class="flex gap-2 mb-2">
              <span class="badge badge-xs badge-outline text-cyber-cyan">Nim</span>
              <span class="text-xs text-off-white/50">⭐ 11</span>
            </div>
            <p class="text-xs text-off-white/60">Direkter PicoClaw-Klon in Nim. Multi-Channel fähig. Für Performance-Puristen.</p>
          </div>
          <div class="p-4 bg-void border border-off-white/10 rounded-lg">
            <h4 class="font-bold text-off-white mb-1">swarmclawai/swarmclaw</h4>
            <div class="flex gap-2 mb-2">
              <span class="badge badge-xs badge-outline text-cyber-cyan">TypeScript</span>
              <span class="text-xs text-off-white/50">⭐ 9</span>
            </div>
            <p class="text-xs text-off-white/60">Orchestrierung für Assistenten-Schwärme. LangGraph-Workflows, Task-Boards.</p>
          </div>
          <div class="p-4 bg-void border border-off-white/10 rounded-lg">
            <h4 class="font-bold text-off-white mb-1">Aisht669/NetClaw</h4>
            <div class="flex gap-2 mb-2">
              <span class="badge badge-xs badge-outline text-cyber-cyan">C#/.NET</span>
              <span class="text-xs text-off-white/50">⭐ 4</span>
            </div>
            <p class="text-xs text-off-white/60">.NET-Version mit AOT-Kompilierung. Support für QQ, DingTalk, Feishu. Enterprise-Fokus.</p>
          </div>
        </div>

        <!-- 2. Die Nano-Welle -->
        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          2️⃣ Die Nano-Welle & Spezialisten (Trend 2026)
        </h2>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          In der jüngsten Entwicklungsphase hat sich ein deutlicher Trend zu <strong class="text-copper-orange">Container-Isolation</strong> und <strong class="text-copper-orange">Rust</strong> abgezeichnet. Die „Nano-Familie" reagiert auf das Bedürfnis nach Sicherheit und extremem Leichtbau.
        </p>

        <!-- NanoClaw -->
        <div class="p-5 bg-copper-orange/10 border border-copper-orange/30 rounded-lg my-6">
          <div class="flex items-center justify-between mb-3">
            <h3 class="text-xl font-bold text-copper-orange">📦 qwibitai/nanoclaw</h3>
            <span class="badge badge-lg bg-copper-orange/20 border-copper-orange/50 text-copper-orange font-bold">⭐ 14.2k</span>
          </div>
          <div class="flex flex-wrap gap-2 mb-3">
            <span class="badge badge-sm badge-outline border-cyber-cyan/50 text-cyber-cyan">TypeScript</span>
            <span class="badge badge-sm badge-outline border-copper-orange/50 text-copper-orange">Populärste Nano-Variante</span>
          </div>
          <p class="text-off-white/80 text-sm">
            Echte Container-Isolation (Apple/Docker). Keine Config-Dateien – <strong class="text-copper-orange">Code = Konfiguration</strong>. Der neue Sicherheitsstandard.
          </p>
        </div>

        <!-- Weitere Nano-Projekte -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div class="p-4 bg-void border border-off-white/10 rounded-lg">
            <h4 class="font-bold text-off-white mb-1">microclaw/microclaw</h4>
            <div class="flex gap-2 mb-2">
              <span class="badge badge-xs badge-outline text-copper-orange">Rust</span>
              <span class="text-xs text-off-white/50">⭐ 382</span>
            </div>
            <p class="text-xs text-off-white/60">Rust-Agent, MCP-Tool-Server (Playwright, Windows-Auto), sqlite-vec Memory. Power-User.</p>
          </div>
          <div class="p-4 bg-void border border-off-white/10 rounded-lg">
            <h4 class="font-bold text-off-white mb-1">warengonzaga/tinyclaw</h4>
            <div class="flex gap-2 mb-2">
              <span class="badge badge-xs badge-outline text-cyber-cyan">TS (Bun)</span>
              <span class="text-xs text-off-white/50">⭐ 95</span>
            </div>
            <p class="text-xs text-off-white/60">Autonome Persönlichkeit, 3-Layer-Memory mit Decay, 8-Dimension-Query-Routing.</p>
          </div>
          <div class="p-4 bg-void border border-off-white/10 rounded-lg">
            <h4 class="font-bold text-off-white mb-1">zackerydev/theclawmachine</h4>
            <div class="flex gap-2 mb-2">
              <span class="badge badge-xs badge-outline text-cyber-cyan">Go</span>
              <span class="text-xs text-off-white/50">⭐ 6</span>
            </div>
            <p class="text-xs text-off-white/60">Kubernetes-Orchestrierung, Helm-Charts, S3-Backups, Live-Telemetry. Enterprise & K8s.</p>
          </div>
          <div class="p-4 bg-void border border-off-white/10 rounded-lg">
            <h4 class="font-bold text-off-white mb-1">gyc567/nuclaw</h4>
            <div class="flex gap-2 mb-2">
              <span class="badge badge-xs badge-outline text-copper-orange">Rust</span>
              <span class="text-xs text-off-white/50">⭐ 5 • Port (Nano)</span>
            </div>
            <p class="text-xs text-off-white/60">Rust-Port von NanoClaw. Container-Isolation, WhatsApp (MCP) + Telegram-Support.</p>
          </div>
          <div class="p-4 bg-void border border-off-white/10 rounded-lg">
            <h4 class="font-bold text-off-white mb-1">DomiYoung/domiclaw</h4>
            <div class="flex gap-2 mb-2">
              <span class="badge badge-xs badge-outline text-cyber-cyan">Go</span>
              <span class="text-xs text-off-white/50">⭐ 2</span>
            </div>
            <p class="text-xs text-off-white/60">Ultra-light Raspberry-Pi-Agent (~10 MB RAM), Context-Recovery nach Überlauf.</p>
          </div>
          <div class="p-4 bg-void border border-off-white/10 rounded-lg">
            <h4 class="font-bold text-off-white mb-1">sstuqtd/nanoclaw-kimi</h4>
            <div class="flex gap-2 mb-2">
              <span class="badge badge-xs badge-outline text-cyber-cyan">TypeScript</span>
              <span class="text-xs text-off-white/50">⭐ 0 • Fork (Nano)</span>
            </div>
            <p class="text-xs text-off-white/60">NanoClaw-Variante mit spezifischem Fokus auf Kimi-Modelle.</p>
          </div>
        </div>

        <!-- 3. Die drei Säulen -->
        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          3️⃣ Die drei Säulen der Entwicklung
        </h2>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Das Ökosystem im Februar 2026 lässt sich in drei technologische Strömungen unterteilen:
        </p>

        <!-- Säule I -->
        <div class="p-6 bg-cyber-cyan/10 border-l-4 border-cyber-cyan rounded-r-lg my-6">
          <h3 class="text-xl font-bold text-cyber-cyan mb-3">I. Sicherheit & Isolation — Der „Nano"-Standard</h3>
          <p class="text-off-white/80 leading-relaxed">
            Angeführt von <strong class="text-cyber-cyan">NanoClaw (14.2k Stars)</strong> hat sich ein Standard etabliert, der weg von der einfachen Node-Sandbox hin zu <strong class="text-copper-orange">echter OS-Level-Isolation</strong> (Docker/Apple Containers) führt. Projekte wie NuClaw und MicroClaw bringen diese Sicherheit in die Rust-Welt — prädestiniert für sicherheitskritische Desktop-Automatisierung.
          </p>
        </div>

        <!-- Säule II -->
        <div class="p-6 bg-copper-orange/10 border-l-4 border-copper-orange rounded-r-lg my-6">
          <h3 class="text-xl font-bold text-copper-orange mb-3">II. Extreme Performance & Hardware-Nähe</h3>
          <p class="text-off-white/80 leading-relaxed">
            <strong class="text-copper-orange">PicoClaw (19.6k Stars)</strong> und <strong class="text-cyber-cyan">MimiClaw (3.1k Stars)</strong> beweisen, dass KI-Assistenten heute keine High-End-Server mehr benötigen. MimiClaw läuft auf einem 5-Dollar-Chip ohne Betriebssystem — eine physische Barriere für Hacker und maximale Privatsphäre.
          </p>
        </div>

        <!-- Säule III -->
        <div class="p-6 bg-cyber-cyan/10 border-l-4 border-cyber-cyan rounded-r-lg my-6">
          <h3 class="text-xl font-bold text-cyber-cyan mb-3">III. Professionelle Orchestrierung</h3>
          <p class="text-off-white/80 leading-relaxed">
            Mit <strong class="text-cyber-cyan">SwarmClaw</strong> und <strong class="text-copper-orange">TheClawMachine</strong> wandelt sich der Fokus vom Einzel-Assistenten zum Agenten-Schwarm. Spezialisierte Instanzen — ein SciClaw für die Forschung, ein MicroClaw für die Hausautomatisierung — zentral gesteuert und überwacht.
          </p>
        </div>

        <!-- 4. Technologische Trends -->
        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          4️⃣ Technologische Trends & Claw-DNA
        </h2>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Trotz der Vielfalt gibt es eine gemeinsame <strong class="text-copper-orange">„Claw-DNA"</strong>, die fast alle Projekte teilen:
        </p>

        <div class="space-y-4 my-8">
          <div class="p-4 bg-cyber-cyan/10 border-l-4 border-cyber-cyan rounded-r-lg">
            <p class="font-semibold text-cyber-cyan mb-1">🔌 Model Context Protocol (MCP)</p>
            <p class="text-sm text-off-white/70">Die Unterstützung für MCP-Server wird zum Standard, um KIs Zugriff auf lokale Tools zu geben.</p>
          </div>
          <div class="p-4 bg-cyber-cyan/10 border-l-4 border-cyber-cyan rounded-r-lg">
            <p class="font-semibold text-cyber-cyan mb-1">📄 Kompatible Strukturen</p>
            <p class="text-sm text-off-white/70">Dateien wie <code>SOUL.md</code>, <code>IDENTITY.md</code> und der <code>MEMORY/</code>-Ordner sind meist austauschbar — Migrationen zwischen Varianten werden leicht.</p>
          </div>
          <div class="p-4 bg-copper-orange/10 border-l-4 border-copper-orange rounded-r-lg">
            <p class="font-semibold text-copper-orange mb-1">🤖 AI-Native Code</p>
            <p class="text-sm text-off-white/70">Ein Großteil der neuen Varianten wurde von KIs selbst generiert oder optimiert — das erklärt die extrem kurzen Entwicklungszyklen.</p>
          </div>
        </div>

        <!-- 5. Fazit -->
        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          5️⃣ Welchen Claw wählen?
        </h2>

        <div class="space-y-4 my-8">
          <div class="p-5 bg-copper-orange/10 border border-copper-orange/30 rounded-lg flex items-start gap-4">
            <span class="text-3xl">🦞</span>
            <div>
              <p class="font-bold text-copper-orange mb-1">Der Alleskönner</p>
              <p class="text-off-white/80 text-sm"><strong>openclaw/openclaw</strong> — Für Nutzer mit Hardware (Mac Mini/PC) und Wunsch nach maximalem Komfort.</p>
            </div>
          </div>
          <div class="p-5 bg-cyber-cyan/10 border border-cyber-cyan/30 rounded-lg flex items-start gap-4">
            <span class="text-3xl">🔒</span>
            <div>
              <p class="font-bold text-cyber-cyan mb-1">Der Sicherheits-Bewusste</p>
              <p class="text-off-white/80 text-sm"><strong>qwibitai/nanoclaw</strong> — Für Nutzer, die Wert auf strikte Container-Trennung legen.</p>
            </div>
          </div>
          <div class="p-5 bg-copper-orange/10 border border-copper-orange/30 rounded-lg flex items-start gap-4">
            <span class="text-3xl">⚡</span>
            <div>
              <p class="font-bold text-copper-orange mb-1">Der Hardware-Hacker</p>
              <p class="text-off-white/80 text-sm"><strong>sipeed/picoclaw</strong> — Für RISC-V und Low-Power-Bastler.</p>
            </div>
          </div>
          <div class="p-5 bg-cyber-cyan/10 border border-cyber-cyan/30 rounded-lg flex items-start gap-4">
            <span class="text-3xl">🏗️</span>
            <div>
              <p class="font-bold text-cyber-cyan mb-1">Der Professional</p>
              <p class="text-off-white/80 text-sm"><strong>microclaw/microclaw</strong> (Rust) oder <strong>theclawmachine</strong> (K8s) — Für anspruchsvolle Umgebungen.</p>
            </div>
          </div>
        </div>

        <!-- Closing -->
        <div class="p-6 bg-copper-orange/10 border border-copper-orange/30 rounded-lg my-8">
          <p class="text-lg text-off-white/90 italic mb-4">
            Das Ökosystem wächst schneller als jede einzelne Dokumentation hinterherkommt.
          </p>
          <p class="text-xl text-copper-orange font-bold">
            The lobster way 🦞 — wähle deinen Claw und leg los.
          </p>
          <p class="text-sm text-off-white/50 mt-4">
            Dokumentation erstellt im Rahmen der OpenClaw Community-Übersicht, Februar 2026.
          </p>
        </div>

      </div>
    </article>

    <!-- Back Button -->
    <div class="max-w-4xl mx-auto px-4 pb-12 flex justify-center">
      <button 
        @click="navigateToBlog"
        class="btn btn-outline btn-primary terminal-font w-full sm:w-auto"
      >
        ← Zurück zum Blog
      </button>
    </div>

  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useSEO } from '../../../composables/useSEO'

const router = useRouter()

// Article Metadata
const title = 'Das OpenClaw-Universum 2026: Original, Forks und Spezial-Varianten'
const description = 'Die definitive Übersicht zum OpenClaw-Ökosystem im Februar 2026: Vom TypeScript-Mutterschiff über Rust-Spezialisten bis zum 5-Dollar-Chip ohne Betriebssystem.'
const tags = ref([
  'OpenClaw',
  'KI-Assistenten',
  'Open Source',
  'Rust',
  'Embedded AI',
  'MCP'
])

// Hero Image
const basePath = import.meta.env.BASE_URL
const heroImage = computed(() => `${basePath}images/blog/openclaw_univer.png`)

// State
const linkCopied = ref(false)

// SEO Meta Tags
onMounted(() => {
  useSEO({
    title: title,
    description: description,
    image: '/images/blog/openclaw_univer.png',
    url: '/blog/openclaw-universum-2026',
    type: 'article',
    author: 'Ogerly – DEVmatrose',
    publishedTime: '2026-02-25',
    tags: tags.value
  })
})

// Navigation Methods
const navigateToHome = () => {
  router.push({ name: 'home' })
}

const navigateToBlog = () => {
  router.push({ name: 'blog' })
}

// Copy Link Method
const copyArticleLink = async () => {
  const url = window.location.href
  try {
    await navigator.clipboard.writeText(url)
    linkCopied.value = true
    setTimeout(() => {
      linkCopied.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy link:', err)
  }
}
</script>

<style scoped>
.glow-pulse {
  animation: pulseGlow 4s ease-in-out infinite;
}

@keyframes pulseGlow {
  0%, 100% {
    text-shadow: 0 0 10px currentColor, 0 0 20px currentColor;
  }
  50% {
    text-shadow: 0 0 20px currentColor, 0 0 40px currentColor, 0 0 60px currentColor;
  }
}

/* Prose Styling */
.prose {
  color: #f5f5f5;
}

.prose h2 {
  margin-top: 3rem;
  margin-bottom: 1.5rem;
}

.prose h3 {
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.prose p {
  margin-bottom: 1.5rem;
}

.prose a {
  color: #00d9ff;
  text-decoration: none;
  transition: color 0.2s;
}

.prose a:hover {
  color: #ff6b35;
  text-decoration: underline;
}

.prose ul {
  list-style: none;
  padding-left: 0;
}

.prose ol {
  padding-left: 1.5rem;
}

.prose strong {
  font-weight: 600;
}

.prose code {
  background: rgba(0, 217, 255, 0.1);
  padding: 0.15rem 0.4rem;
  border-radius: 0.25rem;
  font-size: 0.9em;
}
</style>
