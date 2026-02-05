import { createRouter, createWebHashHistory } from 'vue-router'
import HomeTab from '../components/HomeTab.vue'
import WorkTab from '../components/WorkTab.vue'
import BlogTab from '../components/BlogTab.vue'
import ReferencesTab from '../components/ReferencesTab.vue'
import ContactTab from '../components/ContactTab.vue'

// Import Blog Article Components
import VomCodeZumArchitekten from '../components/blog/article/02-12-25-Vom-Code-zum-Architekten.vue'
import SmartEditorLlmTool from '../components/blog/article/03-12-25-Smart-Editor-LLM-Tool.vue'
import PenAndPaperRollenspiele from '../components/blog/article/10-01-26-Pen-And-Paper-Rollenspiele.vue'
import KeineAngstVorKI from '../components/blog/article/05-02-26-Keine-Angst-Vor-KI.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeTab,
    meta: {
      title: 'DEVmatrose - Die Architekturschmiede',
      description: 'Software-Architekt & Senior Developer. Ich erschaffe digitale Ökosysteme.'
    }
  },
  {
    path: '/work',
    name: 'work',
    component: WorkTab,
    meta: {
      title: 'Arbeit - DEVmatrose',
      description: 'Projekte und Entwicklungsarbeit von DEVmatrose'
    }
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogTab,
    meta: {
      title: 'Blog - DEVmatrose',
      description: 'Deep Dives, Architektur-Entscheidungen und technische Insights'
    }
  },
  {
    path: '/blog/:slug',
    name: 'blog-article',
    component: BlogTab,
    props: route => ({ articleSlug: route.params.slug }),
    meta: {
      title: 'Blog Artikel - DEVmatrose'
    }
  },
  {
    path: '/references',
    name: 'references',
    component: ReferencesTab,
    meta: {
      title: 'Referenzen - DEVmatrose',
      description: 'Kundenfeedback und Projektreferenzen'
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactTab,
    meta: {
      title: 'Kontakt - DEVmatrose',
      description: 'Kontaktieren Sie DEVmatrose für Ihr nächstes Projekt'
    }
  },
  // Redirect alte Hash-basierte URLs
  {
    path: '/#:pathMatch(.*)*',
    redirect: to => {
      // Convert old hash routes to new routes
      const hash = to.hash.slice(1) // Remove #
      if (hash.startsWith('blog?article=')) {
        const slug = hash.split('article=')[1]
        return `/blog/${slug}`
      }
      return `/${hash}` || '/'
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

// Update document title on route change
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'DEVmatrose'
  
  // Handle legacy URLs: #/blog?article=slug -> #/blog/slug
  if (to.path === '/blog' && to.query.article) {
    next({ name: 'blog-article', params: { slug: to.query.article } })
    return
  }
  
  next()
})

export default router
