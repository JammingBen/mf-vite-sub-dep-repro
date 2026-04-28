import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

// The host creates and installs the pinia instance.
// Remotes receive this same instance via module federation shared modules.
const app = createApp(App)
app.use(createPinia())
app.mount('#app')
