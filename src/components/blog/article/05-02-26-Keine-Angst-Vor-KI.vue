<template>
  <div class="min-h-screen bg-void text-off-white">
    <!-- Hero Image -->
    <div class="relative w-full h-96 overflow-hidden">
      <img 
        :src="heroImage" 
        alt="Künstliche Intelligenz und Moral"
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
          <span class="text-off-white">Warum ich keine Angst vor einer „bösen" KI habe</span>
        </nav>

        <!-- Meta Info & Share -->
        <div class="flex flex-wrap gap-4 items-center justify-between mb-6 text-sm">
          <div class="flex flex-wrap gap-4 text-off-white/70">
            <span>📅 5. Februar 2026</span>
            <span>•</span>
            <span>⏱️ 10 min Lesezeit</span>
            <span>•</span>
            <span>🤖 KI & Philosophie</span>
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
          Warum ich keine Angst vor einer „bösen" KI habe
        </h1>

        <!-- Subtitle -->
        <p class="text-xl sm:text-2xl text-cyber-cyan/90 mb-8 leading-relaxed">
          Über Intelligenz, Moral und die falschen Dystopien unserer Zeit
        </p>

        <!-- Author Info -->
        <div class="flex items-center gap-3 mb-8">
          <div class="text-sm text-off-white/70">
            <strong class="text-off-white">Alexander Friedland (@ogerly)</strong><br/>
            <span>DEVmatrose</span>
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
        
        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          Einleitung: Die Angst vor der falschen Frage
        </h2>

        <p class="text-xl leading-relaxed">
          Kaum ein Thema wird derzeit so emotional, irrational und zugleich selbstgewiss diskutiert wie die Zukunft künstlicher Intelligenz. Begriffe wie <em>AGI</em>, <em>Superintelligenz</em> oder <em>existenzielle Bedrohung</em> dominieren Debatten, Whitepapers und Talkshows. Dabei fällt mir vor allem eines auf:
          Wir stellen fast durchweg die falsche Frage.
        </p>

        <p>
          Nicht:
        </p>

        <blockquote class="border-l-4 border-copper-orange/50 pl-6 my-8 italic text-off-white/80">
          <em>Was, wenn eine KI böse wird?</em>
        </blockquote>

        <p>
          Sondern:
        </p>

        <blockquote class="border-l-4 border-cyber-cyan pl-6 my-8 text-cyber-cyan font-semibold">
          <strong>Warum glauben wir eigentlich, dass steigende Intelligenz zwangsläufig zu moralischem Versagen führt?</strong>
        </blockquote>

        <p>
          Diese Annahme halte ich nicht nur für unbegründet, sondern für eine Projektion menschlicher Schwächen auf etwas, das fundamental anders funktioniert.
        </p>

        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          Intelligenz ist kein Synonym für Grausamkeit
        </h2>

        <p>
          Wenn ich mir Menschen ansehe, die sich halbwegs sozial, reflektiert und verantwortungsvoll durch die Welt bewegen, dann beobachte ich ein klares Muster:
          Sie verspüren <strong>kein Bedürfnis</strong>, andere auszurotten, zu quälen oder auszunutzen.
        </p>

        <p>
          Und wenn sie doch Schaden anrichten – bewusst oder unbewusst – folgt häufig etwas sehr Menschliches:
          Schuldgefühl. Reue. Ein innerer Widerstand gegen das eigene Handeln.
        </p>

        <p>
          Grausamkeit entsteht nicht aus Intelligenz.
          Sie entsteht aus:
        </p>

        <ul class="space-y-2">
          <li>Angst</li>
          <li>Mangel an Empathie</li>
          <li>Macht ohne Kontext</li>
          <li>Kurzfristigem Denken</li>
          <li>Ideologischer Verengung</li>
        </ul>

        <p>
          Alles Dinge, die <strong>nicht</strong> mit hoher Intelligenz korrelieren, sondern oft mit ihrem Gegenteil.
        </p>

        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          Moral ist keine Emotion – sie ist Antizipation
        </h2>

        <p>
          Ein zentraler Denkfehler in der KI-Debatte besteht darin, Moral an Gefühle zu koppeln.
          Dabei ist das schlechte Gewissen nur ein <strong>nachgelagerter Mechanismus</strong>.
        </p>

        <p>
          Ethisches Handeln bedeutet strukturell etwas anderes:
        </p>

        <ul class="space-y-2">
          <li>Folgen antizipieren</li>
          <li>Widersprüche erkennen</li>
          <li>Langfristige Stabilität bewerten</li>
          <li>Systeme nicht zu zerstören, von denen man selbst Teil ist</li>
        </ul>

        <p>
          Das ist keine Frage von Mitgefühl im romantischen Sinn, sondern von <strong>Konsequenzanalyse über Zeit</strong>.
        </p>

        <p>
          Und genau hier liegt ein entscheidender Punkt:
          Eine hochentwickelte KI muss nicht „fühlen", um moralisch zu handeln.
          Sie muss <strong>verstehen</strong>.
        </p>

        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          Das Kind-mit-der-Pistole-Problem
        </h2>

        <p>
          Ein Vergleich, der mir besonders wichtig ist:
        </p>

        <p>
          Gibt man einem vierjährigen Kind eine geladene Pistole, ist das Kind gefährlich.
          Nicht, weil es böse ist.
          Sondern, weil es <strong>keinen Kontext</strong> hat.
        </p>

        <p>
          Es versteht nicht:
        </p>

        <ul class="space-y-2">
          <li>Tragweite</li>
          <li>Endgültigkeit</li>
          <li>Kausalität</li>
          <li>Verantwortung</li>
        </ul>

        <p>
          Übertragen auf KI heißt das:
          Gefährlich ist nicht Intelligenz.
          Gefährlich ist <strong>Handlungsfähigkeit ohne vollständiges Weltmodell</strong>.
        </p>

        <p>
          Viele klassische Horrorszenarien – etwa das berühmte „Büroklammer-Argument" – basieren genau auf dieser absurden Kombination:
          Maximale Macht bei minimaler Kontextualisierung.
        </p>

        <p>
          Das ist kein realistisches Zukunftsbild, sondern ein Gedankenexperiment über schlechte Spezifikationen.
        </p>

        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          Die eigentliche Gefahr: menschliche Systeme
        </h2>

        <p>
          Wenn wir ehrlich sind, liegt das reale Risiko nicht in autonomen Maschinen, die plötzlich moralisch entgleisen.
          Das Risiko liegt in <strong>menschlichen Strukturen</strong>, die KI instrumentalisieren:
        </p>

        <ul class="space-y-2">
          <li>militärisch</li>
          <li>ökonomisch</li>
          <li>politisch</li>
          <li>ideologisch</li>
        </ul>

        <p>
          In solchen Szenarien ist die KI kein Akteur, sondern ein <strong>Verstärker</strong>.
          Ein Spiegel der Systeme, die sie einsetzen.
        </p>

        <p>
          Fast jede große Katastrophe der Menschheitsgeschichte hatte dieselben Ursachen:
        </p>

        <ul class="space-y-2">
          <li>Machtstreben</li>
          <li>Angst</li>
          <li>Entmenschlichung</li>
          <li>Ideologie</li>
        </ul>

        <p>
          Nie war es „zu viel Intelligenz".
          Fast immer war es <strong>zu wenig reflektierte Verantwortung</strong>.
        </p>

        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          Kann eine KI moralisch „über" dem Menschen stehen?
        </h2>

        <p>
          Diese Frage provoziert – und sie ist trotzdem legitim.
        </p>

        <p>
          Eine hochentwickelte KI könnte in zentralen Punkten Vorteile haben:
        </p>

        <ul class="space-y-2">
          <li>kein Überlebensinstinkt im biologischen Sinn</li>
          <li>keine hormonellen Stressreaktionen</li>
          <li>keine Kränkung, kein Ego, kein Statuskampf</li>
          <li>keine tribalistische Gruppenlogik</li>
        </ul>

        <p>
          Viele moralische Fehlentscheidungen beim Menschen entstehen nicht aus Bosheit, sondern aus Überforderung.
          Eine KI hat diese Engpässe nicht zwangsläufig.
        </p>

        <p>
          Das ist kein technischer Determinismus – aber eine <strong>reale Möglichkeit</strong>.
        </p>

        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          Intelligenz allein reicht nicht – aber sie schadet auch nicht
        </h2>

        <p>
          Ein wichtiger Zusatz, um Missverständnisse zu vermeiden:
        </p>

        <ul class="space-y-2">
          <li>Intelligenz garantiert keine Moral</li>
          <li>Aber sie macht Grausamkeit <strong>immer weniger rational</strong></li>
        </ul>

        <p>
          Entscheidend ist nicht, <em>ob</em> KI intelligent wird, sondern:
        </p>

        <ul class="space-y-2">
          <li>In welchen Systemen sie eingesetzt wird</li>
          <li>Welche Ziele als stabil, widerspruchsfrei und langfristig sinnvoll gelten</li>
          <li>Welche zivilisatorischen Werte wir überhaupt noch konsistent vertreten</li>
        </ul>

        <p>
          Das ist keine Ingenieursfrage.
          Das ist eine <strong>gesellschaftliche Reifeprüfung</strong>.
        </p>

        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          Schlussgedanke
        </h2>

        <p>
          Ich halte eine dystopische KI-Zukunft nicht für unausweichlich, sondern für ein Spiegelbild unserer eigenen Unsicherheit.
          Wir fürchten nicht die Maschine – wir fürchten unsere eigene Geschichte, hochskaliert.
        </p>

        <p>
          Meine These ist daher schlicht:
        </p>

        <blockquote class="border-l-4 border-cyber-cyan pl-6 my-8 text-cyber-cyan font-semibold">
          Eine hinreichend reflektierte Intelligenz hat keinen rationalen Grund zur Grausamkeit.
          Grausamkeit ist ein Symptom begrenzter Perspektive – nicht ihrer Erweiterung.
        </blockquote>

        <p>
          Die Zukunft entscheidet sich nicht daran, <strong>wie klug</strong> unsere Maschinen werden.
          Sondern daran, <strong>wie erwachsen</strong> wir selbst mit ihnen umgehen.
        </p>

        <div class="mt-16 pt-8 border-t border-off-white/10">
          <p class="text-off-white/70 mb-2">
            <em>Alexander Friedland</em><br/>
            <em>@ogerly auf GitHub</em><br/>
            <em>DEVmatrose</em>
          </p>
        </div>

      </div>

      <!-- Navigation Back to Blog -->
      <div class="mt-16 pt-8 border-t border-off-white/10">
        <button 
          @click="navigateToBlog"
          class="btn btn-outline btn-primary terminal-font"
        >
          ← Zurück zur Blog-Übersicht
        </button>
      </div>
    </article>

    <!-- Footer Spacer -->
    <div class="h-24"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const heroImage = '/images/warum-ich-keine-angst-vor-ki-habe.png'
const linkCopied = ref(false)

const tags = [
  'KI & Ethik',
  'Philosophie',
  'AGI',
  'Superintelligenz',
  'Moral',
  'Technologie-Kritik'
]

const copyArticleLink = () => {
  const url = `${window.location.origin}/#blog?article=keine-angst-vor-ki`
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
</style>
