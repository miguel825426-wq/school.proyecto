// 📄 usuarioservice.js (Código CORREGIDO)
import axios from 'axios'

const API_URL = 'http://localhost:4000'

export default {
  
  // 1. OBTENER TODOS LOS USUARIOS (Necesario para cargarUsuarios en registro.vue)
  async obtenerUsuarios() {
    try {
      const response = await axios.get(`${API_URL}/users`)
      return response.data
    } catch (error) {
      console.error('Error al obtener usuarios:', error)
      throw error // Relanza el error para que registro.vue lo capture
    }
  },

  // 2. CREAR UN NUEVO USUARIO (Función que faltaba y causaba el error)
  async crearUsuario(datosUsuario) {
    // JSON Server usará POST a /users para crear
    const response = await axios.post(`${API_URL}/users`, datosUsuario)
    return response.data
  },

  // 3. MODIFICAR UN USUARIO
  async modificarUsuario(id, datosParaActualizar) {
    // JSON Server usará PUT o PATCH a /users/:id para actualizar
    const response = await axios.put(`${API_URL}/users/${id}`, datosParaActualizar)
    return response.data
  },

  // 4. ELIMINAR UN USUARIO
  async eliminarUsuario(id) {
    // JSON Server usará DELETE a /users/:id para eliminar
    const response = await axios.delete(`${API_URL}/users/${id}`)
    return response.data
  },

  // ... (Tu función login, si la quieres mantener aquí, o isAdmin, etc.)
  
  // Función para la restricción de Admin
  isAdmin() {
    // Debes obtener el usuario actual desde localStorage para esto
    const user = this.getCurrentUser() 
    return user && user.rol === 'administrador' // Asegúrate de que el rol coincida con tu db.json
  },

  // Función auxiliar para obtener usuario
  getCurrentUser() {
    const user = localStorage.getItem('user')
    return user ? JSON.parse(user) : null
  }
}