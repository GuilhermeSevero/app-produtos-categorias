
class ClassAlertas {
  error({ title = 'Erro!', message = 'Ocorreu um erro!', apiError = {}, duration = 0 }){
    this.$exibeErroConsole(apiError)
    this.$mostraAlerta('negative', title, message, duration)
  }

  warning({ title = 'Atenção!', message = 'Ocorreu um alerta!', duration = 0 }){
    this.$mostraAlerta('warning', title, message, duration)
  }

  success({ title = 'Sucesso!', message = 'Ocorreu um sucesso!', duration = 0 }){
    this.$mostraAlerta('positive', title, message, duration)
  }

  $exibeErroConsole(error){
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data)
      console.log(error.response.status)
      console.log(error.response.headers)
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request)
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Erro:', error.message)
    }
    console.log(error.config)
  }

  $mostraAlerta(type, title, message, duration){
    this.$q.notify({
      progress: true,
      type: type,
      message: ` <div>
                            <b>${title}</b>
                        </div>
                        <hr color="white">
                        <div>${message}</div>`,
      textColor: 'white',
      multiLine: true,
      position: 'top-right',
      html: true,
      timeout: duration,
      actions: duration <= 0 ? [{ icon: 'close', color: 'white' }] : []
    })
  }
}
const alerta = new ClassAlertas()

const Alerta = {
  install: (Vue, options) => {
    Object.defineProperties(Vue.prototype, {
      $notify: {
        get() {
          return alerta
        }
      }
    })
  }
}

export { alerta, Alerta }
