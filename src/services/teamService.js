// src/services/teamService.js
const teamRepository = require('../repositories/teamRepository');

class TeamService {
  async getAllTeams() {
    return await teamRepository.findAll();
  }

  async getTeamById(id) {
    return await teamRepository.findById(id);
  }

  async createTeam(teamData) {
    return await teamRepository.create(teamData);
  }

  async updateTeam(id, teamData) {
    return await teamRepository.update(id, teamData);
  }

  async deleteTeam(id) {
    return await teamRepository.delete(id);
  }
}

module.exports = new TeamService();