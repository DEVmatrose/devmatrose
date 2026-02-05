<template>
  <div class="min-h-screen bg-void text-off-white">
    <!-- Hero Image -->
    <div class="relative w-full h-96 overflow-hidden">
      <img 
        :src="heroImage" 
        alt="Software-Architektin visualisiert Whitepaper und Architektur-Entscheidungen"
        class="w-full h-full object-cover opacity-60"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-void/50 to-void"></div>
    </div>
    
    <!-- Hero Section -->
    <div class="relative bg-gradient-to-b from-void via-void/95 to-void -mt-32">
      <div class="max-w-4xl mx-auto px-4 py-16 sm:py-20">
        <!-- Breadcrumb -->
        <nav class="text-sm text-cyber-cyan/60 mb-8">
          <span @click="navigateToHome" class="hover:text-cyber-cyan cursor-pointer">Home</span>
          <span class="mx-2">›</span>
          <span @click="navigateToBlog" class="hover:text-cyber-cyan cursor-pointer">Blog</span>
          <span class="mx-2">›</span>
          <span class="text-off-white/60">Vom Coder zum Architekten</span>
        </nav>

        <!-- Meta Info & Share -->
        <div class="flex flex-wrap gap-4 items-center justify-between mb-6 text-sm">
          <div class="flex flex-wrap gap-4 items-center">
            <span class="badge badge-accent glow-pulse">Featured</span>
            <span class="text-cyber-cyan">KI & Architektur</span>
            <span class="text-off-white/40">•</span>
            <span class="text-off-white/60">02. Dezember 2025</span>
            <span class="text-off-white/40">•</span>
            <span class="text-off-white/60">10 min Lesezeit</span>
          </div>
          
          <!-- Share Link -->
          <button 
            @click="copyArticleLink" 
            class="btn btn-xs btn-outline border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan hover:text-void"
            :class="{ 'btn-success': linkCopied }"
          >
            <svg v-if="!linkCopied" class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            <svg v-else class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            {{ linkCopied ? 'Link kopiert!' : 'Link teilen' }}
          </button>
        </div>

        <!-- Title -->
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-copper-orange mb-6 glow-pulse leading-tight">
          Vom Coder zum Architekten
        </h1>
        <p class="text-xl sm:text-2xl text-cyber-cyan mb-8">
          Warum KI meine Arbeit nicht ersetzt, sondern erweitert
        </p>

        <!-- Tags -->
        <div class="flex flex-wrap gap-2 mb-8">
          <span v-for="tag in tags" :key="tag" class="badge badge-outline badge-sm text-cyber-cyan border-cyber-cyan/40">
            {{ tag }}
          </span>
        </div>
      </div>
    </div>

    <!-- Article Content -->
    <article class="max-w-4xl mx-auto px-4 py-12">
      <div class="prose prose-invert prose-lg max-w-none">
        <!-- Introduction -->
        <div class="text-lg text-off-white/90 leading-relaxed mb-12">
          <p class="mb-6">
            Ich bin seit 1999 Softwareentwickler. Ich habe die komplette Entwicklung des Webs miterlebt – vom ersten HTML-Rumpfgerüst, über PHP-Zeiten, Framework-Explosionen, Mobile-Revolution, bis hin zum heutigen KI-Zeitalter. Ich war immer Entwickler aus Leidenschaft. Eine weiße Fläche im Editor ist für mich kein leerer Raum, sondern eine Einladung. Ich kann etwas erschaffen, verändern, bauen – genau das erfüllt mich seit über 25 Jahren.
          </p>
          <p>
            Über die Jahre habe ich nahezu alles mitgenommen, was die Branche hervorgebracht hat. 2004 habe ich mein erstes soziales Netzwerk gebaut. Neue Technologien waren für mich nie Bedrohung, immer Inspiration. Und genau deshalb hat mich das Thema KI selbstverständlich angezogen: weil ich wissen wollte, wie weit wir gehen können.
          </p>
        </div>

        <!-- Section 1 -->
        <h2 class="text-3xl font-bold text-copper-orange mt-16 mb-6">
          Vibe Coding, KI-Agenten & der Kontrollverlust, den keiner anspricht
        </h2>
        <p class="mb-4">
          Seit Anfang 2024 diskutiert die Branche intensiv über "AI Assisted Coding" oder "Vibe Coding" – ausgelöst durch Modelle wie Claude, GPT, Gemini oder groq-basierte Systeme. Und viele reden darüber, aber wenige arbeiten wirklich tief damit.
        </p>
        <p class="mb-4">
          Ich arbeite seit einem Jahr täglich mit KI in der Softwareentwicklung. In dieser Zeit habe ich etwas entwickelt, was für mich ein Schlüssel wurde: ein eigenes System aus Whitepapers, Workpapers, KI-Agenten, Kontextführung und strenger Versionsdisziplin.
        </p>
        <div class="bg-void/50 border-l-4 border-cyber-cyan p-6 my-8 rounded-r">
          <p class="font-semibold mb-2">Warum?</p>
          <p class="mb-2">Weil ich früh gemerkt habe:</p>
          <p class="text-xl font-bold text-copper-orange">KI verliert Kontext. Immer.</p>
        </div>
        <p class="mb-4">
          Nicht nach 5 Minuten, aber irgendwann. Modelle programmieren weiter, füllen Lücken, ergänzen Dinge, löschen aber keine Altlasten. Das war noch vor ein paar Monaten ein großes Problem. Ein Agent sieht Dateien, versteht Zusammenhänge, aber generiert dann trotzdem Code, der nicht mehr exakt zur ursprünglichen Absicht passt.
        </p>
        <p class="mb-4">
          Wenn ich als Mensch nicht glasklar kommuniziere, entsteht Chaos.
        </p>
        <p class="text-xl font-semibold text-cyber-cyan mb-8">
          Und genau hier beginnt die Wandlung vom Coder zum Architekten.
        </p>

        <!-- Section 2 -->
        <h2 class="text-3xl font-bold text-copper-orange mt-16 mb-6">
          Architektur ist kein Titel – es ist eine Haltung
        </h2>
        <p class="mb-4">
          Ich habe Softwarearchitektur immer als etwas wahrgenommen, das im Team "irgendwie nebenbei" entsteht. Jeder versteht seinen Bereich, man spricht miteinander – fertig.
        </p>
        <p class="mb-4">
          Aber wenn du eine KI in das System holst, reicht das nicht mehr.
        </p>
        <div class="bg-copper-orange/10 border border-copper-orange/30 rounded-lg p-6 my-8">
          <p class="font-semibold text-copper-orange mb-4">Du musst:</p>
          <ul class="space-y-2 text-off-white/90">
            <li class="flex items-start">
              <span class="text-cyber-cyan mr-3">▸</span> exakt sein
            </li>
            <li class="flex items-start">
              <span class="text-cyber-cyan mr-3">▸</span> vorausdenken
            </li>
            <li class="flex items-start">
              <span class="text-cyber-cyan mr-3">▸</span> Struktur schaffen
            </li>
            <li class="flex items-start">
              <span class="text-cyber-cyan mr-3">▸</span> Konsistenz halten
            </li>
            <li class="flex items-start">
              <span class="text-cyber-cyan mr-3">▸</span> Entscheidungen dokumentieren
            </li>
            <li class="flex items-start">
              <span class="text-cyber-cyan mr-3">▸</span> Klarheit herstellen
            </li>
          </ul>
        </div>
        <p>
          Ich habe also gelernt, anders zu arbeiten – nicht weniger technisch, aber viel präziser. Ich musste lernen, wie man für ein KI-Modell kommuniziert. Und das hat mich tatsächlich vom reinen Entwickler zum tatsächlichen Architekten gebracht.
        </p>

        <!-- Section 3 -->
        <h2 class="text-3xl font-bold text-copper-orange mt-16 mb-6">
          Mein System: Whitepaper → Workpaper → Agenten
        </h2>
        
        <!-- Content Image -->
        <figure class="my-12">
          <img 
            :src="previewImage" 
            alt="Fraktale Software-Architektur mit Source of Truth im Zentrum"
            class="w-full rounded-lg border border-cyber-cyan/30 shadow-2xl shadow-cyber-cyan/20"
          />
          <figcaption class="text-center text-sm text-off-white/60 mt-4">
            Fraktale Software-Architektur: Ein Source of Truth verzweigt sich in Module, Submodule und Services
          </figcaption>
        </figure>
        
        <p class="mb-8">Heute läuft jedes Projekt bei mir nach demselben Muster:</p>

        <h3 class="text-2xl font-bold text-cyber-cyan mt-12 mb-4">
          1. Whitepaper – die Quelle der Wahrheit
        </h3>
        <p class="mb-4">
          Bevor eine Zeile Code entsteht, schreibe ich ein Whitepaper. Bei komplexeren Projekten mehrere.
        </p>
        <div class="bg-void/50 border border-cyber-cyan/30 rounded-lg p-6 my-6">
          <p class="font-semibold text-cyber-cyan mb-3">Ein Whitepaper ist die größtmögliche Klarheit:</p>
          <ul class="space-y-2">
            <li>• Ziel</li>
            <li>• Umfang</li>
            <li>• Funktionen</li>
            <li>• Datenflüsse</li>
            <li>• Risiken</li>
            <li>• technische Rahmenbedingungen</li>
          </ul>
        </div>
        <p class="mb-4">
          Das Schreiben kann einen Tag dauern – manchmal länger.
        </p>
        <p class="text-lg font-semibold text-copper-orange">
          Aber es ist essenziell, denn ein gutes Whitepaper ist der Leuchtturm für mich und die KI.
        </p>

        <h3 class="text-2xl font-bold text-cyber-cyan mt-12 mb-4">
          2. Workpaper – die operativen Schritte
        </h3>
        <p class="mb-4">Das Workpaper ist die nächste Ebene:</p>
        <ul class="space-y-2 mb-6">
          <li class="flex items-start">
            <span class="text-copper-orange mr-3">▸</span> konkrete Tasks
          </li>
          <li class="flex items-start">
            <span class="text-copper-orange mr-3">▸</span> Reihenfolge
          </li>
          <li class="flex items-start">
            <span class="text-copper-orange mr-3">▸</span> benötigte Dateien
          </li>
          <li class="flex items-start">
            <span class="text-copper-orange mr-3">▸</span> technische Anforderungen
          </li>
          <li class="flex items-start">
            <span class="text-copper-orange mr-3">▸</span> Regeln für den Agenten
          </li>
          <li class="flex items-start">
            <span class="text-copper-orange mr-3">▸</span> Ausschlüsse
          </li>
        </ul>
        <p class="mb-4">
          Eigentlich wie Issues – nur extrem viel klarer, detaillierter und architektonischer.
        </p>
        <p class="mb-4">
          Ich schließe jedes Workpaper ab und starte das nächste. Mit Datum, Uhrzeit und Version.
        </p>
        <p class="font-semibold text-cyber-cyan">So entsteht Ordnung.</p>

        <h3 class="text-2xl font-bold text-cyber-cyan mt-12 mb-4">
          3. KI-Agenten
        </h3>
        <p class="mb-6">Erst dann lasse ich Agenten arbeiten.</p>
        <p class="mb-4">Und das funktioniert inzwischen beeindruckend gut:</p>
        <ul class="space-y-2 mb-6">
          <li>• Vue-/React-Projekte werden sauber initialisiert</li>
          <li>• Python-Backends strukturiert erstellt</li>
          <li>• zusätzliche Tools automatisch integriert</li>
          <li>• Ordnerstrukturen korrekt aufgebaut</li>
          <li>• Wiedererkennbare Patterns werden konsistent durchgezogen</li>
        </ul>
        <div class="bg-gradient-to-r from-copper-orange/20 to-cyber-cyan/20 border-l-4 border-copper-orange p-6 my-8 rounded-r">
          <p class="text-lg">Und ja:</p>
          <p class="text-2xl font-bold text-copper-orange mt-2">
            Claude ist beim Coding für mich Stand heute das Nonplusultra.
          </p>
          <p class="mt-2 text-off-white/80">Stabil, nachvollziehbar, strukturiert.</p>
        </div>

        <!-- Section 4 -->
        <h2 class="text-3xl font-bold text-copper-orange mt-16 mb-6">
          Wie Architektur mit KI wirklich funktioniert
        </h2>
        <p class="mb-4">
          Bei größeren Projekten – wie meinem aktuellen, das 29 Whitepapers umfasst – wird das System fraktal:
        </p>
        <ul class="space-y-3 mb-6">
          <li class="flex items-start">
            <span class="text-cyber-cyan mr-3 mt-1">▸</span>
            <span>Es gibt ein Haupt-Whitepaper.</span>
          </li>
          <li class="flex items-start">
            <span class="text-cyber-cyan mr-3 mt-1">▸</span>
            <span>Darunter einzelne Teilbereiche: Frontend, Backend, Admin, Datenbank, Submodule.</span>
          </li>
          <li class="flex items-start">
            <span class="text-cyber-cyan mr-3 mt-1">▸</span>
            <span>Und darunter wiederum Unterbereiche: Chat, Follower-System, Matching, Tools, Services usw.</span>
          </li>
        </ul>
        <p class="mb-6">Jede dieser Ebenen hat ein eigenes Whitepaper.</p>
        <p class="mb-4">
          Wenn ich in einem Bereich etwas ändere, muss das gesamte Informationsnetz konsistent bleiben – von oben nach unten. Das ist der Kern der neuen Architekturarbeit:
        </p>
        <p class="text-2xl font-bold text-center text-copper-orange my-8">
          Konsistenz + Klarheit + Synchronität.
        </p>
        <p class="mb-4">
          Deshalb ist der Architekt in Zeiten der KI wichtiger denn je. Ohne ihn verliert das Projekt seine narrative und technische Sprache.
        </p>
        <p class="font-semibold text-cyber-cyan">Und genau hier schließt sich der Kreis:</p>

        <!-- Section 5 - Final -->
        <h2 class="text-3xl font-bold text-copper-orange mt-16 mb-6">
          KI macht Entwickler nicht ersetzbar – sie macht uns unverzichtbar
        </h2>
        <p class="mb-4">Heute weiß ich:</p>
        <p class="mb-4">Ich bin nicht weniger Entwickler als früher.</p>
        <p class="text-xl font-bold text-cyber-cyan mb-8">
          Aber ich bin viel mehr Architekt geworden.
        </p>
        
        <div class="bg-void/50 border border-copper-orange/30 rounded-lg p-6 my-8">
          <p class="mb-4">KI schreibt Code.</p>
          <p class="mb-2">Aber sie versteht keine langfristigen Entscheidungen.</p>
          <p class="mb-2">Sie kennt keine Produktvision.</p>
          <p class="mb-2">Sie spürt keine impliziten Anforderungen.</p>
          <p class="mb-2">Sie erkennt keine gefährlichen Seiteneffekte.</p>
          <p class="mb-4">Und sie kann kein Projekt über Monate mental im Kopf tragen.</p>
          <p class="text-lg font-bold text-copper-orange">Das ist unsere Aufgabe.</p>
        </div>

        <div class="bg-gradient-to-r from-cyber-cyan/20 to-copper-orange/20 border-2 border-cyber-cyan/50 rounded-lg p-8 my-12 text-center">
          <p class="text-xl mb-4">Die KI ist kein Konkurrent.</p>
          <p class="text-2xl font-bold text-copper-orange mb-4">Sie ist ein Verstärker.</p>
          <p class="text-xl">Und sie ist so gut, wie wir sie führen.</p>
        </div>

        <!-- Closing -->
        <div class="border-t border-copper-orange/30 pt-8 mt-12">
          <p class="text-lg text-off-white/90 leading-relaxed">
            Wenn du wissen willst, wie dieses System funktioniert, wie man damit große Projekte baut oder wie sich KI-gestützte Architektur konkret anfühlt, dann lass uns die Reise gern weitergehen – denn das Zeitalter des reinen Codings ist vorbei.
          </p>
          <p class="text-2xl font-bold text-copper-orange mt-6 glow-pulse">
            Jetzt beginnt das Zeitalter der Architekten.
          </p>
        </div>
      </div>
    </article>

    <!-- Author & CTA Section -->
    <div class="max-w-4xl mx-auto px-4 py-12 border-t border-copper-orange/20">
      <div class="flex flex-col md:flex-row gap-8 items-center">
        <div class="flex-1">
          <p class="text-sm text-cyber-cyan mb-2">Geschrieben von</p>
          <p class="text-2xl font-bold text-copper-orange mb-2">DEVmatrose</p>
          <p class="text-off-white/80">
            Software-Architekt & Senior Developer seit 1999. Spezialisiert auf KI-gestützte Entwicklung, dezentrale Systeme und skalierbare Architektur.
          </p>
        </div>
        <div class="flex-shrink-0">
          <button @click="navigateToContact" class="btn btn-primary btn-lg glow-pulse">
            Lass uns ein Netz spinnen
          </button>
        </div>
      </div>
    </div>

    <!-- Related Posts placeholder -->
    <div class="max-w-4xl mx-auto px-4 py-12">
      <h3 class="text-2xl font-bold text-copper-orange mb-6">Weitere Artikel</h3>
      <div class="text-center text-off-white/60 py-12">
        Weitere Artikel folgen in Kürze...
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useHead } from '@unhead/vue'

const tags = ref([
  'KI-Entwicklung',
  'Software-Architektur',
  'Vibe Coding',
  'Claude AI',
  'Best Practices',
  'Whitepaper'
])

const basePath = import.meta.env.BASE_URL
const heroImage = computed(() => `${basePath}images/blog/architekten-hero.png`)
const previewImage = computed(() => `${basePath}images/blog/architekten-preview.png`)

const linkCopied = ref(false)

const copyArticleLink = async () => {
  // Use static HTML page for better social media previews
  const articleUrl = `${window.location.origin}${basePath}blog-vom-code-zum-architekten.html`
  try {
    await navigator.clipboard.writeText(articleUrl)
    linkCopied.value = true
    setTimeout(() => {
      linkCopied.value = false
    }, 3000)
  } catch (err) {
    console.error('Failed to copy link:', err)
  }
}

const navigateToHome = () => {
  window.dispatchEvent(new CustomEvent('navigate', { detail: 'home' }))
}

const navigateToBlog = () => {
  window.dispatchEvent(new CustomEvent('navigate', { detail: 'blog' }))
}

const navigateToContact = () => {
  window.dispatchEvent(new CustomEvent('navigate', { detail: 'contact' }))
}

// Meta-Tags für Social Media
useHead({
  title: 'Vom Coder zum Architekten: Warum KI meine Arbeit nicht ersetzt, sondern erweitert | DEVmatrose',
  meta: [
    { name: 'description', content: 'Seit 1999 Entwickler, seit 2024 KI-Architekt. Wie mich die Arbeit mit Claude, GPT und Co. vom reinen Coder zum Software-Architekten gemacht hat – und warum das die Zukunft ist.' },
    
    // Open Graph
    { property: 'og:type', content: 'article' },
    { property: 'og:title', content: 'Vom Coder zum Architekten: Warum KI meine Arbeit erweitert' },
    { property: 'og:description', content: 'Von 25 Jahren Entwicklung bis zur KI-gestützten Architektur: Wie Whitepaper, Workpaper und KI-Agenten meine Arbeitsweise revolutioniert haben.' },
    { property: 'og:image', content: 'https://devmatrose.github.io/devmatrose/images/blog/architekten-preview.png' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:url', content: 'https://devmatrose.github.io/devmatrose/#blog' },
    { property: 'article:published_time', content: '2025-12-02' },
    { property: 'article:author', content: 'DEVmatrose' },
    { property: 'article:section', content: 'KI & Architektur' },
    
    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Vom Coder zum Architekten: Meine Reise mit KI' },
    { name: 'twitter:description', content: 'Wie KI mich vom reinen Coder zum Software-Architekten gemacht hat – und warum das die Zukunft ist.' },
    { name: 'twitter:image', content: 'https://devmatrose.github.io/devmatrose/images/blog/architekten-preview.png' },
  ]
})
</script>

<style scoped>
.glow-pulse {
  animation: glow 4s ease-in-out infinite;
}

@keyframes glow {
  0%, 100% {
    box-shadow: 0 0 5px rgba(255, 140, 66, 0.3);
  }
  50% {
    box-shadow: 0 0 20px rgba(255, 140, 66, 0.6), 0 0 30px rgba(255, 140, 66, 0.4);
  }
}

.prose {
  color: #e0e6ed;
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
  line-height: 1.8;
}

.prose ul {
  margin: 1.5rem 0;
}

.prose li {
  line-height: 1.8;
}
</style>
