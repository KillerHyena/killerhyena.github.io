// Vite configuration
import { defineConfig } from 'vite';
import svelte from '@sveltejs/vite-plugin-svelte';

export default defineConfig(({ command }) => {
    const isProduction = command === 'build';
    return {
        plugins: [svelte()],
        base: isProduction ? '/Phantasma-Dashboard/' : '/',
    };
});

// Wait for the DOM to load before attaching event listeners
document.addEventListener('DOMContentLoaded', function () {
    // Hamburger menu toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Function to handle form submissions
    function handleFormSubmit(formId, successMessage) {
        const form = document.getElementById(formId);
        if (form) {
            form.addEventListener('submit', function (e) {
                e.preventDefault();
                const submitButton = form.querySelector('button[type="submit"]');
                submitButton.textContent = successMessage;
                submitButton.disabled = true; // Disable the button after submission
            });
        }
    }

    // Handle registration, login, and contact form submissions
    handleFormSubmit('registrationForm', 'Registration Completed');
    handleFormSubmit('loginForm', 'Login Completed');
    handleFormSubmit('contactForm', 'Message Sent');
});
