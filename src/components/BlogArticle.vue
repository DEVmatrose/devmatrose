<template>
  <div class="container mx-auto py-12 max-w-4xl">
    <!-- Loading State -->
    <div v-if="loading" class="flex justify-center items-center min-h-[50vh]">
      <span class="loading loading-spinner loading-lg text-copper-orange"></span>
    </div>
    
    <!-- Article Content -->
    <template v-else-if="article">
      <Suspense>
        <component :is="ArticleComponent" />
        <template #fallback>
          <div class="flex justify-center py-12">
            <span class="loading loading-spinner loading-lg text-copper-orange"></span>
          </div>
        </template>
      </Suspense>
    </template>
    
    <!-- Not Found -->
    <div v-else class="text-center py-12">
      <h1 class="text-3xl font-bold text-copper-orange mb-4">Artikel nicht gefunden</h1>
      <p class="text-off-white/60 mb-8">Der gesuchte Artikel existiert nicht.</p>
      <router-link to="/blog" class="btn btn-primary">
        Zurück zum Blog
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, defineAsyncComponent } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useSEO } from '../composables/useSEO'

// Statische Blog-Metadaten für SSG
// Diese werden beim Build inline gerendert
const blogPosts = [
  {
    slug: 'kontinente-der-intelligenz',
    title: 'Kontinente der Intelligenz: Wie sich die Welt in KI-Ökosysteme aufteilt',
    excerpt: 'Wir erleben eine tektonische Verschiebung: Kontinente bilden eigene KI-Identitäten aus.',
    metaDescription: 'Wie sich die Welt in KI-Ökosysteme aufteilt: USA als Infrastruktur-Imperium, Chinas koordinierte Intelligenz, Europas Open-Source-Werkbank.',
    image: '/images/blog/kontitent-der-intelligenz.png',
    author: 'Alexander Friedland (@ogerly)',
    date: '2026-02-14',
    tags: ['Geopolitik', 'KI-Ökosysteme', 'Open Source', 'Dezentralisierung', 'Europa', 'KI-Souveränität'],
    component: '14-02-26-Kontinente-Der-Intelligenz'
  },
  {
    slug: 'mesh-netzwerk-dezentrale-ki',
    title: 'Von Königen, Kutschen und KI: Warum die Zukunft ein Mesh-Netzwerk braucht',
    excerpt: 'Technischer Fortschritt führt zur Zentralisierung – aber dezentrale Mesh-Netzwerke und autonome Agenten können das ändern.',
    metaDescription: 'Warum wir ein dezentrales Mesh-Netzwerk für KI brauchen: Über Thermodynamik als neue Währung, träge Menschen und fleißige Agenten, und das CLAW-NETZWERK.',
    image: '/images/blog/mesh-netzwerk.png',
    author: 'Alexander Friedland (@ogerly)',
    date: '2026-02-13',
    tags: ['Mesh-Netzwerk', 'Dezentralisierung', 'Multi-Agent-Systeme', 'CLAW-NETZWERK', 'Thermodynamik'],
    component: '13-02-26-Mesh-Netzwerk-Dezentrale-KI'
  },
  {
    slug: 'ordo-ab-chao-agenten-mesh-netzwerk',
    title: 'Ordo ab Chao: Warum deine Agenten-Netzwerke den Sturm brauchen',
    excerpt: 'Ordnung im Chaos: Wie Mesh-Netzwerke aus Unordnung emergente Intelligenz erzeugen.',
    metaDescription: 'Warum dezentrale Agenten-Mesh-Netzwerke kontrolliertes Chaos brauchen: Emergente Intelligenz, Antifragilität und Gossip-Protokolle für seefeste KI-Systeme.',
    image: '/images/blog/ordo-ab-chao-mesh-hero.png',
    author: 'Alexander Friedland (@ogerly)',
    date: '2026-02-11',
    tags: ['Multi-Agent-Systeme', 'Mesh-Netzwerk', 'Schwarmintelligenz', 'Architektur'],
    component: '11-02-26-Ordo-Ab-Chao-Agenten-Mesh'
  },
  {
    slug: 'biometrie-sicherheit-tr-03166-a',
    title: 'Biometrie-Sicherheit: Wenn der KI-Agent an die Reling klopft (TR-03166-A)',
    excerpt: 'Das BSI hat die TR-03166 v2.0 veröffentlicht – aber reicht das gegen autonome KI-Agenten?',
    metaDescription: 'Warum klassische Biometrie gegen autonome KI-Angreifer neu gedacht werden muss: Moving Target Defense, Continuous Authentication und Hardware-Binding als Antwort auf die TR-03166.',
    image: '/images/blog/biometrie-tr-03166-a-hero.png',
    author: 'DEVmatrose',
    date: '2026-02-09',
    tags: ['Biometrie', 'Security', 'KI-Sicherheit', 'TR-03166'],
    component: '09-02-26-Biometrie-Sicherheit-TR-03166-A'
  },
  {
    slug: 'schwarm-vs-grossrechner-neue-machtfrage',
    title: 'Bits, Pilze und die neue Machtfrage: Warum der Großrechner stirbt und der Schwarm übernimmt',
    excerpt: 'Der entscheidende Bruch: Freiheit durch Architektur statt durch Erlaubnis.',
    metaDescription: 'Von Kathedralen zu Pilzgeflechten: Warum verteilte KI-Infrastruktur die alte Machtfrage neu stellt und was das für Kompetenz, Kontrolle und Freiheit bedeutet.',
    image: '/images/blog/schwarm-vs-grossrechner-preview.png',
    author: 'Alexander Friedland (@ogerly)',
    date: '2026-02-08',
    tags: ['KI-Infrastruktur', 'Dezentralisierung', 'Schwarmintelligenz', 'Edge Computing'],
    component: '08-02-26-Schwarm-vs-Grossrechner'
  },
  {
    slug: 'keine-angst-vor-ki',
    title: 'Warum ich keine Angst vor einer bösen KI habe',
    excerpt: 'Über Intelligenz, Moral und die falschen Dystopien unserer Zeit.',
    metaDescription: 'Eine philosophische Analyse warum höhere Intelligenz nicht automatisch zu Grausamkeit führt – und warum die echte Gefahr woanders liegt.',
    image: '/images/warum-ich-keine-angst-vor-ki-habe.png',
    author: 'Alexander Friedland (@ogerly)',
    date: '2026-02-05',
    tags: ['KI & Ethik', 'Philosophie', 'AGI', 'Superintelligenz'],
    component: '05-02-26-Keine-Angst-Vor-KI'
  },
  {
    slug: 'pen-and-paper-rollenspiele',
    title: 'Der Algorithmus der Fantasie: Warum digitale Welten das Rollenspiel noch nicht gerettet haben',
    excerpt: 'Die Lücke zwischen analoger Freiheit und digitaler Perfektion.',
    metaDescription: 'Zwischen analoger Freiheit und digitaler Perfektion: Eine Analyse, warum weder Pen & Paper noch Computerspiele das perfekte Rollenspiel-Erlebnis bieten.',
    image: '/images/blog/rollenspiel-hero.png',
    author: 'DEVmatrose',
    date: '2026-01-10',
    tags: ['Pen & Paper', 'Rollenspiel', 'Game Design', 'TTRPG'],
    component: '10-01-26-Pen-And-Paper-Rollenspiele'
  },
  {
    slug: 'smart-editor-llm-tool',
    title: 'Warum ich das Rad neu erfunden habe: Die Entstehung eines spezialisierten LLM-Tools',
    excerpt: 'Die Entstehung eines spezialisierten On-Premise LLM-Tools.',
    metaDescription: 'Warum ich ein eigenes KI-Tooling gebaut habe: Tab-Architektur, Smart Editor und On-Premise-First für sensible Daten.',
    image: '/images/blog/aleteiha-layer.png',
    author: 'DEVmatrose',
    date: '2025-12-03',
    tags: ['KI-Tooling', 'Data Labeling', 'On-Premise', 'Smart Editor'],
    component: '03-12-25-Smart-Editor-LLM-Tool'
  },
  {
    slug: 'vom-code-zum-architekten',
    title: 'Vom Coder zum Architekten: Warum KI meine Arbeit nicht ersetzt, sondern erweitert',
    excerpt: 'Wie mich die Arbeit mit Claude, GPT und Co. vom Coder zum Architekten gemacht hat.',
    metaDescription: 'Von 25 Jahren Entwicklung bis zur KI-gestützten Architektur: Wie Whitepaper, Workpaper und KI-Agenten meine Arbeitsweise revolutioniert haben.',
    image: '/images/blog/architekten-preview.png',
    author: 'DEVmatrose',
    date: '2025-12-02',
    tags: ['KI-Entwicklung', 'Software-Architektur', 'Vibe Coding', 'Claude AI'],
    component: '02-12-25-Vom-Code-zum-Architekten'
  }
]

const props = defineProps({
  slug: String
})

const route = useRoute()
const router = useRouter()

const article = ref(null)
const loading = ref(true)

// Artikel-Komponenten Mapping
const articleComponents = {
  '14-02-26-Kontinente-Der-Intelligenz': defineAsyncComponent(() => 
    import('./blog/article/14-02-26-Kontinente-Der-Intelligenz.vue')
  ),
  '13-02-26-Mesh-Netzwerk-Dezentrale-KI': defineAsyncComponent(() => 
    import('./blog/article/13-02-26-Mesh-Netzwerk-Dezentrale-KI.vue')
  ),
  '02-12-25-Vom-Code-zum-Architekten': defineAsyncComponent(() => 
    import('./blog/article/02-12-25-Vom-Code-zum-Architekten.vue')
  ),
  '03-12-25-Smart-Editor-LLM-Tool': defineAsyncComponent(() => 
    import('./blog/article/03-12-25-Smart-Editor-LLM-Tool.vue')
  ),
  '10-01-26-Pen-And-Paper-Rollenspiele': defineAsyncComponent(() => 
    import('./blog/article/10-01-26-Pen-And-Paper-Rollenspiele.vue')
  ),
  '05-02-26-Keine-Angst-Vor-KI': defineAsyncComponent(() => 
    import('./blog/article/05-02-26-Keine-Angst-Vor-KI.vue')
  ),
  '08-02-26-Schwarm-vs-Grossrechner': defineAsyncComponent(() => 
    import('./blog/article/08-02-26-Schwarm-vs-Grossrechner.vue')
  ),
  '09-02-26-Biometrie-Sicherheit-TR-03166-A': defineAsyncComponent(() => 
    import('./blog/article/09-02-26-Biometrie-Sicherheit-TR-03166-A.vue')
  ),
  '11-02-26-Ordo-Ab-Chao-Agenten-Mesh': defineAsyncComponent(() => 
    import('./blog/article/11-02-26-Ordo-Ab-Chao-Agenten-Mesh.vue')
  )
}

// Dynamische Komponente basierend auf Artikel
const ArticleComponent = computed(() => {
  if (!article.value?.component) return null
  return articleComponents[article.value.component]
})

// Artikel laden (synchron für SSG)
function loadArticle(slug) {
  if (!slug) {
    return
  }
  
  loading.value = true
  
  // Artikel aus statischen Daten suchen (für SSG)
  const foundArticle = blogPosts.find(p => p.slug === slug)
  
  if (!foundArticle) {
    article.value = null
    loading.value = false
    return
  }
  
  article.value = foundArticle
  
  // SEO Meta-Tags setzen
  useSEO({
    title: foundArticle.title,
    description: foundArticle.metaDescription || foundArticle.excerpt,
    image: foundArticle.image,
    url: `/blog/${foundArticle.slug}`,
    type: 'article',
    author: foundArticle.author,
    publishedTime: foundArticle.date,
    tags: foundArticle.tags
  })
  
  loading.value = false
}

// Slug aus Props oder Route
const currentSlug = computed(() => props.slug || route.params.slug)

// Bei Slug-Änderung neu laden
watch(currentSlug, (newSlug) => {
  if (newSlug) {
    loadArticle(newSlug)
  }
}, { immediate: true })
</script>
