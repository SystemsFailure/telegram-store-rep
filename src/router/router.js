import {createRouter, createWebHistory} from 'vue-router'
import MainPageComp from '@/pages/MainPageComp.vue'
import RegisterComp from '@/pages/RegisterComp.vue'

const routes = [
    {path: '/', component: MainPageComp, name: 'mainPage'},
    {path: '/register', component: RegisterComp, name: 'regPage'},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router