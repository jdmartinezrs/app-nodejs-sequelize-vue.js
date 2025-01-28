// src/auth.js
import axios from 'axios';
import router from './router';

// Configurar el interceptor de Axios
axios.interceptors.response.use(
  (response) => {
    // Si la respuesta es exitosa y contiene un token, redirigir a /home
    if (response.data?.token) {
      localStorage.setItem('token', response.data.token);
      router.push('/home');
    }
    return response;
  },
  (error) => {
    if (error.response && (error.response.status === 401 || error.response.status === 403)) {
      localStorage.removeItem('token');
      router.push('/');
    }
    return Promise.reject(error);
  }
);

export default axios;