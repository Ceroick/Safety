document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('login-form');
    const messageElement = document.getElementById('message');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const username = form.username.value;
        const password = form.password.value;
        messageElement.textContent = ''; // Limpiar mensaje previo

        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Error al iniciar sesión.');
            }

            // Guardar el token y redirigir
            localStorage.setItem('token', data.token);

            // Redirigir al panel de admin si el rol es 'admin', sino a la app principal
            if (data.role === 'admin') {
                window.location.href = '/admin';
            } else {
                window.location.href = '/app';
            }

        } catch (error) {
            messageElement.textContent = error.message;
        }
    });
});
