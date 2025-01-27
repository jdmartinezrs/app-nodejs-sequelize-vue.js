'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    teamId: DataTypes.INTEGER
  });

  User.associate = function(models) {
    User.belongsTo(models.Team, {
      foreignKey: 'teamId',
      as: 'team'
    });

    User.belongsToMany(models.Project, {
      through: models.UserProject,
      as: 'projects',
      foreignKey: 'userId'
    });
  };

  return User;
};
