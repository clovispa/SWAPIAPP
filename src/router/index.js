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
  }
]

const router = new VueRouter({
  routes
})

export default router
