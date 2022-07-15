import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import router from './router'
import store from './store'
import i18n from './i18n'

import 'element-plus/dist/index.css'
import 'font-awesome/css/font-awesome.min.css'

const app = createApp(App)

app.use(ElementPlus)
app.use(router)
app.use(store)
app.use(i18n)

app.mount('#app')
