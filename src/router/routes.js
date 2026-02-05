/**
 * Vue Router Routes für DEVmatrose
 * Separiert für vite-ssg Pre-Rendering
 */

// Lazy Loading für optimales Code-Splitting
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/HomeTab.vue'),
    meta: {
      title: 'DEVmatrose - Die Architekturschmiede',
      description: 'Software-Architekt & Senior Developer. Ich erschaffe digitale Ökosysteme.',
      image: '/images/og-default.png'
    }
  },
  {
    path: '/work',
    name: 'work',
    component: () => import('../components/WorkTab.vue'),
    meta: {
      title: 'Arbeit - DEVmatrose',
      description: 'Projekte und Entwicklungsarbeit von DEVmatrose'
    }
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('../components/BlogTab.vue'),
    meta: {
      title: 'Blog - DEVmatrose',
      description: 'Deep Dives, Architektur-Entscheidungen und technische Insights'
    }
  },
  {
    path: '/blog/:slug',
    name: 'blog-article',
    component: () => import('../components/BlogArticle.vue'),
    props: true,
    meta: {
      // Meta-Tags werden dynamisch in BlogArticle.vue gesetzt
    }
  },
  {
    path: '/references',
    name: 'references',
    component: () => import('../components/ReferencesTab.vue'),
    meta: {
      title: 'Referenzen - DEVmatrose',
      description: 'Kundenfeedback und Projektreferenzen'
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../components/ContactTab.vue'),
    meta: {
      title: 'Kontakt - DEVmatrose',
      description: 'Kontaktieren Sie DEVmatrose für Ihr nächstes Projekt'
    }
  }
]

export default routes
