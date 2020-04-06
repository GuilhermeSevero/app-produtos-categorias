import Vue from 'vue'
import VueRouter from 'vue-router'
import { Loading } from 'quasar'

Vue.use(VueRouter)

import routes from './routes'

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

router.afterEach((to, from) => {
  Loading.hide()
})

router.beforeEach((to, from, next) => {
  Loading.show()
  next()
})

export default router
