import Vue from 'vue'
import VueRouter from 'vue-router'
import CharactersListPage from '@/pages/CharactersListPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'CharactersListPage',
    component: CharactersListPage
  },
  {
    path: '/characters/:id',
    name: 'CharactersProfilePage',
    component: () => import(/* webpackChunkName: "character" */ '../pages/CharactersProfilePage')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
