<template>
    <div>
        
        <v-row class="mt-2 d-flex justify-center">

            <v-col cols="7" class="fondo">
                <v-card
                    class="mx-auto pa-3 pb-1"
                    elevation="8"
                    rounded="lg"
                    
                    >
                                  <v-img
                  class="mx-auto my-1.5"
                   max-width="100"
                   src="https://ieduardosantos.edu.co/wp-content/uploads/2020/02/cropped-Eduardo_santos_logo.png"
               ></v-img>
               <p>
                <r>
               <i>INSTITUCIÓN EDUCATIVA SANTOS ABREIRO </i>
               </r>
               </p>
              </v-card>
            </v-col>
<v-col cols="7" class="fondo">
    <v-card
        class="mx-auto pa-12 pb-8"
        elevation="8"
        rounded="lg"
        >
        
        <v-alert v-if="errorMessage" type="error" class="mb-4">
            {{ errorMessage }}
        </v-alert>

        <v-form @submit.prevent="handleLogin">
            <div class="text-subtitle-1 text-medium-emphasis">Usuario</div>

            <v-text-field
                v-model="username" 
                density="compact"
                placeholder="Nombre de Usuario"
                prepend-inner-icon="mdi-account-outline"
                variant="outlined"
                required
            ></v-text-field>

            <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
                Contraseña
            </div>

            <v-text-field
                v-model="password"
                type="password"
                density="compact"
                placeholder="Ingresa tu contraseña"
                prepend-inner-icon="mdi-lock-outline"
                variant="outlined"
                required
            ></v-text-field>

            <v-btn
                class="mb-8"
                color="blue"
                size="large"
                variant="tonal"
                block
                type="submit" >
                Ingresar
            </v-btn>
        </v-form>

        <v-card-text class="text-center">
            <a
            class="text-blue text-decoration-none"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
            >
            Regístrate ahora <v-icon icon="mdi-chevron-right"></v-icon>
            </a>
        </v-card-text>
    </v-card>
</v-col>
        </v-row>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import authService from '@/services/authservice'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const errorMessage = ref('')
const router = useRouter()


  const login = () =>{

   router.push('dashboard')
   
  }
// En LoginApp.vue
const handleLogin = async () => {
  errorMessage.value = '' 
  const result = await authService.login(username.value, password.value)

  if (result.success) {
    router.push({ name: 'dashboard' }) // Redirige a Dashboard
  } else {
    errorMessage.value = result.message 
}
}
</script>
<style scoped>
   .fondo{
    background-color: rgb(147, 51, 72);
   }

   .fondoimagen{
    background-color: rgb(238, 255, 56);
   }

</style>


