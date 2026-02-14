<template>
  <div class="min-h-screen bg-void text-off-white">
    <!-- Hero Image -->
    <div class="relative w-full h-96 overflow-hidden">
      <img 
        :src="heroImage" 
        alt="Kontinente der Intelligenz – Wie sich die Welt in KI-Ökosysteme aufteilt"
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
          <span class="text-off-white">Kontinente der Intelligenz</span>
        </nav>

        <!-- Meta Info & Share -->
        <div class="flex flex-wrap gap-4 items-center justify-between mb-6 text-sm">
          <div class="flex flex-wrap gap-4 text-off-white/70">
            <span>📅 14. Februar 2026</span>
            <span>•</span>
            <span>⏱️ 12 min Lesezeit</span>
            <span>•</span>
            <span>🌍 Geopolitik & KI</span>
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
          Kontinente der Intelligenz
        </h1>

        <!-- Subtitle -->
        <p class="text-xl sm:text-2xl text-cyber-cyan/90 mb-8 leading-relaxed">
          Wie sich die Welt in KI-Ökosysteme aufteilt
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
          Wir erleben keinen gewöhnlichen Technologiewandel. Wir erleben eine <span class="text-copper-orange font-semibold">tektonische Verschiebung.</span>
        </p>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Nicht nur Unternehmen oder Staaten konkurrieren. <strong class="text-copper-orange">Kontinente beginnen, eigene KI-Identitäten auszubilden.</strong>
        </p>

        <p class="text-lg text-off-white/90 leading-relaxed mb-8">
          Was sich gerade formt, ist mehr als Innovation. Es ist eine neue geopolitische Schichtung von Intelligenz.
        </p>

        <!-- Section: USA -->
        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          🇺🇸 Die Vereinigten Staaten – KI als Infrastruktur-Imperium
        </h2>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Die USA denken KI in Größenordnungen. Dominierende Akteure wie <span class="text-cyber-cyan font-semibold">OpenAI, Google DeepMind, Meta, NVIDIA</span> und <span class="text-cyber-cyan font-semibold">xAI</span> bauen nicht einfach Modelle – sie bauen <strong class="text-copper-orange">Rechenzentren als geopolitische Machtinstrumente</strong>.
        </p>

        <ul class="list-none space-y-3 my-8">
          <li class="flex items-start gap-3">
            <span class="text-cyber-cyan text-2xl">→</span>
            <span class="text-off-white/90">Hyperscaler-Netzwerke</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-cyber-cyan text-2xl">→</span>
            <span class="text-off-white/90">GPU-Farmen im Gigawatt-Bereich</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-cyber-cyan text-2xl">→</span>
            <span class="text-off-white/90">Energieverträge in Größenordnungen ganzer Städte</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-cyber-cyan text-2xl">→</span>
            <span class="text-off-white/90">Vertikale Integration von Chip bis Cloud</span>
          </li>
        </ul>

        <div class="p-6 bg-copper-orange/10 border-l-4 border-copper-orange rounded-r-lg my-8">
          <p class="text-copper-orange font-semibold text-lg mb-2">
            ⚡ Strategie
          </p>
          <p class="text-off-white/90">
            Hier ist KI kein Feature. Sie ist <strong>Infrastruktur</strong>. Amerika verfolgt eine klare Strategie: Skalierung + Plattformdominanz + Kapitalakkumulation. Das Modell ist häufig proprietär. Offenheit wird strategisch eingesetzt – nicht ideologisch.
          </p>
        </div>

        <!-- Section: China -->
        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          🇨🇳 China – Koordinierte Intelligenz
        </h2>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          China operiert anders. Unternehmen wie <span class="text-cyber-cyan font-semibold">Baidu, Alibaba, Tencent</span> oder <span class="text-cyber-cyan font-semibold">SenseTime</span> sind eingebettet in eine staatlich koordinierte Technologiepolitik.
        </p>

        <ul class="list-none space-y-3 my-8">
          <li class="flex items-start gap-3">
            <span class="text-cyber-cyan text-2xl">→</span>
            <span class="text-off-white/90">Massive Datenskalierung</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-cyber-cyan text-2xl">→</span>
            <span class="text-off-white/90">Verzahnung von Robotik und KI</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-cyber-cyan text-2xl">→</span>
            <span class="text-off-white/90">Industrielle Automatisierung</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-cyber-cyan text-2xl">→</span>
            <span class="text-off-white/90">Computer Vision und Überwachungssysteme</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-cyber-cyan text-2xl">→</span>
            <span class="text-off-white/90">Hohe Geschwindigkeit in Umsetzung und Iteration</span>
          </li>
        </ul>

        <div class="p-6 bg-cyber-cyan/10 border-l-4 border-cyber-cyan rounded-r-lg my-8">
          <p class="text-cyber-cyan font-semibold text-lg mb-2">
            💡 Koordinierter Fortschritt
          </p>
          <p class="text-off-white/90">
            China denkt KI nicht primär als Plattform – sondern als <strong>Produktivitäts- und Stabilitätsmaschine</strong>. Weniger fragmentiert. Stärker zentralisiert.
          </p>
        </div>

        <!-- Section: Europa -->
        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          🇪🇺 Europa – Der Werkbank-Kontinent
        </h2>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Europa wirkt leiser. Aber das ist eine Fehleinschätzung. Akteure wie <span class="text-cyber-cyan font-semibold">Mistral AI, Aleph Alpha</span> oder <span class="text-cyber-cyan font-semibold">n8n</span> zeigen einen anderen Geist.
        </p>

        <ul class="list-none space-y-3 my-8">
          <li class="flex items-start gap-3">
            <span class="text-cyber-cyan text-2xl">→</span>
            <span class="text-off-white/90">Weniger Kapital</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-cyber-cyan text-2xl">→</span>
            <span class="text-off-white/90">Mehr Regulierung</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-cyber-cyan text-2xl">→</span>
            <span class="text-off-white/90">Starkes Open-Source-Mindset</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-cyber-cyan text-2xl">→</span>
            <span class="text-off-white/90">Mittelstandsorientierung</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-cyber-cyan text-2xl">→</span>
            <span class="text-off-white/90">Fokus auf Souveränität</span>
          </li>
        </ul>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Hier wird KI nicht primär als Monopolmaschine gedacht. Sondern als <span class="text-copper-orange font-semibold">Werkzeug</span>. Europa ist Bastelwerkstatt, Labor, Diskursraum. Das kann Schwäche sein. Oder langfristige Resilienz.
        </p>

        <div class="p-6 bg-copper-orange/10 border-l-4 border-copper-orange rounded-r-lg my-8">
          <p class="text-copper-orange font-semibold text-lg mb-2">
            🔧 Europas DNA
          </p>
          <p class="text-off-white/90">
            Während andere Kontinente skalieren, experimentiert Europa.
          </p>
        </div>

        <!-- Section: Russland -->
        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          🇷🇺 Russland – Strategische Intelligenz
        </h2>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Russland ist weniger sichtbar im zivilen LLM-Wettlauf. Doch traditionell stark in:
        </p>

        <ul class="list-none space-y-3 my-8">
          <li class="flex items-start gap-3">
            <span class="text-cyber-cyan text-2xl">→</span>
            <span class="text-off-white/90">Mathematik</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-cyber-cyan text-2xl">→</span>
            <span class="text-off-white/90">Kryptographie</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-cyber-cyan text-2xl">→</span>
            <span class="text-off-white/90">Cybertechnologien</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-cyber-cyan text-2xl">→</span>
            <span class="text-off-white/90">Militärische Integration</span>
          </li>
        </ul>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          KI wird hier vermutlich primär als <strong class="text-copper-orange">strategisches Sicherheitsinstrument</strong> verstanden. Nicht als Konsumentenplattform.
        </p>

        <!-- Section: Afrika & Südamerika -->
        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          🌍 Afrika und Südamerika – die unterschätzten Räume
        </h2>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Was oft als „ruhig" wahrgenommen wird, ist in Wahrheit:
        </p>

        <ul class="list-none space-y-3 my-8">
          <li class="flex items-start gap-3">
            <span class="text-cyber-cyan text-2xl">→</span>
            <span class="text-off-white/90">Leapfrogging</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-cyber-cyan text-2xl">→</span>
            <span class="text-off-white/90">Lokale KI-Lösungen</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-cyber-cyan text-2xl">→</span>
            <span class="text-off-white/90">Agrar- und FinTech-Innovation</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-cyber-cyan text-2xl">→</span>
            <span class="text-off-white/90">Sprachspezifische Modelle</span>
          </li>
        </ul>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Afrika nutzt KI pragmatisch. Südamerika integriert Robotik in industrielle und agrarische Prozesse. Nicht spektakulär medial. Aber <span class="text-cyber-cyan font-semibold">strukturell relevant</span>.
        </p>

        <!-- Section: Vom Nationalismus zum Kontinentalismus -->
        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          Vom Nationalismus zum Kontinentalismus
        </h2>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Wir beobachten eine Verschiebung. Früher: Nationalstaaten. Heute: <span class="text-copper-orange font-semibold">Technologische Blöcke.</span>
        </p>

        <ul class="list-none space-y-3 my-8">
          <li class="flex items-start gap-3">
            <span class="text-cyber-cyan text-2xl">→</span>
            <span class="text-off-white/90">Chip-Embargos</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-cyber-cyan text-2xl">→</span>
            <span class="text-off-white/90">Datensouveränität</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-cyber-cyan text-2xl">→</span>
            <span class="text-off-white/90">AI Acts</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-cyber-cyan text-2xl">→</span>
            <span class="text-off-white/90">Digitale Abschottung</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-cyber-cyan text-2xl">→</span>
            <span class="text-off-white/90">Infrastruktur als geopolitisches Druckmittel</span>
          </li>
        </ul>

        <div class="p-6 bg-cyber-cyan/10 border-l-4 border-cyber-cyan rounded-r-lg my-8">
          <p class="text-cyber-cyan font-semibold text-lg mb-2">
            🌐 Multipolare KI-Welt
          </p>
          <p class="text-off-white/90">
            Was entsteht, ist eine multipolare KI-Welt. Nicht eine globale Intelligenz. Sondern mehrere.
          </p>
        </div>

        <!-- Section: Open Source vs. Geschlossene Systeme -->
        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          Open Source vs. Geschlossene Systeme
        </h2>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Hier entscheidet sich viel.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div class="p-6 bg-copper-orange/10 border border-copper-orange/30 rounded-lg">
            <p class="text-copper-orange font-semibold text-lg mb-3">Geschlossene Modelle</p>
            <ul class="space-y-2 text-off-white/80">
              <li>→ Geschwindigkeit</li>
              <li>→ Integration</li>
              <li>→ API-Ökosysteme</li>
              <li>→ Kapital</li>
            </ul>
          </div>
          <div class="p-6 bg-cyber-cyan/10 border border-cyber-cyan/30 rounded-lg">
            <p class="text-cyber-cyan font-semibold text-lg mb-3">Open Source</p>
            <ul class="space-y-2 text-off-white/80">
              <li>→ Anpassbarkeit</li>
              <li>→ Resilienz</li>
              <li>→ Dezentralität</li>
              <li>→ Community</li>
            </ul>
          </div>
        </div>

        <div class="p-6 bg-void border border-cyber-cyan/30 rounded-lg my-8">
          <p class="text-lg text-off-white/90 italic">
            Die Frage ist nicht, wer technisch besser ist. Die Frage ist: <span class="text-cyber-cyan font-semibold">Welche Struktur überlebt geopolitische Spannungen?</span>
          </p>
        </div>

        <!-- Section: Philosophische Verschiebung -->
        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          Die eigentliche philosophische Verschiebung
        </h2>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Wenn sich Kontinente technologisch entkoppeln, entkoppeln sich auch:
        </p>

        <ul class="list-none space-y-3 my-8">
          <li class="flex items-start gap-3">
            <span class="text-copper-orange text-2xl">⚡</span>
            <span class="text-off-white/90">Wissensmodelle</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-copper-orange text-2xl">⚡</span>
            <span class="text-off-white/90">Moralparameter</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-copper-orange text-2xl">⚡</span>
            <span class="text-off-white/90">Trainingsdaten</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-copper-orange text-2xl">⚡</span>
            <span class="text-off-white/90">Normative Filter</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-copper-orange text-2xl">⚡</span>
            <span class="text-off-white/90">Wahrheitsregime</span>
          </li>
        </ul>

        <div class="p-6 bg-copper-orange/10 border-l-4 border-copper-orange rounded-r-lg my-8">
          <p class="text-copper-orange font-semibold text-lg mb-2">
            🔮 Strukturelle Möglichkeit
          </p>
          <p class="text-off-white/90">
            Wir bewegen uns möglicherweise in eine Welt, in der jede Region ihre eigene KI-Realität erzeugt. Das ist keine dystopische Vision. Es ist eine strukturelle Möglichkeit.
          </p>
        </div>

        <!-- Section: Europas Chance -->
        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          Europas Chance
        </h2>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Europa könnte verlieren. Oder gewinnen.
        </p>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Nicht durch Größe. Nicht durch Energie. Nicht durch Kapital.
        </p>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Sondern durch:
        </p>

        <!-- Final Callout -->
        <div class="p-8 bg-gradient-to-br from-copper-orange/20 via-cyber-cyan/10 to-void border border-copper-orange/40 rounded-lg my-12 text-center">
          <p class="text-2xl text-copper-orange font-bold mb-4">
            Interoperabilität · Offene Standards · Ethische Rahmen
          </p>
          <p class="text-lg text-off-white/90">
            Europas Stärke liegt nicht in der Skalierung, sondern in der Verbindung.
          </p>
          <p class="text-cyber-cyan mt-4 font-semibold">
            Nicht wer die größte KI hat, gewinnt – sondern wer die offenste baut.
          </p>
        </div>

        <!-- Closing -->
        <p class="text-lg text-off-white/70 leading-relaxed mt-12 italic border-t border-copper-orange/20 pt-6">
          Dieser Artikel ist Teil einer Serie über KI-Geopolitik, dezentrale Systeme und die Zukunft der technologischen Souveränität.
        </p>

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
const title = "Kontinente der Intelligenz: Wie sich die Welt in KI-Ökosysteme aufteilt"
const description = "Wir erleben eine tektonische Verschiebung: Kontinente bilden eigene KI-Identitäten aus. Von US-Hyperscalern über Chinas koordinierte Intelligenz bis zu Europas Open-Source-Werkbank."
const tags = ref([
  "Geopolitik", 
  "KI-Ökosysteme", 
  "Open Source", 
  "Dezentralisierung",
  "Europa",
  "KI-Souveränität"
])

// Hero Image
const basePath = import.meta.env.BASE_URL
const heroImage = computed(() => `${basePath}images/blog/kontitent-der-intelligenz.png`)

// State
const linkCopied = ref(false)

// SEO Meta Tags
onMounted(() => {
  useSEO({
    title: title,
    description: description,
    image: '/images/blog/kontitent-der-intelligenz.png',
    url: '/blog/kontinente-der-intelligenz',
    type: 'article',
    author: 'Alexander Friedland (@ogerly)',
    publishedTime: '2026-02-14',
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

.prose strong {
  font-weight: 600;
}
</style>
