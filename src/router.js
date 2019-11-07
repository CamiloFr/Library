import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Colecciones from './views/Colecciones.vue'
import AddColecciones from './views/AddColecciones.vue'
import FCARN from './views/FCARN.vue'
import FCS from './views/FCS.vue'
import FCBI from './views/FCBI.vue'
import FCE from './views/FCE.vue'
import FCHyE from './views/FCHyE.vue'

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
    {
      path: '/FCE',
      name: 'facultadceco',
      component: FCE
    },
    {
      path: '/FCS',
      name: 'facultadcsal',
      component: FCS
    },
    {
      path: '/FCBI',
      name: 'facultadcbas',
      component: FCBI
    },
    {
      path: '/FCHyE',
      name: 'facultadchum',
      component: FCHyE
    },
  ]
})
