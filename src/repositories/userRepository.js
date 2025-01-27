// src/repositories/userRepository.js
const { User } = require('../models');

class UserRepository {
    async findAll() {
        const users = await User.findAll();
        console.log('Users:', users); // Verifica qué se obtiene de la base de datos
        return users;
      }

  async findById(id) {
    return await User.findByPk(id);
  }

  async create(userData) {
    return await User.create(userData);
  }

  async update(id, userData) {
    const user = await User.findByPk(id);
    if (user) {
      return await user.update(userData);
    }
    return null;
  }

  async delete(id) {
    const user = await User.findByPk(id);
    if (user) {
      return await user.destroy();
    }
    return null;
  }
}

module.exports = new UserRepository();