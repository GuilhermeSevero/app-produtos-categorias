<template>
  <div class="q-pa-md row justify-center">
    <form-provider
      ref="formProvider"
      :service="service"
      :id="idCategoria"
      @saved="$_redirect"
    >
      <template v-slot="{ editable, loading }">
        <submit-form
          @submit="$refs.formProvider.insertOrUpdate()"
          @reset="$refs.formProvider.reset()"
        >
          <q-input
            v-model="editable.id_produto"
            label="Código"
            :loading="loading"
            filled
            lazy-rules
            readonly
          />

          <q-input
            v-model="editable.nome_produto"
            label="Nome"
            :loading="loading"
            :readonly="loading"
            :rules="[ val => val && val.length > 0 || 'Informe o Nome do Produto']"
            maxlength="150"
            filled
            lazy-rules
            autofocus
            clearable
            counter
          />

          <q-input
            v-model="editable.valor_produto"
            label="Valor"
            type="tel"
            mask="#.##"
            fill-mask="0"
            :loading="loading"
            :readonly="loading"
            :rules="[ val => val && val.length > 0 || 'Informe o Valor do Produto']"
            filled
            lazy-rules
            clearable
            reverse-fill-mask
          >
            <template v-slot:prepend>
              <q-icon name="attach_money" />
            </template>
          </q-input>

          <q-input
            v-model="editable.data_cadastro"
            label="Data Cadastro"
            mask="datetime"
            :loading="loading"
            :readonly="true"
            filled
          >
            <template v-slot:prepend>
              <q-icon name="event" />
            </template>
          </q-input>
        </submit-form>
      </template>
    </form-provider>
  </div>
</template>

<script>
import produtoService from '../../services/produto'

import SubmitForm from '../../components/SubmitForm'
import FormProvider from '../../providers/form'

export default {
  name: 'PgManutencaoProduto',

  components: {
    SubmitForm,
    FormProvider
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
      return produtoService
    }
  },

  mounted() {
    if (this.idCategoria) {
      this.$refs.formProvider.load()
    }
  },

  methods: {
    $_redirect() {
      this.$router.push('/produtos')
    }
  }
}
</script>

<style lang="sccs" scoped>

</style>
