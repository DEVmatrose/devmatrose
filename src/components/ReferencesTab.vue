<template>
  <div class="container mx-auto py-12">
    <h1 class="text-4xl md:text-5xl font-bold terminal-font text-copper-orange mb-4">
      <span class="glow-pulse">Wall of Trust</span>
    </h1>
    <p class="text-xl text-off-white/70 mb-12">
      Erfolgreiche Projekte, die den Unterschied gemacht haben
    </p>
    
    <div v-if="loading" class="text-center py-12">
      <span class="loading loading-spinner loading-lg text-copper-orange"></span>
    </div>
    
    <div v-else-if="references.length === 0" class="card bg-base-200 border border-copper-orange/20">
      <div class="card-body text-center py-16">
        <p class="text-off-white/60 text-lg">
          Referenzen werden derzeit zusammengestellt...
        </p>
        <p class="text-off-white/40 text-sm mt-2">
          Erfolgreiche Projekte und Kundenstimmen folgen in Kürze.
        </p>
      </div>
    </div>
    
    <div v-else class="space-y-6">
      <div 
        v-for="reference in references" 
        :key="reference.id"
        class="card bg-base-200 border border-copper-orange/20 hover:border-copper-orange/60 transition-all duration-300"
      >
        <div class="card-body">
          <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div class="flex-1">
              <h3 class="text-2xl font-bold text-copper-orange terminal-font mb-2">
                {{ reference.project }}
              </h3>
              <p class="text-cyan-blue font-semibold mb-1">{{ reference.client }}</p>
              <p class="text-off-white/60 text-sm mb-4">{{ reference.year }}</p>
              <p class="text-off-white/80 mb-4">{{ reference.description }}</p>
              
              <div class="flex flex-wrap gap-2 mb-4">
                <span 
                  v-for="tech in reference.technologies" 
                  :key="tech"
                  class="badge badge-outline border-cyan-500/50 text-cyan-400"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
            
            <div class="md:min-w-[200px]">
              <div class="stat bg-base-300 rounded-lg border border-copper-orange/20">
                <div class="stat-title text-xs">Outcome</div>
                <div class="stat-value text-sm text-copper-orange leading-tight">
                  ✓
                </div>
                <div class="stat-desc text-xs">{{ reference.outcome }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="mt-12 text-center">
      <p class="text-off-white/60 text-sm">
        * Alle Referenzen sind von Kunden geprüft und freigegeben
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const references = ref([])
const loading = ref(true)

onMounted(async () => {
  try {
    const baseUrl = import.meta.env.BASE_URL
    const response = await fetch(`${baseUrl}data/references.json`)
    const data = await response.json()
    references.value = data.references
  } catch (error) {
    console.error('Error loading references:', error)
  } finally {
    loading.value = false
  }
})
</script>
