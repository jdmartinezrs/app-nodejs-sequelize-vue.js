// seed.js
const sequelize = require('./src/config/db'); // Importar sequelize
const { User, Project, Team, UserProject } = require('./src/models');

async function seedData() {
  try {
    // Sincronizar modelos con la base de datos
    await sequelize.sync({ force: true }); // ¡Cuidado! Esto borrará todas las tablas y las recreará.

    // Insertar un equipo
    const team = await Team.create({
      name: 'BucaramangaBreaks',
      description: 'Diggin collectors of break music',
    });

    // Insertar un usuario
    const user = await User.create({
      firstName: 'bboy',
      lastName: 'breaks',
      email: 'breaks10.com',
      teamId: team.id, // Asignar el usuario al equipo
    });

    // Insertar un proyecto
    const project = await Project.create({
      name: 'New Break Mixtape 2025',
      description: 'To find colombian breaks in order to loop it',
    });

    // Asociar el usuario al proyecto
    await UserProject.create({
      userId: user.id,
      projectId: project.id,
    });

    console.log('Data inserted successfully!');
  } catch (error) {
    console.error('Error inserting data:', error);
  } finally {
    process.exit(); // Terminar el proceso
  }
}

seedData();