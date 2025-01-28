import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Login from '../views/Login.vue'; // Importa la vista de Login

const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/',
    name: 'Login',
    component: Login, // Asocia la ruta /login con la vista Login
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;