<template>
  <div class="min-h-screen bg-void text-off-white">
    <!-- Hero Image -->
    <div class="relative w-full h-96 overflow-hidden">
      <img 
        :src="heroImage" 
        alt="Pen & Paper Würfel treffen auf digitalen Code"
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
          <span class="text-off-white">Der Algorithmus der Fantasie</span>
        </nav>

        <!-- Meta Info & Share -->
        <div class="flex flex-wrap gap-4 items-center justify-between mb-6 text-sm">
          <div class="flex flex-wrap gap-4 text-off-white/70">
            <span>📅 10. Januar 2026</span>
            <span>•</span>
            <span>⏱️ 8 min Lesezeit</span>
            <span>•</span>
            <span>🎲 Game Design & Entwicklung</span>
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
          Der Algorithmus der Fantasie: Warum digitale Welten das Rollenspiel noch nicht gerettet haben
        </h1>

        <!-- Subtitle -->
        <p class="text-xl sm:text-2xl text-cyber-cyan/90 mb-8 leading-relaxed">
          Als Software-Entwickler und Pen & Paper Enthusiast analysiere ich die Lücke zwischen analoger Freiheit und digitaler Perfektion – und warum beide Welten noch nicht zusammengefunden haben.
        </p>

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
        
        <p class="text-xl leading-relaxed">
          Als Software-Entwickler verbringe ich meine Tage damit, Logik in Code zu gießen. Alles muss definiert, abgefangen und berechenbar sein. Doch wenn ich abends das Terminal schließe und mich an einen Spieltisch setze – egal ob physisch oder virtuell –, suche ich genau das Gegenteil: <strong>die Unberechenbarkeit der menschlichen Fantasie</strong>.
        </p>

        <p>
          Seit den Anfängen von Rollenspiel-Klassikern im Jahr 1984 bis zu den heutigen AAA-Titeln auf Steam hat sich viel getan. Doch bei genauerer Betrachtung stehen wir vor einem Paradoxon: Während die Grafik immer realistischer wird, scheint die spielerische Freiheit zu schrumpfen.
        </p>

        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          Das Pen & Paper Dilemma: Die Freiheit und ihr Preis
        </h2>

        <p>
          Klassisches Pen & Paper ist im Kern ein <strong>sozialer Algorithmus</strong>. Ein Spielleiter und eine Gruppe von Mitspielern synchronisieren ihre Fantasie, um gemeinsam eine Geschichte entstehen zu lassen.
        </p>

        <div class="bg-base-300/30 border-l-4 border-cyber-cyan p-6 my-8">
          <h3 class="text-xl font-bold text-cyber-cyan mb-4">Die Stärke</h3>
          <p class="mb-0">
            Die absolute Freiheit. Wenn ein Spieler sagt: „Ich zünde das Wirtshaus an, um die Wachen abzulenken", dann passiert das – sofern der Spielleiter improvisieren kann.
          </p>
        </div>

        <div class="bg-base-300/30 border-l-4 border-copper-orange p-6 my-8">
          <h3 class="text-xl font-bold text-copper-orange mb-4">Die Kritik</h3>
          <p>Der Preis für diese Freiheit ist ein massiver administrativer Overhead:</p>
          <ul class="space-y-2">
            <li>
              <strong>Der Spielleiter-Burnout:</strong> Ein menschlicher „Master" investiert oft 4-6 Stunden Vorbereitung in eine einzige Sitzung. Er muss Erzähler, Regelrichter, Statistiker und Schauspieler zugleich sein.
            </li>
            <li>
              <strong>Die Regel-Wand:</strong> Komplexe Systeme wie DSA 4.1 umfassen hunderte Seiten an Regeln. Oft bricht der Spielfluss ab, weil minutenlang in Tabellen nachgeschlagen oder komplexe Proben (3W20) berechnet werden müssen.
            </li>
            <li>
              <strong>Logistik:</strong> Das gemeinsame „Glauben" an die Szene erfordert physische Präsenz oder mühsame Koordination über digitale Werkzeuge, die oft nur „digitale Briefbeschwerer" für analoge Prozesse sind.
            </li>
          </ul>
        </div>

        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          Computerspiele: Wenn Technik die Seele ersetzt
        </h2>

        <p>
          Auf der anderen Seite stehen Computer-Rollenspiele (CRPGs). Sie haben das Rollenspiel digitalisiert, visualisiert und automatisiert. Doch dabei haben sie oft die „Seele" des Genres geopfert.
        </p>

        <div class="bg-base-300/30 border-l-4 border-cyber-cyan p-6 my-8">
          <h3 class="text-xl font-bold text-cyber-cyan mb-4">Die Stärke</h3>
          <p class="mb-0">
            Die visuelle Immersion und die vollständige Automatisierung von Würfeln und Berechnungen.
          </p>
        </div>

        <div class="bg-base-300/30 border-l-4 border-copper-orange p-6 my-8">
          <h3 class="text-xl font-bold text-copper-orange mb-4">Die Kritik</h3>
          <p>Das Gefühl der Bevormundung:</p>
          <ul class="space-y-2">
            <li>
              <strong>Dialogbäume statt Dialoge:</strong> Wir wählen zwischen Option A, B oder C. Die KI oder das Skript reagiert nur auf das, was ein Entwickler Jahre zuvor festgeschrieben hat.
            </li>
            <li>
              <strong>Statische Welten:</strong> Die Welt reagiert nur auf geskriptete Trigger. Es gibt keine echte Konsequenz für kreatives Handeln, das außerhalb der programmierten Pfade liegt.
            </li>
            <li>
              <strong>Emotionaler Verlust:</strong> Computerspiele sind oft technisch beeindruckend, aber emotional „tot", weil sie den Raum für die eigene Fantasie – das Kopfkino – durch vordefinierte Grafik ersetzen.
            </li>
          </ul>
        </div>

        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          Die unbesetzte Mitte: Wo bleibt die Brücke?
        </h2>

        <p>
          Zwischen dem mühsamen, aber freien Pen & Paper und dem perfekten, aber starren Computerspiel klafft eine Lücke. Wir haben heute Technologien, die Terabytes an Daten in Millisekunden verarbeiten können, doch im Rollenspiel nutzen wir sie entweder für starre Skripte oder für einfache PDF-Anzeigen.
        </p>

        <div class="bg-gradient-to-r from-cyber-cyan/10 to-copper-orange/10 border border-cyber-cyan/30 rounded-lg p-8 my-10">
          <h3 class="text-2xl font-bold text-off-white mb-4">Das Problem bleibt bestehen:</h3>
          <ol class="space-y-4 text-lg">
            <li>
              Wie bewahren wir die <strong class="text-cyber-cyan">grenzenlose Freiheit</strong> eines menschlichen Spielleiters, ohne ihn durch Verwaltung zu ermüden?
            </li>
            <li>
              Wie nutzen wir <strong class="text-copper-orange">moderne Technologie</strong>, um Welten lebendig zu machen, ohne die Spieler in lineare Questreihen zu zwängen?
            </li>
            <li>
              Wie schaffen wir es, dass die Technik in den Hintergrund tritt, damit die <strong class="text-cyber-cyan">soziale Dynamik</strong> und die Fantasie wieder das Zentrum des Spiels bilden?
            </li>
          </ol>
        </div>

        <p class="text-xl leading-relaxed">
          Vielleicht ist es an der Zeit, Rollenspiel nicht mehr als Regelwerk zu betrachten, sondern als ein <strong>Erlebnis</strong>, bei dem Technologie nicht den Menschen ersetzt, sondern ihn befreit. Die Frage ist nicht, wie wir Pen & Paper digitalisieren, sondern wie wir die Magie eines Samstagnachmittags am Küchentisch in das 21. Jahrhundert retten können.
        </p>

        <div class="bg-base-300/30 border border-copper-orange/30 rounded-lg p-6 my-10">
          <p class="text-lg font-semibold text-copper-orange mb-2">Was denkst du?</p>
          <p class="mb-0">
            Ist die totale Freiheit am Spieltisch ein Relikt der Vergangenheit, oder haben Computerspiele einfach noch nicht gelernt, wirklich auf uns zu hören?
          </p>
        </div>

      </div>
    </article>

    <!-- Author & CTA Section -->
    <div class="max-w-4xl mx-auto px-4 py-12 border-t border-copper-orange/20">
      <div class="flex flex-col md:flex-row gap-8 items-center">
        <div class="flex-1">
          <h3 class="text-2xl font-bold text-copper-orange mb-3">Über DEVmatrose</h3>
          <p class="text-off-white/80 mb-4">
            Software-Entwickler, Architekt digitaler Ökosysteme und leidenschaftlicher Spieler. Seit 1999 im Code, seit 1984 am Spieltisch.
          </p>
          <button 
            @click="navigateToContact"
            class="btn btn-primary terminal-font"
          >
            Kontakt aufnehmen
          </button>
        </div>
      </div>
    </div>

    <!-- Related Posts placeholder -->
    <div class="max-w-4xl mx-auto px-4 py-12">
      <h3 class="text-2xl font-bold text-copper-orange mb-6">Weitere Artikel</h3>
      <div class="text-center text-off-white/60 py-12">
        <p>Weitere Artikel werden in Kürze verfügbar sein.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useHead } from '@unhead/vue'

const tags = ref([
  'Pen & Paper',
  'Rollenspiel',
  'Game Design',
  'TTRPG',
  'Digitalisierung',
  'Software-Entwicklung'
])

const basePath = import.meta.env.BASE_URL
const heroImage = computed(() => `${basePath}images/blog/rollenspiel-hero.png`)

const linkCopied = ref(false)

const copyArticleLink = async () => {
  // Use static HTML page for better social media previews
  const articleUrl = `${window.location.origin}${basePath}blog-pen-and-paper-rollenspiele.html`
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
  title: 'Der Algorithmus der Fantasie: Warum digitale Welten das Rollenspiel noch nicht gerettet haben | DEVmatrose',
  meta: [
    { name: 'description', content: 'Als Software-Entwickler und Pen & Paper Enthusiast analysiere ich die Lücke zwischen analoger Freiheit und digitaler Perfektion – und warum beide Welten noch nicht zusammengefunden haben.' },
    
    // Open Graph
    { property: 'og:type', content: 'article' },
    { property: 'og:title', content: 'Der Algorithmus der Fantasie: Pen & Paper vs. Digital' },
    { property: 'og:description', content: 'Zwischen analoger Freiheit und digitaler Perfektion: Eine Analyse, warum weder Pen & Paper noch Computerspiele das perfekte Rollenspiel-Erlebnis bieten.' },
    { property: 'og:image', content: 'https://devmatrose.github.io/devmatrose/images/blog/rollenspiel-preview.png' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:url', content: 'https://devmatrose.github.io/devmatrose/#blog' },
    { property: 'article:published_time', content: '2026-01-10' },
    { property: 'article:author', content: 'DEVmatrose' },
    { property: 'article:section', content: 'Game Design & Entwicklung' },
    
    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Der Algorithmus der Fantasie: Warum RPGs noch nicht perfekt sind' },
    { name: 'twitter:description', content: 'Ein Software-Entwickler analysiert die Lücke zwischen Pen & Paper und digitalen Rollenspielen.' },
    { name: 'twitter:image', content: 'https://devmatrose.github.io/devmatrose/images/blog/rollenspiel-preview.png' },
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
