// src/routes/userProjectRoutes.js
const express = require('express');
const userProjectController = require('../controllers/userProjectController');
const authMiddleware = require('../middlewares/authMiddleware'); // Importar middleware

const router = express.Router();

// Definir rutas para UserProject
router.post('/assign',authMiddleware, userProjectController.assignUserToProject);
router.get('/user/:userId',authMiddleware, userProjectController.getProjectsByUser);
router.get('/project/:projectId',authMiddleware, userProjectController.getUsersByProject);
router.delete('/remove',authMiddleware, userProjectController.removeUserFromProject);

module.exports = router;