<template>
  <table-provider
    ref="provider"
    :service="service"
  >
    <template v-slot="{ data, loading }">
      <q-select
        v-model="selected"
        label="Categoria"
        color="primary"
        option-value="id_categoria_produto_planejamento"
        option-label="nome_categoria"
        :options="data"
        :loading="loading"
        filled
        clearable
        emit-value
        map-options
      />
    </template>
  </table-provider>
</template>

<script>
import TableProvider from '../providers/table'

import categoriaService from '../services/categoria'

export default {
  name: 'SelectCategoria',

  components: { TableProvider },

  props: {
    value: {
      type: [String, Number],
      required: true
    }
  },

  data() {
    return {
      selected: null
    }
  },

  computed: {
    service() {
      return categoriaService
    },

    selectOptions() {
      const data = this.$refs.provider.data
      if (data) {
        return data.map(el => ({
          label: el.nome_categoria,
          value: el.id_categoria_produto_planejamento
        }))
      }
      return []
    }
  },

  watch: {
    value: function(newValue) {
      this.selected = newValue
    },

    selected: function(newValue) {
      this.$emit('input', newValue)
    }
  },

  mounted() {
    this.$refs.provider.load()
  },

  methods: {

  }
}
</script>

<style lang="scss" scoped>

</style>
