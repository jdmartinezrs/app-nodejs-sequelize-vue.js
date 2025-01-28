// src/controllers/projectController.js
const projectService = require('../services/projectService');

const projectController = {
  async getAllProjects(req, res) {
    try {
      const projects = await projectService.getAllProjects();
      if (projects && projects.length > 0) {
        res.json(projects);
      } else {
        res.status(404).json({ error: 'No projects found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getProjectById(req, res) {
    try {
      const project = await projectService.getProjectById(req.params.id);
      if (project) {
        res.json(project);
      } else {
        res.status(404).json({ error: 'Project not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async createProject(req, res) {
    try {
      const newProject = await projectService.createProject(req.body);
      res.status(201).json(newProject);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async updateProject(req, res) {
    try {
      const updatedProject = await projectService.updateProject(req.params.id, req.body);
      if (updatedProject) {
        res.json(updatedProject);
      } else {
        res.status(404).json({ error: 'Project not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async deleteProject(req, res) {
    try {
      const result = await projectService.deleteProject(req.params.id);
      if (result) {
        res.status(204).send();
      } else {
        res.status(404).json({ error: 'Project not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = projectController;