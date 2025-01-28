<template>
  <div class="p-4">
    <nav class="flex justify-around bg-gray-200 p-4 rounded-lg mb-6">
      <button @click="fetchData('users')" class="btn">Users</button>
      <button @click="fetchData('teams')" class="btn">Teams</button>
      <button @click="fetchData('projects')" class="btn">Projects</button>
    </nav>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="(item, index) in data" :key="index" class="card p-4 shadow-md hover:shadow-lg transition">
        <div class="card-content">
          <pre class="text-sm text-gray-800">{{ JSON.stringify(item, null, 2) }}</pre>
          <button @click="handleSave(item)" class="btn mt-2">Save Info</button>
        </div>
      </div>
    </div>

    <div v-if="selectedInfo" class="mt-6 p-4 bg-gray-100 rounded-lg shadow-lg">
      <h2 class="text-lg font-semibold mb-2">Selected Info:</h2>
      <pre class="text-sm text-gray-800">{{ JSON.stringify(selectedInfo, null, 2) }}</pre>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    const data = ref([]);
    const selectedInfo = ref(null);
    const baseURL = 'http://localhost:3000';

    // Verificar autenticación al montar el componente
    onMounted(async () => {
      await checkAuth();
    });

    const checkAuth = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/');
        return false;
      }
      
      try {
        // Hacer una petición a cualquier endpoint protegido para verificar el token
        await axios.get(`${baseURL}/users/info`, getAuthHeaders());
        return true;
      } catch (error) {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
          localStorage.removeItem('token');
          router.push('/');
        }
        return false;
      }
    };

    const getAuthHeaders = () => {
      const token = localStorage.getItem('token');
      return {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
    };

    const fetchData = async (endpoint) => {
      try {
        const isAuthenticated = await checkAuth();
        if (!isAuthenticated) return;

        const response = await axios.get(
          `${baseURL}/${endpoint}/info`,
          getAuthHeaders()
        );
        data.value = response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
          localStorage.removeItem('token');
          router.push('/');
        }
      }
    };

    const handleSave = (info) => {
      selectedInfo.value = info;
      console.log('Selected Info:', info);
    };

    return {
      data,
      selectedInfo,
      fetchData,
      handleSave,
    };
  },
};
</script>

<style scoped>
.btn {
  background-color: #4f46e5;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #4338ca;
}

.card {
  background-color: white;
  border-radius: 0.375rem;
}

.card-content {
  display: flex;
  flex-direction: column;
  align-items: start;
}
</style>