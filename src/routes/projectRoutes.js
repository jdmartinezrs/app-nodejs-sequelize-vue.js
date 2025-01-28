// src/routes/projectRoutes.js
const express = require('express');
const projectController = require('../controllers/projectController');
const authMiddleware = require('../middlewares/authMiddleware'); // Importar middleware

const router = express.Router();

// Rutas protegidas
router.get('/info', authMiddleware, projectController.getAllProjects);
router.get('/:id', authMiddleware, projectController.getProjectById);
router.post('/', authMiddleware, projectController.createProject);
router.put('/:id', authMiddleware, projectController.updateProject);
router.delete('/:id', authMiddleware, projectController.deleteProject);

module.exports = router;