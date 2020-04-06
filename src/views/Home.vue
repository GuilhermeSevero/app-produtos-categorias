<template>
  <div class="q-pa-lg row justify-center">
    <q-card
      class="my-card bg-secondary text-white"
      style="max-width: 800px;"
    >
      <q-card-section>
        <div class="row">
          <div class="text-h6">
            Sistema de Manutenção dos Produtos
          </div>
          <q-avatar
            class="absolute-right q-ma-md"
            size="100px"
            font-size="52px"
          >
            <img src="../assets/logo.png">
          </q-avatar>
        </div>
      </q-card-section>

      <q-card-section>
        <div class="text-subtitle1">
          Estamos trabalhando em uma página inicial nova, <br>
          Por enquanto, você pode navegar nos cadastros de Categorias e Produtos utilizando o menu esquerdo ou os botões abaixo.
        </div>
      </q-card-section>

      <q-separator dark />

      <q-card-actions>
        <q-btn
          label="Categorias"
          to="/categorias"
          icon="poll"
          flat
        />
        <q-btn
          label="Produtos"
          to="/produtos"
          icon="shopping_basket"
          flat
        />
      </q-card-actions>
    </q-card>
  </div>
</template>
