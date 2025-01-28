<template>
  <div class="login-container">
    <h1>Login</h1>
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          v-model="email"
          placeholder="Ingresa tu email"
          required
        />
      </div>
      <div class="form-group">
        <label for="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          v-model="password"
          placeholder="Ingresa tu contraseña"
          required
        />
      </div>
      <button type="submit">Iniciar sesión</button>
    </form>
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
  </div>
</template>

<script>
import axios from 'axios'; // Importa axios

export default {
  name: 'LoginView',
  data() {
    return {
      email: '',
      password: '',
      errorMessage: '', // Para mostrar mensajes de error
    };
  },
  methods: {
    async handleLogin() {
      try {
        // Datos que se enviarán al backend
        const payload = {
          email: this.email,
          password: this.password,
        };

        // Hacer la solicitud POST al endpoint de login
        const response = await axios.post(
          'http://localhost:3000/users/login',
          payload
        );

        // Si el login es exitoso
        if (response.status === 200) {
          console.log('Login exitoso:', response.data);
          this.$router.push('/home'); // Redirige a /home
        }
      } catch (error) {
        // Manejo de errores
        if (error.response) {
          // Si el backend devuelve un error
          this.errorMessage = error.response.data.message || 'Error en el login';
        } else {
          // Si hay un error de conexión
          this.errorMessage = 'No se pudo conectar al servidor';
        }
        console.error('Error en el login:', error);
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #369f6e;
}

.error-message {
  color: red;
  margin-top: 10px;
}
</style>