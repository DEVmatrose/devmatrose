<template>
  <div class="blog-list">
    <!-- Header (optional, für dedizierte Blog-Seite) -->
    <div v-if="showHeader" class="mb-8">
      <h2 class="text-3xl md:text-4xl font-bold terminal-font text-copper-orange mb-2">
        <span class="glow-pulse">&gt; {{ title }}_</span>
      </h2>
      <p v-if="subtitle" class="text-off-white/70">{{ subtitle }}</p>
    </div>
    
    <!-- Loading State -->
    <div v-if="loading" class="text-center py-12">
      <span class="loading loading-spinner loading-lg text-copper-orange"></span>
    </div>
    
    <!-- Empty State -->
    <div v-else-if="displayPosts.length === 0" class="card bg-base-200 border border-copper-orange/20">
      <div class="card-body text-center py-12">
        <p class="text-off-white/60">
          Keine Artikel gefunden.
        </p>
      </div>
    </div>
    
    <!-- Blog Cards Grid -->
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <BlogCard
        v-for="post in displayPosts"
        :key="post.id"
        :post="post"
        @read-more="handleReadMore"
      />
    </div>
    
    <!-- Show More Button (nur wenn limit gesetzt und mehr Artikel verfügbar) -->
    <div v-if="limit && allPosts.length > limit" class="text-center mt-8">
      <button 
        @click="$emit('show-all')"
        class="btn btn-outline btn-primary terminal-font"
      >
        Alle Artikel ansehen ({{ allPosts.length }}) →
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import BlogCard from './BlogCard.vue'

const props = defineProps({
  limit: {
    type: Number,
    default: null // null = alle anzeigen
  },
  showHeader: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: 'Blog'
  },
  subtitle: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['read-more', 'show-all'])

const allPosts = ref([])
const loading = ref(true)

const displayPosts = computed(() => {
  if (props.limit) {
    return allPosts.value.slice(0, props.limit)
  }
  return allPosts.value
})

const loadPosts = async () => {
  try {
    const basePath = import.meta.env.BASE_URL
    // Cache-Buster hinzufügen um Browser-Cache zu umgehen
    const cacheBuster = `?v=${Date.now()}`
    const response = await fetch(`${basePath}data/blog-metadata.json${cacheBuster}`)
    const data = await response.json()
    // Sortiere nach Datum (neueste zuerst)
    allPosts.value = data.posts.sort((a, b) => 
      new Date(b.date) - new Date(a.date)
    )
  } catch (error) {
    console.error('Error loading blog posts:', error)
  } finally {
    loading.value = false
  }
}

const handleReadMore = (post) => {
  emit('read-more', post)
  // Navigation zum Detail-Artikel
  if (post.component) {
    window.dispatchEvent(new CustomEvent('open-blog-post', { detail: post }))
  }
}

onMounted(() => {
  loadPosts()
})
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
</style>
