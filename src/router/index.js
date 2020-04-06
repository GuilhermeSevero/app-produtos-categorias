import Vue from 'vue'
import VueRouter from 'vue-router'
import { Loading } from 'quasar'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: () => import('../layouts/Default'),
    children: [
      {
        id: 'pgHomePage',
        path: '/home',
        component: () => import('../views/Home'),
        meta: {
          titulo: 'Sistema de Manutenção de Produtos',
          noBack: true
        }
      },

      {
        id: 'pgHomePage',
        path: '/categorias',
        component: () => import('../views/categorias/CategoriaLista'),
        meta: {
          titulo: 'Lista de Categorias',
          noBack: false
        }
      },

      {
        id: 'pgHomePage',
        path: '/produtos',
        component: () => import('../views/produtos/ProdutoLista'),
        meta: {
          titulo: 'Lista de Produtos',
          noBack: false
        }
      }
    ]
  },

  {
    path: '*',
    name: 'Página de erro',
    component: () => import('../views/404'),
    hidden: true,
    meta: {}
  }
]

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
