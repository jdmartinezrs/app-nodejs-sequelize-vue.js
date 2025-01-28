// src/routes/teamRoutes.js
const express = require('express');
const teamController = require('../controllers/teamController');  // Importar controlador
const authMiddleware = require('../middlewares/authMiddleware');  // Asegúrate de importar el middleware de autenticación si lo estás usando

const router = express.Router();

// Definir rutas para Team
router.get('/info', authMiddleware, teamController.getAllTeams);
router.get('/:id', authMiddleware, teamController.getTeamById);
router.post('/', authMiddleware, teamController.createTeam);
router.put('/:id', authMiddleware, teamController.updateTeam);
router.delete('/:id', authMiddleware, teamController.deleteTeam);

module.exports = router;
