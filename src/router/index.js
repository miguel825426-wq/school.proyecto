import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/index.vue'
import Dashboard from '@/pages/dashboard/dashboard.vue'
import Registro from '@/pages/dashboard/registro.vue'
import Matricula from '@/pages/dashboard/matricula.vue'



// Código CORREGIDO para el array 'routes'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { title: 'Inicio' }
  },
  
  // ¡COMIENZA LA SUSTITUCIÓN AQUÍ!
  {
    path: '/dashboard',
    // Eliminamos el 'name' de la ruta padre
    component: Dashboard, // <--- Tu componente principal (Layout)
    children: [
      // 1. RUTA HIJA POR DEFECTO: Movemos el nombre 'dashboard' aquí y se lo asignamos a 'Registro'.
      { 
        path: '', 
        name: 'dashboard', // <-- Nombre movido a la ruta hija
        component: Registro, // <--- Tu componente por defecto es Registro
        meta: { title: 'Gestión de Usuarios' }
      },
      
      // 2. RUTA HIJA DE REGISTRO: Debe tener un nombre diferente o se puede eliminar si es redundante.
      { 
        path: 'registro', 
        name: 'registro', // Añadimos un nombre
        component: Registro,
        meta: { title: 'Gestión de Usuarios' }
      },
      
      // 3. RUTA HIJA DE MATRICULA
      { 
        path: 'matricula', 
        name: 'matricula', // Añadimos un nombre
        component: Matricula,
        meta: { title: 'Gestión de Matrículas' }
      }
    ]
  },
  // ... si tienes más rutas, irían después de este objeto.
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0, behavior: 'smooth' }
  }
})

// Guard global
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Mi App'
  
  if (to.meta.requiresAuth) {
    const isAuthenticated = false
    if (!isAuthenticated) {
      alert('Debes iniciar sesión')
      next('/')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router