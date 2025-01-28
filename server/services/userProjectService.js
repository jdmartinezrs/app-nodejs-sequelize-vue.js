// src/services/userProjectService.js
const userProjectRepository = require('../repositories/userProjectRepository');

class UserProjectService {
  async assignUserToProject(userId, projectId) {
    return await userProjectRepository.create({ userId, projectId });
  }

  async getProjectsByUser(userId) {
    return await userProjectRepository.findByUserId(userId);
  }

  async getUsersByProject(projectId) {
    return await userProjectRepository.findByProjectId(projectId);
  }

  async removeUserFromProject(userId, projectId) {
    return await userProjectRepository.delete(userId, projectId);
  }
}

module.exports = new UserProjectService();