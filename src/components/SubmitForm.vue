<template>
  <q-form
    class="q-gutter-md col"
    style="max-width: 500px"
    @submit="$emit('submit')"
    @reset="$emit('reset')"
  >
    <slot />

    <q-btn-group>
      <q-btn
        label="Salvar"
        type="submit"
        color="primary"
        icon="save"
      />
      <q-btn
        label="limpar"
        type="reset"
        color="primary"
        icon="clear"
        flat
      />
    </q-btn-group>
  </q-form>
</template>

<script>
export default {
  name: 'Form',

  methods: {
  }
}
</script>
