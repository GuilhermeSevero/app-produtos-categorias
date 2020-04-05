<template>
  <div>
    <api-table
      ref="tbProdutos"
      title="Produtos"
      row-key="id_produto"
      :service="service"
      :columns="columns"
      selection="single"
      :selected.sync="selected"
    />
    <div class="q-mt-md">
      Selected: {{ JSON.stringify(selected) }}
    </div>
  </div>
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
      selected: [],

      columns: [
        {
          name: 'id_produto',
          required: true,
          label: 'Código',
          align: 'right',
          field: 'id_produto',
          sortable: true
        },

        {
          name: 'nome_produto',
          required: true,
          label: 'Descrição',
          align: 'left',
          field: 'nome_produto',
          sortable: true
        },

        // {
        //   name: 'categoria',
        //   required: true,
        //   label: 'Categoria',
        //   align: 'left',
        //   field: (row) => row.categoria.nome_categoria,
        //   sortable: true
        // },

        {
          name: 'valor_produto',
          required: true,
          label: 'Valor',
          align: 'right',
          field: 'valor_produto',
          format: (value) => `R$ ${value.toFixed(2)}`
        },

        {
          name: 'data_cadastro',
          required: true,
          label: 'Data Cadastro',
          align: 'center',
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
