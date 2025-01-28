const { Project, User } = require('../models');

class ProjectRepository {
  async findAll() {
    try {
      const projects = await Project.findAll({
        include: [
          {
            model: User,
            as: 'users', // Incluir la asociación con User
          },
        ],
      });
      return projects;
    } catch (error) {
      throw error;
    }
  }

  async findById(id) {
    try {
      const project = await Project.findByPk(id, {
        include: [
          {
            model: User,
            as: 'users', // Incluir la asociación con User
          },
        ],
      });
      console.log("Project found by ID:", project); // Para depuración
      return project;
    } catch (error) {
      console.error("Error fetching project by ID:", error);
      throw error;
    }
  }

  async create(projectData) {
    return await Project.create(projectData);
  }

  async update(id, projectData) {
    const project = await Project.findByPk(id);
    if (project) {
      return await project.update(projectData);
    }
    return null;
  }

  async delete(id) {
    const project = await Project.findByPk(id);
    if (project) {
      return await project.destroy();
    }
    return null;
  }
}

// Crea la instancia del repositorio después de la definición de la clase
const projectRepository = new ProjectRepository();

// Exporta la instancia para su uso en otros archivos
module.exports = projectRepository;
