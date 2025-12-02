<template>
  <div class="hero min-h-screen">
    <div class="hero-content text-center">
      <div class="max-w-4xl">
        <!-- Logo / Title -->
        <div class="mb-8">
          <img src="/src/assets/logo-plastisch.png" alt="DEVmatrose Logo" class="h-32 w-32 mx-auto mb-6 glow-pulse" />
          <h1 class="text-6xl md:text-8xl font-bold terminal-font">
            <span class="text-copper-orange glow-pulse">DEV</span><span class="text-cyber-cyan">matrose</span>
          </h1>
        </div>
        
        <!-- Tagline -->
        <p class="text-2xl md:text-3xl mb-6 text-off-white/90">
          Die Architekturschmiede
        </p>
        
        <!-- Pitch -->
        <div class="card bg-base-200/50 backdrop-blur-sm border border-copper-orange/20 mb-8">
          <div class="card-body">
            <h2 class="text-xl md:text-2xl font-semibold text-cyan-blue mb-4">
              Ich schreibe nicht nur Code, ich erschaffe Ökosysteme.
            </h2>
            <p class="text-lg text-off-white/80 leading-relaxed">
              Als Senior Developer & Software-Architekt sitze ich im Zentrum eines komplexen Netzwerks, 
              ziehe Fäden und schaffe Verbindungen, die anderen verborgen bleiben. 
              Von dezentralen Protokollen über KI-Integration bis hin zu komplexen Datenstrukturen – 
              ich verwandle technische Herausforderungen in robuste, skalierbare Lösungen.
            </p>
          </div>
        </div>
        
        <!-- Key Skills -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div class="badge badge-lg badge-outline border-copper-orange text-copper-orange p-4">
            Vue.js / React
          </div>
          <div class="badge badge-lg badge-outline border-cyan-blue text-cyan-blue p-4">
            AI Integration
          </div>
          <div class="badge badge-lg badge-outline border-copper-orange text-copper-orange p-4">
            Dezentrale Systeme
          </div>
          <div class="badge badge-lg badge-outline border-cyan-blue text-cyan-blue p-4">
            Graph Databases
          </div>
        </div>
        
        <!-- CTA -->
        <div class="flex flex-col md:flex-row gap-4 justify-center">
          <button class="btn btn-primary text-void font-bold text-lg px-8 glow-pulse">
            Projekte ansehen
          </button>
          <button class="btn btn-outline btn-secondary text-lg px-8">
            Kontakt aufnehmen
          </button>
        </div>
        
        <!-- Social Links -->
        <div class="mt-8 flex justify-center gap-6">
          <a 
            href="https://github.com/DEVmatrose" 
            target="_blank" 
            rel="noopener noreferrer"
            class="text-off-white/70 hover:text-copper-orange transition-colors duration-300"
            aria-label="DEVmatrose auf GitHub"
          >
            <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
        
        <!-- Scroll Indicator -->
        <div class="mt-16 animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mx-auto text-copper-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
    
    <!-- Blog Preview Section -->
    <section class="container mx-auto px-4 py-16">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold terminal-font text-copper-orange mb-4">
          <span class="glow-pulse">&gt; Latest_Blog_Posts_</span>
        </h2>
        <p class="text-xl text-off-white/70">
          Deep Dives, Architektur-Entscheidungen und Best Practices
        </p>
      </div>
      
      <BlogList 
        :limit="3"
        @show-all="navigateToBlog"
        @read-more="navigateToPost"
      />
    </section>
  </div>
</template>

<script setup>
import BlogList from './blog/BlogList.vue'

const navigateToBlog = () => {
  window.dispatchEvent(new CustomEvent('change-tab', { detail: 'blog' }))
}

const navigateToPost = (post) => {
  // Zum Blog-Tab wechseln und Artikel öffnen
  window.dispatchEvent(new CustomEvent('change-tab', { detail: 'blog' }))
  setTimeout(() => {
    window.dispatchEvent(new CustomEvent('open-blog-post', { detail: post }))
  }, 100)
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
</style>
