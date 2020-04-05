<template>
  <div class="absolute-top c-menu-usuario">
    <div class="absolute-bottom q-ma-lg bg-transparent text-white">
      <q-avatar
        class="q-mb-sm"
        size="56px"
      >
        <img src="../../assets/boy-avatar.png">
      </q-avatar>
      <div class="text-weight-bold">
        Fulaninho de Tals
      </div>
      <div>@fulaninhdetals</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuHeader'
}
</script>

<style lang="scss" scoped>
.c-menu-usuario {
  background-image: url('../../assets/fundo-menu.png');
  background-repeat: no-repeat;
  background-position-x: 10%;
  background-position-y: 50%;
  width: 100%;
}
</style>
