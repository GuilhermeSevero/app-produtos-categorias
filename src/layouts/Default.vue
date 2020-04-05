<template>
  <q-layout
    view="hHh LpR fFf"
    class="shadow-2 rounded-borders"
    style="height: 100vh"
    container
  >
    <q-header
      class="bg-primary text-white"
      elevated
    >
      <q-toolbar>
        <q-btn
          icon="menu"
          dense
          flat
          round
          @click="drawer = !drawer"
        />

        <q-toolbar-title>
          {{ titulo }}
        </q-toolbar-title>

        <q-avatar>
          <img src="../assets/logo.png">
        </q-avatar>
      </q-toolbar>
    </q-header>

    <menu-left :open="drawer" />

    <q-page-container>
      <router-view class="no-margin" />
    </q-page-container>
  </q-layout>
</template>

<script>

import MenuLeft from '../components/menu/MenuLeft'

export default {
  name: 'LayoutDefault',

  components: {
    MenuLeft
  },

  data () {
    return {
      titulo: this.$route.meta.titulo,
      drawer: false,
      ministate: true
    }
  },

  computed: {
    isMobile() {
      return this.$q.platform.is.mobile
    }
  },

  watch: {
    '$route' (to, from) {
      this.$_alterarTituloLayout(to.meta.titulo, to.meta.urlBack)
    }
  },

  methods: {
    $_alterarTituloLayout(titulo, urlBack = '') {
      this.titulo = titulo
      this.urlBack = urlBack
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
