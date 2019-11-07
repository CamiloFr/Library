import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Colecciones from './views/Colecciones.vue'
import AddColecciones from './views/AddColecciones.vue'
import FCARN from './views/FCARN.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/colecciones',
      name: 'colecciones',
      component: Colecciones
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/addcolecciones',
      name: 'addcolecciones',
      component: AddColecciones
    },
    {
      path: '/FCARN',
      name: 'facultadcarn',
      component: FCARN
    },
  ]
})
