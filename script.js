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

    // Event listener for hamburger menu
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Registration Form
    const registrationForm = document.getElementById('registrationForm');
    if (registrationForm) {
        registrationForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const submitButton = registrationForm.querySelector('button[type="submit"]');
            submitButton.textContent = 'Registration Completed';
            submitButton.disabled = true; // Optional: Disable the button after submission
        });
    }

    // Login Form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const submitButton = loginForm.querySelector('button[type="submit"]');
            submitButton.textContent = 'Login Completed';
            submitButton.disabled = true; // Optional: Disable the button after submission
        });
    }

    // Contact Form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const submitButton = contactForm.querySelector('button[type="submit"]');
            submitButton.textContent = 'Message Sent';
            submitButton.disabled = true; // Optional: Disable the button after submission
        });
    }
});
