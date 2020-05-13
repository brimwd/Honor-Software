import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Customers from '../views/Customers.vue'
import PressRoom from '../views/PressRoom.vue'
import Privacy from '../views/Privacy.vue'
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
        name: 'PressRoom',
        component: PressRoom
    },
    {
        path: '/legal/privacy',
        name: 'Privacy',
        component: Privacy
    },
    {
        path: '/legal/tos',
        name: 'Terms',
        component: Terms
    },
]

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
      return { x: 0, y: 0 };
  }
})

export default router
