<template>
  <q-list pading>
    <menu-item-route
      label="Home"
      to="/home"
      icon="storefront"
    />

    <menu-item-route
      label="Categorias"
      to="/categorias"
      icon="poll"
    />

    <menu-item-route
      label="Produtos"
      to="/produtos"
      icon="shopping_basket"
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
