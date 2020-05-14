import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import OpenSource from '../views/OpenSource.vue'
import WhyHonor from '../views/WhyHonor.vue'
import Contact from '../views/Contact.vue'
import Customers from '../views/Customers.vue'
import ScheduleUX from '../views/ScheduleUX.vue'
import PressRoom from '../views/PressRoom.vue'
import Privacy from '../views/Privacy.vue'
import Terms from '../views/Terms.vue'
import Team from '../views/Team.vue'

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
        path: '/about/open-source',
        name: 'OpenSource',
        component: OpenSource
    },
    {
        path: '/about/team',
        name: 'Team',
        component: Team
    },
    {
        path: '/about/why-honor',
        name: 'WhyHonor',
        component: WhyHonor
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
    },{
        path: '/customers/scheduleux',
        name: 'ScheduleUX',
        component: ScheduleUX
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
