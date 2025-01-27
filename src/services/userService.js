// src/services/userService.js
const userRepository = require('../repositories/userRepository');

class UserService {
    async getAllUsers() {
        const users = await userRepository.findAll();
        console.log('Users in service:', users); // Depuración
        return users;
      }
      

  async getUserById(id) {
    return await userRepository.findById(id);
  }

  async createUser(userData) {
    return await userRepository.create(userData);
  }

  async updateUser(id, userData) {
    return await userRepository.update(id, userData);
  }

  async deleteUser(id) {
    return await userRepository.delete(id);
  }
}

module.exports = new UserService();