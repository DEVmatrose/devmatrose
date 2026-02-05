<template>
  <div class="relative min-h-screen overflow-hidden">
    <!-- Spiderweb Canvas Background -->
    <SpiderwebCanvas />
    
    <!-- Main Content -->
    <div class="relative z-10">
      <!-- Navigation -->
      <nav class="navbar bg-base-100/80 backdrop-blur-sm border-b border-copper-orange/20 fixed top-0 w-full z-50">
        <div class="navbar-start">
          <router-link to="/" class="btn btn-ghost normal-case text-xl terminal-font cursor-pointer">
            <img src="/logo-plastisch.png" alt="DEVmatrose Logo" class="h-10 w-10 mr-2" />
            <span class="text-copper-orange glow-pulse">DEV</span><span class="text-cyber-cyan">matrose</span>
          </router-link>
        </div>
        <div class="navbar-end hidden lg:flex">
          <ul class="menu menu-horizontal px-1 terminal-font">
            <li><router-link to="/" :class="{ 'text-copper-orange': route.name === 'home' }">Home</router-link></li>
            <li><router-link to="/work" :class="{ 'text-copper-orange': route.name === 'work' }">Arbeit</router-link></li>
            <li><router-link to="/blog" :class="{ 'text-copper-orange': route.name === 'blog' || route.name === 'blog-article' }">Blog</router-link></li>
            <li><router-link to="/references" :class="{ 'text-copper-orange': route.name === 'references' }">Referenzen</router-link></li>
            <li><router-link to="/contact" :class="{ 'text-copper-orange': route.name === 'contact' }">Kontakt</router-link></li>
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
              <li><router-link to="/">Home</router-link></li>
              <li><router-link to="/work">Arbeit</router-link></li>
              <li><router-link to="/blog">Blog</router-link></li>
              <li><router-link to="/references">Referenzen</router-link></li>
              <li><router-link to="/contact">Kontakt</router-link></li>
            </ul>
          </div>
        </div>
      </nav>

      <!-- Content Area -->
      <main class="pt-20 px-4 pb-20">
        <router-view v-slot="{ Component }">
          <Transition name="fade" mode="out-in">
            <component :is="Component" />
          </Transition>
        </router-view>
      </main>
      
      <!-- Footer -->
      <footer class="footer footer-center p-16 bg-base-200/80 backdrop-blur-sm border-t border-copper-orange/20 mt-20">
        <div class="max-w-6xl w-full">
          <img src="/devmatrose-banner.png" alt="DEVmatrose" class="w-full h-auto mb-8 glow-pulse" />
          <p class="text-off-white/60 terminal-font text-lg">
            <span class="text-copper-orange">DEV</span><span class="text-cyber-cyan">matrose</span> © 2025 - Die Architekturschmiede
          </p>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import SpiderwebCanvas from './components/SpiderwebCanvas.vue'

const router = useRouter()
const route = useRoute()

// Listen for custom navigate events (für Hybrid-Ansatz mit statischen HTML-Seiten)
const handleChangeTab = (event) => {
  const target = event.detail
  if (['home', 'work', 'blog', 'references', 'contact'].includes(target)) {
    router.push({ name: target })
  }
}

const handleNavigate = (event) => {
  const target = event.detail
  if (['home', 'work', 'blog', 'references', 'contact'].includes(target)) {
    router.push({ name: target })
  }
}

const handleOpenBlogPost = (event) => {
  const post = event.detail
  if (post.slug) {
    router.push({ name: 'blog-article', params: { slug: post.slug } })
  }
}

onMounted(() => {
  // Events für Hybrid-Ansatz (statische HTML-Seiten können diese Events triggern)
  window.addEventListener('change-tab', handleChangeTab)
  window.addEventListener('navigate', handleNavigate)
  window.addEventListener('open-blog-post', handleOpenBlogPost)
})

onUnmounted(() => {
  window.removeEventListener('change-tab', handleChangeTab)
  window.removeEventListener('navigate', handleNavigate)
  window.removeEventListener('open-blog-post', handleOpenBlogPost)
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
