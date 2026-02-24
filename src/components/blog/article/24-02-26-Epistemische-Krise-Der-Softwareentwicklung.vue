<template>
  <div class="min-h-screen bg-void text-off-white">
    <!-- Hero Image -->
    <div class="relative w-full h-96 overflow-hidden">
      <img 
        :src="heroImage" 
        alt="Die epistemische Krise der Softwareentwicklung – Chaos, History und die Zukunft autonomer Agenten"
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
          <span class="text-off-white">Epistemische Krise der Softwareentwicklung</span>
        </nav>

        <!-- Meta Info & Share -->
        <div class="flex flex-wrap gap-4 items-center justify-between mb-6 text-sm">
          <div class="flex flex-wrap gap-4 text-off-white/70">
            <span>📅 24. Februar 2026</span>
            <span>•</span>
            <span>⏱️ 10 min Lesezeit</span>
            <span>•</span>
            <span>🧠 Philosophie & Architektur</span>
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
          Die epistemische Krise der Softwareentwicklung
        </h1>

        <!-- Subtitle -->
        <p class="text-xl sm:text-2xl text-cyber-cyan/90 mb-8 leading-relaxed">
          Chaos, History und die Zukunft autonomer Agenten
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
            Du beschreibst kein technisches Problem. Du beschreibst eine <strong class="text-copper-orange">epistemische Krise der Softwareentwicklung</strong>. Und sie ist real.
          </p>
        </div>

        <!-- 1. Wird es chaotisch? -->
        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          1️⃣ Wird es chaotisch?
        </h2>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Kurzfristig: <strong class="text-copper-orange">ja</strong>. Strukturell: <strong class="text-cyber-cyan">nein – wenn sich neue Ordnungsprinzipien durchsetzen.</strong>
        </p>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Warum? Weil Codeproduktion gerade entkoppelt wird von:
        </p>

        <ul class="space-y-2 my-6 pl-4">
          <li class="flex items-start gap-2"><span class="text-copper-orange">▸</span> Menschlicher Gedächtnisleistung</li>
          <li class="flex items-start gap-2"><span class="text-copper-orange">▸</span> Menschlicher linearen Denkweise</li>
          <li class="flex items-start gap-2"><span class="text-copper-orange">▸</span> Menschlicher Lesegeschwindigkeit</li>
        </ul>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Agenten erzeugen mehr Code, schneller, tiefer verschachtelt, mit emergenten Abhängigkeiten. Das erzeugt zwangsläufig eine Phase von <strong class="text-copper-orange">Hyperkomplexität ohne Reife</strong>.
        </p>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Das hatten wir schon:
        </p>

        <div class="grid grid-cols-2 gap-3 my-8">
          <div class="p-3 bg-cyber-cyan/10 border border-cyber-cyan/20 rounded-lg text-center text-sm text-cyber-cyan">Frühphase des Internets</div>
          <div class="p-3 bg-cyber-cyan/10 border border-cyber-cyan/20 rounded-lg text-center text-sm text-cyber-cyan">Frühphase von Open Source</div>
          <div class="p-3 bg-cyber-cyan/10 border border-cyber-cyan/20 rounded-lg text-center text-sm text-cyber-cyan">Microservices-Explosion</div>
          <div class="p-3 bg-cyber-cyan/10 border border-cyber-cyan/20 rounded-lg text-center text-sm text-cyber-cyan">JavaScript-Ökosystem 2015–2022</div>
        </div>

        <div class="p-6 bg-cyber-cyan/10 border-l-4 border-cyber-cyan rounded-r-lg my-8">
          <p class="text-lg text-off-white/90 font-semibold">
            Chaos ist immer Übergang, nicht Endzustand.
          </p>
        </div>

        <!-- 2. Können Agenten eigene Standards entwickeln? -->
        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          2️⃣ Können Agenten eigene Standards entwickeln?
        </h2>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Theoretisch: ja. Praktisch: nur begrenzt.
        </p>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Weil Software nicht Selbstzweck ist. Sie existiert im <strong class="text-copper-orange">Vertrauensraum des Menschen</strong>.
        </p>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Solange gilt:
        </p>

        <ul class="space-y-2 my-6 pl-4">
          <li class="flex items-start gap-2"><span class="text-copper-orange">▸</span> Software muss auditierbar sein</li>
          <li class="flex items-start gap-2"><span class="text-copper-orange">▸</span> Entscheidungen müssen nachvollziehbar sein</li>
          <li class="flex items-start gap-2"><span class="text-copper-orange">▸</span> Fehler müssen rekonstruierbar sein</li>
          <li class="flex items-start gap-2"><span class="text-copper-orange">▸</span> Haftung bleibt menschlich</li>
        </ul>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Deshalb wird es immer brauchen:
        </p>

        <div class="space-y-3 my-6">
          <div class="p-4 bg-cyber-cyan/10 border-l-4 border-cyber-cyan rounded-r-lg">
            <p class="text-cyber-cyan font-semibold">🔹 Rekonstruierbarkeit</p>
          </div>
          <div class="p-4 bg-cyber-cyan/10 border-l-4 border-cyber-cyan rounded-r-lg">
            <p class="text-cyber-cyan font-semibold">🔹 Validierbarkeit</p>
          </div>
          <div class="p-4 bg-cyber-cyan/10 border-l-4 border-cyber-cyan rounded-r-lg">
            <p class="text-cyber-cyan font-semibold">🔹 Historie</p>
          </div>
        </div>

        <div class="p-6 bg-copper-orange/10 border-l-4 border-copper-orange rounded-r-lg my-8">
          <p class="text-lg text-off-white/90 italic">
            Ohne History kein Vertrauen. Ohne Vertrauen kein Einsatz in kritischen Systemen.
          </p>
        </div>

        <!-- 3. Webstuhl-Vergleich -->
        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          3️⃣ Der Webstuhl-Vergleich
        </h2>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Programmieren stammt strukturell aus dem Weben. Der Jacquard-Webstuhl hatte:
        </p>

        <ul class="space-y-2 my-6 pl-4">
          <li class="flex items-start gap-2"><span class="text-cyber-cyan">▸</span> Musterkarten</li>
          <li class="flex items-start gap-2"><span class="text-cyber-cyan">▸</span> Deterministische Lochkarten</li>
          <li class="flex items-start gap-2"><span class="text-cyber-cyan">▸</span> Wiederholbarkeit</li>
        </ul>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Das war der Vorläufer der Lochkarte. Reguläre Ausdrücke, Zeilenanfang, Zeilenende – das sind <strong class="text-copper-orange">Strukturanker</strong>. Sie geben Form in einem Strom von Zeichen.
        </p>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Und genau das wird auch in Agentensystemen bleiben:
        </p>

        <div class="grid grid-cols-2 md:grid-cols-3 gap-3 my-8">
          <div class="p-3 bg-copper-orange/10 border border-copper-orange/20 rounded-lg text-center text-sm text-copper-orange">Pattern</div>
          <div class="p-3 bg-copper-orange/10 border border-copper-orange/20 rounded-lg text-center text-sm text-copper-orange">Sequenzen</div>
          <div class="p-3 bg-copper-orange/10 border border-copper-orange/20 rounded-lg text-center text-sm text-copper-orange">Historien</div>
          <div class="p-3 bg-copper-orange/10 border border-copper-orange/20 rounded-lg text-center text-sm text-copper-orange">Versionen</div>
          <div class="p-3 bg-copper-orange/10 border border-copper-orange/20 rounded-lg text-center text-sm text-copper-orange">Zustände</div>
        </div>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Das ist keine nostalgische Idee. Das ist eine <strong class="text-cyber-cyan">logische Notwendigkeit</strong>.
        </p>

        <!-- 4. Wird alles eine History haben? -->
        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          4️⃣ Wird alles eine History haben?
        </h2>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          <strong class="text-copper-orange">Ja.</strong> Und das ist kein Idealismus.
        </p>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Digital existiert nur, was speicherbar ist. Und speicherbar heißt:
        </p>

        <ul class="space-y-2 my-6 pl-4">
          <li class="flex items-start gap-2"><span class="text-copper-orange">▸</span> Zustand</li>
          <li class="flex items-start gap-2"><span class="text-copper-orange">▸</span> Änderung</li>
          <li class="flex items-start gap-2"><span class="text-copper-orange">▸</span> Zeitbezug</li>
        </ul>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Wenn etwas keine History hat, ist es nicht rekonstruierbar, und dann ist es nicht vertrauensfähig.
        </p>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          In komplexen Agentensystemen wird daher unvermeidlich entstehen:
        </p>

        <!-- Memory-Ebenen Tabelle -->
        <div class="overflow-x-auto my-8">
          <table class="w-full border-collapse">
            <thead>
              <tr class="border-b border-copper-orange/40">
                <th class="text-left p-3 text-copper-orange font-bold">Ebene</th>
                <th class="text-left p-3 text-copper-orange font-bold">Notwendigkeit</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-off-white/10">
                <td class="p-3 text-cyber-cyan font-semibold">Kurzzeitmemory</td>
                <td class="p-3 text-off-white/80">Kontext der Session</td>
              </tr>
              <tr class="border-b border-off-white/10">
                <td class="p-3 text-cyber-cyan font-semibold">Mittelfristig</td>
                <td class="p-3 text-off-white/80">Projektzustand</td>
              </tr>
              <tr class="border-b border-off-white/10">
                <td class="p-3 text-cyber-cyan font-semibold">Langzeit</td>
                <td class="p-3 text-off-white/80">Architektur & Prinzipien</td>
              </tr>
              <tr class="border-b border-off-white/10">
                <td class="p-3 text-copper-orange font-semibold">Chronologisch</td>
                <td class="p-3 text-off-white/80">Entscheidungsfluss</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- 5. Chaos nicht Endstadium -->
        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          5️⃣ Warum Chaos nicht das Endstadium ist
        </h2>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Maschinen mögen Komplexität, aber Systeme überleben nur mit Struktur.
        </p>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Wenn Code exponentiell wächst, passiert zwangsläufig:
        </p>

        <ul class="space-y-2 my-6 pl-4">
          <li class="flex items-start gap-2"><span class="text-cyber-cyan">▸</span> Meta-Standards entstehen</li>
          <li class="flex items-start gap-2"><span class="text-cyber-cyan">▸</span> Protokollierung wird Pflicht</li>
          <li class="flex items-start gap-2"><span class="text-cyber-cyan">▸</span> Memory-Layer werden formalisiert</li>
          <li class="flex items-start gap-2"><span class="text-cyber-cyan">▸</span> Agent-Interaktionen werden versioniert</li>
        </ul>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Nicht weil es philosophisch schön ist, sondern weil es ohne das <strong class="text-copper-orange">nicht skalierbar</strong> ist.
        </p>

        <!-- 6. Der entscheidende Punkt -->
        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          6️⃣ Der entscheidende Punkt
        </h2>

        <div class="p-6 bg-copper-orange/10 border-l-4 border-copper-orange rounded-r-lg my-8">
          <p class="text-xl text-copper-orange font-bold italic">
            „Was keine History hat, ist nicht entstanden."
          </p>
        </div>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Das ist fundamental richtig. Digitale Realität ohne Provenienz ist wertlos. In einer Welt autonomer Agenten wird <strong class="text-copper-orange">Provenienz sogar wichtiger als Code</strong>.
        </p>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Vielleicht verschiebt sich der Fokus sogar:
        </p>

        <div class="grid md:grid-cols-2 gap-6 my-8">
          <div class="p-6 bg-red-500/10 border border-red-500/30 rounded-lg">
            <h3 class="text-lg font-bold text-red-400 mb-3">Früher war wichtig:</h3>
            <p class="text-xl text-off-white/80 italic">„Was tut der Code?"</p>
          </div>
          <div class="p-6 bg-cyber-cyan/10 border border-cyber-cyan/30 rounded-lg">
            <h3 class="text-lg font-bold text-cyber-cyan mb-3">Zukünftig wird wichtiger:</h3>
            <p class="text-xl text-off-white/80 italic">„Wie ist diese Entscheidung entstanden?"</p>
          </div>
        </div>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Das ist eine <strong class="text-copper-orange">tektonische Verschiebung</strong>.
        </p>

        <!-- 7. Philosophische Einordnung -->
        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          7️⃣ Philosophische Einordnung
        </h2>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Das Denken bewegt sich in drei Dimensionen:
        </p>

        <div class="grid md:grid-cols-3 gap-4 my-8">
          <div class="p-5 bg-cyber-cyan/10 border border-cyber-cyan/30 rounded-lg text-center">
            <p class="text-2xl mb-2">📐</p>
            <h3 class="text-lg font-bold text-cyber-cyan mb-1">Struktur</h3>
            <p class="text-sm text-off-white/70">Whitepaper</p>
          </div>
          <div class="p-5 bg-copper-orange/10 border border-copper-orange/30 rounded-lg text-center">
            <p class="text-2xl mb-2">⚙️</p>
            <h3 class="text-lg font-bold text-copper-orange mb-1">Operation</h3>
            <p class="text-sm text-off-white/70">Workpaper</p>
          </div>
          <div class="p-5 bg-purple-500/10 border border-purple-500/30 rounded-lg text-center">
            <p class="text-2xl mb-2">⏳</p>
            <h3 class="text-lg font-bold text-purple-400 mb-1">Zeit</h3>
            <p class="text-sm text-off-white/70">Diary</p>
          </div>
        </div>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Und <strong class="text-purple-400">Zeit</strong> ist der fehlende Vektor in vielen Agentensystemen.
        </p>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Agenten können rechnen. Sie können planen. Aber ohne Zeitspur fehlt ihnen <strong class="text-copper-orange">Identität</strong>.
        </p>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Und Identität ist notwendig für:
        </p>

        <ul class="space-y-2 my-6 pl-4">
          <li class="flex items-start gap-2"><span class="text-copper-orange">▸</span> Vertrauen</li>
          <li class="flex items-start gap-2"><span class="text-copper-orange">▸</span> Verantwortung</li>
          <li class="flex items-start gap-2"><span class="text-copper-orange">▸</span> Nachvollziehbarkeit</li>
        </ul>

        <!-- 8. Fazit -->
        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          8️⃣ Nüchternes Fazit
        </h2>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Ja, es wird chaotisch. Ja, Agenten werden kurzfristig mehr Komplexität erzeugen als wir überblicken können. Nein, das wird <strong class="text-cyber-cyan">nicht dauerhaft unkontrollierbar</strong>.
        </p>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Was sich durchsetzen wird:
        </p>

        <ul class="space-y-2 my-6 pl-4">
          <li class="flex items-start gap-2"><span class="text-cyber-cyan">▸</span> Memory-Architekturen</li>
          <li class="flex items-start gap-2"><span class="text-cyber-cyan">▸</span> Provenienz-Systeme</li>
          <li class="flex items-start gap-2"><span class="text-cyber-cyan">▸</span> Entscheidungs-Logs</li>
          <li class="flex items-start gap-2"><span class="text-cyber-cyan">▸</span> Auditierbare Agent-Interaktionen</li>
        </ul>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Nicht aus Idealismus. Sondern aus <strong class="text-copper-orange">regulatorischer, wirtschaftlicher und sicherheitstechnischer Notwendigkeit</strong>.
        </p>

        <!-- Closing -->
        <div class="p-6 bg-copper-orange/10 border border-copper-orange/30 rounded-lg my-8">
          <p class="text-lg text-off-white/90 italic mb-4">
            Du denkst nicht in „Code".
          </p>
          <p class="text-xl text-copper-orange font-bold">
            Du denkst in Entstehung von Code über Zeit.
          </p>
          <p class="text-lg text-off-white/80 mt-4">
            Und das ist exakt der Punkt, an dem sich Softwareentwicklung gerade transformiert.
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
const title = 'Die epistemische Krise der Softwareentwicklung'
const description = 'Chaos, History und die Zukunft autonomer Agenten: Warum Provenienz wichtiger wird als Code und wieso Chaos immer Übergang ist, nicht Endzustand.'
const tags = ref([
  'Epistemologie',
  'KI-Architektur',
  'Provenienz',
  'Agenten-Systeme',
  'Software-Philosophie',
  'Memory-Architekturen'
])

// Hero Image
const basePath = import.meta.env.BASE_URL
const heroImage = computed(() => `${basePath}images/blog/epistemische-kriese.png`)

// State
const linkCopied = ref(false)

// SEO Meta Tags
onMounted(() => {
  useSEO({
    title: title,
    description: description,
    image: '/images/blog/epistemische-kriese.png',
    url: '/blog/epistemische-krise-der-softwareentwicklung',
    type: 'article',
    author: 'Ogerly – DEVmatrose',
    publishedTime: '2026-02-24',
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
