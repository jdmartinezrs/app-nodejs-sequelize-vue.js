module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING,
    teamId: DataTypes.INTEGER
  });

  User.associate = function(models) {
    User.belongsTo(models.Team, { foreignKey: 'teamId' });
    User.belongsToMany(models.Project, { 
      through: models.UserProject,
      foreignKey: 'userId',
      otherKey: 'projectId'
    });
  };

  return User;
};