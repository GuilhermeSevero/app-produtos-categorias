/* eslint-disable no-console */

import { register } from 'register-service-worker'

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready () {
      console.log(`App está sendo servido do cache por um service worker.
                Para mais detalhes, visite https://goo.gl/AFskqB`
      )
    },
    registered () {
      console.log('Service worker has been registered.')
    },
    cached () {
      console.log('O conteúdo foi armazenado em cache para uso off-line.')
    },
    updatefound () {
      console.log('Baixando nova atualização!')
    },
    updated () {
      console.log('Novo conteúdo está disponível; Por favor atualize.')
      setTimeout(() => {
        window.location.reload(true)
      }, 3000)
    },
    offline () {
      console.log('Nenhuma conexão de internet encontrada. App está sendo executado no modo offline.')
    },
    error (error) {
      console.error('Erro durante o registro do service worker:', error)
    }
  })
}
