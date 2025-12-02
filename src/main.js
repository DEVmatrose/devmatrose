import { createApp } from 'vue'
import { createHead } from 'unhead'
import { UnheadPlugin } from '@unhead/vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)
const head = createHead()

app.use(UnheadPlugin(head))
app.mount('#app')
