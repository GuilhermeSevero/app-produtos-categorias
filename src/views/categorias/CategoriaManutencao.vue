<template>
  <div class="q-pa-md row justify-center">
    <form-provider
      ref="formProvider"
      :service="service"
      :id="idCategoria"
    >
      <template v-slot="{ editable, loading }">
        <submit-form
          @submit="$refs.formProvider.insertOrUpdate()"
          @reset="$refs.formProvider.reset()"
        >
          <q-input
            v-model="editable.id_categoria_produto_planejamento"
            label="Código"
            :loading="loading"
            filled
            lazy-rules
            readonly
          />

          <q-input
            v-model="editable.nome_categoria"
            label="Nome"
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
        </submit-form>
      </template>
    </form-provider>
  </div>
</template>

<script>
import categoriaService from '../../services/categoria'

import SubmitForm from '../../components/SubmitForm'
import FormProvider from '../../providers/form'

export default {
  name: 'PgManutencaoCategoria',

  components: {
    SubmitForm,
    FormProvider
  },

  data() {
    return {
      categoria: {
        id_categoria_produto_planejamento: '',
        nome_categoria: ''
      }
    }
  },

  computed: {
    idCategoria() {
      return Number(this.$route.params.id)
    },

    service() {
      return categoriaService
    }
  },

  mounted() {
    if (this.idCategoria) {
      this.$refs.formProvider.load()
    }
  },

  methods: {
  }
}
</script>

<style lang="sccs" scoped>

</style>
