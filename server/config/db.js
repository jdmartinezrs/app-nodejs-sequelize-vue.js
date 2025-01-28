// src/config/db.js
const { Sequelize } = require('sequelize');
const config = require('./config'); // Archivo de configuración con las credenciales

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: 'mysql', // o 'postgres', 'sqlite', 'mssql'
  logging: false, // Desactiva los logs de Sequelize en consola
});

module.exports = sequelize; // Exportar sequelize directamente