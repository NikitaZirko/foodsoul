import './assets/main.scss'

import { createSSRApp  } from 'vue'
import { pinia } from '@/stores/index'

import App from './App.vue'
import router from './router'

const app = createSSRApp(App)

app.use(pinia)
app.use(router)

router.isReady().then(() => app.mount('#app'));
