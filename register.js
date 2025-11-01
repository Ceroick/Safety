document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('register-form');
    const messageElement = document.getElementById('message');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const username = form.username.value;
        const password = form.password.value;
        messageElement.textContent = ''; // Limpiar mensaje previo

        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Error al registrar la cuenta.');
            }

            // Mostrar mensaje de éxito y sugerir esperar la aprobación
            messageElement.style.color = 'var(--accent-color)'; // Cambiar a color de éxito
            messageElement.textContent = data.message;
            form.reset(); // Limpiar el formulario

        } catch (error) {
            messageElement.style.color = 'var(--error-color)'; // Asegurar color de error
            messageElement.textContent = error.message;
        }
    });
});
