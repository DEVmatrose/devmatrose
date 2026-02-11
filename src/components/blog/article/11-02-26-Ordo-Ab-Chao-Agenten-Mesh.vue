<template>
  <div class="min-h-screen bg-void text-off-white">
    <!-- Hero Image -->
    <div class="relative w-full h-96 overflow-hidden">
      <img 
        :src="heroImage" 
        alt="Ordo ab Chao – Agenten-Mesh-Netzwerke und emergente Ordnung"
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
          <span class="text-off-white">Ordo ab Chao</span>
        </nav>

        <!-- Meta Info & Share -->
        <div class="flex flex-wrap gap-4 items-center justify-between mb-6 text-sm">
          <div class="flex flex-wrap gap-4 text-off-white/70">
            <span>📅 11. Februar 2026</span>
            <span>•</span>
            <span>⏱️ 12 min Lesezeit</span>
            <span>•</span>
            <span>🌊 Architecture</span>
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
          Ordo ab Chao: Warum deine Agenten-Netzwerke den Sturm brauchen
        </h1>

        <!-- Subtitle -->
        <p class="text-xl sm:text-2xl text-cyber-cyan/90 mb-8 leading-relaxed">
          Ordnung im Chaos – Wie Mesh-Netzwerke aus Unordnung emergente Intelligenz erzeugen
        </p>

        <!-- Author Info -->
        <div class="flex items-center gap-3 mb-8">
          <div class="text-sm text-off-white/70">
            <span class="font-semibold text-off-white">Alexander Friedland</span> (<a href="https://github.com/ogerly" target="_blank" class="text-cyber-cyan hover:underline">@ogerly</a>)
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
        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          Der Blick über den Tellerrand: Ordnung aus dem Durcheinander
        </h2>

        <p class="text-xl leading-relaxed">
          Moin zusammen! In der Softwareentwicklung streben wir oft nach der totalen Kontrolle. Wir wollen saubere Dashboards, deterministische Abläufe und Systeme, die genau das tun, was im Lastenheft steht. Aber wer schon einmal ein dezentrales Agenten-Bot-Netzwerk im Einsatz gesehen hat, weiß: Die Realität ist eher eine <strong>stürmische Nordsee</strong> als ein ruhiger Ententeich.
        </p>

        <blockquote class="border-l-4 border-cyber-cyan pl-6 my-8 text-cyber-cyan font-semibold text-xl">
          „Ordnung braucht nur der Dumme, das Genie beherrscht das Chaos."
        </blockquote>

        <p>
          Heute möchte ich mit euch über das Prinzip <em>"Ordnung durch Chaos"</em> (<strong>Ordo ab Chao</strong>) sprechen – und warum es das Geheimnis hinter wirklich resilienten KI-Systemen ist.
        </p>

        <!-- Was bedeutet das? -->
        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          Was bedeutet „Ordo ab Chao" eigentlich?
        </h2>

        <p>
          Philosophisch gesehen ist <em>Chaos</em> kein Endzustand, sondern der <strong>Urzustand</strong>, aus dem Struktur erst erwächst. In der antiken griechischen Mythologie steht Chaos für den uranfänglichen, leeren Raum, aus dem der Kosmos – die geordnete Welt – hervorgeht.
        </p>

        <p>
          Carl Jung brachte es auf den Punkt:
        </p>

        <blockquote class="border-l-4 border-copper-orange/50 pl-6 my-8 italic text-off-white/80">
          „In allem Chaos ist ein Kosmos, in aller Unordnung eine geheime Ordnung."
        </blockquote>

        <p>
          In der modernen Informatik – speziell bei <strong>Multi-Agent-Systemen (MAS)</strong> – drehen wir das Prinzip um: Wir <em>erlauben</em> ein gewisses Maß an Unordnung auf der Mikro-Ebene, um eine <strong>überlegene Ordnung</strong> auf der Makro-Ebene zu erhalten.
        </p>

        <!-- Drei Hebel -->
        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          Chaos im Bot-Netzwerk: Drei Hebel für bessere Systeme
        </h2>

        <p>
          Wie legt man dieses abstrakte Konzept auf ein Netzwerk aus autonomen Bots? Hier sind die drei entscheidenden Hebel:
        </p>

        <!-- Hebel 1 -->
        <h3 class="text-2xl font-bold text-cyber-cyan mt-8 mb-4">
          1. Emergente Intelligenz (Der Schwarm-Effekt)
        </h3>

        <p>
          Statt eine zentrale Instanz (<em>"Command &amp; Control"</em>) zu bauen, die jeden Schritt vorgibt, geben wir den Agenten <strong>simple, lokale Regeln</strong>.
        </p>

        <div class="bg-cyber-cyan/5 border-l-4 border-cyber-cyan p-6 my-8 rounded-r">
          <p class="mb-3"><strong class="text-copper-orange">Das Chaos:</strong> Tausende Bots agieren autonom, senden Nachrichten und treffen Entscheidungen.</p>
          <p><strong class="text-cyber-cyan">Die Ordnung:</strong> Es entsteht ein Muster. Das Netzwerk löst komplexe Probleme wie Ressourcen-Allokation oder Lastverteilung <em>organisch</em>, ohne dass ein Single Point of Failure existiert.</p>
        </div>

        <p>
          Beispiele wie <strong>Ant Colony Optimization</strong> zeigen es: Aus scheinbar zufälligen Pfaden einzelner Ameisen entstehen optimale Routen. Die Einzelne weiß nichts vom Gesamtplan – aber der Schwarm löst das Problem.
        </p>

        <!-- Hebel 2 -->
        <h3 class="text-2xl font-bold text-cyber-cyan mt-8 mb-4">
          2. Antifragilität durch Störung
        </h3>

        <p>
          Ein starres System <strong>bricht</strong> unter Druck. Ein "chaotisches" Netzwerk hingegen wird durch Stress oft <em>besser</em>.
        </p>

        <p>
          Wenn Agenten ausfallen oder Latenzen auftreten, reorganisiert sich ein gut designtes Bot-Netzwerk <strong>von selbst</strong>. Das Chaos dient hier als <em>Katalysator für Evolution</em>. Nassim Talebs Konzept der Antifragilität lebt genau hier: Systeme, die nicht nur robust sind, sondern <strong>durch Störung wachsen</strong>.
        </p>

        <div class="bg-copper-orange/5 border-l-4 border-copper-orange p-6 my-8 rounded-r">
          <p class="text-copper-orange font-semibold mb-2">Self-Healing in Aktion:</p>
          <p>Ein Knoten fällt aus → Nachbarn erkennen die Lücke → Gossip-Protokoll redistributiert die Tasks → Netzwerk arbeitet weiter, potenziell mit besserer Lastverteilung als zuvor.</p>
        </div>

        <!-- Hebel 3 -->
        <h3 class="text-2xl font-bold text-cyber-cyan mt-8 mb-4">
          3. Exploration: Der Zufall als Feature
        </h3>

        <p>
          In der KI nutzen wir oft <strong>stochastische Prozesse</strong> (Zufall), um aus festgefahrenen Mustern auszubrechen. Ein Bot, der nur bekannte Wege geht, findet nie die Abkürzung. Erst durch das "chaotische" Abweichen vom Plan entdeckt das Netzwerk <strong>neue Optima</strong>.
        </p>

        <p>
          Das kennen wir aus Reinforcement Learning, genetischen Algorithmen oder Simulated Annealing – zufällige Variation führt zu optimierten Lösungen. In einem Mesh-Netzwerk heißt das:
        </p>

        <ul class="space-y-2">
          <li><strong>Exploration:</strong> Ein Teil der Bots probiert neue Wege (chaotisch, divergent)</li>
          <li><strong>Exploitation:</strong> Der Rest nutzt bewährte Routen (geordnet, konvergent)</li>
          <li><strong>Balance:</strong> Ohne Chaos steckt das Netzwerk im lokalen Optimum fest</li>
        </ul>

        <!-- Mesh-Netzwerk Architektur -->
        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          Das Agenten-Mesh-Netzwerk: Architektur für Ordo ab Chao
        </h2>

        <p>
          Ein <strong>Mesh-Netzwerk</strong> ist die natürliche Topologie für dieses Prinzip. Jeder Knoten ist gleichzeitig Client und Server, jeder Agent kommuniziert über <strong>Gossip-Protokolle</strong> mit seinen Nachbarn – keine Zentrale, kein Master.
        </p>

        <div class="bg-cyber-cyan/5 border border-cyber-cyan/30 p-8 my-12 rounded-lg">
          <h3 class="text-2xl font-bold text-cyber-cyan mb-4">Vergleich: Klassisch vs. Mesh</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div class="text-copper-orange font-bold">
              <p class="mb-2">Aspekt</p>
              <p class="mb-2">Struktur</p>
              <p class="mb-2">Fehlertoleranz</p>
              <p class="mb-2">Skalierung</p>
              <p class="mb-2">Logik</p>
            </div>
            <div>
              <p class="mb-2 text-off-white/50">Klassisch</p>
              <p class="mb-2">Hierarchisch (Top-Down)</p>
              <p class="mb-2">Gering (SPOF)</p>
              <p class="mb-2">Schwerfällig</p>
              <p class="mb-2">Starre Algorithmen</p>
            </div>
            <div>
              <p class="mb-2 text-cyber-cyan font-bold">Mesh (Ordo ab Chao)</p>
              <p class="mb-2">Dezentral (Bottom-Up)</p>
              <p class="mb-2">Extrem hoch (Antifragil)</p>
              <p class="mb-2">Nahtlos und organisch</p>
              <p class="mb-2">Emergente Intelligenz</p>
            </div>
          </div>
        </div>

        <p>
          Die Kommunikation im Mesh folgt einem simplen Prinzip: Jeder Agent teilt seinen Zustand mit einer zufälligen Auswahl von Nachbarn (<em>Gossip</em>). Informationen verbreiten sich <strong>epidemisch</strong> – wie eine Nachricht auf dem Schiffsdeck, die von Matrose zu Matrose weitergegeben wird. Kein zentraler Lautsprecher nötig.
        </p>

        <!-- Wichtig-Box -->
        <div class="bg-cyber-cyan/5 border-l-4 border-cyber-cyan p-6 my-8 rounded-r">
          <p>
            <strong class="text-cyber-cyan">Wichtig:</strong> „Chaos" bedeutet in diesem Kontext nicht <em>Willkür</em>, sondern die <strong>Abwesenheit einer zentralen Steuerung</strong> zugunsten von dynamischer Anpassung. Es ist kontrolliertes Chaos – wie das Meer, das chaotisch aussieht, aber physikalischen Gesetzen folgt.
          </p>
        </div>

        <!-- Fazit -->
        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          Fazit für DEVmatrosen
        </h2>

        <p>
          Wir müssen das Chaos nicht fürchten, wir müssen es <strong>beherrschen</strong>. Ein modernes Agenten-Netzwerk ist kein statisches Gebäude, sondern ein <em>lebendiger Organismus</em>.
        </p>

        <p>
          Wenn wir Systeme bauen, die Unordnung nicht nur tolerieren, sondern als <strong>Teil ihrer Logik</strong> begreifen, erschaffen wir Software, die wirklich <em>seefest</em> ist.
        </p>

        <blockquote class="border-l-4 border-cyber-cyan pl-6 my-8 text-cyber-cyan font-bold text-xl">
          Vertraust du deinen Agenten genug Freiheit an, oder muss bei dir jede Zeile Code strammstehen?
        </blockquote>

        <p>
          Die Zukunft gehört den Systemen, die aus <strong>Sturm und Strömung</strong> lernen – nicht denen, die bei der ersten Welle kentern.
        </p>

        <div class="mt-16 pt-8 border-t border-off-white/10">
          <p class="text-sm text-off-white/60">
            <strong>Ahoi!</strong> Wie geht ihr mit Chaos in euren verteilten Systemen um? Kontrolliert ihr jeden Knoten, oder lasst ihr den Schwarm entscheiden?
            Schreibt mir auf <a href="https://github.com/ogerly" target="_blank" class="text-cyber-cyan hover:underline">GitHub</a>.
          </p>
        </div>

      </div>

      <!-- Navigation Back to Blog -->
      <div class="mt-16 pt-8 border-t border-off-white/10">
        <button 
          @click="navigateToBlog"
          class="btn btn-outline btn-primary terminal-font"
        >
          ← Zurück zum Blog
        </button>
      </div>
    </article>

    <!-- Footer Spacer -->
    <div class="h-24"></div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const basePath = import.meta.env.BASE_URL
const heroImage = computed(() => `${basePath}images/blog/ordo-ab-chao-mesh-hero.png`)
const linkCopied = ref(false)

const tags = [
  'Multi-Agent-Systeme',
  'Mesh-Netzwerk',
  'Schwarmintelligenz',
  'Architektur',
  'Dezentralisierung',
  'Antifragilität'
]

const copyArticleLink = () => {
  const url = `${window.location.origin}${basePath}#/blog/ordo-ab-chao-agenten-mesh-netzwerk`
  navigator.clipboard.writeText(url).then(() => {
    linkCopied.value = true
    setTimeout(() => {
      linkCopied.value = false
    }, 2000)
  })
}

const navigateToHome = () => {
  window.dispatchEvent(new CustomEvent('navigate', { detail: 'home' }))
}

const navigateToBlog = () => {
  window.dispatchEvent(new CustomEvent('navigate', { detail: 'blog' }))
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

.prose {
  color: #e0e0e0;
}

.prose h2 {
  margin-top: 3rem;
  margin-bottom: 1.5rem;
}

.prose h3 {
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.prose p {
  margin-bottom: 1.5rem;
  line-height: 1.8;
}

.prose ul {
  margin-top: 1rem;
  margin-bottom: 1.5rem;
}

.prose li {
  margin-bottom: 0.5rem;
}

.prose strong {
  color: #ff9966;
  font-weight: 600;
}

.prose em {
  color: #66d9ff;
  font-style: italic;
}

.prose blockquote {
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 0.5rem;
}

.prose a {
  color: #66d9ff;
  text-decoration: none;
}

.prose a:hover {
  text-decoration: underline;
}

.prose code {
  background: rgba(102, 217, 255, 0.1);
  padding: 0.2rem 0.4rem;
  border-radius: 0.25rem;
  font-family: 'Courier New', monospace;
  font-size: 0.9em;
}
</style>
