const sequelize = require('./server/config/db');
const { User, Project, Team, UserProject } = require('./server/models');
const bcrypt = require('bcryptjs');

async function seedData() {
  try {
    // Sincronizar modelos con la base de datos
    await sequelize.sync({ force: true });

    // Insertar un equipo
    const team = await Team.create({
      name: 'MedellínCrafters',
      description: 'Digital creators and developers',
    });

    // Insertar un usuario con contraseña encriptada
    const password = await bcrypt.hash('password123', 10);
    console.log('Password hash:', password);

    const user = await User.create({
      firstName: 'Alex',
      lastName: 'Ramirez',
      email: 'alex@mail.com',
      password: password,
      teamId: team.id,
    });

    // Insertar un proyecto
    const project = await Project.create({
      name: 'E-commerce Platform 2025',
      description: 'Building a modern e-commerce solution for local businesses',
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