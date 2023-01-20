import {createRouter, createWebHistory} from 'vue-router'
import MainPageComp from '@/pages/MainPageComp.vue'
import CatalogPageComp from '@/pages/CatalogPageComp.vue'

const routes = [
    {path: '/', component: MainPageComp, name: 'mainPage'},
    {path: '/catalog', component: CatalogPageComp, name: 'catalogPage'},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router