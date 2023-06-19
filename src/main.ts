import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from "./app/store/index"
import router from './app/router/router'

createApp(App)
    .use(router)
    .use(store)
    .mount('#app')
