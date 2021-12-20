import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import HTML from '../views/HTML.vue'
import JavaScript from '../views/JavaScript.vue'
import CSS from '../views/CSS.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/html',
        name: 'HTML',
        component: HTML
    },
    {
        path: '/css',
        name: 'CSS',
        component: CSS
    },
    {
        path: '/javascript',
        name: 'JavaScript',
        component: JavaScript
    },
    
]

const router = new VueRouter({
    routes
})

export default router