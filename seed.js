const sequelize = require('./src/config/db');
const { User, Project, Team, UserProject } = require('./src/models');
const bcrypt = require('bcryptjs');

async function seedData() {
  try {
    // Sincronizar modelos con la base de datos
    await sequelize.sync({ force: true });

    // Insertar un equipo
    const team = await Team.create({
      name: 'BucaramangaBreaks',
      description: 'Diggin collectors of break music',
    });

    // Insertar un usuario con contraseña encriptada
    const password = await bcrypt.hash('password123', 10);
    console.log('Password hash:', password);

    const user = await User.create({
      firstName: 'bboy',
      lastName: 'breaks',
      email: 'breaks10.com',
      password: password,
      teamId: team.id,
    });

    // Insertar un proyecto
    const project = await Project.create({
      name: 'New Break Mixtape 2025',
      description: 'To find colombian breaks in order to loop it',
    });

    // Asociar el usuario al proyecto
    await user.addProject(project);

    console.log('Data inserted successfully!');
    console.log('User created:', {
      id: user.id,
      email: user.email,
      passwordHash: user.password
    });
  } catch (error) {
    console.error('Error inserting data:', error);
  } finally {
    process.exit();
  }
}

seedData();