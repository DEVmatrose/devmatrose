import { createApp } from 'vue'
import { createHead } from '@unhead/vue/client'
import router from './router'
import './style.css'
import App from './App.vue'

const app = createApp(App)
const head = createHead()

app.use(head)
app.use(router)
app.mount('#app')
