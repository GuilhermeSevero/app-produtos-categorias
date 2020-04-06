<template>
  <api-table
    ref="tbProdutos"
    title="Produtos"
    row-key="id_produto"
    :service="service"
    :params="filtros"
    :columns="columns"
    selection="single"
  />
</template>

<script>
import { date } from 'quasar'

import ApiTable from '../../components/ApiTable'

import produtoService from '../../services/produto'

export default {
  name: 'PgListaProdutos',

  components: {
    ApiTable
  },

  data() {
    return {
      filtros: { expand: true },

      columns: [
        {
          name: 'id_produto',
          required: true,
          label: 'Código',
          field: 'id_produto',
          sortable: true
        },

        {
          name: 'nome_produto',
          required: true,
          label: 'Descrição',
          field: 'nome_produto',
          sortable: true
        },

        {
          name: 'categoria',
          required: true,
          label: 'Categoria',
          field: 'categoria',
          format: (value) => value.nome_categoria,
          sortable: true
        },

        {
          name: 'valor_produto',
          required: true,
          label: 'Valor',
          field: 'valor_produto',
          format: (value) => `R$ ${value.toFixed(2)}`
        },

        {
          name: 'data_cadastro',
          required: true,
          label: 'Data Cadastro',
          field: 'data_cadastro',
          format: (value) => date.formatDate(value, 'DD-MM-YYYY HH:mm:ss'),
          sortable: true
        }
      ]
    }
  },

  computed: {
    service() {
      return produtoService
    }
  },

  mounted() {
    this.$refs.tbProdutos.refresh()
  },

  methods: {
  }
}
</script>
