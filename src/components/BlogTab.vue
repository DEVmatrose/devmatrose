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

const selectedPost = ref(null)

const articleComponents = {
  '02-12-25-Vom-Code-zum-Architekten': VomCodeZumArchitekten
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

onMounted(() => {
  window.addEventListener('open-blog-post', handleOpenBlogPost)
  window.addEventListener('navigate', handleNavigate)
})

onUnmounted(() => {
  window.removeEventListener('open-blog-post', handleOpenBlogPost)
  window.removeEventListener('navigate', handleNavigate)
})
</script>
