import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importa el router
import './style.css'
import './auth'; 
createApp(App).use(router).mount('#app');