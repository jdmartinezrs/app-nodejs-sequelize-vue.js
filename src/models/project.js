module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  });

  Project.associate = function(models) {
    Project.belongsToMany(models.User, { 
      through: models.UserProject,
      foreignKey: 'projectId',
      otherKey: 'userId',
      as: 'users'  // Este es el alias que debe usarse
    });
  
    
  };

  return Project;
};