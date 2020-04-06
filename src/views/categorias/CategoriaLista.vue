<template>
  <api-table
    ref="tbCategorias"
    title="Categorias"
    row-key="id_categoria_produto_planejamento"
    :service="service"
    :columns="columns"
    selection="single"
  />
</template>

<script>
import ApiTable from '../../components/ApiTable'

import categoriaService from '../../services/categoria'

export default {
  name: 'PgListaCategorias',

  components: {
    ApiTable
  },

  data() {
    return {
      columns: [
        {
          name: 'id_categoria_produto_planejamento',
          required: true,
          label: 'Código',
          style: 'width: 10ch',
          field: 'id_categoria_produto_planejamento',
          sortable: true
        },

        {
          name: 'nome_categoria',
          required: true,
          label: 'Descrição',
          align: 'left',
          field: 'nome_categoria',
          sortable: true
        }
      ]
    }
  },

  computed: {
    service() {
      return categoriaService
    }
  },

  mounted() {
    this.$refs.tbCategorias.refresh()
  }
}
</script>

<style lang="scss" scoped>

</style>
