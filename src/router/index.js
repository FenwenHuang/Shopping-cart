import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Collection from '../views/Collection.vue'
import Special from '../views/Special.vue'
import Design from '../views/Design.vue'



import { LayoutPlugin } from 'bootstrap-vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component:Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../components/AboutView.vue')
  },
  {
    path: '/collection',
    name: 'collection',
    component: Collection
  },
  {
    path: '/special',
    name: 'special',
    component: Special
  },
  {
    path: '/design',
    name: 'design',
    component: Design
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
