<template>
  <header>
    <nav>
      <router-link to="/">INICIAR SESION</router-link>
      <router-link to="/home">INICIO</router-link>
    </nav>
  </header>

  <main>
    <router-view />
  </main>
</template>

<script setup lang="ts">
// This component serves as the main structure of the app,
// including the header with navigation and the main content area.
</script>

<style scoped>
header {
  padding: 20px; /* Adds padding around the header */
  background-color: #f8bcd1; /* Light pastel pink for the header background */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
}

nav {
  display: flex; /* Uses flexbox for layout */
  justify-content: space-around; /* Distributes space evenly between links */
  align-items: center; /* Center align items vertically */
}

nav a {
  text-decoration: none; /* Remove underline from links */
  color: #fff; /* White text color for better contrast */
  font-weight: bold; /* Bold font for emphasis */
  padding: 10px 15px; /* Padding around links for better click area */
  border-radius: 5px; /* Rounded corners for links */
  transition: background-color 0.3s; /* Smooth transition for hover effect */
}

nav a:hover {
  background-color: #ff69b4; /* Darker pink on hover for better interaction feedback */
}

main {
  padding: 20px; /* Padding for the main content area */
  background-color: #fff; /* White background for main content */
  border-radius: 8px; /* Rounded corners for the main content area */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  max-width: 800px; /* Limit width for better readability */
  margin: 20px auto; /* Center the main area horizontally */
}

/* Responsive design */
@media (max-width: 600px) {
  nav {
    flex-direction: column; /* Stack links vertically on smaller screens */
  }

  nav a {
    margin: 5px 0; /* Add margin between stacked links */
    text-align: center; /* Center text for better alignment */
    width: 100%; /* Make links full width for better click area */
  }
}
</style>
