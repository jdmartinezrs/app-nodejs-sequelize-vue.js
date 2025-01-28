// src/services/projectService.js
const projectRepository = require('../repositories/projectRepository');

class ProjectService {
  async getAllProjects() {
    try {
      const projects = await projectRepository.findAll();
      console.log('Projects retrieved in service:', projects); // Verificar datos aquí
      return projects;
    } catch (error) {
      throw error;
    }
  }
  

  async getProjectById(id) {
    try {
      const project = await projectRepository.findById(id);
      return project;
    } catch (error) {
      console.error("Error in service while fetching project by ID:", error);
      throw error;
    }
  }

  async createProject(projectData) {
    return await projectRepository.create(projectData);
  }

  async updateProject(id, projectData) {
    return await projectRepository.update(id, projectData);
  }

  async deleteProject(id) {
    return await projectRepository.delete(id);
  }
}

module.exports = new ProjectService();