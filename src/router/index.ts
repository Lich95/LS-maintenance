import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import rtStation from "@/views/rtStation/index.vue"
import safeInterface from "@/views/safeInterface/index.vue"
import alarmDiagnosis from "@/views/alarmDiagnosis/index.vue"
import driver from "@/views/driver/index.vue"
import network from "@/views/network/index.vue"


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
    },
    {
        path: '/alarm',
        name: "alarm",
        component: alarmDiagnosis,
        children:[],
    },
    {
        path: '/driver',
        name: "driver",
        component: driver,
        children:[],
    },
    {
        path: '/network',
        name: "network",
        component: network,
        children:[],
    }
]
const router = createRouter({
    history:createWebHistory(),
    routes:routes
});

export default router