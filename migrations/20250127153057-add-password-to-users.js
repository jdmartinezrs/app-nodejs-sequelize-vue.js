'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Users', 'password', {
      type: Sequelize.STRING,
      allowNull: false,  // Asegúrate de que no sea null por razones de seguridad
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Users', 'password');
  }
};
