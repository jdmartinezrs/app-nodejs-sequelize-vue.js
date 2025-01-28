// src/repositories/userProjectRepository.js
const { UserProject } = require('../models');

class UserProjectRepository {
  async create(userProjectData) {
    return await UserProject.create(userProjectData);
  }

  async findByUserId(userId) {
    return await UserProject.findAll({ where: { userId } });
  }

  async findByProjectId(projectId) {
    return await UserProject.findAll({ where: { projectId } });
  }

  async delete(userId, projectId) {
    return await UserProject.destroy({ where: { userId, projectId } });
  }
}

module.exports = new UserProjectRepository();