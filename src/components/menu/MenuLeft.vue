<template>
  <q-drawer
    v-model="open"
    content-class="bg-grey-3"
    show-if-above
    elevated
  >
    <menu-header style="height: 150px" />

    <q-scroll-area
      style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd"
    >
      <menu-list-routes />
    </q-scroll-area>
  </q-drawer>
</template>

<script>
import MenuHeader from './MenuHeader'
import MenuListRoutes from './MenuListRoutes'

export default {
  name: 'MenuLeft',

  components: {
    MenuHeader,
    MenuListRoutes
  },

  props: {
    open: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style lang="scss">
.q-router-link--active {
    background-color: #b5c2ff;
    color: #027BE3;
}
</style>
