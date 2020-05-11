import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Customers from '../views/Customers.vue'
import News from '../views/News.vue'
import Privacy from '../views/Privacy.vue'
import Product from '../views/Product.vue'
import Resources from '../views/Resources.vue'
import Terms from '../views/Terms.vue'

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
        path: '/news',
        name: 'News',
        component: News
    },
    {
        path: '/privacy',
        name: 'Privacy',
        component: Privacy
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
        path: '/terms',
        name: 'Terms',
        component: Terms
    },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
