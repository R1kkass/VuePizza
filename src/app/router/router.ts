import Home from "../../page/Home/Home.vue"
import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        component: Home
    }
]

const router = createRouter({
    routes,
    history: createWebHistory('/')
})

export default router