// src/models/team.js
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Team = sequelize.define('Team', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  });

  Team.associate = function(models) {
    Team.hasMany(models.User, {
      foreignKey: 'teamId',
      as: 'users'
    });
  };

  return Team;
};