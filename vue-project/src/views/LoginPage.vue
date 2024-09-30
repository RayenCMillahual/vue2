<template>
  <div>
    <LoginForm />
    <router-link to="/register">Don't have an account? Register here</router-link>
  </div>
</template>

<script setup lang="ts">
import LoginForm from '../components/LoginForm.vue'; // Asegúrate de que el nombre sea correcto
</script>

<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
