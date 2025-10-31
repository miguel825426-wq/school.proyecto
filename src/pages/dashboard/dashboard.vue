<template
>
       <v-toolbar class="text-white " color ="rgb(129, 12, 59)"
     height="100">
         <v-list-item
            prepend-avatar="https://ieduardosantos.edu.co/wp-content/uploads/2020/02/cropped-Eduardo_santos_logo.png"
          ></v-list-item>
  <v-app-bar-title> INSTITUCIÓN EDUCATIVA SANTOS ABREIRO</v-app-bar-title>

    </v-toolbar>
  <v-app id="inspire">

    <<v-navigation-drawer
        expand-on-hover
        permanent
        rail
   color="rgb(14, 75, 112)"  
      >
        <v-list>
          <v-list-item
            prepend-avatar="https://ieduardosantos.edu.co/wp-content/uploads/2020/02/cropped-Eduardo_santos_logo.png"

            title="I.E SANTOS ABREIRO"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list  density="compact" nav>
          <v-list-item prepend-icon="mdi-folder" title="Registro" value="myfiles" to="/dashboard/registro/"></v-list-item>
          <v-list-item prepend-icon="mdi-book" title="Matricula" value="shared" to="/dashboard/matricula/"></v-list-item>
          <v-list-item prepend-icon="mdi-exit-to-app" title="Salir" value="starred" to="/"></v-list-item>

        </v-list>
      </v-navigation-drawer>
    <v-main>
      <v-container
        class="py-8 px-6"
        fluid
      >
           <router-view />

      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
  import { ref } from 'vue'

  const cards = ['Today', 'Yesterday']
  const links = [
    ['mdi-inbox-arrow-down', 'Inbox'],
    ['mdi-send', 'Send'],
    ['mdi-delete', 'Trash'],
    ['mdi-alert-octagon', 'Spam'],
  ]

  const drawer = ref(null)
</script>

<script>
  export default {
    data: () => ({
      cards: ['Today', 'Yesterday'],
      drawer: null,
      links: [
        ['mdi-inbox-arrow-down', 'Inbox'],
        ['mdi-send', 'Send'],
        ['mdi-delete', 'Trash'],
        ['mdi-alert-octagon', 'Spam'],
      ],
    }),
  }
</script>
<style scoped>
.fondo{
   background-color: aqua;
}
</style>
