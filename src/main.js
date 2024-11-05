import { createApp } from 'vue'
import App from './App.vue'
import router from './Routes'

var app = createApp(App)

app.use(router).mount('#app')
