import Vue from 'vue'
import VueRouter from 'vue-router'
import PageA from './container/PageA.vue'
import PageB from './container/PageB.vue'
Vue.use(VueRouter)
const routes=[
  {
    path:'/',
    component: PageA
  },
  {
    path:'/pageb',
    component: PageB
  }
]
const router = new VueRouter({
  routes
})
export default router
