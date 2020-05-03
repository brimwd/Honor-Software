import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import Resources from '../views/Resources.vue'

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
        path: '/product',
        name: 'Product',
        component: Product
    },
    {
        path: '/resources',
        name: 'Resources',
        component: Resources
    },
]

const router = new VueRouter({
  routes
})

export default router
