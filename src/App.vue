<template>
  <div class="relative min-h-screen overflow-hidden">
    <!-- Spiderweb Canvas Background -->
    <SpiderwebCanvas />
    
    <!-- Main Content -->
    <div class="relative z-10">
      <!-- Navigation -->
      <nav class="navbar bg-base-100/80 backdrop-blur-sm border-b border-copper-orange/20 fixed top-0 w-full z-50">
        <div class="navbar-start">
          <a @click="activeTab = 'home'" class="btn btn-ghost normal-case text-xl terminal-font cursor-pointer">
            <img src="/src/assets/logo-plastisch.png" alt="DEVmatrose Logo" class="h-10 w-10 mr-2" />
            <span class="text-copper-orange glow-pulse">DEV</span><span class="text-cyber-cyan">matrose</span>
          </a>
        </div>
        <div class="navbar-end hidden lg:flex">
          <ul class="menu menu-horizontal px-1 terminal-font">
            <li><a @click="activeTab = 'home'" :class="{ 'text-copper-orange': activeTab === 'home' }">Home</a></li>
            <li><a @click="activeTab = 'work'" :class="{ 'text-copper-orange': activeTab === 'work' }">Arbeit</a></li>
            <li><a @click="activeTab = 'blog'" :class="{ 'text-copper-orange': activeTab === 'blog' }">Blog</a></li>
            <li><a @click="activeTab = 'references'" :class="{ 'text-copper-orange': activeTab === 'references' }">Referenzen</a></li>
            <li><a @click="activeTab = 'contact'" :class="{ 'text-copper-orange': activeTab === 'contact' }">Kontakt</a></li>
          </ul>
        </div>
        <!-- Mobile Menu -->
        <div class="navbar-end lg:hidden">
          <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
            <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52 terminal-font">
              <li><a @click="activeTab = 'home'">Home</a></li>
              <li><a @click="activeTab = 'work'">Arbeit</a></li>
              <li><a @click="activeTab = 'blog'">Blog</a></li>
              <li><a @click="activeTab = 'references'">Referenzen</a></li>
              <li><a @click="activeTab = 'contact'">Kontakt</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <!-- Content Area -->
      <main class="pt-20 px-4 pb-20">
        <Transition name="fade" mode="out-in">
          <component :is="currentComponent" />
        </Transition>
      </main>
      
      <!-- Footer -->
      <footer class="footer footer-center p-16 bg-base-200/80 backdrop-blur-sm border-t border-copper-orange/20 mt-20">
        <div class="max-w-6xl w-full">
          <img src="/src/assets/devmatrose-banner.png" alt="DEVmatrose" class="w-full h-auto mb-8 glow-pulse" />
          <p class="text-off-white/60 terminal-font text-lg">
            <span class="text-copper-orange">DEV</span><span class="text-cyber-cyan">matrose</span> © 2025 - Die Architekturschmiede
          </p>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import SpiderwebCanvas from './components/SpiderwebCanvas.vue'
import HomeTab from './components/HomeTab.vue'
import WorkTab from './components/WorkTab.vue'
import BlogTab from './components/BlogTab.vue'
import ReferencesTab from './components/ReferencesTab.vue'
import ContactTab from './components/ContactTab.vue'

const activeTab = ref('home')

const currentComponent = computed(() => {
  const components = {
    home: HomeTab,
    work: WorkTab,
    blog: BlogTab,
    references: ReferencesTab,
    contact: ContactTab
  }
  return components[activeTab.value]
})

// Listen for custom navigate events
const handleChangeTab = (event) => {
  activeTab.value = event.detail
}

const handleNavigate = (event) => {
  const target = event.detail
  if (['home', 'work', 'blog', 'references', 'contact'].includes(target)) {
    activeTab.value = target
  }
}

onMounted(() => {
  window.addEventListener('change-tab', handleChangeTab)
  window.addEventListener('navigate', handleNavigate)
})

onUnmounted(() => {
  window.removeEventListener('change-tab', handleChangeTab)
  window.removeEventListener('navigate', handleNavigate)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
