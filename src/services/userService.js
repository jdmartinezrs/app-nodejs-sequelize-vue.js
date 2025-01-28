// Asegúrate de que la ruta sea correcta según tu estructura de archivos
const userRepository = require('../repositories/userRepository');
const bcrypt = require('bcryptjs');

const userService = {
  async getAllUsers() {
    try {
      return await userRepository.findAll();
    } catch (error) {
      throw new Error(error.message);
    }
  },

  async createUser({ firstName, lastName, email, password, teamId }) {
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      return await userRepository.create({ 
        firstName, 
        lastName, 
        email, 
        password: hashedPassword, 
        teamId 
      });
    } catch (error) {
      throw new Error(error.message);
    }
  },

  async getUserByEmail(email) {
    try {
      return await userRepository.findByEmail(email);
    } catch (error) {
      throw new Error(error.message);
    }
  },

  async getUserById(id) {
    try {
      return await userRepository.findById(id);
    } catch (error) {
      throw new Error(error.message);
    }
  },

  async updateUser(id, data) {
    try {
      return await userRepository.update(id, data);
    } catch (error) {
      throw new Error(error.message);
    }
  },

  async deleteUser(id) {
    try {
      return await userRepository.delete(id);
    } catch (error) {
      throw new Error(error.message);
    }
  }
};

module.exports = userService;