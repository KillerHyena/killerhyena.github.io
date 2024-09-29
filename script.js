// Correct the Vite configuration
import { defineConfig } from 'vite';
import svelte from '@sveltejs/vite-plugin-svelte';

export default defineConfig(({ command }) => {
    const isProduction = command === 'build';
    return {
        plugins: [svelte()],
        base: isProduction ? '/Phantasma-Dashboard/' : '/',
    };
});

// Smooth scroll behavior for navigation links
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('header nav ul li a');
    const headerHeight = document.querySelector('header').offsetHeight; // Get header height

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href'); // Get target section ID
            const targetElement = document.querySelector(targetId); // Get target element

            if (targetElement) {
                // Scroll to target element, adjusting for header height
                window.scrollTo({
                    top: targetElement.offsetTop - headerHeight, // Subtract header height
                    behavior: 'smooth' // Smooth scroll effect
                });
            }
        });
    });

    // Form submission event listeners
    document.getElementById('registrationForm').addEventListener('submit', function (e) {
        e.preventDefault();
        alert('You have successfully registered for the event!'); // Feedback on successful registration
    });

    document.getElementById('loginForm').addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Login successful!'); // Feedback on successful login
    });

    document.getElementById('contactForm').addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Your message has been sent!'); // Feedback on successful message send
    });
});
