<template>
  <provider
    ref="listaProvider"
    :service="service"
    :params="params"
  >
    <template v-slot="{ data, loading }">
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
  </provider>
</template>

<script>
import provider from '../providers/lista'

export default {
  name: 'ApiTable',

  components: { provider },

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
        this.$refs.listaProvider.load()
      }
    },

    $_onAddClick() {
      this.$emit('addClick')
    },

    $_onEditClick() {
      if (this.$_validaSelecao()) {
        this.$emit('editClick', this.mySelected[0])
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
          this.$refs.listaProvider.delete(this.mySelected[0][this.rowKey])
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
        duration: 3000
      })
      return false
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
