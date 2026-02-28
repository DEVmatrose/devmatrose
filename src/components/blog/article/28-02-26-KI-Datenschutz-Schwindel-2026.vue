<template>
  <div class="min-h-screen bg-void text-off-white">
    <!-- Hero Image -->
    <div class="relative w-full h-96 overflow-hidden">
      <img 
        :src="heroImage" 
        alt="Der große KI-Datenschutz-Schwindel 2026 – Kein Training mit Ihren Daten?"
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
          <span class="text-off-white">KI-Datenschutz-Schwindel 2026</span>
        </nav>

        <!-- Meta Info & Share -->
        <div class="flex flex-wrap gap-4 items-center justify-between mb-6 text-sm">
          <div class="flex flex-wrap gap-4 text-off-white/70">
            <span>📅 28. Februar 2026</span>
            <span>•</span>
            <span>⏱️ 10 min Lesezeit</span>
            <span>•</span>
            <span>🔥 Datenschutz & Polemik</span>
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
          Der große KI-Datenschutz-Schwindel 2026
        </h1>

        <!-- Subtitle -->
        <p class="text-xl sm:text-2xl text-cyber-cyan/90 mb-8 leading-relaxed">
          „Kein Training mit Ihren Daten" – der dümmste Weihnachtsmann-Glaube der Dekade
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

        <!-- Disclaimer -->
        <div class="p-4 bg-off-white/5 border border-off-white/20 rounded-lg my-8 text-center">
          <p class="text-sm text-off-white/50 italic m-0">
            Polemisches Feuer basierend auf jahrelanger Branchenbeobachtung, Kritik von Datenschutz-Experten und realen technischen Fakten. Keine namentliche Nennung – das System spricht für sich.
          </p>
        </div>

        <!-- Intro -->
        <div class="p-6 bg-copper-orange/10 border-l-4 border-copper-orange rounded-r-lg my-8">
          <p class="text-lg text-off-white/90 italic m-0">
            Eine „unbequeme Wahrheit" ist faktisch genauso wahr wie eine bequeme – sie ist nur deshalb „unbequem", weil sie uns dazu zwingt, eine liebgewonnene Illusion aufzugeben oder unseren Arsch zu bewegen.
          </p>
        </div>

        <!-- Szenario -->
        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Stellt euch vor: Ihr seid ein kleiner Mittelständler, eine Behörde oder ein Kanzlei-Chef in Deutschland. Die DSGVO sitzt euch im Nacken wie ein nasser Mantel, ChatGPT & Co. locken mit Produktivitätswundern – aber euer Datenschutzbeauftragter blockt alles, weil <em class="text-off-white/60">„Daten könnten ins Ausland fliegen und für Training missbraucht werden"</em>.
        </p>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Da tauchen plötzlich Anbieter auf, die euch mit treuherzigem Blick ins Auge schauen und flüstern:
        </p>

        <!-- Das Versprechen -->
        <div class="p-6 bg-emerald-500/10 border border-emerald-500/30 rounded-lg my-8">
          <div class="text-center mb-3">
            <span class="text-3xl">🎅</span>
          </div>
          <div class="space-y-2 text-center">
            <p class="text-emerald-400 font-semibold m-0">„Keine Sorge. Kein Training mit Ihren Daten."</p>
            <p class="text-emerald-400/80 m-0">„100 % DSGVO-konform. Hosting in der EU."</p>
            <p class="text-emerald-400/80 m-0">„Wir filtern alles Persönliche raus."</p>
            <p class="text-emerald-400/80 m-0">„Eure Daten bleiben eure Daten. Versprochen!"</p>
          </div>
        </div>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Klingt wie ein Traum? Ist es auch – ein feuchter Traum für die Marketingabteilungen, ein Albtraum für jeden, der mal genauer hinschaut. Denn diese Parole <strong class="text-copper-orange">„Kein Training mit Ihren Daten"</strong> ist der größte Sand, der seit Jahren in die Augen von Entscheidern gestreut wird. Ein Klassiker unter den Schlangenöl-Versprechen der Digitalbranche.
        </p>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Lasst uns das Ding mal brutal auseinandernehmen.
        </p>

        <!-- 1. Die Lüge im Kern -->
        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          1️⃣ Die Lüge im Kern: „Kein Training" ≠ „Nichts passiert"
        </h2>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Jede Eingabe, jeder Prompt, jede Antwort – das alles <strong class="text-copper-orange">muss</strong> durch Server laufen. <em class="text-off-white/60">„Kein Training"</em> heißt nur: „Wir trainieren offiziell nicht damit für neue Modelle."
        </p>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Aber hey:
        </p>

        <!-- Was trotzdem passiert -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
          <div class="p-5 bg-red-500/10 border border-red-500/30 rounded-lg">
            <div class="text-2xl mb-2">📋</div>
            <h3 class="text-lg font-bold text-red-400 mb-2 m-0">Temporäre Logs</h3>
            <p class="text-off-white/80 text-sm m-0">Mindestens 30 Tage für „Abuse Detection", „Qualitätskontrolle" und Rechnungsprüfung – Standard bei fast allen großen Anbietern.</p>
          </div>
          <div class="p-5 bg-red-500/10 border border-red-500/30 rounded-lg">
            <div class="text-2xl mb-2">🐛</div>
            <h3 class="text-lg font-bold text-red-400 mb-2 m-0">Debugging-Daten</h3>
            <p class="text-off-white/80 text-sm m-0">Caches bleiben. Debugging-Daten bleiben. Interne Systeme sehen mehr, als die Marketing-Seite zugibt.</p>
          </div>
          <div class="p-5 bg-red-500/10 border border-red-500/30 rounded-lg">
            <div class="text-2xl mb-2">📜</div>
            <h3 class="text-lg font-bold text-red-400 mb-2 m-0">Policy-Änderungen</h3>
            <p class="text-off-white/80 text-sm m-0">Wenn ein Leak passiert oder die Policy über Nacht geändert wird – Pech gehabt. Das Kleingedruckte erlaubt fast alles.</p>
          </div>
          <div class="p-5 bg-red-500/10 border border-red-500/30 rounded-lg">
            <div class="text-2xl mb-2">🕳️</div>
            <h3 class="text-lg font-bold text-red-400 mb-2 m-0">Löchrige Filter</h3>
            <p class="text-off-white/80 text-sm m-0">Filter für personenbezogene Daten laufen oft im Browser oder halbherzig – und scheitern an simplen Variationen von Namen und Adressen.</p>
          </div>
        </div>

        <div class="p-4 bg-copper-orange/10 border-l-4 border-copper-orange rounded-r-lg my-8">
          <p class="text-off-white/90 m-0">
            Wer das für „sichere Anonymisierung" hält, glaubt auch, dass Filterkaffee koffeinfrei ist, nur weil auf der Packung <strong class="text-copper-orange">„light"</strong> steht.
          </p>
        </div>

        <!-- 2. Verträge -->
        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          2️⃣ Verträge? Toilettenpapier in der KI-Welt
        </h2>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          <em class="text-off-white/60">„Vertraglich abgesichert!"</em> – ja klar. Enterprise-Verträge mit No-Training-Klauseln klingen toll. Bis der Anbieter die AGB ändert, ein Subunternehmer gehackt wird oder ein neuer CEO sagt: <strong class="text-red-400">„Fuck it, wir brauchen mehr Daten."</strong>
        </p>

        <!-- Timeline der Realität -->
        <div class="p-6 bg-void border border-off-white/20 rounded-lg my-8">
          <h3 class="text-lg font-bold text-cyber-cyan mb-4 m-0">Die Realität – ein Muster, das sich wiederholt:</h3>
          <div class="space-y-4">
            <div class="flex gap-4 items-start">
              <div class="w-8 h-8 rounded-full bg-red-500/20 border border-red-500/50 flex items-center justify-center flex-shrink-0 text-sm">1</div>
              <p class="text-off-white/80 text-sm m-0">Große Anbieter trainieren heimlich mit Nutzerdaten, bis Skandale auffliegen.</p>
            </div>
            <div class="flex gap-4 items-start">
              <div class="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-500/50 flex items-center justify-center flex-shrink-0 text-sm">2</div>
              <p class="text-off-white/80 text-sm m-0">Opt-out-Buttons kommen erst, als der öffentliche Druck zu groß wird.</p>
            </div>
            <div class="flex gap-4 items-start">
              <div class="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-500/50 flex items-center justify-center flex-shrink-0 text-sm">3</div>
              <p class="text-off-white/80 text-sm m-0">Selbst EU-basierte Modelle brauchen teils explizites Opt-out – default darf Input/Output für „Verbesserungen" genutzt werden.</p>
            </div>
            <div class="flex gap-4 items-start">
              <div class="w-8 h-8 rounded-full bg-red-500/20 border border-red-500/50 flex items-center justify-center flex-shrink-0 text-sm">4</div>
              <p class="text-off-white/80 text-sm m-0">Wenn es knallt, klagt ihr vor Gericht gegen einen Milliarden-Konzern. <strong class="text-red-400">Viel Erfolg dabei.</strong></p>
            </div>
          </div>
        </div>

        <!-- 3. Regulatorische Arbitrage -->
        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          3️⃣ Der eigentliche Skandal: Regulatorische Arbitrage pur
        </h2>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Die DSGVO schafft künstlich einen Markt für „sichere Alternativen". Ohne diese Hürden würden die meisten einfach die billigsten Tools nehmen oder selbst hosten. Stattdessen zahlen Firmen extra für einen Mittelsmann, der Modelle von drüben durch einen „sicheren" Schlauch leitet – und dabei Provision kassiert.
        </p>

        <!-- Das Geschäftsmodell visualisiert -->
        <div class="p-6 bg-gradient-to-r from-red-500/10 via-void to-amber-500/10 border border-off-white/20 rounded-lg my-8">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div class="p-4">
              <div class="text-3xl mb-2">😨</div>
              <p class="text-red-400 font-semibold text-sm m-0">Angst</p>
              <p class="text-off-white/60 text-xs mt-1 m-0">DSGVO-Panik bei Entscheidern</p>
            </div>
            <div class="p-4">
              <div class="text-3xl mb-2">🧴</div>
              <p class="text-amber-400 font-semibold text-sm m-0">Schlangenöl</p>
              <p class="text-off-white/60 text-xs mt-1 m-0">„Sichere" Mittelsmann-Plattformen</p>
            </div>
            <div class="p-4">
              <div class="text-3xl mb-2">💸</div>
              <p class="text-emerald-400 font-semibold text-sm m-0">Profit</p>
              <p class="text-off-white/60 text-xs mt-1 m-0">Provision ohne echten Mehrwert</p>
            </div>
          </div>
        </div>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Das ist kein Betrug im strafrechtlichen Sinne (meistens). Das ist <strong class="text-copper-orange">cleveres Ausnutzen von Angst und Unwissen</strong>. Und solange niemand einen echten, massiven Leak beweist, bleibt alles „grau". Die Anbieter kassieren jahrelang – und wenn's mal kracht, rebranden sie oder verschwinden leise.
        </p>

        <!-- 4. Fazit & Weckruf -->
        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          4️⃣ Weckruf: Hört auf, den Weihnachtsmann zu füttern!
        </h2>

        <div class="p-6 bg-red-500/10 border border-red-500/30 rounded-lg my-8 text-center">
          <p class="text-xl text-red-400 font-bold m-0">
            „Kein Training mit Ihren Daten" ist Marketing-Bullshit auf Steroiden.
          </p>
          <p class="text-off-white/70 text-sm mt-3 m-0">
            Es ist kein absoluter Schutz – sondern ein vertragliches Nice-to-have mit riesigen Löchern.
          </p>
        </div>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Wer wirklich sicher sein will, muss <strong class="text-cyber-cyan">selbst hosten</strong>:
        </p>

        <!-- Self-Hosting Optionen -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 my-8">
          <div class="p-4 bg-cyber-cyan/10 border border-cyber-cyan/20 rounded-lg text-center">
            <span class="text-2xl block mb-2">🦙</span>
            <span class="text-cyber-cyan font-semibold text-sm">Llama</span>
            <p class="text-off-white/60 text-xs mt-1 m-0">Open-Weight</p>
          </div>
          <div class="p-4 bg-cyber-cyan/10 border border-cyber-cyan/20 rounded-lg text-center">
            <span class="text-2xl block mb-2">🌬️</span>
            <span class="text-cyber-cyan font-semibold text-sm">Mistral</span>
            <p class="text-off-white/60 text-xs mt-1 m-0">Open-Weight</p>
          </div>
          <div class="p-4 bg-cyber-cyan/10 border border-cyber-cyan/20 rounded-lg text-center">
            <span class="text-2xl block mb-2">🔧</span>
            <span class="text-cyber-cyan font-semibold text-sm">Ollama / LM Studio</span>
            <p class="text-off-white/60 text-xs mt-1 m-0">Lokale Inferenz</p>
          </div>
          <div class="p-4 bg-cyber-cyan/10 border border-cyber-cyan/20 rounded-lg text-center">
            <span class="text-2xl block mb-2">📚</span>
            <span class="text-cyber-cyan font-semibold text-sm">Private RAG</span>
            <p class="text-off-white/60 text-xs mt-1 m-0">Eigene Hardware</p>
          </div>
        </div>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Alles andere ist Kompromiss – und oft <strong class="text-copper-orange">teurer Kompromiss</strong>.
        </p>

        <!-- Closing -->
        <div class="p-6 bg-copper-orange/10 border border-copper-orange/30 rounded-lg my-8">
          <p class="text-lg text-off-white/90 mb-4">
            An alle, die mit „sicherer KI" werben:
          </p>
          <p class="text-xl text-copper-orange font-bold mb-4">
            Kommt mit harten, unabhängigen Audits und Beweisen – nicht mit Phrasen.
          </p>
          <p class="text-lg text-off-white/80 m-0">
            Bis dahin: Bleibt misstrauisch. Der Weihnachtsmann existiert nicht. Und „kein Training" in der Cloud auch nicht wirklich.
          </p>
        </div>

        <!-- Teilen-Aufforderung -->
        <div class="p-6 bg-gradient-to-r from-copper-orange/10 via-cyber-cyan/5 to-copper-orange/10 border border-copper-orange/20 rounded-lg my-8 text-center">
          <p class="text-lg text-off-white/90 m-0">
            <strong class="text-copper-orange">Teilt diesen Text</strong>, wenn ihr die ewige Schönrednerei leid seid.
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
const title = 'Der große KI-Datenschutz-Schwindel 2026'
const description = '„Kein Training mit Ihren Daten" – der dümmste Weihnachtsmann-Glaube der Dekade. Warum die Versprechen der KI-Anbieter Schlangenöl sind und was wirklich hilft.'
const tags = ref([
  'Datenschutz',
  'DSGVO',
  'KI-Sicherheit',
  'Cloud',
  'Polemik',
  'Self-Hosting'
])

// Hero Image
const basePath = import.meta.env.BASE_URL
const heroImage = computed(() => `${basePath}images/blog/datenschutz-schwindel.png`)

// State
const linkCopied = ref(false)

// SEO Meta Tags
onMounted(() => {
  useSEO({
    title: title,
    description: description,
    image: '/images/blog/datenschutz-schwindel.png',
    url: '/blog/ki-datenschutz-schwindel-2026',
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
