import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ContactUs',
    name: 'ContactUs',
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactUs.vue')
  },
  {
    path: '/section',
    name: 'Section',
    component: () => import(/* webpackChunkName: "section" */ '../views/Section.vue')
  },
  {
    path: '/films',
    name: 'Films',
    component: () => import(/* webpackChunkName: "films" */ '../components/Sections/Films.vue')
  },
  {
    path: '/starships',
    name: 'Starships',
    component: () => import(/* webpackChunkName: "starships" */ '../components/Sections/Starships.vue')
  },
  {
    path: '/vehicles',
    name: 'Vehicles',
    component: () => import(/* webpackChunkName: "vehicles" */ '../components/Sections/Vehicles.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
