import axios from 'axios'

const API_URL = 'http://localhost:4000' // CONFIRMA que JSON Server esté en este puerto (4000)

export default {
  // Login: busca usuario y guarda en localStorage
  async login(username, password) {
    try { // <-- INICIA EL MANEJO DE ERRORES DE RED
      const response = await axios.get(`${API_URL}/users`)
      const user = response.data.find(
        u => u.username === username && u.password === password
      )
      
      if (user) {
        // Éxito: El usuario existe y las credenciales son correctas.
        const userSession = {
          id: user.id,
          username: user.username,
          email: user.email,
          nombre: user.nombre,
          rol: user.rol // <-- ¡Añadido el ROL!
        }
        localStorage.setItem('user', JSON.stringify(userSession))
        return { success: true, user: userSession }
      }
      
      // Fallo de credenciales
      return { success: false, message: 'Usuario o contraseña incorrectos' }

    } catch (error) {
      // Fallo de conexión: Captura el error de red
      console.error('Error de conexión al servidor:', error)
      return { success: false, message: 'Fallo la conexión. Asegúrate de que JSON Server esté activo en el puerto 4000.' }
    } // <-- FINALIZA EL MANEJO DE ERRORES DE RED
  },
  
  // Logout: limpia localStorage
  logout() {
    localStorage.removeItem('user')
  },
  
  // Verifica si hay sesión activa
  isAuthenticated() {
    return !!localStorage.getItem('user')
  },
  
  // Obtiene usuario actual
  getCurrentUser() {
    const user = localStorage.getItem('user')
    return user ? JSON.parse(user) : null
  },

  // Función para la restricción de Admin (necesaria para registro.vue)
// ... código anterior ...

// Función para la restricción de Admin (necesaria para registro.vue)
isAdmin() {
    const user = this.getCurrentUser()
    // ¡CORRECCIÓN! El rol en db.json es 'admin', no 'admin'
    return user && user.rol === 'admin'
}
}