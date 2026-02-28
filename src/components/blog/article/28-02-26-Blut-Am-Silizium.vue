<template>
  <div class="min-h-screen bg-void text-off-white">
    <!-- Hero Image -->
    <div class="relative w-full h-96 overflow-hidden">
      <img 
        :src="heroImage" 
        alt="Blut am Silizium – Das schmutzige Geheimnis hinter deiner sauberen KI"
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
          <span class="text-off-white">Blut am Silizium</span>
        </nav>

        <!-- Meta Info & Share -->
        <div class="flex flex-wrap gap-4 items-center justify-between mb-6 text-sm">
          <div class="flex flex-wrap gap-4 text-off-white/70">
            <span>📅 28. Februar 2026</span>
            <span>•</span>
            <span>⏱️ 10 min Lesezeit</span>
            <span>•</span>
            <span>⚖️ Ethik & Gesellschaft</span>
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
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-copper-orange mb-6 glow-pulse leading-tight">
          Blut am Silizium
        </h1>

        <!-- Subtitle -->
        <p class="text-xl sm:text-2xl text-cyber-cyan/90 mb-8 leading-relaxed">
          Das schmutzige Geheimnis hinter deiner „sauberen" KI
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
          <p class="text-xl text-off-white/90 italic m-0">
            Wir feiern die KI-Revolution. Wir staunen über Bilder, die aus dem Nichts entstehen, und Texte, die klingen wie von Geisterhand geschrieben. Aber während wir uns in der klimatisierten Cloud sonnen, schuften im Keller Millionen von Menschen, die wir geflissentlich ignorieren.
          </p>
        </div>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Wir reden über Milliardenbewertungen, über Nvidia-Aktien und darüber, wie „effizient" wir alle werden. Es ist Zeit, den Dreck unter dem Teppich hervorzuholen. Denn die Wahrheit ist:
        </p>

        <div class="p-6 bg-red-500/10 border border-red-500/30 rounded-lg my-8 text-center">
          <p class="text-xl text-red-400 font-bold m-0">
            Deine „magische" KI ist kein technologisches Wunder. Sie ist das Ergebnis digitaler Fließbandarbeit zu Hungerlöhnen.
          </p>
        </div>

        <!-- 1. Die Legende vom Selbstlernenden System -->
        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          1️⃣ Die Legende vom „Selbstlernenden System"
        </h2>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Das Marketing verkauft uns die Erzählung von der KI, die „einfach lernt". <strong class="text-copper-orange">Bullshit.</strong> KI lernt nicht wie ein Kind, das die Welt entdeckt. KI ist eine statistische Maschine, die Milliarden von Beispielen braucht, die ihr ein Mensch vorher erklärt hat.
        </p>

        <!-- Was Menschen labeln -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
          <div class="p-4 bg-off-white/5 border border-off-white/20 rounded-lg text-center">
            <span class="text-2xl block mb-2">🚶</span>
            <p class="text-off-white/80 text-sm italic m-0">„Das ist ein Fußgänger."</p>
          </div>
          <div class="p-4 bg-off-white/5 border border-off-white/20 rounded-lg text-center">
            <span class="text-2xl block mb-2">🚫</span>
            <p class="text-off-white/80 text-sm italic m-0">„Das ist Hassrede."</p>
          </div>
          <div class="p-4 bg-off-white/5 border border-off-white/20 rounded-lg text-center">
            <span class="text-2xl block mb-2">✅</span>
            <p class="text-off-white/80 text-sm italic m-0">„Dieser Code ist korrekt."</p>
          </div>
        </div>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Wer macht diese Arbeit? Nicht die hochbezahlten Ingenieure in San Francisco oder Paris.
        </p>

        <!-- Die Menschen dahinter -->
        <div class="p-6 bg-gradient-to-r from-red-500/10 via-void to-red-500/10 border border-red-500/30 rounded-lg my-8">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-4">
            <div class="p-3">
              <span class="text-2xl block mb-1">🇰🇪</span>
              <span class="text-off-white/80 text-sm">Kenia</span>
            </div>
            <div class="p-3">
              <span class="text-2xl block mb-1">🇵🇭</span>
              <span class="text-off-white/80 text-sm">Philippinen</span>
            </div>
            <div class="p-3">
              <span class="text-2xl block mb-1">🇮🇳</span>
              <span class="text-off-white/80 text-sm">Indien</span>
            </div>
            <div class="p-3">
              <span class="text-2xl block mb-1">🇻🇪</span>
              <span class="text-off-white/80 text-sm">Venezuela</span>
            </div>
          </div>
          <p class="text-off-white/80 text-sm text-center m-0">
            Menschen, die für <strong class="text-red-400">30 Cent für vier Stunden Arbeit</strong> Bilder von Gewalt, Missbrauch und Tod sortieren, damit dein Chatbot „safe" bleibt.
          </p>
        </div>

        <div class="p-4 bg-copper-orange/10 border-l-4 border-copper-orange rounded-r-lg my-8">
          <p class="text-off-white/90 m-0">
            Wir haben die Sklaverei nicht abgeschafft. Wir haben sie nur in die <strong class="text-copper-orange">digitale Lieferkette ausgelagert</strong>.
          </p>
        </div>

        <!-- 2. Das organisierte Wegschauen -->
        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          2️⃣ Das organisierte Wegschauen: Die Subunternehmer-Lüge
        </h2>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Wenn man die großen Player fragt, was da schief läuft, kommt die Standard-Antwort:
        </p>

        <div class="p-6 bg-emerald-500/10 border border-emerald-500/30 rounded-lg my-8 text-center">
          <p class="text-lg text-emerald-400 italic m-0">
            „Wir haben strenge Richtlinien für unsere Partner."
          </p>
        </div>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Das ist die modernste Form der <strong class="text-copper-orange">Pontius-Pilatus-Taktik</strong>. Man schaltet drei Schichten von Subunternehmern dazwischen, damit man am Ende sagen kann: „Wir wussten von nichts."
        </p>

        <!-- Subunternehmer-Kette visualisiert -->
        <div class="p-6 bg-void border border-off-white/20 rounded-lg my-8">
          <div class="flex flex-col md:flex-row items-center justify-center gap-3">
            <div class="p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg text-center min-w-[140px]">
              <span class="text-2xl block mb-1">🏢</span>
              <span class="text-blue-400 text-sm font-semibold">KI-Konzern</span>
              <p class="text-off-white/50 text-xs mt-1 m-0">„Wir sind ethisch."</p>
            </div>
            <span class="text-off-white/30 text-2xl">→</span>
            <div class="p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg text-center min-w-[140px]">
              <span class="text-2xl block mb-1">🏭</span>
              <span class="text-amber-400 text-sm font-semibold">Subunternehmer A</span>
              <p class="text-off-white/50 text-xs mt-1 m-0">Outsourcing</p>
            </div>
            <span class="text-off-white/30 text-2xl">→</span>
            <div class="p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg text-center min-w-[140px]">
              <span class="text-2xl block mb-1">🏚️</span>
              <span class="text-amber-400 text-sm font-semibold">Subunternehmer B</span>
              <p class="text-off-white/50 text-xs mt-1 m-0">Re-Outsourcing</p>
            </div>
            <span class="text-off-white/30 text-2xl">→</span>
            <div class="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-center min-w-[140px]">
              <span class="text-2xl block mb-1">👤</span>
              <span class="text-red-400 text-sm font-semibold">Arbeiter</span>
              <p class="text-off-white/50 text-xs mt-1 m-0">0,30 € / 4 Stunden</p>
            </div>
          </div>
        </div>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Die Wahrheit ist: <strong class="text-red-400">Das System ist so gewollt.</strong> Ohne dieses Lohngefälle wären die Modelle nicht finanzierbar. Die Milliardenbewertungen basieren auf der massiven Ausbeutung von Arbeitskraft im Globalen Süden.
        </p>

        <div class="p-4 bg-red-500/10 border-l-4 border-red-500 rounded-r-lg my-8">
          <p class="text-off-white/90 m-0">
            Wer behauptet, er baue „ethische KI" und nutzt gleichzeitig Datensätze aus diesen Quellen, <strong class="text-red-400">lügt sich und seinen Kunden in die Tasche</strong>.
          </p>
        </div>

        <!-- 3. Auch wir sitzen im Glashaus -->
        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          3️⃣ Auch wir sitzen im Glashaus
        </h2>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Machen wir uns nichts vor: Auch europäische Vorzeige-Projekte wie Mistral oder deutsche Anbieter greifen auf diese Datensätze zu. Warum? Weil es auf dem internationalen Markt <strong class="text-copper-orange">kaum Alternativen gibt</strong>.
        </p>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Wer heute ein Modell trainiert, kauft Daten, die mit Tränen und Schweiß etikettiert wurden.
        </p>

        <!-- Wir sind Teil des Systems -->
        <div class="p-6 bg-gradient-to-r from-copper-orange/10 via-cyber-cyan/5 to-copper-orange/10 border border-copper-orange/20 rounded-lg my-8">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div class="p-4">
              <span class="text-2xl block mb-2">🧑‍💼</span>
              <p class="text-copper-orange font-semibold text-sm m-0">Berater</p>
              <p class="text-off-white/60 text-xs mt-1 m-0">Empfehlen KI-Tools</p>
            </div>
            <div class="p-4">
              <span class="text-2xl block mb-2">🏗️</span>
              <p class="text-copper-orange font-semibold text-sm m-0">Architekten</p>
              <p class="text-off-white/60 text-xs mt-1 m-0">Bauen damit Systeme</p>
            </div>
            <div class="p-4">
              <span class="text-2xl block mb-2">👩‍💻</span>
              <p class="text-copper-orange font-semibold text-sm m-0">Nutzer</p>
              <p class="text-off-white/60 text-xs mt-1 m-0">Buchen „schnell & billig"</p>
            </div>
          </div>
          <p class="text-off-white/80 text-sm text-center mt-4 m-0">
            Wir profitieren von der Produktivität, die auf dem Rücken von Menschen aufgebaut wurde, die sich selbst keinen Computer leisten können.
          </p>
        </div>

        <!-- 4. Regulatorisches Karma -->
        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          4️⃣ Die kommende Quittung: Regulatorisches Karma
        </h2>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Der Wind dreht sich. In Kenia organisieren sich die ersten Gewerkschaften für Content-Moderatoren. In Europa wird der Ruf nach Transparenz lauter.
        </p>

        <div class="p-6 bg-cyber-cyan/10 border border-cyber-cyan/30 rounded-lg my-8">
          <h3 class="text-lg font-bold text-cyber-cyan mb-4 m-0">Der „Fair-Trade-Nachweis" für KI-Modelle wird kommen:</h3>
          <div class="space-y-4">
            <div class="flex gap-4 items-start">
              <div class="w-8 h-8 rounded-full bg-cyber-cyan/20 border border-cyber-cyan/50 flex items-center justify-center flex-shrink-0 text-sm text-cyber-cyan font-bold">?</div>
              <p class="text-off-white/80 text-sm m-0"><strong class="text-cyber-cyan">Woher</strong> kommen die Daten?</p>
            </div>
            <div class="flex gap-4 items-start">
              <div class="w-8 h-8 rounded-full bg-cyber-cyan/20 border border-cyber-cyan/50 flex items-center justify-center flex-shrink-0 text-sm text-cyber-cyan font-bold">?</div>
              <p class="text-off-white/80 text-sm m-0"><strong class="text-cyber-cyan">Wer</strong> hat sie gelabelt?</p>
            </div>
            <div class="flex gap-4 items-start">
              <div class="w-8 h-8 rounded-full bg-cyber-cyan/20 border border-cyber-cyan/50 flex items-center justify-center flex-shrink-0 text-sm text-cyber-cyan font-bold">?</div>
              <p class="text-off-white/80 text-sm m-0">Wurden diese Menschen <strong class="text-cyber-cyan">fair bezahlt</strong> und psychologisch betreut?</p>
            </div>
          </div>
        </div>

        <div class="p-4 bg-copper-orange/10 border-l-4 border-copper-orange rounded-r-lg my-8">
          <p class="text-off-white/90 m-0">
            Wer das heute ignoriert, wird morgen vor den <strong class="text-copper-orange">Trümmern seiner Compliance</strong> stehen.
          </p>
        </div>

        <!-- Fazit -->
        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          Fazit: Hört auf zu klatschen, fangt an zu fragen!
        </h2>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          KI ist kein reines IT-Thema. Es ist ein <strong class="text-copper-orange">machtpolitisches Thema</strong>.
        </p>

        <div class="p-6 bg-red-500/10 border border-red-500/30 rounded-lg my-8 text-center">
          <p class="text-xl text-red-400 font-bold m-0">
            Digitaler Kolonialismus im 21. Jahrhundert
          </p>
          <p class="text-off-white/70 text-sm mt-3 m-0">
            Wir extrahieren die geistige Arbeit aus dem Süden, konzentrieren den Profit im Norden und vernichten nebenbei die Jobs der Kreativen weltweit.
          </p>
        </div>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Es ist an der Zeit, dass wir als Branche ehrlich werden. <strong class="text-cyber-cyan">„Responsible AI"</strong> ist kein Feature, das man mit einem Software-Update einspielt. Es fängt damit an, dass wir aufhören, Subunternehmer-Verbrecher zu finanzieren und stattdessen anfangen, <strong class="text-copper-orange">faire Preise für faire Daten</strong> zu zahlen.
        </p>

        <!-- Closing -->
        <div class="p-6 bg-copper-orange/10 border border-copper-orange/30 rounded-lg my-8">
          <p class="text-xl text-copper-orange font-bold m-0">
            Alles andere ist kein Fortschritt. Es ist nur gut verpackte Ausbeutung.
          </p>
        </div>

        <!-- Teilen-Aufforderung -->
        <div class="p-6 bg-gradient-to-r from-copper-orange/10 via-cyber-cyan/5 to-copper-orange/10 border border-copper-orange/20 rounded-lg my-8 text-center">
          <p class="text-lg text-off-white/90 m-0">
            <strong class="text-copper-orange">Teilt diesen Text</strong>, wenn ihr findet, dass die Branche ehrlicher werden muss.
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
const title = 'Blut am Silizium: Das schmutzige Geheimnis hinter deiner „sauberen" KI'
const description = 'Ein ehrlicher Blick in den Maschinenraum der Macht: Wie Millionen Menschen im Globalen Süden für Hungerlöhne deine KI trainieren – und warum wir alle Teil des Problems sind.'
const tags = ref([
  'KI-Ethik',
  'Ausbeutung',
  'Datenlabel',
  'Fair Trade',
  'Digitaler Kolonialismus',
  'Responsible AI'
])

// Hero Image
const basePath = import.meta.env.BASE_URL
const heroImage = computed(() => `${basePath}images/blog/blutsilizium.png`)

// State
const linkCopied = ref(false)

// SEO Meta Tags
onMounted(() => {
  useSEO({
    title: title,
    description: description,
    image: '/images/blog/blutsilizium.png',
    url: '/blog/blut-am-silizium',
    type: 'article',
    author: 'Ogerly – DEVmatrose',
    publishedTime: '2026-02-28',
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
