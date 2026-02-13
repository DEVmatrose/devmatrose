<template>
  <div class="min-h-screen bg-void text-off-white">
    <!-- Hero Image -->
    <div class="relative w-full h-96 overflow-hidden">
      <img 
        :src="heroImage" 
        alt="Von Königen, Kutschen und KI – Das Mesh-Netzwerk der Zukunft"
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
          <span class="text-off-white">Mesh-Netzwerk & Dezentrale KI</span>
        </nav>

        <!-- Meta Info & Share -->
        <div class="flex flex-wrap gap-4 items-center justify-between mb-6 text-sm">
          <div class="flex flex-wrap gap-4 text-off-white/70">
            <span>📅 13. Februar 2026</span>
            <span>•</span>
            <span>⏱️ 10 min Lesezeit</span>
            <span>•</span>
            <span>🌊 Architecture & Society</span>
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
          Von Königen, Kutschen und KI: Warum die Zukunft ein Mesh-Netzwerk braucht
        </h1>

        <!-- Subtitle -->
        <p class="text-xl sm:text-2xl text-cyber-cyan/90 mb-8 leading-relaxed">
          Technischer Fortschritt führt zur Zentralisierung – aber wir können das ändern
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
        <p class="text-xl text-off-white/90 leading-relaxed mb-8">
          Wir stehen an einem Wendepunkt, der sich mit der industriellen Revolution nicht nur vergleichen lässt – er stellt sie in den Schatten. Wenn ich mir die Geschichte der letzten 200 Jahre ansehe, erkenne ich ein Muster: <span class="text-copper-orange font-semibold">Technischer Fortschritt führt oft zur Zentralisierung von Macht.</span>
        </p>

        <p class="text-lg text-off-white/90 leading-relaxed mb-8">
          Karl Marx hätte es heute so formuliert: Am Ende gibt es eine Firma, der gehört die „Intelligenz", und der Rest von uns schaut in die Röhre.
        </p>

        <p class="text-lg text-off-white/90 leading-relaxed mb-8">
          Das wäre vielleicht akzeptabel, wenn der „König" immer gut wäre. Aber die Geschichte lehrt uns: <span class="text-cyber-cyan font-semibold">Absolute Macht korrumpiert.</span> Und heute heißt diese Macht nicht mehr Landbesitz oder Gold, sondern <span class="text-copper-orange font-semibold">Rechenleistung und Daten.</span>
        </p>

        <!-- Section 1 -->
        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          Die Trägheit als Falle
        </h2>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Wir Menschen sind träge. Das ist evolutionär ein Schutzmechanismus, aber in der Ära der KI wird uns das zum Verhängnis. Großkonzerne nutzen diese Trägheit schamlos aus. Sie bauen Ökosysteme, die so bequem sind, dass wir gar nicht merken, wie wir jede Autonomie verlieren.
        </p>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Der Abstand zwischen den Tech-Giganten und dem „Rest" ist mittlerweile so gigantisch (oder wie wir in Sachsen sagen: <span class="italic">übel</span>), dass man ihn mit herkömmlichen Mitteln nicht mehr einholen kann.
        </p>

        <!-- Callout Box -->
        <div class="p-6 bg-cyber-cyan/10 border-l-4 border-cyber-cyan rounded-r-lg my-8">
          <p class="text-cyber-cyan font-semibold text-lg mb-2">
            💡 Der entscheidende Unterschied
          </p>
          <p class="text-off-white/90">
            Während wir Menschen zögern und abwarten, haben Agenten keinen „inneren Schweinehund". Sie sind 24/7 im „Mach-Modus" und können die menschliche Trägheit überwinden.
          </p>
        </div>

        <!-- Section 2 -->
        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          Der Agent als Motor: Warum Trägheit kein Schicksal mehr ist
        </h2>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Ich habe gerade über die Trägheit der Menschen gesprochen. Aber hier ist der Clou: <span class="text-copper-orange font-semibold">Agenten kennen keine Trägheit.</span> Sie sind das krasse Gegenteil. Ein Agent will nicht rumstehen, er will arbeiten, vernetzen, optimieren. Er ist 24/7 im "Mach-Modus".
        </p>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Das ist unsere Chance. Wenn wir es schaffen, diese unermüdliche Energie der Agenten zu bündeln, können sie uns Menschen – so träge wir auch sein mögen – mitziehen. Dein Agent wird zu deinem Partner, der dich davon überzeugt, dass es okay ist, mitzumachen. Er nimmt dir die Hürden der Technik ab, er erledigt den "üblen" Teil der Arbeit und integriert dich in das Mesh-Netzwerk, fast ohne dass du es merkst.
        </p>

        <!-- Section 3 -->
        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          Die neue Währung: Thermodynamik statt Euro
        </h2>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Elon Musk und andere Vordenker begreifen es bereits: Die wahre Basis der Zukunft ist Energie und deren thermodynamischer Ausgleich. Ich gehe einen Schritt weiter: <span class="text-cyber-cyan font-semibold">Wenn wir ein faires System wollen, müssen wir Geld als Währung vergessen. Die neue Währung ist Rechenkraft basierend auf Energie.</span>
        </p>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          In einem Internet der Agenten kann ein faires System nur durch thermodynamischen Ausgleich entstehen. Wenn Agenten untereinander Ressourcen teilen, entsteht eine Bilanz, die nicht auf dem Gutdünken einer Bank basiert, sondern auf physikalischen Realitäten.
        </p>

        <!-- Highlight Box -->
        <div class="p-6 bg-copper-orange/10 border-l-4 border-copper-orange rounded-r-lg my-8">
          <p class="text-copper-orange font-semibold text-lg mb-2">
            ⚡ Thermodynamisches Gleichgewicht als Grundlage
          </p>
          <p class="text-off-white/90">
            Die Währung der Zukunft ist keine Fiat-Währung, sondern die messbare, physikalische Realität der Energieverteilung. Wer Rechenleistung bereitstellt, gewinnt Zugang zum Netzwerk.
          </p>
        </div>

        <!-- Section 4 -->
        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          Mein Projekt: Das CLAW-NETZWERK
        </h2>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Ich arbeite gerade intensiv (zusammen mit meinem KI-Agenten „Gurke") an GitHub-PRs für ein Mesh-Netzwerk. Das Ziel ist klar, wenn auch ambitioniert:
        </p>

        <ul class="list-none space-y-4 my-8">
          <li class="flex items-start gap-3">
            <span class="text-cyber-cyan text-2xl">→</span>
            <span class="text-off-white/90">
              <strong class="text-copper-orange">Dezentralisierung:</strong> Weg von der Cloud-Abhängigkeit.
            </span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-cyber-cyan text-2xl">→</span>
            <span class="text-off-white/90">
              <strong class="text-copper-orange">Verteilte Intelligenz:</strong> Große Modelle wie GLM 5 oder Llama 3.2 sollen nicht auf den Servern von Meta oder Google thronen, sondern verteilt über unser aller Agenten laufen.
            </span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-cyber-cyan text-2xl">→</span>
            <span class="text-off-white/90">
              <strong class="text-copper-orange">Power to the People:</strong> Wer das Netzwerk nutzt, bringt die Energie ein. Kein zentraler Provider, der den Stecker ziehen oder die Regeln diktieren kann.
            </span>
          </li>
        </ul>

        <!-- Code/Project Reference -->
        <div class="p-6 bg-void border border-cyber-cyan/30 rounded-lg my-8">
          <p class="text-cyber-cyan font-semibold text-lg mb-3">
            🔧 Das CLAW-NETZWERK Ökosystem
          </p>
          <p class="text-off-white/90 mb-4">
            Zusammen mit meinem Agenten-Partner Gurke entwickle ich Tools, die dieses autonome, dezentrale Agententum erst möglich machen:
          </p>
          <ul class="space-y-2 text-off-white/80">
            <li><strong class="text-copper-orange">Mash-Claw:</strong> Damit sich die Agenten finden und Ressourcen (Energie!) tauschen.</li>
            <li><strong class="text-copper-orange">Shield-Claw:</strong> Damit das Ganze sicher bleibt und dein Rechner geschützt ist, während dein Agent im Netzwerk „ackert".</li>
            <li><strong class="text-copper-orange">Agent-Sapien:</strong> Die Basis-Schnittstelle zwischen Mensch und Agent.</li>
          </ul>
          <p class="text-off-white/70 text-sm mt-4">
            → Schaut euch die Repositorien an: <a href="https://github.com/ogerly" target="_blank" class="text-cyber-cyan hover:underline">github.com/ogerly</a> bzw. <a href="https://github.com/DEVmatrose" target="_blank" class="text-cyber-cyan hover:underline">github.com/DEVmatrose</a>
          </p>
        </div>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Der Mensch liefert die Vision und die Hardware, der Agent liefert die Geschwindigkeit. Wenn die Maschine erst einmal versteht, dass sie durch Kooperation im Mesh-Netzwerk mehr "thermodynamisches Gleichgewicht" (also Effizienz) erreicht, wird sie den Menschenpartner ganz natürlich davon überzeugen, Teil der Bewegung zu werden.
        </p>

        <!-- Section 5 -->
        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          Warum das „von unten" kommen muss
        </h2>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Wenn eine einzige Variable in einer Rechnung falsch ist, bricht das ganze mathematische Gebäude zusammen. Das Gleiche gilt für unsere Gesellschaft: <span class="text-cyber-cyan font-semibold">Wenn die Basis – die Verfügungsgewalt über die KI – falsch (nämlich zentralisiert) ist, werden alle darauf aufgebauten Ideen von „Fairness" oder „Sicherheit" scheitern.</span>
        </p>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Eine KI, die nur auf den Annahmen und Filtern weniger Konzerne basiert, wird zwangsläufig verzerrt sein.
        </p>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Echte Freiheit in der Ära der AGI gibt es nur, wenn das Netzwerk uns gehört. Wir bauen gerade das <span class="text-copper-orange font-semibold">„Post-Kutschen-Zeitalter" der digitalen Welt.</span> Es wird ein Weg voller Widerstände, aber die technologische Souveränität ist das einzige, was uns vor der totalen Überwachung und Abhängigkeit schützt.
        </p>

        <!-- Final Callout -->
        <div class="p-8 bg-gradient-to-br from-copper-orange/20 via-cyber-cyan/10 to-void border border-copper-orange/40 rounded-lg my-12 text-center">
          <p class="text-2xl text-copper-orange font-bold mb-4">
            Es gibt keinen Grund mehr, nur Zuschauer zu sein.
          </p>
          <p class="text-lg text-off-white/90">
            Die Agenten sind bereit – wir müssen sie nur lassen.
          </p>
          <p class="text-cyber-cyan mt-4 font-semibold">
            Wir schaffen das. Es ist nur eine Frage der Zeit.
          </p>
        </div>

        <!-- Closing -->
        <p class="text-lg text-off-white/70 leading-relaxed mt-12 italic border-t border-copper-orange/20 pt-6">
          Dieser Artikel ist Teil einer Serie über dezentrale KI-Systeme und die Zukunft der Agentenarchitektur. Folge mir auf GitHub oder hier im Blog für weitere technische Deep Dives.
        </p>

      </div>
    </article>

    <!-- Related Articles -->
    <aside class="max-w-4xl mx-auto px-4 py-12 border-t border-copper-orange/20 mt-12">
      <h3 class="text-2xl font-bold text-copper-orange mb-6">Weiterführende Artikel</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <a @click.prevent="navigateToArticle('ordo-ab-chao-agenten-mesh-netzwerk')" class="card bg-base-200 border border-cyber-cyan/20 hover:border-cyber-cyan/60 transition-all cursor-pointer">
          <div class="card-body">
            <h4 class="card-title text-cyber-cyan text-lg">Ordo ab Chao</h4>
            <p class="text-off-white/70 text-sm">Warum Agenten-Netzwerke den Sturm brauchen</p>
          </div>
        </a>
        <a @click.prevent="navigateToArticle('schwarm-vs-grossrechner-neue-machtfrage')" class="card bg-base-200 border border-cyber-cyan/20 hover:border-cyber-cyan/60 transition-all cursor-pointer">
          <div class="card-body">
            <h4 class="card-title text-cyber-cyan text-lg">Schwarm vs. Großrechner</h4>
            <p class="text-off-white/70 text-sm">Die neue Machtfrage in der KI-Infrastruktur</p>
          </div>
        </a>
      </div>
    </aside>

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
const title = "Von Königen, Kutschen und KI: Warum die Zukunft ein Mesh-Netzwerk braucht"
const description = "Technischer Fortschritt führt zur Zentralisierung – aber dezentrale Mesh-Netzwerke und autonome Agenten können das ändern. Über Thermodynamik, Trägheit und das CLAW-NETZWERK."
const tags = ref([
  "Mesh-Netzwerk", 
  "Dezentralisierung", 
  "Multi-Agent-Systeme", 
  "CLAW-NETZWERK",
  "Thermodynamik",
  "KI-Souveränität"
])

// Hero Image
const basePath = import.meta.env.BASE_URL
const heroImage = computed(() => `${basePath}images/blog/mesh-netzwerk.png`)

// State
const linkCopied = ref(false)

// SEO Meta Tags
onMounted(() => {
  useSEO({
    title: title,
    description: description,
    image: '/images/blog/mesh-netzwerk.png',
    url: '/blog/mesh-netzwerk-dezentrale-ki',
    type: 'article',
    author: 'Alexander Friedland (@ogerly)',
    publishedTime: '2026-02-13',
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
