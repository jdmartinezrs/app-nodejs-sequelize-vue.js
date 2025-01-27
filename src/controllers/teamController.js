// src/controllers/teamController.js
const teamService = require('../services/teamService');

const teamController = {
  async getAllTeams(req, res) {
    try {
      console.log("Fetching all teams...");
      const teams = await teamService.getAllTeams();
      console.log("Teams fetched:", teams);

      if (teams && teams.length > 0) {
        res.json(teams);
      } else {
        res.status(404).json({ error: 'No teams found' });
      }
    } catch (error) {
      console.error("Error in getAllTeams:", error);
      res.status(500).json({ error: error.message });
    }
  },

  async getTeamById(req, res) {
    try {
      const team = await teamService.getTeamById(req.params.id);
      if (team) {
        res.json(team);
      } else {
        res.status(404).json({ error: 'Team not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async createTeam(req, res) {
    try {
      const newTeam = await teamService.createTeam(req.body);
      res.status(201).json(newTeam);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async updateTeam(req, res) {
    try {
      const updatedTeam = await teamService.updateTeam(req.params.id, req.body);
      if (updatedTeam) {
        res.json(updatedTeam);
      } else {
        res.status(404).json({ error: 'Team not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async deleteTeam(req, res) {
    try {
      const result = await teamService.deleteTeam(req.params.id);
      if (result) {
        res.status(204).send();
      } else {
        res.status(404).json({ error: 'Team not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = teamController;