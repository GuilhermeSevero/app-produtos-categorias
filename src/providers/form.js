export default {
  props: {
    service: {
      type: Object,
      required: true
    },

    id: {
      type: [String, Number],
      required: true
    }
  },

  data: () => ({
    data: {},

    editable: {},

    loading: false
  }),

  watch: {
    data: function(newObj) {
      this.editable = JSON.parse(JSON.stringify(newObj))
    }
  },

  methods: {
    async load() {
      this.data = {}
      this.loading = true
      try {
        const { data } = await this.service.getByID(this.id)
        this.data = data.data
      } catch (error) {
        this.$notify.error({
          title: 'Não foi possível buscar os dados!',
          message: 'Por favor, tente recarregar a página!',
          error
        })
      } finally {
        this.loading = false
      }
    },

    reset () {
      this.editable = JSON.parse(JSON.stringify(this.data))
    },

    async insertOrUpdate() {
      this.loading = true
      try {
        if (this.id) {
          await this.service.patch(this.id, this.editable)
        } else {
          await this.service.post(this.editable)
        }
        this.$emit('saved')
      } catch (error) {
        this.$notify.error({
          title: 'Não foi possível Salvar os dados!',
          message: 'Por favor, tente novamente.',
          error
        })
      } finally {
        this.loading = false
      }
    }
  },

  render() {
    const slot = this.$scopedSlots.default({
      loading: this.loading,
      editable: this.editable
    })

    return Array.isArray(slot) ? slot[0] : slot
  }
}
