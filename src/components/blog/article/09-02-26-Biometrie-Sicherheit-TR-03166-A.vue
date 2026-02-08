<template>
  <div class="min-h-screen bg-void text-off-white">
    <!-- Hero Image -->
    <div class="relative w-full h-96 overflow-hidden">
      <img 
        :src="heroImage" 
        alt="Biometrie-Sicherheit und KI-Agenten"
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
          <span class="text-off-white">Biometrie-Sicherheit: TR-03166-A</span>
        </nav>

        <!-- Meta Info & Share -->
        <div class="flex flex-wrap gap-4 items-center justify-between mb-6 text-sm">
          <div class="flex flex-wrap gap-4 text-off-white/70">
            <span>📅 9. Februar 2026</span>
            <span>•</span>
            <span>⏱️ 10 min Lesezeit</span>
            <span>•</span>
            <span>🔐 Security</span>
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
          Biometrie-Sicherheit: Wenn der KI-Agent an die Reling klopft
        </h1>

        <!-- Subtitle -->
        <p class="text-xl sm:text-2xl text-cyber-cyan/90 mb-8 leading-relaxed">
          TR-03166-A: Warum klassische Biometrie gegen autonome KI-Angreifer neu gedacht werden muss
        </p>

        <!-- Author Info -->
        <div class="flex items-center gap-3 mb-8">
          <div class="text-sm text-off-white/70">
            <span class="font-semibold text-off-white">DEVmatrose</span>
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
        
        <p class="text-xl leading-relaxed">
          Das BSI hat geliefert: Die <strong>Technische Richtlinie TR-03166 Version 2.0</strong> ist da. Endlich ein Framework, das Biometrie nicht mehr als magische Blackbox sieht, sondern Schwachstellen-Evaluation mit Fokus auf Praktikabilität denkt. Smartphones, Zutrittskontrollen, Multi-Modalität – alles drin.
        </p>

        <p>
          <strong>Aber mal ehrlich:</strong> Während wir noch die Schotten für klassische Angreifer dicht machen, braut sich am Horizont ein Sturm zusammen, den die aktuelle Richtlinie noch gar nicht auf dem Radar hat: <strong class="text-copper-orange">Autonome KI-Agenten.</strong>
        </p>

        <blockquote class="border-l-4 border-cyber-cyan pl-6 my-8 text-cyber-cyan font-semibold">
          Wenn wir Biometrie in die Zukunft denken, müssen wir über <strong>Agent-Aware Security</strong> reden.
        </blockquote>

        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          1. Das Problem: Statische Festung vs. lernende Torpedos
        </h2>

        <p>
          Bisher dachten wir bei Angriffen an Landratten mit Silikonmasken oder hochauflösenden Fotos. Das ist "Old School". KI-Agenten verändern das Bedrohungsmodell fundamental:
        </p>

        <div class="bg-cyber-cyan/5 border-l-4 border-cyber-cyan p-6 my-8 rounded-r">
          <h3 class="text-cyber-cyan font-bold mb-3">Die neue Bedrohung:</h3>
          <ul class="space-y-3">
            <li>
              <strong class="text-copper-orange">Grenzkosten Null:</strong> 
              Ein Agent braucht keinen Schlaf. Er feuert Millionen von synthetischen Varianten gegen dein System – massiv parallel und 24/7.
            </li>
            <li>
              <strong class="text-copper-orange">Reinforcement Learning (RL):</strong> 
              Dein System gibt ein "Access Denied" mit einem Ähnlichkeits-Score zurück? Herzlichen Glückwunsch, du hast dem Angreifer gerade eine Belohnungsfunktion geliefert. Der Agent lernt durch jede Abweisung, wie er das Bild oder die Stimme verändern muss, um näher an den Schwellenwert zu kommen.
            </li>
          </ul>
        </div>

        <blockquote class="border-l-4 border-copper-orange/50 pl-6 my-8 italic text-copper-orange">
          Es geht nicht mehr darum, ob ein System sicher ist, sondern wie viele Millisekunden ein KI-Agent braucht, um die mathematische Lücke zu finden.
        </blockquote>

        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          2. Die Schwachstellen im Maschinenraum
        </h2>

        <p>
          Warum reicht die aktuelle TR-03166 (v2.0) bald nicht mehr aus?
        </p>

        <ul class="space-y-3">
          <li>
            <strong class="text-cyber-cyan">Deterministische Logik:</strong> 
            Wenn <code>similarity(face, template) > 0.85</code> den Zugang gewährt, ist das für eine KI ein simples Optimierungsproblem. Feste Schwellenwerte sind Einladungen zum Reverse-Engineering.
          </li>
          <li>
            <strong class="text-cyber-cyan">Biometrie ist kein Geheimnis:</strong> 
            Dein Gesicht klebt überall im Netz. Deine Stimme ist in jedem Podcast. KI-Agenten nutzen das als Rohmaterial für <strong>Real-Time Injection Attacks</strong>.
          </li>
          <li>
            <strong class="text-cyber-cyan">Multi-Modalität ist kein Allheilmittel:</strong> 
            Ein Agent sucht sich den billigsten Pfad. Wenn Gesicht + Finger gefordert sind, aber der "Passwort-Reset" via Social Engineering beim Support-Agenten einfacher ist, bricht die Kette dort.
          </li>
        </ul>

        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          3. Der Vorschlag: TR-03166-A (Agent-Aware Layer)
        </h2>

        <p>
          Wir müssen die Richtlinie erweitern. Hier sind meine Thesen für einen <strong class="text-cyber-cyan">Agent-Aware Layer</strong>:
        </p>

        <h3 class="text-2xl font-bold text-cyber-cyan mt-8 mb-4">
          A. Moving Target Defense (Stochastik statt Statik)
        </h3>

        <p>
          Wir müssen aufhören, bei jedem Request die exakt gleiche Antwort-Logik zu nutzen.
        </p>

        <div class="bg-void-light p-6 rounded-lg my-6 border border-cyber-cyan/20">
          <code class="text-cyber-cyan text-sm">
            decision = (similarity > threshold + noise(σ²))
          </code>
        </div>

        <p>
          Durch das Injizieren von kryptografischem Rauschen (σ²) in den Entscheidungsprozess wird das Feedback für KI-Agenten unbrauchbar. Sie können keine stabilen Gradienten mehr berechnen. Das Lernen wird zum Glücksspiel.
        </p>

        <h3 class="text-2xl font-bold text-cyber-cyan mt-8 mb-4">
          B. Continuous Authentication: „Bist du es noch?"
        </h3>

        <p>
          Einmaliges Einloggen an der Pforte reicht nicht mehr. Wir brauchen <strong>Session-Begleitung</strong>.
        </p>

        <ul class="space-y-2">
          <li>Analyse von Mikroverhalten (Tipp-Rhythmus, Sensor-Rauschen, Interaktionsmuster)</li>
          <li>KI-Agenten handeln effizient, Menschen chaotisch. Diese Inkonsistenz müssen wir nutzen.</li>
        </ul>

        <h3 class="text-2xl font-bold text-cyber-cyan mt-8 mb-4">
          C. Hardware-Zwang (TEE-Binding)
        </h3>

        <p>
          Keine biometrischen Daten ohne Hardware-Signatur. Ein Sample muss direkt im <strong>Trusted Execution Environment (TEE)</strong> des Sensors signiert werden. Das verhindert, dass Deepfake-Agenten ihren generierten Datenstrom direkt in die API injizieren.
        </p>

        <div class="bg-copper-orange/5 border-l-4 border-copper-orange p-6 my-8 rounded-r">
          <h3 class="text-copper-orange font-bold mb-3">Hardware-First Ansatz:</h3>
          <p class="text-sm">
            Jedes biometrische Sample wird mit einem Hardware-Attestation-Zertifikat signiert, das nur im TEE des Sensors generiert werden kann. Software-basierte Injection-Attacks werden damit unmöglich.
          </p>
        </div>

        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          Fazit: Security ist ein Prozess, kein Siegel
        </h2>

        <p>
          Die TR-03166 ist ein starkes Fundament, aber sie adressiert primär die Angriffe der Vergangenheit. Die Zukunft der Biometrie ist <strong class="text-cyber-cyan">adaptiv, agentisch und persistent</strong>.
        </p>

        <p>
          Wir müssen weg von der Annahme, dass ein System "zertifiziert sicher" ist, hin zu einer Metrik der <strong>"Resilience under Continuous Attack"</strong>. Nur wenn unsere Systeme schneller lernen als die Angreifer-KIs, bleiben wir auf Kurs.
        </p>

        <div class="bg-cyber-cyan/5 border border-cyber-cyan/30 p-8 my-12 rounded-lg">
          <h3 class="text-2xl font-bold text-cyber-cyan mb-4">Die drei Säulen der Agent-Aware Security:</h3>
          <ol class="space-y-3 list-decimal list-inside">
            <li class="text-copper-orange"><strong>Stochastische Schwellenwerte</strong> – Keine deterministischen Anker für Gradienten</li>
            <li class="text-copper-orange"><strong>Continuous Authentication</strong> – Du bist nicht eingeloggt, du beweist es ständig neu</li>
            <li class="text-copper-orange"><strong>Hardware-Binding</strong> – Kein Trust ohne physikalische Wurzel</li>
          </ol>
        </div>

        <blockquote class="border-l-4 border-cyber-cyan pl-6 my-8 text-cyber-cyan font-bold text-xl">
          Was meint ihr? Sind wir bereit für adaptive Schwellenwerte, oder öffnet das nur die nächste Büchse der Pandora für False Rejections?
        </blockquote>

        <div class="mt-16 pt-8 border-t border-off-white/10">
          <p class="text-sm text-off-white/60">
            <strong>Diskussion:</strong> Wie bereiten wir Biometrie-Systeme auf KI-Agenten vor? 
            Teile deine Gedanken auf <a href="https://github.com/DEVmatrose" target="_blank" class="text-cyber-cyan hover:underline">GitHub</a>.
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
const heroImage = computed(() => `${basePath}images/blog/biometrie-tr-03166-a-hero.png`)
const linkCopied = ref(false)

const tags = [
  'Biometrie',
  'Security',
  'KI-Sicherheit',
  'TR-03166',
  'BSI',
  'Authentication',
  'Deepfakes'
]

const copyArticleLink = () => {
  const url = `${window.location.origin}${basePath}#/blog/biometrie-sicherheit-tr-03166-a`
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

.prose ol {
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

.prose code {
  background: rgba(102, 217, 255, 0.1);
  padding: 0.2rem 0.4rem;
  border-radius: 0.25rem;
  font-family: 'Courier New', monospace;
  font-size: 0.9em;
}

.prose a {
  color: #66d9ff;
  text-decoration: none;
}

.prose a:hover {
  text-decoration: underline;
}
</style>
