import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// Blog-Slugs für Pre-Rendering
const blogSlugs = [
  'mesh-netzwerk-dezentrale-ki',
  'ordo-ab-chao-agenten-mesh-netzwerk',
  'biometrie-sicherheit-tr-03166-a',
  'schwarm-vs-grossrechner-neue-machtfrage',
  'keine-angst-vor-ki',
  'pen-and-paper-rollenspiele', 
  'smart-editor-llm-tool',
  'vom-code-zum-architekten'
]

export default defineConfig({
  plugins: [vue()],
  base: '/devmatrose/',
  
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  
  build: {
    outDir: 'docs',
    assetsDir: 'assets',
    emptyOutDir: true
  },
  
  // SSG Options für vite-ssg
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    
    // Alle Routen die pre-gerendert werden sollen
    includedRoutes(paths, routes) {
      // Statische Routen
      const staticRoutes = ['/', '/work', '/blog', '/references', '/contact']
      // Blog-Artikel Routen
      const blogRoutes = blogSlugs.map(slug => `/blog/${slug}`)
      
      return [...staticRoutes, ...blogRoutes]
    },
    
    onFinished() {
      console.log('✅ SSG Build completed! All routes pre-rendered.')
    }
  }
})
