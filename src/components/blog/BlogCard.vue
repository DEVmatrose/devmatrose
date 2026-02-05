<template>
  <div class="card bg-base-200 border border-copper-orange/20 hover:border-copper-orange/60 transition-all duration-300 hover:shadow-lg hover:shadow-copper-orange/20 h-full flex flex-col">
    <!-- Preview Image -->
    <figure class="relative">
      <img 
        :src="getImageUrl(post.image)" 
        :alt="post.imageAlt" 
        class="h-48 w-full object-cover"
        loading="lazy"
      />
      <div v-if="post.featured" class="absolute top-4 right-4">
        <span class="badge badge-accent glow-pulse">Featured</span>
      </div>
    </figure>
    
    <div class="card-body flex-1 flex flex-col">
      <!-- Kategorie & Lesezeit -->
      <div class="flex gap-2 text-sm text-cyan-blue mb-2">
        <span>{{ post.category }}</span>
        <span>•</span>
        <span>{{ post.readTime }}</span>
      </div>
      
      <!-- Titel -->
      <h3 class="card-title text-copper-orange terminal-font hover:text-copper-orange/80 transition-colors">
        {{ post.title }}
      </h3>
      
      <!-- Excerpt -->
      <p class="text-off-white/80 text-sm leading-relaxed flex-1">
        {{ post.excerpt }}
      </p>
      
      <!-- Tags -->
      <div class="flex flex-wrap gap-2 mt-4">
        <span 
          v-for="tag in post.tags.slice(0, 3)" 
          :key="tag"
          class="badge badge-sm badge-outline border-cyan-500/50 text-cyan-400"
        >
          {{ tag }}
        </span>
      </div>
      
      <!-- Footer mit Datum & CTA -->
      <div class="card-actions justify-between items-center mt-4 pt-4 border-t border-copper-orange/20">
        <span class="text-xs text-off-white/60 terminal-font">
          {{ formatDate(post.date) }}
        </span>
        <a 
          :href="getArticleUrl()"
          class="btn btn-sm btn-primary terminal-font"
        >
          Weiterlesen →
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  post: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['read-more'])

const getImageUrl = (path) => {
  if (!path) return ''
  const basePath = import.meta.env.BASE_URL
  return path.startsWith('/') ? `${basePath}${path.slice(1)}` : path
}

const getArticleUrl = () => {
  // Slug-zu-HTML-Mapping für statische Seiten (Hybrid-Ansatz für SEO)
  const htmlPages = {
    'vom-code-zum-architekten': 'blog-vom-code-zum-architekten.html',
    'smart-editor-llm-tool': 'blog-smart-editor-llm-tool.html',
    'pen-and-paper-rollenspiele': 'blog-pen-and-paper-rollenspiele.html',
    'keine-angst-vor-ki': 'blog-keine-angst-vor-ki.html'
  }
  
  const basePath = import.meta.env.BASE_URL
  const htmlFile = htmlPages[props.post.slug]
  
  if (htmlFile) {
    // Statische HTML-Seite mit korrekten Meta-Tags
    return `${basePath}${htmlFile}`
  }
  
  // Fallback: Direkt zum Vue Router
  return `#/blog/${props.post.slug}`
}

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('de-DE', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
}
</script>

<style scoped>
.glow-pulse {
  animation: pulseGlow 4s ease-in-out infinite;
}

@keyframes pulseGlow {
  0%, 100% {
    box-shadow: 0 0 10px currentColor, 0 0 20px currentColor;
  }
  50% {
    box-shadow: 0 0 20px currentColor, 0 0 40px currentColor;
  }
}
</style>
