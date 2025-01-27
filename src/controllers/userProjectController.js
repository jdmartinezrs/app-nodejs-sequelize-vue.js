// src/controllers/userProjectController.js
const userProjectService = require('../services/userProjectService');

const userProjectController = {
  async assignUserToProject(req, res) {
    try {
      const { userId, projectId } = req.body;
      const assignment = await userProjectService.assignUserToProject(userId, projectId);
      res.status(201).json(assignment);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getProjectsByUser(req, res) {
    try {
      const projects = await userProjectService.getProjectsByUser(req.params.userId);
      res.json(projects);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getUsersByProject(req, res) {
    try {
      const users = await userProjectService.getUsersByProject(req.params.projectId);
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async removeUserFromProject(req, res) {
    try {
      const { userId, projectId } = req.body;
      const result = await userProjectService.removeUserFromProject(userId, projectId);
      if (result) {
        res.status(204).send();
      } else {
        res.status(404).json({ error: 'Assignment not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = userProjectController;