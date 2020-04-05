<template>
  <div>
    <q-table
      :title="title"
      :data="data"
      :columns="columns"
      :row-key="rowKey"
      :loading="loading"
      :selection="selection"
      binary-state-sort
      :selected.sync="mySelected"
    />
    <div class="q-mt-md">
      Selected: {{ JSON.stringify(mySelected) }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ApiTable',

  props: {
    service: {
      type: Object,
      required: true
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
          const { data } = await this.service.get()
          this.data = data.data
        } catch (e) {
          this.$q.notify({
            type: 'negative',
            message: 'Não foi possível buscar os dados!',
            progress: true,
            group: true
          })
          console.log(e.response)
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
