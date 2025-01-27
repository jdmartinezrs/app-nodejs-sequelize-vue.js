// src/config/config.js
require('dotenv').config(); // Cargar variables de entorno desde .env

module.exports = {
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
};