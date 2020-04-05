import Services from './services'

class ProdutoService extends Services {
  constructor() {
    super({
      url: '/produtos',
      config: {
        baseURL: process.env.VUE_APP_API_URL
      }
    })
  }
}

export default new ProdutoService()
