<template>
  <q-list pading>
    <menu-item-route
      label="Home"
      to="home"
      icon="person_pin"
    />

    <menu-item-route
      label="Categorias"
      to="categorias"
      icon="person_pin"
    />

    <menu-item-route
      label="Produtos"
      to="produtos"
      icon="person_pin"
    />
  </q-list>
</template>

<script>
import MenuItemRoute from './MenuItemRoute'

export default {
  name: 'MenuListRoutes',

  components: {
    MenuItemRoute
  }
}
</script>

<style lang="scss" scoped>

</style>
