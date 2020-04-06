<template>
  <div class="q-pa-md row justify-center">
    <manutencao-provider
      ref="manutencaoProvider"
      :service="service"
      :id="idCategoria"
      @saved="$_redirect"
    >
      <template v-slot="{ editable, loading }">
        <submit-form
          @submit="$refs.manutencaoProvider.insertOrUpdate()"
          @reset="$refs.manutencaoProvider.reset()"
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
    </manutencao-provider>
  </div>
</template>

<script>
import categoriaService from '../../services/categoria'

import SubmitForm from '../../components/SubmitForm'
import ManutencaoProvider from '../../providers/manutencao'

export default {
  name: 'PgManutencaoCategoria',

  components: {
    SubmitForm,
    ManutencaoProvider
  },

  data() {
    return {
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
      this.$refs.manutencaoProvider.load()
    }
  },

  methods: {
    $_redirect() {
      this.$router.push('/categorias')
    }
  }
}
</script>

<style lang="sccs" scoped>

</style>
