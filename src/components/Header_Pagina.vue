<template>
  <v-app-bar :elevation="2"    color ="rgb(129, 12, 59)"

  height=90>
  <template v-slot:prepend>
         <v-list-item
            prepend-avatar="https://ieduardosantos.edu.co/wp-content/uploads/2020/02/cropped-Eduardo_santos_logo.png"
            width="100"

          ></v-list-item>
  </template>

  <v-app-bar-title> INSTITUCIÓN EDUCATIVA SANTOS ABREIRO</v-app-bar-title>
  <template v-slot:append>
          <v-btn  @click="dialog = true">Iniciar Sesion</v-btn>
        </template>
</v-app-bar>

 <v-dialog
      v-model="dialog"
      width="600px"
    >
       <LoginApp></LoginApp>
  </v-dialog>  
</template>
<script setup>
  import { ref } from 'vue'
     const dialog = ref(false)
</script>