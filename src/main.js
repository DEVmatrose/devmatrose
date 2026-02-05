import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import routes from './router/routes'
import './style.css'

// ViteSSG erstellt App, Router und Head automatisch
// Die zu pre-rendernden Routen werden in vite.config.js definiert
export const createApp = ViteSSG(
  App,
  {
    routes,
    base: import.meta.env.BASE_URL,
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      }
      return { top: 0, behavior: 'smooth' }
    }
  },
  // Setup-Funktion für Plugins
  ({ app, router, isClient, initialState }) => {
    // vite-ssg verwendet intern @unhead/vue
    // Nur im Client: Title bei Routenwechsel aktualisieren
    if (isClient) {
      router.beforeEach((to, from, next) => {
        if (to.meta.title) {
          document.title = to.meta.title
        }
        next()
      })
    }
  }
)
