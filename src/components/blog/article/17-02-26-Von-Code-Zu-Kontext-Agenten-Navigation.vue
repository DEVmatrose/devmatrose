<template>
  <div class="min-h-screen bg-void text-off-white">
    <!-- Hero Image -->
    <div class="relative w-full h-96 overflow-hidden">
      <img 
        :src="heroImage" 
        alt="Von Code zu Kontext – Wie ich Agenten-Teams das Navigieren in Repositories beibringe"
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
          <span class="text-off-white">Von Code zu Kontext</span>
        </nav>

        <!-- Meta Info & Share -->
        <div class="flex flex-wrap gap-4 items-center justify-between mb-6 text-sm">
          <div class="flex flex-wrap gap-4 text-off-white/70">
            <span>📅 17. Februar 2026</span>
            <span>•</span>
            <span>⏱️ 10 min Lesezeit</span>
            <span>•</span>
            <span>🤖 Multi-Agent-Systeme</span>
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
          Von Code zu Kontext
        </h1>

        <!-- Subtitle -->
        <p class="text-xl sm:text-2xl text-cyber-cyan/90 mb-8 leading-relaxed">
          Wie ich Agenten-Teams das „Navigieren“ in Repositories beibringe
        </p>

        <!-- Author Info -->
        <div class="flex items-center gap-3 mb-8">
          <div class="text-sm text-off-white/70">
            <span class="font-semibold text-off-white">Alexander Friedland</span> (<a href="https://github.com/ogerly" target="_blank" class="text-cyber-cyan hover:underline">@ogerly</a>)
            · DEVmatrose
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
        <p class="text-xl text-off-white/90 leading-relaxed mb-8">
          Stell dir vor, du hast ein riesiges Ökosystem gebaut: Python-Tools für Transkription, KI-Server mit LLMs, Frontends, Backends und Datenbanken. Alles wächst. Und plötzlich stehst du vor dem Problem: <span class="text-copper-orange font-semibold">Wie behalten meine KI-Agenten den Überblick, wenn das Projekt immer komplexer wird?</span>
        </p>

        <p class="text-lg text-off-white/90 leading-relaxed mb-8">
          Ich habe mich genau das gefragt und bin tief in das Kaninchenloch der „Multi-Agent-Orchestration" eingetaucht. Hier ist das Logbuch meiner Reise – von der Vision bis zur harten Realität der Implementierung.
        </p>

        <!-- Section: Die Vision -->
        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          🧭 Die Vision: Der „Repository-Skill"
        </h2>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Die Idee war simpel: Ich gebe meinem Haupt-Agenten einen Link zu einem Repository. Dieser erkennt automatisch: <em>„Ah, hier ist Backend, da ist Frontend, dort die Datenbank."</em> Er gründet ein <strong class="text-copper-orange">Sub-Agenten-Team</strong>, in dem Spezialisten (der Backend-Agent, der Frontend-Agent) unter der Leitung eines Koordinators zusammenarbeiten.
        </p>

        <p class="text-lg text-off-white/90 leading-relaxed mb-8">
          Das Ziel: Ein Workspace in <span class="text-cyber-cyan font-semibold">OpenClaw</span>, in dem jedes Projekt eine eigene „Soul", eine History und ein Memory hat.
        </p>

        <!-- Section: Die harten Lektionen -->
        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          ⚠️ Die harten Lektionen: Woran es fast gescheitert wäre
        </h2>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          In der Theorie klingt das super. In der Praxis (und nach ein wenig kritischem Feedback von Claude und Kimi) traten drei massive Probleme auf:
        </p>

        <div class="space-y-6 my-8">
          <!-- Problem 1 -->
          <div class="p-6 bg-red-500/10 border-l-4 border-red-500 rounded-r-lg">
            <h3 class="text-xl font-bold text-red-400 mb-2">1. Ordnernamen lügen</h3>
            <p class="text-off-white/90">
              Wenn man Agenten sagt: <em>„Suche den Ordner <code class="text-cyber-cyan">backend/</code>"</em>, finden sie nichts, wenn der Ordner plötzlich <code class="text-cyber-cyan">src/</code> oder <code class="text-cyber-cyan">app/</code> heißt.
            </p>
          </div>

          <!-- Problem 2 -->
          <div class="p-6 bg-red-500/10 border-l-4 border-red-500 rounded-r-lg">
            <h3 class="text-xl font-bold text-red-400 mb-2">2. Das Chaos im Kopf (Shared State)</h3>
            <p class="text-off-white/90">
              Wenn drei Agenten gleichzeitig in die gleiche „Erinnerung" schreiben, entsteht Daten-Matsch. Wer hat was wann geändert?
            </p>
          </div>

          <!-- Problem 3 -->
          <div class="p-6 bg-red-500/10 border-l-4 border-red-500 rounded-r-lg">
            <h3 class="text-xl font-bold text-red-400 mb-2">3. LLM-Würfelspiel</h3>
            <p class="text-off-white/90">
              Wenn der Koordinator-Agent jedes Mal frei entscheiden darf, was als Nächstes passiert, wird das System unberechenbar.
            </p>
          </div>
        </div>

        <!-- Section: Die Lösung -->
        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          🏗️ Die Lösung: Drei Säulen für robuste Agenten
        </h2>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Ich habe das System im Dialog radikal umgeplant. Wenn du so etwas baust, achte auf diese drei Dinge:
        </p>

        <!-- Säule 1 -->
        <h3 class="text-2xl font-bold text-cyber-cyan mt-10 mb-4">
          1. Dateisignaturen statt Ordnernamen
        </h3>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Statt nach Ordnernamen zu suchen, schaue ich in die Dateien. Eine <code class="text-cyber-cyan">package.json</code> schreit „Frontend/Node", eine <code class="text-cyber-cyan">requirements.txt</code> flüstert „Python/Backend". Das ist <strong class="text-copper-orange">deterministisch und sicher</strong>.
        </p>

        <!-- Säule 2 -->
        <h3 class="text-2xl font-bold text-cyber-cyan mt-10 mb-4">
          2. Event-Sourcing (Das Logbuch)
        </h3>

        <p class="text-lg text-off-white/90 leading-relaxed mb-4">
          Ich nutze keinen „geteilten Speicher“, den jeder überschreiben darf. Stattdessen schreiben alle Agenten in ein <strong class="text-copper-orange">Append-only Logbuch</strong> (Event-Log).
        </p>

        <div class="p-6 bg-copper-orange/10 border-l-4 border-copper-orange rounded-r-lg my-6">
          <p class="text-off-white/90 italic">
            <strong>Vorteil:</strong> Man kann jederzeit „zurückspulen" und sehen, welcher Agent welchen Fehler gemacht hat. Es ist die „Blackbox" für deine KI-Flotte.
          </p>
        </div>

        <!-- Säule 3 -->
        <h3 class="text-2xl font-bold text-cyber-cyan mt-10 mb-4">
          3. Die State-Machine (Die Leitplanken)
        </h3>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Der Koordinator darf nicht alles. Er arbeitet wie eine Schaltung: Es gibt klare Phasen (<span class="text-cyber-cyan">Initial Scan → Analyse → Validierung → Abschluss</span>). Das LLM darf entscheiden, <em>wie</em> es eine Phase ausführt, aber es darf die Reihenfolge nicht eigenmächtig würfeln.
        </p>

        <ul class="list-none space-y-3 my-8">
          <li class="flex items-start gap-3">
            <span class="text-cyber-cyan text-2xl">→</span>
            <span class="text-off-white/90"><strong>Initial Scan:</strong> Repository erkennen und klassifizieren</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-cyber-cyan text-2xl">→</span>
            <span class="text-off-white/90"><strong>Analyse:</strong> Abhängigkeiten und Strukturen verstehen</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-cyber-cyan text-2xl">→</span>
            <span class="text-off-white/90"><strong>Validierung:</strong> Ergebnisse prüfen und korrigieren</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-cyber-cyan text-2xl">→</span>
            <span class="text-off-white/90"><strong>Abschluss:</strong> Dokumentation und Übergabe</span>
          </li>
        </ul>

        <!-- Section: Der Aha-Moment -->
        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          💡 Der „Aha-Moment": Die Workpapers sind der Schlüssel
        </h2>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Am Ende meiner Reise merkte ich: Die Lösung lag schon die ganze Zeit vor mir. Ich nutze bereits sogenannte <strong class="text-copper-orange">Workpapers</strong> – strukturierte Protokolle über den Status Quo.
        </p>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Das Problem ist nicht, dass die Agenten nicht schlau genug sind. Das Problem ist der <strong class="text-copper-orange">„Zombie-Zustand"</strong>: Ein Agent startet eine neue Session und weiß nicht, was der Agent davor bereits erledigt hat, weil er das Protokoll (das Workpaper) nicht liest.
        </p>

        <div class="p-6 bg-copper-orange/10 border-l-4 border-copper-orange rounded-r-lg my-8">
          <h3 class="text-xl font-bold text-copper-orange mb-4">Die wichtigste Erkenntnis:</h3>
          <p class="text-off-white/90 mb-4">
            Bevor ein Agent auch nur eine Zeile Code anfasst, braucht er ein <strong>„Session-Start-Ritual"</strong>:
          </p>
          <ol class="list-decimal list-inside space-y-2 text-off-white/90">
            <li>Lies die letzten drei Workpapers.</li>
            <li>Welche Dateien wurden neu erstellt?</li>
            <li>Welche Aufgaben sind noch offen (🔄)?</li>
          </ol>
        </div>

        <!-- Section: Sicherheit -->
        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          🔐 Ein Wort zur Sicherheit (Der Realitätscheck)
        </h2>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
Während ich darüber nachdachte, fiel mir ein kritischer Punkt auf: In meinen Protokollen standen manchmal echte Passwörter oder API-Token. <strong class="text-red-400">Vorsicht!</strong> Sobald diese Workpapers in den Kontext eines Agenten fließen, landen sie im Prompt der LLM-Anbieter. Hier muss ich dringend filtern, bevor die „Agenten-Soul“ mit sensiblen Daten gefüttert wird.
        </p>

        <div class="p-6 bg-red-500/10 border-l-4 border-red-500 rounded-r-lg my-8">
          <p class="text-off-white/90">
            <strong class="text-red-400">Sicherheitsregel:</strong> Niemals ungefiltertes Kontext-Material an LLM-Provider senden. Workpapers müssen vor der Einspeisung in den Agenten-Kontext automatisch nach Secrets, API-Keys und Credentials gescannt und bereinigt werden.
          </p>
        </div>

        <!-- Section: Fazit -->
        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          🧭 Fazit für heute
        </h2>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Ein Agenten-System zu bauen bedeutet weniger, „schlaue Prompts" zu schreiben, sondern <strong class="text-copper-orange">robuste Infrastruktur</strong> zu schaffen. Es geht um saubere Protokolle, klare Zuständigkeiten und das Vermeiden von Daten-Chaos.
        </p>

        <div class="p-6 bg-cyber-cyan/10 border-l-4 border-cyber-cyan rounded-r-lg my-8">
          <h3 class="text-xl font-bold text-cyber-cyan mb-4">Was ist dein nächster Schritt?</h3>
          <p class="text-off-white/90">
            Ich werde jetzt mein „Session-Start-Ritual" automatisieren. Mein Ziel: Der Agent begrüßt mich mit: <em>„Ich habe die letzten Workpapers gelesen. Ich weiß, dass der KoFi-Service zur Hälfte fertig ist. Soll ich da weitermachen?"</em>
          </p>
        </div>

        <p class="text-lg text-off-white/90 leading-relaxed mb-8">
          <strong>Wäre das auch was für dein Projekt? Lass uns in den Kommentaren drüber quatschen!</strong>
        </p>

        <!-- Autoreninfo -->
        <div class="p-6 bg-white/5 border border-copper-orange/30 rounded-lg my-12">
          <p class="text-off-white/70 text-sm italic">
            Dieser Artikel entstand im kreativen Austausch zwischen @Ogerly und seinen KI-Kollaborateuren für die DEVmatrose-Community.
          </p>
        </div>

      </div>
    </article>

    <!-- Back to Blog Button -->
    <div class="max-w-4xl mx-auto px-4 pb-16">
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
const title = 'Von Code zu Kontext: Wie ich Agenten-Teams das \u201ENavigieren\u201C in Repositories beibringe'
const description = "Ein Deep-Dive in die Architektur von Multi-Agent-Systemen: Dateisignaturen statt Ordnernamen, Event-Sourcing als Blackbox und State-Machines als Leitplanken für meine KI-Koordinatoren."
const tags = ref([
  "Multi-Agent-Systeme",
  "Repository-Navigation",
  "Event-Sourcing",
  "State-Machine",
  "KI-Orchestration",
  "Workpapers"
])

// Hero Image
const basePath = import.meta.env.BASE_URL
const heroImage = computed(() => `${basePath}images/blog/agenten-im-repro.png`)

// State
const linkCopied = ref(false)

// SEO Meta Tags
onMounted(() => {
  useSEO({
    title: title,
    description: description,
    image: '/images/blog/agenten-im-repro.png',
    url: '/blog/von-code-zu-kontext-agenten-navigation',
    type: 'article',
    author: 'Alexander Friedland (@ogerly)',
    publishedTime: '2026-02-17',
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

const navigateToArticle = (slug) => {
  router.push({ name: 'blog-article', params: { slug } })
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
