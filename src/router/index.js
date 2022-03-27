import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Categoria from '../components/Categoria.vue'
import Articulo from '../components/Articulo.vue'
import Rol from '../components/Rol.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/',name: 'home',component: HomeView},
  {path: '/categorias',name: 'categorias',component: Categoria},
  {path: '/articulos',name: 'articulos',component: Articulo},
  {path: '/roles',name: 'roles',component: Rol},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
