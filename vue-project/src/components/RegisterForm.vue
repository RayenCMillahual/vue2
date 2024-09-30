<template>
    <form @submit.prevent="handleRegister">
        <h2>Registrate</h2>
        <input v-model="user.username" type="text" placeholder="Nombre de Usuario" required />
        <input v-model="user.name" type="text" placeholder="Nombre" required />
        <input v-model="user.email" type="email" placeholder="Email" required />
        <input v-model="user.password" type="password" placeholder="Contraseña" required />
        <button type="submit">Registrate</button>
    </form>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useUserStore } from '@/store/userStore';
import type { User } from '@/interfaces/User';

const userStore = useUserStore();

const user = ref<User>({
    username: '',
    name: '',
    email: '',
    password: '',
});

const handleRegister = () => {
    userStore.setUser(user.value);
    alert('User registered: ' + JSON.stringify(user.value));
};
</script>

<style scoped>
    /* Form container for centering and adding margins */
    form {
        display: flex;
        flex-direction: column;
        align-items: center; /* Center items horizontally */
        margin: 2rem auto; /* Add margin at the top and bottom */
        padding: 2rem; /* Add padding inside the form */
        border-radius: 8px; /* Rounded corners */
        background-color: #fff0f6; /* Light pink background */
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
        max-width: 90%; /* Change max-width to 90% for better responsiveness */
        width: 400px; /* Fixed width to maintain structure */
    }

    h2 {
        color: #d5006d; /* Darker pink for the title */
        margin-bottom: 1rem; /* Space below the title */
        font-family: 'Arial', sans-serif; /* Change to a cleaner font */
        text-align: center; /* Center the title text */
    }

    input {
        width: 100%; /* Full width inputs */
        padding: 0.8rem; /* Padding inside inputs */
        margin: 0.5rem 0; /* Space between inputs */
        border: 1px solid #d5006d; /* Dark pink border */
        border-radius: 4px; /* Rounded corners */
        transition: border-color 0.3s; /* Smooth transition for border color */
    }

    input:focus {
        border-color: #ff69b4; /* Lighter pink on focus */
        outline: none; /* Remove default outline */
    }

    button {
        background-color: #d5006d; /* Dark pink button */
        color: white; /* White text */
        padding: 0.8rem 1.5rem; /* Button padding */
        border: none; /* Remove border */
        border-radius: 4px; /* Rounded corners */
        cursor: pointer; /* Change cursor on hover */
        transition: background-color 0.3s; /* Smooth transition for background color */
        margin-top: 1rem; /* Space above the button */
        width: 100%; /* Make button full width */
    }

    button:hover {
        background-color: #ff69b4; /* Lighter pink on hover */
    }

    /* Responsive adjustments for smaller screens */
    @media (max-width: 600px) {
        form {
            padding: 1.5rem; /* Less padding on smaller screens */
        }

        h2 {
            font-size: 1.5rem; /* Slightly smaller title */
        }

        input {
            padding: 0.7rem; /* Less padding in inputs */
        }

        button {
            padding: 0.7rem 1.2rem; /* Less padding in button */
        }
    }
</style>
