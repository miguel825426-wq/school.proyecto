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
                    <div class="text-subtitle-1 text-medium-emphasis">Account</div>

                    <v-text-field
                        density="compact"
                        placeholder="Email address"
                        prepend-inner-icon="mdi-email-outline"
                        variant="outlined"
                    ></v-text-field>

                    <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
                        Password

                        <a
                        class="text-caption text-decoration-none text-blue"
                        href="#"
                        rel="noopener noreferrer"
                        target="_blank"
                        >
                        Forgot login password?</a>
                    </div>

                    <v-text-field
                        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                        :type="visible ? 'text' : 'password'"
                        density="compact"
                        placeholder="Enter your password"
                        prepend-inner-icon="mdi-lock-outline"
                        variant="outlined"
                        @click:append-inner="visible = !visible"
                    ></v-text-field>



                    <v-btn
                        class="mb-8"
                        color="blue"
                        size="large"
                        variant="tonal"
                        block
                        @click="login()"
                    >
                        Log In
                    </v-btn>

                    <v-card-text class="text-center">
                        <a
                        class="text-blue text-decoration-none"
                        href="#"
                        rel="noopener noreferrer"
                        target="_blank"
                        >
                        Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
                        </a>
                    </v-card-text>
                    </v-card>

            </v-col>
        </v-row>
    </div>
</template>
<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

  const login = () =>{
    
   router.push('dashboard')
   
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
