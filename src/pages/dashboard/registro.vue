<template>
<v-card

      >
        <template v-slot:title>
    <h1>Aqui va el registro</h1>
    <p>Contenido relacionado con el registro.</p>
        </template>

        <template v-slot:subtitle>
        </template>

        <template v-slot:text>
    </template>
      </v-card>

  <v-container>
    <v-card color="rgb(49, 9, 49)" class="pa-4">
      
      <v-card-title class="text-h4 white--text">
        Gestión de Usuarios 🧑‍💻
      </v-card-title>
      <v-card-subtitle class="white--text">
        {{ isAdmin ? 'Panel de administrador: Agregar, Modificar y Eliminar' : 'Solo los administradores pueden gestionar usuarios.' }}
      </v-card-subtitle>

      <v-card-text>
        
        <v-card v-if="isAdmin" class="mb-6 pa-4" variant="tonal" color="white">
            <v-card-title class="text-subtitle-1">
                Añadir Nuevo Usuario
            </v-card-title>
            <v-form @submit.prevent="crearNuevoUsuario">
                <v-row>
                    <v-col cols="12" md="6">
                        <v-text-field
                            v-model="nuevoUsuario.username"
                            label="Nombre de Usuario"
                            required
                            variant="solo-filled"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-text-field
                            v-model="nuevoUsuario.nombre"
                            label="Nombre Completo"
                            required
                            variant="solo-filled"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-text-field
                            v-model="nuevoUsuario.password"
                            label="Contraseña"
                            type="password"
                            required
                            variant="solo-filled"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-text-field
                            v-model="nuevoUsuario.email"
                            label="Email"
                            type="email"
                            required
                            variant="solo-filled"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-select
                            v-model="nuevoUsuario.rol"
                            :items="rolesDisponibles"
                            label="Rol"
                            required
                            variant="solo-filled"
                        ></v-select>
                    </v-col>
                    <v-col cols="12" class="d-flex justify-end">
                        <v-btn type="submit" color="primary" class="mr-4">
                            Crear Usuario
                        </v-btn>
                    </v-col>
                </v-row>
            </v-form>
        </v-card>

        <v-divider v-if="isAdmin" class="my-4"></v-divider>
        
        <v-card class="pa-4" variant="tonal" color="white">
            <v-card-title class="text-h6">Usuarios Registrados</v-card-title>
            <v-card-text>
                <v-row>
                    <v-col v-for="user in usuarios" :key="user.id" cols="12" sm="6" md="4" lg="3">
                        <v-card :color="getCardColor(user.rol)" class="text-white pa-3">
                            <v-card-title class="text-subtitle-1">{{ user.nombre }}</v-card-title>
                            <v-card-subtitle class="font-weight-bold">{{ user.rol.toUpperCase() }}</v-card-subtitle>
                            <v-card-text>
                                <div>**Usuario:** {{ user.username }}</div>
                                <div>**Email:** {{ user.email }}</div>
                            </v-card-text>
                            
                            <v-card-actions v-if="isAdmin">
                                <v-btn 
                                    size="small" 
                                    variant="outlined" 
                                    color="white"
                                    @click="abrirDialogoEdicion(user)"
                                >
                                    Modificar
                                </v-btn>
                                <v-btn 
                                    size="small" 
                                    variant="outlined" 
                                    color="error" 
                                    @click="eliminarUsuario(user.id)"
                                >
                                    Eliminar
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
      
      </v-card-text>
    </v-card>

    <v-dialog v-model="dialogoEdicion" max-width="500px">
        <v-card>
            <v-card-title class="text-h5">Modificar Usuario</v-card-title>
            <v-card-text>
                <v-text-field
                    v-model="usuarioAEditar.nombre"
                    label="Nombre Completo"
                    required
                ></v-text-field>
                <v-text-field
                    v-model="usuarioAEditar.username"
                    label="Nombre de Usuario"
                    required
                ></v-text-field>
                <v-text-field
                    v-model="usuarioAEditar.email"
                    label="Email"
                    type="email"
                    required
                ></v-text-field>
                <v-select
                    v-model="usuarioAEditar.rol"
                    :items="rolesDisponibles"
                    label="Rol"
                    required
                ></v-select>
                </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" variant="text" @click="dialogoEdicion = false">Cancelar</v-btn>
                <v-btn color="blue darken-1" variant="flat" @click="guardarCambios">Guardar</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>

  </v-container>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
// En registro.vue

import authService from '../../services/authservice'
import usuarioService from '../../services/usuarioservice'

// --- ESTADOS ---
const usuarios = ref([])
const rolesDisponibles = ['administrador', 'secretario', 'docente', 'estudiante']
const dialogoEdicion = ref(false)
const usuarioAEditar = ref({})

const nuevoUsuario = ref({
    username: '',
    password: '',
    email: '',
    nombre: '',
    rol: 'estudiante', // Rol por defecto
    // Nota: El id se asignará automáticamente por JSON Server
})

// --- COMPUTADAS ---
const isAdmin = computed(() => {
    return authService.isAdmin()
})

// --- MÉTODOS DE DATOS (CRUD) ---

// Carga inicial de usuarios
const cargarUsuarios = async () => {
    usuarios.value = await usuarioService.obtenerUsuarios()
}

// CREAR
const crearNuevoUsuario = async () => {
    if (!isAdmin.value) return // Doble verificación de seguridad

    // Para JSON Server, aseguramos que el ID no sea enviado en el POST (lo crea solo)
    const { id, ...datosUsuario } = nuevoUsuario.value

    try {
        await usuarioService.crearUsuario(datosUsuario)
        alert('Usuario creado con éxito.')
        // Recargar la lista y limpiar el formulario
        await cargarUsuarios()
        nuevoUsuario.value = {
            username: '',
            password: '',
            email: '',
            nombre: '',
            rol: 'estudiante',
        }
    } catch (error) {
        alert('Error al crear usuario.')
        console.error(error)
    }
}

// LEER/MODIFICAR (Abrir Diálogo)
const abrirDialogoEdicion = (user) => {
    if (!isAdmin.value) return
    // Creamos una copia del usuario para evitar modificar el estado directamente
    usuarioAEditar.value = { ...user } 
    dialogoEdicion.value = true
}

// MODIFICAR (Guardar Cambios)
const guardarCambios = async () => {
    if (!isAdmin.value) return

    try {
        const { id, ...datosParaActualizar } = usuarioAEditar.value // Extraemos el ID
        await usuarioService.modificarUsuario(id, datosParaActualizar)
        alert('Usuario modificado con éxito.')
        dialogoEdicion.value = false
        await cargarUsuarios() // Recargar la lista
    } catch (error) {
        alert('Error al modificar usuario.')
        console.error(error)
    }
}

// ELIMINAR
const eliminarUsuario = async (id) => {
    if (!isAdmin.value) return

    if (confirm('¿Está seguro de que desea eliminar a este usuario?')) {
        try {
            await usuarioService.eliminarUsuario(id)
            alert('Usuario eliminado con éxito.')
            await cargarUsuarios() // Recargar la lista
        } catch (error) {
            alert('Error al eliminar usuario.')
            console.error(error)
        }
    }
}

// --- MÉTODOS DE UTILIDAD ---
const getCardColor = (rol) => {
    switch (rol) {
        case 'administrador':
            return 'red-darken-3' // Color distintivo para el admin
        case 'secretario':
            return 'blue-darken-3'
        case 'docente':
            return 'green-darken-3'
        case 'estudiante':
            return 'teal-darken-3'
        default:
            return 'grey'
    }
}

// --- HOOKS DE VUE ---
onMounted(() => {
    // Solo cargamos usuarios si el usuario está autenticado. 
    // La visibilidad de los botones se maneja con `v-if="isAdmin"`.
    if (authService.isAuthenticated()) {
        cargarUsuarios()
    }
})
</script>

<style scoped>
/* Estilo para que el texto de las tarjetas se vea bien sobre el color oscuro */
.text-white {
    color: white !important;
}
</style>
