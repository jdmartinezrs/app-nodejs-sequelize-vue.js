// src/app.js
const express = require('express');
const userRoutes = require('./routes/userRoutes');
const teamRoutes = require('./routes/teamRoutes');
const projectRoutes = require('./routes/projectRoutes');
const userProjectRoutes = require('./routes/userProjectRoutes'); 
const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use('/users', userRoutes);
app.use('/teams', teamRoutes);
app.use('/projects', projectRoutes);
app.use('/user-projects', userProjectRoutes);

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT,'localhost', () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});