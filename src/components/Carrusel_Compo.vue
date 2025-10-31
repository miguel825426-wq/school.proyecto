<template>
  <v-carousel
    height="400"
    show-arrows="hover"
    cycle
    hide-delimiter-background
  >
    <v-carousel-item
      v-for="(slide) in slides" :key="i"
       :src="slide"
        cover
    >
    
    </v-carousel-item>
  </v-carousel>
</template>

<script setup>
  const colors = [
    'indigo',
    'warning',
    'pink darken-2',
    'red lighten-1',
    'deep-purple accent-4',
  ]
  const slides = [
    'https://static-uat.cambiocolombia.com/s3fs-public/2023-12/proyecto_nuevo_7_0.jpg',
    'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2016/02/19/14558971344102.jpg',
    'https://www.telemadrid.es/2021/07/19/noticias/madrid/Torrejon-Ardoz-Gobierno-Comunidad-colegios_2360773969_29455563_1300x731.jpg',
  ]
</script>