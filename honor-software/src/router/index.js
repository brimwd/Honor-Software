import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Customers from '../views/Customers.vue'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import Resources from '../views/Resources.vue'
import Services from '../views/Services.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    },
    {
        path: '/customers',
        name: 'Customers',
        component: Customers
    },
    {
        path: '/product',
        name: 'Product',
        component: Product
    },
    {
        path: '/resources',
        name: 'Resources',
        component: Resources
    },
    {
        path: '/services',
        name: 'Services',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },

]

const router = new VueRouter({
  routes
})

export default router
