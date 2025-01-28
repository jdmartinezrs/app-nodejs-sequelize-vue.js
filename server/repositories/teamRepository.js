// src/repositories/teamRepository.js
const { Team, User } = require('../models');

class TeamRepository {
  async findAll() {
    try {
      const teams = await Team.findAll({
        include: [
          {
            model: User,
            as: 'users',
          },
        ],
      });
  
      console.log("Teams retrieved:", teams);  // Para ver qué datos se obtienen
      return teams;
    } catch (error) {
      console.error("Error fetching teams:", error);
      throw error;
    }
  }

  async findById(id) {
    try {
      const team = await Team.findByPk(id, {
        include: [
          {
            model: User,
            as: 'users',
          },
        ],
      });
      console.log("Team found by ID:", team);  // Para verificar que el ID se está buscando correctamente
      return team;
    } catch (error) {
      console.error("Error fetching team by ID:", error);
      throw error;
    }
  }

  async create(teamData) {
    return await Team.create(teamData);
  }

  async update(id, teamData) {
    const team = await Team.findByPk(id);
    if (team) {
      return await team.update(teamData);
    }
    return null;
  }

  async delete(id) {
    const team = await Team.findByPk(id);
    if (team) {
      return await team.destroy();
    }
    return null;
  }
}

module.exports = new TeamRepository();
