document.addEventListener('DOMContentLoaded', () => {
    const token = localStorage.getItem('token');
    if (!token) {
        window.location.href = '/login';
        return;
    }

    const tableBody = document.querySelector('#users-table tbody');
    const logoutBtn = document.getElementById('logout-btn');

    // Función para cerrar sesión
    logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('token');
        window.location.href = '/login';
    });

    // Función para obtener y mostrar usuarios
    const fetchUsers = async () => {
        try {
            const response = await fetch('/api/admin/users', {
                headers: { 'Authorization': `Bearer ${token}` }
            });

            if (response.status === 403) {
                // Si no es admin, redirigir a la app principal
                window.location.href = '/app';
                return;
            }

            if (!response.ok) {
                throw new Error('No se pudo obtener la lista de usuarios.');
            }

            const users = await response.json();
            displayUsers(users);

        } catch (error) {
            console.error('Error:', error);
            alert(error.message);
        }
    };

    // Función para mostrar los usuarios en la tabla
    const displayUsers = (users) => {
        tableBody.innerHTML = ''; // Limpiar la tabla
        users.forEach(user => {
            if (user.role === 'admin') return; // No mostrar al admin en la lista

            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.username}</td>
                <td><span class="status-${user.status}">${user.status}</span></td>
                <td>
                    ${user.status === 'pending' ? `
                        <button class="action-btn approve-btn" data-username="${user.username}">Aprobar</button>
                        <button class="action-btn reject-btn" data-username="${user.username}">Rechazar</button>
                    ` : 'N/A'}
                </td>
            `;
            tableBody.appendChild(row);
        });
    };

    // Función para manejar acciones (aprobar/rechazar)
    const handleUserAction = async (username, action) => {
        try {
            const response = await fetch(`/api/admin/${action}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ username })
            });

            if (!response.ok) {
                throw new Error(`Error al ${action === 'approve' ? 'aprobar' : 'rechazar'} el usuario.`);
            }

            // Recargar la lista de usuarios para reflejar el cambio
            fetchUsers();

        } catch (error) {
            console.error('Error:', error);
            alert(error.message);
        }
    };

    // Añadir event listeners a los botones de la tabla
    tableBody.addEventListener('click', (e) => {
        if (e.target.classList.contains('approve-btn')) {
            const username = e.target.dataset.username;
            handleUserAction(username, 'approve');
        }
        if (e.target.classList.contains('reject-btn')) {
            const username = e.target.dataset.username;
            handleUserAction(username, 'reject');
        }
    });

    // Carga inicial de usuarios
    fetchUsers();
});
