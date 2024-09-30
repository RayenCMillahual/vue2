<template>
  <div class="home-container">
    <h1>Welcome, {{ user?.name }}</h1>
    <p>Your email: {{ user?.email }}</p>
  </div>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/store/userStore';
import { computed } from 'vue';

const userStore = useUserStore(); // We import the user store to access user data
const user = computed(() => userStore.user); // We compute the user data for reactive updates
</script>
<style scoped>
.home-container {
  text-align: center; /* Center text */
  padding: 20px; /* Padding around the container */
  margin: 0 auto; /* Center the container */
  max-width: 600px; /* Maximum width */
}

h1 {
  font-size: 2rem; /* Font size for the heading */
}

p {
  font-size: 1rem; /* Font size for the paragraph */
}

/* Responsive design for smaller screens */
@media (max-width: 600px) {
  h1 {
    font-size: 1.5rem; /* Adjust heading size for small screens */
  }
}
</style>