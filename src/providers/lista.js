export default {
  props: {
    service: {
      type: Object,
      required: true
    },

    params: {
      type: Object,
      default: () => ({})
    }
  },

  data: () => ({
    data: [],
    loading: false
  }),

  methods: {
    async load() {
      this.data = []
      this.loading = true
      try {
        const { data } = await this.service.get(this.params)
        this.data = data.data
      } catch (error) {
        this.$notify.error({
          title: 'Atenção!',
          message: 'Não foi possível buscar os dados!',
          error
        })
      } finally {
        this.loading = false
      }
    },

    async delete(id) {
      this.$q.loading.show()
      try {
        await this.service.delete(id)

        this.$notify.success({
          message: 'Registro apagado com sucesso!',
          duration: 3000
        })
      } catch (error) {
        this.$notify.error({
          title: 'Atenção!',
          message: 'Não foi possível excluir o registro!',
          error
        })
      } finally {
        this.$q.loading.hide()
        this.load()
      }
    }
  },

  render() {
    const slot = this.$scopedSlots.default({
      loading: this.loading,
      data: this.data
    })

    return Array.isArray(slot) ? slot[0] : slot
  }
}
