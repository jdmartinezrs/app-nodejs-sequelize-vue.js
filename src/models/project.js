// src/models/project.js
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  });

  Project.associate = function(models) {
    Project.belongsToMany(models.User, {
      through: models.UserProject, // Asegúrate de que esta tabla exista
      as: 'users',
      foreignKey: 'projectId'
    });
  };

  return Project;
};