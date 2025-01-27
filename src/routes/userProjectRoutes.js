// src/routes/userProjectRoutes.js
const express = require('express');
const userProjectController = require('../controllers/userProjectController');

const router = express.Router();

// Definir rutas para UserProject
router.post('/assign', userProjectController.assignUserToProject);
router.get('/user/:userId', userProjectController.getProjectsByUser);
router.get('/project/:projectId', userProjectController.getUsersByProject);
router.delete('/remove', userProjectController.removeUserFromProject);

module.exports = router;