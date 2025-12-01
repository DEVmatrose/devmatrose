<template>
  <div class="container mx-auto py-12">
    <h1 class="text-4xl md:text-5xl font-bold terminal-font text-copper-orange mb-8">
      <span class="glow-pulse">Der Maschinenraum</span>
    </h1>
    
    <!-- Prototypen Section -->
    <section class="mb-16">
      <h2 class="text-3xl font-bold text-cyan-blue mb-6 terminal-font">
        &gt; Prototypen_
      </h2>
      
      <div v-if="loading" class="text-center py-12">
        <span class="loading loading-spinner loading-lg text-copper-orange"></span>
      </div>
      
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="project in projects" 
          :key="project.id"
          class="card bg-base-200 border border-copper-orange/20 hover:border-copper-orange/60 transition-all duration-300 hover:shadow-lg hover:shadow-copper-orange/20"
        >
          <div class="card-body">
            <h3 class="card-title text-copper-orange terminal-font">
              {{ project.name }}
            </h3>
            <p class="text-sm text-cyan-blue mb-2">{{ project.category }}</p>
            <p class="text-off-white/80 mb-4">{{ project.description }}</p>
            
            <div class="flex flex-wrap gap-2 mb-4">
              <span 
                v-for="tag in project.tags" 
                :key="tag"
                class="badge badge-sm badge-outline border-cyan-500/50 text-cyan-400"
              >
                {{ tag }}
              </span>
            </div>
            
            <div class="card-actions justify-end">
              <a 
                :href="project.repository" 
                target="_blank"
                class="btn btn-sm btn-outline btn-primary"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
            </div>
            
            <div v-if="project.highlight" class="absolute top-4 right-4">
              <span class="badge badge-sm badge-accent glow-pulse">Featured</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Deep Dives / Blog Section -->
    <section>
      <h2 class="text-3xl font-bold text-cyan-blue mb-6 terminal-font">
        &gt; Deep_Dives_
      </h2>
      
      <div class="card bg-base-200 border border-cyan-blue/20">
        <div class="card-body">
          <p class="text-off-white/60 text-center py-8">
            Technische Artikel zu Architektur-Entscheidungen kommen bald...
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const projects = ref([])
const loading = ref(true)

onMounted(async () => {
  try {
    const response = await fetch('/data/projects.json')
    const data = await response.json()
    projects.value = data.projects
  } catch (error) {
    console.error('Error loading projects:', error)
  } finally {
    loading.value = false
  }
})
</script>
