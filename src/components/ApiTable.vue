<template>
  <q-table
    :title="title"
    :data="data"
    :columns="columns"
    :row-key="rowKey"
    :loading="loading"
    :selection="selection"
    binary-state-sort
    :selected.sync="mySelected"
    wrap-cells
  >
    <template v-slot:top>
      <p class="q-table__title">
        {{ title }}
      </p>

      <q-space />

      <q-btn-group>
        <q-btn
          id="btnAdd"
          color="secondary"
          icon="add"
          @click="$_onAddClick"
        />

        <q-btn
          id="btnEdit"
          color="secondary"
          icon="edit"
          @click="$_onEditClick"
        />

        <q-btn
          id="btnDelete"
          color="secondary"
          icon="delete"
          @click="onDeleteClick"
        />

        <q-btn
          id="btnRefresh"
          color="secondary"
          icon="refresh"
          @click="refresh"
        />
      </q-btn-group>
    </template>
  </q-table>
</template>

<script>
export default {
  name: 'ApiTable',

  props: {
    service: {
      type: Object,
      required: true
    },

    params: {
      type: Object,
      default: () => ({})
    },

    columns: {
      type: Array,
      required: true
    },

    title: {
      type: String,
      default: ''
    },

    rowKey: {
      type: String,
      default: 'id'
    },

    selection: {
      type: String,
      default: 'none'
    },

    selected: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      data: [],
      loading: false,
      mySelected: []
    }
  },

  computed: {
  },

  watch: {
    mySelected: function(newValue, oldValue) {
      this.$emit('update:selected', newValue)
    },

    selected: function(newValue, oldValue) {
      this.mySelected = newValue
    }
  },

  methods: {
    refresh() {
      if (this.service) {
        this.$_buscarDados()
      }
    },

    async $_buscarDados() {
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

    $_onAddClick() {
      this.$emit('add')
    },

    $_onEditClick() {
      if (this.$_validaSelecao()) {
        this.$emit('edit', this.mySelected[0])
      }
    },

    async $_doDelete(id) {
      this.loading = true
      try {
        await this.service.delete(id)

        this.$set(this, 'data', this.data.filter(el => el[this.rowKey] !== id))

        this.$notify.success({
          message: 'Registro apagado com sucesso!',
          duration: 5000
        })
      } catch (error) {
        this.$notify.error({
          title: 'Atenção!',
          message: 'Não foi possível excluir o registro!',
          error
        })
      } finally {
        this.loading = false
      }
    },

    onDeleteClick() {
      if (this.$_validaSelecao()) {
        this.$q.dialog({
          title: 'Confirmar',
          message: 'Você gostaria de Excluir o registro selecionado?',
          cancel: true,
          persistent: true
        }).onOk(() => {
          this.$_doDelete(this.mySelected[0][this.rowKey])
        })
      }
    },

    $_validaSelecao() {
      if (this.mySelected.length === 1) {
        return true
      }
      this.$notify.warning({
        title: 'Validação!',
        message: 'Necessário selecionar um registro!',
        duration: 5000
      })
      return false
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
