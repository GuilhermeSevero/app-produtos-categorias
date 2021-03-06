export default [
  {
    path: '/',
    redirect: '/home',
    component: () => import('../layouts/Default'),
    children: [
      {
        id: 'pgHomePage',
        path: '/home',
        name: 'home',
        component: () => import('../views/Home'),
        meta: {
          titulo: 'Sistema de Manutenção de Produtos'
        }
      },

      {
        id: 'pgHomePage',
        path: '/categorias',
        name: 'categorias',
        component: () => import('../views/categorias/CategoriaLista'),
        meta: {
          titulo: 'Lista de Categorias'
        }
      },

      {
        id: 'pgHomePage',
        path: '/categorias/:id',
        name: 'manutencaoCategoria',
        component: () => import('../views/categorias/CategoriaManutencao'),
        meta: {
          titulo: 'Manutenção da Categoria'
        }
      },

      {
        id: 'pgHomePage',
        path: '/produtos',
        name: 'produtos',
        component: () => import('../views/produtos/ProdutoLista'),
        meta: {
          titulo: 'Lista de Produtos'
        }
      },

      {
        id: 'pgHomePage',
        path: '/produtos/:id',
        name: 'manutencaoProdutos',
        component: () => import('../views/produtos/ProdutoManutencao'),
        meta: {
          titulo: 'Manutenção do Produto'
        }
      }
    ]
  },

  {
    path: '*',
    name: 'Página de erro',
    component: () => import('../views/404'),
    meta: {}
  }
]
