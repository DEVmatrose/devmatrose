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
import { ref, computed, onMounted, onUnmounted } from 'vue'
import BlogList from './blog/BlogList.vue'

// Import article components
import VomCodeZumArchitekten from './blog/article/02-12-25-Vom-Code-zum-Architekten.vue'
import SmartEditorLlmTool from './blog/article/03-12-25-Smart-Editor-LLM-Tool.vue'
import PenAndPaperRollenspiele from './blog/article/04-12-25-Pen-And-Paper-Rollenspiele.vue'

const selectedPost = ref(null)

const articleComponents = {
  '02-12-25-Vom-Code-zum-Architekten': VomCodeZumArchitekten,
  '03-12-25-Smart-Editor-LLM-Tool': SmartEditorLlmTool,
  '04-12-25-Pen-And-Paper-Rollenspiele': PenAndPaperRollenspiele
}

const articleComponent = computed(() => {
  if (!selectedPost.value?.component) return null
  return articleComponents[selectedPost.value.component]
})

const handleReadMore = (post) => {
  if (post.component && articleComponents[post.component]) {
    selectedPost.value = post
    window.scrollTo({ top: 0, behavior: 'smooth' })
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
  }
}

const checkUrlForArticle = () => {
  const hash = window.location.hash
  
  // Parse URL parameters from hash
  const urlParams = new URLSearchParams(hash.split('?')[1])
  const articleSlug = urlParams.get('article')
  
  if (articleSlug === 'vom-code-zum-architekten') {
    selectedPost.value = {
      component: '02-12-25-Vom-Code-zum-Architekten',
      title: 'Vom Coder zum Architekten'
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  } else if (articleSlug === 'smart-editor-llm-tool') {
    selectedPost.value = {
      component: '03-12-25-Smart-Editor-LLM-Tool',
      title: 'Warum ich das Rad neu erfunden habe'
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  } else if (articleSlug === 'pen-and-paper-rollenspiele') {
    selectedPost.value = {
      component: '04-12-25-Pen-And-Paper-Rollenspiele',
      title: 'Der Algorithmus der Fantasie'
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  } else if (!articleSlug && hash.startsWith('#blog')) {
    // No article parameter, show blog list
    selectedPost.value = null
  }
}

onMounted(() => {
  window.addEventListener('open-blog-post', handleOpenBlogPost)
  window.addEventListener('navigate', handleNavigate)
  checkUrlForArticle()
  
  // Watch for hash changes to handle navigation from static HTML pages
  window.addEventListener('hashchange', checkUrlForArticle)
})

onUnmounted(() => {
  window.removeEventListener('open-blog-post', handleOpenBlogPost)
  window.removeEventListener('navigate', handleNavigate)
  window.removeEventListener('hashchange', checkUrlForArticle)
})
</script>
