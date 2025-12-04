<template>
  <div class="min-h-screen bg-void text-off-white">
    <!-- Hero Image -->
    <div class="relative w-full h-96 overflow-hidden">
      <img 
        :src="heroImage" 
        alt="Smart Editor Interface für KI-Daten-Labeling"
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
          <span class="text-off-white/60">Smart Editor für LLM-Training</span>
        </nav>

        <!-- Meta Info & Share -->
        <div class="flex flex-wrap gap-4 items-center justify-between mb-6 text-sm">
          <div class="flex flex-wrap gap-4 items-center">
            <span class="badge badge-accent glow-pulse">Featured</span>
            <span class="text-cyber-cyan">KI & Tooling</span>
            <span class="text-off-white/40">•</span>
            <span class="text-off-white/60">03. Dezember 2025</span>
            <span class="text-off-white/40">•</span>
            <span class="text-off-white/60">12 min Lesezeit</span>
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
          Warum ich das Rad neu erfunden habe
        </h1>
        <p class="text-xl sm:text-2xl text-cyber-cyan mb-8">
          Die Entstehung eines spezialisierten LLM-Tools
        </p>

        <!-- Tags -->
        <div class="flex flex-wrap gap-2 mb-8">
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
        <!-- Introduction -->
        <div class="text-lg text-off-white/90 leading-relaxed mb-12">
          <p class="mb-6 text-xl italic text-copper-orange/80">
            Oder: Wenn Standard-Software an der Realität sensibler Daten scheitert.
          </p>
          <p class="mb-6">
            Als Entwickler lernt man eine goldene Regel sehr früh: <em>"Don't reinvent the wheel."</em> Nutze existierende Libraries, Frameworks und Tools. Warum etwas bauen, das es schon gibt?
          </p>
          <p class="mb-6">
            Seit zehn Monaten entwickle ich als <strong>Devmatrose</strong> ein komplexes Ökosystem für einen Kunden. In diesem Prozess stießen wir auf eine Hürde, die mit Standard-Lösungen nicht zu nehmen war: Das Training eines spezialisierten KI-Modells (LLM) mit hochsensiblen Daten.
          </p>
          <p>
            Dieser Artikel ist ein Einblick in meinen Denkprozess, warum ich mich gegen den Marktstandard und für eine Eigenentwicklung entschieden habe – und warum „On-Premise" in der KI-Entwicklung oft der einzige gangbare Weg ist.
          </p>
        </div>

        <!-- Section 1 -->
        <h2 class="text-3xl font-bold text-copper-orange mt-16 mb-6">
          Die Ausgangslage: Ein Dilemma in drei Akten
        </h2>
        <p class="mb-4">
          Wir brauchten ein Werkzeug, um Daten zu labeln und zu validieren. Das klingt trivial. Es gibt Dutzende Tools dafür (Label Studio, Prodigy, Scale AI, etc.). Doch bei genauerer Betrachtung der Anforderungen fiel das Kartenhaus der Standard-Lösungen zusammen.
        </p>

        <h3 class="text-2xl font-bold text-cyber-cyan mt-12 mb-4">
          1. Das Datenschutz-Paradoxon
        </h3>
        <p class="mb-4">
          Die Datenbasis bestand aus sensiblen, vertraulichen Informationen (vergleichbar mit medizinischen oder psychologischen Akten).
        </p>
        <div class="grid md:grid-cols-2 gap-6 my-8">
          <div class="bg-void/50 border border-cyber-cyan/30 rounded-lg p-6">
            <p class="font-semibold text-cyber-cyan mb-3">Markt-Lösung:</p>
            <p class="text-off-white/80">Die meisten nutzerfreundlichen Tools sind Cloud-basiert.</p>
          </div>
          <div class="bg-void/50 border border-copper-orange/30 rounded-lg p-6">
            <p class="font-semibold text-copper-orange mb-3">Das Problem:</p>
            <p class="text-off-white/80">
              Ein Upload dieser Daten auf fremde Server (oft in den USA) war kategorisch ausgeschlossen. 
              <strong class="text-copper-orange">Wir brauchten eine Lösung, die zu 100 % lokal, offline und im eigenen Netzwerk läuft – ohne "nach Hause zu telefonieren".</strong>
            </p>
          </div>
        </div>

        <h3 class="text-2xl font-bold text-cyber-cyan mt-12 mb-4">
          2. Der Faktor Mensch (Expertise vs. Technik)
        </h3>
        <p class="mb-4">
          Wer validiert die Daten? In unserem Fall waren es keine Data Scientists oder Entwickler, sondern Fachexperten (Domänen-Experten).
        </p>
        <div class="grid md:grid-cols-2 gap-6 my-8">
          <div class="bg-void/50 border border-cyber-cyan/30 rounded-lg p-6">
            <p class="font-semibold text-cyber-cyan mb-3">Markt-Lösung:</p>
            <p class="text-off-white/80">Lokale Open-Source-Tools sind oft mächtig, aber "roh". Sie erwarten oft, dass der Nutzer JSON lesen kann oder Konfigurationsdateien versteht.</p>
          </div>
          <div class="bg-void/50 border border-copper-orange/30 rounded-lg p-6">
            <p class="font-semibold text-copper-orange mb-3">Das Problem:</p>
            <p class="text-off-white/80">
              <strong class="text-copper-orange">Setzt man einem Fachexperten (z.B. einem Psychologen oder Anwalt) ein rohes JSON-Objekt vor, sinkt die Arbeitsqualität und die Frustration steigt.</strong>
            </p>
          </div>
        </div>

        <h3 class="text-2xl font-bold text-cyber-cyan mt-12 mb-4">
          3. Die Komplexität des Kontextes
        </h3>
        <p class="mb-4">
          Standard-Tools labeln oft linear: "Ist das Bild eine Katze? Ja/Nein." Unsere Anforderungen waren multidimensional.
        </p>
        <div class="bg-gradient-to-r from-copper-orange/20 to-cyber-cyan/20 border-l-4 border-copper-orange p-6 my-8 rounded-r">
          <p class="text-lg font-semibold text-copper-orange">
            Ein Datensatz musste aus technischer, fachlicher und ethischer Sicht bewertet werden – oft von unterschiedlichen Personen.
          </p>
        </div>

        <!-- Section 2 -->
        <h2 class="text-3xl font-bold text-copper-orange mt-16 mb-6">
          Der Lösungsansatz: Der "Smart Editor" und die Säulen-Architektur
        </h2>
        <p class="mb-8">
          Da kein Tool diese Kombination aus <strong class="text-copper-orange">lokaler Sicherheit</strong> und <strong class="text-cyber-cyan">fachlicher Usability</strong> bot, habe ich es konzipiert. Der Ansatz basiert auf zwei Kernideen, die ich gerne als Inspiration teilen möchte.
        </p>

        <!-- Content Image -->
        <figure class="my-12">
          <img 
            :src="layerImage" 
            alt="Tab-Architektur des Smart Editors: Modular aufgebaute Säulen für verschiedene Nutzergruppen"
            class="w-full rounded-lg border border-cyber-cyan/30 shadow-2xl shadow-cyber-cyan/20"
          />
          <figcaption class="text-center text-sm text-off-white/60 mt-4">
            Tab-Architektur: Trennung der Dimensionen für unterschiedliche Nutzergruppen
          </figcaption>
        </figure>

        <h3 class="text-2xl font-bold text-cyber-cyan mt-12 mb-4">
          1. Die Tab-Architektur (Säulen-Prinzip)
        </h3>
        <p class="mb-4">
          Statt alle Informationen in eine unübersichtliche Maske zu pressen, habe ich das Tool modular aufgebaut. 
          <strong class="text-cyber-cyan">Wir trennen die verschiedenen Dimensionen der Validierung in "Tabs" (Reiter) auf.</strong>
        </p>
        <div class="bg-void/50 border border-cyber-cyan/30 rounded-lg p-6 my-8">
          <ul class="space-y-4">
            <li class="flex items-start">
              <span class="text-copper-orange mr-3 mt-1 text-xl">▸</span>
              <div>
                <p class="font-semibold text-copper-orange">Der technische Tab:</p>
                <p class="text-off-white/80">Hier sieht der Admin die Rohdaten.</p>
              </div>
            </li>
            <li class="flex items-start">
              <span class="text-cyber-cyan mr-3 mt-1 text-xl">▸</span>
              <div>
                <p class="font-semibold text-cyber-cyan">Der fachliche Tab:</p>
                <p class="text-off-white/80">Hier sieht der Domänen-Experte nur das, was für ihn relevant ist.</p>
              </div>
            </li>
            <li class="flex items-start">
              <span class="text-copper-orange mr-3 mt-1 text-xl">▸</span>
              <div>
                <p class="font-semibold text-copper-orange">Der Validierungs-Tab:</p>
                <p class="text-off-white/80">Hier wird nach dem Vier-Augen-Prinzip geprüft.</p>
              </div>
            </li>
          </ul>
        </div>
        <p class="mb-4">
          Diese Architektur erlaubt es, das Tool für völlig verschiedene Branchen anzupassen, ohne den Kern neu zu schreiben.
        </p>
        <p class="text-lg font-semibold text-cyber-cyan">
          Heute validieren wir psychologische Muster, morgen vielleicht juristische Texte – das Framework bleibt gleich, nur der "Tab" ändert sich.
        </p>

        <h3 class="text-2xl font-bold text-cyber-cyan mt-12 mb-4">
          2. Der Übersetzer (Smart Editor)
        </h3>
        <p class="mb-4">
          Die größte Hürde für nicht-technische Nutzer ist das Datenformat. Mein Tool fungiert als Echtzeit-Übersetzer.
        </p>
        <p class="mb-6">
          Im Hintergrund arbeitet die KI mit komplexen JSON-Strukturen. Das Tool parst diese Strukturen und generiert daraus dynamisch eine verständliche Benutzeroberfläche (UI).
        </p>
        <div class="bg-copper-orange/10 border border-copper-orange/30 rounded-lg p-6 my-8">
          <p class="font-semibold text-copper-orange mb-4">Beispiel-Transformationen:</p>
          <ul class="space-y-3 text-off-white/90">
            <li class="flex items-start">
              <span class="text-cyber-cyan mr-3">•</span>
              <span>Aus einem Array im Code wird eine Tag-Liste.</span>
            </li>
            <li class="flex items-start">
              <span class="text-cyber-cyan mr-3">•</span>
              <span>Aus einem Boolean-Wert wird eine einfache Checkbox.</span>
            </li>
            <li class="flex items-start">
              <span class="text-cyber-cyan mr-3">•</span>
              <span>Aus einem Score wird ein Schieberegler.</span>
            </li>
          </ul>
        </div>
        <div class="bg-gradient-to-r from-cyber-cyan/20 to-copper-orange/20 border-2 border-cyber-cyan/50 rounded-lg p-8 my-12 text-center">
          <p class="text-xl mb-4">Der Experte füllt ein Formular aus – das Tool schreibt den Code.</p>
          <p class="text-2xl font-bold text-copper-orange">
            So erhalten wir saubere Trainingsdaten für die KI, ohne dass der Experte je eine geschweifte Klammer <code class="text-cyber-cyan">{}</code> sehen muss.
          </p>
        </div>

        <!-- Section 3 -->
        <h2 class="text-3xl font-bold text-copper-orange mt-16 mb-6">
          Warum das wichtig ist (Lessons Learned)
        </h2>
        <p class="mb-4">
          In der KI-Entwicklung konzentrieren wir uns oft zu sehr auf Modelle und GPUs. Aber die Qualität der Daten – und damit die Qualität der menschlichen Arbeit, die in diese Daten fließt – ist der wahre Flaschenhals.
        </p>
        <div class="bg-void/50 border-l-4 border-cyber-cyan p-6 my-8 rounded-r">
          <p class="text-xl italic text-off-white/90">
            Als Entwickler und Architekt (Devmatrose) war meine Erkenntnis:
          </p>
          <p class="text-2xl font-bold text-copper-orange mt-4">
            Manchmal ist die beste "Tech-Lösung" diejenige, die die Technik vor dem Nutzer versteckt.
          </p>
        </div>
        <p class="mb-4">Indem wir eine maßgeschneiderte Lösung gebaut haben, konnten wir:</p>
        <div class="grid md:grid-cols-3 gap-6 my-8">
          <div class="bg-void/50 border border-copper-orange/30 rounded-lg p-6 text-center">
            <div class="text-4xl text-copper-orange mb-4">🔒</div>
            <p class="font-semibold text-copper-orange mb-2">Datenhoheit</p>
            <p class="text-sm text-off-white/80">Komplett beim Kunden behalten (On-Premise)</p>
          </div>
          <div class="bg-void/50 border border-cyber-cyan/30 rounded-lg p-6 text-center">
            <div class="text-4xl text-cyber-cyan mb-4">📊</div>
            <p class="font-semibold text-cyber-cyan mb-2">Fehlerrate</p>
            <p class="text-sm text-off-white/80">Bei der Validierung drastisch senken</p>
          </div>
          <div class="bg-void/50 border border-copper-orange/30 rounded-lg p-6 text-center">
            <div class="text-4xl text-copper-orange mb-4">🎯</div>
            <p class="font-semibold text-copper-orange mb-2">Empowerment</p>
            <p class="text-sm text-off-white/80">Experten befähigen, mit KI zu arbeiten</p>
          </div>
        </div>

        <!-- Section 4 -->
        <h2 class="text-3xl font-bold text-copper-orange mt-16 mb-6">
          Demo & Ausblick
        </h2>
        <p class="mb-6">
          Die volle Version dieses Tools ist tief in die Prozesse meines Kunden integriert und enthält spezifisches Know-how, das nicht öffentlich ist.
        </p>
        <p class="mb-6">
          Aber der <strong class="text-copper-orange">architektonische Ansatz</strong> – die Idee des modularen, lokalen Smart Editors – ist zu wertvoll, um ihn nicht zu teilen. Ich werde in den kommenden Tagen eine <strong class="text-cyber-cyan">abgespeckte Demo-Version</strong> auf GitHub veröffentlichen. Sie zeigt das Prinzip der dynamischen Formular-Generierung und das Tab-System, bereinigt um die spezifische Business-Logik.
        </p>
        <div class="bg-gradient-to-r from-copper-orange/20 to-cyber-cyan/20 border-l-4 border-copper-orange p-6 my-8 rounded-r">
          <p class="text-lg text-off-white/90">
            Damit möchte ich zeigen, wie wir moderne Web-Technologien nutzen können, um die Lücke zwischen komplexer KI und menschlicher Expertise zu schließen.
          </p>
        </div>

        <!-- Closing -->
        <div class="border-t border-copper-orange/30 pt-8 mt-12">
          <p class="text-lg text-off-white/90 leading-relaxed mb-6">
            Wenn du wissen willst, wie so ein System funktioniert, wie man KI-Tools für reale Geschäftsprozesse entwickelt oder wie sich On-Premise KI-Entwicklung konkret anfühlt, dann lass uns sprechen.
          </p>
          <p class="text-xl font-bold text-cyber-cyan glow-pulse">
            Folge mir für Updates zur Demo – und für weitere Einblicke in die Architektur von Morgen.
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
            Software-Architekt & Senior Developer seit 1999. Spezialisiert auf KI-gestützte Entwicklung, maßgeschneiderte Tooling-Lösungen und On-Premise KI-Systeme.
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
  'KI-Tooling',
  'Data Labeling',
  'On-Premise',
  'UX Design',
  'Smart Editor',
  'LLM-Training'
])

const basePath = import.meta.env.BASE_URL
const heroImage = computed(() => `${basePath}images/blog/aleteiha-hero.png`)
const layerImage = computed(() => `${basePath}images/blog/aleteiha-layer.png`)

const linkCopied = ref(false)

const copyArticleLink = async () => {
  // Use static HTML page for better social media previews
  const articleUrl = `${window.location.origin}${basePath}blog-smart-editor-llm-tool.html`
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
  title: 'Warum ich das Rad neu erfunden habe: Smart Editor für LLM-Training | DEVmatrose',
  meta: [
    { name: 'description', content: 'Wenn Standard-Software an sensibler Daten scheitert: Die Entstehung eines spezialisierten On-Premise LLM-Tools mit Tab-Architektur und Smart Editor für Fachexperten.' },
    
    // Open Graph
    { property: 'og:type', content: 'article' },
    { property: 'og:title', content: 'Smart Editor für LLM-Training: Eigenentwicklung statt Standard-Tools' },
    { property: 'og:description', content: 'Warum ich ein eigenes KI-Tooling gebaut habe: Tab-Architektur, Smart Editor und On-Premise-First für sensible Daten.' },
    { property: 'og:image', content: 'https://ogerly.github.io/devmatrose/images/blog/aleteiha-layer.png' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:url', content: 'https://ogerly.github.io/devmatrose/#blog' },
    { property: 'article:published_time', content: '2025-12-03' },
    { property: 'article:author', content: 'DEVmatrose' },
    { property: 'article:section', content: 'KI & Tooling' },
    
    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Smart Editor für LLM-Training: Warum ich das Rad neu erfunden habe' },
    { name: 'twitter:description', content: 'On-Premise KI-Tool mit Tab-Architektur für sensible Daten: Die Entstehung eines spezialisierten Smart Editors.' },
    { name: 'twitter:image', content: 'https://ogerly.github.io/devmatrose/images/blog/aleteiha-layer.png' },
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

.prose code {
  background: rgba(0, 217, 255, 0.1);
  padding: 0.2rem 0.4rem;
  border-radius: 0.25rem;
  font-size: 0.9em;
}
</style>
