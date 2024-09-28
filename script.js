
export default defineConfig(({ command }) => {
    const isProduction = command === 'build';
    return {
        plugins: [svelte()],
        base: isProduction ? '/Phantasma-Dashboard/' : '/',
    };
});
document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('You have successfully registered for the event!');
});

document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Login successful!');
});

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Your message has been sent!');
});
