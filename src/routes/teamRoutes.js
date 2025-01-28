// src/routes/teamRoutes.js
const express = require('express');
const teamController = require('../controllers/teamController');
const authMiddleware = require('../middlewares/authMiddleware'); // Importar middleware

const router = express.Router();

// Definir rutas para Team
router.get('/info',authMiddleware, teamController.getAllTeams);
router.get('/:id',authMiddleware, teamController.getTeamById);
router.post('/',authMiddleware, teamController.createTeam);
router.put('/:id',authMiddleware, teamController.updateTeam);
router.delete('/:id',authMiddleware, teamController.deleteTeam);

module.exports = router;