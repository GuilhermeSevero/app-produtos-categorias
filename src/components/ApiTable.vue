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
        />

        <q-btn
          id="btnEdit"
          color="secondary"
          icon="edit"
          :disable="btnDisable"
        />

        <q-btn
          id="btnDelete"
          color="secondary"
          icon="delete"
          :disable="btnDisable"
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
    btnDisable() {
      return !this.mySelected
    }
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
    async refresh() {
      if (this.service) {
        this.data = []
        this.loading = true
        try {
          const { data } = await this.service.get(this.params)
          this.data = data.data
        } catch (e) {
          console.log(e.response)
          this.$q.notify({
            type: 'negative',
            message: 'Não foi possível buscar os dados!',
            progress: true,
            group: true
          })
        } finally {
          this.loading = false
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
