// src/routes/teamRoutes.js
const express = require('express');
const teamController = require('../controllers/teamController');

const router = express.Router();

// Definir rutas para Team
router.get('/info', teamController.getAllTeams);
router.get('/:id', teamController.getTeamById);
router.post('/', teamController.createTeam);
router.put('/:id', teamController.updateTeam);
router.delete('/:id', teamController.deleteTeam);

module.exports = router;