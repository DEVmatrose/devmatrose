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
        
        <!-- Scroll Indicator -->
        <div class="mt-16 animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mx-auto text-copper-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Home Tab - Die Zentrale
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
