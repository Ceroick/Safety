const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 3000;
const JWT_SECRET = 'mi_secreto_super_secreto_para_jwt'; // En una app real, esto debería estar en una variable de entorno

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '')));

// Helpers para leer/escribir en la base de datos de usuarios
const usersDbPath = path.join(__dirname, 'users.json');

const readUsers = () => {
    try {
        const usersData = fs.readFileSync(usersDbPath);
        return JSON.parse(usersData);
    } catch (error) {
        // Si el archivo no existe, lo creamos con un array vacío
        if (error.code === 'ENOENT') {
            writeUsers([]);
            return [];
        }
        throw error;
    }
};

const writeUsers = (users) => {
    fs.writeFileSync(usersDbPath, JSON.stringify(users, null, 2));
};

// Middleware de Autenticación y Autorización
const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'No se proveyó un token.' });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Token inválido.' });
    }
};

const adminMiddleware = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ message: 'Acceso denegado. Se requiere rol de administrador.' });
    }
    next();
};


// --- API de Autenticación ---

app.post('/api/register', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ message: 'Usuario y contraseña son requeridos.' });
    }

    const users = readUsers();
    if (users.find(u => u.username === username)) {
        return res.status(400).json({ message: 'El nombre de usuario ya existe.' });
    }

    const passwordHash = bcrypt.hashSync(password, 10);
    const newUser = { username, passwordHash, role: 'user', status: 'pending' };
    users.push(newUser);
    writeUsers(users);

    res.status(201).json({ message: 'Registro exitoso. Tu cuenta está pendiente de aprobación.' });
});

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    const users = readUsers();
    const user = users.find(u => u.username === username);

    if (!user || !bcrypt.compareSync(password, user.passwordHash)) {
        return res.status(401).json({ message: 'Credenciales incorrectas.' });
    }

    if (user.status !== 'approved') {
        return res.status(403).json({ message: 'Tu cuenta aún no ha sido aprobada.' });
    }

    const token = jwt.sign({ username: user.username, role: user.role }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token, role: user.role });
});


// --- API de Administración (Protegida) ---

app.get('/api/admin/users', authMiddleware, adminMiddleware, (req, res) => {
    const users = readUsers();
    res.json(users);
});

app.post('/api/admin/approve', authMiddleware, adminMiddleware, (req, res) => {
    const { username } = req.body;
    const users = readUsers();
    const user = users.find(u => u.username === username);

    if (user) {
        user.status = 'approved';
        writeUsers(users);
        res.json({ message: `Usuario ${username} aprobado.` });
    } else {
        res.status(404).json({ message: 'Usuario no encontrado.' });
    }
});

app.post('/api/admin/reject', authMiddleware, adminMiddleware, (req, res) => {
    const { username } = req.body;
    let users = readUsers();
    const initialLength = users.length;
    users = users.filter(u => u.username !== username);

    if (users.length < initialLength) {
        writeUsers(users);
        res.json({ message: `Usuario ${username} rechazado y eliminado.` });
    } else {
        res.status(404).json({ message: 'Usuario no encontrado.' });
    }
});


// --- Rutas del Frontend ---

// Servir archivos estáticos (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Rutas para servir las páginas
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'login.html')));
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, 'login.html')));
app.get('/register', (req, res) => res.sendFile(path.join(__dirname, 'register.html')));
app.get('/app', (req, res) => res.sendFile(path.join(__dirname, 'index.html'))); // La app principal
app.get('/admin', (req, res) => res.sendFile(path.join(__dirname, 'admin.html'))); // Panel de admin


// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
