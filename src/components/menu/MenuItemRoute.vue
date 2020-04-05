<template>
  <q-item
    clickable
    v-ripple
    :to="to"
  >
    <q-item-section avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      {{ label }}
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: 'MenuItemRoute',

  props: {
    label: {
      type: String,
      required: true
    },

    to: {
      type: String,
      required: true
    },

    icon: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
