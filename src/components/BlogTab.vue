<template>
  <div>
    <!-- Blog List View -->
    <div v-if="!selectedPost" class="container mx-auto py-12">
      <BlogList 
        showHeader
        title="Blog"
        subtitle="Deep Dives, Architektur-Entscheidungen und technische Insights"
        @read-more="handleReadMore"
      />
    </div>
    
    <!-- Article Detail View -->
    <component v-else :is="articleComponent" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import BlogList from './blog/BlogList.vue'

// Props für direkte Artikel-Parameter
const props = defineProps({
  articleSlug: String
})

const router = useRouter()
const route = useRoute()

// Import article components
import VomCodeZumArchitekten from './blog/article/02-12-25-Vom-Code-zum-Architekten.vue'
import SmartEditorLlmTool from './blog/article/03-12-25-Smart-Editor-LLM-Tool.vue'
import PenAndPaperRollenspiele from './blog/article/10-01-26-Pen-And-Paper-Rollenspiele.vue'
import KeineAngstVorKI from './blog/article/05-02-26-Keine-Angst-Vor-KI.vue'
import SchwarmVsGrossrechner from './blog/article/08-02-26-Schwarm-vs-Grossrechner.vue'
import BiometrieSicherheitTR03166A from './blog/article/09-02-26-Biometrie-Sicherheit-TR-03166-A.vue'
import OrdoAbChaoAgentenMesh from './blog/article/11-02-26-Ordo-Ab-Chao-Agenten-Mesh.vue'
import VonCodeZuKontextAgentenNavigation from './blog/article/17-02-26-Von-Code-Zu-Kontext-Agenten-Navigation.vue'
import KontinenteDerIntelligenz from './blog/article/14-02-26-Kontinente-Der-Intelligenz.vue'
import MeshNetzwerkDezentraleKI from './blog/article/13-02-26-Mesh-Netzwerk-Dezentrale-KI.vue'

const selectedPost = ref(null)

// Mapping von Slugs zu Komponenten (für statische HTML-Seiten)
// den neusten Artikel zuerst, damit er bei fehlendem Slug geladen wird
const articleComponents = {
  '17-02-26-Von-Code-Zu-Kontext-Agenten-Navigation': VonCodeZuKontextAgentenNavigation,
  '14-02-26-Kontinente-Der-Intelligenz': KontinenteDerIntelligenz,
  '13-02-26-Mesh-Netzwerk-Dezentrale-KI': MeshNetzwerkDezentraleKI,
  '11-02-26-Ordo-Ab-Chao-Agenten-Mesh': OrdoAbChaoAgentenMesh,
  '09-02-26-Biometrie-Sicherheit-TR-03166-A': BiometrieSicherheitTR03166A,
  '08-02-26-Schwarm-vs-Grossrechner': SchwarmVsGrossrechner,
  '05-02-26-Keine-Angst-Vor-KI': KeineAngstVorKI,
  '02-12-25-Vom-Code-zum-Architekten': VomCodeZumArchitekten,
  '03-12-25-Smart-Editor-LLM-Tool': SmartEditorLlmTool,
  '10-01-26-Pen-And-Paper-Rollenspiele': PenAndPaperRollenspiele
}

const articleComponent = computed(() => {
  if (!selectedPost.value?.component) return null
  return articleComponents[selectedPost.value.component]
})

const handleReadMore = (post) => {
  if (post.slug) {
    // Router-basierte Navigation
    router.push({ name: 'blog-article', params: { slug: post.slug } })
  } else {
    alert(`Artikel "${post.title}" ist noch nicht verfügbar.`)
  }
}

const handleOpenBlogPost = (event) => {
  const post = event.detail
  handleReadMore(post)
}

const handleNavigate = (event) => {
  const target = event.detail
  if (target === 'blog') {
    selectedPost.value = null
    router.push({ name: 'blog' })
  }
}

// Artikel anhand des Slugs laden
const loadArticleBySlug = async (slug) => {
  try {
    const basePath = import.meta.env.BASE_URL
    const response = await fetch(`${basePath}data/blog-metadata.json?v=${Date.now()}`)
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const data = await response.json()
    const post = data.posts.find(p => p.slug === slug)
    
    if (!post) {
      console.error('Artikel nicht gefunden:', slug)
      console.log('Verfügbare Slugs:', data.posts.map(p => p.slug))
      router.push({ name: 'blog' })
      return
    }
    
    if (!articleComponents[post.component]) {
      console.error('Komponente nicht gefunden:', post.component)
      console.log('Verfügbare Komponenten:', Object.keys(articleComponents))
      router.push({ name: 'blog' })
      return
    }
    
    selectedPost.value = post
    console.log('Artikel geladen:', post.title)
  } catch (error) {
    console.error('Fehler beim Laden des Artikels:', error)
    router.push({ name: 'blog' })
  }
}

// Watch für Slug-Änderungen in der Route
watch(() => route.params.slug, (newSlug) => {
  if (newSlug) {
    loadArticleBySlug(newSlug)
  } else {
    selectedPost.value = null
  }
}, { immediate: true })

onMounted(() => {
  window.addEventListener('open-blog-post', handleOpenBlogPost)
  window.addEventListener('navigate', handleNavigate)
})

onUnmounted(() => {
  window.removeEventListener('open-blog-post', handleOpenBlogPost)
  window.removeEventListener('navigate', handleNavigate)
})
</script>
