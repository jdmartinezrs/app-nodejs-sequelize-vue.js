const { User } = require('../models');

class UserRepository {
  async findAll() {
    return await User.findAll();
  }

  async findById(id) {
    return await User.findByPk(id);
  }

  async findByEmail(email) {
    return await User.findOne({ where: { email } });
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
      await user.destroy();
      return true;
    }
    return false;
  }
}

// Cambia la forma de exportar
const userRepository = new UserRepository();
module.exports = userRepository;