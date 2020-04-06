<template>
  <div
    class="q-pa-md row justify-center"
  >
    <q-form
      class="q-gutter-md col"
      style="max-width: 500px"
      @submit="onSubmit"
      @reset="onReset"
    >
      <q-input
        v-model="editable.id_categoria_produto_planejamento"
        label="Código da Categoria"
        :loading="loading"
        filled
        lazy-rules
        readonly
      />

      <q-input
        v-model="editable.nome_categoria"
        label="Nome da Categoria"
        :loading="loading"
        :readonly="loading"
        :rules="[ val => val && val.length > 0 || 'Informe o Nome da Categoria']"
        maxlength="150"
        filled
        lazy-rules
        autofocus
        clearable
        counter
      />

      <q-btn-group>
        <q-btn
          label="Salvar"
          type="submit"
          color="primary"
          icon="save"
        />
        <q-btn
          label="limpar"
          type="reset"
          color="primary"
          icon="clear"
          flat
        />
      </q-btn-group>
    </q-form>
  </div>
</template>

<script>
import categoriaService from '../../services/categoria'

export default {
  name: 'PageManutencaoCategoria',

  data() {
    return {
      loading: false,

      categoria: {
        id_categoria_produto_planejamento: '',
        nome_categoria: ''
      },

      editable: {}
    }
  },

  computed: {
    idCategoria() {
      return Number(this.$route.params.id)
    }
  },

  watch: {
    categoria: function(newObj) {
      this.editable = JSON.parse(JSON.stringify(newObj))
    }
  },

  mounted() {
    if (this.idCategoria){
      this.$_buscarCategoria()
    }
  },

  methods: {
    async $_buscarCategoria() {
      this.loading = true
      try {
        const { data } = await categoriaService.getByID(this.idCategoria)
        this.categoria = data.data
      } catch (error) {
        this.$notify.error({
          title: 'Não foi possível buscar os dados da Categoria',
          message: 'Por favor, tente recarregar a página!',
          error
        })
      } finally {
        this.loading = false
      }
    },

    async onSubmit () {
      this.loading = true
      try {
        if (this.idCategoria) {
          await categoriaService.patch(this.idCategoria, this.editable)
        } else {
          await categoriaService.post(this.editable)
        }
        this.$router.push('/categorias')
      } catch (error) {
        this.$notify.error({
          title: 'Não foi possível Salvar os dados da Categoria',
          message: 'Por favor, tente novamente!',
          error
        })
      } finally {
        this.loading = false
      }
    },

    onReset () {
      this.editable = JSON.parse(JSON.stringify(this.categoria))
    }
  }
}
</script>

<style lang="sccs" scoped>

</style>
