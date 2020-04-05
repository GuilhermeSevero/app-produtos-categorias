import Services from './services'

class CategoriaService extends Services {
  constructor() {
    super({
      url: '/categorias',
      config: {
        baseURL: process.env.VUE_APP_API_URL
      }
    })
  }
}

export default new CategoriaService()
