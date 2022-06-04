import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import PageDashboard from '../components/PageDashboard.vue'
import PageAbout from '../components/PageAbout.vue'
import PageNotFound from '../components/Page404.vue'


const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/dashboard',
            name: 'dashboard',
            component: PageNotFound
        },
        {
            // path: '/dashboard/:type?value=200',
            path: '/dashboard/:type',
            name: 'dashboardWithComp',
            component: PageDashboard
        },
        {
            path: '/about',
            name: 'about',
            component: PageAbout
        },
        
    ]
})

export default router

