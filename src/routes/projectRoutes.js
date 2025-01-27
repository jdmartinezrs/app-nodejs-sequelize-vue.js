// src/routes/projectRoutes.js
const express = require('express');
const projectController = require('../controllers/projectController');

const router = express.Router();

// Definir rutas para Project
router.get('/info', projectController.getAllProjects);
router.get('/:id', projectController.getProjectById);
router.post('/', projectController.createProject);
router.put('/:id', projectController.updateProject);
router.delete('/:id', projectController.deleteProject);

module.exports = router;