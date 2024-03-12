import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import rtStation from "@/views/rtStation/index.vue"
import safeInterface from "@/views/safeInterface/index.vue"


const routes: Array<RouteRecordRaw> = [
    {
        path: '/rtStation',
        // redirect:'/rtStation',
        name: "rtStation",
        component: rtStation,
        children:[],
    },
    {
        path: '/interface',
        name: "interface",
        component: safeInterface,
        children:[],
    }
]
const router = createRouter({
    history:createWebHistory(),
    routes:routes
});

export default router