<template>
  <div>
    <NavBar />
    <router-view /> <!-- Aquí se renderizan las rutas -->
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  components: {
    NavBar,
  },
};
</script>