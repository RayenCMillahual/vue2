<template>
  <div class="form-container">
    <h2>Iniciar Sesión</h2>
    <form @submit.prevent="onSubmit">
      <input v-model="user.username" type="text" placeholder="Nombre de usuario" required />
      <input v-model="user.password" type="password" placeholder="Contraseña" required />
      <input v-model="user.name" type="text" placeholder="Nombre" required /> <!-- Campo adicional -->
      <input v-model="user.email" type="email" placeholder="Email" required /> <!-- Campo adicional -->
      <button type="submit">INICIAR SESION</button>
      <p v-if="error" class="error-message">{{ error }}</p>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '../store/userStore';
import type { User } from '@/interfaces/User';

const user = ref<User>({ username: '', password: '', name: '', email: '' });
const router = useRouter();
const userStore = useUserStore();
const error = ref<string | null>(null);

const onSubmit = () => {
  if (user.value.username && user.value.password) {
    userStore.setUser(user.value);
    router.push('/home');
  } else {
    error.value = 'Porfaa profe complete todos los campos.';
  }
};
</script>
<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  align-items: center; /* Center elements horizontally */
  width: 90%;
  max-width: 450px; /* Slightly increased maximum width */
  margin: 2rem auto; /* Center and add margin for spacing */
  padding: 20px;
  border: 1px solid #e0a3c4;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h2 {
  margin-bottom: 20px; /* Space below the title */
  color: #e05780; /* Title color */
}

input {
  width: 100%; /* Full width inputs */
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #e0a3c4;
  border-radius: 4px;
  font-size: 16px;
  transition: border-color 0.3s; /* Smooth transition for border */
}

input:focus {
  border-color: #ff6f92; /* Change border color on focus */
  outline: none; /* Remove default outline */
}

button {
  padding: 12px;
  background-color: #ff6f92;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s, transform 0.2s; /* Added transform transition */
}

button:hover {
  background-color: #e05780;
  transform: translateY(-2px); /* Slight lift effect on hover */
}

.error-message {
  color: #ff4d4d;
  margin-top: 10px;
}

/* Responsive design */
@media (max-width: 600px) {
  h2 {
    font-size: 1.5rem; /* Adjust title size for small screens */
  }

  input {
    font-size: 14px; /* Smaller font size for inputs on small screens */
  }

  button {
    font-size: 14px; /* Smaller button font size */
  }
}
</style>
